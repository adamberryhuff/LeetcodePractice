/**
 * https://leetcode.com/problems/sum-of-two-integers/
 *
 * Level: Easy
 * Approach: 
 *  - Bitwise manipulation
 */

function sumOfTwoIntegers (a, b)
{
	while (b != 0) {
		var carry = a & b; // bitwise and
		a = a ^ b;         // bitwise xor
		b = carry << 1;    // shift left once
	}
	return a;
}

console.log(sumOfTwoIntegers(4, 8));
console.log(sumOfTwoIntegers(-4, 8));
console.log(sumOfTwoIntegers(4, -8));

/**

110
011
----
1001

var carry = a & b; // 010
a = a ^ b;         // 101
b = carry << 1;    // 100

carry = a & b;      // 0100
a     = a ^ b;      // 0001
b     = carry << 1; // 1000

carry = a & b;      // 0000
a     = a ^ b;      // 1001
b     = carry << 1; // 0000

return a;

**/
