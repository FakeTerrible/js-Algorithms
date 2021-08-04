import { maxSubArray } from "../Algorithm/maxSubArray";

test("max sub array",()=>{
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toStrictEqual(6);
})