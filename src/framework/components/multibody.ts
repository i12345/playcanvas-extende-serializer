import { Entity, MultiBodyComponent } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";

serializableClassDeclarationCustom(
    MultiBodyComponent,
    {
        preDeserializer(item) {
            const entity = item as Entity
            return entity.addComponent('multibody') as MultiBodyComponent
        }
    },
    {
        key: "entity",
        preDeserialize: true
    },
    "enabled",
)