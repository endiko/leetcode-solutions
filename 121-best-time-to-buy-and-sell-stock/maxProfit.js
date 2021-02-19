/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = Number.MAX_SAFE_INTEGER,
      maxProfit = 0;

  for(let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
  }

  return maxProfit;
};

module.exports = maxProfit
