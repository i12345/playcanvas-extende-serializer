import { CameraComponent, Entity } from "playcanvas-extended";
import { serializableClassDeclaration, serializableClassDeclarationCustom } from "simple-typed-serialization";

serializableClassDeclarationCustom(
    CameraComponent,
    {
        preDeserializer(item: any) {
            const entity = item as Entity
            return entity.addComponent('camera') as CameraComponent
        }
    },
    {
        key: "entity",
        preDeserialize: true
    },
    
    // Many of these properties are commented out because they are just
    // convenience properties for the underlying camera.

    // "aperture",
    // "aspectRatio",
    // "aspectRatioMode",
    {
        key: "camera",
        mustDeserializeIntoDefaultValue: true
    },
    // "clearColor",
    // "clearColorBuffer",
    // "clearDepthBuffer",
    // "clearStencilBuffer",
    // "cullFaces",
    {
        key: "disablePostEffectsLayer",
        canDeserializeIntoDefaultValue: false
    },
    // "farClip",
    // "flipFaces",
    // "fov",
    // "frustum",
    // "frustumCulling",
    // "horizontalFov",
    {
        key: "layers", // (setting this field has extra logic to connect the camera to each layer)
        canDeserializeIntoDefaultValue: false
    },
    // "layersSet",
    // "nearClip",
    // "orthoHeight",
    // "postEffects", // not yet sure how to serialize this
    // "postEffectsEnabled", // likely will be set through the postEffects property
    {
        key: "priority",
        canDeserializeIntoDefaultValue: false
    },
    // "projection",
    // "projectionMatrix",
    // "rect",
    // "renderSceneColorMap", // I'm not sure if this should be set here
    // "renderSceneDepthMap", // same concern
    // "renderTarget",
    // "scissorRect",
    // "sensitivity",
    // "shutter",
    // "viewMatrix",
)