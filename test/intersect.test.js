import { intersect } from "../Algorithm/intersect";

test("an array of their intersection.",()=>{
    let arr1 = [1,2,2,1],arr2 = [2,2];
    expect(intersect(arr1, arr2)).toStrictEqual([2,2]);
})