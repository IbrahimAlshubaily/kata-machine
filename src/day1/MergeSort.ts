export default function merge_sort(arr: number[]): number[] {
    return __merge_sort__(arr, 0, arr.length);
}

function __merge_sort__(arr: number[], start: number, end: number): number[] {
    if (start >= end - 1) return [arr[start]];
    const mid = start + Math.floor((end - start) / 2);
    const left = __merge_sort__(arr, start, mid);
    const right = __merge_sort__(arr, mid, end);
    return merge(right, left);
}

function merge(a: number[], b: number[]): number[] {
    let l = 0;
    let r = 0;
    let idx = 0;
    const out = Array(a.length + b.length);
    while (l < a.length && r < b.length) {
        if (a[l] < b[r]) {
            out[idx++] = a[l++];
        } else {
            out[idx++] = b[r++];
        }
    }
    while (l < a.length) out[idx++] = a[l++];
    while (r < b.length) out[idx++] = b[r++];
    return out;
}
