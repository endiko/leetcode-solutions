/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const n = nums.length;
  const list = [],
        set = new Set(nums);
  
  for(let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      list.push(i);
    }
  }

  return list;
}

module.exports = findDisappearedNumbers
