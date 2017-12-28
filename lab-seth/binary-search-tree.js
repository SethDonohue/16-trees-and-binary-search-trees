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
    if (!this.left) return this; return this.left.getMin();
  }

  getMax(){
    if (!this.right) return this; return this.right.getMax();
  }

  getParent(value){
    console.log('getParent Value: ', value);
    if (this.value === value) return null; //no parents so return null;
    if (this.right.value === value || this.left.value === value) return this; //no children left so this is the parent

    if (value < this.value) {
      if (this.left !== null) return this.left.getParent(value); return null;
    }

    if (value > this.value) {
      if (this.right !== null) return this.right.getParent(value); return null;
    }
  }

  //TODO: ADD REMOVE METHOD
  remove(value){
    let current = this;

    if(this.value === value){
      if(this.left === null && this.right === null) return null; //node is only node to remove
      this.right
      this.right = null;
      if(getParent === false){ //no parents for this current node
      }
    }

    if(this.right.value === value) this.right = null;
    if(this.left.value === value) this.left = null;
    if(this.left === null && this.right === null) return null;//remove this node

    // if(this.)
    

  }

}

module.exports = BinarySearchTree;