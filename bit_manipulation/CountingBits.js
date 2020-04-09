/**
 * https://leetcode.com/problems/counting-bits/
 *
 * Level: Medium
 * Approach: 
 *  - Bitwise manipulation
 *
 * Input: 4 Output: [0, 1, 1, 2, 1, 2]
 */

/**
 * Naive Solution - Not O(n^2) but like it. How do I write this one?
 */
function countBits (number)
{
	var bits = [];
	for (var i = number; i >= 0; i--) {
		var count  = 0;
		var number = i;
		while (number) {
			number = number&(number-1);
			count++;
		}
		bits.unshift(count);
	}
	return bits;
}

console.log(countBits(5));
