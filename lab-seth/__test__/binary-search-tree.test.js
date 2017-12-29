
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
      expect(tree.find('q')).toEqual(tree);
    });

    test('This test should pass when a value that does not exist in the tree is searched for', () => {
      let tree = treeBuilder();
      expect(tree.find('a')).toEqual(false);
      expect(tree.find('z')).toEqual(false);
    });

    test('This test should pass when a normal case value that is lower than the root is searched for', () => {
      let tree = treeBuilder();
      expect(tree.find(9)).toEqual(tree.left.right.right);
      expect(tree.find(4)).toEqual(tree.left.left);
    });

    test('This test should pass when a normal case value that is higher than the root is searched for', () => {
      let tree = treeBuilder();
      expect(tree.find(19)).toEqual(tree.right.right.right);
      expect(tree.find(12)).toEqual(tree.right.left);
    });
  });

  describe('getMin() function', () => {
    test('This test shoudl return the MIN node of a BST', () => {
      let tree = treeBuilder();
      expect((tree.getMin()).value).toEqual(4);
    });
  });

  describe('getMax() function', () => {
    test('This test should return the MAX node of a BST', () => {
      let tree = treeBuilder();
      expect((tree.getMax()).value).toEqual(19);
    });
  });

  describe('getParent() function', () => {
    test('This test should return the Parent node of a value searched for', () => {
      let tree = treeBuilder();
      expect((tree.getParent(15)).value).toEqual(10);
      expect((tree.getParent(6)).value).toEqual(7);
      expect((tree.getParent(4)).value).toEqual(5);
      expect((tree.getParent(19)).value).toEqual(17);
    });
  });

  describe('remove(value) function', () => {
    test('This test should return the new Tree with the node removed that has the value', () => {
      let treeOne = treeBuilder();
      let treeTwo = treeBuilder();
      let treeThree = treeBuilder();
      let treeFour = treeBuilder();

      expect((treeOne.remove(15)).value).toEqual(10);
      expect((treeTwo.remove(5)).value).toEqual(10);
      expect((treeThree.remove(7)).left.right.value).toEqual(9);
      expect((treeFour.remove(17)).right.right.value).toEqual(19);
    });

    test('This test should return the new Tree if a leaf is removed', () => {
      let treeOne = treeBuilder();
      let treeTwo = treeBuilder();
      
      expect((treeOne.remove(19)).right.right.value).toEqual(17);
      expect((treeTwo.remove(4)).left.value).toEqual(5);
    });
  
    test('This test should return the original tree if value to be removed does not exist in the tree', () => {
      let treeOne = treeBuilder();
      let treeTwo = treeBuilder();

      expect((treeOne.remove(30))).toEqual(treeOne);
      expect((treeTwo.remove(1))).toEqual(treeTwo);
    });
    
    test('This test should return null if the Tree is only one node', () => {
      let treeOne = new BinarySearchTree(10);
      let treeTwo = new BinarySearchTree(15);

      expect((treeOne.remove(10))).toBeNull();
      expect((treeTwo.remove(10))).toEqual(treeTwo);
    });
  });
});