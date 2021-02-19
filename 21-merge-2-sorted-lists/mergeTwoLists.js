/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(l1, l2) {
  let temp = new ListNode(-1)
  let head = temp

  while(l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      head.next = l1
      l1 = l1.next
      
    } else {
      head.next = l2
      l2 = l2.next
    }
  }

  // если один список длиннее другого

  if(l1 !== null) {
    head.next = l1
  } else {
    head.next = l2
  }

  return temp.next
};

l1 = [1,2,4], l2 = [1,3,4]

console.log(mergeTwoLists(l1, l2))
