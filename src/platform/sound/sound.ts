import { Sound } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";

serializableClassDeclarationCustom(
    Sound,
    {
        preDeserializer(item: any) {
            const sound: Sound = item
            return new Sound(sound.audio ?? sound.buffer)
        }
    },
    "audio",
    "buffer",
)