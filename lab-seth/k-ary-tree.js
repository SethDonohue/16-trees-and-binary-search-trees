'use strict';

const Queue = require('./lib/queue');
const Stack = require('./lib/stack');

const KAryTree = function(value){
  this.value = value;
  this._children = [];
};

KAryTree.prototype.appendChild = function(tree){
  if(!(tree instanceof KAryTree)) throw new TypeError('must insert a k-ary-tree');
  this._children.push(tree);
};

KAryTree.prototype.breadthFirstSearch = function(){
  let queue = new Queue();
  queue.enqueue(this);
  let current = null;

  while(queue.getLength() > 0){
    current = queue.dequeue();
    console.log(`Visiting ${current.value}`);
    for(let child of current._children)
      queue.enqueue(child);
  }
};

KAryTree.prototype.depthFirstSearch = function(){
  let stack = new Stack();
  stack.push(this);
  let current = null;

  while(stack.getLength() > 0){
    current = stack.pop();
    console.log(`Visiting ${current.value}`);
    for(let child of current._children)
      stack.push(child);
  }
};

KAryTree.prototype.find = function(value){
  if(typeof value !== 'number') throw new TypeError('Value is not a number');

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
  return null;
};

//TODO: ADD toString METHOD USING BREADTH FIRST TRAVERSAL
KAryTree.prototype.createString = function(str = ''){
  let queue = new Queue();
  queue.enqueue(this);
  
  let current = null;

  while (queue.getLength() > 0) {
    console.log(queue.getLength());
    current = queue.dequeue();
    if (str === '') {
      str += JSON.stringify(current);
    } else {
      str += '\n' + JSON.stringify(current);
    }
    for (let child of current._children) {
      queue.enqueue(child);
    }
  }
  return str;
};



//TODO: ADD toArray METHOD USING DEPTH FIRST TRAVERSAL, need stack for this to work
// KAryTree.prototype.toArray = function() {

// };


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

console.log(four.createString('test string'));
// console.log(one.find(5));
// console.log(one._children[1]._children[1]._children[0]);
// console.log(one._children[1]._children[2]);

module.exports = KAryTree;