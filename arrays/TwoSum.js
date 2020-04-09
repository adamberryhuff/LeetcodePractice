/**
 * https://leetcode.com/problems/two-sum/
 *
 * Level: Easy
 * Approach: 
 *  - If we sort the array we can tackle it from both ends but we 
 *    can't sort it because we will lose the array indices
 *  - We could use a hash table though.
 */

function twoSum (nums, target)
{
	var hash = {};
	hash[nums[0]] = 0;
	for (var i = 1; i < nums.length; i++) {
		if (hash[target-nums[i]] != undefined) {
			return [hash[target-nums[i]], i];
		}
		hash[nums[i]] = i;
	}
}

// console.log(twoSum([2, 7, 11, 15], 9)); // should return [0, 1]
console.log(twoSum([3, 2, 4], 6)); // should return [1, 2]

