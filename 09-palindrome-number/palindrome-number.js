/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const MAX_INT = Math.pow(2, 31) - 1
  
  if (x < 0 || x > MAX_INT || (x % 10 == 0 && x != 0)) {
    return false
  }
  
  let reversed = 0;
  
  while(x > reversed) {
    reversed = reversed * 10 + x % 10
    x = parseInt(x / 10)
  }
  
  return x === reversed || x === parseInt(reversed / 10)
};

module.exports = isPalindrome
