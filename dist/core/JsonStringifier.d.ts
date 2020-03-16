import { JsonStringifierOptions } from '../@types';
export declare class JsonStringifier<T> {
    private _globalValueAlreadySeen;
    private _intSequenceGenerator;
    constructor();
    stringify(obj: T, options?: JsonStringifierOptions): string;
    invokeCustomSerializers(key: string, value: any, options: JsonStringifierOptions): any;
    stringifyJsonAnyGetter(replacement: any, obj: any, oldKeys: string[]): string[];
    stringifyJsonPropertyOrder(obj: any): string[];
    stringifyJsonProperty(replacement: any, obj: any, key: string): void;
    stringifyJsonRawValue(replacement: any, obj: any, key: string): void;
    stringifyJsonValue(obj: any): null | any;
    stringifyJsonRootName(replacement: any, obj: any): any;
    stringifyJsonSerialize(replacement: any, obj: any, key: string): void;
    stringifyHasJsonIgnore(obj: any, key: string): boolean;
    stringifyJsonInclude(obj: any, key: string): boolean;
    stringifyJsonIgnoreType(obj: any): boolean;
    stringifyJsonManagedReference(replacement: any, obj: any, key: string): void;
    stringifyJsonTypeInfo(replacement: any, obj: any): any;
    stringifyJsonFormat(replacement: any, obj: any, key: string): void;
    stringifyHasJsonView(obj: any, key: string, options: JsonStringifierOptions): boolean;
    stringifyJsonUnwrapped(replacement: any, obj: any, key: string, options: JsonStringifierOptions): void;
    stringifyJsonIdentityInfo(replacement: any, obj: any, key: string, valueAlreadySeen: Map<any, any>): void;
    stringifyIterable(key: string, iterableNoString: any, options: JsonStringifierOptions, valueAlreadySeen: Map<any, any>): any[];
    private deepStringify;
}