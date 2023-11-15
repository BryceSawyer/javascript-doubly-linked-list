class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }

    setNextNode(node) {
        if (node !== null && !(node instanceof Node)) {
            throw new Error('Next node must be a member of the Node class');
        }
        this.next = node;
    }

    getNextNode() {
        return this.next;
    }


    setPrevNode(node) {
        if (node !== null && !(node instanceof Node)) {
            throw new Error('Previous node must be a member of the Node class');
        }
        this.previous = node;
    }

    
    getPrevNode() {
        return this.previous;
    }
};


module.exports = Node;