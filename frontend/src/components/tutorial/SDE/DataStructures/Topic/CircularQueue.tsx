import React from 'react';

const CircularQueue: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Circular Queue
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A circular queue is a linear data structure that follows the FIFO principle but connects the
      last position back to the first position to form a circle. This overcomes the limitation of
      wasted space in a simple queue implementation using arrays.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem with Simple Queue</h2>
    <div className="bg-gray-50 p-4 rounded-lg">
      <p className="leading-relaxed">
        In a simple array-based queue, after several enqueue and dequeue operations, the front
        pointer moves forward, leaving empty spaces at the beginning that cannot be reused.
        This leads to wasted memory even when the queue has capacity.
      </p>
    </div>

    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`
Simple Queue Problem:
After multiple dequeues:

       Front              Rear
         |                  |
         v                  v
+---+---+---+---+---+---+---+
|   |   |   | 4 | 5 | 6 |   |
+---+---+---+---+---+---+---+
  0   1   2   3   4   5   6

Positions 0, 1, 2 are wasted!
Cannot enqueue at position 6 (appears full)

Solution: Circular Queue wraps around!
`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">How Circular Queue Works</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`
Circular Queue Visualization:

        +---+
       /  0  \\
     +---+   +---+
     | 7 |   | 1 |
     +---+   +---+
    /           \\
  +---+       +---+
  | 6 |       | 2 |
  +---+       +---+
    \\           /
     +---+   +---+
     | 5 |   | 3 |
     +---+   +---+
       \\  4  /
        +---+

Linear Representation (size = 5):

Rear wraps to front when it reaches the end:

         Rear    Front
           |       |
           v       v
        +---+---+---+---+---+
        | 6 |   | 3 | 4 | 5 |
        +---+---+---+---+---+
          0   1   2   3   4

Next enqueue goes to position 1 (wraps around)
`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Operations</h2>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Enqueue:</strong> <code className="bg-gray-200 px-1 rounded">rear = (rear + 1) % capacity</code></li>
        <li><strong>Dequeue:</strong> <code className="bg-gray-200 px-1 rounded">front = (front + 1) % capacity</code></li>
        <li><strong>isFull:</strong> <code className="bg-gray-200 px-1 rounded">(rear + 1) % capacity === front</code></li>
        <li><strong>isEmpty:</strong> <code className="bg-gray-200 px-1 rounded">front === -1</code></li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation in JavaScript</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.front = -1;
        this.rear = -1;
        this.size = 0;
    }

    // Check if queue is full
    isFull() {
        return this.size === this.capacity;
    }

    // Check if queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Add element to rear
    enqueue(element) {
        if (this.isFull()) {
            throw new Error("Queue Overflow!");
        }

        // First element
        if (this.isEmpty()) {
            this.front = 0;
            this.rear = 0;
        } else {
            // Circular increment
            this.rear = (this.rear + 1) % this.capacity;
        }

        this.items[this.rear] = element;
        this.size++;
        console.log(\`Enqueued: \${element} at position \${this.rear}\`);
    }

    // Remove and return front element
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue Underflow!");
        }

        const element = this.items[this.front];
        this.items[this.front] = undefined;

        // Last element being removed
        if (this.size === 1) {
            this.front = -1;
            this.rear = -1;
        } else {
            // Circular increment
            this.front = (this.front + 1) % this.capacity;
        }

        this.size--;
        return element;
    }

    // Return front element without removing
    peek() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty!");
        }
        return this.items[this.front];
    }

    // Get current size
    getSize() {
        return this.size;
    }

    // Display queue
    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }

        let result = "Queue: ";
        let i = this.front;
        let count = 0;

        while (count < this.size) {
            result += this.items[i] + " ";
            i = (i + 1) % this.capacity;
            count++;
        }
        console.log(result);
        console.log(\`Front: \${this.front}, Rear: \${this.rear}, Size: \${this.size}\`);
    }
}

// Usage Example
const cq = new CircularQueue(5);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.display();           // Queue: 10 20 30

cq.dequeue();           // Removes 10
cq.dequeue();           // Removes 20
cq.display();           // Queue: 30

cq.enqueue(40);
cq.enqueue(50);
cq.enqueue(60);         // Wraps around to beginning
cq.enqueue(70);
cq.display();           // Queue: 30 40 50 60 70`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation in C++</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`#include <iostream>
using namespace std;

class CircularQueue {
private:
    int* arr;
    int capacity;
    int front;
    int rear;
    int size;

public:
    CircularQueue(int cap) {
        capacity = cap;
        arr = new int[capacity];
        front = -1;
        rear = -1;
        size = 0;
    }

    bool isFull() {
        return size == capacity;
    }

    bool isEmpty() {
        return size == 0;
    }

    void enqueue(int element) {
        if (isFull()) {
            cout << "Queue Overflow!" << endl;
            return;
        }

        if (isEmpty()) {
            front = 0;
            rear = 0;
        } else {
            rear = (rear + 1) % capacity;
        }

        arr[rear] = element;
        size++;
    }

    int dequeue() {
        if (isEmpty()) {
            cout << "Queue Underflow!" << endl;
            return -1;
        }

        int element = arr[front];

        if (size == 1) {
            front = -1;
            rear = -1;
        } else {
            front = (front + 1) % capacity;
        }

        size--;
        return element;
    }

    int peek() {
        if (isEmpty()) {
            cout << "Queue is empty!" << endl;
            return -1;
        }
        return arr[front];
    }

    ~CircularQueue() {
        delete[] arr;
    }
};`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation in Python</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class CircularQueue:
    def __init__(self, capacity):
        self.capacity = capacity
        self.items = [None] * capacity
        self.front = -1
        self.rear = -1
        self.size = 0

    def is_full(self):
        return self.size == self.capacity

    def is_empty(self):
        return self.size == 0

    def enqueue(self, element):
        if self.is_full():
            raise Exception("Queue Overflow!")

        if self.is_empty():
            self.front = 0
            self.rear = 0
        else:
            self.rear = (self.rear + 1) % self.capacity

        self.items[self.rear] = element
        self.size += 1

    def dequeue(self):
        if self.is_empty():
            raise Exception("Queue Underflow!")

        element = self.items[self.front]
        self.items[self.front] = None

        if self.size == 1:
            self.front = -1
            self.rear = -1
        else:
            self.front = (self.front + 1) % self.capacity

        self.size -= 1
        return element

    def peek(self):
        if self.is_empty():
            raise Exception("Queue is empty!")
        return self.items[self.front]

    def display(self):
        if self.is_empty():
            print("Queue is empty")
            return

        i = self.front
        result = []
        for _ in range(self.size):
            result.append(str(self.items[i]))
            i = (i + 1) % self.capacity
        print("Queue:", " -> ".join(result))

