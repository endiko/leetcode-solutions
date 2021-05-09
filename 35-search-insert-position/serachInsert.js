/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let pos = nums.indexOf(target);

  if (pos) {
    return pos;
  }

  nums.findIndex(num => num < target)
};
