import { typedArrayIndexFormats, typedArrayTypes } from "playcanvas-extended"

/**
 * Typed index array type used in playcanvas source, from {@link typedArrayTypes}
 */
export type TypedIndexArray = ((typeof typedArrayIndexFormats extends (infer T)[] ? T : never) extends { new(): infer R } ? R : never)

export const typedIndexArrayType = (array: TypedIndexArray) =>
    typedArrayIndexFormats.indexOf(array.constructor as any)

/**
 * Typed array type used in playcanvas source, from {@link typedArrayTypes}
 */
export type TypedArray = ((typeof typedArrayTypes extends (infer T)[] ? T : never) extends { new(): infer R } ? R : never)

export const typedArrayType = (array: TypedArray) =>
    typedArrayTypes.indexOf(array.constructor as any)