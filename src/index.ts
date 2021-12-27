import { NumbersCollection } from "./NumbersCollection"
import { Sorter } from "./Sorter"

const numbersCollection = new NumbersCollection([4, -3, 11, 2])
const sorter = new Sorter(numbersCollection)

sorter.sort()
console.log(numbersCollection.data)

// const sorterStr = new Sorter('ZbacX')

// sorterStr.sort()
// console.log(sorterStr.collection)
