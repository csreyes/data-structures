var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this._storage.push(item);
};

setPrototype.contains = function(item){
  if (this._storage.indexOf(item) !== -1){
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item){
  var removeIndex = this._storage.indexOf(item);
  this._storage.splice(removeIndex,1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
