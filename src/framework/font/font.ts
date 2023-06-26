import { Font } from "playcanvas-extended";
import { serializableClassDeclaration, serializableClassDeclarationCustom } from "simple-typed-serialization";

serializableClassDeclarationCustom(
    Font,
    {
        preDeserializer(item: any) {
            const serialized: Font = item
            return new Font(serialized.textures, serialized.data)
        }
    },
    {
        key: "textures",
        preDeserialize: true
    },
    {
        key: "data",
        preDeserialize: true
    }
)