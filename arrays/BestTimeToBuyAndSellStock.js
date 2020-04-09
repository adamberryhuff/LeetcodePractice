/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * Level: Easy
 * Approach: 
 *  - Set lowest everytime you see a number < lowest
 *  - If you see a number higher than lowest, save profit diff
 */

function maxProfit (prices)
{
	var lowest = prices[0];
	var profit = 0;
	for (var i = 1; i < prices.length; i++) {
		if (prices[i] < lowest) {
			lowest = prices[i];
		} else if (prices[i]-lowest > profit) {
			profit = prices[i]-lowest;
		}
	}
	return profit;
}


console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
