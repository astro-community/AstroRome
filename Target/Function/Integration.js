var l = (...[e = {}]) => {
	for (const t in e)
		Object.prototype.hasOwnProperty.call(e, t) &&
			e[t] === !0 &&
			(e[t] = s[t]);
	const {
			Path: o,
			Cache: p,
			Logger: c,
			Exclude: m,
			Action: y,
			Rome: i,
		} = f(s, e),
		r = new Set();
	if (typeof o < "u" && (Array.isArray(o) || o instanceof Set))
		for (const t of o) r.add(t);
	return {
		name: "astro-rome",
		hooks: {
			"astro:build:done": async ({ dir: t }) => {
				r.size || r.add(t);
				const n = await (await import("@rometools/js-api")).Rome.create(
						{
							distribution: (await import("@rometools/js-api"))
								.Distribution.NODE,
						},
					),
					u = f(y, {
						Wrote: async (a) => {
							try {
								return n.formatContent(a.Buffer.toString(), {
									filePath: (await import("path")).resolve(
										a.Input,
									),
								}).content;
							} catch {
								return a.Buffer;
							}
						},
					});
				typeof i == "object" &&
					n &&
					((i.$schema = void 0), n.applyConfiguration(i));
				for (const a of r)
					await (
						await (
							await (
								await new (
									await import("files-pipe")
								).default(p, c).In(a)
							).By("**/*.{js,mjs,cjs,ts}")
						).Not(m)
					).Pipe(u);
			},
		},
	};
};
const { default: s } = await import("../Variable/Option.js"),
	{ default: f } = await import(
		"typescript-esbuild/Target/Function/Merge.js"
	);
export { s as Default, f as Merge, l as default };
