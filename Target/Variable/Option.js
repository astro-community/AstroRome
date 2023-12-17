var e = (await import("typescript-esbuild/Target/Function/Merge.js")).default(
	(await import("files-pipe/Target/Variable/Option.js")).default,
	{
		Rome: (await import("./Rome.js")).default,
		Action: {
			Failed: async ({ Input: t }) => `Error: Cannot format file ${t}!`,
			Accomplished: async ({ Input: t, Output: a }) =>
				`Formatted ${t} in ${a}.`,
			Fulfilled: async ({ Files: t }) =>
				t > 0
					? `Successfully formatted a total of ${t} JavaScript and TypeScript ${
							t === 1 ? "file" : "files"
					  }.`
					: !1,
		},
	},
);
export { e as default };
