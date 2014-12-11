var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var last;
  // Implement the methods below
  someInstance.push = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function(){
    if (counter > 0) {
      counter--;
      last = storage[counter];
      delete storage[counter];
      return last;
    }
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
