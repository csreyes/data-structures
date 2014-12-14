var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];
  newTree.parent = null;

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var child = Tree(value);
  this.children.push(child);
  child.parent = this;
};

treeMethods.removeFromParent= function(tree) {
  var treePosition;
  var findTree = function(value){
    if (this.value === target) {
      treePosition = this;
    } else {
      for (var i = 0; i < this.children.length; i++) {
        this.children[i].findTree(target)
      }
    }
  };

  findTree.apply(this, tree);

  if (treePosition) {
    var parentsChildren = treePosition.parent.children;
    var index;
    for (var j = 0; j < parentsChildren.length; j++){
      if (parentsChildren[j].value ===  treePosition.value) {
        index = j;
      }
    }
    parentsChildren.splice(index, 1);
  }
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
