// export interface Sortable {
//     length: number
//     compare(leftIdx: number, rightIdx: number): boolean
//     swap(leftIdx: number, rightIdx: number): void
// }

export abstract class Sorter {  

    abstract length: number
    abstract compare(leftIdx: number, rightIdx: number): boolean
    abstract swap(leftIdx: number, rightIdx: number): void

    sort(): void {
        const { length } = this

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1; j++) {

                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1)
                }
            }
        }
    }
}
