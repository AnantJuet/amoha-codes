import React from 'react';

const TimeComplexity: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Time Complexity
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Time Complexity of an algorithm is not equal to the actual time required to execute a particular code,
      but the number of times a statement executes. It represents the rate of growth of running time with
      respect to the input size.
    </p>

    <h2 className="text-2xl font-bold mt-6">Understanding with an Example</h2>
    <p className="leading-relaxed">
      Imagine a classroom of 100 students. You gave your pen to one person and need to find it.
      Here are different approaches and their time complexities:
    </p>

    <div className="space-y-4 mt-4">
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">O(n²) - Quadratic</h4>
        <p>Ask each person about every other person. 100 × 100 = 10,000 questions.</p>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
        <h4 className="font-bold text-yellow-800">O(n) - Linear</h4>
        <p>Ask each student individually. 100 questions maximum.</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">O(log n) - Logarithmic</h4>
        <p>Divide class in half and ask which side. Repeat. ~7 questions maximum.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common Time Complexities</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Complexity</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Constant</td>
            <td className="p-3 border">Array access by index</td>
          </tr>
          <tr>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">Logarithmic</td>
            <td className="p-3 border">Binary search</td>
          </tr>
          <tr>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Linear</td>
            <td className="p-3 border">Linear search</td>
          </tr>
          <tr>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">Linearithmic</td>
            <td className="p-3 border">Merge sort, Quick sort (avg)</td>
          </tr>
          <tr>
            <td className="p-3 border">O(n²)</td>
            <td className="p-3 border">Quadratic</td>
            <td className="p-3 border">Bubble sort, Nested loops</td>
          </tr>
          <tr>
            <td className="p-3 border">O(2ⁿ)</td>
            <td className="p-3 border">Exponential</td>
            <td className="p-3 border">Recursive Fibonacci</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">How to Calculate Time Complexity</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Count the number of operations as a function of input size n</li>
      <li>Drop constants and lower-order terms</li>
      <li>Keep only the dominant term</li>
    </ol>

    <h3 className="text-xl font-semibold mt-4">Example: Sum of Array</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function sumArray(arr) {
    let sum = 0;           // 1 operation
    for (let i = 0; i < arr.length; i++) {  // n iterations
        sum += arr[i];     // 1 operation per iteration
    }
    return sum;            // 1 operation
}
// Total: 1 + n + 1 = n + 2 → O(n)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Important Notes</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Time complexity is machine-independent</li>
      <li>We focus on how runtime grows with input size</li>
      <li>Actual execution time depends on hardware, language, etc.</li>
      <li>We typically analyze worst-case complexity</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Rules for Calculating</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Sequential statements:</strong> Add complexities</li>
      <li><strong>Nested loops:</strong> Multiply complexities</li>
      <li><strong>If-else:</strong> Take maximum of both branches</li>
      <li><strong>Recursion:</strong> Use recurrence relations</li>
    </ul>
  </div>
);

export default TimeComplexity;
