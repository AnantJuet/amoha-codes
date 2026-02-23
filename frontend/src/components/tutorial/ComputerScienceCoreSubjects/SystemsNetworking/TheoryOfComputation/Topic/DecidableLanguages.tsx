import React from 'react';

const DecidableLanguages: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Decidable Languages and Problems</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Many important problems about regular and context-free languages are decidable. Understanding
      which problems are decidable helps us design effective algorithms for language processing,
      compilation, and verification.
    </p>
    <h2 className="text-3xl font-bold mt-8">Decidable Problems for DFAs</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`All these problems are DECIDABLE for DFAs:

1. Acceptance: Is w ∈ L(M)?
   Algorithm: Simulate DFA on w. O(n)

2. Emptiness: Is L(M) = ∅?
   Algorithm: Check if any accepting state is reachable. O(n)

3. Finiteness: Is L(M) finite?
   Algorithm: Check for cycles on paths to accepting states

4. Equivalence: Is L(M1) = L(M2)?
   Algorithm: Check if L(M1 ⊕ M2) = ∅
   (⊕ is symmetric difference)

5. Universality: Is L(M) = Σ*?
   Algorithm: Check if L(M') = ∅`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Decidable Problems for CFGs</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Decidable for CFGs:

1. Acceptance: Is w ∈ L(G)?
   Algorithm: CYK algorithm. O(n³|G|)
   Convert to CNF, use dynamic programming

2. Emptiness: Is L(G) = ∅?
   Algorithm: Find generating non-terminals
   Check if start symbol is generating

3. Finiteness: Is L(G) finite?
   Algorithm: Check for cycles in useful part of grammar

NOT decidable for CFGs:
- Equivalence: Is L(G1) = L(G2)?
- Ambiguity: Is G ambiguous?
- Universality: Is L(G) = Σ*?`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Summary Table</h2>
    <table className="min-w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100 text-gray-900">
        <tr>
          <th className="border border-gray-300 px-4 py-2">Problem</th>
          <th className="border border-gray-300 px-4 py-2">Regular</th>
          <th className="border border-gray-300 px-4 py-2">CFL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Membership</td>
          <td className="border border-gray-300 px-4 py-2">Decidable</td>
          <td className="border border-gray-300 px-4 py-2">Decidable</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Emptiness</td>
          <td className="border border-gray-300 px-4 py-2">Decidable</td>
          <td className="border border-gray-300 px-4 py-2">Decidable</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Finiteness</td>
          <td className="border border-gray-300 px-4 py-2">Decidable</td>
          <td className="border border-gray-300 px-4 py-2">Decidable</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Equivalence</td>
          <td className="border border-gray-300 px-4 py-2">Decidable</td>
          <td className="border border-gray-300 px-4 py-2">Undecidable</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Universality</td>
          <td className="border border-gray-300 px-4 py-2">Decidable</td>
          <td className="border border-gray-300 px-4 py-2">Undecidable</td>
        </tr>
      </tbody>
    </table>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Most problems about regular languages are decidable</li>
        <li>Membership, emptiness, finiteness decidable for CFLs</li>
        <li>Equivalence for CFLs is undecidable</li>
        <li>DFA algorithms are typically more efficient than CFG</li>
      </ul>
    </div>
  </div>
);
export default DecidableLanguages;
