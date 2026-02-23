import React from 'react';

const DoublyLinkedList: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Doubly Linked List
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Doubly Linked List is a type of linked list where each node contains a data field and two
      pointers: one pointing to the next node and another pointing to the previous node. This
      bidirectional linking allows traversal in both forward and backward directions, making certain
      operations more efficient than in a singly linked list.
    </p>

    <h2 className="text-2xl font-bold mt-6">Structure of a Node</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <div className="font-mono text-center">
        <p className="mb-2">Each node contains:</p>
        <div className="inline-flex border-2 border-gray-400">
          <div className="p-4 border-r-2 border-gray-400 bg-yellow-100">Prev Pointer</div>
          <div className="p-4 border-r-2 border-gray-400 bg-blue-100">Data</div>
          <div className="p-4 bg-green-100">Next Pointer</div>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Representation</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <div className="font-mono text-center overflow-x-auto">
        <p className="mb-4">Doubly Linked List with 3 nodes:</p>
        <div className="inline-flex items-center space-x-1">
          <span className="text-red-600 font-bold">NULL</span>
          <span>&lt;-</span>
          <div className="border-2 p-2">[*|10|*]</div>
          <span>&lt;-&gt;</span>
          <div className="border-2 p-2">[*|20|*]</div>
          <span>&lt;-&gt;</span>
          <div className="border-2 p-2">[*|30|*]</div>
          <span>-&gt;</span>
          <span className="text-red-600 font-bold">NULL</span>
        </div>
        <p className="mt-2 text-sm">HEAD points to first node, TAIL points to last node</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Characteristics</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Bidirectional Traversal:</strong> Can traverse forward and backward</li>
      <li><strong>Two Pointers:</strong> Each node has prev and next pointers</li>
      <li><strong>More Memory:</strong> Requires extra memory for prev pointer</li>
      <li><strong>Easier Deletion:</strong> Can delete a node without finding previous</li>
      <li><strong>Flexible Operations:</strong> Insert before/after any node efficiently</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Advantages over Singly Linked List</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Can traverse in both directions</li>
      <li>Deletion is more efficient when node reference is given</li>
      <li>Can insert before a given node in O(1)</li>
      <li>Easy to find previous node</li>
      <li>Better for implementing LRU cache</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">JavaScript Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Node class for Doubly Linked List
class DoublyNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// Doubly Linked List class
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Check if list is empty
    isEmpty() {
        return this.head === null;
    }

    // Get size of the list
    getSize() {
        return this.size;
    }

    // Insert at the beginning - O(1)
    insertAtBeginning(data) {
        const newNode = new DoublyNode(data);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // Insert at the end - O(1) with tail pointer
    insertAtEnd(data) {
        const newNode = new DoublyNode(data);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // Insert at specific position - O(n)
    insertAt(data, position) {
        if (position < 0 || position > this.size) {
            throw new Error("Invalid position");
        }

        if (position === 0) {
            this.insertAtBeginning(data);
            return;
        }

        if (position === this.size) {
            this.insertAtEnd(data);
            return;
        }

        const newNode = new DoublyNode(data);
        let current = this.head;

        for (let i = 0; i < position; i++) {
            current = current.next;
        }

        newNode.prev = current.prev;
        newNode.next = current;
        current.prev.next = newNode;
        current.prev = newNode;
        this.size++;
    }

    // Insert after a given node - O(1)
    insertAfter(node, data) {
        if (node === null) {
            throw new Error("Given node cannot be null");
        }

        const newNode = new DoublyNode(data);
        newNode.prev = node;
        newNode.next = node.next;

        if (node.next !== null) {
            node.next.prev = newNode;
        } else {
            this.tail = newNode;
        }
        node.next = newNode;
        this.size++;
    }

    // Delete from beginning - O(1)
    deleteFromBeginning() {
        if (this.isEmpty()) {
            throw new Error("List is empty");
        }

        const data = this.head.data;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
        return data;
    }

    // Delete from end - O(1) with tail pointer
    deleteFromEnd() {
        if (this.isEmpty()) {
            throw new Error("List is empty");
        }

        const data = this.tail.data;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return data;
    }

    // Delete a specific node - O(1) when node reference is given
    deleteNode(node) {
        if (node === null) {
            throw new Error("Node cannot be null");
        }

        if (node === this.head) {
            return this.deleteFromBeginning();
        }

        if (node === this.tail) {
            return this.deleteFromEnd();
        }

        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.size--;
        return node.data;
    }

    // Delete by value - O(n)
    deleteByValue(data) {
        let current = this.head;

        while (current !== null) {
            if (current.data === data) {
                return this.deleteNode(current);
            }
            current = current.next;
        }
        return null;
    }

    // Search for element - O(n)
    search(data) {
        let current = this.head;
        let position = 0;

        while (current !== null) {
            if (current.data === data) {
                return position;
            }
            current = current.next;
            position++;
        }
        return -1;
    }

    // Get node at index - O(n) but optimized by direction
    getNodeAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }

        let current;

        // Optimize: start from head or tail based on index
        if (index < this.size / 2) {
            current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
        } else {
            current = this.tail;
            for (let i = this.size - 1; i > index; i--) {
                current = current.prev;
            }
        }
        return current;
    }

    // Reverse the list - O(n)
    reverse() {
        let current = this.head;
        let temp = null;

        // Swap prev and next for all nodes
        while (current !== null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        // Swap head and tail
        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    // Print forward - O(n)
    printForward() {
        let current = this.head;
        let result = "NULL <-> ";
        while (current !== null) {
            result += current.data + " <-> ";
            current = current.next;
        }
        result += "NULL";
        console.log(result);
    }

    // Print backward - O(n)
    printBackward() {
        let current = this.tail;
        let result = "NULL <-> ";
        while (current !== null) {
            result += current.data + " <-> ";
            current = current.prev;
        }
        result += "NULL";
        console.log(result);
    }

    // Convert to array
    toArray() {
        const result = [];
        let current = this.head;
        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
}

// Usage example
const dll = new DoublyLinkedList();

dll.insertAtEnd(10);
dll.insertAtEnd(20);
dll.insertAtEnd(30);
dll.insertAtBeginning(5);
dll.printForward();  // NULL <-> 5 <-> 10 <-> 20 <-> 30 <-> NULL

dll.insertAt(15, 2);
dll.printForward();  // NULL <-> 5 <-> 10 <-> 15 <-> 20 <-> 30 <-> NULL

console.log("Size:", dll.getSize()); // 5
console.log("Search 15:", dll.search(15)); // 2

dll.printBackward(); // NULL <-> 30 <-> 20 <-> 15 <-> 10 <-> 5 <-> NULL

dll.deleteFromEnd();
dll.deleteFromBeginning();
dll.printForward();  // NULL <-> 10 <-> 15 <-> 20 <-> NULL

dll.reverse();
dll.printForward();  // NULL <-> 20 <-> 15 <-> 10 <-> NULL`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Singly LL</th>
            <th className="p-3 border">Doubly LL</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Insert at Beginning</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Insert at End</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)*</td>
          </tr>
          <tr>
            <td className="p-3 border">Delete from Beginning</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Delete from End</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)*</td>
          </tr>
          <tr>
            <td className="p-3 border">Delete Given Node</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Search</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Reverse Traversal</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm mt-2">* With tail pointer maintained</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Use Cases and Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Browser History:</strong> Forward and backward navigation</li>
      <li><strong>LRU Cache:</strong> Most recently used items tracking</li>
      <li><strong>Music Players:</strong> Previous and next song functionality</li>
      <li><strong>Undo/Redo:</strong> Text editors and design software</li>
      <li><strong>Deck of Cards:</strong> Card game implementations</li>
      <li><strong>Thread Scheduler:</strong> OS process management</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Extra memory for storing prev pointer</li>
      <li>More complex implementation than singly linked list</li>
      <li>More pointer updates during insertions/deletions</li>
    </ul>
  </div>
);

export default DoublyLinkedList;
