export default function pre_order_search(head: BinaryNode<number>): number[] {
    const out: number[] = [];
    __pre_order_search__(head, out);
    return out;
}

function __pre_order_search__(
    head: BinaryNode<number> | undefined,
    result: number[],
) {
    if (!head) {
        return;
    }

    result.push(head.value);
    __pre_order_search__(head.left, result);
    __pre_order_search__(head.right, result);
}
