import { Sortable } from "./Sorter"

export class CharacterCollection implements Sortable {
    private dataArr: string[]

    constructor(data: string) {
        this.dataArr = data.split('')
    }

    get length(): number {
        return this.dataArr.length
    }

    get data(): string {
        return this.dataArr.join('')
    }

    compare(leftIdx: number, rightIdx: number): boolean {
        return this.dataArr[leftIdx] > this.dataArr[rightIdx]
    }

    swap(leftIdx: number, rightIdx: number): void {
        const tmp = this.dataArr[leftIdx]

        this.dataArr[leftIdx] = this.dataArr[rightIdx]
        this.dataArr[rightIdx] = tmp
    }
}
