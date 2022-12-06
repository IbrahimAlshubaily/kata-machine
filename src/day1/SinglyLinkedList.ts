export default class SinglyLinkedList<T> {
    public length: number;
    private head?: SinglyListNode<T>;
    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {
        this.length++;
        if (!this.head) {
            this.head = { value: item };
            return;
        }
        const nxt = this.head;
        this.head = { value: item, next: nxt };
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
            const nxt = currNode.next;
            currNode.next = { value: item, next: nxt };
        }
    }

    append(item: T): void {
        if (!this.head) {
            return this.prepend(item);
        }
        this.length++;
        let currNode = this.head;
        while (currNode?.next) {
            currNode = currNode.next;
        }
        if (currNode) {
            const nxt = currNode.next;
            currNode.next = { value: item, next: nxt };
        }
    }

    remove(item: T): T | undefined {
        if (this.head?.value === item) {
            this.length--;
            this.head = this.head.next;
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
