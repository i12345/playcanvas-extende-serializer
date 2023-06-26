import { Application, Sprite } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";

serializableClassDeclarationCustom(
    Sprite,
    {
        preDeserializer(item: any) {
            const sprite: Sprite = item
            return new Sprite(Application.getApplication()!.graphicsDevice, sprite)
        }
    },
    {
        key: "atlas",
        preDeserialize: true
    },
    {
        key: "frameKeys",
        preDeserialize: true
    },
    {
        key: "pixelsPerUnit",
        preDeserialize: true
    },
    {
        key: "renderMode",
        preDeserialize: true
    },
)