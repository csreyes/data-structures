var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var currentLast = 0;
  var last;


  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function(){
    last = storage[currentLast];
    delete storage[currentLast];
    currentLast++;
    return last;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
