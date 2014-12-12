var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(val){

    var node = Node(val);
    if (!list.head) {
      list.head = node;
    }
    if (!list.tail) {
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }

  };

  list.removeHead = function(){
    var first = list.head;
    delete list.head;
    list.head = first.next;
    return first.value;
  };

  list.contains = function(target){
    var curr = list.head;
    while (curr) {
      if (curr.value === target) {
        return true;
      } else {
        curr = curr.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
