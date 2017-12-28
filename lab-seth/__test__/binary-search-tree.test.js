
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