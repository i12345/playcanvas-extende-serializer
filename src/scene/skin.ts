import { Application, Skin } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";

serializableClassDeclarationCustom(
    Skin,
    {
        preDeserializer(item: any) {
            const skin: Skin = item
            return new Skin(
                Application.getApplication()!.graphicsDevice,
                skin.inverseBindPose,
                skin.boneNames
            )
        }
    },
    "boneNames",
    "inverseBindPose"
)