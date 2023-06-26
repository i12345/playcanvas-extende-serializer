import { EntityReference } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";

serializableClassDeclarationCustom(
    EntityReference,
    {
        requiresExistingInstance: true
    },
    "entity"
)