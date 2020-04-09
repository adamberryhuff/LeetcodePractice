/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * - k operations max
 * - All uppercase
 *
 * Level: Medium
 * Input: s = "ABAB", k = 2"
 * Output: 4
 * Considerations: 0, 1 lengths
 * Approach: 
 *   1. lasts_change_idx = 0; longest=1;
 *   1. Traverse string, i
 *   3. if changes > k, 
 *      b. update i to change_idx
 *      c. update last_change_idx = change_idx;
 *   4.
 *   	a. change_idx = first character change index
 *   	b. changes = how many characters have we changed
 *      c. longest = Math.max(i-last_change_idx, longest);
 *
 * - AABAJBBA i=3 change_idx=2 changes=1 longest=3
 *      i
 */


function generalizedGCD(num, arr)
{
    arr.sort(function(a, b) { return a-b; });
    
    // get factors of smallest number
    var smallest = arr.shift();   // remove smallest number
    var factors  = [smallest];    // FIFO
    for (var factor = smallest-1; factor > 0; factor--) {
        if (smallest % factor === 0) {
            factors.push(factor);
        }   
    }
    
    // find the largest factor of the smallest number in the set
    // that is also a factor of all numbers in the input array
    // FIFO Queue for largest numbers first. arr.shift()
    for (var i = 0; i < factors.length; i++) {
        var gcd = true;
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] % factors[i] !== 0) {
                gcd = false;
                break;
            }
        }
        if (gcd) {
            return factors[i];
        }
    }
}

console.log(generalizedGCD(5, [10, 15, 25, 30, 20]));


return;


function cellCompete(states, days)
{
    // start with O(n^2) solution
    var new_states = [];
    while (days > 0) {
        for (var i = 0; i < states.length; i++) {
            var lstate = states[i-1];
            if (lstate === undefined) {
            	// console.log('undefined');
                lstate = 0;
            }
            var rstate = states[i+1];
            // console.log(rstate);
            if (rstate === undefined ) {
            	// console.log('undefined');
                rstate = 0;
            }
            // console.log(original_state);
            console.log('LSTATE: ' + lstate + ' RSTATE: ' + rstate);
            if ((lstate && rstate) || (!lstate && !rstate)) {
                new_states.push(0);
            } else {
                new_states.push(1);
            }
        }
    	states = new_states;
    	new_states = [];
        days--;
    }
    return states;
}

console.log(cellCompete([1, 0, 0, 0, 0, 1, 0, 0], 1));

return;

function characterReplacement (s, k)
{
	if (s.length <= 1) {
		return s.length;
	}
	var looking_for = s[0];
	var longest = 1;
	var window_start = 0;     
	var last_window_start = 0;
	var changes = 0;
	for (var i = 0; i < s.length; i++) {
		longest = Math.max(i-last_window_start, longest);
		// set the index where we will move to if we hit out k limit
		// first change occurance
		if (changes == 0 && s[i] != looking_for) {
			window_start = i;
		}
		// keep track of how many we have changes
		if (s[i] != looking_for) {
			changes++;
		}
		// move to the new location,
		// we are looking for a different character now
		if (changes > k) {
			i = window_start;
			last_window_start = i;
			looking_for = s[i];
			changes = 0;
		}
	}
	return longest;
}
// AABABBA
//   i
// START i: 1, window_start: 0, longest: 1, looking_for: A, changes: 0
// END   i: 1, window_start: 0, longest: 1, looking_for: A, changes: 0
// START i: 2, window_start: 0, longest: 1, looking_for: A, changes: 0
// END   i: 2, window_start: 2, longest: 3, looking_for: B, changes: 0

// START window_start: 2, longest: 1, looking_for: B, changes: 1
// END   window_start: 0, longest: 1, looking_for: A, changes: 0
// window_start: 0, longest: 1, looking_for: A, changes: 0
// window_start: 0, longest: 1, looking_for: A, changes: 0

console.log(characterReplacement('AABABBA', 2)); // 4
console.log(characterReplacement('ABAB', 2)); // 4
console.log(characterReplacement('AAAA', 2)); // 4