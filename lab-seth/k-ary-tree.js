'use strict';

const Queue = require('./lib/queue');
const Stack = require('./lib/stack');

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
    queue.enqueue(this);
    let current = null;

    while(queue.getLength() > 0){
      current = queue.dequeue();
      console.log(`Visiting ${current.value}`);
      for(let child of current._children)
        queue.enqueue(child);
    }
  }

  depthFirstSearch(){
    let stack = new Stack();
    stack.push(this);
    let current = null;

    while(stack.getLength() > 0){
      current = stack.pop();
      console.log(`Visiting ${current.value}`);
      for(let child of current._children)
        stack.push(child);
    }
  }

  find(value){
    let queue = new Queue();
    queue.enqueue(this);
    let current = null;

    while (queue.getLength() > 0) {
      current = queue.dequeue();
      if(current.value === value){
        return current;
      }
        
      for (let child of current._children){
        queue.enqueue(child);
      }
    }
  }
  
  //TODO: ADD toString METHOD USING BREADTH FIRST TRAVERSAL
  
  //TODO: ADD toArray METHOD USING DEPTH FIRST TRAVERSAL, need stack for this to work

}

let one = new KAryTree(1);
let two = new KAryTree(2);
let three = new KAryTree(3);
let four = new KAryTree(4);
let five = new KAryTree(5);
let six = new KAryTree(6);
let seven = new KAryTree(7);
let eight = new KAryTree(8);

one.appendChild(two);
one.appendChild(three);
one.appendChild(four);

three.appendChild(five);
three.appendChild(six);
three.appendChild(seven);

six.appendChild(eight);

// console.log(one.find(10));
// console.log(one._children[1]._children[1]._children[0]);
// console.log(one._children[1]._children[2]);

module.exports = KAryTree;