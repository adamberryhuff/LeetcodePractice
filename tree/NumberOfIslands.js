/**
 * https://leetcode.com/problems/number-of-islands/
 *
 * Input:  Output: 1
 *  11110
 *  11010
 *  11000
 *  00000
 *
 * - Parse over each cell. 
 * - When you hit a 1 cell
 *    1. Increment island count
 *    2. Recursively set all adjacent islands to 0
 */

function numIslands (grid)
{
 	var islands = 0;

 	for (var x = 0; x < grid.length; x++) {
 		for (var y = 0; y < grid[x].length; y++) {
 			if (grid[x][y] == "1") {
 				islands++;
 				grid = blowUpIsland(grid, x, y);
 			}
 		}
 	}

 	return islands;
}

function blowUpIsland (grid, x, y)
{
	grid[x][y] = "0";
	if (grid[x][y+1] == "1") {
		grid = blowUpIsland(grid, x, y+1);
	}
	if (grid[x][y-1] == "1") {
		grid = blowUpIsland(grid, x, y-1);
	}
	if (grid[x+1] && grid[x+1][y] == "1") {
		grid = blowUpIsland(grid, x+1, y);
	}
	if (grid[x-1] && grid[x-1][y] == "1") {
		grid = blowUpIsland(grid, x-1, y);
	}
	return grid;
}

var input = [
	["1","1","1","1","0"],
	["1","1","0","1","1"],
	["1","1","0","0","0"],
	["0","0","1","0","1"]
];
console.log(numIslands(input));
