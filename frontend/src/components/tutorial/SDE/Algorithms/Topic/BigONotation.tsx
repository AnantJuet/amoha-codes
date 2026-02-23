import React from 'react';

const BigONotation: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Big O Notation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Big O notation is a mathematical notation used to describe the upper bound of an algorithm's time
      or space complexity. It represents the worst-case scenario of how an algorithm scales with input size.
    </p>

    <h2 className="text-2xl font-bold mt-6">Three Asymptotic Notations</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">Big O (O)</h4>
        <p className="text-sm mt-1">Upper bound - Worst case</p>
        <p className="text-xs mt-1">f(n) ≤ c·g(n) for n ≥ n₀</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Omega (Ω)</h4>
        <p className="text-sm mt-1">Lower bound - Best case</p>
        <p className="text-xs mt-1">f(n) ≥ c·g(n) for n ≥ n₀</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Theta (Θ)</h4>
        <p className="text-sm mt-1">Tight bound - Average case</p>
        <p className="text-xs mt-1">c₁·g(n) ≤ f(n) ≤ c₂·g(n)</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common Big O Complexities</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Notation</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Example</th>
            <th className="p-3 border">n=1000</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr className="bg-green-50">
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Constant</td>
            <td className="p-3 border">Array access</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr className="bg-green-50">
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">Logarithmic</td>
            <td className="p-3 border">Binary search</td>
            <td className="p-3 border">~10</td>
          </tr>
          <tr className="bg-yellow-50">
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Linear</td>
            <td className="p-3 border">Linear search</td>
            <td className="p-3 border">1,000</td>
          </tr>
          <tr className="bg-yellow-50">
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">Linearithmic</td>
            <td className="p-3 border">Merge sort</td>
            <td className="p-3 border">~10,000</td>
          </tr>
          <tr className="bg-orange-50">
            <td className="p-3 border">O(n²)</td>
            <td className="p-3 border">Quadratic</td>
            <td className="p-3 border">Bubble sort</td>
            <td className="p-3 border">1,000,000</td>
          </tr>
          <tr className="bg-red-50">
            <td className="p-3 border">O(2ⁿ)</td>
            <td className="p-3 border">Exponential</td>
            <td className="p-3 border">Recursive Fibonacci</td>
            <td className="p-3 border">Huge!</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">How to Calculate Big O</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Count operations as a function of input size n</li>
      <li>Drop constant factors (2n → n)</li>
      <li>Drop lower-order terms (n² + n → n²)</li>
      <li>Keep only the dominant term</li>
    </ol>

    <h3 className="text-xl font-semibold mt-4">Example</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-2 overflow-x-auto">
      <pre className="text-sm">{`// What's the Big O?
function example(arr) {
    let sum = 0;           // O(1)
    for (let i = 0; i < arr.length; i++) {  // O(n)
        sum += arr[i];     // O(1) per iteration
    }
    return sum;            // O(1)
}
// Total: O(1) + O(n) × O(1) + O(1) = O(n)`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Rules for Calculating</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Sequential:</strong> Add complexities → O(n) + O(m) = O(n + m)</li>
      <li><strong>Nested loops:</strong> Multiply → O(n) × O(m) = O(n × m)</li>
      <li><strong>If-else:</strong> Take maximum → max(O(n), O(1)) = O(n)</li>
      <li><strong>Drop constants:</strong> O(2n) = O(n)</li>
      <li><strong>Drop non-dominant:</strong> O(n² + n) = O(n²)</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> Big O describes the worst case. An algorithm with O(n²) worst case might
        perform much better on average. Always consider the context of your problem.
      </p>
    </div>
  </div>
);

export default BigONotation;
