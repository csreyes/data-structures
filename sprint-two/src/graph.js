
var Graph = function(){
  this.list = {};
};

Graph.prototype.addNode = function(value){
  var stringified = JSON.stringify(value)
  this.list[stringified] = [];
};

Graph.prototype.contains = function(node){
  var stringified = JSON.stringify(node);
  if (Object.keys(this.list).indexOf(stringified) !== -1) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype.removeNode = function(node){
  var stringified = JSON.stringify(node);
  delete this.list[stringified];
};
Graph.prototype.hasEdge = function(fromNode, toNode){
  var fromNodeKey = JSON.stringify(fromNode);
  var toNodeKey = JSON.stringify(toNode);
  if (this.list[fromNodeKey].indexOf(toNodeKey) !== -1) {
    return true;
  } else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var fromNodeKey = JSON.stringify(fromNode);
  var toNodeKey = JSON.stringify(toNode);
  this.list[toNodeKey].push(fromNodeKey);
  this.list[fromNodeKey].push(toNodeKey);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var fromNodeKey = JSON.stringify(fromNode);
  var toNodeKey = JSON.stringify(toNode);
  var fromNodeIndex = this.list[fromNodeKey].indexOf(toNodeKey);
  var toNodeIndex = this.list[toNodeKey].indexOf(fromNodeKey);
  if (fromNodeIndex !== -1) {
    this.list[fromNodeKey].splice(fromNodeIndex, 1);
  }
  if (toNodeIndex !== -1) {
    this.list[toNodeKey].splice(fromNodeIndex, 1);
  }
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.list) {
    var parsedNode = JSON.parse(key);
    cb(parsedNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



