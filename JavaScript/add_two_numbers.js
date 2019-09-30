
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 /**
 * First Code
 */
var addTwoNumbers = function(l1, l2) {
    var result={
        val:0,
        next:null,
    };
    let tmp=0;
    var node;
    node=result;
    while (l1.val!=null || l2.val!=null ||tmp>0){
        let tmpNode={};
        let x=l1.val;
        let y=l2.val;
        tmpNode.val=x+y+tmp;
        tmp=0;
        if (tmpNode.val>=10){
            tmpNode.val-=10;
            tmp=1;
        } 
        node.next=tmpNode;
        node=node.next;
        
        if (l1.next==null && l2.next==null) break;  
        if (l1.next!==null) 
            l1=l1.next
         else l1={
                    val:0,
                    next:null,
        };
        if (l2.next!==null) l2=l2.next 
            else l2={
                    val:0,
                    next:null
        };
    }
    if (tmp>0){
        node.next={
            val:1,
            next:null
        }
    }
    return result.next
};


/**
 * Second Code
 */
var addTwoNumbers = function(l1, l2) {
    var root={
        val:0,
        next:null
    };
    var curNode=root;
    var tmp=0;
    while (tmp>0 || l1!=null || l2!=null){
        let x=l1!=null? l1.val :0;
        let y=l2!=null?l2.val:0;
        let tmpNode={};
        tmpNode.val=x+y+tmp;
        tmp=0;
        if (tmpNode.val>=10){
            tmpNode.val-=10;
            tmp=1;
        }
        curNode.next=tmpNode;
        curNode=curNode.next;
        
        if (l1!=null) l1=l1.next;
        if (l2!=null) l2=l2.next;
    }
    return root.next;
};