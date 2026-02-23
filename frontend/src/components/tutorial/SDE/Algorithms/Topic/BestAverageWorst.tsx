import React from 'react';

const BestAverageWorst: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Best, Average and Worst Case
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Algorithm performance varies based on input. We analyze three cases to understand how an algorithm
      behaves under different conditions: best case, average case, and worst case.
    </p>

    <h2 className="text-2xl font-bold mt-6">Three Cases of Analysis</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Best Case (Ω - Omega)</h4>
        <p className="mt-1">Minimum operations needed. Occurs with optimal input.</p>
        <p className="text-sm text-gray-600 mt-1">Example: Finding element at first position in linear search</p>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
        <h4 className="font-bold text-yellow-800">Average Case (Θ - Theta)</h4>
        <p className="mt-1">Expected operations for random/typical input.</p>
        <p className="text-sm text-gray-600 mt-1">Example: Element found at middle position on average</p>
      </div>
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">Worst Case (O - Big O)</h4>
        <p className="mt-1">Maximum operations needed. Most commonly analyzed.</p>
        <p className="text-sm text-gray-600 mt-1">Example: Element not present or at last position</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Linear Search Example</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Case</th>
            <th className="p-3 border">Scenario</th>
            <th className="p-3 border">Comparisons</th>
            <th className="p-3 border">Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Best</td>
            <td className="p-3 border">Element at first index</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Average</td>
            <td className="p-3 border">Element at middle index</td>
            <td className="p-3 border">n/2</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst</td>
            <td className="p-3 border">Element not present</td>
            <td className="p-3 border">n</td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Quick Sort vs Merge Sort</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Best</th>
            <th className="p-3 border">Average</th>
            <th className="p-3 border">Worst</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Merge Sort</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(n log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Quick Sort</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(n²)</td>
          </tr>
          <tr>
            <td className="p-3 border">Insertion Sort</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n²)</td>
            <td className="p-3 border">O(n²)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Why Worst Case is Most Used?</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Guarantees:</strong> Provides an upper bound on execution time</li>
      <li><strong>Safety:</strong> Ensures system won't exceed expected resource usage</li>
      <li><strong>Easier to analyze:</strong> Don't need to consider all possible inputs</li>
      <li><strong>Practical:</strong> Best case rarely happens and average case is hard to determine</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">When Cases Are Same</h2>
    <p className="leading-relaxed">
      Some algorithms have the same complexity for all cases:
    </p>
    <ul className="list-disc list-inside space-y-2 mt-2">
      <li><strong>Merge Sort:</strong> Always O(n log n) - divides and merges regardless of input</li>
      <li><strong>Binary Search:</strong> Always O(log n) - halves search space each time</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> Best case analysis is rarely useful because it doesn't give meaningful
        guarantees. Focus on worst case for reliability and average case for expected performance.
      </p>
    </div>
  </div>
);

export default BestAverageWorst;
