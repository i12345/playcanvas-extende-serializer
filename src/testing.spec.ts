import { DataViewByteReader, DataViewByteWriterChunkedDynamic } from "byte-rw"
import { defaultDeserializationContext, defaultSerializationContext } from "simple-typed-serialization"

function serialize(value: any) {
    const writer = new DataViewByteWriterChunkedDynamic()
    const context = defaultSerializationContext(writer)
    context.serialize(value)
    return writer.combineChunks()
}

function deserialize<T>(view: DataView): T {
    const reader = new DataViewByteReader(view)
    const context = defaultDeserializationContext(reader)
    return context.deserialize() as T
}

export function deserializeSerialization<T>(value: T): T {
    const buffer = serialize(value)
    console.log(`${buffer.byteLength} bytes`)
    return deserialize<T>(new DataView(buffer))
}