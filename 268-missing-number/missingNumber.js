/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const n = nums.length;
  
  nums.sort((a, b) => a - b);

  for(let i = 0; i < nums.length; i++) {
    if (i != nums[i]) {
      return i;
    }
  }
  return nums[nums.length - 1] !== n ? n : -1;
};

module.exports = missingNumber
