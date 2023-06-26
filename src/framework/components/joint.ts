import { Entity, JointComponent, LinearAngularPair, ObservedXYZ } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";

serializableClassDeclarationCustom(
    ObservedXYZ,
    {
        requiresExistingInstance: true
    },
    "x",
    "y",
    "z",
)

serializableClassDeclarationCustom(
    LinearAngularPair,
    {
        requiresExistingInstance: true
    },
    "angular",
    "linear",
)

serializableClassDeclarationCustom(
    JointComponent,
    {
        preDeserializer(item: any) {
            const entity = item as Entity
            return entity.addComponent('joint') as JointComponent
        }
    },
    {
        key: "entity",
        preDeserialize: true
    },
    "breakForce",
    "damping",
    "enableCollision",
    "enabled",
    "entityA",
    "entityB",
    "equilibrium",
    "limits",
    "motion",
    "skipMultiBodyChance",
    "springs",
    "stiffness",
    "type",
)