/**
 * @param {number[]} nums
 * @return {number}
 */

// Решение опирается на поиск пересечений в зацикленном списке 
// Алгоритм Флойда Floyd's Tortoise and Hare (Cycle Detection) 
// O(n) time complexity
// O(1) space complexity

 var findDuplicate = function(nums) {
  let S = nums[0]; // slow pointer
  let F = nums[0]; // fast pointer
  
  // find intersection in cycled loop
  do {
    S = nums[S];
    F = nums[nums[F]];
  } while(S !== F);

  S = nums[0];
  while(S !== F) {
    S = nums[S];
    F = nums[F];
  }

  return S;
};
  
  console.log(findDuplicate([1,3,4,2,2])) // 2
  console.log(findDuplicate([1,2,2,3,4,5,6,7])) // 2
  console.log(findDuplicate([1,2,3,4,5,6,6,7])) // 6
  console.log(findDuplicate([2,2,2,2,2])) // 2
