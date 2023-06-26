import { Tags } from "playcanvas-extended"
import { serializableSymbol, serializableClass } from "simple-typed-serialization"
import { ns } from "../namespace.js"

const Tags_list = Symbol(`${ns}/core/Tags.list`)
serializableSymbol(Tags_list)

serializableClass({
    preSerializer(item) {
        return { [Tags_list]: (item as Tags).list() }
    },
    postDeserializer(item) {
        const tags = item as Tags
        const items = item[Tags_list] as string[]
        delete item[Tags_list]

        tags.add(...items)
        return tags
    }
})(Tags)