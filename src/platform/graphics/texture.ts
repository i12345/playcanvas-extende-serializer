import { Application, Texture } from "playcanvas-extended";
import { serializableClassDeclaration, serializableClassDeclarationCustom } from "simple-typed-serialization"
import { TypedArray } from "../../utils/typed-array.js";

interface Serialized extends Texture {
    /**
     * the top mip level for the texture or 6 top-level arrays if the texture is a cubemap
     */
    levels: Uint8Array[]
}

serializableClassDeclarationCustom(
    Texture,
    {
        preDeserializer(item: any) {
            const serialized: Serialized = item
            return new Texture(
                Application.getApplication()!.graphicsDevice,
                serialized
            )
        }
    },
    {
        key: "addressU",
        preDeserialize: true
    },
    {
        key: "addressV",
        preDeserialize: true
    },
    {
        key: "addressW",
        preDeserialize: true
    },
    {
        key: "anisotropy",
        preDeserialize: true
    },
    {
        key: "name",
        preDeserialize: true
    },
    {
        key: "width",
        preDeserialize: true
    },
    {
        key: "height",
        preDeserialize: true
    },
    {
        key: "depth",
        preDeserialize: true
    },
    {
        key: "format",
        preDeserialize: true
    },
    {
        key: "type",
        preDeserialize: true
    },
    {
        key: "projection",
        preDeserialize: true
    },
    // "profilerHint",
    {
        key: "minFilter",
        preDeserialize: true
    },
    {
        key: "magFilter",
        preDeserialize: true
    },
    {
        key: "compareOnRead",
        preDeserialize: true
    },
    {
        key: "compareFunc",
        preDeserialize: true
    },
    {
        key: "mipmaps",
        preDeserialize: true
    },
    {
        key: "cubemap",
        preDeserialize: true
    },
    {
        key: "volume",
        preDeserialize: true
    },
    {
        key: "fixCubemapSeams",
        preDeserialize: true
    },
    {
        key: "flipY",
        preDeserialize: true
    },
    {
        key: "premultiplyAlpha",
        preDeserialize: true
    },
    // {
    //     key: "levels",
    //     preDeserialize: true,
    //     accessor: {
    //         get(property, target) {
    //             if (property !== "levels")
    //                 throw new Error()
                
    //             const texture = target as Texture

    //             await target.downloadAsync()
    //             throw new Error("this is asynchronous function")
    //         },
    //         set(property, target, value) {
    //             if (property !== "levels")
    //                 throw new Error()
                
    //             throw new Error("this should be handled in the preDeserializer")
    //         },
    //     }
    // }
)