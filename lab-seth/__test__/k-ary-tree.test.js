
'use strict';
const kAryTree = require('../k-ary-tree');

const kAryTreeBuilder = () => {
  let one = new kAryTree(1);
  let two = new kAryTree(2);
  let three = new kAryTree(3);
  let four = new kAryTree(4);
  let five = new kAryTree(5);
  let six = new kAryTree(6);
  let seven = new kAryTree(7);
  let eight = new kAryTree(8);

  one.appendChild(two);
  one.appendChild(three);
  one.appendChild(four);

  three.appendChild(five);
  three.appendChild(six);
  three.appendChild(seven);

  six.appendChild(eight);

  return one;
};

describe('Binary Tree JS Functions', () => {
  // afterEach(() => binaryTree.remove({}));
  describe('Find() prototype', () => {
    test('This test should pass when a normal case value is searched for', () => {
      let tree = kAryTreeBuilder();
      expect(tree.find(8)).toEqual(tree._children[1]._children[1]._children[0]);
      expect(tree.find(7)).toEqual(tree._children[1]._children[2]);
      expect(tree.find(1)).toEqual(tree);
    });

    test(' This test should PASS if a non-number is searched for', () => {
      let tree = kAryTreeBuilder();
      expect(() => {tree.find(null);}).toThrow();
      expect(() => {tree.find('string');}).toThrow();
    });

    test(' This test should PASS if the value searched for does not exist in the tree', () => {
      let tree = kAryTreeBuilder();
      expect(tree.find(10)).toBeNull();
      expect(tree.find(-10)).toBeNull();
    });

    // describe('ToString() prototype', () => {
    //   test('This test should pass when a normal tree is passed to this method and be in pre-order', () => {
    //     let tree = kAryTreeBuilder();
    //     expect(tree.toString(6)).toEqual(tree.right.left.left);
    //     expect(tree.find(7)).toEqual(tree.right.left.right);
    //     expect(tree.find(1)).toEqual(tree);
    //   });

    //   test(' This test should PASS if a non-number is searched for', () => {
    //     let tree = kAryTreeBuilder();
    //     expect(tree.find(null)).toBeNull();
    //     expect(tree.find('string')).toBeNull();
    //   });

    //   test(' This test should PASS if the value searched for does not exist in the tree', () => {
    //     let tree = kAryTreeBuilder();
    //     expect(tree.find(10)).toBeNull();
    //     expect(tree.find(-10)).toBeNull();
    //   });
    // });

  });
});