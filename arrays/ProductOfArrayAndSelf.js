/**
 * https://leetcode.com/problems/product-of-array-except-self/
 *
 * Level: Easy
 * Approach: 
 *  - Move from left to right, keeping track of the product of every number we have seen
 *  - Move from right to left, keeping track of the product of every number we have seen
 *  - Sum two caches
 *
 * Dry Run: 
 * Input = [1, 2, 3, 4]; 
 * Expected Output = [24, 12, 8, 6];
 *  1. Left to right: [1, 1, 2, 6];
 *  2. Right to left: [24, 12, 4, 1];
 *  3. Multiplied: [24, 12, 8, 6]
 *
 * Time Complexity: 0(n)
 */

function productOfArrayAndSelf (nums) {
	var multiplier = 1;
	var ltor       = [1];
	for (var i = 1; i < nums.length; i++) {
		ltor.push(multiplier*nums[i-1]);
		multiplier *= nums[i-1];
	}

	multiplier = 1;
	var rtol = [1];
	for (var i = nums.length-2; i >= 0; i--) {
		rtol.unshift(multiplier*nums[i+1]);
		multiplier *= nums[i+1];
	}

	var products = [];
	for (var i = 0; i < nums.length; i++) {
		products.push(ltor[i]*rtol[i]);
	}
	return products;
}

function productOfArrayAndSelfTwo (nums) {
	var products = [];
	if (nums.length <= 1) {
		return products;
	}
	products.push(1);

	// we move from left to right
	for (var i = 1; i < nums.length; i++) {
		products.push(nums[i-1]*products[i-1]);
	}

	// we move from right to left
	var product = 1;
	for (var i = nums.length-2; i >= 0; i--) {
		products[i] *= nums[i+1]*product;
		product *= nums[i+1];
	}

	return products;
}


console.log(productOfArrayAndSelfTwo([1, 2, 3, 4])); //Output: [24,12,8,6]

// First Run
var set = [1, 1, 1, 1];
var set = [2, 1, 2, 2];
var set = [6, 3, 2, 6];
var set = [24, 12, 8, 6];

