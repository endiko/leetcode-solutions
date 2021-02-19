/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const MAX_SAFE_NUM = Math.pow(2, 31) - 1,
        MIN_SAFE_NUM = Math.pow(-2, 31)
  
  let reversedNum = 0
  
  while(x !== 0) {
    reversedNum = reversedNum*10 + x % 10
    x = parseInt(x / 10)
  }
  
  if(reversedNum >= MIN_SAFE_NUM && reversedNum <= MAX_SAFE_NUM) {
    return reversedNum
  }
  
  return 0
  
//   const arr = x.toString().split('');
//   let s = null
  
//   if(!Number(arr[0])) {
//     s = arr.shift();
//   }
  
//   arr.reverse()
  
//   let reversedNum = +(s ? s + arr.join('') : arr.join(''))
  
//   return (reversedNum >= MIN_SAFE_NUM && reversedNum <= MAX_SAFE_NUM) ? reversedNum : 0
};


module.exports = reverse
