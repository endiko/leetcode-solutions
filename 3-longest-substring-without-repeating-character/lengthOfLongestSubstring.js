/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
   if(s.length < 2) {
     return s.length;
   }
   const hash = new Map();
   let len = 0;
   let maxLen = 0;

   for(let i = 0; i < s.length; i++) {
     len = (hash.has(s[i]) && hash.get(s[i]) >= i - len) ? i - hash.get(s[i]) : len + 1;
     hash.set(s[i], i);
     maxLen = Math.max(maxLen, len);
   }

   return maxLen;
};

console.log(lengthOfLongestSubstring('abba')) //2
console.log(lengthOfLongestSubstring('au')) //2
console.log(lengthOfLongestSubstring('abcabcbb')) //3
console.log(lengthOfLongestSubstring('pwwkew')) // 3
console.log(lengthOfLongestSubstring(''))//0
console.log(lengthOfLongestSubstring('bbbbbb')) //1
console.log(lengthOfLongestSubstring(' '))// 1

// abcabcbb
// 0 a => len = 1; maxLen = 1; hash = {a => 0}
// 1 b => len = 2 maxLen = 2 hash= {a=> 0, b => 1}
// 2 c => len =3 maxLen = 3 hash={a=> 0, b=> 1, c => 2}
// 3 a => val = 0 len = 3 - 0= 3 maxLen = 3 hash={a=> 3, b=> 1, c => 2}
// 4 b => val = 1 len = 4 - 1= 3 maxLen = 3 hash={a=> 3, b=> 4, c => 2}
// 5 c => val = 2 len = 5 - 2= 3 maxLen = 3 hash={a=> 3, b=> 4, c => 5}
// 6 b => val = 4 len = 6 - 4= 2 maxLen = 3 hash={a=> 3, b=> 6, c => 5}
// 7 b => val = 6 len = 7 - 6= 1 maxLen = 3 hash={a=> 3, b=> 7, c => 5}
