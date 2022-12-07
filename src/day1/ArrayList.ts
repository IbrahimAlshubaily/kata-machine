export default class ArrayList<T> {
    public length: number;
    private capacity: number;
    private data: T[];

    constructor(capacity: number) {
        this.length = 0;
        this.data = Array(capacity);
        this.capacity = capacity;
    }

    prepend(item: T): void {
        this.insertAt(item, 0);
    }
    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            return;
        }
        this.insureCapacity();
        this.shift(idx);
        this.data[idx] = item;
    }
    append(item: T): void {
        this.insureCapacity();
        this.data[this.length++] = item;
    }

    remove(item: T): T | undefined {
        let out: T | undefined;
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === item) {
                out = this.removeAt(i);
                break;
            }
        }
        return out;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return;
        }
        return this.data[idx];
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return;
        }
        const out = this.data[idx];
        this.unshift(idx);
        return out;
    }

    private shift(idx: number): void {
        for (let i = this.length; i > idx; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.length++;
    }

    private unshift(idx: number): void {
        for (let i = idx; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.length--;
    }

    private insureCapacity(): void {
        if (this.length < this.capacity) {
            return;
        }

        this.capacity *= 2;
        const data = Array(this.capacity);
        for (let i = 0; i < this.length; i++) {
            data[i] = this.data[i];
        }
        this.data = data;
    }
}
