import dfs from "@code/DFSGraphList";
import { list2 } from "./graph";

test("dfs - graph", function () {
    const a = dfs(list2, 0, 6);
    console.log(a);
    debugger;
    expect(dfs(list2, 0, 6)).toEqual([0, 1, 4, 5, 6]);

    expect(dfs(list2, 6, 0)).toEqual(null);
});
