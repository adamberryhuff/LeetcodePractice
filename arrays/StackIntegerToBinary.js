/**
 * Convert this to Binary: 233
 *
 * Algorithm: Divide by 2
 * Data Structure: Stack
 * Approach: 
 *   1. Divide By 2 Until 0
 *   2. Keep Remainder on Stack
 *   3. Pull off stack to form binary string
 */

function convertToBinary (number)
{
	// push binary digits to stack
	var stack = [];
	while (number > 0) {
		stack.push(number % 2);
		number = Math.floor(number/2);
	}

	// pull from stack to binary string
	var binary = '';
	while (stack.length > 0) {
		binary += stack.pop();
	}
	return binary;
}

console.log(convertToBinary(233));