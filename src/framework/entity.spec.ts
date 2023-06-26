import { describe, it } from "mocha"
import { assert } from "chai"
import { Entity } from "playcanvas-extended"
import { deserializeSerialization } from "../testing.spec.js"
import './entity.js'

describe("framework/Entity", () => {
    it("plain entity", () => {
        const entity = new Entity()

        const serializedDeserialized = deserializeSerialization(entity)

        assert.isDefined(serializedDeserialized)
        assert.isTrue(serializedDeserialized instanceof Entity)
    })
})