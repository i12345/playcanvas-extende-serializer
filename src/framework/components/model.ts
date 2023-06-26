import { Entity, ModelComponent } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";

//TODO: this may have properties that don't exist
// also, RenderComponent may have supersceded ModelComponent

serializableClassDeclarationCustom(
    ModelComponent,
    {
        preDeserializer(item) {
            const entity = item as Entity
            return entity.addComponent('model') as ModelComponent
        }
    },
    {
        key: "entity",
        preDeserialize: true
    },
    "asset",
    "batchGroupId",
    "castShadows",
    "castShadowsLightmap",
    "customAabb",
    "enabled",
    "isStatic",
    {
        key: "layers",
        canDeserializeIntoDefaultValue: false
    },
    "lightmapSizeMultiplier",
    "lightmapped",
    "material",
    "materialAsset",
    {
        key: "materialAssets",
        canDeserializeIntoDefaultValue: false
    },
    {
        key: "meshInstances",
        canDeserializeIntoDefaultValue: false
    },
    "receiveShadows",
    "renderStyle",
    "resolveDuplicatedEntityReferenceProperties",
    "rootBone",
    "type",
)