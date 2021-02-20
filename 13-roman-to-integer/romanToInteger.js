/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
  const romanNumeralsMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let res = 0
  
  for(let i = 0; i < s.length; i++) {
     const curr = romanNumeralsMap[s[i]]
     const next = romanNumeralsMap[s[i + 1]]

     if (next) {
         if(curr >= next) {
             res += curr
         } else {
             res += (next - curr)
             i++
         }
     } else {
         res += curr
     }
  }

  return res
};

module.exports = romanToInt
