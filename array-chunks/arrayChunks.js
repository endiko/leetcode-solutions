const arrayChunks = (arr, len) => {
  if(!len) {
    return arr; 
  }
  const result = [];
  let i = 0;

  while(i < arr.length) {
    result.push(arr.slice(i, i + len));
    i += len;
  }
  
  return result;
}


console.log(arrayChunks([2,3,4,5,6,7,7,8,8,10], 2))
console.log(arrayChunks([2,3,4,5,6,7,7,8,8,10], 3))
console.log(arrayChunks([2,3,4,5,6,7,7,8,8,10], 5))
