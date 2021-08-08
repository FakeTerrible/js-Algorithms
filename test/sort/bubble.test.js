import { bubble } from "../../Algorithm/sort/bubble";

test("bubble sort",()=>{
    const nums = [5,4,3,2,1];
    const out = [1,2,3,4,5];
    expect(bubble(nums)).toStrictEqual(out);
})