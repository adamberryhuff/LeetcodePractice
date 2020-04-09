/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 *
 */

var isValidBST = function(root) {
    return root != null ? helper(root, null, null) : true;
};

function helper (node, lower, upper)
{
    if ((lower != null && node.val <= lower) || (upper != null && node.val >= upper)) {
        return false;
    }   
    if (node.left && !helper(node.left, lower, upper ? Math.min(upper, node.val) : node.val)) {
        return false
    }
    if (node.right && !helper(node.right, lower ? Math.max(lower, node.val) : node.val, upper)) {
        return false;
    }
    return true;
}