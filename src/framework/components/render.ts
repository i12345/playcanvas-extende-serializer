import { Entity, RenderComponent } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";

serializableClassDeclarationCustom(
    RenderComponent,
    {
        preDeserializer(item) {
            const entity = item as Entity
            return entity.addComponent('render') as RenderComponent
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