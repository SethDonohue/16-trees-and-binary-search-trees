
'use strict';
const BinarySearchTree = require('../binary-search-tree');

const treeBuilder = () => {
  let one = new BinarySearchTree(10);
  let two = new BinarySearchTree(5);
  let three = new BinarySearchTree(15);
  let four = new BinarySearchTree(4);
  let five = new BinarySearchTree(7);
  let six = new BinarySearchTree(12);
  let seven = new BinarySearchTree(17);
  let eight = new BinarySearchTree(6);
  let nine = new BinarySearchTree(9);
  let ten = new BinarySearchTree(19);

  one.left = two;
  one.right = three;
  two.left = four;
  two.right = five;
  three.left = six;
  three.right = seven;
  five.left = eight;
  five.right = nine;
  seven.right = ten;
  return one;
};

describe('Binary Search Tree JS Functions', () => {
  // afterEach(() => binaryTree.remove({}));
  describe('Find() function', () => {
    test('This test should pass when the root value is searched for', () => {
      let tree = treeBuilder();
      expect(tree.find(10)).toEqual(tree);
    });

    test('This test should pass when a value that does not exist in the tree is searched for', () => {
      let tree = treeBuilder();
      expect(tree.find(3)).toEqual(false);
      expect(tree.find(25)).toEqual(false);
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
    test('This test should return the node Parent node of a value searched for', () => {
      let tree = treeBuilder();
      expect((tree.getParent(15)).value).toEqual(10);
      expect((tree.getParent(19)).value).toEqual(17);
      expect((tree.getParent(6)).value).toEqual(7);
    });
  });

  describe.only('remove(value) function', () => {
    test('This test should return the node Parent node of a value searched for', () => {
      let treeOne = treeBuilder();
      let treeTwo = treeBuilder();
      let treeThree = treeBuilder();
      let treeFour = treeBuilder();

      expect((treeOne.remove(15)).value).toEqual(10);
      expect((treeTwo.remove(5)).value).toEqual(10);
      expect((treeThree.remove(7)).left.right.value).toEqual(9);
      expect((treeFour.remove(17)).right.right.value).toEqual(19);
    });
  });
});