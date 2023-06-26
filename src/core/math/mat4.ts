import { Mat4 } from "playcanvas-extended"
import { serializableProperty, serializableClass } from "simple-typed-serialization"

serializableProperty()(Mat4, "data")
serializableClass()(Mat4)