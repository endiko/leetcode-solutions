/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
 */
var singleNumber = function(nums) {
  const hash = new Map();

  nums.forEach(num => {
    if(hash.has(num)) {
      hash.set(num, hash.get(num) + 1)
    } else {
      hash.set(num, 1)
    }
  });

  for(let key of hash.keys()) {
    if (hash.get(key) === 1) {
      return key;
    }
  }

  return 0;
};

module.exports = singleNumber
