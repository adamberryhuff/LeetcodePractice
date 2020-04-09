/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Level: Medium
 * Input: "abcabcbb"
 * Output: 3 
 * Approach: 
 *  - Pointers i and j start at 0 and 1
 *  - i is stored in a HashMap: character -> index
 *  - Loop starting at j
 *  -    is in HashMap?
 *          No: Put in HashMap
 *              Increment longest variable if HashMap is longer than longest.
 *          Yes: Increment i to HashMap index, clearing everything from HashMap along the way
 *
 */

function lengthOfLongestSubstring (s)
{
	if (s == '') {
		return 0;
	}
	s = s.split('');
	var longest = 1;
	var map     = {};
	var pointer = 0;
	map[s[pointer]] = pointer;
	for (var i = 1; i < s.length; i++) {
		if (map[s[i]] !== undefined) {
			for (pointer = pointer; pointer <= map[s[i]]; pointer++) {
				delete map[s[pointer]];
			}
		}
		map[s[i]] = i;
		longest = longest > Object.keys(map).length ? longest : Object.keys(map).length;
	}
	return longest;
}

function lengthOfLongestSubstringTwo (s)
{
	var longest = 0;
	var sub     = '';
	for (var i = 0; i < s.length; i++) {
		var char_idx = sub.indexOf(s[i]);
		if (char_idx != -1) {
			sub = sub.slice(char_idx+1);
		}
		sub = sub + s[i];
		longest = sub.length > longest ? sub.length : longest;
	}
	return longest;
}


console.log(lengthOfLongestSubstringTwo('abcabjaskcksdadwcbb'));
console.log(lengthOfLongestSubstring('abcabj'));
console.log(lengthOfLongestSubstring('bbbbb'));

/**
 * abcabj
 * 
 * Loop 1:
 * Map: { a: 0 }, s[i]: b, pointer: 0, longest: 1
 * Map: { a: 0, b: 1 }, s[i]: c, pointer: 0, longest: 2
 * Map: { a: 0, b: 1, c: 2 }, s[i]: a, pointer: 0, longest: 3
 * Map: 
 *
 */
