import React from 'react';

const KLargestElements: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      K Largest Elements Problem
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Finding the K largest (or smallest) elements in an array is a classic problem that can be
      efficiently solved using heaps. This problem has numerous real-world applications like
      finding top K scores, most frequent items, or highest-rated products.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Statement</h2>
    <div className="bg-blue-50 p-4 rounded-lg">
      <p>Given an array of n elements, find the K largest elements.</p>
      <p className="mt-2"><strong>Example:</strong></p>
      <p>Input: arr = [3, 2, 1, 5, 6, 4], k = 2</p>
      <p>Output: [5, 6] (the two largest elements)</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 1: Sorting (Naive)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function kLargestSorting(arr, k) {
    // Sort in descending order
    arr.sort((a, b) => b - a);

    // Return first k elements
    return arr.slice(0, k);
}

// Time: O(n log n) for sorting
// Space: O(1) or O(n) depending on sort implementation

const arr = [3, 2, 1, 5, 6, 4];
console.log(kLargestSorting(arr, 2)); // [6, 5]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 2: Max Heap (Extract K times)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function kLargestMaxHeap(arr, k) {
    const result = [];

    // Build max heap from array
    buildMaxHeap(arr);

    // Extract max k times
    for (let i = 0; i < k; i++) {
        result.push(extractMax(arr));
    }

    return result;
}

function buildMaxHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyDown(arr, n, i);
    }
}

function extractMax(arr) {
    const max = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();
    heapifyDown(arr, arr.length, 0);
    return max;
}

function heapifyDown(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapifyDown(arr, n, largest);
    }
}

// Time: O(n + k log n) - Build heap O(n) + k extractions O(log n) each
// Space: O(1) in-place`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach 3: Min Heap of Size K (Optimal)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(i) {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] > this.heap[i]) {
                [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
                i = parent;
            } else break;
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyDown(i) {
        let smallest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== i) {
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            this.heapifyDown(smallest);
        }
    }

    peek() { return this.heap[0]; }
    size() { return this.heap.length; }
}

function kLargestMinHeap(arr, k) {
    const minHeap = new MinHeap();

    for (const num of arr) {
        if (minHeap.size() < k) {
            // Heap not full, add element
            minHeap.insert(num);
        } else if (num > minHeap.peek()) {
            // Current element is larger than smallest in heap
            minHeap.extractMin();
            minHeap.insert(num);
        }
        // If num <= minHeap.peek(), it can't be in top k
    }

    return minHeap.heap;
}

// Time: O(n log k) - n elements, each operation O(log k)
// Space: O(k) - heap stores only k elements

const arr = [3, 2, 1, 5, 6, 4];
console.log(kLargestMinHeap(arr, 2)); // [5, 6]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Why Min Heap of Size K?</h2>
    <div className="bg-yellow-50 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        <strong>Key Insight:</strong> The min heap of size k always contains the k largest elements
        seen so far. The root (minimum) is the kth largest element.
      </p>
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>If a new element is smaller than root, it cannot be in top k</li>
        <li>If a new element is larger than root, it replaces the smallest of top k</li>
        <li>This approach is optimal when k is small compared to n</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Comparison of Approaches</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Space</th>
            <th className="p-3 border">Best When</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Sorting</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(1) or O(n)</td>
            <td className="p-3 border">k is close to n</td>
          </tr>
          <tr>
            <td className="p-3 border">Max Heap</td>
            <td className="p-3 border">O(n + k log n)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">k is small, in-place needed</td>
          </tr>
          <tr>
            <td className="p-3 border">Min Heap (size k)</td>
            <td className="p-3 border">O(n log k)</td>
            <td className="p-3 border">O(k)</td>
            <td className="p-3 border">k much smaller than n</td>
          </tr>
          <tr>
            <td className="p-3 border">QuickSelect</td>
            <td className="p-3 border">O(n) average</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Only kth element needed</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">K Smallest Elements</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Use MAX heap of size k for k smallest elements
function kSmallestMaxHeap(arr, k) {
    const maxHeap = new MaxHeap(); // Implement similarly with max property

    for (const num of arr) {
        if (maxHeap.size() < k) {
            maxHeap.insert(num);
        } else if (num < maxHeap.peek()) {
            // Current element is smaller than largest in heap
            maxHeap.extractMax();
            maxHeap.insert(num);
        }
    }

    return maxHeap.heap;
}

// Time: O(n log k)
// Space: O(k)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Related Problems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Kth Largest Element:</strong> Return only the kth largest (root of min heap)</li>
      <li><strong>Top K Frequent Elements:</strong> Use heap with frequency as priority</li>
      <li><strong>K Closest Points to Origin:</strong> Use max heap with distance as priority</li>
      <li><strong>Merge K Sorted Arrays:</strong> Use min heap for efficient merging</li>
      <li><strong>Median in Stream:</strong> Use two heaps (max heap + min heap)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>For K largest: use min heap of size K</li>
      <li>For K smallest: use max heap of size K</li>
      <li>Min heap approach is O(n log k) - better when k is small</li>
      <li>The root of the heap is always the boundary element</li>
      <li>This pattern applies to many "top K" problems</li>
    </ul>
  </div>
);

export default KLargestElements;
