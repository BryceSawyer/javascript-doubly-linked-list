// DOUBLY LINKED LISTS: JAVASCRIPT

// A doubly linked list is a sequential chain of nodes.
// Doubly linked list data structure has a tail and a head property.
// There are pointers to the previous node as well as the next node.
// node's contain two elements:
// 'Data', and a 'link' to the next and previous node's
const Node = require('./Node.js'); // <--- Node Class Constructor()

// Doubly linked list class constructor();
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // addHead() Method:
    // Adds a new node to the beginning (head) of the list,
    // Takes one parameter, 'data'.
    addToHead(data) {
        // Creates a Node instance, and passed data.
        const newHead = new Node(data);
        // If there is a current head to the list
        if (this.head) {
            // Sets the currentHead's previous node to be the newHead.
            this.head.setPrevNode(newHead);
            // sets newHead's next node to currentHead
            newHead.setNextNode(this.head);
        }
        // Update the head of the list to the new head
        this.head = newHead;
        // If the list doesn’t have a tail,
        if (!this.tail) {
            // Update the tail property to be the new head
            this.tail = newHead;
        }
    }
    // .addToTail() Method: 
    // Adds a new node to the end (Tail) of the list,
    // Takes one parameter, 'data'.
    addToTail(data) {
        // Creates a Node instance, and passed data.
        const newTail = new Node(data);
        // If the list is empty, 
        if (this.tail) {
            // Set the current tail’s next node to the new tail.
            this.tail.setNextNode(newTail)
            // Set the new tail’s previous node to the current tail.
            newTail.setPrevNode(this.tail)
        }
        // Update the tail of the list to the new tail 
        this.tail = newTail;
        // If there isn’t a current head to the list
        if (!this.head) {
            // Update the head property to be the new tail
            this.head = newTail;
        }
    }

    //.removeHead() Method:
    // Removes the node from the beginning (head) of the list
    removeHead() {
        if (!this.head) return null;
        // If the list is not empty (head is not null)
        // Initialize removeHead to be the head node.
        const removedHead = this.head;
        // update the list’s head to be the current head’s next node
        this.head = removedHead.getNextNode()
        // If there is still a head to the list (list had more than one element when we started)
        if (this.head) {
            // Set the head’s previous node to null
            this.head.setPrevNode(null)
        }
        // If the removed head was also the tail of the list 
        if (removedHead === this.tail) {
            // call .removeTail() method
            this.removeTail()
        }
        // Return the data of the removed head.
        return removedHead.data;
    }

    //.removeTail() Method:
    // Removes the node from the end of the list
    removeTail() {
        if (!this.tail) return null;
        // If the list is not empty (tail is not null)
        // Initialize removeTail to be the tail node.
        const removedTail = this.tail;
        // update the list’s tail to be the current tail’s next node
        this.tail = removedTail.getPrevNode();
        // If there is still a tail to the list (list had more than one element when we started)
        if (this.tail) {
            // Set the tail’s next node to null
            this.tail.setNextNode(null);
        }
        // If the removed tail was also the head of the list 
        if (removedTail === this.head) {
            // call removeHead() method
            this.removeHead();
        }
        // Return the data of the removed tail.
        return removedTail.data;
    }

    //.removeData() Method:
    // Removes a node by its data value from the linked list.
    // Takes one parameter, 'data'.
    removeData(data) {
        if (!this.head) return null;
        // If the list is not empty (head is not null)
        // If the data to remove is the head node. 
        if (this.head.data === data) {
            // it uses .removeHead() method to remove node.
            return this.removeHead();
        }
        // If the data to remove is the tail node.
        if (this.tail.data === data) {
            // it uses .removeTail() method to remove node.
            return this.removeTail();
        }
        // Finds the data using .findNodeByData() method
        const nodeToRemove = this.findNodeByData(data);
        // If data is not found
        if (!nodeToRemove) {
            return null;
        }
        this.resetLinks(nodeToRemove);
        return nodeToRemove.data;
    }

    // .findNodeByData() Method:
    // Finds a node by its data value in the linked list and returns the node and its previous node.
    // Takes one parameter, 'data'.
    findNodeByData(data) {
        if (!this.head) return null;
        // If the list is not empty (head is not null)
        // Initialize node to be the head node
        let node = this.head;
        // Traverse the list to find the data.
        while (node && node.data !== data) {
            // update currentNode to be its next node if there is no match.
            node = node.getNextNode();
        }
        // return the found node.
        return node;
    }

    resetLinks(data) {
        // prevNode that is equal to data's previous node
        const prevNode = data.getPrevNode();
        // nextNode is equal to data's next node
        const nextNode = data.getNextNode();
        // Set prevNode‘s next node to nextNode
        prevNode.setNextNode(nextNode);
        // Set nextNode‘s previous node to prevNode
        nextNode.setPrevNode(prevNode);
        // Return the data of the node to be removed.
        return data;
    }

    // .swapNodes() Method:
    // Swaps two nodes in the linked list based on their data values.
    // Takes Two parameters, data1 and data2.
    swapNodes(data1, data2) {
        // If data2 is falsy, indicating that both data1 and data2 should be provided.
        if (!data2) {
            throw new Error('Both data1 and data2 are required for swapping nodes')
        }
        // if the data values to be swapped are the same.
        if (data1 === data2) {
            throw new Error('Arguments are the same - no swap to be made');
        }
        // If the list is not empty but contains only one node.
        if (this.head && !this.head.getNextNode()) {
            throw new Error('Swap not possible - only one element in the list')
        }
        // Find the first node equal to 'data1' and its previous node using .findNodeByData() method
        const node1 = this.findNodeByData(data1);
        // Find the second node equal 'data2' and its previous node using .findNodeByData() method.
        const node2 = this.findNodeByData(data2);
        // If either of the nodes are not found in the list.
        if (!node1 || !node2) {
            throw new Error('Swap not possible - one or more element is not in the list');
        }
        // Get the previous nodes for node1 and node2.
        const node1Prev = node1.getPrevNode();
        const node2Prev = node2.getPrevNode();
        // Update the links between nodes to perform the swap.
        node1Prev === null ? this.head = node2 : node1Prev.setNextNode(node2);
        node2Prev === null ? this.head = node1 : node2Prev.setNextNode(node1);
        // Swaps the links between node1 and node2.
        const temp = node1.getNextNode();
        node1.setNextNode(node2.getNextNode());
        node2.setNextNode(temp);
        // Update the tail if one of the nodes is the new tail.
        if (!node1.getNextNode()) {
            this.tail = node1;
        } else if (!node2.getNextNode()) {
            this.tail = node2;
        }
    }

    //.print() Method:
    // print out the nodes in the list in order from head to tail
    print() {
        let node = this.head;
        let output = '<Head> ';
        while (node) {
            output += node.data + ' ';
            node = node.getNextNode();
        }
        output = output + '<Tail>';
        console.log(output)
    }
}

module.exports = DoublyLinkedList;