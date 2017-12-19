
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

const expectedFullTreeString = `{"value":1,"_children":[{"value":2,"_children":[]},{"value":3,"_children":[{"value":5,"_children":[]},{"value":6,"_children":[{"value":8,"_children":[]}]},{"value":7,"_children":[]}]},{"value":4,"_children":[]}]}
{"value":2,"_children":[]}
{"value":3,"_children":[{"value":5,"_children":[]},{"value":6,"_children":[{"value":8,"_children":[]}]},{"value":7,"_children":[]}]}
{"value":4,"_children":[]}
{"value":5,"_children":[]}
{"value":6,"_children":[{"value":8,"_children":[]}]}
{"value":7,"_children":[]}
{"value":8,"_children":[]}`;

const expectedTwoTreeString = `{"value":2,"_children":[]}`;



describe('K-Ary Tree JS Functions', () => {
  // afterEach(() => binaryTree.remove({}));
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

    test(' This should return null if the value searched for does not exist in the tree', () => {
      let tree = kAryTreeBuilder();
      expect(tree.find(10)).toBeNull();
      expect(tree.find(-10)).toBeNull();
    });

    describe('createString() prototype testing', () => {
      test('This should return a string of the nodes in newline format when a normal tree is passed to this method ', () => {
        let tree = kAryTreeBuilder();
        expect(tree.createString()).toEqual(expectedFullTreeString);
        expect(tree._children[0].createString()).toEqual(expectedTwoTreeString);
      });

      test('This should return a string with the starter string and the node in string and newline format when a normal tree is passed and a start string', () => {
        let tree = kAryTreeBuilder(); 
        expect(tree.createString('test starter')).toEqual(`test starter\n${expectedFullTreeString}`);
        expect(tree._children[0].createString('test starter')).toEqual(`test starter\n${expectedTwoTreeString}`);
      });

      // test(' This should PASS if the value searched for does not exist in the tree', () => {
      //   let tree = kAryTreeBuilder();
      //   expect(tree.find(10)).toBeNull();
      //   expect(tree.find(-10)).toBeNull();
      // });
    });

  });
});