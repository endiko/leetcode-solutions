/**
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
   if(!nums.length) {
     return nums;
   }
  const ranges = [];
  let range = [];
  
  for(let i = 0; i <= nums.length; i++) {
    if(!range.length) {
      range.push(nums[i]);
    } else {
      if(nums[i] - range[range.length - 1] === 1) {
        range.push(nums[i]);
      } else {
        ranges.push(range);
        range = [nums[i]];
      }
    }
  }

  return ranges.reduce((prev, next) => {
    let temp = next.length > 1 ? `${next[0]}->${next[next.length - 1]}` : `${next[0]}`;
    return [...prev, temp]
  }, []);
};

var summaryRangesTwoPointers = function(nums) {
  if(!nums.length) { return nums;}
  const res = [];
  let start = 0, end = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i + 1] - nums[i] === 1) {
      end++;
    } else {
      res.push(start === end ? `${nums[start]}` : `${nums[start]}->${nums[end]}`);
      start = i + 1;
      end = start;
    }
  }

  return res;
}

var summaryRangesTwoPointersWithReduce = function(nums) {
  if(!nums.length) { return nums;}
  let start = 0, end = 0;

  return nums.reduce((res, current, idx, arr) => {
    if(arr[idx + 1] - current === 1) {
      end++;
    } else {
      res.push(start === end ? `${nums[start]}` : `${nums[start]}->${nums[end]}`);
      start = idx + 1;
      end = start;
    }

    return res;
  }, []);
}


console.log(summaryRanges([0,1,2,4,5,7]));
