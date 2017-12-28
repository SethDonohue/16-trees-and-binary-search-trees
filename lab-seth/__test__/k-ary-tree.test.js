
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

const expectedFullTreeString = `1\n2\n3\n4\n5\n6\n7\n8`;
const expectedTwoTreeString = `2`;
const expectedFullTreeArray = [1,4,3,7,6,8,5,2];
const expectedTwoTreeArray = [2];


describe('K-Ary Tree JS Functions', () => {
  describe('find() prototype testing', () => {
    test('This should return the found node when a normal case value is searched for', () => {
      let tree = kAryTreeBuilder();
      expect(tree.find(8)).toEqual(tree._children[1]._children[1]._children[0]);
      expect(tree.find(7)).toEqual(tree._children[1]._children[2]);
      expect(tree.find(1)).toEqual(tree);
    });

    test(' This should return null if a non-number is searched for', () => {
      let tree = kAryTreeBuilder();
      expect(() => {tree.find(null);}).toThrow();
      expect(() => {tree.find('string');}).toThrow();
    });

    test('This should return null if the value searched for does not exist in the tree', () => {
      let tree = kAryTreeBuilder();
      expect(tree.find(10)).toBeNull();
      expect(tree.find(-10)).toBeNull();
    });

    describe('createString() prototype testing', () => {
      test('This should return a string of the node values in newline format when a normal tree is passed to this method ', () => {
        let tree = kAryTreeBuilder();
        expect(tree.createString()).toEqual(expectedFullTreeString);
        expect(tree._children[0].createString()).toEqual(expectedTwoTreeString);
      });

      test('This should return a string with the starter string and the node values in string and newline format when a normal tree is passed and a start string', () => {
        let tree = kAryTreeBuilder(); 
        expect(tree.createString('test starter')).toEqual(`test starter\n${expectedFullTreeString}`);
        expect(tree._children[0].createString('test starter')).toEqual(`test starter\n${expectedTwoTreeString}`);
      });
    });

    describe('createArray() prototype testing', () => {
      test('This should return an Array of the node values in newline format when a normal tree is passed to this method ', () => {
        let tree = kAryTreeBuilder();
        expect(tree.createArray()).toEqual(expectedFullTreeArray);
        expect(tree._children[0].createArray()).toEqual(expectedTwoTreeArray);
      });

      test('This should return a string with the starter string and the node values in string and newline format when a normal tree is passed and a start string', () => {
        let tree = kAryTreeBuilder(); 
        expect(tree.createArray([555, 505])).toEqual([555, 505,1, 4, 3, 7, 6, 8, 5, 2]);
        expect(tree._children[0].createArray([555, 505])).toEqual([555, 505,2]);
      });
    });

  });
});