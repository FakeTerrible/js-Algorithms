import ListNode from "../DataStructure/ListNode";

/**
 * 
 * @param {Array} nums 
 * @returns {ListNode}
 */

const createList = function(nums){
    let list = new ListNode(nums[0]);
    let p = list;
    for(let i = 1; i < nums.length; i++){
        p.next = new ListNode(nums[i]);
        p = p.next;
    }
    return list;
}

export {createList};