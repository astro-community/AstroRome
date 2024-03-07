/**
 * @module Option
 *
 */
declare const _default: Omit<{} & {
    Rome: Type;
    Files: string;
    Action: Omit<{} & {
        Failed: ({ Input }: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Accomplished: ({ Input, Output }: import("files-pipe/Target/Interface/File.js").default) => Promise<string>;
        Fulfilled: ({ Files }: import("files-pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
        Read: ({ Input }: any) => Promise<string>;
        Wrote: ({ Buffer }: any) => Promise<any>;
        Passed: (On: any) => Promise<true>;
        Changed: (Plan: any) => Promise<any>;
    }, "__proto__">;
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Logger: 2;
    Exclude: false;
}, "__proto__">;
export default _default;
