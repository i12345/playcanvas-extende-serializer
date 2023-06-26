import { Mesh, typedArrayIndexFormats, typedArrayToType, typedArrayTypes } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";
import { ns } from "../namespace.js";
import { TypedArray, TypedIndexArray, typedArrayType } from "../utils/typed-array.js";

const primitiveType = Symbol(`${ns}/scene/mesh.primitiveType`)
const indices = Symbol(`${ns}/scene/mesh.indices`)
const vertices = Symbol(`${ns}/scene/mesh.vertices`)

interface Serialized extends Mesh {
    [primitiveType]: number
    [indices]: TypedIndexArray
    [vertices]: {
        semantic: string
        data: TypedArray
        numComponents: number
        normalize?: boolean
    }[]
}

serializableClassDeclarationCustom(
    Mesh,
    {
        preSerializer(mesh: Mesh) {
            const serialized = { ...mesh } as Serialized
            
            serialized[primitiveType] = mesh.primitive.findIndex(_ => _)!

            const indexBuffer = mesh.indexBuffer.find(_ => _)!
            serialized[indices] = new typedArrayIndexFormats[indexBuffer.format](indexBuffer.numIndices)
            if (mesh.getIndices(serialized[indices]) !== serialized[indices].length)
                throw new Error("not all indices read")

            serialized[vertices] = []
            for (const { name, numComponents, normalize } of mesh.vertexBuffer.format.elements) {
                const data = (mesh._geometryData.vertexStreamDictionary as any)[name] as TypedArray
                // const data = new (typedArrayTypes[dataType])(numVertices * numComponents)
                // mesh.getVertexStream(name, data)
                
                serialized[vertices].push({
                    semantic: name,
                    numComponents,
                    data,
                    normalize
                })
            }

            return serialized
        },
        preDeserializer(item: any) {
            const serialized = item as Serialized
            const mesh = new Mesh()

            mesh.setIndices(serialized[indices])
            for (const { semantic, data, numComponents, normalize } of serialized[vertices]) {
                mesh.setVertexStream(
                    semantic,
                    data,
                    numComponents,
                    data.length,
                    typedArrayType(data),
                    normalize
                )
            }

            mesh.update(serialized[primitiveType]);

            return mesh
        }
    },
    {
        key: primitiveType,
        preDeserialize: true
    },
    {
        key: indices,
        preDeserialize: true
    },
    {
        key: vertices,
        preDeserialize: true
    },
    "skin",
    "morph",
    // "aabb",
    // "primitive",
    // "indexBuffer",
    // "vertexBuffer",
)