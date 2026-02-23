import React from 'react';

const CircularLinkedList: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Circular Linked List
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Circular Linked List is a variation of a linked list where the last node points back to the
      first node instead of pointing to null. This creates a circular structure with no beginning or
      end. It can be implemented as either a singly circular linked list or a doubly circular linked list.
    </p>

    <h2 className="text-2xl font-bold mt-6">Types of Circular Linked Lists</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Singly Circular Linked List</h4>
        <p>Each node has one pointer to the next node, and the last node points to the first.</p>
        <div className="font-mono mt-2 text-center overflow-x-auto">
          <p>[10] -&gt; [20] -&gt; [30] -&gt; [40] ---+</p>
          <p className="ml-4">^__________________________|</p>
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Doubly Circular Linked List</h4>
        <p>Each node has two pointers (prev and next), forming a bidirectional circle.</p>
        <div className="font-mono mt-2 text-center overflow-x-auto">
          <p>+--&lt;- [10] &lt;-&gt; [20] &lt;-&gt; [30] -&gt;--+</p>
          <p>|_____________________________|</p>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Representation</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <div className="font-mono text-center">
        <p className="mb-4">Singly Circular Linked List:</p>
        <pre className="text-sm">
{`        +---------------------+
        |                     |
        v                     |
      [HEAD]                  |
        |                     |
        v                     |
       [10] -> [20] -> [30] --+`}
        </pre>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Characteristics</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>No NULL Termination:</strong> Last node points to first, not null</li>
      <li><strong>Any Node as Start:</strong> Can begin traversal from any node</li>
      <li><strong>Continuous Loop:</strong> Traversal can go on indefinitely</li>
      <li><strong>Efficient Circular Operations:</strong> Ideal for round-robin scheduling</li>
      <li><strong>Single Tail Pointer:</strong> Can access both ends with just tail reference</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Advantages over Linear Linked List</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Any node can be a starting point</li>
      <li>Useful for implementing queue (with tail pointer only)</li>
      <li>Naturally suited for circular processes</li>
      <li>Easy to traverse from end to beginning</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">JavaScript Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Node class for Circular Linked List
class CircularNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Singly Circular Linked List
class CircularLinkedList {
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
        const newNode = new CircularNode(data);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode; // Points to itself
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head; // Maintain circularity
        }
        this.size++;
    }

    // Insert at the end - O(1) with tail pointer
    insertAtEnd(data) {
        const newNode = new CircularNode(data);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = this.head;
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

        const newNode = new CircularNode(data);
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

        if (this.head === this.tail) {
            // Only one node
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.tail.next = this.head;
        }
        this.size--;
        return data;
    }

    // Delete from end - O(n)
    deleteFromEnd() {
        if (this.isEmpty()) {
            throw new Error("List is empty");
        }

        const data = this.tail.data;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }
            current.next = this.head;
            this.tail = current;
        }
        this.size--;
        return data;
    }

    // Delete by value - O(n)
    deleteByValue(data) {
        if (this.isEmpty()) {
            return false;
        }

        if (this.head.data === data) {
            this.deleteFromBeginning();
            return true;
        }

        let current = this.head;
        while (current.next !== this.head && current.next.data !== data) {
            current = current.next;
        }

        if (current.next === this.head) {
            return false; // Not found
        }

        if (current.next === this.tail) {
            this.tail = current;
        }
        current.next = current.next.next;
        this.size--;
        return true;
    }

    // Search for element - O(n)
    search(data) {
        if (this.isEmpty()) return -1;

        let current = this.head;
        let position = 0;

        do {
            if (current.data === data) {
                return position;
            }
            current = current.next;
            position++;
        } while (current !== this.head);

        return -1;
    }

    // Check if the list is circular
    isCircular() {
        if (this.isEmpty()) return true;

        let slow = this.head;
        let fast = this.head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                return true;
            }
        }
        return false;
    }

    // Split the list into two halves
    splitList() {
        if (this.isEmpty() || this.size < 2) {
            throw new Error("List must have at least 2 elements");
        }

        let slow = this.head;
        let fast = this.head;

        while (fast.next !== this.head && fast.next.next !== this.head) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // If even number of elements
        if (fast.next.next === this.head) {
            fast = fast.next;
        }

        // First half
        const head1 = this.head;
        // Second half
        const head2 = slow.next;

        // Make first half circular
        slow.next = head1;

        // Make second half circular
        fast.next = head2;

        return { first: head1, second: head2 };
    }

    // Print the list
    print() {
        if (this.isEmpty()) {
            console.log("Empty list");
            return;
        }

        let current = this.head;
        let result = "";

        do {
            result += current.data + " -> ";
            current = current.next;
        } while (current !== this.head);

        result += "(back to head)";
        console.log(result);
    }

    // Convert to array
    toArray() {
        if (this.isEmpty()) return [];

        const result = [];
        let current = this.head;

        do {
            result.push(current.data);
            current = current.next;
        } while (current !== this.head);

        return result;
    }
}

// Josephus Problem - Classic circular list application
function josephus(n, k) {
    const list = new CircularLinkedList();

    // Create circle of n people
    for (let i = 1; i <= n; i++) {
        list.insertAtEnd(i);
    }

    let current = list.head;
    let prev = list.tail;

    while (list.size > 1) {
        // Count k-1 steps
        for (let i = 1; i < k; i++) {
            prev = current;
            current = current.next;
        }

        // Remove current person
        prev.next = current.next;
        if (current === list.head) {
            list.head = current.next;
        }
        if (current === list.tail) {
            list.tail = prev;
        }
        list.size--;

        current = prev.next;
    }

    return list.head.data;
}

// Usage example
const cll = new CircularLinkedList();

cll.insertAtEnd(10);
cll.insertAtEnd(20);
cll.insertAtEnd(30);
cll.insertAtBeginning(5);
cll.print(); // 5 -> 10 -> 20 -> 30 -> (back to head)

cll.insertAt(15, 2);
cll.print(); // 5 -> 10 -> 15 -> 20 -> 30 -> (back to head)

console.log("Size:", cll.getSize()); // 5
console.log("Search 15:", cll.search(15)); // 2
console.log("Is Circular:", cll.isCircular()); // true

cll.deleteFromEnd();
cll.print(); // 5 -> 10 -> 15 -> 20 -> (back to head)

// Josephus Problem: 7 people, every 3rd eliminated
console.log("Josephus survivor:", josephus(7, 3)); // 4`}</pre>
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
            <td className="p-3 border">O(1)*</td>
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
            <td className="p-3 border">Traversal</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
        </tbody>
      </table>
      <p className="text-sm mt-2">* With tail pointer maintained</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Use Cases and Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Round Robin Scheduling:</strong> CPU scheduling in operating systems</li>
      <li><strong>Multiplayer Games:</strong> Turn-based game player rotation</li>
      <li><strong>Circular Buffers:</strong> Audio/video streaming buffers</li>
      <li><strong>Token Ring Networks:</strong> Network communication protocol</li>
      <li><strong>Music Playlist:</strong> Repeat/loop functionality</li>
      <li><strong>Josephus Problem:</strong> Classic elimination game algorithm</li>
      <li><strong>Traffic Signals:</strong> Cycling through signal phases</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Important Considerations</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Must be careful with traversal to avoid infinite loops</li>
      <li>Always check for circularity condition (current !== head)</li>
      <li>Maintaining tail pointer makes insertions at both ends O(1)</li>
      <li>Special handling needed for single-node lists</li>
    </ul>
  </div>
);

export default CircularLinkedList;
