/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
    let result = 0;
    const getTilt = (node) =>{
        if (node == null){
            return 0;
        }
        if (node.left == null && node.right == null){
            return node.val;
        }else {
            let left = getTilt(node.left);
            let right = getTilt(node.right);
            result += Math.abs(left-right);
            return node.val + left + right;
        }   
    }
    getTilt(root);
    return result;
};
let root1 = new TreeNode(1,new TreeNode(2),new TreeNode(3));
let root = new TreeNode(4,new TreeNode(2,new TreeNode(3),new TreeNode(5)),new TreeNode(9,null,new TreeNode(7)));
console.log(findTilt(root));

/**
 * 二叉树 求子节点的和
 */