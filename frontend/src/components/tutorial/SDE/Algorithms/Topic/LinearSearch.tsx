import React from 'react';

const LinearSearch: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Linear Search
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Linear Search is the simplest searching algorithm. It sequentially checks each element in the
      array until a match is found or the entire array has been searched.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Statement</h2>
    <p className="leading-relaxed">
      Given an array arr[] of n integers and an integer x, find whether element x is present in the array.
      Return the index of the first occurrence of x in the array, or -1 if it doesn't exist.
    </p>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Start from the first element of the array</li>
      <li>Compare the current element with the target value x</li>
      <li>If they match, return the current index</li>
      <li>If they don't match, move to the next element</li>
      <li>Repeat until element is found or array ends</li>
      <li>If array ends without finding, return -1</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Array: [10, 50, 30, 70, 80, 20, 90, 40]</p>
      <p>Target: 30</p>
      <p className="mt-2">Step 1: Compare 10 with 30 - No match</p>
      <p>Step 2: Compare 50 with 30 - No match</p>
      <p>Step 3: Compare 30 with 30 - Match found at index 2</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;  // Element found
        }
    }
    return -1;  // Element not found
}

// Example usage
const arr = [2, 3, 4, 10, 40];
const x = 10;
const result = linearSearch(arr, x);
console.log(result !== -1 ? "Element found at index " + result : "Element not found");`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Case</th>
            <th className="p-3 border">Time Complexity</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Best Case</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Element found at first position</td>
          </tr>
          <tr>
            <td className="p-3 border">Average Case</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Element found at middle position</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst Case</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Element at last position or not present</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2"><strong>Space Complexity:</strong> O(1) - No extra space required</p>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Works on both sorted and unsorted arrays</li>
      <li>Simple to understand and implement</li>
      <li>Does not require any additional memory</li>
      <li>Works on arrays of any data type</li>
      <li>Well-suited for small datasets</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Time complexity of O(n) makes it slow for large datasets</li>
      <li>Not suitable for large arrays</li>
      <li>Inefficient compared to Binary Search for sorted arrays</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">When to Use</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>When the array is unsorted</li>
      <li>When working with small datasets</li>
      <li>When simplicity is preferred over efficiency</li>
      <li>When searching in linked lists</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Pro Tip:</strong> Linear search is the only option when dealing with unsorted data.
        For sorted data, always prefer Binary Search for better performance.
      </p>
    </div>
  </div>
);

export default LinearSearch;
