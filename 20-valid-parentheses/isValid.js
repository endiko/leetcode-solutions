/**
 * @param {string} s
 * @return {boolean}
 */

// 1 solution ~ 300ms tooo slow

//  const findPairParenthesePosition = (str, startPos, op, cp) => { // op - open parenthese, cp - closing parenthese
//   let opCount = 0, cpCount = 0;
//   for(let i = startPos; i < str.length; i++) {
//     if (i !== startPos && str[i] === op) {  //'{[[{()[]{}}]]}'
//       opCount++;
//     } else if (str[i] === cp) {
//       if(opCount > 0 && opCount !== cpCount) {
//         cpCount++;
//       } else {
//         return i;
//       }
//     }
//   }
//   return -1;
//  }

// var isValid = function(s) {
//     if(s === '' || s.length < 2 || s[0] === ')' || s[0] === '}' || s[0] === ']' || s.length % 2 !== 0) {
//       return false;
//     }

//     for(let i = 0; i < s.length; i++) {
//       let substr = '';
//       let pairPosition = 0;

//       if(s[i]=== ']' || s[i] === '}' || s[i] === ')') {
//         return false
//       }

//       switch(s[i]) {
//         case '{':
//           pairPosition = findPairParenthesePosition(s, i, s[i], '}');
//           break;
//         case '[':
//           pairPosition = findPairParenthesePosition(s, i, s[i], ']');
//           break;
//         case '(':
//           pairPosition = findPairParenthesePosition(s, i, s[i], ')');
//           break;
//       }

//       if(pairPosition > 0) {
//         if(pairPosition - i === 1) {
//           i = pairPosition;
//         } else {
//           substr = s.substring(i + 1, pairPosition);
//           if (isValid(substr)) {
//             i = pairPosition;
//           } else {
//             return false;
//           }
//         }
//       } else {
//         return false;
//       }
//     }

//     return true;
// };



// solution 2 stack ~ 108ms

// var isValid = function(s) {
//   if(s === '' || s.length < 2 || s[0] === ')' || s[0] === '}' || s[0] === ']' || s.length % 2 !== 0) {
//     return false;
//   }
//   const stack = [];

//   let i = 0;
//   while(i < s.length) {
//     if(s[i] === '[' || s[i] === '{' || s[i] === '(') {
//       stack.push(s[i]);
//     } else {
//       let open = '';
//       switch(s[i]) {
//         case ']':
//           open = '[';
//           break;
//         case '}':
//           open = '{';
//           break;
//         case ')':
//           open = '(';
//           break;
//       }
//       if(stack[stack.length - 1] === open) {
//         stack.pop();
//       } else {
//         stack.push(s[i])
//       }
//     }
    
//     i++;
//   }

//   return stack.length == 0 ? true : false;
// }

// solution 3 stack + map ~ 112ms

var isValid = function(s) {
  // start без этой проверки ~ 92ms
  if(s === '' || s.length < 2 || s[0] === ')' || s[0] === '}' || s[0] === ']' || s.length % 2 !== 0) {
    return false;
  }
  // end без этой проверки ~ 92ms
  const bracketMap = {"(": ")", "[": "]",  "{": "}"}
  const openPar = ["(", "[", "{"]
  const stack = []

  for(let i = 0; i < s.length; i++) {
    if(openPar.includes(s[i])) {
      stack.push(s[i])
    } else if (stack.length && bracketMap[stack[stack.length -1]] === s[i]) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.length == 0
}

module.exports = isValid

/*
console.log(isValid('()')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(]')) // false
console.log(isValid('([)]')) // false
console.log(isValid('{[]}')) // true
console.log(isValid('')) // false
console.log(isValid('}')) // false
console.log(isValid('(')) // false
console.log(isValid('{[[{()[]{}}]]}')) // true
console.log(isValid('{[[{()[]{}}]]}{}')) // true

console.log(isValid("(){}}{")) // false

console.log(isValid("([}}])")) // false
*/