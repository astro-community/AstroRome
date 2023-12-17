/**
 * @module Option
 *
 */
declare const _default: Omit<
	{} & {
		Rome: Type;
		Files: string;
		Action: Omit<
			{} & {
				Failed: ({
					Input,
				}: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
				Accomplished: ({
					Input,
					Output,
				}: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
				Fulfilled: ({
					Files,
				}: import("files-pipe/Target/Interface/Plan.js").default) => Promise<
					string | false
				>;
				Read: ({
					Input,
				}: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
				Wrote: ({
					Buffer,
				}: import("files-pipe/Target/Interface/File.js").default) => Promise<
					import("files-pipe/Target/Type/Buffer.js").Type
				>;
				Passed: (
					On: import("files-pipe/Target/Interface/File.js").default,
				) => Promise<true>;
				Changed: (
					Plan: import("files-pipe/Target/Interface/Plan.js").default,
				) => Promise<
					import("files-pipe/Target/Interface/Plan.js").default
				>;
			},
			"__proto__"
		>;
		Cache: {
			Search: string;
			Folder: string;
		};
		Path: string;
		Logger: 2;
		Exclude: false;
	},
	"__proto__"
>;
export default _default;
