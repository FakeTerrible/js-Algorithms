/**
 * 
 * @param {ListNode} head 
 * @returns {Array}
 */

const gerateArray = function (head) {
    let arr = [];
    while (!!head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}

export {gerateArray};