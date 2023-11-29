/// <reference types="node" resolution-mode="require"/>
/**
 * @module Configuration
 *
 */
declare const _default: Type;
export default _default;
import type Type from "../Interface/Configuration.js";
export declare const readFile: typeof import("fs/promises").readFile;
export declare const resolve: (...paths: string[]) => string;
