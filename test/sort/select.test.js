import { select } from "../../Algorithm/sort/select";

test("select sort.", () => {
    const nums = [5, 4, 3, 2, 1];
    const out = [1, 2, 3, 4, 5];
    expect(select(nums)).toStrictEqual(out);
})