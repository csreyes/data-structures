var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var bucket;
  if (!this._storage.get(i)) {
    this._storage.set(i, []);
  }
  bucket = this._storage.get(i);
  bucket.push(tuple);
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      return bucket[j][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var j = 0; j < bucket.length; i++) {
    if (bucket[j][0] === k) {
      bucket.splice(j, 1);
    }
  }
  return null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
