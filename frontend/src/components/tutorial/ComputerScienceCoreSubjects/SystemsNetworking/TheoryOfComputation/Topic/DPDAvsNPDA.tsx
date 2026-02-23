import React from 'react';

const DPDAvsNPDA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">DPDA vs NPDA</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Unlike finite automata where DFA and NFA have equal power, Deterministic and Nondeterministic
      PDAs differ in their computational power. NPDAs can recognize strictly more languages than DPDAs.
    </p>
    <h2 className="text-3xl font-bold mt-8">Key Differences</h2>
    <table className="min-w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100 text-gray-900">
        <tr>
          <th className="border border-gray-300 px-4 py-2">Feature</th>
          <th className="border border-gray-300 px-4 py-2">DPDA</th>
          <th className="border border-gray-300 px-4 py-2">NPDA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Transitions</td>
          <td className="border border-gray-300 px-4 py-2">At most one</td>
          <td className="border border-gray-300 px-4 py-2">Multiple allowed</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Languages</td>
          <td className="border border-gray-300 px-4 py-2">DCFL</td>
          <td className="border border-gray-300 px-4 py-2">CFL</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Power</td>
          <td className="border border-gray-300 px-4 py-2">Less powerful</td>
          <td className="border border-gray-300 px-4 py-2">More powerful</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Implementation</td>
          <td className="border border-gray-300 px-4 py-2">Practical</td>
          <td className="border border-gray-300 px-4 py-2">Theoretical</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Complement</td>
          <td className="border border-gray-300 px-4 py-2">Closed</td>
          <td className="border border-gray-300 px-4 py-2">Not closed</td>
        </tr>
      </tbody>
    </table>
    <h2 className="text-3xl font-bold mt-8">Languages in CFL but not DCFL</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Example 1: {ww^R | w ∈ {a, b}*} - Palindromes without marker
- Needs nondeterminism to "guess" the middle
- NPDA can accept, DPDA cannot

Example 2: {a^i b^j | i = j or i = 2j}
- Need to guess which condition to verify
- Requires nondeterminism

Example 3: {a^n b^m c^m | n, m >= 0} ∪ {a^n b^n c^m | n, m >= 0}
- Union of two DCFLs may not be DCFL`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Why the Power Difference?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`For DFA vs NFA:
- Both have finite memory (states only)
- Subset construction works
- Same power

For DPDA vs NPDA:
- Stack gives infinite memory
- Cannot "subset construct" the stack
- Nondeterminism provides essential guessing ability
- DPDA ⊊ NPDA (strict subset)`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>NPDA is strictly more powerful than DPDA</li>
        <li>No subset construction for PDAs</li>
        <li>Palindromes (without marker) need NPDA</li>
        <li>DCFL closed under complement; CFL is not</li>
      </ul>
    </div>
  </div>
);
export default DPDAvsNPDA;
