import { insert } from "../../Algorithm/sort/insert";

test("insert sort.", () => {
    const nums = [5, 4, 3, 2, 1];
    const out = [1, 2, 3, 4, 5];
    expect(insert(nums)).toStrictEqual(out);
})