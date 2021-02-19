/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

  // 1 pointer ~ 80ms
  if (!head) return false;
  
  let currentPointer = head;
  
  while(currentPointer !== null && currentPointer.next !== null) {
    currentPointer.value = 'visited';
    currentPointer = currentPointer.next;
    
    if(currentPointer.value === 'visited') {
      return true;
    }
  }
  
  return false;
  
  
// 2 pointers ~ 88ms
//   let slowPointer = head,
//       fastPointer = head;
  
  
//   while(fastPointer !== null && fastPointer.next !== null) {
//     fastPointer = fastPointer.next.next;
//     slowPointer = slowPointer.next;
    
//     if(fastPointer === slowPointer) {
//       return true;
//     }
//   }

//   return false;
};