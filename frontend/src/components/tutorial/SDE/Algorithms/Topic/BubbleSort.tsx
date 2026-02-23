import React from 'react';

const BubbleSort: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Bubble Sort
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping adjacent elements
      if they are in the wrong order. This process continues until no swaps are needed, indicating the
      array is sorted.
    </p>

    <h2 className="text-2xl font-bold mt-6">How It Works</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Compare adjacent elements in the array</li>
      <li>If the current element is greater than the next, swap them</li>
      <li>Move to the next pair and repeat</li>
      <li>After first pass, the largest element "bubbles up" to the end</li>
      <li>Repeat for remaining unsorted portion</li>
      <li>Continue until no swaps are needed</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Array: [64, 34, 25, 12, 22]</p>
      <div className="mt-2 space-y-1">
        <p><strong>Pass 1:</strong></p>
        <p>[<span className="text-red-600">64, 34</span>, 25, 12, 22] → [<span className="text-green-600">34, 64</span>, 25, 12, 22] (swap)</p>
        <p>[34, <span className="text-red-600">64, 25</span>, 12, 22] → [34, <span className="text-green-600">25, 64</span>, 12, 22] (swap)</p>
        <p>[34, 25, <span className="text-red-600">64, 12</span>, 22] → [34, 25, <span className="text-green-600">12, 64</span>, 22] (swap)</p>
        <p>[34, 25, 12, <span className="text-red-600">64, 22</span>] → [34, 25, 12, <span className="text-green-600">22, 64</span>] (swap)</p>
        <p className="text-blue-600">After Pass 1: [34, 25, 12, 22, <strong>64</strong>] - 64 is in place</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        // Last i elements are already in place
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no swapping occurred, array is sorted
        if (!swapped) break;
    }

    return arr;
}

// Example
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(arr));
// Output: [11, 12, 22, 25, 34, 64, 90]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Optimized Version</h2>
    <p className="leading-relaxed">
      The optimization above uses a <code>swapped</code> flag. If no swaps occur during a pass, the array
      is already sorted and we can exit early. This improves best-case time complexity to O(n).
    </p>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Case</th>
            <th className="p-3 border">Time Complexity</th>
            <th className="p-3 border">When</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Best Case</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Array is already sorted (with optimization)</td>
          </tr>
          <tr>
            <td className="p-3 border">Average Case</td>
            <td className="p-3 border">O(n²)</td>
            <td className="p-3 border">Elements are in random order</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst Case</td>
            <td className="p-3 border">O(n²)</td>
            <td className="p-3 border">Array is reverse sorted</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2"><strong>Space Complexity:</strong> O(1) - In-place sorting</p>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Easy to understand and implement</li>
      <li>Does not require additional memory space</li>
      <li>Stable sorting algorithm (maintains relative order of equal elements)</li>
      <li>Can detect if array is already sorted (with optimization)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>O(n²) time complexity makes it very slow for large datasets</li>
      <li>Not practical for real-world applications with large data</li>
      <li>Many other algorithms are more efficient</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> Bubble Sort is mainly used for educational purposes to teach sorting concepts.
        For production use, prefer algorithms like Quick Sort, Merge Sort, or built-in language sort functions.
      </p>
    </div>
  </div>
);

export default BubbleSort;
