import { twoSum } from "../Algorithm/twoSum";

test("have two number equal target",()=>{
    const nums = [2,7,11,15];
    const output = [0,1];
    expect(twoSum(nums,9)).toStrictEqual(output);
})