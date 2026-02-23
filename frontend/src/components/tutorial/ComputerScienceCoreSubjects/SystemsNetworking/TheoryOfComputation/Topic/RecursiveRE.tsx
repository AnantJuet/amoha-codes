import React from 'react';

const RecursiveRE: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Recursive and Recursively Enumerable Languages</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Languages can be classified by what Turing Machines can do with them. Recursive languages
      are decidable (TM always halts), while recursively enumerable languages are only recognizable
      (TM may loop on non-members).
    </p>
    <h2 className="text-3xl font-bold mt-8">Definitions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Recursive (Decidable) Language:
- There exists a TM M that decides L
- M halts on ALL inputs
- M accepts w if w ∈ L
- M rejects w if w ∉ L

Recursively Enumerable (RE) Language:
- There exists a TM M that recognizes L
- M accepts w if w ∈ L
- M may reject OR loop if w ∉ L

Relationship:
Recursive ⊂ RE ⊂ All Languages`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Hierarchy</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Language classes (by TM behavior):

All Languages
    │
    ├── Non-RE Languages (no TM recognizes)
    │   Example: complement of halting problem
    │
    └── RE Languages (TM recognizes)
            │
            ├── RE but not Recursive
            │   Example: Halting problem
            │
            └── Recursive Languages (TM decides)
                    │
                    ├── Context-Sensitive
                    │
                    └── Context-Free
                            │
                            └── Regular`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Key Theorem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Theorem: L is recursive iff both L and L' are RE.

Proof idea:
(→) If L is recursive, M decides L.
    Swap accept/reject states → decides L'.
    Both L and L' are RE.

(←) If L and L' both have recognizers M1, M2:
    Run M1 and M2 in parallel on input w.
    If M1 accepts → accept (w ∈ L)
    If M2 accepts → reject (w ∈ L')
    One must accept, so this always halts.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Closure Properties</h2>
    <table className="min-w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100 text-gray-900">
        <tr>
          <th className="border border-gray-300 px-4 py-2">Operation</th>
          <th className="border border-gray-300 px-4 py-2">Recursive</th>
          <th className="border border-gray-300 px-4 py-2">RE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Union</td>
          <td className="border border-gray-300 px-4 py-2">Closed</td>
          <td className="border border-gray-300 px-4 py-2">Closed</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Intersection</td>
          <td className="border border-gray-300 px-4 py-2">Closed</td>
          <td className="border border-gray-300 px-4 py-2">Closed</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Complement</td>
          <td className="border border-gray-300 px-4 py-2">Closed</td>
          <td className="border border-gray-300 px-4 py-2">NOT closed</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Concatenation</td>
          <td className="border border-gray-300 px-4 py-2">Closed</td>
          <td className="border border-gray-300 px-4 py-2">Closed</td>
        </tr>
      </tbody>
    </table>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Recursive = decidable (TM always halts)</li>
        <li>RE = recognizable (TM accepts members)</li>
        <li>L is recursive iff L and L' are both RE</li>
        <li>RE is NOT closed under complement</li>
      </ul>
    </div>
  </div>
);
export default RecursiveRE;
