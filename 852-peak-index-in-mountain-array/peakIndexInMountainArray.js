/**
 * @param {number[]} arr
 * @return {number}
 */

// O(n)  84ms, memory 39.7mb
 var peakIndexInMountainArray = function(arr) {
   
   if (arr.length < 3) { return; }

   let maxIndex = 0;

   for(let i = 0; i < arr.length; i++) {
     if(arr[maxIndex] <= arr[i]) {
       maxIndex = i;
     } else {
       break;
     }
   }
   return maxIndex;
 }

module.exports = peakIndexInMountainArray
