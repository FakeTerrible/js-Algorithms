import { allPathsSourceTarget } from "../Algorithm/allPathsSourceTarget";

test("所有可能的路径",() => {
    let graph = [[1,2],[3],[3],[]];
    let output = [[0,1,3],[0,2,3]];

    expect(allPathsSourceTarget(graph)).toStrictEqual(output);
})