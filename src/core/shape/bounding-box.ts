import { BoundingBox } from "playcanvas-extended";
import { serializableClass, serializableProperty } from "simple-typed-serialization";

serializableProperty()(BoundingBox, "center")
serializableProperty()(BoundingBox, "halfExtents")
serializableClass()(BoundingBox)