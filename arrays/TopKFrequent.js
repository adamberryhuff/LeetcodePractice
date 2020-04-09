/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 *
 * This solution works but the time complexit is > nlogn
 * I am going to reimplement this below with a PriorityQueue/Heap
 */

var topKFrequent = function(nums, k) {
    var map = new Map;
    var element = false;
    for (var i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) ? map.get(nums[i])+1 : 1);
    }
    map = new Map([...map].sort((a, b) => (a[1] < b[1] ? 1 : -1)));
    
    var ret = [];
    for (let key of map.keys()) {
        if (k == 0) {
            break;
        }
        ret.push(key);
        k--;
    }
    return ret;
};


var includes = require('../PriorityQueue.js');
function topKFrequentHeap (nums, k)
{
    // push to a hash map
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        map[nums[i]] = map[nums[i]] ? map[nums[i]]+1 : 1;
    }

    // push to priority queue
    var pq = new includes.pq();
    for (var key in map) {
        pq.enqueue(key, map[key]);
    }

    // get k top, already sorted because that's the nature or the heap
    var largest = [];
    while (k > 0) {
        largest.push(pq.dequeue());
        k--;
    }
    return largest;
}

console.log(topKFrequentHeap([1, 2, 2, 2, 3, 3, 76], 2));