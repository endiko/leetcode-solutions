/*
  Beautiful Arrangement
*/

const calcFactorial = (n) => {
  let res = 1;
  while(n > 0) {
    res *= n;
    n--;
  }

  return res;
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */

const shuffleArray = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    const k = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[k]] = [arr[k], arr[i]];
  }

  return arr;
}


const isDisible = (arr) => {
  let temp = 0;
  const n = arr.length;
  for(let i = 0; i < n; i++) {
    if(arr[i] % (i + 1) === 0 || (i + 1) % arr[i] === 0) {
      temp++;
    }
  }

  return temp === n
}

/**
 * @param {number} n
 * @return {number}
 */

 var countArrangement = function(n) {
  const arr = [...Array(n).keys()].map(el => el + 1);
  const len = calcFactorial(n);
  let count = 0;

  const hashMap = new Map();
  let str = '';

  while(hashMap.size < len) {
    str = arr.join('');

    if(!hashMap.has(str)) {
      hashMap.set(str, 1)
      if (isDisible(arr)) {
        count++;
      }
    } else {
      shuffleArray(arr);
      str = arr.join('');

      if(!hashMap.get(str)) {
        hashMap.set(str, 1)

        if (isDisible(arr)) {
          count++;
        }
      }
    }
  }
  
  return count;
};

console.log(countArrangement(10))
