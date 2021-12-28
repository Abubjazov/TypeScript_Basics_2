import { CharacterCollection } from "./CharacterCollection"
import { LinkedList } from './LinkedList'
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

let linkedList = new LinkedList()

linkedList.add(13)
linkedList.add(1)
linkedList.add(7)
linkedList.add(15)
linkedList.add(-5)
linkedList.print()

const sorterLL = new Sorter(linkedList)
sorterLL.sort()

linkedList.print()
