/**
 * @module Option
 *
 */
export default (
	await import("typescript-esbuild/Target/Function/Merge.js")
).default((await import("files-pipe/Target/Variable/Option.js")).default, {
	Rome: (await import("./Rome.js")).default,
	Action: {
		Failed: async ({ Input }) => `Error: Cannot format file ${Input}!`,
		Accomplished: async ({ Input, Output }) =>
			`Formatted ${Input} in ${Output}.`,
		Fulfilled: async ({ File }) =>
			File > 0
				? `Successfully formatted a total of ${File} JavaScript and TypeScript ${
						File === 1 ? "file" : "files"
				  }.`
				: false,
	},
} satisfies Type);

import type Type from "../Interface/Option.js";
