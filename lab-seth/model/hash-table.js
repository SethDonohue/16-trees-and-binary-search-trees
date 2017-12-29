'use strict';

const BinarySearchTree = require('./binary-search-tree.js');

module.exports = class HashTable{
  constructor(capacity = 1024){
    this._capacity = capacity;
    this._buckets = new Array(capacity);
  }

  _generateHash(key){
    if(typeof key !== 'string')
      throw new TypeError('__HASTABLE_ERROR_ key must be a string');
    let rawHash = 0;
    
    for(let i in key){
      rawHash += key.charCodeAt(i);
    }

    return rawHash % this._capacity;
  }

  set(key,htValue){
    let hash = this._generateHash(key); //calculate the hash

    if(!this._buckets[hash]){//check if bucket is empty and create a new bst if it is empty
      this._buckets[hash] = new BinarySearchTree({key,htValue});
      return this;
    }

    let node = this._buckets[hash].find(node => node.value.key === key); //find the node

    if(node){// update the hash?
      node.value.htValue = htValue;
      return this;
    }
    this._buckets[hash].append(new BinarySearchTree({key,htValue}));
    return this;
  }
  
  get(key){
    let hash = this._generateHash(key);//get the hash
    if(!this._buckets[hash]) //if bucket is empty returned undefined
      return;

    // vinicio - checkig if key is present wit existing hash
    let node = this._buckets[hash].find(node => node.value.key === key);

    if(node)
      return node.value.htValue;// if node exists, return the value
  }

  delete(key){
    let hash = this._generateHash(key);// get hash

    if(!this._buckets[hash])// check if the bucket is empty
      return false;

    let node = this._buckets[hash].find(node => node.value.key === key);//find the node in the BST

    if(node){//remove the node form the BST
      this._buckets[hash] = this._buckets[hash].remove(node);
      return true;
    }
    return false;
  }

};