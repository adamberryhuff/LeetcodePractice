/**
 * https://leetcode.com/problems/insert-interval/
 *
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 *
 * |___|---|___| 
 *
 * Base Cases:
 *  - Intervals are empty (pre-loop)
 *  - Interval comes before the first existing interval (pre-loop)
 *  - Interval comes after the last existing interval (pre-loop)
 *  - Interval is totally consumed by existing interval.
 *  - Interval has no overlap with existing interval and next interval.
 *
 * After Base Casses:
 *  - Interval overlaps beginning of this interval (move beginning - interval[i][0])
 *  - Interval overlaps end of this interval (move end - interval[i][1])
 *  - Interval is partially or fully consumed by last interval due to previous two
 *    lines. Reset last interval end if partially consumed. Remove current interval.
 */

function insert (intervals, newInterval) 
{
	// empty intervals
	if (intervals.length === 0) {
		return [newInterval];
	}

	// new interval comes before first interval
	if (newInterval[1] < intervals[0][0]) {
		intervals.unshift(newInterval);
		return intervals;
	}

	// new interval comes after the last interval
	if (newInterval[0] > intervals[intervals.length-1][1]) {
		intervals.push(newInterval);
		return intervals;
	}

	for (var i = 0; i < intervals.length; i++) {

		// interval has no overlap, insert and return
		if (newInterval[0] > intervals[i][1] && newInterval[1] < intervals[i+1][0]) {
			intervals.splice(i+1, 0, newInterval);
			return intervals;
		}

		// interval has 100% overlap
		if (newInterval[0] >= intervals[i][0] && newInterval[1] <= intervals[i][1]) {
			return intervals;
		}

		// interval has not been applied
		// new interval overlaps beginning of this interval
		if (newInterval[0] <= intervals[i][0] && newInterval[1] >= intervals[i][0]) {
			intervals[i][0] = newInterval[0];
		}

		// interval has not been applied
		// new interval overlaps beginning of this interval
		if (newInterval[0] <= intervals[i][1] && newInterval[1] >= intervals[i][1]) {
			intervals[i][1] = newInterval[1];
		}

		// the start of this interval ovelaps the end of the last one
		// extend that last interval and remove this one
		// this basically means the new interval has already been applied
		if (intervals[i-1] && intervals[i][0] <= intervals[i-1][1]) {
			if (intervals[i][1] >= intervals[i-1][1]) {
				intervals[i-1][1] = intervals[i][1];
			}
			intervals.splice(i, 1);
			i--;
		}
	}
	return intervals;
};

// test empty
console.log('------------------');
var result = insert([], [2, 4]);
console.log('Testing empty input array');
console.log('Result: ' + result);
console.log('Expected: 2,4');
console.log('------------------');

// test inserting at beginning
var result = insert([[6, 9], [10, 15]], [2, 4]);
console.log('Testing inserting at beginning');
console.log('Result: ' + result);
console.log('Expected: 2,4,6,9,10,15');
console.log('------------------');

// test inserting at end
console.log('Testing inserting at end');
var result = insert([[6, 9], [10, 15]], [20, 25]);
console.log('Result: ' + result);
console.log('Expected: 6,9,10,15,20,25');
console.log('------------------');

// test no overlap
console.log('Testing inserting in middle');
var result = insert([[1, 5], [20, 25]], [8, 15]);
console.log('Result: ' + result);
console.log('Expected: 1,5,8,15,20,25');
console.log('------------------');

// test 100% overlap
console.log('Testing 100% overlap');
var result = insert([[1, 10], [15, 20]], [1, 7]);
console.log('Result: ' + result);
console.log('Expected: 1,10,15,20');
console.log('------------------');

// test 100% overlap
console.log('Testing connecting intervals');
var result = insert([[1, 10], [15, 20]], [8, 15]);
console.log('Result: ' + result);
console.log('Expected: 1,20');
console.log('------------------');

// Leetcode test 1
console.log('Testing leetcode test 1');
var result = insert([[1,3],[6,9]], [2, 5]);
console.log('Result: ' + result);
console.log('Expected: 1,5,6,9');
console.log('------------------');

// Leetcode test 1
console.log('Testing leetcode test 2');
var result = insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4, 8]);
console.log('Result: ' + result);
console.log('Expected: 1,2,3,10,12,16');
console.log('------------------');
