// To test run 'npx test' 
const DoublyLinkedList = require('./DoublyLinkedList');
const Node = require('./Node');

describe('Doubly Linked List', () => {
    let list;

    beforeEach(() => {
        list = new DoublyLinkedList();
    });

    describe('addToHead', () => {
        test('should add a node to the head of an empty list', () => {
            list.addToHead(1);
            expect(list.head.data).toBe(1);
            expect(list.tail.data).toBe(1);
        });

        test('should add a node to the head of a non-empty list', () => {
            list.addToTail(2);
            list.addToHead(1);
            expect(list.head.data).toBe(1);
            expect(list.tail.data).toBe(2);
        });
    });

    describe('addToTail', () => {
        test('should add a node to the tail of an empty list', () => {
            list.addToTail(1);
            expect(list.head.data).toBe(1);
            expect(list.tail.data).toBe(1);
        });

        test('should add a node to the tail of a non-empty list', () => {
            list.addToHead(1);
            list.addToTail(2);
            expect(list.head.data).toBe(1);
            expect(list.tail.data).toBe(2);
        });
    });

    describe('removeHead', () => {
        test('should return null when removing head from an empty list', () => {
            const result = list.removeHead();
            expect(result).toBeNull();
        });

        test('should remove the head from a list with one node', () => {
            list.addToHead(1);
            const result = list.removeHead();
            expect(result).toBe(1);
            expect(list.head).toBeNull();
            expect(list.tail).toBeNull();
        });

        test('should remove the head from a list with multiple nodes', () => {
            list.addToHead(1);
            list.addToTail(2);
            const result = list.removeHead();
            expect(result).toBe(1);
            expect(list.head.data).toBe(2);
            expect(list.tail.data).toBe(2);
        });
    });

    describe('removeTail', () => {
        test('should return null when removing tail from an empty list', () => {
            const result = list.removeTail();
            expect(result).toBeNull();
        });

        test('should remove the tail from a list with one node', () => {
            list.addToTail(1);
            const result = list.removeTail();
            expect(result).toBe(1);
            expect(list.head).toBeNull();
            expect(list.tail).toBeNull();
        });

        test('should remove the tail from a list with multiple nodes', () => {
            list.addToHead(1);
            list.addToTail(2);
            const result = list.removeTail();
            expect(result).toBe(2);
            expect(list.head.data).toBe(1);
            expect(list.tail.data).toBe(1);
        });
    });

    describe('removeData', () => {
        test('should return null when data is not found', () => {
            const result = list.removeData(1);
            expect(result).toBeNull();
        });

        test('should remove head when data is at the head', () => {
            list.addToTail(1);
            list.addToTail(2);
            const result = list.removeData(1);
            expect(result).toBe(1);
            expect(list.head.data).toBe(2);
            expect(list.tail.data).toBe(2);
        });

        test('should remove tail when data is at the tail', () => {
            list.addToTail(1);
            list.addToTail(2);
            const result = list.removeData(2);
            expect(result).toBe(2);
            expect(list.head.data).toBe(1);
            expect(list.tail.data).toBe(1);
        });

        test('should remove a node when data is in the middle', () => {
            list.addToTail(1);
            list.addToTail(2);
            list.addToTail(3);
            const result = list.removeData(2);
            expect(result).toBe(2);
            expect(list.head.data).toBe(1);
            expect(list.head.getNextNode().data).toBe(3);
            expect(list.tail.data).toBe(3);
        });
    });

    describe('findNodeByData', () => {
        test('should return null when data is not found', () => {
            const result = list.findNodeByData(1);
            expect(result).toBeNull();
        });

        test('should return the node when data is found at head', () => {
            list.addToHead(1);
            list.addToTail(2);
            const result = list.findNodeByData(1);
            expect(result.data).toBe(1);
        });

        test('should return the node when data is found at tail', () => {
            list.addToHead(1);
            list.addToTail(2);
            const result = list.findNodeByData(2);
            expect(result.data).toBe(2)
        });

        test('should return the node when data is found in the middle', () => {
            list.addToHead(1);
            list.addToTail(2);
            list.addToTail(3);
            const result = list.findNodeByData(2);
            expect(result.data).toBe(2);
        });
    });

    describe('swapNodes', () => {
        test('should swap head and tail', () => {
            list.addToHead(1);
            list.addToTail(2);
            list.addToTail(3);
            list.swapNodes(1, 3);
            expect(list.head.data).toBe(3);
            expect(list.head.getNextNode().data).toBe(2);
            expect(list.tail.data).toBe(1);
        });

        test('should swap nodes in the middle of the list', () => {
            list.addToHead(1);
            list.addToTail(2);
            list.addToTail(3);
            list.swapNodes(2, 3);
            expect(list.head.data).toBe(1);
            expect(list.head.getNextNode().data).toBe(3);
            expect(list.tail.data).toBe(2);
        });

        test('should throw an error when only one argument is provided', () => {
            list.addToHead(1);
            expect(() => list.swapNodes(1)).toThrow('Both data1 and data2 are required for swapping nodes')
        });

        test('should throw an error when arguments are the same', () => {
            list.addToHead(1);
            list.addToHead(2);
            expect(() => list.swapNodes(1, 1)).toThrow('Arguments are the same - no swap to be made')
        });

        test('should throw an error when one or more elements are not in the list', () => {
            list.addToHead(1);
            list.addToTail(2);
            expect(() => list.swapNodes(1, 3)).toThrow('Swap not possible - one or more element is not in the list')
        });
    });
});

