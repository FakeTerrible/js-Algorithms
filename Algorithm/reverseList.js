import ListNode from "../DataStructure/ListNode.js";

// 翻转链表

/**
 * 
 * @param {ListNode} head 
 * @returns {ListNode}
 */

var reverseList = function (head) {

    // 判断链表是否为空或只有一个节点
    if (head == null || head.next == null) {
        return head;
    }

    // 迭代方式进行反转链表
    let p = null, cur = head, next;
    while (cur != null) {
        next = cur.next;
        cur.next = p;
        p = cur;
        cur = next;
    }
    return p;
};

export {reverseList};