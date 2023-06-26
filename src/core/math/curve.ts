import { Curve } from "playcanvas-extended";
import { serializableClass, serializableProperty } from "simple-typed-serialization";

interface Serialized {
    data: Float32Array
    tension: number
    type: number
}

serializableProperty()(Curve, "data")
serializableProperty()(Curve, "tension")
serializableProperty()(Curve, "type")
serializableClass({
    preSerializer(item) {
        const curve = item as Curve
        const data = new Float32Array(2 * curve.length)
        for (let i = 0; i < curve.length; i++) {
            const key = curve.keys[i]
            data[(2 * i) + 0] = key[0]
            data[(2 * i) + 1] = key[1]
        }

        return {
            data,
            tension: curve.tension,
            type: curve.type,
        } as Serialized
    },
    postDeserializer(item: Serialized) {
        const curve = new Curve(item.data as unknown as number[])
        curve.tension = item.tension
        curve.type = item.type
        
        return curve
    },
})(Curve)