/**
 * @module Configuration
 *
 */
export default (async (...[File]: Parameters<Type>) => {
	try {
		return (
			await readFile(
				resolve(`${(await import("process")).cwd()}/${File}`),
				"utf-8",
			)
		).toString();
	} catch (_Error) {
		return (
			await readFile(
				resolve(
					`${(
						await import("path")
					).dirname(
						(
							await import("url")
						).fileURLToPath(import.meta.url),
					)}/../Notation/${File}`,
				),
				"utf-8",
			)
		).toString();
	}
}) satisfies Type as Type;

import type Type from "../Interface/Configuration.js";

export const { readFile } = await import("fs/promises");

export const { resolve } = await import("path");
