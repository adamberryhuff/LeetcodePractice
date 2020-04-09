/**
 * keywords = ["anacell", "cetracular", "betacellular"]
 * reviews = [
 *     "Anacell provides the best services in the city",
 *     "betacellular has awesome services",
 *     "Best services provided by anacell, everyone should use anacell",
 * ]
 * 
 * Output: ["anacell", "betacellular"]
 * 
 * Explanation: "anacell" is occuring in 2 different reviews and "betacellular" 
 *              is only occuring in 1 review.
 */

// returns most frequent k keywords in reviews
function mentionedWords (k, keywords, reviews)
{
	// keywords => keyword count (init = 0)
    var keymap = {};
    for (var i = 0; i < keywords.length; i++) {
    	keymap[keywords[i]] = 0;
    }

    // get unique words per review and merge them into one array
    // word duplicates if word exists in multiple review 
    var unique_words = [];
    for (var i = 0; i < reviews.length; i++) {
    	var words = reviews[i].toLowerCase().split(/\W/g);
    	words = words.filter((item, index) => words.indexOf(item) === index);
    	unique_words = unique_words.concat(words);
    } 

    // figure out how many occurances of each word exist
    for (var i = 0; i < unique_words.length; i++) {
    	if (keymap[unique_words[i]] !== undefined) {
    		keymap[unique_words[i]]++;
    	}
    }

    // sort keys by value and return the keymap
    var sorted = Object.keys(keymap).sort(function (a, b) {return keymap[b]-keymap[a]});
    
    // limit to k
   	return sorted.slice(0, k);
}

// ["anacell", "betacellular"]
// console.log(mentionedWords(
// 	2, 
// 	["anacell", "cetracular", "betacellular"], 
// 	[
// 		"Anacell provides the best services in the city", 
// 		"betacellular has awesome services", 
// 		"Best services provided by anacell, everyone should use anacell"
// 	]
// ));

// ["betacellular", "anacell"]
console.log(mentionedWords(
	2, 
	["anacell", "betacellular", "cetracular", "deltacellular", "eurocell"],
	[
	  	"I love anacell Best services; Best services provided by anacell",
	  	"betacellular has great services",
	  	"deltacellular provides much better services than betacellular",
	  	"cetracular is worse than anacell",
	  	"Betacellular is better than deltacellular.",
	]
));
