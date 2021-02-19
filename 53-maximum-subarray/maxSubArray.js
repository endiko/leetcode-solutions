/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) { // O(n) | O(1)
  let current = 0;

  return nums.reduce((prev, num) => {
    current = Math.max(current + num, num);
    return Math.max(prev, current);
  }, Number.MIN_SAFE_INTEGER);
};

module.exports = maxSubArray
