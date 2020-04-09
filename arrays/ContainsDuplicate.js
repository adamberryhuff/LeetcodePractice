/**
 * https://leetcode.com/problems/contains-duplicate/
 *
 * Level: Easy
 * Approach: 
 *  - Hash Set
 */

function containsDuplicate (nums) {
	// cant be dupes if empty or contains only 1 element
	var len = nums.length;
	if (len < 2) {
		return false;
	}

	// hash set
	var set = {};
	set[nums[0]] = true;
	for (var i = 1; i < len; i++) {
		if (set[nums[i]] != undefined) {
			return true;
		}
		set[nums[i]] = true;
	}
    return false;
};

console.log(containsDuplicate([1,2,3,1])); // true