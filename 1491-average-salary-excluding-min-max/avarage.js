/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) { // O(n) / O(1)
  if (salary.length < 3 && salary.length > 100) {
    return 0;
  }
  
  salary.sort((a, b) => (a - b));
  let sum = 0;
  
  for(let i = 1; i < salary.length - 1; i++) {
    sum += salary[i];
  }
  
  return sum / (salary.length - 2);
};


module.exports = average;
