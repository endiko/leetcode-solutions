/**
 * @param {number} n
 * @return {number}
 */
/**
 * Recursion with memoization time O(n) / space O(n)
 */
// var climbStairs = function(n) {
//   const countingStairs = (stairsRemaining, memo) => {
//     if(stairsRemaining < 0) {
//       return 0;
//     }

//     if(stairsRemaining === 0) {
//       return 1;
//     }

//     if(memo[stairsRemaining]) {
//       return memo[stairsRemaining];
//     }

//     memo[stairsRemaining] = countingStairs(stairsRemaining - 1, memo) + countingStairs(stairsRemaining - 2, memo);

//     return memo[stairsRemaining];
//   }

//   return countingStairs(n, {});
// };

/**
 * Approach 4: Fibonacci Number time O(n) / space O(1)
 */

var climbStairs = function(n) {
  if(n === 1) return 1;

  let first = 1, second = 2;

  for(let i = 3; i <= n; i++) {
    let temp = first + second;
    first = second;
    second = temp;
  }

  return second;
}


module.exports = climbStairs
