class PriorityQueue {
    constructor(){
        this._values = [];
    }
    
    enqueue(val, priority){
        this._values.push(new Node(val, priority));
        this._traverseUp();
    }
    
    dequeue(){
        const max = this._values[0];
        const end = this._values.pop();
        if(this._values.length > 0){
            this._values[0] = end;
            this._traverseDown();
        }
        return max.val;
        
    }
    
    _traverseUp(){
        let idx = this._values.length - 1;
        const el = this._values[idx];
        while(idx > 0){
            let pIdx = Math.floor((idx - 1) / 2);
            let parent = this._values[pIdx];
            if(el.priority <= parent.priority) break;
            this._values[pIdx] = el;
            this._values[idx] = parent;
            idx = pIdx;
        }
    }
    
    _traverseDown(){
        let leftChildIdx = null;
        let rightChildIdx = null;
        let leftChild = null;
        let rightChild = null;
        let swapIdx = null;
        
        let idx = 0;
        const el = this._values[idx];
        while(true){
            swapIdx = null;
            leftChildIdx = 2 * idx + 1;
            rightChildIdx = 2 * idx + 2;
            
            if(leftChildIdx < this._values.length){
                leftChild = this._values[leftChildIdx];
                if(leftChild.priority > el.priority){
                    swapIdx = leftChildIdx;
                }
            }
            
            if(rightChildIdx < this._values.length){
                rightChild = this._values[rightChildIdx];
                if(
                    (swapIdx === null && rightChild.priority > el.priority) ||
                    (swapIdx !==null && rightChild.priority > leftChild.priority)
                ) {
                    swapIdx = rightChildIdx;
                }
            }
            
            if(swapIdx === null) break;
            this._values[idx] = this._values[swapIdx];
            this._values[swapIdx] = el;
            idx = swapIdx
        }
    }
}

module.exports.pq = PriorityQueue;

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}