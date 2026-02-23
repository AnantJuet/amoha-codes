import React from 'react';

const SpaceComplexity: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Space Complexity
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Space Complexity measures the total amount of memory an algorithm needs to run as a function of
      input size. It includes both the space used by input and any extra (auxiliary) space needed.
    </p>

    <h2 className="text-2xl font-bold mt-6">Two Components</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Auxiliary Space</h4>
        <p className="text-sm mt-1">Extra/temporary space used by the algorithm (excluding input)</p>
        <p className="text-xs mt-2 text-gray-600">Example: Temp variables, recursion stack</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Input Space</h4>
        <p className="text-sm mt-1">Space taken by the input data itself</p>
        <p className="text-xs mt-2 text-gray-600">Example: The array being sorted</p>
      </div>
    </div>
    <p className="mt-2 text-sm text-gray-600">
      <strong>Space Complexity = Auxiliary Space + Input Space</strong>
    </p>

    <h2 className="text-2xl font-bold mt-6">Sorting Algorithms Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Auxiliary Space</th>
            <th className="p-3 border">Space Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Insertion Sort</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Heap Sort</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Merge Sort</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common Space Complexities</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>O(1):</strong> Constant space - Fixed number of variables</li>
      <li><strong>O(n):</strong> Linear space - Array of size n, or n recursive calls</li>
      <li><strong>O(n²):</strong> Quadratic space - 2D array of size n×n</li>
      <li><strong>O(log n):</strong> Logarithmic - Recursion depth of binary search</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Recursion and Stack Space</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Example 1: O(n) space due to recursion stack
function add(n) {
    if (n <= 0) return 0;
    return n + add(n - 1);
}
// Call stack: add(4) → add(3) → add(2) → add(1) → add(0)
// Each call is added to stack = O(n) space

// Example 2: O(1) space - calls don't stack
function pairSum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += helper(i, i + 1);  // helper returns immediately
    }
    return sum;
}
// Only one helper call on stack at a time = O(1) space`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Space vs Time Trade-off</h2>
    <p className="leading-relaxed">
      Often we can trade space for time or vice versa:
    </p>
    <ul className="list-disc list-inside space-y-2 mt-2">
      <li><strong>Memoization:</strong> Use O(n) space to reduce time from O(2ⁿ) to O(n)</li>
      <li><strong>Hash tables:</strong> Use O(n) space to get O(1) lookups instead of O(n)</li>
      <li><strong>In-place algorithms:</strong> Save space at cost of more complex logic</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Pro Tip:</strong> When comparing sorting algorithms, Auxiliary Space is often more
        meaningful than total Space Complexity since all sorting algorithms need O(n) for input.
      </p>
    </div>
  </div>
);

export default SpaceComplexity;
