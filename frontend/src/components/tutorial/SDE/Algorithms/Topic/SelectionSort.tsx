import React from 'react';

const SelectionSort: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Selection Sort
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Selection Sort is a comparison-based sorting algorithm that sorts by repeatedly finding the minimum
      element from the unsorted portion and placing it at the beginning of the sorted portion.
    </p>

    <h2 className="text-2xl font-bold mt-6">How It Works</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Find the minimum element in the unsorted portion</li>
      <li>Swap it with the first element of unsorted portion</li>
      <li>Move the boundary of sorted portion one position right</li>
      <li>Repeat until entire array is sorted</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Array: [64, 25, 12, 22, 11]</p>
      <div className="mt-2 space-y-1 text-sm">
        <p><strong>Pass 1:</strong> Find min (11), swap with 64 → [<span className="text-green-600">11</span>, 25, 12, 22, 64]</p>
        <p><strong>Pass 2:</strong> Find min (12), swap with 25 → [11, <span className="text-green-600">12</span>, 25, 22, 64]</p>
        <p><strong>Pass 3:</strong> Find min (22), swap with 25 → [11, 12, <span className="text-green-600">22</span>, 25, 64]</p>
        <p><strong>Pass 4:</strong> Find min (25), already in place → [11, 12, 22, <span className="text-green-600">25</span>, 64]</p>
        <p className="text-blue-600 mt-2"><strong>Sorted:</strong> [11, 12, 22, 25, 64]</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Find minimum element in unsorted portion
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }

        // Swap minimum with first unsorted element
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }

    return arr;
}

// Example
const arr = [64, 25, 12, 22, 11];
console.log("Sorted:", selectionSort(arr));
// Output: [11, 12, 22, 25, 64]`}</pre>
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
            <td className="p-3 border">O(n²)</td>
          </tr>
          <tr>
            <td className="p-3 border">Average Case</td>
            <td className="p-3 border">O(n²)</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst Case</td>
            <td className="p-3 border">O(n²)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2"><strong>Space Complexity:</strong> O(1) - In-place sorting</p>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Simple to understand and implement</li>
      <li>Requires only O(1) extra memory space</li>
      <li>Performs minimum number of swaps (at most n-1)</li>
      <li>Good when memory writes are expensive</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>O(n²) time complexity in all cases</li>
      <li>Not stable (may change order of equal elements)</li>
      <li>Slower than other O(n²) algorithms for most inputs</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>When to Use:</strong> Selection Sort is useful when memory writes are costly (like flash memory)
        since it makes the minimum number of swaps compared to other simple sorting algorithms.
      </p>
    </div>
  </div>
);

export default SelectionSort;
