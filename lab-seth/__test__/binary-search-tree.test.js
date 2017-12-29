
'use strict';
const BinarySearchTree = require('../model/binary-search-tree');

const treeBuilder = () => {
  let one = new BinarySearchTree('f', 10);
  let two = new BinarySearchTree('h', 5);
  let three = new BinarySearchTree('d', 15);
  let four = new BinarySearchTree('j', 4);
  let five = new BinarySearchTree('g', 7);
  let six = new BinarySearchTree('e', 12);
  let seven = new BinarySearchTree('b', 17);
  let eight = new BinarySearchTree('k', 6);
  let nine = new BinarySearchTree('i', 9);
  let ten = new BinarySearchTree('c', 19);
  let eleven = new BinarySearchTree('a', 21);
  let twelve = new BinarySearchTree('l', 1);

  one.left = two;
  one.right = three;
  two.left = four;
  two.right = five;
  three.left = six;
  three.right = seven;
  four.left = eight;
  four.right = nine;
  seven.left = ten;
  seven.right = eleven;
  eight.left = twelve;
  return one;
};

describe('Binary Search Tree JS Functions', () => {
  describe('Find(key) function', () => {
    test('This test should pass when the root value is searched for', () => {
      let tree = treeBuilder();
      expect(tree.find('f')).toEqual(tree);
    });

    test('This test should pass when a value that does not exist in the tree is searched for', () => {
      let tree = treeBuilder();
      expect(tree.find('p')).toEqual(false);
      expect(tree.find('z')).toEqual(false);
    });

    test('This test should pass when a normal case value that is lower than the root is searched for', () => {
      let tree = treeBuilder();
      expect(tree.find('h')).toEqual(tree.left);
      expect(tree.find('g')).toEqual(tree.left.right);
    });

    test('This test should pass when a normal case value that is higher than the root is searched for', () => {
      let tree = treeBuilder();
      expect(tree.find('d')).toEqual(tree.right);
      expect(tree.find('b')).toEqual(tree.right.right);
    });
  });

  describe('getMin() function', () => {
    test('This test shoudl return the MIN node of a BST', () => {
      let tree = treeBuilder();
      expect((tree.getMin()).key).toEqual('i');
    });
  });

  describe('getMax() function', () => {
    test('This test should return the MAX node of a BST', () => {
      let tree = treeBuilder();
      expect((tree.getMax()).key).toEqual('a');
    });
  });

  describe('getParent() function', () => {
    test('This test should return the Parent node of a value searched for', () => {
      let tree = treeBuilder();
      expect((tree.getParent('a')).key).toEqual('b');
      expect((tree.getParent('i')).key).toEqual('j');
      expect((tree.getParent('g')).key).toEqual('h');
      expect((tree.getParent('e')).key).toEqual('d');
    });
  });

  describe('remove(value) function', () => {
    test('This test should return the new Tree with the node removed that has the value', () => {
      let treeOne = treeBuilder();
      let treeTwo = treeBuilder();
      let treeThree = treeBuilder();
      let treeFour = treeBuilder();

      expect((treeOne.remove('h')).key).toEqual('f');
      expect((treeTwo.remove('i')).key).toEqual('f');
      expect((treeThree.remove('k')).left.left.key).toEqual('i');
      expect((treeFour.remove('b')).right.right.key).toEqual('a');
    });

    // test('This test should return the new Tree if a leaf is removed', () => {
    //   let treeOne = treeBuilder();
    //   let treeTwo = treeBuilder();
      
    //   expect((treeOne.remove(19)).right.right.value).toEqual(17);
    //   expect((treeTwo.remove(4)).left.value).toEqual(5);
    // });
  
    // test('This test should return the original tree if value to be removed does not exist in the tree', () => {
    //   let treeOne = treeBuilder();
    //   let treeTwo = treeBuilder();

    //   expect((treeOne.remove(30))).toEqual(treeOne);
    //   expect((treeTwo.remove(1))).toEqual(treeTwo);
    // });
    
    // test('This test should return null if the Tree is only one node', () => {
    //   let treeOne = new BinarySearchTree(10);
    //   let treeTwo = new BinarySearchTree(15);

    //   expect((treeOne.remove(10))).toBeNull();
    //   expect((treeTwo.remove(10))).toEqual(treeTwo);
    // });
  });
});