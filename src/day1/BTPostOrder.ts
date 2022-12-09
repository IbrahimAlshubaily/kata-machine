export default function post_order_search(head: BinaryNode<number>): number[] {
    const out: number[] = [];
    __poster_order_search__(head, out);
    return out;
}

function __poster_order_search__(
    head: BinaryNode<number> | undefined,
    result: number[],
) {
    if (!head) {
        return;
    }
    __poster_order_search__(head.left, result);
    __poster_order_search__(head.right, result);
    result.push(head.value);
}
