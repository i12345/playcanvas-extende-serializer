import { Material, Texture } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";

serializableClassDeclarationCustom(
    Material,
    {
        postDeserializer(material: Material) {
            material.update()
        }
    },
    "alphaTest",
    "alphaToCoverage",
    "alphaWrite",
    "blendState",
    "blendType",
    "blueWrite",
    "depthBias",
    "depthFunc",
    // "depthState",
    "depthTest",
    "depthWrite",
    "greenWrite",
    "name",
    {
        key: "parameters",
        accessor: {
            get(property, target) {
                if (property !== "parameters")
                    throw new Error("can only access parameters")
                
                const material = <Material>target
                return material.getParameters()
            },
            set(property, target, value) {
                if (property !== "parameters")
                    throw new Error("can only access parameters")
                
                const material = <Material>target
                const parameters = value as { [parameter: string]: number | Texture | Float32Array | number[] }
                for (const [name, value] of Object.entries(parameters))
                    material.setParameter(name, value)
            }
        }
    },
    "redWrite",
    "slopeDepthBias",
    "stencilBack",
    "stencilFront",
    "transparent",
    // "variants", // ?
)