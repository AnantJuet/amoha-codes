import React from 'react';

const DACIntro: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Divide and Conquer
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Divide and Conquer is a powerful algorithmic paradigm that solves problems by breaking them
      into smaller subproblems, solving each subproblem recursively, and then combining the results.
      It forms the basis for many efficient algorithms.
    </p>

    <h2 className="text-2xl font-bold mt-6">The Three Steps</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">1. Divide</h4>
        <p className="mt-2 text-sm">
          Break the problem into smaller subproblems of the same type.
          The subproblems should be independent of each other.
        </p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">2. Conquer</h4>
        <p className="mt-2 text-sm">
          Solve each subproblem recursively. When subproblems become
          small enough, solve them directly (base case).
        </p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">3. Combine</h4>
        <p className="mt-2 text-sm">
          Merge the solutions of subproblems to get the solution
          to the original problem.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">General Template</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function divideAndConquer(problem) {
    // Base case: problem is small enough to solve directly
    if (isBaseCase(problem)) {
        return baseSolution(problem);
    }

    // DIVIDE: Split problem into subproblems
    const subproblems = divide(problem);

    // CONQUER: Solve each subproblem recursively
    const subsolutions = subproblems.map(sub => divideAndConquer(sub));

    // COMBINE: Merge solutions to get final answer
    return combine(subsolutions);
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Divide and Conquer vs Dynamic Programming</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Divide and Conquer</th>
            <th className="p-3 border">Dynamic Programming</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Subproblems</td>
            <td className="p-3 border">Independent, non-overlapping</td>
            <td className="p-3 border">Overlapping, reused</td>
          </tr>
          <tr>
            <td className="p-3 border">Memoization</td>
            <td className="p-3 border">Not needed</td>
            <td className="p-3 border">Essential</td>
          </tr>
          <tr>
            <td className="p-3 border">Approach</td>
            <td className="p-3 border">Top-down only</td>
            <td className="p-3 border">Top-down or bottom-up</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">Merge Sort, Quick Sort</td>
            <td className="p-3 border">Fibonacci, LCS</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Classic Example: Merge Sort</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr;

    // DIVIDE: Split array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // CONQUER: Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // COMBINE: Merge sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recurrence Relations and Master Theorem</h2>
    <p className="leading-relaxed">
      Divide and Conquer algorithms often have recurrence relations of the form:
    </p>
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="font-mono text-center">T(n) = aT(n/b) + f(n)</p>
      <ul className="list-disc list-inside mt-4 space-y-1">
        <li><strong>a</strong> = number of subproblems</li>
        <li><strong>n/b</strong> = size of each subproblem</li>
        <li><strong>f(n)</strong> = cost of divide and combine steps</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Master Theorem</h2>
    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
      <p className="font-semibold">For T(n) = aT(n/b) + f(n):</p>
      <ul className="list-disc list-inside mt-2 space-y-2">
        <li>
          <strong>Case 1:</strong> If f(n) = O(n^c) where c {"<"} log_b(a), then T(n) = O(n^log_b(a))
        </li>
        <li>
          <strong>Case 2:</strong> If f(n) = O(n^c) where c = log_b(a), then T(n) = O(n^c * log n)
        </li>
        <li>
          <strong>Case 3:</strong> If f(n) = O(n^c) where c {">"} log_b(a), then T(n) = O(f(n))
        </li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common Algorithms and Their Complexities</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Recurrence</th>
            <th className="p-3 border">Time Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Binary Search</td>
            <td className="p-3 border">T(n) = T(n/2) + O(1)</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Merge Sort</td>
            <td className="p-3 border">T(n) = 2T(n/2) + O(n)</td>
            <td className="p-3 border">O(n log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Quick Sort (avg)</td>
            <td className="p-3 border">T(n) = 2T(n/2) + O(n)</td>
            <td className="p-3 border">O(n log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Strassen's Matrix</td>
            <td className="p-3 border">T(n) = 7T(n/2) + O(n^2)</td>
            <td className="p-3 border">O(n^2.807)</td>
          </tr>
          <tr>
            <td className="p-3 border">Karatsuba Multiply</td>
            <td className="p-3 border">T(n) = 3T(n/2) + O(n)</td>
            <td className="p-3 border">O(n^1.585)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages of Divide and Conquer</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Efficiency:</strong> Often leads to optimal or near-optimal solutions</li>
      <li><strong>Parallelism:</strong> Subproblems are independent, enabling parallel execution</li>
      <li><strong>Cache Efficiency:</strong> Works well with memory hierarchy due to locality</li>
      <li><strong>Simplicity:</strong> Often leads to elegant, understandable solutions</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">When to Use Divide and Conquer</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Problem can be divided into independent subproblems of same type</li>
      <li>Subproblems have roughly equal size</li>
      <li>Solutions to subproblems can be combined efficiently</li>
      <li>Base cases are simple to solve directly</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Classic D&C Problems</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Sorting & Searching</h4>
        <ul className="list-disc list-inside text-sm mt-2">
          <li>Merge Sort</li>
          <li>Quick Sort</li>
          <li>Binary Search</li>
        </ul>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Mathematical</h4>
        <ul className="list-disc list-inside text-sm mt-2">
          <li>Karatsuba Multiplication</li>
          <li>Strassen's Matrix Multiplication</li>
          <li>Fast Fourier Transform (FFT)</li>
        </ul>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Geometric</h4>
        <ul className="list-disc list-inside text-sm mt-2">
          <li>Closest Pair of Points</li>
          <li>Convex Hull</li>
          <li>Line Segment Intersection</li>
        </ul>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Other</h4>
        <ul className="list-disc list-inside text-sm mt-2">
          <li>Maximum Subarray (Kadane's)</li>
          <li>Tower of Hanoi</li>
          <li>Counting Inversions</li>
        </ul>
      </div>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Key Insight:</strong> The power of Divide and Conquer lies in reducing problem
        size exponentially (typically by half) at each step, leading to logarithmic depth and
        often O(n log n) algorithms for problems that would otherwise require O(n^2).
      </p>
    </div>
  </div>
);

export default DACIntro;
