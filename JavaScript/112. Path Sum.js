/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    let result = false;
    const search = function (node,addSum) {
        if (!node) {result = false;return;}
        const sums = addSum + node.val;

        if (node.left != null ){
            search(node.left,sums);
        }
        if (node.right != null){
            search(node.right,sums);
        }
        if (sums == sum && node.left == null && node.right == null) {
            result = true;
            return;
        }
    }
    search(root,0);
    return result;
};
