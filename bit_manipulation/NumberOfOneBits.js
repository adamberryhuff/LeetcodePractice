/**
 * https://leetcode.com/problems/number-of-1-bits/
 *
 * Level: Easy
 * Approach: 
 *  - Bitwise manipulation
 */

// This fails for 11111111111111111111111111111101
function countOneBitsAttempt1 (number)
{
	var count = 0;
	while (number > 0) {
		if (number & 1) {
			count++;
		}
		number = number >> 1;
	}
	return count;
}

function countOneBits (number)
{
	var count = 0;
	while (number) {
		number = number&(number-1);
		count++;
	}
	return count;
}

// console.log(countOneBits(5));
// console.log(countOneBits(43));
console.log(countOneBits(4294967293));
