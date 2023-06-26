import { OrientedBox } from "playcanvas-extended";
import { serializableClass, serializableProperty } from "simple-typed-serialization";

serializableProperty()(OrientedBox, "worldTransform")
serializableProperty()(OrientedBox, "halfExtents")
serializableClass()(OrientedBox)