import React from 'react';

const Deque: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Double-Ended Queue (Deque)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Double-Ended Queue, or <strong>Deque</strong> (pronounced "deck"), is a generalized version
      of a queue that allows insertion and deletion at both ends - front and rear. It combines the
      features of both stacks and queues, making it highly versatile.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Characteristics</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Insert at both ends:</strong> Add elements at front or rear</li>
      <li><strong>Delete from both ends:</strong> Remove elements from front or rear</li>
      <li><strong>Flexible:</strong> Can function as both stack and queue</li>
      <li><strong>No strict FIFO or LIFO:</strong> Depends on which operations you use</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Visual Representation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`
         insertFront()                    insertRear()
              |                                |
              v                                v
        +-----+-----+-----+-----+-----+-----+-----+
        |     |  1  |  2  |  3  |  4  |  5  |     |
        +-----+-----+-----+-----+-----+-----+-----+
              ^                                ^
              |                                |
         deleteFront()                    deleteRear()

Operations:
- insertFront(0): Add 0 at front
- insertRear(6):  Add 6 at rear
- deleteFront():  Remove from front (returns 1)
- deleteRear():   Remove from rear (returns 5)
`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Types of Deque</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Input-Restricted Deque</h4>
        <p>Insertion only at one end (rear), but deletion from both ends.</p>
        <p className="text-sm text-gray-600">Can act as a queue or stack.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Output-Restricted Deque</h4>
        <p>Deletion only from one end (front), but insertion at both ends.</p>
        <p className="text-sm text-gray-600">Can insert with priority at front.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">3. General Deque</h4>
        <p>Both insertion and deletion at both ends.</p>
        <p className="text-sm text-gray-600">Most flexible type.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Basic Operations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">insertFront()</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Add element at front</td>
          </tr>
          <tr>
            <td className="p-3 border">insertRear()</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Add element at rear</td>
          </tr>
          <tr>
            <td className="p-3 border">deleteFront()</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Remove element from front</td>
          </tr>
          <tr>
            <td className="p-3 border">deleteRear()</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Remove element from rear</td>
          </tr>
          <tr>
            <td className="p-3 border">getFront()</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">View front element</td>
          </tr>
          <tr>
            <td className="p-3 border">getRear()</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">View rear element</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation in JavaScript</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class Deque {
    constructor() {
        this.items = [];
    }

    // Add element at front
    insertFront(element) {
        this.items.unshift(element);
    }

    // Add element at rear
    insertRear(element) {
        this.items.push(element);
    }

    // Remove and return front element
    deleteFront() {
        if (this.isEmpty()) {
            throw new Error("Deque Underflow!");
        }
        return this.items.shift();
    }

    // Remove and return rear element
    deleteRear() {
        if (this.isEmpty()) {
            throw new Error("Deque Underflow!");
        }
        return this.items.pop();
    }

    // Get front element without removing
    getFront() {
        if (this.isEmpty()) {
            throw new Error("Deque is empty!");
        }
        return this.items[0];
    }

    // Get rear element without removing
    getRear() {
        if (this.isEmpty()) {
            throw new Error("Deque is empty!");
        }
        return this.items[this.items.length - 1];
    }

    // Check if deque is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get size
    size() {
        return this.items.length;
    }

    // Clear deque
    clear() {
        this.items = [];
    }

    // Print deque
    print() {
        console.log("Front [" + this.items.join(" | ") + "] Rear");
    }
}

// Usage Example
const deque = new Deque();
deque.insertRear(10);
deque.insertRear(20);
deque.insertFront(5);
deque.insertFront(1);
deque.print();              // Front [1 | 5 | 10 | 20] Rear

console.log(deque.getFront());  // 1
console.log(deque.getRear());   // 20

