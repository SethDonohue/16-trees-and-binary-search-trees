'use strict';

const Queue = require('./lib/queue');

class KAryTree{
  constructor(value){
    this.value = value;
    this._children = [];
  }

  appendChild(tree){
    if(!(tree instanceof KAryTree)) throw new TypeError('must insert a k-ary-tree');
  
    this._children.push(tree);
  }

  breadthFirstSearch(){
    let queue = new Queue();
    queue.enqueue = this;

    let current = null;

    while(queue.getLenth() > 0){
      current = queue.dequeue();

      console.log(`Visiting ${current.value}`);

      for(let child of current._children)
        queue.enqueue(child);
    }
  }

}