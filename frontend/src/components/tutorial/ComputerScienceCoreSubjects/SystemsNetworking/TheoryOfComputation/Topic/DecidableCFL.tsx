import React from 'react';

const DecidableCFL: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Decidability of CFL Problems</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Context-free languages have some decidable problems but fewer than regular languages. The lack
      of closure under complement and intersection makes many problems undecidable for CFLs that
      are decidable for regular languages.
    </p>
    <h2 className="text-3xl font-bold mt-8">Decidable CFL Problems</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`1. Membership: Is w ∈ L(G)?
   Algorithm: CYK (Cocke-Younger-Kasami)
   Complexity: O(n³ × |G|) where n = |w|
   Requires: Convert G to Chomsky Normal Form first

2. Emptiness: Is L(G) = ∅?
   Algorithm: Find generating non-terminals
   - X is generating if X ⇒* w for some terminal string w
   - L(G) is empty iff S is not generating
   Complexity: O(|G|)

3. Finiteness: Is L(G) finite?
   Algorithm:
   - Remove useless symbols
   - Check for cycles in the "derives" relation
   - L is infinite iff useful cycle exists
   Complexity: O(|G|²)

4. Membership in DCFL: Is w ∈ L? (for deterministic CFL)
   Algorithm: Simulate DPDA
   Complexity: O(n)`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">CYK Algorithm Sketch</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`CYK Algorithm for membership:

Input: CNF grammar G, string w = a₁a₂...aₙ
Output: Is w ∈ L(G)?

Table T[i,j] = set of non-terminals that derive aᵢ...aⱼ

Base case (j = i):
  T[i,i] = {A | A → aᵢ is a production}

Inductive case (j > i):
  T[i,j] = {A | A → BC is a production,
                B ∈ T[i,k] and C ∈ T[k+1,j]
                for some i ≤ k < j}

Answer: S ∈ T[1,n] ?

Dynamic programming fills n² cells, each takes O(n) time.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Comparison with Regular Languages</h2>
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
          <td className="border border-gray-300 px-4 py-2">O(n)</td>
          <td className="border border-gray-300 px-4 py-2">O(n³)</td>
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
          <td className="border border-gray-300 px-4 py-2">Universality</td>
          <td className="border border-gray-300 px-4 py-2">Decidable</td>
          <td className="border border-gray-300 px-4 py-2">Undecidable</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Equivalence</td>
          <td className="border border-gray-300 px-4 py-2">Decidable</td>
          <td className="border border-gray-300 px-4 py-2">Undecidable</td>
        </tr>
      </tbody>
    </table>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>CFL membership: decidable via CYK in O(n³)</li>
        <li>CFL emptiness and finiteness: decidable</li>
        <li>CFL equivalence and universality: undecidable</li>
        <li>Fewer decidable problems than regular languages</li>
      </ul>
    </div>
  </div>
);
export default DecidableCFL;
