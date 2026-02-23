import React from 'react';

const TernarySearch: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Ternary Search
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Ternary Search is a divide-and-conquer algorithm that works on sorted arrays by dividing the
      search space into three parts instead of two (as in Binary Search). It is particularly useful
      for finding the maximum or minimum of unimodal functions.
    </p>

    <h2 className="text-2xl font-bold mt-6">Prerequisites</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>The array must be sorted (for searching in arrays)</li>
      <li>For function optimization, the function must be unimodal (single peak or valley)</li>
      <li>Random access to elements in constant time</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Calculate two mid points: mid1 = low + (high - low) / 3</li>
      <li>Calculate mid2 = high - (high - low) / 3</li>
      <li>If target equals arr[mid1], return mid1</li>
      <li>If target equals arr[mid2], return mid2</li>
      <li>If target {"<"} arr[mid1], search in [low, mid1-1]</li>
      <li>If target {">"} arr[mid2], search in [mid2+1, high]</li>
      <li>Otherwise, search in [mid1+1, mid2-1]</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]</p>
      <p>Target: 5</p>
      <div className="mt-4 font-mono text-sm">
        <p className="text-blue-600">Initial: low=0, high=11</p>
        <p>mid1 = 0 + (11-0)/3 = 3, arr[3] = 4</p>
        <p>mid2 = 11 - (11-0)/3 = 8, arr[8] = 9</p>
        <p className="mt-2">5 {">"} 4 and 5 {"<"} 9, so search in middle third [4, 7]</p>
        <p className="text-blue-600 mt-2">Next: low=4, high=7</p>
        <p>mid1 = 4, arr[4] = 5 = target</p>
        <p className="text-green-600 font-bold mt-2">Found at index 4!</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation (Array Search)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function ternarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        // Divide array into three parts
        let mid1 = low + Math.floor((high - low) / 3);
        let mid2 = high - Math.floor((high - low) / 3);

        if (arr[mid1] === target) {
            return mid1;
        }
        if (arr[mid2] === target) {
            return mid2;
        }

        if (target < arr[mid1]) {
            // Target is in first third
            high = mid1 - 1;
        } else if (target > arr[mid2]) {
            // Target is in last third
            low = mid2 + 1;
        } else {
            // Target is in middle third
            low = mid1 + 1;
            high = mid2 - 1;
        }
    }

    return -1; // Not found
}

// Example
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(ternarySearch(arr, 5)); // Output: 4`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Finding Maximum of Unimodal Function</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function findMaximum(f, low, high, precision = 1e-9) {
    while (high - low > precision) {
        let mid1 = low + (high - low) / 3;
        let mid2 = high - (high - low) / 3;

        if (f(mid1) < f(mid2)) {
            // Maximum is in right two-thirds
            low = mid1;
        } else {
            // Maximum is in left two-thirds
            high = mid2;
        }
    }

    return (low + high) / 2;
}

// Example: Find maximum of f(x) = -(x-3)^2 + 10
const f = x => -(x - 3) ** 2 + 10;
console.log(findMaximum(f, 0, 6)); // Output: ~3`}</pre>
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
            <td className="p-3 border">O(log3 n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst Case</td>
            <td className="p-3 border">O(log3 n)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2"><strong>Space Complexity:</strong> O(1) iterative, O(log3 n) recursive</p>

    <h2 className="text-2xl font-bold mt-6">Ternary Search vs Binary Search</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Binary Search</th>
            <th className="p-3 border">Ternary Search</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Divisions</td>
            <td className="p-3 border">2 parts</td>
            <td className="p-3 border">3 parts</td>
          </tr>
          <tr>
            <td className="p-3 border">Comparisons per iteration</td>
            <td className="p-3 border">1-2</td>
            <td className="p-3 border">2-4</td>
          </tr>
          <tr>
            <td className="p-3 border">Time Complexity</td>
            <td className="p-3 border">O(log2 n)</td>
            <td className="p-3 border">O(log3 n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Practical Speed</td>
            <td className="p-3 border">Faster</td>
            <td className="p-3 border">Slower (more comparisons)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Efficient for finding extrema of unimodal functions</li>
      <li>Works well for continuous function optimization</li>
      <li>Useful in competitive programming for optimization problems</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>More comparisons per iteration than binary search</li>
      <li>Actually slower than binary search for simple array searching</li>
      <li>Requires unimodal property for function optimization</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Finding maximum/minimum of unimodal functions</li>
      <li>Optimization problems in competitive programming</li>
      <li>Machine learning parameter tuning</li>
      <li>Game theory minimax problems</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> For simple array searching, Binary Search is more efficient. Use Ternary
        Search primarily for finding maxima/minima of unimodal functions where you can't use derivatives.
      </p>
    </div>
  </div>
);

export default TernarySearch;
