/**
 * @param {number[]} nums
 * @return {number}
 */
//  var removeDuplicates = function(nums) {
//   if (nums.length === 0 || nums.length === 1) {
//     return nums.length;
//   }
//   for(let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }
//   return nums.length;
// };

/**
  2 pointers
 */
var removeDuplicates = function(nums) {
  if (nums.length === 0 || nums.length === 1) {
    return nums.length;
  }

  let p = 0;
  for(let i = 1; i < nums.length; i++) {
    if (nums[p] !== nums[i]) {
      p++;
      nums[p] = nums[i];
    }
  }
  return p + 1;
};

module.exports = removeDuplicates;
