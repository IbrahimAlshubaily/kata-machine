export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    let out = false;
    for (let i = 0; i < needle; i++) {
        if (haystack[i] === needle) {
            out = true;
            break;
        }
    }
    return out;
}
