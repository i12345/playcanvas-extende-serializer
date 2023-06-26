import { Curve, CurveSet } from "playcanvas-extended";
import { serializableClass, serializableProperty } from "simple-typed-serialization";

interface Serialized {
    type: number
    curves: Float32Array[]
}

serializableProperty()(CurveSet, "data")
serializableProperty()(CurveSet, "tension")
serializableProperty()(CurveSet, "type")
serializableClass({
    preSerializer(item) {
        const curveSet = item as CurveSet
        const curves = new Array<Float32Array>(curveSet.length)

        for (let j = 0;j < curves.length; j++) {
            const curve = curveSet.curves[j]

            const data = new Float32Array(2 * curve.length)
            for (let i = 0; i < curve.length; i++) {
                const key = curve.keys[i]
                data[(2 * i) + 0] = key[0]
                data[(2 * i) + 1] = key[1]
            }

            curves[j] = data
        }

        return {
            type: curveSet.type,
            curves,
        } as Serialized
    },
    postDeserializer(item: Serialized) {
        const curveSet = new CurveSet(item.curves)
        curveSet.type = item.type

        return curveSet
    },
})(Curve)