import { BoundingBox, MorphTarget, typedArrayTypes } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";
import { TypedArray, typedArrayType } from "../utils/typed-array.js";

interface Serialized {
    name?: string
    defaultWeight?: number
    preserveData?: boolean
    aabb?: BoundingBox

    deltaPositions: TypedArray
    deltaNormals: TypedArray
}

serializableClassDeclarationCustom(
    MorphTarget,
    {
        preSerializer(morphTarget: MorphTarget) {
            const deltaPositionsVertexBufffer = morphTarget._vertexBufferPositions
            const deltaPositionsType = deltaPositionsVertexBufffer?.format.elements[0].dataType
            const deltaPositions = new (typedArrayTypes[deltaPositionsType])(deltaPositionsVertexBufffer?.storage)

            const deltaNormalsVertexBufffer = morphTarget._vertexBufferNormals
            const deltaNormalsType = deltaNormalsVertexBufffer?.format.elements[0].dataType
            const deltaNormals = new (typedArrayTypes[deltaNormalsType])(deltaNormalsVertexBufffer?.storage)

            return {
                name: morphTarget.name,
                defaultWeight: morphTarget.defaultWeight,
                preserveData: morphTarget.options !== undefined,
                aabb: morphTarget.aabb,

                deltaPositions,
                deltaNormals,
            } as Serialized
        },
        preDeserializer(item: any) {
            const serialized: Serialized = item
            return new MorphTarget({
                name: serialized.name,
                defaultWeight: serialized.defaultWeight,
                preserveData: serialized.preserveData,
                aabb: serialized.aabb,

                deltaPositions: serialized.deltaPositions.buffer,
                deltaPositionsType: typedArrayType(serialized.deltaPositions),
                deltaNormals: serialized.deltaNormals.buffer,
                deltaNormalsType: typedArrayType(serialized.deltaNormals),
            })
        },
    },
    {
        key: "name",
        preDeserialize: true
    },
    {
        key: "defaultWeight",
        preDeserialize: true
    },
    {
        key: "preserveData",
        preDeserialize: true
    },
    {
        key: "aabb",
        preDeserialize: true
    },
    {
        key: "deltaPositions",
        preDeserialize: true
    },
    {
        key: "deltaNormals",
        preDeserialize: true
    },
)