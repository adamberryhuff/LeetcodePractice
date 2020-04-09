/**
 * Is this balanced (){}[][[]](){}?
 *
 * Data Structure: Stack
 * Approach: 
 *   1. If it's an opening brace, push to stack
 *   2. If it's a closing brace, pull from stack and see if it matches
 *   3. If it's a closing brace and stack is empty, it's unbalanced
 */

function isBalanced (braces) {
	braces = braces.split('');

	// associate opening and closing
	var counterparts = {
		'}': '{',
		']': '[',
		')': '('
	};

	var stack    = [];
	var balanced = true;
	for (var i = 0; i < braces.length; i++) {
		if (braces[i] == '{' || braces[i] == '(' || braces[i] == '[') {
			stack.push(braces[i]);
		} else if (stack.length == 0) {
			balanced = false;
			break;
		} else {
			var char = stack.pop();
			if (char != counterparts[braces[i]]) {
				balanced = false;
				break;
			}
		}
	}
	return balanced;
}

console.log(isBalanced('{({([][])}())}'))
console.log(isBalanced('[{()]'))

