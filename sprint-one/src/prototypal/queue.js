var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.currentLast = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.counter] = val;
  this.counter++;
};

queueMethods.dequeue = function () {
  if (this.counter > 0){
    var last = this.storage[this.currentLast];
    delete this.storage[this.currentLast];
    this.currentLast++;
    return last;
  }
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};

