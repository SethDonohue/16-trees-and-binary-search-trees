<!-- in your README, write documentation for your data structures
your documentation should includes code block usage examples
provide instructions for:
installing and using your data structure
accessing each method
running your tests -->
# Binary Search Trees and K-Ary-Trees
### Builds and tests a Binary Search Tree  constructor and 3 methods:
- insert()
- find()
- getMin()
- getMax()
- getParent()
- remove()

### Builds and tests a K-Ary Tree constructor and 3 prototype methods:
- appendChild()
- breadthFirstSearch()
- depthFirstSearch()
- find()
- createString()
- createArray()

##  Binary Search Tree Methods

1.) insert(): Takes in a value (number only) to insert into the tree and returns nothing if the node was inserted correctly, otherwise returns a TypeError if value is not a number or if the value is already present.
  - Big O Time: (O)n where n = tree height
  - Big O Space: (O)n where n = tree height

2.) find(): Takes in a value (number only) to search for and returns the node that has the value, otherwise returns false if the value is not found.
  - Big O Time: (O)n where n = tree height
  - Big O Space: (O)n where n = tree height

3.) getMin(): returns the node with the Minimum value of the tree.
  - Big O Time: (O)n where n = tree height
  - Big O Space: (O)n where n = tree height

4.) getMax(): returns the node with the Maximum value of the tree.
  - Big O Time: (O)n where n = tree height
  - Big O Space: (O)n where n = tree height

5.) getParent(): Takes in a value and returns the parent node of the node that has the value. Returns null if the first node has the value as that means there are no parents. Returns -1 if the value is not found.
  - Big O Time: (O)n where n = tree height
  - Big O Space: (O)n where n = tree height

6.) remove(): Takes in a value and returns the modified tree with the node with that has the value removed. Returns null if there is only one node and the value is equal. Returns the original tree if the value is not found.
  - Big O Time: (O)n where n = tree height
  - Big O Space: (O)n where n = tree height

##  K-Ary Tree Methods

1.) appendChild(): Takes in a new node to append to the end of the tree and returns nothing if the node was inserted correctly. Returns a TypeError if the node is not an instance of K-Ary-Tree constructor.
  - Big O Time: (O)n where n = tree height
  - Big O Space: (O)n where n = tree height

2.) breadthFirstSearch(): Logs the breadth first order of the values in the tree using the queue library.
  - Big O Time: (O)n where n = tree height
  - Big O Space: (O)n where n = tree height

3.) depthFirstSearch(): Logs the depth first order of the values in the tree using the queue library.
  - Big O Time: (O)n where n = tree height
  - Big O Space: (O)n where n = tree height

4.) find():  Takes in a value and returns the node with that ontains the value in a breadth first traverse. Returns null if the value is not found.
  - Big O Time: (O)n where n = tree height
  - Big O Space: (O)n where n = tree height

5.) createString(): Takes in a tree/node and creates a string of the values for the root and all other nodes in a breadth first traversal.
  - Big O Time: (O)n where n = tree height
  - Big O Space: (O)n where n = tree height

6.) createArray(): Takes in a tree/node and creates an array of the elements for the root and all other nodes in an depth first traversal.
  - Big O Time: (O)n where n = number of nodes in the tree
  - Big O Space: (O)n where n = number of nodes in the tree

## Code Block Examples
Binary Search Tree remove():

```remove(value){
    let parent = this.getParent(value);
    let current = this;

    if(parent === null) return null; // no parents exist but the value we are looking for is in this single node as determined by getParent, so return null.

    if(parent === -1) return this; // no parents exist and the value we are loking for is not in this tree as determined by getparent, so return original tree.

    let removeHelper = function (current){
      if(current.value === value){
      
        if(current.left === null && current.right === null) return null; //node is only node to remove

        if(current.value > parent.value ){
          (current.right.getMin()).left = current.left;
          parent.right = current.right;
        }
        if(current.value < parent.value ){
          (current.right.getMin()).left = current.left;
          parent.left = current.right;
        }
      }
      if(value < current.value) return removeHelper(current.left);
      if(value > current.value) return removeHelper(current.right);
    };
    removeHelper(this);
    return this;
  }
}

```

K-Ary Tree find():
```
KAryTree.prototype.find = function(value){
  if(typeof value !== 'number') throw new TypeError('Value is not a number');

  let queue = new Queue();
  queue.enqueue(this);
  let current = null;

  while (queue.getLength() > 0) {
    current = queue.dequeue();
    if(current.value === value){
      return current;
    }
      
    for (let child of current._children){
      queue.enqueue(child);
    }
  }
  return null;
};

```
## Tech/Framework used
Javascript, Jest
### Dependencies necessary for development: 
- eslint
- jest


## Installation
Clone this repo to your local machine then
```
npm install
```

# Usage 
#### Binary Search Tree 
Run each corresponding method on a Binary Search Tree with dot notation such as:
```
binarySearchTree.find(15)
```
#### K-Ary Tree 
Run each corresponding method on a K-Ary Tree with dot notation such as:
```
kAryTree.find(15)
```

## Tests
In lab-seth/ run
```
npm run test
```


## Credits
Classmates help, TA help, jest

## License
MIT License @ Seth Donohue