/**
 * https://leetcode.com/problems/rotting-oranges/
 *
 * 0 - empty
 * 1 - fresh
 * 2 - rotten
 *
 *
 */

function orangesRotting (grid) 
{
	var fresh  = {};
	var rotten = {};
	for (var i = 0; i < grid.length; i++) {
		for (var j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === 1) {
				fresh[i + '_' + j] = [i, j];
			} else if (grid[i][j] === 2) {
				rotten[i + '_' + j] = [i, j];
			}
		}
	}

	var minutes   = 0;
	while (Object.keys(fresh).length > 0) {
		for (var key in rotten) {

			// look for left cell, if fresh move to rotten
			var left = (rotten[key][0]-1) + '_' + rotten[key][1];
			if (fresh[left]) {
				rotten[left] = fresh[left];
				delete fresh[left];
			}
			// look for right cell, if fresh move to rotten
			var right = (rotten[key][0]+1) + '_' + rotten[key][1];
			if (fresh[right]) {
				rotten[right] = fresh[right];
				delete fresh[right];
			}
			// look for top cell, if fresh move to rotten
			var up = rotten[key][0] + '_' + (rotten[key][1]+1);
			if (fresh[up]) {
				rotten[up] = fresh[up];
				delete fresh[up];
			}
			// look for bottom cell, if fresh move to rotten
			var down = rotten[key][0] + '_' + (rotten[key][1]-1);
			if (fresh[down]) {
				rotten[down] = fresh[down];
				delete fresh[down];
			}
			delete rotten[key];
		}

		// break if there's not more rotten ones to infect fresh ones
		// indicating an island
		if (Object.keys(rotten).length == 0) {
			break;
		}
		minutes++;
	}
	return Object.keys(fresh).length ? -1 : minutes;
}


function orangesRotting2 (grid) 
{
	var fresh  = 0;
	var rotten = [];
	for (var i = 0; i < grid.length; i++) {
		for (var j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === 1) {
				fresh++; 			// decrement every time an orange turns bad
			} else if (grid[i][j] === 2) {
				rotten.push([i, j]);
			}
		}
	}

	var minutes  = 0;
	var adjacent = [];
	while (rotten.length > 0) {
		var length = rotten.length;
		for (var i = 0; i < length; i++) {
			var orange = rotten.shift();
			adjacent = [
				[(orange[0]-1), orange[1]],
				[(orange[0]+1), orange[1]],
				[orange[0], (orange[1]-1)],
				[orange[0], (orange[1]+1)]
			];
			for (var j = 0; j < adjacent.length; j++) {
				const x = adjacent[j][0];
				const y = adjacent[j][1];
				if (grid[x] && grid[x][y] === 1) {
					fresh--;
					rotten.push([x, y]);
					grid[x][y] = 0;
				}
			}
		}

		// break if there's not more rotten ones to infect fresh ones
		// indicating an island
		if (rotten.length == 0) {
			break;
		}
		minutes++;
	}
	return fresh > 0 ? -1 : minutes;
}

console.log(orangesRotting2([[2,1,1],[1,1,0],[0,1,1]]));
console.log(orangesRotting2([[2,1,1],[0,1,1],[1,0,1]]));
console.log(orangesRotting2([[0, 2]]));
