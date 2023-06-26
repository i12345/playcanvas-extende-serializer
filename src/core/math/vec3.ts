import { Vec3 } from "playcanvas-extended"
import { serializableProperty, serializableClass } from "simple-typed-serialization"

serializableProperty()(Vec3, "x")
serializableProperty()(Vec3, "y")
serializableProperty()(Vec3, "z")
serializableClass()(Vec3)