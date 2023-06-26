import { Application, Morph } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";

serializableClassDeclarationCustom(
    Morph,
    {
        preDeserializer(item: any) {
            const serialized: Morph = item
            return new Morph(serialized.targets, Application.getApplication()!.graphicsDevice, { preferHighPrecision: serialized.preferHighPrecision })
        },
    },
    {
        key: "targets",
        preDeserialize: true
    },
    {
        key: "preferHighPrecision",
        preDeserialize: true
    }
)