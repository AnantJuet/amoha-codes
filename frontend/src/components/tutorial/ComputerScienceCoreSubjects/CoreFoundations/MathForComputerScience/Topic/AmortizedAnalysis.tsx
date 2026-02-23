import React from 'react';

const AmortizedAnalysis: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Amortized Analysis</h1>

    <p className="text-lg leading-relaxed">
      Amortized analysis finds the average time per operation over a worst-case sequence.
      Some operations may be expensive, but they're rare enough that the average is low.
    </p>

    <h2 className="text-2xl font-bold mt-8">Methods</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Method</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Aggregate</td><td className="p-2 border">Total cost / number of operations</td></tr>
        <tr><td className="p-2 border">Accounting</td><td className="p-2 border">Charge more for cheap ops, save credit for expensive</td></tr>
        <tr><td className="p-2 border">Potential</td><td className="p-2 border">Use a potential function to track "stored work"</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Classic Example: Dynamic Array</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Analysis</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p>Array doubles when full. Most inserts O(1), occasional O(n) copy.</p>
            <p className="mt-2 font-semibold">Amortized cost per insert: O(1)!</p>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Other Examples</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Data Structure / Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Binary counter increments</td></tr>
        <tr><td className="p-2 border">Splay tree operations</td></tr>
        <tr><td className="p-2 border">Union-Find with path compression</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">#</th>
          <th className="p-2 border">Problem</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1</td><td className="p-2 border">Prove dynamic array insert is O(1) amortized</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">What's the amortized cost of incrementing an n-bit binary counter?</td></tr>
      </tbody>
    </table>
  </div>
);

export default AmortizedAnalysis;
