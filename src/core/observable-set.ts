import { ObservableSet } from "playcanvas-extended";
import { serializableClass, serializableProperty } from "simple-typed-serialization";
import { ns } from "../namespace.js";

const values = Symbol(`${ns}/core/observable-set`)
interface Serialized {
    [values]?: any[]
}

serializableProperty()(ObservableSet, values)
serializableClass({
    preSerializer(item) {
        const set = item as ObservableSet<any>
        return { [values]: [...set.values()] } as Serialized
    },
    postDeserializer(item: ObservableSet<any> & Serialized) {
        for (const value of item[values]!)
            item.add(value)
        delete item[values]
        return item
    },
})(ObservableSet)