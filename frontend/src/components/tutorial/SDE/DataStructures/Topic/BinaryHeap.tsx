import React from 'react';

const BinaryHeap: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Binary Heap
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Binary Heap is a complete binary tree that maintains the heap property. It is the most
      common implementation of a heap and forms the basis for priority queues and heap sort.
      Binary heaps can be efficiently represented using arrays.
    </p>

    <h2 className="text-2xl font-bold mt-6">Structure of Binary Heap</h2>
    <p className="leading-relaxed">
      A binary heap satisfies two properties:
    </p>
    <ul className="list-disc list-inside space-y-2 mt-2">
      <li><strong>Shape Property:</strong> It is a complete binary tree</li>
      <li><strong>Heap Property:</strong> Parent is greater (max-heap) or smaller (min-heap) than children</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Min Heap Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Get parent index
    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    // Get left child index
    leftChild(i) {
        return 2 * i + 1;
    }

    // Get right child index
    rightChild(i) {
        return 2 * i + 2;
    }

    // Swap two elements
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Get minimum element (root)
    getMin() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }

    // Insert a new element
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    // Heapify up - restore heap property after insertion
    heapifyUp(index) {
        while (index > 0 && this.heap[this.parent(index)] > this.heap[index]) {
            this.swap(index, this.parent(index));
            index = this.parent(index);
        }
    }

    // Extract minimum element
    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    // Heapify down - restore heap property after extraction
    heapifyDown(index) {
        let smallest = index;
        const left = this.leftChild(index);
        const right = this.rightChild(index);

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

    // Get size of heap
    size() {
        return this.heap.length;
    }

    // Check if heap is empty
    isEmpty() {
        return this.heap.length === 0;
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Max Heap Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class MaxHeap {
    constructor() {
        this.heap = [];
    }

    parent(i) { return Math.floor((i - 1) / 2); }
    leftChild(i) { return 2 * i + 1; }
    rightChild(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    getMax() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        // For max heap: parent should be GREATER than child
        while (index > 0 && this.heap[this.parent(index)] < this.heap[index]) {
            this.swap(index, this.parent(index));
            index = this.parent(index);
        }
    }

    extractMax() {
        if (this.heap.length === 0) return null;
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

        // For max heap: find largest among parent and children
        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }
        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
        }
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Usage Example</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Min Heap Example
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(2);

console.log(minHeap.getMin());     // Output: 2
console.log(minHeap.extractMin()); // Output: 2
console.log(minHeap.getMin());     // Output: 5

// Max Heap Example
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(20);
maxHeap.insert(2);

console.log(maxHeap.getMax());     // Output: 20
console.log(maxHeap.extractMax()); // Output: 20
console.log(maxHeap.getMax());     // Output: 10`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Time Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Time Complexity</th>
            <th className="p-3 border">Explanation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">insert()</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">May need to bubble up to root</td>
          </tr>
          <tr>
            <td className="p-3 border">extractMin/Max()</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">May need to bubble down to leaf</td>
          </tr>
          <tr>
            <td className="p-3 border">getMin/Max()</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Direct access to root</td>
          </tr>
          <tr>
            <td className="p-3 border">heapifyUp()</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">At most height comparisons</td>
          </tr>
          <tr>
            <td className="p-3 border">heapifyDown()</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">At most height comparisons</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Space Complexity</h2>
    <p className="leading-relaxed">
      O(n) where n is the number of elements in the heap. The array representation is space-efficient
      as it does not require additional pointers like tree-based implementations.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Binary heap is always a complete binary tree</li>
      <li>Array representation uses indices for navigation</li>
      <li>Insert adds at end and bubbles up</li>
      <li>Extract removes root, replaces with last, and bubbles down</li>
      <li>Min heap has smallest at root, max heap has largest</li>
    </ul>
  </div>
);

export default BinaryHeap;
