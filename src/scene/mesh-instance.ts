import { MeshInstance, Texture } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";

serializableClassDeclarationCustom<MeshInstance>(
    MeshInstance,
    {
        preDeserializer(item: any) {
            const { mesh, material, node }: MeshInstance = item
            return new MeshInstance(mesh, material, node)
        }
    },
    {
        key: "mesh",
        preDeserialize: true
    },
    {
        key: "material",
        preDeserialize: true
    },
    "castShadow",
    "drawOrder",
    "flipFacesFactor",
    // instancing not yet included
    "mask",
    "morphInstance",
    {
        key: "node",
        preDeserialize: true
    },
    {
        key: "parameters",
        accessor: {
            get(property, target) {
                console.assert(property === "parameters")
                const meshInstance = target as MeshInstance
                return meshInstance.getParameters()
            },
            set(property, target, value) {
                console.assert(property === "parameters")
                const meshInstance = target as MeshInstance
                for (const [parameterKey, parameterValue] of Object.entries(value))
                    meshInstance.setParameter(parameterKey, parameterValue as number | number[] | Texture)
            }
        }
    },
    "receiveShadow",
    "renderStyle",
    "screenSpace",
    "visible",
)