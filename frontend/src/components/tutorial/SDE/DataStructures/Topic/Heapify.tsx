import React from 'react';

const Heapify: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Heapify Operation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Heapify is the process of creating a heap data structure from a binary tree or converting an
      array into a heap. It is a crucial operation that ensures the heap property is maintained
      throughout the data structure.
    </p>

    <h2 className="text-2xl font-bold mt-6">Types of Heapify</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Heapify Up (Sift Up / Bubble Up)</h4>
        <p>Used after insertion. Moves element up the tree to maintain heap property.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Heapify Down (Sift Down / Bubble Down)</h4>
        <p>Used after extraction. Moves element down the tree to maintain heap property.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">3. Build Heap</h4>
        <p>Converts an entire array into a valid heap in O(n) time.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Heapify Down (Max Heap)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function heapifyDown(arr, n, i) {
    let largest = i;           // Initialize largest as root
    const left = 2 * i + 1;    // Left child index
    const right = 2 * i + 2;   // Right child index

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        // Swap
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        // Recursively heapify the affected sub-tree
        heapifyDown(arr, n, largest);
    }
}

// Example usage:
// arr = [4, 10, 3, 5, 1]
// After heapifyDown(arr, 5, 0): [10, 5, 3, 4, 1]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Heapify Up (Max Heap)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function heapifyUp(arr, i) {
    // Find parent index
    const parent = Math.floor((i - 1) / 2);

    // If current node is greater than parent, swap
    if (i > 0 && arr[i] > arr[parent]) {
        // Swap
        [arr[i], arr[parent]] = [arr[parent], arr[i]];

        // Recursively heapify up
        heapifyUp(arr, parent);
    }
}

// Iterative version
function heapifyUpIterative(arr, i) {
    while (i > 0) {
        const parent = Math.floor((i - 1) / 2);

        if (arr[i] > arr[parent]) {
            [arr[i], arr[parent]] = [arr[parent], arr[i]];
            i = parent;
        } else {
            break;
        }
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Build Heap from Array</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function buildMaxHeap(arr) {
    const n = arr.length;

    // Start from last non-leaf node and heapify all
    // Last non-leaf node is at index (n/2 - 1)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyDown(arr, n, i);
    }

    return arr;
}

// Why start from n/2 - 1?
// - Leaf nodes are from index n/2 to n-1
// - They already satisfy heap property (no children)
// - We only need to heapify non-leaf nodes

// Example:
const arr = [4, 10, 3, 5, 1];
buildMaxHeap(arr);
console.log(arr); // [10, 5, 3, 4, 1]

/*
Original array as tree:
       4
      / \\
     10   3
    / \\
   5   1

After buildMaxHeap:
       10
      / \\
     5   3
    / \\
   4   1
*/`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Min Heap Heapify</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function heapifyDownMin(arr, n, i) {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // Find smallest among root, left child, right child
    if (left < n && arr[left] < arr[smallest]) {
        smallest = left;
    }

    if (right < n && arr[right] < arr[smallest]) {
        smallest = right;
    }

    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        heapifyDownMin(arr, n, smallest);
    }
}

function buildMinHeap(arr) {
    const n = arr.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyDownMin(arr, n, i);
    }

    return arr;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Time Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Explanation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Heapify Up</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">Traverses at most height of tree</td>
          </tr>
          <tr>
            <td className="p-3 border">Heapify Down</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">Traverses at most height of tree</td>
          </tr>
          <tr>
            <td className="p-3 border">Build Heap</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Not O(n log n) - see below</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Why Build Heap is O(n)?</h2>
    <div className="bg-blue-50 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        It might seem like build heap should be O(n log n) since we call heapify O(n/2) times
        and each heapify takes O(log n). However, the actual complexity is O(n) because:
      </p>
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>Nodes at the bottom levels have less work to do (shorter heapify paths)</li>
        <li>Most nodes are at lower levels of the tree</li>
        <li>Mathematical analysis shows the sum converges to O(n)</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visualization of Build Heap</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`Input Array: [3, 9, 2, 1, 4, 5]

Step 1: Start from index (6/2 - 1) = 2
Index 2 (value 2): Check children [5]
  5 > 2, swap -> [3, 9, 5, 1, 4, 2]
        3
       / \\
      9   5
     / \\ /
    1  4 2

Step 2: Index 1 (value 9)
  Children: [1, 4], 9 > both, no swap needed
        3
       / \\
      9   5
     / \\ /
    1  4 2

Step 3: Index 0 (value 3)
  Children: [9, 5], 9 > 3, swap
  -> [9, 3, 5, 1, 4, 2]
  Continue: 3's children [1, 4], 4 > 3, swap
  -> [9, 4, 5, 1, 3, 2]

Final Max Heap: [9, 4, 5, 1, 3, 2]
        9
       / \\
      4   5
     / \\ /
    1  3 2`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Heapify maintains the heap property in a subtree</li>
      <li>Build heap processes nodes from bottom to top</li>
      <li>Starting from n/2 - 1 skips leaf nodes (optimization)</li>
      <li>Each heapify call handles one subtree</li>
      <li>Build heap is more efficient than n insertions</li>
    </ul>
  </div>
);

export default Heapify;
