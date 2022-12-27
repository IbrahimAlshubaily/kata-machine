export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const result: number[] = [source];
    const visited: Set<number> = new Set();
    if (_dfs(graph, source, needle, visited, result)) {
        return result;
    }
    return null;
}

function _dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
    visited: Set<number>,
    result: number[],
): boolean {
    if (visited.has(source)) {
        return false;
    }
    visited.add(source);
    for (let i = 0; i < graph[source].length; i++) {
        const nextNode = graph[source][i].to;
        result.push(nextNode);
        if (nextNode === needle) {
            return true;
        }
        if (_dfs(graph, nextNode, needle, visited, result)) {
            return true;
        }
        result.pop();
    }
    return false;
}
