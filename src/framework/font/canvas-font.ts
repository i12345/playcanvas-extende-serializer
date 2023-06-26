import { Application, CanvasFont } from "playcanvas-extended";
import { serializableClassDeclaration, serializableClassDeclarationCustom } from "simple-typed-serialization";

serializableClassDeclarationCustom(
    CanvasFont,
    {
        preDeserializer(item: any) {
            const font: CanvasFont = item
            return new CanvasFont(Application.getApplication()!, font)
        }
    },
    {
        key: "color",
        preDeserialize: true
    },
    {
        key: "fontName",
        preDeserialize: true
    },
    {
        key: "fontSize",
        preDeserialize: true
    },
    {
        key: "fontWeight",
        preDeserialize: true
    },
    {
        key: "padding",
        preDeserialize: true
    },
)