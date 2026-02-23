import React from 'react';

const PriorityQueueImpl: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Priority Queue Implementation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Priority Queue is an abstract data type where each element has a priority associated with it.
      Elements with higher priority are served before elements with lower priority. The most efficient
      implementation of a priority queue is using a binary heap.
    </p>

    <h2 className="text-2xl font-bold mt-6">Priority Queue Operations</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>insert(element, priority):</strong> Add element with given priority</li>
      <li><strong>extractMax/extractMin():</strong> Remove and return highest/lowest priority element</li>
      <li><strong>peek():</strong> Return highest/lowest priority element without removing</li>
      <li><strong>changePriority():</strong> Update priority of an element</li>
      <li><strong>isEmpty():</strong> Check if queue is empty</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Implementation Using Max Heap</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    // Helper methods
    parent(i) { return Math.floor((i - 1) / 2); }
    leftChild(i) { return 2 * i + 1; }
    rightChild(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Insert element with priority
    // Higher value = Higher priority
    enqueue(value, priority) {
        const element = { value, priority };
        this.heap.push(element);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        while (index > 0) {
            const parentIdx = this.parent(index);
            if (this.heap[parentIdx].priority < this.heap[index].priority) {
                this.swap(index, parentIdx);
                index = parentIdx;
            } else {
                break;
            }
        }
    }

    // Remove and return highest priority element
    dequeue() {
        if (this.isEmpty()) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return max;
    }

    heapifyDown(index) {
        let largest = index;
        const left = this.leftChild(index);
        const right = this.rightChild(index);

        if (left < this.heap.length &&
            this.heap[left].priority > this.heap[largest].priority) {
            largest = left;
        }

        if (right < this.heap.length &&
            this.heap[right].priority > this.heap[largest].priority) {
            largest = right;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }

    // Return highest priority element without removing
    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    size() {
        return this.heap.length;
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Min Priority Queue</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class MinPriorityQueue {
    constructor() {
        this.heap = [];
    }

    parent(i) { return Math.floor((i - 1) / 2); }
    leftChild(i) { return 2 * i + 1; }
    rightChild(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Insert with priority (lower = higher priority)
    enqueue(value, priority) {
        this.heap.push({ value, priority });
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        while (index > 0) {
            const parentIdx = this.parent(index);
            // Min heap: parent should be smaller
            if (this.heap[parentIdx].priority > this.heap[index].priority) {
                this.swap(index, parentIdx);
                index = parentIdx;
            } else {
                break;
            }
        }
    }

    dequeue() {
        if (this.isEmpty()) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyDown(index) {
        let smallest = index;
        const left = this.leftChild(index);
        const right = this.rightChild(index);

        if (left < this.heap.length &&
            this.heap[left].priority < this.heap[smallest].priority) {
            smallest = left;
        }

        if (right < this.heap.length &&
            this.heap[right].priority < this.heap[smallest].priority) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

    peek() { return this.isEmpty() ? null : this.heap[0]; }
    isEmpty() { return this.heap.length === 0; }
    size() { return this.heap.length; }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Usage Examples</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Task scheduling example
const taskQueue = new PriorityQueue();

taskQueue.enqueue("Low priority task", 1);
taskQueue.enqueue("High priority task", 10);
taskQueue.enqueue("Medium priority task", 5);
taskQueue.enqueue("Critical task", 100);

console.log(taskQueue.dequeue()); // { value: "Critical task", priority: 100 }
console.log(taskQueue.dequeue()); // { value: "High priority task", priority: 10 }
console.log(taskQueue.dequeue()); // { value: "Medium priority task", priority: 5 }

// Hospital emergency room (Min PQ - lower number = more urgent)
const emergencyRoom = new MinPriorityQueue();

emergencyRoom.enqueue("Heart Attack", 1);      // Most urgent
emergencyRoom.enqueue("Broken Arm", 3);
emergencyRoom.enqueue("Minor Cut", 5);
emergencyRoom.enqueue("Stroke", 1);            // Also most urgent

console.log(emergencyRoom.dequeue().value); // "Heart Attack"
console.log(emergencyRoom.dequeue().value); // "Stroke"`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Time Complexity</h2>
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
            <td className="p-3 border">enqueue()</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">Insert and heapify up</td>
          </tr>
          <tr>
            <td className="p-3 border">dequeue()</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">Remove root and heapify down</td>
          </tr>
          <tr>
            <td className="p-3 border">peek()</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Return root element</td>
          </tr>
          <tr>
            <td className="p-3 border">isEmpty()</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Check array length</td>
          </tr>
          <tr>
            <td className="p-3 border">size()</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Return array length</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Real-World Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Operating Systems:</strong> Process scheduling, CPU task management</li>
      <li><strong>Network Routing:</strong> Bandwidth management, packet scheduling</li>
      <li><strong>Graph Algorithms:</strong> Dijkstra's shortest path, Prim's MST</li>
      <li><strong>Event-Driven Simulation:</strong> Processing events by time</li>
      <li><strong>Huffman Coding:</strong> Data compression algorithms</li>
      <li><strong>Load Balancing:</strong> Distributing tasks to servers</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Priority Queue vs Regular Queue</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Regular Queue</th>
            <th className="p-3 border">Priority Queue</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Order</td>
            <td className="p-3 border">FIFO</td>
            <td className="p-3 border">By Priority</td>
          </tr>
          <tr>
            <td className="p-3 border">Insert</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Remove</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Implementation</td>
            <td className="p-3 border">Array/Linked List</td>
            <td className="p-3 border">Heap</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Priority queue is an ADT, heap is its efficient implementation</li>
      <li>Max heap for max priority queue, min heap for min priority queue</li>
      <li>Elements are processed by priority, not insertion order</li>
      <li>Heap-based implementation gives O(log n) insert/delete</li>
      <li>Essential for many graph and optimization algorithms</li>
    </ul>
  </div>
);

export default PriorityQueueImpl;
