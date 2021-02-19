/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//   if(strs.length === 0 || strs[0].length === 0) {
//     return ''
//   }
//   const model = strs[0]
//   let inc = 0;
//   let prefix = ''
  
//   while(model[inc]){
//   const s = model[inc]
//    const res = strs.find((str) => str[inc] !== s);
    
//     if(res && res.length > 0 || res === '') {
//       break
//     }
    
//     prefix += s
//     inc++
//   }
  
//   return prefix !== '' ? prefix : ''
// };

// Method 2 with binary search дольше, чем 1 решение

const isCommonPrefix = (arr, len) => {
  const model = arr[0].substring(0, len)

  for(let i = 1; i < arr.length; i++) {
    const substr = arr[i].substring(0, model.length)

    if(substr !== model) {
      return false
    }
  }

  return true
}

var longestCommonPrefix = function(strs) {
  if(strs === null || strs.length === 0) {
    return ''
  }
  let minLen = strs.reduce((prev, curr) => (Math.min(prev, curr.length)), Number.MAX_SAFE_INTEGER)

  let low = 1, high = minLen, prefix = ''

  while(low <= high) {
    const mid = Math.floor((low + high) / 2)

    if(isCommonPrefix(strs, mid)) {
      prefix = strs[0].substring(0, mid)
      low = mid + 1;
      
    } else {
      high = mid - 1;
    }
  }

  // return count == 1 ? '' : strs[0].substring(0, parseInt((low + high) / 2))

  return prefix
}

module.exports = longestCommonPrefix
