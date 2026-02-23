import React from 'react';

const SinglyLinkedList: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Singly Linked List
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Singly Linked List is a linear data structure where each element (node) contains a data field
      and a reference (pointer) to the next node in the sequence. Unlike arrays, linked list elements
      are not stored in contiguous memory locations. The list is traversed in only one direction,
      from the head to the last node.
    </p>

    <h2 className="text-2xl font-bold mt-6">Structure of a Node</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <div className="font-mono text-center">
        <p className="mb-2">Each node contains:</p>
        <div className="inline-flex border-2 border-gray-400">
          <div className="p-4 border-r-2 border-gray-400 bg-blue-100">Data</div>
          <div className="p-4 bg-green-100">Next Pointer</div>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Representation</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <div className="font-mono text-center overflow-x-auto">
        <p className="mb-4">Singly Linked List with 4 nodes:</p>
        <div className="inline-flex items-center space-x-2">
          <span className="text-blue-600 font-bold">HEAD</span>
          <span>-&gt;</span>
          <div className="border-2 p-2">[10|*]</div>
          <span>-&gt;</span>
          <div className="border-2 p-2">[20|*]</div>
          <span>-&gt;</span>
          <div className="border-2 p-2">[30|*]</div>
          <span>-&gt;</span>
          <div className="border-2 p-2">[40|NULL]</div>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Characteristics</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Dynamic Size:</strong> Can grow or shrink during runtime</li>
      <li><strong>Non-contiguous Memory:</strong> Nodes can be anywhere in memory</li>
      <li><strong>Sequential Access:</strong> Must traverse from head to reach any node</li>
      <li><strong>One-way Traversal:</strong> Can only move forward through the list</li>
      <li><strong>No Random Access:</strong> Cannot access elements by index directly</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Operations on Singly Linked List</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Insertion</h4>
        <ul className="list-disc list-inside mt-2">
          <li>At beginning: O(1) - Update head pointer</li>
          <li>At end: O(n) - Traverse to last node</li>
          <li>At position: O(n) - Traverse to position</li>
        </ul>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Deletion</h4>
        <ul className="list-disc list-inside mt-2">
          <li>From beginning: O(1) - Update head pointer</li>
          <li>From end: O(n) - Need to find second-to-last</li>
          <li>Specific node: O(n) - Find node first</li>
        </ul>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Search</h4>
        <p className="mt-2">O(n) - Linear search through nodes</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">JavaScript Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Singly Linked List class
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Check if list is empty
    isEmpty() {
        return this.head === null;
    }

    // Get the size of the list
    getSize() {
        return this.size;
    }

    // Insert at the beginning - O(1)
    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Insert at the end - O(n)
    insertAtEnd(data) {
        const newNode = new Node(data);

        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
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

        const newNode = new Node(data);
        let current = this.head;

        for (let i = 0; i < position - 1; i++) {
            current = current.next;
        }

        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }

    // Delete from beginning - O(1)
    deleteFromBeginning() {
        if (this.isEmpty()) {
            throw new Error("List is empty");
        }

        const data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
    }

    // Delete from end - O(n)
    deleteFromEnd() {
        if (this.isEmpty()) {
            throw new Error("List is empty");
        }

        if (this.head.next === null) {
            const data = this.head.data;
            this.head = null;
            this.size--;
            return data;
        }

        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }

        const data = current.next.data;
        current.next = null;
        this.size--;
        return data;
    }

    // Delete by value - O(n)
    deleteByValue(data) {
        if (this.isEmpty()) {
            return false;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let current = this.head;
        while (current.next !== null && current.next.data !== data) {
            current = current.next;
        }

        if (current.next === null) {
            return false; // Not found
        }

        current.next = current.next.next;
        this.size--;
        return true;
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
        return -1; // Not found
    }

    // Get element at index - O(n)
    getAt(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data;
    }

    // Reverse the list - O(n)
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    // Find middle element - O(n)
    findMiddle() {
        if (this.isEmpty()) return null;

        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data;
    }

    // Convert to array - O(n)
    toArray() {
        const result = [];
        let current = this.head;
        while (current !== null) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }

    // Print the list
    print() {
        let current = this.head;
        let result = "";
        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;
        }
        result += "NULL";
        console.log(result);
    }
}

// Usage example
const list = new SinglyLinkedList();

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtBeginning(5);
list.print(); // 5 -> 10 -> 20 -> 30 -> NULL

list.insertAt(15, 2);
list.print(); // 5 -> 10 -> 15 -> 20 -> 30 -> NULL

console.log("Size:", list.getSize()); // 5
console.log("Search 15:", list.search(15)); // 2
console.log("Middle:", list.findMiddle()); // 15

list.deleteByValue(15);
list.print(); // 5 -> 10 -> 20 -> 30 -> NULL

list.reverse();
list.print(); // 30 -> 20 -> 10 -> 5 -> NULL`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Time Complexity</th>
            <th className="p-3 border">Space Complexity</th>
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
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Insert at Position</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Delete from Beginning</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Delete from End</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Search</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Access by Index</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Reverse</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Dynamic size - no need to declare size beforehand</li>
      <li>Efficient insertion/deletion at beginning</li>
      <li>No memory wastage</li>
      <li>Easy implementation of stacks and queues</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>No random access - must traverse from beginning</li>
      <li>Extra memory for storing pointers</li>
      <li>Not cache-friendly due to non-contiguous memory</li>
      <li>Cannot traverse backwards</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Use Cases and Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Implementing Stacks:</strong> Using head as top of stack</li>
      <li><strong>Implementing Queues:</strong> With head and tail pointers</li>
      <li><strong>Undo Functionality:</strong> In text editors and applications</li>
      <li><strong>Hash Tables:</strong> Chaining for collision resolution</li>
      <li><strong>Polynomial Representation:</strong> Each term as a node</li>
      <li><strong>Music Playlists:</strong> Songs in sequence</li>
    </ul>
  </div>
);

export default SinglyLinkedList;
