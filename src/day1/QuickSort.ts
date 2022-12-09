export default function quick_sort(arr: number[]): void {
    __quick_sort__(arr, 0, arr.length);
}

function __quick_sort__(arr: number[], start: number, end: number) {
    if (start >= end - 1) return;
    const idx = partition(arr, start, end);
    __quick_sort__(arr, start, idx);
    __quick_sort__(arr, idx, end);
}

function partition(arr: number[], start: number, end: number): number {
    const pivot = start + Math.floor(Math.random() * (end - start));
    let partionIdx = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < arr[pivot]) {
            const tmp = arr[i];
            arr[i] = arr[partionIdx];
            arr[partionIdx] = tmp;
            partionIdx++;
        }
    }
    return partionIdx;
}
