export default class DoublyLinkedList<T> {
    public length: number;
    private head?: ListNode<T>;
    private tail?: ListNode<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        this.length++;
        if (!this.head) {
            this.head = this.tail = { value: item };
            return;
        }
        const newNode = { value: item, next: this.head };
        this.head.prev = newNode;
        this.head = newNode;
    }
    insertAt(item: T, idx: number): void {
        if (idx === 0) {
            this.prepend(item);
            return;
        }

        if (idx === this.length) {
            this.append(item);
            return;
        }

        this.length++;
        let currNode = this.head;
        while (idx > 0 && currNode) {
            if (idx === 0) {
                const newNode = {
                    value: item,
                    prev: currNode,
                    next: currNode.next,
                };
                if (currNode.next) {
                    currNode.next.prev = newNode;
                }
                currNode.next = newNode;
            }
            idx--;
            currNode = currNode?.next;
        }
    }
    append(item: T): void {
        if (!this.tail) {
            return this.prepend(item);
        }
        this.length++;
        const newNode = { value: item, prev: this.tail };
        this.tail.next = newNode;
        this.tail = newNode;
    }

    remove(item: T): T | undefined {
        if (item === this.head?.value) {
            return this.removeAt(0);
        }

        if (item === this.tail?.value) {
            return this.removeAt(this.length - 1);
        }

        let idx = 0;
        let currNode = this.head;
        while (currNode) {
            if (currNode.value === item) {
                break;
            }
            currNode = currNode.next;
            idx++;
        }
        const foundIdx = idx > 0 && idx < this.length;
        return foundIdx ? this.removeAt(idx) : undefined;
    }
    get(idx: number): T | undefined {
        let currNode = this.head;
        let out: T | undefined = undefined;
        while (idx >= 0 && currNode) {
            if (idx === 0) {
                out = currNode.value;
                break;
            }
            idx--;
            currNode = currNode.next;
        }
        return out;
    }

    removeAt(idx: number): T | undefined {
        let out: T | undefined = undefined;
        if (idx === 0) {
            out = this.head?.value;
            if (this.length === 1 && this.head) {
                this.head = this.tail = undefined;
            } else {
                this.head = this.head?.next;
                if (this.head) this.head.prev = undefined;
            }
        } else if (idx === this.length - 1) {
            out = this.tail?.value;
            this.tail = this.tail?.prev;
            if (this.tail) this.tail.next = undefined;
        } else {
            let currNode = this.head;
            while (idx >= 0 && currNode) {
                if (idx === 0) {
                    out = currNode.value;
                    if (currNode.prev) currNode.prev.next = currNode.next;
                    if (currNode.next) currNode.next.prev = currNode.prev;
                    currNode.prev = currNode.next = undefined;
                }
                idx--;
                currNode = currNode.next;
            }
        }
        this.length--;
        return out;
    }
}
