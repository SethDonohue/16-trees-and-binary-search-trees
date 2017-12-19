
'use strict';
const BinarySearchTree = require('../binary-search-tree');

const treeBuilder = () => {
  let one = new BinarySearchTree(1);
  let two = new BinarySearchTree(2);
  let three = new BinarySearchTree(3);
  let four = new BinarySearchTree(4);
  let five = new BinarySearchTree(5);
  let six = new BinarySearchTree(6);
  let seven = new BinarySearchTree(7);

  one.left = two;
  one.right = three;
  three.left = four;
  three.right = five;
  four.left = six;
  four.right = seven;
  return one;
};

describe('Binary Search Tree JS Functions', () => {
  // afterEach(() => binaryTree.remove({}));
  describe('Find() function', () => {
    test('This test should pass when a normal case value is searched for', () => {
      let tree = treeBuilder();
      expect(tree.find(6)).toEqual(tree.right.left.left);
      expect(tree.find(7)).toEqual(tree.right.left.right);
      expect(tree.find(1)).toEqual(tree);
    });

    // test(' This test should PASS if a non-number is searched for', () => {
    //   let tree = treeBuilder();
    //   // expect(tree.find(null)).toBeNull();
    //   // expect(tree.find('string')).toBeNull();
    // });

    // test(' This test should PASS if the value searched for does not exist in the tree', () => {
    //   let tree = treeBuilder();
    //   // expect(tree.find(10)).toBeNull();
    //   // expect(tree.find(-10)).toBeNull();
    // });

    // describe('insert() function', () => {
    //   test('This test should pass when a number value is passed o this method and inserted properly', () => {
    //     let tree = treeBuilder();
    //     // expect(tree.toString(6)).toEqual(tree.right.left.left);
    //     // expect(tree.find(7)).toEqual(tree.right.left.right);
    //     // expect(tree.find(1)).toEqual(tree);
    //   });

    //   test(' This test should PASS if a non-number is searched for', () => {
    //     let tree = treeBuilder();
    //     // expect(tree.find(null)).toBeNull();
    //     // expect(tree.find('string')).toBeNull();
    //   });

    //   test(' This test should PASS if the value searched for does not exist in the tree', () => {
    //     let tree = treeBuilder();
    //     // expect(tree.find(10)).toBeNull();
    //     // expect(tree.find(-10)).toBeNull();
    //   });
    // });

    // describe('remove() function', () => {
    //   test('This test should pass when a number value is passed o this method and removed properly', () => {
    //     let tree = treeBuilder();
    //     // expect(tree.toString(6)).toEqual(tree.right.left.left);
    //     // expect(tree.find(7)).toEqual(tree.right.left.right);
    //     // expect(tree.find(1)).toEqual(tree);
    //   });

    //   test(' This test should PASS if a non-number is passed to the remove() method', () => {
    //     let tree = treeBuilder();
    //     // expect(tree.find(null)).toBeNull();
    //     // expect(tree.find('string')).toBeNull();
    //   });

    //   test(' This test should PASS if the value being removed does not exist in the tree', () => {
    //     let tree = treeBuilder();
    //     // expect(tree.find(10)).toBeNull();
    //     // expect(tree.find(-10)).toBeNull();
    //   });
    // });

  });
});