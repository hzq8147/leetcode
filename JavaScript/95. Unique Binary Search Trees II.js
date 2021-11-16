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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  const generateNode = (start, end) => {
    if (start > end) {
      return [null];
    }
    let nodes = [];
    for (let i = start; i <= end; i++) {
      let node = null;
      let lefts = generateNode(start, i - 1);
      let rights = generateNode(i + 1, end);
      for (let nodeI of lefts) {
        for (let nodeJ of rights) {
          node = new TreeNode(i, nodeI, nodeJ);
          nodes.push(node);
        }
      }

    }
    return nodes;
  }
  return generateNode(1, n);

};
console.log(generateTrees(4));

/**
 * 生成搜索树
 * 全排列
 * 搜索树： 左子节点<中间节点<右子节点
 */