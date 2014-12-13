var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v){
  //invoke resize if this._counter + 1 > 75% of this._limit
  if ((this._counter + 1) > (this._limit * .75)) {
    this.resize(2);
  }
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var bucket;
  if (!this._storage.get(i)) {
    this._storage.set(i, []);
  }
  bucket = this._storage.get(i);
  bucket.push(tuple);
  this._storage.set(i, bucket);
  this._counter++;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket) {
    for (var j = 0; j < bucket.length; j++) {
      var tuple = bucket[j];
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket) {
    for (var j = 0; j < bucket.length; i++) {
      var tuple = bucket[j];
      if (tuple[0] === k) {
        bucket.splice(j, 1);
        this._counter--;
      }
    }
  }
  //invoke resize if less than 25% of this._limit
  if (this._counter < this._limit *.25) {
    this.resize(.5);
  }
};

HashTable.prototype.resize = function(newLimit){
  var oldHash = this._storage;
  this._limit = this._limit * newLimit;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
  var tuples = [];
  oldHash.each(function(bucket, index, storage) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        tuples.push(bucket[i]);
      }
    }
  });
  for (var j = 0; j < tuples.length; j++) {
    var tuple = tuples[j];
    this.insert(tuple[0], tuple[1]);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
