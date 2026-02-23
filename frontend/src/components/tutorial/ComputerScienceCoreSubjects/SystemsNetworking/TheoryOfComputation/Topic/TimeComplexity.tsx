import React from 'react';

const TimeComplexity: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Time Complexity</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Time complexity measures the number of computational steps required to solve a problem as a
      function of input size. It's the most common measure of algorithm efficiency and is central
      to understanding which problems are tractable.
    </p>
    <h2 className="text-3xl font-bold mt-8">Formal Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Time Complexity of a TM:

Let M be a TM that halts on all inputs.
The time complexity of M is the function:

t_M(n) = max{number of steps M takes on input w : |w| = n}

TIME(f(n)) = class of languages decidable by a TM
             in O(f(n)) time

Example:
TIME(n) - linear time
TIME(n²) - quadratic time
TIME(2^n) - exponential time`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Common Time Classes</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Hierarchy of time classes:

O(1)       - Constant time
O(log n)   - Logarithmic time
O(n)       - Linear time
O(n log n) - Linearithmic time
O(n²)      - Quadratic time
O(n³)      - Cubic time
O(2^n)     - Exponential time
O(n!)      - Factorial time

Polynomial: O(n^k) for constant k
           "Efficient" or "tractable"

Superpolynomial: Grows faster than any polynomial
                 "Inefficient" for large inputs`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Growth Rate Comparison</h2>
    <table className="min-w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100 text-gray-900">
        <tr>
          <th className="border border-gray-300 px-4 py-2">n</th>
          <th className="border border-gray-300 px-4 py-2">log n</th>
          <th className="border border-gray-300 px-4 py-2">n</th>
          <th className="border border-gray-300 px-4 py-2">n²</th>
          <th className="border border-gray-300 px-4 py-2">2^n</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">10</td>
          <td className="border border-gray-300 px-4 py-2">3</td>
          <td className="border border-gray-300 px-4 py-2">10</td>
          <td className="border border-gray-300 px-4 py-2">100</td>
          <td className="border border-gray-300 px-4 py-2">1,024</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">100</td>
          <td className="border border-gray-300 px-4 py-2">7</td>
          <td className="border border-gray-300 px-4 py-2">100</td>
          <td className="border border-gray-300 px-4 py-2">10,000</td>
          <td className="border border-gray-300 px-4 py-2">~10^30</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">1000</td>
          <td className="border border-gray-300 px-4 py-2">10</td>
          <td className="border border-gray-300 px-4 py-2">1,000</td>
          <td className="border border-gray-300 px-4 py-2">1,000,000</td>
          <td className="border border-gray-300 px-4 py-2">~10^301</td>
        </tr>
      </tbody>
    </table>
    <h2 className="text-3xl font-bold mt-8">Time Hierarchy Theorem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Theorem: Given more time, TMs can solve more problems.

If f(n) log f(n) = o(g(n)), then:
TIME(f(n)) ⊊ TIME(g(n))  (strict subset)

Example: TIME(n) ⊊ TIME(n²) ⊊ TIME(n³)

This guarantees the time hierarchy is proper -
more time genuinely means more computational power.`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Time complexity counts computation steps</li>
        <li>Use big-O for asymptotic analysis</li>
        <li>Polynomial time is considered efficient</li>
        <li>Time hierarchy: more time = more power</li>
      </ul>
    </div>
  </div>
);
export default TimeComplexity;
