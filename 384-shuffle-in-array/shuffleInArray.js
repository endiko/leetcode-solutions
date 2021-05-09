/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
const arr = [2, 1, 3, 5, 6, 7, 8, 10, 9, 4];

const shuffleArray = (arr) => {
  for(let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    let random = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[random];
    arr[random] = temp;
  }
  return arr;
}

console.log(shuffleArray(["Solution", "shuffle", "reset", "shuffle"]))
console.log(shuffleArray(arr))

