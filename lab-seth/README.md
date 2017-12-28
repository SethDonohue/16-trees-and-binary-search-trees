<!-- TODO: Include the Big O complexity (time and space) for all the implemented methods.. -->
<!-- in your README, write documentation for your data structures
your documentation should includes code block usage examples
provide instructions for:
installing and using your data structure
accessing each method
running your tests -->
## Binary Trees
This lab builds and tests a Binary Tree prototype constructor and 3 prototype methods:
- find()
- createString()
- createArray()

## Methods

1.) find(): Takes in a value (number only) to search for and returns the node if found, otherwise returns false.
  - Big O Time: (O)n where n = tree height
  - Big O Space: (O)n where n = tree height

2.) createString(): Takes in a node and creates a string of the values for the root and all other nodes in an Pre-Order traversal.
  - Big O Time: (O)n where n = tree height
  - Big O Space: (O)n where n = tree height

3.) createArray(): Takes in a node and creates an array of the elements for the root and all other nodes in an Post-Order traversal.
  - Big O Time: (O)n where n = tree height
  - Big O Space: (O)n where n = tree height


## Tech/framework used
Node.JS, Javascript, 
### Dependencies necessary for production: 
- jest
### Dependencies necessary for development: 
- eslint


## Installation
Clone this repo to your local machine then install the npm dependencies necessary to run.

## Tests
- Find() should return the node of the value searched for root, smaller, larger, non-existant value in the tree
- createString() should return a string of the values of each node for the first node, with a starting string, any node but the first node
- createArray() should return an array of the elelments of each node starting with the first node, with a starting string, or any node but the first node.

## How to use?
npm install
npm run test


## Credits
Classmates help, TA help, jest

## License
MIT License @ Seth Donohue