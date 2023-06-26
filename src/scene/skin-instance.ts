import { SkinInstance } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";

serializableClassDeclarationCustom(
    SkinInstance,
    {
        preDeserializer(item: any) {
            const { skin }: SkinInstance = item
            return new SkinInstance(skin)
        }
    },
    {
        key: "skin",
        preDeserialize: true
    },
    "rootBone",
    "bones",
)