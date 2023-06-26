import { Plane } from "playcanvas-extended";
import { serializableClass, serializableProperty } from "simple-typed-serialization";

serializableProperty()(Plane, "normal")
serializableProperty()(Plane, "distance")
serializableClass()(Plane)