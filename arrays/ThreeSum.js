/**
 * https://leetcode.com/problems/3sum/
 *
 * Level: Medium
 * Input: [-1, 0, 1, 2, -1, -4]
 * Output: [[-1, 0, 1], [-1, -1, 2]]
 * Approach: 
 *  - Sort
 *  - Loop through array
 *  - Use a two-sum approach on everything after the current index
 */

function threeSum (nums) {
	var triplets = [];

	// It is impossible to make a triplet without at least 3 numbers
	// We can return early here
	if (nums.length < 3) {
		return triplets;
	}

	// Sorting numbers is required for this approach
	nums = nums.sort((a, b) => a - b);

	for (var i = 0; i < nums.length-2; i++) {
		// If the sum of i and the number to the right of it (initial left boundary)
		// if greateer than 0, it's impossible to make any more pairs because, even
		// by lowering the right boundary, we cannot get below 0 
		// Example: [-4, -2(i), 3, 4, 7] here -2+3 = 1 > 0
		if (nums > 0 || (nums[i] + nums[i+1]) > 0) {
			return triplets;
		}

		// keep moving i right if be see duplicates
		if (i > 0 && nums[i] == nums[i-1]) {
			continue;
		}

		// define left and right boundaries
		// and start moving bondaries inwards
		var l = i+1;
		var r = nums.length-1;
		while (l < r) {
			var sum = nums[i] + nums[l] + nums[r];
			if (sum == 0) {
				// sum matches, move both pointers inward until we find 2 new numbers
				triplets.push([nums[i], nums[l], nums[r]]);
				do {
					r--;
				} while (l < r && nums[r] == nums[r+1]);
				do {
					l++;
				} while (l < r && nums[l] == nums[l-1]);
			} else if (sum > 0) {
				// sum too large, move right point left until we find a new number
				do {
					r--;
				} while (l < r && nums[r] == nums[r+1]);
			} else {
				// sum too small, move left point right until we find a new number
				do {
					l++;
				} while (l < r && nums[l] == nums[l-1]);
			}
		}
	}
	return triplets;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); 
console.log(threeSum([0,0,0,0]));
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6])); 
// console.time('threeSum')
// console.timeEnd('threeSum') 

/**
 * Input: [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]
 * Output: [[-4,-2,6],[-4,0,4],[-4,1,3],[-4,2,2],[-2,-2,4],[-2,0,2]]
 *
 * First Run:
 * Input: [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6] [[-4, -2, 6]]
 *          i  l                           r
 * Input: [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6] [[-4, -2, 6], [-4, 0, 4]]
 *          i          l               r
 * Input: [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6] [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3]]
 *          i            l         r
 * Input: [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6] [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2]]
 *          i              l   r
 *
 * Second Run:
 * Input: [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6] [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2]]
 *             i  l                        r
 * Input: [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6] [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4]]
 *             i  l                    r
 * Input: [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6] [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4]]
 *             i       l           r
 * Input: [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6] [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]]
 *             i       l       r
 * Input: [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6] [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]]
 *             i         lr
 *
 * Third Run: 
 * Input: [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6] [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]]
 *                     i l                 r
 * 
 * Room for efficiency here!
 * If it's the beginning of the loop and i+l>0, the program is over
 */