import { Vec4 } from "playcanvas-extended"
import { serializableProperty, serializableClass } from "simple-typed-serialization"

serializableProperty()(Vec4, "x")
serializableProperty()(Vec4, "y")
serializableProperty()(Vec4, "z")
serializableProperty()(Vec4, "w")
serializableClass()(Vec4)