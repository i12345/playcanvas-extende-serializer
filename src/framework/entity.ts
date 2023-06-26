import { Entity } from "playcanvas-extended"
import { serializableClassDeclarationCustom } from "simple-typed-serialization"
import { update_children } from "../scene/graph-node.js"

serializableClassDeclarationCustom(
    Entity,
    {
        postDeserializer(entity: Entity) {
            update_children(entity)
            
            return entity
        }
    },
    "c",
    "guid",
)