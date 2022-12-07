export default class Stack<T> {
    public length: number;
    private top?: SinglyListNode<T>;

    constructor() {
        this.length = 0;
        this.top = undefined;
    }

    push(item: T): void {
        this.length++;
        const node = { value: item } as SinglyListNode<T>;
        if (!this.top) {
            this.top = node;
            return;
        }
        node.next = this.top;
        this.top = node;
    }
    pop(): T | undefined {
        if (!this.top) {
            return;
        }
        this.length--;
        const out = this.top.value;
        this.top = this.top.next;
        return out;
    }
    peek(): T | undefined {
        return this.top?.value;
    }
}
