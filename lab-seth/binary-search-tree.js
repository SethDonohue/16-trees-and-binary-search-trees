'use strict';

class BinarySearchTree{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value){
    if(typeof value !== 'number') throw new TypeError('Binary Search Tree - value should be a number');

    if(this.value === value) throw new TypeError('Binary Search Tree - value is already present');

    if(value < this.value){
      if(!this.left){
        this.left = new BinarySearchTree(value);
        return;
      }
      this.left.insert(value);
      return;
    }
    if(!this.right){
      this.right = new BinarySearchTree(value);
      return;
    }
    this.right.insert(value);
    return;
  }

  find(value){
    if(value === this.value) return this;
    
    if(value < this.value){
      if(this.left !== null) return this.left.find(value); return false;
    }
    
    if(value > this.value){
      if(this.right !== null) return this.right.find(value); return false;
    }
   
  }

  getMin(){
    if(!this.left) return this; return this.left.getMin();
  }

  getMax(){ //not needed at this time
    if(!this.right) return this; return this.right.getMax();
  }

  getParent(value){
    if(this.value === value) return null; // value equals the first node which means there are no parents then return null.

    if(!this.left && !this.right) return -1;// if no children and only one node exists and it does not equal the value we are searching for return -1;

    if(!this.right && this.left.value === value) return this;
    if(!this.left && this.right.value === value) return this;

    if(this.right && this.left)
      if(this.right.value === value || this.left.value === value) return this; //no children left so this is the parent

    if(value < this.value) return this.left.getParent(value); return this.right.getParent(value); //go left first, else go right.

  }

  remove(value){
    let parent = this.getParent(value);
    let current = this;

    if(parent === null) return null; // no parents exist but the value we are looking for is in this single node as determined by getParent, so return null.

    if(parent === -1) return this; // no parents exist and the value we are loking for is not in this tree as determined by getparent, so return original tree.

    let removeHelper = function (current){
      if(current.value === value){
      
        if(current.left === null && current.right === null) return null; //node is only node to remove

        if(current.value > parent.value ){
          (current.right.getMin()).left = current.left;
          parent.right = current.right;
        }

        if(current.value < parent.value ){
          (current.right.getMin()).left = current.left;
          parent.left = current.right;
        }
      }
      if(value < current.value) return removeHelper(current.left);

      if(value > current.value) return removeHelper(current.right);
    };
    removeHelper(this);
    return this;
  }
}

module.exports = BinarySearchTree;