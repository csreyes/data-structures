var Queue = function(){
  // new someInstance obj
  var someInstance = {};
  // counter for someInstance
  someInstance.counter = 0;
  // currentLast for someInstance
  someInstance.currentLast = 0;
  // last for someInstance
  someInstance.storage = {};
  // extend queueMethods into someInstance
  _.extend(someInstance, queueMethods);
  // return someInstance
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val){
  this.storage[this.counter] = val;
  this.counter++;
};

queueMethods.dequeue = function() {
  if (this.counter > 0) {
    var last = this.storage[this.currentLast];
    delete this.storage[this.currentLast];
    this.currentLast++;
    return last;
  }
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};
