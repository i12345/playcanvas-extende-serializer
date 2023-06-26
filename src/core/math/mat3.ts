import { Mat3 } from "playcanvas-extended"
import { serializableProperty, serializableClass } from "simple-typed-serialization"

serializableProperty()(Mat3, "data")
serializableClass()(Mat3)