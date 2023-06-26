import { Ray } from "playcanvas-extended";
import { serializableClass, serializableProperty } from "simple-typed-serialization";

serializableProperty()(Ray, "origin")
serializableProperty()(Ray, "direction")
serializableClass()(Ray)