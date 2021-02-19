/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.runnigTotal = [0]

  for(let i = 0; i < nums.length; i++) {
    this.runnigTotal[i + 1] = this.runnigTotal[i] + nums[i]
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.runnigTotal[j + 1] - this.runnigTotal[i]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

const numArr = new NumArray([-2, 0, 3, -5, 2, -1])

module.exports = numArr
