/**
 * https://leetcode.com/problems/coin-change/
 * Rescursion & Dynamic Programming
 * HashMaps
 *
 * Level: Medium
 * Input: coins = [1, 2, 5], amount = 11
 * Output: 3 
 * Approach: 
 *  1. 
 *
 */


function coinChange (coins, amount)
{
	var mapped = {};
	for (var i = 0; i < coins.length; i++) {
		mapped[coins[i]] = true;
	} 
	var memo = {};
	return countPossibilities(mapped, amount, memo);
}

function countPossibilities (coins, amount, memo)
{
	if (amount < 0) {
		return -1;
	} else if (amount == 0) {
		return 0;
	} else if (coins[amount]) {
		return 1;
	} else if (memo[amount]) {
		return memo[amount];
	} else {
		var shortest = -1;
		for (var coin in coins) {
			memo[amount-coin] = countPossibilities(coins, amount-coin, memo);
			if (memo[amount-coin] >= 0 && (shortest == -1 || memo[amount-coin] < shortest)) {
				shortest = memo[amount-coin];
			}
		}
		return shortest == -1 ? -1 : 1 + shortest; 
	}
}


/***** COIN CHANGE TWO - BOTTOM UP *****/

function coinChangeTwo (coins, amount)
{
	if (amount == 0) {
		return 0;
	}
	coins = coins.sort((a, b) => a - b);

	var memo = { 0: 0 };
	for (var sub_amount = 0; sub_amount <= amount; sub_amount++) {
		for (var i = 0; i < coins.length; i++) {
			var coin_smaller_than_amount = coins[i] <= sub_amount;
			var is_divisible = memo[sub_amount-coins[i]] !== undefined;
			var smaller_divisibility = !memo[sub_amount] || memo[sub_amount] > memo[sub_amount-coins[i]];
			if (coin_smaller_than_amount && is_divisible && smaller_divisibility) {
				memo[sub_amount] = 1 + memo[sub_amount-coins[i]];
			}
		}
	}
	// return memo;
	return memo[amount] ? memo[amount] : -1;
}


// console.log(climbStairs(2)); // 2
// console.log(climbStairs(3)); // 3
// console.log(climbStairs(5)); // 5
console.log(coinChangeTwo([1, 2, 5], 31)); // 7
console.log(coinChangeTwo([2, 5, 10, 1], 27)); // 233
console.log(coinChangeTwo([186, 419, 83, 408], 6249)); // 233

// console.log(climbStairs(51)); // 5
