const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const result: Point[] = [start];
    const visited: boolean[][] = Array(maze.length);
    for (let i = 0; i < maze.length; i++) {
        visited[i] = Array(maze[0].length).fill(false);
    }

    __Walk__(maze, wall, start, end, visited, result);
    return result;
}

function __Walk__(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
    visited: boolean[][],
    result: Point[],
): boolean {
    if (
        start.x < 0 ||
        start.x >= maze[0].length ||
        start.y < 0 ||
        start.y >= maze.length ||
        maze[start.y].charAt(start.x) === wall ||
        visited[start.y][start.x]
    )
        return false;

    if (start.x === end.x && start.y === end.y) return true;

    visited[start.y][start.x] = true;

    for (let i = 0; i < directions.length; i++) {
        const dir = directions[i];
        const nextStart = { x: start.x + dir[0], y: start.y + dir[1] } as Point;
        result.push(nextStart);
        if (__Walk__(maze, wall, nextStart, end, visited, result)) {
            return true;
        }
        result.pop();
    }
    return false;
}
