import React from 'react';

const BigONotation: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Big-O Notation</h1>

    <p className="text-lg leading-relaxed">
      Big-O notation describes the upper bound of an algorithm's growth rate. It tells us
      how the running time or space scales as input size increases.
    </p>

    <h2 className="text-2xl font-bold mt-8">Definition</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Formal Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">
            <p>f(n) = O(g(n)) means there exists c, n0: f(n) &le; c &middot; g(n) for all n &ge; n0</p>
            <p className="mt-2 text-sm">f grows no faster than g (asymptotically)</p>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Common Complexities</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Complexity</th>
          <th className="p-2 border">Name</th>
          <th className="p-2 border">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">O(1)</td><td className="p-2 border">Constant</td><td className="p-2 border">Array access</td></tr>
        <tr><td className="p-2 border">O(log n)</td><td className="p-2 border">Logarithmic</td><td className="p-2 border">Binary search</td></tr>
        <tr><td className="p-2 border">O(n)</td><td className="p-2 border">Linear</td><td className="p-2 border">Linear search</td></tr>
        <tr><td className="p-2 border">O(n log n)</td><td className="p-2 border">Linearithmic</td><td className="p-2 border">Merge sort</td></tr>
        <tr><td className="p-2 border">O(n&sup2;)</td><td className="p-2 border">Quadratic</td><td className="p-2 border">Bubble sort</td></tr>
        <tr><td className="p-2 border">O(2&#8319;)</td><td className="p-2 border">Exponential</td><td className="p-2 border">Brute force subsets</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Related Notations</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Notation</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">&Omega; (Omega)</td><td className="p-2 border">Lower bound (best case)</td></tr>
        <tr><td className="p-2 border">&Theta; (Theta)</td><td className="p-2 border">Tight bound (both upper and lower)</td></tr>
        <tr><td className="p-2 border">o (little-o)</td><td className="p-2 border">Strictly less than</td></tr>
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
        <tr><td className="p-2 border">1</td><td className="p-2 border">What is O(3n&sup2; + 5n + 100)?</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">Order these: O(n!), O(2&#8319;), O(n&sup2;), O(n log n)</td></tr>
      </tbody>
    </table>
  </div>
);

export default BigONotation;
