var Queue = function() {
  this.storage = {};
  this.counter = 0;
  this.currentLast = 0;
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.counter] = val;
  this.counter++;
};

Queue.prototype.dequeue = function() {
  if (this.counter > 0) {
    var last = this.storage[this.currentLast];
    delete this.storage[this.currentLast];
    this.currentLast++;
    return last;
  }
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

