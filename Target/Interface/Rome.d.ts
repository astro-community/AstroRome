/**
 * @module Rome
 *
 */
export default interface Type extends Omit<Configuration, "$schema"> {
    [key: string]: Value<Type>;
}
import type Value from "typescript-esbuild/Target/Type/Value";
import type { Configuration } from "@rometools/wasm-nodejs";
