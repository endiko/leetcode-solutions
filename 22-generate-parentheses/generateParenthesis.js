/**
 * @param {number} n
 * @return {string[]}
 * 
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * 
 */
 var generateParenthesis = function(n) {
  const backtrack = (arr, currentString, opened, closed, max) => {
    if (currentString.length === max * 2) {
      arr.push(currentString);
      return;
    }

    if (opened < max) {
      currentString += '(';
      backtrack(arr, currentString, opened + 1, closed, max);
      currentString = currentString.slice(0, -1);
    }

    if (closed < opened) {
      currentString += ')';
      backtrack(arr, currentString, opened, closed + 1, max);
      currentString = currentString.slice(0, -1);
    }
  }

  const result = [];
  let parStr = '';

  backtrack(result, parStr, 0, 0, n);
  return result;
};



console.log(generateParenthesis(3));
