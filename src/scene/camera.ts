import { Camera } from "playcanvas-extended";
import { serializableClassDeclaration } from "simple-typed-serialization";

serializableClassDeclaration(
    Camera,
    "nearClip",
    "farClip",
    "aperture",
    "fov",
    "horizontalFov",
    "aspectRatio",
    "aspectRatioMode",
    "clearColor",
    "clearColorBuffer",
    "clearDepth",
    "clearDepthBuffer",
    "clearStencil",
    "clearStencilBuffer",
    "cullFaces",
    "cullingMask",
    "frustumCulling",
    "flipFaces",
    "fullSizeClearRect",
    {
        key: "layers",
        canDeserializeIntoDefaultValue: false
    },
    "orthoHeight",
    "rect",
    "scissorRect",
    "sensitivity",
    "shutter",
)