const quickSort = (arr) => {
  if(arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];

  const less = arr.filter(el => el < pivot);
  const right = arr.filter(el => el > pivot);

  return [...quickSort(less), pivot, ...quickSort(right)]; 
}

module.exports = quickSort;
// console.log(quickSort([4,7,2,9,5,5,0,8,6,44,12]))
