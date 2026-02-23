import React from 'react';

const MasterTheorem: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Master Theorem</h1>

    <p className="text-lg leading-relaxed">
      The Master Theorem provides a quick way to solve divide-and-conquer recurrences
      of the form T(n) = aT(n/b) + f(n).
    </p>

    <h2 className="text-2xl font-bold mt-8">The Three Cases</h2>
    <p className="mt-3 font-semibold">For T(n) = aT(n/b) + f(n), let c = log_b(a):</p>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Case</th>
          <th className="p-2 border">Condition</th>
          <th className="p-2 border">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Case 1</td>
          <td className="p-2 border">f(n) = O(n^(c-&epsilon;)) for some &epsilon; &gt; 0</td>
          <td className="p-2 border"><span className="font-mono text-gray-900">T(n) = &Theta;(n^c)</span></td>
        </tr>
        <tr>
          <td className="p-2 border">Case 2</td>
          <td className="p-2 border">f(n) = &Theta;(n^c)</td>
          <td className="p-2 border"><span className="font-mono text-gray-900">T(n) = &Theta;(n^c log n)</span></td>
        </tr>
        <tr>
          <td className="p-2 border">Case 3</td>
          <td className="p-2 border">f(n) = &Omega;(n^(c+&epsilon;)) for some &epsilon; &gt; 0</td>
          <td className="p-2 border"><span className="font-mono text-gray-900">T(n) = &Theta;(f(n))</span></td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Examples</h2>
    <table className="min-w-full border border-gray-300 text-left mt-3">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Algorithm</th>
          <th className="p-2 border">Recurrence</th>
          <th className="p-2 border">Case</th>
          <th className="p-2 border">Complexity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border">Merge Sort</td>
          <td className="p-2 border">T(n) = 2T(n/2) + n</td>
          <td className="p-2 border">Case 2</td>
          <td className="p-2 border">&Theta;(n log n)</td>
        </tr>
        <tr>
          <td className="p-2 border">Binary Search</td>
          <td className="p-2 border">T(n) = T(n/2) + 1</td>
          <td className="p-2 border">Case 2</td>
          <td className="p-2 border">&Theta;(log n)</td>
        </tr>
        <tr>
          <td className="p-2 border">Strassen</td>
          <td className="p-2 border">T(n) = 7T(n/2) + n&sup2;</td>
          <td className="p-2 border">Case 1</td>
          <td className="p-2 border">&Theta;(n^2.81)</td>
        </tr>
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
        <tr><td className="p-2 border">1</td><td className="p-2 border">Solve T(n) = 4T(n/2) + n using Master Theorem</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">Solve T(n) = 2T(n/2) + n&sup2;</td></tr>
      </tbody>
    </table>
  </div>
);

export default MasterTheorem;
