import { GraphNode } from "playcanvas-extended";
import { serializableClass, serializableProperty, serializablePropertyMethod } from "simple-typed-serialization";

serializableProperty()(GraphNode, "name")
serializableProperty({ mustDeserializeIntoDefaultValue: true })(GraphNode, "children")
serializablePropertyMethod({ canDeserializeIntoDefaultValue: false })(GraphNode, "getLocalPosition", undefined!)
serializablePropertyMethod({ canDeserializeIntoDefaultValue: false })(GraphNode, "getLocalRotation", undefined!)
serializablePropertyMethod({ canDeserializeIntoDefaultValue: false })(GraphNode, "getLocalScale", undefined!)
serializableProperty()(GraphNode, "tags")

export function update_children(node: GraphNode) {
    const children = node.children.splice(0, node.children.length)
    children.forEach(child => node.addChild(child))
}

serializableClass({
    postDeserializer(node: GraphNode) {
        update_children(node)
        
        return node
    }
})(GraphNode)