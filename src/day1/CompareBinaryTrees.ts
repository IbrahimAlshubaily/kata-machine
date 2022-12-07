export default function compare(
    a?: BinaryNode<number>,
    b?: BinaryNode<number>,
): boolean {
    if (!a && !b) {
        return true;
    }

    return (
        a?.value === b?.value &&
        compare(a?.left, b?.left) &&
        compare(a?.right, b?.right)
    );
}
