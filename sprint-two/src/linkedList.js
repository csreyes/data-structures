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
      node.prev = list.tail;
      list.tail.next = node;
      list.tail = node;
    }

  };

  list.removeHead = function(){
    var first = list.head;
    delete list.head;
    list.head = first.next;
    if (list.head) {list.head.prev = null;}
    return first.value;
  };

  list.removeTail = function() {
    var tailVal = list.tail.value;
    list.tail.prev.next = null;
    list.tail = list.tail.prev;
    return tailVal;
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

  list.addToHead = function(value) {
    var newHead = Node(value);
    newHead.next = list.head;
    list.head = newHead;
    if (!list.tail) {
      list.tail = newHead;
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
