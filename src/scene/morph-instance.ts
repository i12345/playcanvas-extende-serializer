import { Morph, MorphInstance } from "playcanvas-extended";
import { serializableClassDeclarationCustom } from "simple-typed-serialization";

interface Serialized {
    morph: Morph
    weights: number[]
}

serializableClassDeclarationCustom(
    MorphInstance,
    {
        preSerializer(morphInstance: MorphInstance) {
            return {
                morph: morphInstance.morph,
                weights: morphInstance.morph.targets.map((_,i) => morphInstance.getWeight(i))
            } as Serialized
        },
        preDeserializer(item: any) {
            const { morph, weights }: Serialized = item
            const morphInstance = new MorphInstance(morph)
            weights.forEach((weight, i) => morphInstance.setWeight(i, weight))
            return morphInstance
        }
    },
    {
        key: "morph",
        preDeserialize: true
    },
    {
        key: "weights",
        preDeserialize: true
    }
)