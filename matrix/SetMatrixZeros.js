/**
 * https://leetcode.com/problems/set-matrix-zeroes/
 *
 * Approach:
 *  1. Loop array
 *     [1,1,1,1,1,1],
 *     [1,1,0,0,1,1],
 *     [1,1,1,1,1,1]
 *  2. If cell = 0, set first column and row cells to 0 as well.
 *     [1,1,0,0,1,1],
 *     [0,1,0,0,1,1],
 *     [1,1,1,1,1,1]
 *  3. Loop first row and set all cells below zeros
 *     [1,1,0,0,1,1],
 *     [0,1,0,0,1,1],
 *     [1,1,0,0,1,1]
 *  3. Loop first column and set all row besides zeros
 *     [1,1,0,0,1,1],
 *     [0,0,0,0,0,0],
 *     [1,1,0,0,1,1]
 */

var setZeroes = function(matrix) {
	var xs = new Set;
	var ys = new Set;
    for (var x = 0; x < matrix.length; x++) {
        for (var y = 0; y < matrix[x].length; y++) {
            if (!matrix[x][y]) {
            	xs.add(x);
            	ys.add(y);
            }
        }
    }
    for (var x = 0; x < matrix.length; x++) {
		for (var y = 0; y < matrix[x].length; y++) {
			if (xs.has(x) || ys.has(y)) {
				matrix[x][y] = 0;
			}
		}
    }
    return matrix;
};

console.log(setZeroes([
	[1,1,1,1,1,1],
    [1,1,0,0,1,1],
    [1,1,1,1,1,1]
]));
console.log(setZeroes([
	[0,1,2,0],
	[3,4,5,2],
	[1,3,1,5]
]));


