/**
 * @module Rome
 *
 */
export default JSON.parse(
	await (await import("../Function/Configuration.js")).default("rome.json")
) satisfies Type;

import type Type from "../Interface/Rome.js";
