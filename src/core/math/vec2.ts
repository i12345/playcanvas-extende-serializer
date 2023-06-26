import { Vec2 } from "playcanvas-extended"
import { serializableProperty, serializableClass } from "simple-typed-serialization"

serializableProperty()(Vec2, "x")
serializableProperty()(Vec2, "y")
serializableClass()(Vec2)