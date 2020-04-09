
var printer = {
	
};

class Task {
	constructor(pages) {
		this.pages = pages;
	}
	getPages () {
	    return this.pages;
	}
}

function generateRandomWholeInteger (min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 10 students in the lab, 1 hour, each can print twice
// 10 students * 2 prints = 20 prints / 1 hour = 20 prints / 3600 seconds
// that means the likelyhood a print happening on any given second is 3600 / 20
// or 1/180. Let's simulate that.




var task = new Task(20);
console.log(task.getPages());