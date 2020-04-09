/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 *
 * Input: [10,9,2,5,3,7,101,18]
 * Output: 4 
 * Explanation
 *   The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
 *
 * Approach
     1. 
 *   1. Add a new array with just the new number
 */

var lengthOfLIS = function(nums) {
    const binarySearchPosition = (dp, target, hi) => {
    	// 10
        let lo = 0;
        while (lo <= hi) {
            let mid = Math.floor((lo+hi)/2);
            if (target === dp[mid]) return mid;
            else if (target < dp[mid]) hi = mid-1;
            else lo = mid+1;
        }
        return lo;
    }
    
    // 0 if empty list
    if (nums === null || nums.length===0) return 0;
    
    // 1 if one thing in list
    if (nums.length === 1) return 1;

    // dp = [NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL];
    let dp = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
    
    // loop through numbers
    for (let i=0; i<nums.length; i++){
        let pos = binarySearchPosition(dp, nums[i], i);
        dp[pos] = nums[i];
        console.log(dp);
    }

    for (let i = dp.length-1; i >= 0; i--){
        if (dp[i] !== Number.MAX_SAFE_INTEGER) return i+1;
    }
    
    return 0;
};

var answer = lengthOfLIS([10,9,2,5,3,7,101,18]);
console.log('Answer: ' + answer);
console.log('Correct Answer: 4');