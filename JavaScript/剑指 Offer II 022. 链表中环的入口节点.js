/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    const map = new Set();
    let pos = head;
    while (pos && pos.next != null){
        if (map.has(pos)){
            return pos;
        }else {
            map.add(pos);
            pos = pos.next;
        }
    }
    return null;
};
a = new ListNode(1);
b = new ListNode(2);
a.next = b;
b.next = a;
console.log(detectCycle(a));
/**
 * 链表-hash表
 * Set和Map结构
 */