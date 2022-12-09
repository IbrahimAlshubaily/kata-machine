export default function in_order_search(head: BinaryNode<number>): number[] {
    const out: number[] = [];
    __in_order_search__(head, out);
    return out;
}

function __in_order_search__(
    head: BinaryNode<number> | undefined,
    result: number[],
) {
    if (!head) {
        return;
    }
    __in_order_search__(head.left, result);
    result.push(head.value);
    __in_order_search__(head.right, result);
}
