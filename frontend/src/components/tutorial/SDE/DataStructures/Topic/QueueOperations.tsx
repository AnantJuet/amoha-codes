import React from 'react';

const QueueOperations: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Queue Operations
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A queue supports several fundamental operations that allow us to add, remove, and inspect elements.
      All these operations follow the FIFO (First In First Out) principle - elements are added at
      the rear and removed from the front.
    </p>

    <h2 className="text-2xl font-bold mt-6">1. Enqueue Operation</h2>
    <p className="leading-relaxed">
      The <strong>enqueue</strong> operation adds an element to the rear (back) of the queue.
      If the queue is full (in fixed-size implementation), it results in a queue overflow.
    </p>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Enqueue Algorithm:</h4>
      <ol className="list-decimal list-inside space-y-1">
        <li>Check if the queue is full (overflow condition)</li>
        <li>If not full, increment the rear pointer</li>
        <li>Add the element at the rear position</li>
        <li>If first element, update front pointer</li>
      </ol>
    </div>

    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Enqueue operation
function enqueue(queue, element) {
    if (isFull(queue)) {
        console.log("Queue Overflow!");
        return;
    }
    queue.rear++;
    queue.items[queue.rear] = element;
    if (queue.front === -1) {
        queue.front = 0;  // First element
    }
    console.log(\`Enqueued: \${element}\`);
}

// JavaScript using array
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }
}`}</pre>
    </div>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Enqueue Visualization:</h4>
      <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">{`
Before Enqueue(4):
Front                    Rear
  |                        |
  v                        v
+---+---+---+---+---+---+---+
| 1 | 2 | 3 |   |   |   |   |
+---+---+---+---+---+---+---+
  0   1   2   3   4   5   6

After Enqueue(4):
Front                        Rear
  |                            |
  v                            v
+---+---+---+---+---+---+---+
| 1 | 2 | 3 | 4 |   |   |   |
+---+---+---+---+---+---+---+
  0   1   2   3   4   5   6
`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">2. Dequeue Operation</h2>
    <p className="leading-relaxed">
      The <strong>dequeue</strong> operation removes and returns the element from the front of the queue.
      If the queue is empty, it results in a queue underflow.
    </p>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Dequeue Algorithm:</h4>
      <ol className="list-decimal list-inside space-y-1">
        <li>Check if the queue is empty (underflow condition)</li>
        <li>If not empty, store the front element</li>
        <li>Increment the front pointer (or shift elements in simple array)</li>
        <li>If queue becomes empty, reset front and rear</li>
        <li>Return the stored element</li>
      </ol>
    </div>

    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Dequeue operation
function dequeue(queue) {
    if (isEmpty(queue)) {
        console.log("Queue Underflow!");
        return null;
    }
    const element = queue.items[queue.front];
    queue.front++;

    // Reset if queue becomes empty
    if (queue.front > queue.rear) {
        queue.front = -1;
        queue.rear = -1;
    }
    return element;
}

// JavaScript using array
class Queue {
    constructor() {
        this.items = [];
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();  // Remove from front
    }

    isEmpty() {
        return this.items.length === 0;
    }
}`}</pre>
    </div>

    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold mb-2">Dequeue Visualization:</h4>
      <pre className="text-sm bg-gray-800 text-green-400 p-4 rounded overflow-x-auto">{`
Before Dequeue():
Front                        Rear
  |                            |
  v                            v
+---+---+---+---+---+---+---+
| 1 | 2 | 3 | 4 |   |   |   |
+---+---+---+---+---+---+---+
  0   1   2   3   4   5   6

After Dequeue():  (returns 1)
    Front                    Rear
      |                        |
      v                        v
+---+---+---+---+---+---+---+
|   | 2 | 3 | 4 |   |   |   |
+---+---+---+---+---+---+---+
  0   1   2   3   4   5   6
`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">3. Front (Peek) Operation</h2>
    <p className="leading-relaxed">
      The <strong>front</strong> or <strong>peek</strong> operation returns the front element
      without removing it. This is useful to see what will be dequeued next.
    </p>

    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Front/Peek operation
function front(queue) {
    if (isEmpty(queue)) {
        console.log("Queue is empty!");
        return null;
    }
    return queue.items[queue.front];
}

// JavaScript using array
class Queue {
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">4. Rear Operation</h2>
    <p className="leading-relaxed">
      Returns the element at the rear of the queue without removing it.
    </p>

    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Rear operation
function rear(queue) {
    if (isEmpty(queue)) {
        console.log("Queue is empty!");
        return null;
    }
    return queue.items[queue.rear];
}

// JavaScript using array
class Queue {
    rear() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[this.items.length - 1];
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">5. isEmpty Operation</h2>
    <p className="leading-relaxed">
      Checks whether the queue contains any elements. Returns true if queue is empty, false otherwise.
    </p>

    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// isEmpty operation
function isEmpty(queue) {
    return queue.front === -1;
}

// JavaScript using array
class Queue {
    isEmpty() {
        return this.items.length === 0;
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">6. Size Operation</h2>
    <p className="leading-relaxed">
      Returns the number of elements currently in the queue.
    </p>

    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Size operation
function size(queue) {
    if (isEmpty(queue)) return 0;
    return queue.rear - queue.front + 1;
}

// JavaScript using array
class Queue {
    size() {
        return this.items.length;
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complete Queue Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class Queue {
    constructor() {
        this.items = [];
    }

    // Add element to rear
    enqueue(element) {
        this.items.push(element);
    }

    // Remove and return front element
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue Underflow");
        }
        return this.items.shift();
    }

    // Return front element without removing
    front() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items[0];
    }

    // Return rear element without removing
    rear() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items[this.items.length - 1];
    }

    // Check if queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get number of elements
    size() {
        return this.items.length;
    }

    // Clear the queue
    clear() {
        this.items = [];
    }

    // Print queue elements
    print() {
        console.log("Front -> " + this.items.join(" -> ") + " <- Rear");
    }
}

// Usage Example
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();             // Front -> 10 -> 20 -> 30 <- Rear
console.log(queue.front()); // Output: 10
console.log(queue.rear());  // Output: 30
console.log(queue.dequeue()); // Output: 10
queue.print();             // Front -> 20 -> 30 <- Rear
console.log(queue.size()); // Output: 2`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Queue Using Linked List</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class QueueLinkedList {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue Underflow");
        }
        const data = this.front.data;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;  // Queue is now empty
        }
        this.length--;
        return data;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.front.data;
    }

    isEmpty() {
        return this.front === null;
    }

    size() {
        return this.length;
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Time Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Array (shift)</th>
            <th className="p-3 border">Circular Array</th>
            <th className="p-3 border">Linked List</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Enqueue</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Dequeue</td>
            <td className="p-3 border">O(n)*</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Front</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">isEmpty</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Size</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-gray-600 mt-2">
      * Array shift() is O(n) because all elements must be moved. Use circular array or linked list for O(1) dequeue.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Enqueue adds to rear, Dequeue removes from front</li>
      <li>Always check for underflow before dequeue/front</li>
      <li>Always check for overflow before enqueue (for fixed-size queues)</li>
      <li>Use circular array or linked list for O(1) operations</li>
      <li>Queue follows FIFO principle strictly</li>
      <li>Both front and rear pointers need to be managed</li>
    </ul>
  </div>
);

export default QueueOperations;
