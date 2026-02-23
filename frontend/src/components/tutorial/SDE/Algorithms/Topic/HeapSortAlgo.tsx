import React from 'react';

const HeapSortAlgo: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Heap Sort
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Heap Sort is a comparison-based sorting algorithm that uses a Binary Heap data structure.
      It first builds a max heap from the input, then repeatedly extracts the maximum element
      and rebuilds the heap.
    </p>

    <h2 className="text-2xl font-bold mt-6">Binary Heap Basics</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p><strong>Max Heap:</strong> Parent is always greater than or equal to children</p>
      <p><strong>Array Representation:</strong></p>
      <ul className="list-disc list-inside text-sm mt-2">
        <li>Parent of i: Math.floor((i-1)/2)</li>
        <li>Left child of i: 2*i + 1</li>
        <li>Right child of i: 2*i + 2</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li><strong>Build Max Heap:</strong> Convert array into a max heap</li>
      <li><strong>Extract Max:</strong> Swap root (max) with last element</li>
      <li><strong>Heapify:</strong> Restore heap property for reduced heap</li>
      <li>Repeat steps 2-3 until heap size is 1</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function heapSort(arr) {
    const n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements one by one
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];  // Swap
        heapify(arr, i, 0);  // Heapify reduced heap
    }

    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Example
const arr = [12, 11, 13, 5, 6, 7];
console.log("Sorted:", heapSort(arr));
// Output: [5, 6, 7, 11, 12, 13]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Case</th>
            <th className="p-3 border">Time Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Best Case</td>
            <td className="p-3 border">O(n log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Average Case</td>
            <td className="p-3 border">O(n log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst Case</td>
            <td className="p-3 border">O(n log n)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2"><strong>Space Complexity:</strong> O(1) - In-place sorting (O(log n) if counting recursion stack)</p>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Guaranteed O(n log n) time in all cases</li>
      <li>In-place algorithm (O(1) extra space)</li>
      <li>No worst case like Quick Sort</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Not stable (may change order of equal elements)</li>
      <li>Poor cache performance compared to Quick Sort</li>
      <li>Typically 2-3x slower than well-implemented Quick Sort</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Use Case:</strong> Heap Sort is useful when guaranteed O(n log n) worst-case time is
        required and stability is not needed. It's also the basis for the Priority Queue data structure.
      </p>
    </div>
  </div>
);

export default HeapSortAlgo;
