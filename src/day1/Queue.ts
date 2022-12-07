import SinglyLinkedList from "./SinglyLinkedList";

export default class Queue<T> {
    public length: number;
    private head?: SinglyListNode<T>;
    private tail?: SinglyListNode<T>;
    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        this.length++;
        const node = { value: item } as SinglyListNode<T>;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = this.tail.next;
    }

    deque(): T | undefined {
        if (!this.head) {
            return;
        }
        this.length--;
        const out = this.head.value;
        this.head = this.head.next;
        if (this.length === 0) this.tail = undefined;
        return out;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
