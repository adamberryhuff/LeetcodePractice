/**
 * https://leetcode.com/problems/spiral-matrix/
 *
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var result = [];
    
    // base cases - empty grid
    if (matrix.length == 0 || matrix[0].length == 0) {
        return result;
    }
    
    // add first row to result
    result = result.concat(matrix.shift());
    
    // add last column to result
    for (var i = 0; i < matrix.length; i++) {
        result.push(matrix[i].pop());
    }
    
    // add last row to result
    var last = matrix.pop();
    if (last) {
        result = result.concat(last.reverse());
    }
    
    // add first columns
    for (var i = matrix.length-1; i >= 0; i--) {
        result.push(matrix[i].shift());
    }
    
    return result.concat(spiralOrder(matrix));
};
/**
 *   3 6 9
 *   2 5 8
 * y 1 4 7
 *   x
 */

var result = spiralOrder([
    [1,2, 3, 4],
    [5,6, 7, 8],
    [9,10,11,12]
]);
console.log('Result:   ' + result);
console.log('Solution: ' + [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
// console.log(spiralOrder([
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
// ]));



// Output: [1,2,3,6,9,8,7,4,5]
// [ 1, 2, 3, 6, 9, 8, 7, 4, 2, 3, 6 ]
// [ 1, 2, 3, 6, 9, 8, 7, 4 ]


// function spiral (matrix, buffer)
//     {
//         // go right
//         var y = buffer;
//         while (y < matrix[0].length) {
//             data.push(matrix[0][y]);
//             y++;
//         }
//         y--;
//         // go down
//         var x = 1+buffer;
//         while (x < matrix.length-buffer) {
//             data.push(matrix[x][y]);
//             x++;
//         }
//         x--;
//         // go left
//         while (y > buffer) {
//             data.push(matrix[x][y]);
//             y--;
//         }
//     }

// [ 1, 2, 3, 6 ],
// [ 4, 5, 6, 8 ],
// [ 7, 8, 9, 0 ]
// Output: 1, 2, 3, 4, 8, 0, 9, 8, 7, 4;

// left->right

// var first_row = buffer;
// var last_row  = m.length-buffer-1;
// var first_col = buffer;
// var last_col  = m[buffer].length-1-buffer;

// l->r
// m[first_row][first_col] ->


// start at: m[0][0]->m[0][m[0].length-1]
//           m[buffer][buffer]->m[buffer][m[buffer].length-1-buffer]
//           buffer = 0
//           m[0][0]->m[0][3]
//           buffer = 1
//           m[1][1]->m[1][2]
// top->bottom: m[0][m[0].length-1]->m[m.length-1]
//              m[buffer][m[buffer].length-1-buffer]->m[m.length-buffer-1][m[buffer].length-1-buffer]