import React from 'react';

const BinarySearch: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Binary Search
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Binary Search is a searching algorithm that operates on a sorted array, repeatedly dividing it
      into halves to find a target value in logarithmic time O(log N).
    </p>

    <h2 className="text-2xl font-bold mt-6">Prerequisites</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>The data structure must be sorted</li>
      <li>Access to any element should take constant time</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Find the middle element of the search space</li>
      <li>Compare the middle element with the target</li>
      <li>If equal, return the index</li>
      <li>If target is smaller, search in the left half</li>
      <li>If target is larger, search in the right half</li>
      <li>Repeat until found or search space is exhausted</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Array: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]</p>
      <p>Target: 23</p>
      <p className="mt-2">Step 1: mid = 16, 23 {">"} 16, search right half</p>
      <p>Step 2: mid = 38, 23 {"<"} 38, search left half</p>
      <p>Step 3: mid = 23, found at index 5</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Iterative Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] === target) {
            return mid;  // Found
        } else if (arr[mid] < target) {
            low = mid + 1;  // Search right half
        } else {
            high = mid - 1;  // Search left half
        }
    }

    return -1;  // Not found
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recursive Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function binarySearchRecursive(arr, target, low, high) {
    if (low > high) {
        return -1;
    }

    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, high);
    } else {
        return binarySearchRecursive(arr, target, low, mid - 1);
    }
}`}</pre>
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
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Average Case</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst Case</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2"><strong>Space Complexity:</strong> O(1) iterative, O(log n) recursive</p>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Searching in sorted arrays</li>
      <li>Finding first/last occurrence of element</li>
      <li>Database indexing (B-trees)</li>
      <li>Git bisect for debugging</li>
      <li>Finding square root of a number</li>
      <li>Search in rotated sorted array</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Common Variations</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Lower Bound: First element ≥ target</li>
      <li>Upper Bound: First element {">"} target</li>
      <li>Search in Rotated Array</li>
      <li>Binary Search on Answer</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> Use <code>mid = low + (high - low) / 2</code> instead of <code>(low + high) / 2</code>
        to avoid integer overflow.
      </p>
    </div>
  </div>
);

export default BinarySearch;
