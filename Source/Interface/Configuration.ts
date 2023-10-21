/**
 * @module Configuration
 *
 */
export default interface Type {
	(File: string): Promise<string>;
}
