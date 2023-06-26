import { URI } from "playcanvas-extended";
import { serializableClass, serializableProperty } from "simple-typed-serialization";

interface Serialized {
    uri: string
}

serializableProperty()(URI, "uri")
serializableClass({
    instantiateClass: false,
    preSerializer(item) {
        return { uri: (item as URI).toString() } as Serialized
    },
    postDeserializer({ uri: uri }: Serialized) {
        return new URI(uri)
    },
})(URI)