declare type TrieNode = {
    isComplete: boolean;
    next: Map<string, TrieNode>;
};

export default class Trie {
    private root: TrieNode;
    constructor() {
        this.root = {
            isComplete: false,
            next: new Map<string, TrieNode>(),
        } as TrieNode;
    }

    insert(item: string, idx: number = 0, curr: TrieNode = this.root): void {
        if (idx === item.length) {
            curr.isComplete = true;
            return;
        }
        let nextNode = curr.next.get(item.charAt(idx));
        if (!nextNode) {
            nextNode = {
                isComplete: false,
                next: new Map<string, TrieNode>(),
            } as TrieNode;
            curr.next.set(item.charAt(idx), nextNode);
        }
        this.insert(item, idx + 1, nextNode);
    }
    delete(item: string, idx: number = 0, curr: TrieNode = this.root): void {
        if (idx === item.length) {
            curr.isComplete = false;
            return;
        }

        const nextNode = curr.next.get(item.charAt(idx));
        if (nextNode) {
            this.delete(item, idx + 1, nextNode);
        }
    }

    find(partial: string): string[] {
        const out: string[] = [];
        const node = this.findNode(partial);
        if (node) {
            this.walk(node, partial, out);
        }
        return out;
    }

    private findNode(
        partial: string,
        idx: number = 0,
        curr: TrieNode | undefined = this.root,
    ): TrieNode | undefined {
        if (idx === partial.length || !curr) {
            return curr;
        }
        const nextNode = curr.next.get(partial.charAt(idx));
        return this.findNode(partial, idx + 1, nextNode);
    }

    private walk(curr: TrieNode, partial: string, result: string[]) {
        if (curr.isComplete) {
            result.push(partial);
        }

        curr.next.forEach((nextNode: TrieNode, currChar: string) => {
            this.walk(nextNode, partial + currChar, result);
        });
    }
}
