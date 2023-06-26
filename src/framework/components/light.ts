import { Entity, LightComponent } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";

serializableClassDeclarationCustom(
    LightComponent,
    {
        preDeserializer(item: any) {
            const entity = item as Entity
            return entity.addComponent('light') as LightComponent
        }
    },
    {
        key: "entity",
        preDeserialize: true
    },
    "affectDynamic",
    "affectLightmapped",
    "affectSpecularity",
    "bake",
    "bakeArea",
    "bakeDir",
    "bakeNumSamples",
    "cascadeDistribution",
    "castShadows",
    "color",
    "cookie",
    "cookieAngle",
    "cookieAsset",
    "cookieChannel",
    "cookieFalloff",
    "cookieIntensity",
    "cookieOffset",
    "cookieScale",
    "enabled",
    "falloffMode",
    "innerConeAngle",
    "intensity",
    "isStatic",
    {
        key: "layers",
        canDeserializeIntoDefaultValue: false
    },
    "lightSize",
    "luminance",
    "mask",
    "normalOffsetBias",
    "numCascades",
    "outerConeAngle",
    "range",
    "shadowBias",
    "shadowDistance",
    "shadowIntensity",
    "shadowResolution",
    "shadowType",
    "shadowUpdateMode",
    "shadowUpdateOverrides",
    "shape",
    "type",
    "vsmBlurMode",
    "vsmBlurSize",
    "vsmBias",
)