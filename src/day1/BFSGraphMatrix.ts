import Queue from "./Queue";

export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const q = new Queue<number>();
    q.enqueue(source);

    const prev = Array(graph.length).fill(-1);
    while (q.length > 0) {
        const curr = q.deque() as number;
        if (curr === needle) {
            break;
        }
        graph[curr].forEach((value: number, idx: number) => {
            if (value != 0 && prev[idx] === -1) {
                prev[idx] = curr;
                q.enqueue(idx);
            }
        });
    }
    console.log(prev);
    if (prev[needle] !== -1) {
        const path: number[] = [];
        let curr = needle;
        path.push(curr);
        do {
            curr = prev[curr];
            path.push(curr);
        } while (curr !== source);

        return path.reverse();
    }
    return null;
}
