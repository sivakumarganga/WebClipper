export interface Storage {
	getValue(key: string): string;
	getValues(keys: string[]): {};
	setValue(key: string, value: string): void;
	removeKey(key: string): boolean;
}
