/**
 * https://leetcode.com/problems/climbing-stairs/
 * Rescursion & Dynamic Programming
 * HashMaps
 *
 * Level: Easy
 * Input: 2
 * Output: 2
 * Approach: 
 *  - 1. We know that there are two ways when n = 2. 2, 1-steps or 1, 2-step
 *  - 2. We know that there is one way when n = 1. 1, 1-step
 *  - 3. We can user recursion to add all the possibilities but it's very inefficient
 *       because it compounds the same recursive steps more often than not.
 *  - 4. To combat this, we should cache the step results in a hashmap.
 *
 * Afterwards, let's benchmark the amount of resursive calls with and without memoization.
 * We can do it for 3, 5, 10, and 15 and see if goes up exponentially.
 *
 */

function climbStairs (n)
{
	var memo = {};
	return countPossibilities(0, n, memo);
}

function countPossibilities (start, end, memo)
{
	if (start >= end) {
		// past the top, no possibilities
		return 0;
	} else if (start+1 == end) {
		// 1 step from the top, 1 possibily
		return 1;
	} else if (start+2 == end) {
		// 2 steps from the top, 2 possibilities
		return 2;
	} else if (memo[start] > 0) {
		// check if value is memoized and use that
		return memo[start];
	} else {
		// memoize value
		// in theory, n possibilities = n+1 possiblilities + n+2 possibilities
		memo[start] = countPossibilities(start+1, end, memo) + countPossibilities(start+2, end, memo);
		return memo[start]; 
	}
}

// console.log(climbStairs(2)); // 2
// console.log(climbStairs(3)); // 3
// console.log(climbStairs(5)); // 5
console.log(climbStairs(12)); // 233
// console.log(climbStairs(51)); // 5
