/**
 * @module Integration
 *
 */
export default ((...[_Option = {}]: Parameters<Type>) => {
	Object.entries(_Option).forEach(([Key, Value]) =>
		Object.defineProperty(_Option, Key, {
			value:
				Value === true
					? Default[Key as keyof typeof Default]
					: _Option[Key as keyof typeof _Option],
		}),
	);

	const { Path, Cache, Logger, Exclude, Action, Rome } = Merge(
		Default,
		_Option,
	);

	const Paths = new Set<Path>();

	if (typeof Path !== "undefined") {
		if (Array.isArray(Path) || Path instanceof Set) {
			for (const _Path of Path) {
				Paths.add(_Path);
			}
		}
	}

	return {
		name: "astro-rome",
		hooks: {
			"astro:build:done": async ({ dir: Dir }) => {
				if (!Paths.size) {
					Paths.add(Dir);
				}

				const _Rome = await (
					await import("@rometools/js-api")
				).Rome.create({
					distribution: (await import("@rometools/js-api"))
						.Distribution.NODE,
				});

				const _Action = Merge(Action, {
					Wrote: async (On) => {
						try {
							return _Rome.formatContent(On.Buffer.toString(), {
								filePath: (await import("node:path")).resolve(
									On.Input,
								),
							}).content;
						} catch (_Error) {
							return On.Buffer;
						}
					},
				} satisfies Action);

				try {
					if (typeof Rome === "object" && _Rome) {
						// @ts-ignore
						Rome["$schema"] = undefined;
						_Rome.applyConfiguration(Rome);
					}
				} catch (_Error) {
					console.log(_Error);
				}

				for (const Path of Paths) {
					await (
						await (
							await (
								await new (
									await import("files-pipe")
								).default(Cache, Logger).In(Path)
							).By("**/*.{js,mjs,cjs,ts}")
						).Not(Exclude)
					).Pipe(_Action);
				}
			},
		},
	};
}) satisfies Type as Type;

import type Type from "../Interface/Integration.js";

import type Action from "files-pipe/Target/Interface/Action.js";
import type Path from "files-pipe/Target/Type/Path.js";

export const { default: Default } = await import("../Variable/Option.js");

export const { default: Merge } = await import(
	"typescript-esbuild/Target/Function/Merge.js"
);
