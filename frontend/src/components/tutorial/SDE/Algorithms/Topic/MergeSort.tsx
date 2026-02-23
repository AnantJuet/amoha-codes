import React from 'react';

const MergeSort: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Merge Sort
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Merge Sort is a popular sorting algorithm known for its efficiency and stability. It follows the
      Divide and Conquer approach by recursively dividing the input array into two halves, sorting them,
      and merging them back together.
    </p>

    <h2 className="text-2xl font-bold mt-6">Divide and Conquer Strategy</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">1. Divide</h4>
        <p className="mt-2 text-sm">Split the array into two halves recursively until each subarray has only one element.</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">2. Conquer</h4>
        <p className="mt-2 text-sm">Single element arrays are inherently sorted. This is our base case.</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">3. Merge</h4>
        <p className="mt-2 text-sm">Combine two sorted subarrays into one sorted array by comparing elements.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Sorting: [38, 27, 43, 10]</p>
      <div className="mt-3 space-y-2">
        <p><strong>Divide Phase:</strong></p>
        <p className="ml-4">[38, 27, 43, 10] → [38, 27] and [43, 10]</p>
        <p className="ml-4">[38, 27] → [38] and [27]</p>
        <p className="ml-4">[43, 10] → [43] and [10]</p>

        <p className="mt-3"><strong>Merge Phase:</strong></p>
        <p className="ml-4">Merge [38] and [27] → [27, 38]</p>
        <p className="ml-4">Merge [43] and [10] → [10, 43]</p>
        <p className="ml-4">Merge [27, 38] and [10, 43] → [10, 27, 38, 43]</p>

        <p className="mt-2 text-green-600 font-semibold">Result: [10, 27, 38, 43]</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;  // Base case
    }

    // Divide
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Conquer and Merge
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    // Compare and merge
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

// Example
const arr = [38, 27, 43, 10];
console.log("Sorted:", mergeSort(arr));
// Output: [10, 27, 38, 43]`}</pre>
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
    <p className="mt-2"><strong>Space Complexity:</strong> O(n) - Additional space for temporary arrays during merging</p>

    <h2 className="text-2xl font-bold mt-6">Recurrence Relation</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-mono">T(n) = 2T(n/2) + O(n)</p>
      <ul className="list-disc list-inside mt-2 text-sm">
        <li><strong>2T(n/2):</strong> Time for recursively sorting two halves</li>
        <li><strong>O(n):</strong> Time for merging two sorted halves</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Stable:</strong> Maintains relative order of equal elements</li>
      <li><strong>Guaranteed O(n log n):</strong> Consistent performance regardless of input</li>
      <li><strong>Parallelizable:</strong> Dividing steps can be executed in parallel</li>
      <li><strong>External Sorting:</strong> Efficient for sorting large files that don't fit in memory</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Space Complexity:</strong> Requires O(n) additional space</li>
      <li><strong>Not In-Place:</strong> Creates new arrays during merging</li>
      <li><strong>Slower for Small Arrays:</strong> Overhead of recursion and merging</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Sorting linked lists (preferred over Quick Sort)</li>
      <li>External sorting (sorting large files)</li>
      <li>Counting inversions in an array</li>
      <li>Finding the median of two sorted arrays</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Pro Tip:</strong> Merge Sort is particularly useful when stable sorting is required or when
        working with linked lists, as it doesn't require random access to elements.
      </p>
    </div>
  </div>
);

export default MergeSort;
