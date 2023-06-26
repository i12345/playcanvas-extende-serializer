import { Entity, ZoneComponent } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";

serializableClassDeclarationCustom(
    ZoneComponent,
    {
        preDeserializer(item: any) {
            const entity = item as Entity
            return entity.addComponent('zone') as ZoneComponent
        }
    },
    {
        key: "entity",
        preDeserialize: true
    },
    "enabled",
    "size",
)