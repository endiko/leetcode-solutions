/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Bredth first search
var minDepth = function (root) {
  if (root === null) return 0;

  const queue = [];
  queue.push(root);

  let depth = 0;

  while(queue.length !== 0) {
    let numberOfNodes = queue.length;
    
    while (numberOfNodes > 0) {
      const first = queue.shift();

      if (first.left === null && first.right === null) {
        depth++;
        return depth;
      }
      if (first.left !== null) {
        queue.push(first.left);
      }
      if (first.right !== null) {
        queue.push(first.right);
      }

      numberOfNodes--;
    }
    depth++;
  }
};
