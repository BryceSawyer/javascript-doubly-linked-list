const DoublyLinkedList = require('./DoublyLinkedList');

// Create a new instance of DoublyLinkedList
const list = new DoublyLinkedList();

// .addToHead() Method
list.addToHead(3);
list.addToHead(2);
list.addToHead(1);
list.print(); // Output: <Head> 1 2 3 <Tail>

// .addToTail() Method
list.addToTail(4);
list.addToTail(5);
list.print(); // Output: <Head> 1 2 3 4 5 <Tail>

// .removeHead() Method
list.removeHead();
list.print(); // Output: <Head> 2 3 4 5 <Tail>

// .removeTail() Method
list.removeTail();
list.print(); // Output: <Head> 2 3 4 <Tail>

// .removeData() Method
list.removeData(3);
list.print(); // Output: <Head> 2 4 <Tail>

// .swapNodes() Method
list.swapNodes(2, 4);
list.print(); // Output: <Head> 4 2 <Tail>

