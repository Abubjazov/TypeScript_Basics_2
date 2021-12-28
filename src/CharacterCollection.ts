import { Sortable, Sorter } from "./Sorter"

export class CharacterCollection extends Sorter implements Sortable {
    private dataArr: string[]

    constructor(data: string) {
        super()
        this.dataArr = data.split('')
    }

    get length(): number {
        return this.dataArr.length
    }

    get data(): string {
        return this.dataArr.join('')
    }

    compare(leftIdx: number, rightIdx: number): boolean {
        return this.dataArr[leftIdx].toLowerCase() > this.dataArr[rightIdx].toLowerCase()
    }

    swap(leftIdx: number, rightIdx: number): void {
        const tmp = this.dataArr[leftIdx]

        this.dataArr[leftIdx] = this.dataArr[rightIdx]
        this.dataArr[rightIdx] = tmp
    }
}
