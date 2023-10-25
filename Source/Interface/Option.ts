/**
 * @module Option
 *
 */
export default interface Type extends Option {
	// biome-ignore lint/suspicious/noExplicitAny:
	Rome?: boolean | Rome;
}

import type Rome from "./Rome.js";

import type Option from "files-pipe/Target/Interface/Option.js";
