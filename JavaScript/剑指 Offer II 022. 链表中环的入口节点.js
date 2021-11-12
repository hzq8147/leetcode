/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
      this.val = val;
      this.next = null;
  }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle1 = function(head) {
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

var detectCycle = function(head) {
    let fast = head,slow = head;
    while (slow != null && fast != null && fast.next != null){
        fast = fast.next.next;
        slow = slow.next;
        if (fast == slow){
            fast = head;
            while (fast != slow){
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
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
 * 1.链表-hash表
 * Set和Map结构
 * 2.快慢指针 快指针是慢指针路程2倍 计算得到 a = c + (n-1)(b+c) 
 * 相遇之后，快指针回原点 两指针共同next 再相遇即为环起点
 */