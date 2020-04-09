/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 *
 * Input: [3,9,20,null,null,15,7]
 * Output: 3
 *
 *             3
 *            / \
 *           9  20        
 *             /  \
 *           15    7
 *
 * Input: [3] 1
 * Input: [3, 9] 2
 * Input: [3, 9, 20, X] 3
 * Input: [3, 9, 20, X, X, X, X, X] 4
 * Input: []
 */      

function maxDepth (root) 
{
	return Math.floor(1 + Math.log2(root.length));
}

console.log(maxDepth([3]));
console.log(maxDepth([3,9]));
console.log(maxDepth([3,9,20,null]));
console.log(maxDepth([3,9,20,null,null,15,7, 8]));