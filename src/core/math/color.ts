import { Color } from "playcanvas-extended"
import { serializableProperty, serializableClass } from "simple-typed-serialization"

serializableProperty()(Color, "r")
serializableProperty()(Color, "g")
serializableProperty()(Color, "b")
serializableProperty()(Color, "a")
serializableClass()(Color)