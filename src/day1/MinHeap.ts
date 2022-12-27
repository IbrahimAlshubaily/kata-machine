export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data.push(value);
        this.heapifyUp(this.length);
        this.length++;
    }

    delete(): number {
        const out = this.data[0];
        this.data[0] = this.data[this.length - 1];
        this.length--;
        this.heapifyDown(0);
        return out;
    }

    heapifyUp(idx: number): void {
        if (idx <= 0) {
            return;
        }
        const parent = this.getParentIdx(idx);
        if (this.data[idx] >= this.data[parent]) {
            return;
        }

        this.swap(idx, parent);
        this.heapifyUp(parent);
    }

    heapifyDown(idx: number): void {
        if (idx >= this.length - 1) {
            return;
        }
        const left = this.getLeftChildIdx(idx);
        const right = this.getRightChildIdx(idx);
        if (left >= this.length || right >= this.length) {
            return;
        }
        if (this.data[idx] <= Math.min(this.data[left], this.data[right])) {
            return;
        }

        let next = left;
        if (this.data[right] < this.data[left]) {
            next = right;
        }
        this.swap(idx, next);
        this.heapifyDown(next);
    }
    // [0, 1, 2, 3, 4, 5, 6]
    //           0
    //      1        2
    //  3      4   5    6
    getParentIdx(idx: number): number {
        return Math.ceil(idx / 2) - 1;
    }
    getLeftChildIdx(idx: number): number {
        return idx * 2 + 1;
    }
    getRightChildIdx(idx: number): number {
        return idx * 2 + 2;
    }

    swap(i: number, j: number) {
        const tmp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = tmp;
    }
}
