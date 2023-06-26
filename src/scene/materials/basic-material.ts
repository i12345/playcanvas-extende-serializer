import { BasicMaterial } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";

serializableClassDeclarationCustom(
    BasicMaterial,
    {
        postDeserializer(material: BasicMaterial) {
            material.update()
        }
    },
    "color",
    "colorMap",
    "colorUniform",
    "vertexColors",
)