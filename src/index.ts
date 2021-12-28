import { CharacterCollection } from "./CharacterCollection"
import { LinkedList } from './LinkedList'
import { NumbersCollection } from "./NumbersCollection"

const numbersCollection = new NumbersCollection([4, -3, 11, 2])

numbersCollection.sort()
console.log(numbersCollection.data)

const characterCollection = new CharacterCollection('ZbacX')

characterCollection.sort()
console.log(characterCollection.data)

let linkedList = new LinkedList()

linkedList.add(13)
linkedList.add(1)
linkedList.add(7)
linkedList.add(15)
linkedList.add(-5)
console.log(linkedList.data)

linkedList.sort()

console.log(linkedList.data)
