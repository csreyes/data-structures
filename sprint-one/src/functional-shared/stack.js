var Stack = function() {
  //make a new instance obj
  var someInstance = {};
  //make a counter var
  someInstance.counter = 0;
  //make a last var
  //extend from stack methods into new instance obj
  _.extend(someInstance, stackMethods);
  //return obj
  someInstance.storage = {};
  return someInstance;
  //
};

var stackMethods = {};
stackMethods.push = function(val) {
  this.storage[this.counter] = val;
  this.counter++;
  //add the methods using this keyword

};

stackMethods.pop = function() {
  if (this.counter > 0){
    this.counter--;
    var last = this.storage[this.counter];
    delete this.storage[this.counter];
    return last;
  }
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};
