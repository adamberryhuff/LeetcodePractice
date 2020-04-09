/*[1,2,3,1]*
 * https://leetcode.com/problems/house-robber/
 *
 */

var rob = function(nums) {
    // no houses
    if (nums.length == 0) {
        return 0;
    }
    // 1 house
    if (nums.length == 1) {
        return nums[0];
    }
    var memo = [];
    return Math.max(checkHouse(nums, 0, memo), checkHouse(nums, 1, memo));
};

function checkHouse (nums, i, memo)
{
    if (memo[i] != undefined) {
        return memo[i];
    } else if (i == nums.length-1 || i == nums.length-2) {
        memo[i] = nums[i];
        return memo[i];
    } else {
        var max = 0;
        for (var j = i+2; j < nums.length; j++) {
            max = Math.max(max, checkHouse(nums, j, memo));
        }
        memo[i] = nums[i] + max;
        return memo[i];
    }
}


console.log(rob([1,2,3,1]));