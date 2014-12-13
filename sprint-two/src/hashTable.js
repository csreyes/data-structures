var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0
};

HashTable.prototype.insert = function(k, v){
  if (this._counter >= (this._limit * .75)){
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
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      return bucket[j][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){

  if (this._counter -1 <= (this._limit * .25)){
    this.resize(.5);
  }
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket) {
    for (var j = 0; j < bucket.length; i++) {
      if (bucket[j][0] === k) {
        bucket.splice(j, 1);
        this.counter--;
      }
    }
  }
  return null;
};

HashTable.prototype.resize = function(newLimit){
  this._limit = this._limit * newLimit;
  var oldHash = this._storage;
  var newHash = LimitedArray(this._limit);
  var tuples = [];
  this._storage = newHash;
  oldHash.each(function(bucket, index, storage) {
    if (bucket) {
      tuples.push(bucket);
    }
  });
  for (var j = 0; j < tuples.length; j++) {
    this.insert(tuples[j][0][0], tuples[j][0][1]);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
