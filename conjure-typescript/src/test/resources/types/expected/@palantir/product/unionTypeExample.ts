import { IStringExample } from "./stringExample";
import * as _IStringExample from "./stringExample";

export interface IUnionTypeExample_StringExample {
    'stringExample': IStringExample;
    'type': "stringExample";
}
export interface IUnionTypeExample_Set {
    'set': string[];
    'type': "set";
}
export interface IUnionTypeExample_ThisFieldIsAnInteger {
    'thisFieldIsAnInteger': number;
    'type': "thisFieldIsAnInteger";
}
export interface IUnionTypeExample_AlsoAnInteger {
    'alsoAnInteger': number;
    'type': "alsoAnInteger";
}
export interface IUnionTypeExample_If {
    'if': number;
    'type': "if";
}
export interface IUnionTypeExample_New {
    'new': number;
    'type': "new";
}
export interface IUnionTypeExample_Interface {
    'interface': number;
    'type': "interface";
}
export type IUnionTypeExample = (IUnionTypeExample_StringExample | IUnionTypeExample_Set | IUnionTypeExample_ThisFieldIsAnInteger | IUnionTypeExample_AlsoAnInteger | IUnionTypeExample_If | IUnionTypeExample_New | IUnionTypeExample_Interface);
function isStringExample(
    obj: IUnionTypeExample
): obj is IUnionTypeExample_StringExample {
    return (obj.type === "stringExample");
}
function isSet(
    obj: IUnionTypeExample
): obj is IUnionTypeExample_Set {
    return (obj.type === "set");
}
function isThisFieldIsAnInteger(
    obj: IUnionTypeExample
): obj is IUnionTypeExample_ThisFieldIsAnInteger {
    return (obj.type === "thisFieldIsAnInteger");
}
function isAlsoAnInteger(
    obj: IUnionTypeExample
): obj is IUnionTypeExample_AlsoAnInteger {
    return (obj.type === "alsoAnInteger");
}
function isIf(
    obj: IUnionTypeExample
): obj is IUnionTypeExample_If {
    return (obj.type === "if");
}
function isNew(
    obj: IUnionTypeExample
): obj is IUnionTypeExample_New {
    return (obj.type === "new");
}
function isInterface(
    obj: IUnionTypeExample
): obj is IUnionTypeExample_Interface {
    return (obj.type === "interface");
}
function stringExample(
    stringExample: IStringExample
): IUnionTypeExample_StringExample {
    return {
        stringExample: stringExample,
        type: "stringExample",
    };
}
function set_(
    set_: string[]
): IUnionTypeExample_Set {
    return {
        set: set_,
        type: "set",
    };
}
function thisFieldIsAnInteger(
    thisFieldIsAnInteger: number
): IUnionTypeExample_ThisFieldIsAnInteger {
    return {
        thisFieldIsAnInteger: thisFieldIsAnInteger,
        type: "thisFieldIsAnInteger",
    };
}
function alsoAnInteger(
    alsoAnInteger: number
): IUnionTypeExample_AlsoAnInteger {
    return {
        alsoAnInteger: alsoAnInteger,
        type: "alsoAnInteger",
    };
}
function if_(
    if_: number
): IUnionTypeExample_If {
    return {
        if: if_,
        type: "if",
    };
}
function new_(
    new_: number
): IUnionTypeExample_New {
    return {
        new: new_,
        type: "new",
    };
}
function interface_(
    interface_: number
): IUnionTypeExample_Interface {
    return {
        interface: interface_,
        type: "interface",
    };
}
export const IUnionTypeExample = {
    alsoAnInteger: alsoAnInteger,
    if: if_,
    interface: interface_,
    isAlsoAnInteger: isAlsoAnInteger,
    isIf: isIf,
    isInterface: isInterface,
    isNew: isNew,
    isSet: isSet,
    isStringExample: isStringExample,
    isThisFieldIsAnInteger: isThisFieldIsAnInteger,
    new: new_,
    set: set_,
    stringExample: stringExample,
    thisFieldIsAnInteger: thisFieldIsAnInteger,
};
