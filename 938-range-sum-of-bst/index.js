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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

 var rangeSumBST = function(root, low, high) {
  // Функция проверки входит ли число в диапазон
  const inRange = (val) => val > low && val < high;

  // Функция подсчета вершин, входящих в диапазон
  const sumTotal = (val, sum) => inRange(val) ? sum += val : sum;

  // Обход дерева
  const traverse = (root, sum) => {
    if (!root) return sum;

    return sumTotal(root.val, sum) + traverse(root.left, sum) + traverse(root.right, sum)
  }
  
  return traverse(root, 0);
};


// version 2
var rangeSumBST = function(root, low, high) {
  if (!root) { return 0;}

  if (root.val > high) {
    return rangeSumBST(root.left, low, high);
  } else if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  } else {
    return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
  }
};

module.exports = rangeSumBST;
