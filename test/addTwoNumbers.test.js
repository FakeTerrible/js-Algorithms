import { addTwoNumbers } from "../Algorithm/addTwoNumbers";
import { createList } from "../util/createList";
import { gerateArray } from "../util/gerateArray";


test("两数相加",()=>{
    let l1 = [2,4,3], l2 = [5,6,4];
    let out = [7,0,8];
    expect(gerateArray(addTwoNumbers(createList(l1),createList(l2)))).toStrictEqual(gerateArray(createList(out)));
})