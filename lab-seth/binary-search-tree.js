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
      if(this.left){
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
    if(value === this.value) return true;
    
    if(value< this.value){
      if(this.right !== null) return this.right.find(value); return false;
    }
    if(this.left !== null) return this.left.find(value); return false;
  }

}