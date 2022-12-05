export default function merge_sort(arr: number[]): number[] {
    if (arr.length === 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = merge_sort(arr.slice(0, mid));
    const right = merge_sort(arr.slice(mid, arr.length));
    return merge(right, left);
}

function merge(a: number[], b: number[]): number[] {
    let l = 0;
    let r = 0;
    const out = [];
    while (l < a.length && r < b.length) {
        if (a[l] < b[r]) {
            out.push(a[l++]);
        } else {
            out.push(b[r++]);
        }
    }
    while (l < a.length) out.push(a[l++]);
    while (r < b.length) out.push(b[r++]);
    //console.assert(out.length === a.length + b.length);
    return out;
}
