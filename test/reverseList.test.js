import {reverseList} from "../Algorithm/reverseList.js";
import ListNode from "../DataStructure/ListNode";

const createList = function(nums){
    let list = new ListNode(nums[0]);
    let p = list;
    for(let i = 1; i < nums.length; i++){
        p.next = new ListNode(nums[i]);
        p = p.next;
    }
    return list;
}

const gerateArray = function(head){
    let arr = [];
    while(!!head){
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}


test("翻转列表",()=>{
  expect(gerateArray(reverseList(createList([1,2,3,4,5])))).toStrictEqual([5,4,3,2,1])  
})