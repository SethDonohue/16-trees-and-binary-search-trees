'use strict';

class BinarySearchTree{
  constructor(key, value){
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(key, value){
    if(typeof key !== 'string') throw new TypeError('Binary Search Tree - <Key> miust be a string');

    if(this.key === key) throw new TypeError('Binary Search Tree - key is already present');

    if(key < this.key){
      if(!this.left){
        this.left = new BinarySearchTree(key, value);
        return;
      }
      this.left.insert(key, value);
      return;
    }
    if(!this.right){
      this.right = new BinarySearchTree(key, value);
      return;
    }
    this.right.insert(key, value);
    return;
  }

  find(key){
    if(key === this.key) return this;
    
    if(key < this.key){
      if(this.left !== null) return this.left.find(key); return false;
    }
    
    if(key > this.key){
      if(this.right !== null) return this.right.find(key); return false;
    }
   
  }

  getMin(){
    if(!this.left) return this; return this.left.getMin();
  }

  getMax(){ //not needed at this time
    if(!this.right) return this; return this.right.getMax();
  }

  getParent(key){
    if(this.key === key) return null; // key equals the first node which means there are no parents then return null.

    if(!this.left && !this.right) return -1;// if no children and only one node exists and it does not equal the key we are searching for return -1;

    if(!this.right && this.left.key === key) return this;
    if(!this.left && this.right.key === key) return this;

    if(this.right && this.left)
      if(this.right.key === key || this.left.key === key) return this; //no children left so this is the parent

    if(key < this.key) return this.left.getParent(key); return this.right.getParent(key); //go left first, else go right.

  }

  remove(key){
    let parent = this.getParent(key);
    let current = this;

    if(parent === null) return null; // no parents exist but the key we are looking for is in this single node as determined by getParent, so return null.

    if(parent === -1) return this; // no parents exist and the key we are loking for is not in this tree as determined by getparent, so return original tree.

    let removeHelper = function (current){
      if(current.key === key){
      
        if(current.left === null && current.right === null) return null; //node is only node to remove

        if(current.key > parent.key ){
          (current.right.getMin()).left = current.left;
          parent.right = current.right;
        }
        if(current.key < parent.key ){
          (current.right.getMin()).left = current.left;
          parent.left = current.right;
        }
      }
      if(key < current.key) return removeHelper(current.left);
      if(key > current.key) return removeHelper(current.right);
    };
    removeHelper(this);
    return this;
  }
}

module.exports = BinarySearchTree;