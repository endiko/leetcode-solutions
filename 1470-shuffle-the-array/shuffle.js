/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

/*
  Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
  Return the array in the form [x1,y1,x2,y2,...,xn,yn].
 */
 var shuffle = function(nums, n) {
  if (nums.length < 2) {
    return nums;
  }
  if (n > nums.length) return [];
    const result = [];
    let i = 0;

    while(i < n) {
      result.push(nums[i], nums[n + i]);
      i++;
    }

    return result;
};

// console.log(shuffle([2,5,1,3,4,7], 3));

module.exports = shuffle;
