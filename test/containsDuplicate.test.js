import { containsDuplicate } from "../Algorithm/containsDuplicate";

test("存在重复元素",()=>{
    expect(containsDuplicate([1,2,2])).toStrictEqual(true);
})