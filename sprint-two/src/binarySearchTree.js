var BinarySearchTree = function(value){
  var someInstance = Object.create(BinarySearchTree.prototype);
  someInstance.left = null;
  someInstance.right = null;
  someInstance.value = value;
  return someInstance;
};

BinarySearchTree.prototype.insert = function(value) {
  var currentTree = this;
  var newTree = BinarySearchTree(value);
  var recursiveInsert = function(currentTree, newTree) {
    var newTreeLess = newTree.value < currentTree.value ? true : false;
    if (newTreeLess) {
      currentTree.left ? recursiveInsert(currentTree.left, newTree) : currentTree.left = newTree;
    } else {
      currentTree.right ? recursiveInsert(currentTree.right, newTree) : currentTree.right = newTree;
    }
  }
  recursiveInsert(currentTree, newTree);
};

BinarySearchTree.prototype.contains = function(value) {
  var currentTree = this;
  var wasFound = false;
  var recursiveContains = function(currentTree, value) {
    if (currentTree.value === value) {
      wasFound = true;
    } else if (value < currentTree.value && currentTree.left) {
      recursiveContains(currentTree.left, value);
    } else if (value > currentTree.value && currentTree.right) {
      recursiveContains(currentTree.right, value);
    }
  };
  recursiveContains(currentTree,value);
  return wasFound;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  var currentTree = this;
  callback(currentTree.value);
  if (this.left) {this.left.depthFirstLog(callback)};
  if (this.right) {this.right.depthFirstLog(callback)};
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
