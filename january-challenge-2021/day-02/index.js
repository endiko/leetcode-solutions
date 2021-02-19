/**
  * Find a Corresponding Node of a Binary Tree in a Clone of That Tree
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

let bst = new BinarySearchTree();
let node = new TreeNode();

BinarySearchTree.prototype.insert = function(value) {
  let node = new TreeNode(value);

  if(!this.root) {
    this.root = node;
  } else {
    let current = this.root;

    while(current) {
      if(value === current.value) {
        return undefined
      }
      
      if(current.left === null) {
        current.left = node
        return this
      } else {
        if(current.right === null) {
          current.right = node
          return this
        } 
      }

      current = current.left ? current.left : current.right
    }
  }
}

/*
      7
     / \
    4   3
       / \
      6  19
    
*/

const input = [7, 4, 3, null, null, 6, 19]
const target = new TreeNode(3)

input.forEach(el => {
  bst.insert(el)
})

console.log(bst)
console.log(target)


var getTargetCopy = function(original, cloned, target) {
    let result = null;

    if(cloned.val === target.val) {
      return cloned;
    }

    while (result === null) {
      if(cloned.left !== null) {
        result = getTargetCopy(original.left, cloned.left, target)
      }
      
      if (cloned.right !== null) {
        result = getTargetCopy(original.right, cloned.right, target)
      }
    }
      
    return result;
};
