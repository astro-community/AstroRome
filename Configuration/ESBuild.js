export default {
    color: true,
    format: "esm",
    metafile: true,
    minify: true,
    outdir: "Target",
    platform: "node",
    target: "esnext",
    write: true,
    logLevel: "debug",
    plugins: [
        {
            name: "Target",
            setup({ onStart, initialOptions: { outdir } }) {
                onStart(async () => {
                    try {
                        outdir
                            ? await (await import("fs/promises")).rm(outdir, {
                                recursive: true,
                            })
                            : {};
                    }
                    catch (_Error) { }
                });
            },
        },
        (await import("esbuild-plugin-copy")).copy({
            resolveFrom: "out",
            assets: [
                {
                    from: "./Source/Notation/rome.json",
                    to: "./Notation/",
                },
            ],
        }),
    ],
    define: {
        "process.env.VERSION_PACKAGE": `'${(await (await import("typescript-esbuild/Target/Function/JSON.js")).default("package.json"))?.version}'`,
    },
};
