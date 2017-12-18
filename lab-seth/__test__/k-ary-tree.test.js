
'use strict';
const kAryTree = require('../lib/k-ary-tree');

const kAryTreeBuilder = () => {
  let one = new KAryTree(1);
  let two = new KAryTree(2);
  let three = new KAryTree(3);
  let four = new KAryTree(4);
  let five = new KAryTree(5);
  let six = new KAryTree(6);
  let seven = new KAryTree(7);
  let eight = new KAryTree(8);

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
      expect(tree.find(6)).toEqual(tree.right.left.left);
      expect(tree.find(7)).toEqual(tree.right.left.right);
      expect(tree.find(1)).toEqual(tree);
    });

    test(' This test should PASS if a non-number is searched for', () => {
      let tree = kAryTreeBuilder();
      expect(tree.find(null)).toBeNull();
      expect(tree.find('string')).toBeNull();
    });

    test(' This test should PASS if the value searched for does not exist in the tree', () => {
      let tree = kAryTreeBuilder();
      expect(tree.find(10)).toBeNull();
      expect(tree.find(-10)).toBeNull();
    });

    describe('ToString() prototype', () => {
      test('This test should pass when a normal tree is passed to this method and be in pre-order', () => {
        let tree = kAryTreeBuilder();
        expect(tree.toString(6)).toEqual(tree.right.left.left);
        expect(tree.find(7)).toEqual(tree.right.left.right);
        expect(tree.find(1)).toEqual(tree);
      });

      test(' This test should PASS if a non-number is searched for', () => {
        let tree = kAryTreeBuilder();
        expect(tree.find(null)).toBeNull();
        expect(tree.find('string')).toBeNull();
      });

      test(' This test should PASS if the value searched for does not exist in the tree', () => {
        let tree = kAryTreeBuilder();
        expect(tree.find(10)).toBeNull();
        expect(tree.find(-10)).toBeNull();
      });
    });

  });