import { BoundingSphere } from "playcanvas-extended";
import { serializableClass, serializableProperty } from "simple-typed-serialization";

serializableProperty()(BoundingSphere, "center")
serializableProperty()(BoundingSphere, "radius")
serializableClass()(BoundingSphere)