deque.deleteFront();        // Removes 1
deque.deleteRear();         // Removes 20
deque.print();              // Front [5 | 10] Rear`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Circular Array Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class CircularDeque {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.front = -1;
        this.rear = -1;
        this.size = 0;
    }

    isFull() {
        return this.size === this.capacity;
    }

    isEmpty() {
        return this.size === 0;
    }

    insertFront(element) {
        if (this.isFull()) {
            throw new Error("Deque Overflow!");
        }

        if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
        } else {
            // Move front backwards (circular)
            this.front = (this.front - 1 + this.capacity) % this.capacity;
        }

        this.items[this.front] = element;
        this.size++;
    }

    insertRear(element) {
        if (this.isFull()) {
            throw new Error("Deque Overflow!");
        }

        if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
        } else {
            // Move rear forward (circular)
            this.rear = (this.rear + 1) % this.capacity;
        }

        this.items[this.rear] = element;
        this.size++;
    }

    deleteFront() {
        if (this.isEmpty()) {
            throw new Error("Deque Underflow!");
        }

        const element = this.items[this.front];

        if (this.size === 1) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.capacity;
        }

        this.size--;
        return element;
    }

    deleteRear() {
        if (this.isEmpty()) {
            throw new Error("Deque Underflow!");
        }

        const element = this.items[this.rear];

        if (this.size === 1) {
            this.front = -1;
            this.rear = -1;
        } else {
            this.rear = (this.rear - 1 + this.capacity) % this.capacity;
        }

        this.size--;
        return element;
    }

    getFront() {
        if (this.isEmpty()) {
            throw new Error("Deque is empty!");
        }
        return this.items[this.front];
    }

    getRear() {
        if (this.isEmpty()) {
            throw new Error("Deque is empty!");
        }
        return this.items[this.rear];
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation in Python</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`from collections import deque

# Using Python's built-in deque
d = deque()

# Add elements
d.append(10)          # Add to right (rear)
d.appendleft(5)       # Add to left (front)
d.append(20)          # Add to right

print(d)              # deque([5, 10, 20])

# Remove elements
d.pop()               # Remove from right (returns 20)
d.popleft()           # Remove from left (returns 5)

print(d)              # deque([10])

# Custom implementation
class Deque:
    def __init__(self):
        self.items = []

    def insert_front(self, element):
        self.items.insert(0, element)

    def insert_rear(self, element):
        self.items.append(element)

    def delete_front(self):
        if self.is_empty():
            raise Exception("Deque Underflow!")
        return self.items.pop(0)

    def delete_rear(self):
        if self.is_empty():
            raise Exception("Deque Underflow!")
        return self.items.pop()

    def get_front(self):
        if self.is_empty():
            raise Exception("Deque is empty!")
        return self.items[0]

    def get_rear(self):
        if self.is_empty():
            raise Exception("Deque is empty!")
        return self.items[-1]

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Using Doubly Linked List</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DequeLinkedList {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    insertFront(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            newNode.next = this.front;
            this.front.prev = newNode;
            this.front = newNode;
        }
        this.size++;
    }

    insertRear(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            newNode.prev = this.rear;
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    deleteFront() {
        if (this.isEmpty()) {
            throw new Error("Deque Underflow!");
        }
        const data = this.front.data;
        this.front = this.front.next;
        if (this.front) {
            this.front.prev = null;
        } else {
            this.rear = null;
        }
        this.size--;
        return data;
    }

    deleteRear() {
        if (this.isEmpty()) {
            throw new Error("Deque Underflow!");
        }
        const data = this.rear.data;
        this.rear = this.rear.prev;
        if (this.rear) {
            this.rear.next = null;
        } else {
            this.front = null;
        }
        this.size--;
        return data;
    }

    isEmpty() {
        return this.size === 0;
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Deque as Stack and Queue</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Using Deque as Stack (LIFO):</h4>
      <ul className="list-disc list-inside space-y-1">
        <li>Push: insertRear() or insertFront()</li>
        <li>Pop: deleteRear() or deleteFront() (same end as push)</li>
      </ul>
    </div>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Using Deque as Queue (FIFO):</h4>
      <ul className="list-disc list-inside space-y-1">
        <li>Enqueue: insertRear()</li>
        <li>Dequeue: deleteFront()</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Implementation</th>
            <th className="p-3 border">insertFront</th>
            <th className="p-3 border">insertRear</th>
            <th className="p-3 border">deleteFront</th>
            <th className="p-3 border">deleteRear</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Array (with shift)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Circular Array</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Doubly Linked List</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Undo-Redo:</strong> Store history of operations</li>
      <li><strong>Browser History:</strong> Navigate forward and backward</li>
      <li><strong>A-Steal Job Scheduling:</strong> Work stealing in parallel computing</li>
      <li><strong>Sliding Window Maximum:</strong> Efficient algorithm using deque</li>
      <li><strong>Palindrome Checking:</strong> Compare front and rear elements</li>
      <li><strong>Multi-processor scheduling:</strong> Task distribution</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Deque is more flexible than stack or queue</li>
      <li>Can be used to implement both stack and queue</li>
      <li>Circular array or doubly linked list gives O(1) for all operations</li>
      <li>Python's collections.deque is highly optimized</li>
      <li>Useful for problems requiring access to both ends</li>
    </ul>
  </div>
);

export default Deque;
