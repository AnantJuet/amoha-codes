import React from 'react';

const ExponentialSearch: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Exponential Search
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Exponential Search (also called Doubling Search or Galloping Search) is a searching algorithm
      that works on sorted arrays. It first finds a range where the target might exist by repeatedly
      doubling the index, then performs Binary Search within that range.
    </p>

    <h2 className="text-2xl font-bold mt-6">Prerequisites</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Array must be sorted in ascending order</li>
      <li>Works particularly well for unbounded or infinite arrays</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>If first element is the target, return 0</li>
      <li>Find range: Start with i=1, double i until arr[i] {">"} target or i {">"} n</li>
      <li>Perform Binary Search in range [i/2, min(i, n-1)]</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Array: [2, 3, 4, 10, 15, 20, 25, 40, 50, 100]</p>
      <p>Target: 25</p>
      <div className="mt-4 font-mono text-sm">
        <p className="text-blue-600 font-bold">Phase 1: Find Range (Exponential)</p>
        <p>i = 1: arr[1] = 3 {"<"} 25, double i</p>
        <p>i = 2: arr[2] = 4 {"<"} 25, double i</p>
        <p>i = 4: arr[4] = 15 {"<"} 25, double i</p>
        <p>i = 8: arr[8] = 50 {">"} 25, stop!</p>
        <p className="mt-2 text-blue-600">Range found: [4, 8]</p>

        <p className="text-green-600 font-bold mt-4">Phase 2: Binary Search in [4, 8]</p>
        <p>mid = 6, arr[6] = 25 = target</p>
        <p className="text-green-600 font-bold mt-2">Found at index 6!</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function binarySearch(arr, target, low, high) {
    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

function exponentialSearch(arr, target) {
    const n = arr.length;

    // Edge case: empty array
    if (n === 0) return -1;

    // Check first element
    if (arr[0] === target) return 0;

    // Find range by repeated doubling
    let i = 1;
    while (i < n && arr[i] <= target) {
        i *= 2;
    }

    // Binary search in the found range
    return binarySearch(arr, target, Math.floor(i / 2), Math.min(i, n - 1));
}

// Example
const arr = [2, 3, 4, 10, 15, 20, 25, 40, 50, 100];
console.log(exponentialSearch(arr, 25)); // Output: 6
console.log(exponentialSearch(arr, 10)); // Output: 3`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Searching in Unbounded Arrays</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// For unbounded/infinite arrays where we don't know the size
function exponentialSearchUnbounded(arr, target) {
    // Check first element
    if (arr[0] === target) return 0;

    // Find bounds - keep doubling until we exceed target
    // or reach end (in practice, you'd have some way to detect end)
    let i = 1;
    while (arr[i] !== undefined && arr[i] < target) {
        i *= 2;
    }

    // Binary search in the found range
    let low = Math.floor(i / 2);
    let high = i;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        if (arr[mid] === undefined || arr[mid] > target) {
            high = mid - 1;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
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
            <td className="p-3 border">O(log i) where i is target index</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst Case</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2"><strong>Space Complexity:</strong> O(1)</p>

    <h2 className="text-2xl font-bold mt-6">Why O(log i)?</h2>
    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
      <p>
        <strong>Finding range:</strong> Takes O(log i) steps (doubling from 1 to i)
      </p>
      <p className="mt-2">
        <strong>Binary search in range:</strong> Range size is at most i, so O(log i)
      </p>
      <p className="mt-2">
        <strong>Total:</strong> O(log i) + O(log i) = O(log i)
      </p>
      <p className="mt-2 text-sm">
        This is better than O(log n) when the target is near the beginning!
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Comparison with Other Searches</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Time Complexity</th>
            <th className="p-3 border">Best Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Binary Search</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">Known size arrays</td>
          </tr>
          <tr>
            <td className="p-3 border">Exponential Search</td>
            <td className="p-3 border">O(log i)</td>
            <td className="p-3 border">Unbounded arrays, target near start</td>
          </tr>
          <tr>
            <td className="p-3 border">Jump Search</td>
            <td className="p-3 border">O(sqrt(n))</td>
            <td className="p-3 border">When back-jumping is costly</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Unbounded arrays:</strong> Works when array size is unknown</li>
      <li><strong>Better for near-start targets:</strong> O(log i) is better than O(log n) when i is small</li>
      <li><strong>Combines best of both:</strong> Exponential finding + binary precision</li>
      <li><strong>Simple:</strong> Easy to implement and understand</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Two-phase approach has slight overhead</li>
      <li>Not better than binary search when target is near the end</li>
      <li>Requires sorted array</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Searching in unbounded or infinite sorted sequences</li>
      <li>Log file searching where entries near start are common</li>
      <li>Searching in data streams</li>
      <li>Finding insertion point in sorted lists</li>
      <li>Used in C++ STL's std::upper_bound and std::lower_bound</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Tip:</strong> Use Exponential Search when you don't know the array size or when the
        target element is likely to be near the beginning of the array.
      </p>
    </div>
  </div>
);

export default ExponentialSearch;
