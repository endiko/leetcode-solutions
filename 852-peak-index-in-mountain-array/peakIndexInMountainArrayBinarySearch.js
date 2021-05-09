/**
 * @param {number[]} arr
 * @return {number}
 */

/* Binary search O(log N) 80ms / memory 39.3mb */
 var peakIndexInMountainArrayBinarySearch = function(arr) {
  if (arr.length < 3) { return; }
 
  let
    left = 0,
    right = arr.length - 1,
    pivot = 0,
    maxIndex = 0;

  while(left < right) {
    pivot = Math.floor((left + right) / 2);

    if(arr[pivot] > arr[pivot + 1]) {
      right = pivot;
    } else {
      left = pivot + 1;
    }

    maxIndex = arr[pivot] > arr[maxIndex] ? pivot : maxIndex;
  }

  return maxIndex;
};

module.exports = peakIndexInMountainArrayBinarySearch
