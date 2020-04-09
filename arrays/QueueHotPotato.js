/**
 * Play Hot Potato
 *
 * Data Structure: Queue
 * Approach: 
 *   1. Pull From Queue
 *   2. Keep a Counter, Check if equal to passed in number
 *   3. Put on Back of Queue
 */

function hotPotato (queue, num) 
{
	var rotations = 0;
	while (queue.length > 1) {
		while (rotations < num) {
			queue.push(queue.shift());
			rotations++;
		}
		queue.shift();
		rotations = 0;
	}
	return queue.shift();
}

console.log(hotPotato(["Bill","David","Susan","Jane","Kent","Brad"],3))