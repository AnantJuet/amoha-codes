import React from 'react';

const PDAAcceptance: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">PDA Acceptance Modes</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Pushdown Automata can accept strings in two different ways: by final state or by empty stack.
      Both methods are equivalent in power - any language accepted by one method can be accepted by the other.
    </p>
    <h2 className="text-3xl font-bold mt-8">Two Acceptance Modes</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`1. Acceptance by Final State
   - String accepted if PDA reaches a final state (q ∈ F)
   - After consuming all input
   - Stack contents don't matter
   - L(M) = {w | (q0, w, Z0) ⊢* (qf, ε, γ), qf ∈ F}

2. Acceptance by Empty Stack
   - String accepted if stack becomes empty
   - After consuming all input
   - No final states needed
   - N(M) = {w | (q0, w, Z0) ⊢* (q, ε, ε)}`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Comparison</h2>
    <table className="min-w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100 text-gray-900">
        <tr>
          <th className="border border-gray-300 px-4 py-2">Aspect</th>
          <th className="border border-gray-300 px-4 py-2">Final State</th>
          <th className="border border-gray-300 px-4 py-2">Empty Stack</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Acceptance condition</td>
          <td className="border border-gray-300 px-4 py-2">Reach state in F</td>
          <td className="border border-gray-300 px-4 py-2">Stack is empty</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Stack at acceptance</td>
          <td className="border border-gray-300 px-4 py-2">Can be anything</td>
          <td className="border border-gray-300 px-4 py-2">Must be empty</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Final states needed</td>
          <td className="border border-gray-300 px-4 py-2">Yes</td>
          <td className="border border-gray-300 px-4 py-2">No (F = ∅)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Power</td>
          <td className="border border-gray-300 px-4 py-2">Same</td>
          <td className="border border-gray-300 px-4 py-2">Same</td>
        </tr>
      </tbody>
    </table>
    <h2 className="text-3xl font-bold mt-8">Equivalence Theorem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Theorem: For every PDA M accepting by final state,
there exists a PDA M' accepting by empty stack such that L(M) = N(M'),
and vice versa.

Conversion: Final State → Empty Stack
- Add transitions to pop entire stack when in final state

Conversion: Empty Stack → Final State
- Add new bottom marker
- Add transitions to accept when original Z0 is exposed`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Two modes: final state and empty stack</li>
        <li>Both modes are equivalent in power</li>
        <li>Can convert between modes</li>
        <li>Choose based on convenience for the problem</li>
      </ul>
    </div>
  </div>
);
export default PDAAcceptance;
