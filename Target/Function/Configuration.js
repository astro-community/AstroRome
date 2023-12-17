var e = async (...[t]) => {
	try {
		return (
			await r(a(`${(await import("process")).cwd()}/${t}`), "utf-8")
		).toString();
	} catch {
		return (
			await r(
				a(
					`${(
						await import("path")
					).dirname(
						(await import("url")).fileURLToPath(import.meta.url),
					)}/../Notation/${t}`,
				),
				"utf-8",
			)
		).toString();
	}
};
const { readFile: r } = await import("fs/promises"),
	{ resolve: a } = await import("path");
export { e as default, r as readFile, a as resolve };
