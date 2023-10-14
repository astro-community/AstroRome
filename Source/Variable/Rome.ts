/**
 * @module Rome
 *
 */
export default JSON.parse(
	await (await import("../Function/Config.js")).default("rome.json")
) satisfies Type;

import type Type from "../Interface/Rome.js";
