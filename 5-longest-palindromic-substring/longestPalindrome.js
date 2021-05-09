/**
 * @param {string} s
 * @return {string}
 */

// Решение методом 2 указателей с расширением от центра O(n2) / O(1)
var longestPalindrome = function(s) {
  if (s.length === 1) {
    return s;
  }
  const expandAroundCenter = (str, L, R) => {
    while(L >= 0 && R < str.length && str[L] === str[R]) {
      L--;
      R++;
    }

    return R - L - 1; // возвращаем длину палиндрома-подстроки
  }

  let start = 0; 
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1); // этот случай нужен, когда у нас строка с четным количеством символов и центр находится между букв
    let maxLen = Math.max(len1, len2); // вычисляем максимальную длину текущего палиндрома

    if (maxLen > end - start) {
      start = Math.ceil(i - (maxLen - 1) / 2);
      end = Math.floor(i + maxLen / 2);
    }
  }

  return s.substring(start, end + 1);
};

console.log(longestPalindrome('babad')); // aba
console.log(longestPalindrome('cbbd')); // bb
console.log(longestPalindrome('cd')); // c | d
console.log(longestPalindrome('mississipi')); // ississi
console.log(longestPalindrome('bb')); // bb
console.log(longestPalindrome('v')); // v

