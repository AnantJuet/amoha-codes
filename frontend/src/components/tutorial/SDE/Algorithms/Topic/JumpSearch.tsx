import React from 'react';

const JumpSearch: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Jump Search
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Jump Search is a searching algorithm for sorted arrays that works by jumping ahead by fixed steps
      (typically sqrt(n)) and then performing a linear search backward. It bridges the gap between
      Linear Search O(n) and Binary Search O(log n).
    </p>

    <h2 className="text-2xl font-bold mt-6">Prerequisites</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Array must be sorted in ascending order</li>
      <li>Elements must be accessible by index in O(1) time</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Calculate optimal jump size: step = sqrt(n)</li>
      <li>Jump ahead by 'step' until arr[step] {">"} target or end of array</li>
      <li>Perform linear search backward from current position</li>
      <li>Return index if found, -1 otherwise</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Why sqrt(n)?</h2>
    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
      <p>
        If jump size is <code>m</code>, we make at most <code>n/m</code> jumps and at most <code>m</code> linear comparisons.
      </p>
      <p className="mt-2">
        Total comparisons = <code>n/m + m</code>
      </p>
      <p className="mt-2">
        To minimize, take derivative and set to 0: <code>-n/m^2 + 1 = 0</code> gives <code>m = sqrt(n)</code>
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Array: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]</p>
      <p>n = 12, step = sqrt(12) = 3</p>
      <p>Target: 55</p>
      <div className="mt-4 font-mono text-sm">
        <p className="text-blue-600">Jump Phase:</p>
        <p>Jump 1: index 0, arr[0] = 0 {"<"} 55, jump</p>
        <p>Jump 2: index 3, arr[3] = 2 {"<"} 55, jump</p>
        <p>Jump 3: index 6, arr[6] = 8 {"<"} 55, jump</p>
        <p>Jump 4: index 9, arr[9] = 34 {"<"} 55, jump</p>
        <p>Jump 5: index 12 {">"} length, so search from index 9</p>
        <p className="text-green-600 mt-2">Linear Phase:</p>
        <p>Check index 9: 34 {"<"} 55</p>
        <p>Check index 10: 55 = 55</p>
        <p className="text-green-600 font-bold mt-2">Found at index 10!</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function jumpSearch(arr, target) {
    const n = arr.length;
    const step = Math.floor(Math.sqrt(n));

    // Finding the block where element is present
    let prev = 0;
    let curr = step;

    // Jump until we find a block where target could be
    while (curr < n && arr[curr] < target) {
        prev = curr;
        curr += step;
    }

    // Linear search in the identified block
    for (let i = prev; i < Math.min(curr, n); i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1; // Not found
}

// Example
const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
console.log(jumpSearch(arr, 55)); // Output: 10
console.log(jumpSearch(arr, 13)); // Output: 7`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Optimized Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function jumpSearchOptimized(arr, target) {
    const n = arr.length;
    if (n === 0) return -1;

    const step = Math.floor(Math.sqrt(n));
    let prev = 0;

    // Jump to find the block
    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) return -1;
    }

    // Linear search within the block
    while (arr[prev] < target) {
        prev++;
        if (prev === Math.min(step, n)) return -1;
    }

    // Check if element is found
    return arr[prev] === target ? prev : -1;
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
            <td className="p-3 border">O(sqrt(n))</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst Case</td>
            <td className="p-3 border">O(sqrt(n))</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2"><strong>Space Complexity:</strong> O(1)</p>

    <h2 className="text-2xl font-bold mt-6">Comparison with Other Searches</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Best For</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Linear Search</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Unsorted arrays</td>
          </tr>
          <tr>
            <td className="p-3 border">Jump Search</td>
            <td className="p-3 border">O(sqrt(n))</td>
            <td className="p-3 border">Systems without random access</td>
          </tr>
          <tr>
            <td className="p-3 border">Binary Search</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">Random access arrays</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Better than linear search for large sorted arrays</li>
      <li>Works well when jumping back is costly (linked lists with skip pointers)</li>
      <li>Only jumps forward, never backward during jump phase</li>
      <li>Simple to implement</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Slower than Binary Search for arrays with random access</li>
      <li>Requires sorted array</li>
      <li>Not as efficient for very small or very large arrays</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Searching in systems where binary search is not feasible</li>
      <li>Skip lists and similar data structures</li>
      <li>When backward traversal is expensive</li>
      <li>Database indexing with block-based storage</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Tip:</strong> Jump Search is optimal when jumping backward is expensive but jumping
        forward is cheap. For most in-memory arrays, Binary Search is still preferred.
      </p>
    </div>
  </div>
);

export default JumpSearch;
