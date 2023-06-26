import { Entity, PhysicsComponent } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";

serializableClassDeclarationCustom(
    PhysicsComponent,
    {
        preDeserializer(item: any) {
            const entity = item as Entity
            return entity.addComponent('physics') as PhysicsComponent
        }
    },
    {
        key: "entity",
        preDeserialize: true
    },
    {
        key: "angularDamping",
        canDeserializeIntoDefaultValue: false
    },
    {
        key: "angularFactor",
        canDeserializeIntoDefaultValue: false
    },
    {
        key: "angularVelocity",
        canDeserializeIntoDefaultValue: false
    },
    {
        key: "contactDamping",
        canDeserializeIntoDefaultValue: false
    },
    {
        key: "contactStiffness",
        canDeserializeIntoDefaultValue: false
    },
    "enabled",
    {
        key: "friction",
        canDeserializeIntoDefaultValue: false
    },
    {
        key: "group",
        canDeserializeIntoDefaultValue: false
    },
    {
        key: "linearDamping",
        canDeserializeIntoDefaultValue: false
    },
    {
        key: "linearFactor",
        canDeserializeIntoDefaultValue: false
    },
    {
        key: "linearVelocity",
        canDeserializeIntoDefaultValue: false
    },
    {
        key: "mask",
        canDeserializeIntoDefaultValue: false
    },
    {
        key: "mass",
        canDeserializeIntoDefaultValue: false
    },
    {
        key: "restitution",
        canDeserializeIntoDefaultValue: false
    },
    {
        key: "rollingFriction",
        canDeserializeIntoDefaultValue: false
    },
    {
        key: "spinningFriction",
        canDeserializeIntoDefaultValue: false
    },
    {
        key: "type",
        canDeserializeIntoDefaultValue: false
    },
)