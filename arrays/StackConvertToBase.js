/**
 * Convert this to Base: 233
 *
 * Algorithm: Divide by Bae
 * Data Structure: Stack
 * Approach: 
 *   1. Divide By base Until 0
 *   2. Keep Remainder on Stack
 *   3. Pull off stack to form base string
 */

function convertToBase (number, base)
{
	// push base digits to stack
	var stack = [];
	while (number > 0) {
		stack.push(number % base);
		number = Math.floor(number/base);
	}

	// pull from stack to base string
	var new_number = '';
	while (stack.length > 0) {
		new_number += stack.pop();
	}
	return new_number;
}

console.log(convertToBase(25, 16));