import { CollisionComponent, Entity } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";

serializableClassDeclarationCustom(
    CollisionComponent,
    {
        preDeserializer(item: any) {
            const entity = item as Entity
            return entity.addComponent('collision') as CollisionComponent
        }
    },
    {
        key: "entity",
        preDeserialize: true
    },
    "asset",
    "axis",
    "enabled",
    "halfExtents",
    "height",
    "model",
    "radius",
    "renderAsset",
    "type",
)