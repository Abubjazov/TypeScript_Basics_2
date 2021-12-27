import { CharacterCollection } from "./CharacterCollection"
import { NumbersCollection } from "./NumbersCollection"
import { Sorter } from "./Sorter"

const numbersCollection = new NumbersCollection([4, -3, 11, 2])
const sorter = new Sorter(numbersCollection)

sorter.sort()
console.log(numbersCollection.data)

const characterCollection = new CharacterCollection('ZbacX')
const sorterStr = new Sorter(characterCollection)

sorterStr.sort()
console.log(characterCollection.data)
