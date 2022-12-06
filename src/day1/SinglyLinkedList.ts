export default class SinglyLinkedList<T> {
    public length: number;
    private head?: SinglyListNode<T>;
    private tail?: SinglyListNode<T>;
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
        this.head = { value: item, next: this.head };
    }

    insertAt(item: T, idx: number): void {
        if (idx === 0) {
            return this.prepend(item);
        }

        if (idx === this.length) {
            return this.append(item);
        }

        this.length++;
        let currNode = this.head;
        while (--idx > 0 && currNode?.next) {
            currNode = currNode.next;
        }

        if (currNode) {
            currNode.next = { value: item, next: currNode.next };
        }
    }

    append(item: T): void {
        this.length++;
        if (this.tail) {
            this.tail.next = { value: item };
            this.tail = this.tail.next;
        } else {
            this.head = this.tail = { value: item };
        }
    }

    remove(item: T): T | undefined {
        if (this.head?.value === item) {
            this.length--;
            this.head = this.head.next;
            if (this.length === 0) {
                this.tail = undefined;
            }
            return item;
        }
        let currNode = this.head;
        while (currNode?.next) {
            if (currNode.next.value === item) {
                this.length--;
                currNode.next = currNode.next.next;
                return item;
            }
            currNode = currNode.next;
        }
        return;
    }

    get(idx: number): T | undefined {
        if (idx === 0) {
            return this.head?.value;
        }

        if (idx === this.length - 1) {
            return this.tail?.value;
        }

        let currNode = this.head;
        while (currNode) {
            if (idx === 0) {
                return currNode.value;
            }
            idx--;
            currNode = currNode.next;
        }
        return;
    }

    removeAt(idx: number): T | undefined {
        const item = this.get(idx);
        if (item) {
            return this.remove(item);
        }
        return;
    }
}
