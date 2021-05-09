/**
 * @param {number} n
 * @return {number}
 */
 var totalMoney = function(n) {
  if(n === 1) {
    return 1
  }

  const start = 1;
  const weekDays = 7;
  let total = start;

  if(n <= weekDays) {
    total += totalMoney(n - 1)
  } else {
    start += 1;
  }
  
};
