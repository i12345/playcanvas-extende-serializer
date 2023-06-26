import { Quat } from "playcanvas-extended"
import { serializableProperty, serializableClass } from "simple-typed-serialization"

serializableProperty()(Quat, "x")
serializableProperty()(Quat, "y")
serializableProperty()(Quat, "z")
serializableProperty()(Quat, "w")
serializableClass()(Quat)