# Usage
cq = CircularQueue(5)
cq.enqueue(10)
cq.enqueue(20)
cq.enqueue(30)
cq.display()           # Queue: 10 -> 20 -> 30
print(cq.dequeue())    # 10
cq.enqueue(40)
cq.enqueue(50)
cq.enqueue(60)         # Wraps around
cq.display()           # Queue: 20 -> 30 -> 40 -> 50 -> 60`}</pre>
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
            <td className="p-3 border">Enqueue</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Dequeue</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Peek</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">isFull/isEmpty</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-gray-600 mt-2">
      Overall Space Complexity: O(n) for storing n elements.
    </p>

    <h2 className="text-2xl font-bold mt-6">Circular Queue vs Simple Queue</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Simple Queue</th>
            <th className="p-3 border">Circular Queue</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Memory Usage</td>
            <td className="p-3 border">Wastes space after dequeue</td>
            <td className="p-3 border">Reuses all space</td>
          </tr>
          <tr>
            <td className="p-3 border">Dequeue</td>
            <td className="p-3 border">O(n) with shift, or wastes space</td>
            <td className="p-3 border">O(1) always</td>
          </tr>
          <tr>
            <td className="p-3 border">Full Condition</td>
            <td className="p-3 border">rear == capacity - 1</td>
            <td className="p-3 border">(rear + 1) % capacity == front</td>
          </tr>
          <tr>
            <td className="p-3 border">Implementation</td>
            <td className="p-3 border">Simpler</td>
            <td className="p-3 border">Slightly more complex</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Efficient memory utilization - no wasted space</li>
      <li>O(1) time for all operations</li>
      <li>No need to shift elements during dequeue</li>
      <li>Fixed memory allocation</li>
      <li>Better cache performance than linked list</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Fixed capacity - cannot grow dynamically</li>
      <li>Slightly more complex implementation</li>
      <li>Must track size or use sentinel values</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>CPU scheduling (Round Robin algorithm)</li>
      <li>Memory management</li>
      <li>Traffic light systems</li>
      <li>Circular buffers in audio/video streaming</li>
      <li>Producer-consumer problem</li>
      <li>Keyboard buffer</li>
    </ul>
  </div>
);

export default CircularQueue;
