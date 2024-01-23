/**
 * @module Configuration
 *
 */
export default (async (...[File]: Parameters<Type>) => {
	try {
		return (
			await readFile(
				resolve(`${(await import("node:process")).cwd()}/${File}`),
				"utf-8",
			)
		).toString();
	} catch (_Error) {
		return (
			await readFile(
				resolve(
					`${(
						await import("node:path")
					).dirname(
						(
							await import("node:url")
						).fileURLToPath(import.meta.url),
					)}/../Notation/${File}`,
				),
				"utf-8",
			)
		).toString();
	}
}) satisfies Type as Type;

import type Type from "../Interface/Configuration.js";

export const { readFile } = await import("node:fs/promises");

export const { resolve } = await import("node:path");
