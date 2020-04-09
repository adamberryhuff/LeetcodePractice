/** 
 * https://leetcode.com/problems/word-break/solution/
 * 
 * 3 Solutions
 *  - Naive solution, doesn't use DP, doesn't scale.
 *  - DP solution that is really cool but a little hard to wrap your head around.
 *  - Recursive DP solution, easier to wrap your head around but still scales
 */

function wordBreakRecursiveDp (s, wordDict)
{
	// unique words
	var words = new Set(wordDict);
	var memo  = [];
	for (var i = 0; i < s.length; i++) memo.push(null);
	return recurse(s, words, 0, memo);
}

function recurse (s, words, start, memo)
{
	if (start == s.length) {
		return true;
	}
	if (memo[start] != null) {
		return memo[start];
	}
	for (var i = start; i < s.length; i++) {
		if (words.has(s.substring(start, i)) && recurse(s, words, i, memo)) {
			memo[start] = true;
			return true;
		}
	}
	memo[start] = false;
	return memo;
}


var wordBreakNaive = function(s, wordDict) {
    var memo = [s];
    while (true) {
        var replaced = false;
        for (var i = 0; i < wordDict.length; i++) {
            for (var j = 0; j < memo.length; j++) {
                if (memo[j].indexOf(wordDict[i]) !== -1) {
                    var word = memo[j].replace(wordDict[i], '');
                    if (word == '') {
                        return true;
                    }
                    replaced = true;
                    memo.push(word);
                }
            }
        }
        if (!replaced) {
            return false;
        }
    }
};

var wordBreakDP = function(s, wordDict) {
    var dict = new Set(wordDict);
    var memo = [];
    for (var i = 0; i <= s.length; i++) memo.push(false);
    memo[0] = true;
    for (var i = 1; i <= s.length; i++) {
        for (var j = 0; j < i; j++) {
            if (memo[j] && dict.has(s.substring(j, i))) {
                memo[i] = true;
                break;
            }
        }
    }
    return memo[s.length];
};