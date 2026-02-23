import React from 'react';

const TuringReducibility: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Turing Reducibility</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Turing reducibility (also called oracle reduction) is a more powerful form of reduction than
      mapping reduction. It allows a TM to use another language as an "oracle" - a black box that
      instantly answers membership queries.
    </p>
    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Turing Reducibility: A ≤_T B

A is Turing reducible to B if there exists an oracle TM M^B
that decides A using oracle for B.

Oracle TM M^B:
- Has special "query" tape and states
- Can write w on query tape and ask "is w ∈ B?"
- Gets instant answer (yes/no)
- Can make multiple queries

A ≤_T B means:
"A is decidable if B is decidable"
"B is at least as hard as A"`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Mapping vs Turing Reduction</h2>
    <table className="min-w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100 text-gray-900">
        <tr>
          <th className="border border-gray-300 px-4 py-2">Aspect</th>
          <th className="border border-gray-300 px-4 py-2">Mapping (≤_m)</th>
          <th className="border border-gray-300 px-4 py-2">Turing (≤_T)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Oracle queries</td>
          <td className="border border-gray-300 px-4 py-2">Exactly one</td>
          <td className="border border-gray-300 px-4 py-2">Any number</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Answer usage</td>
          <td className="border border-gray-300 px-4 py-2">Direct (same as oracle)</td>
          <td className="border border-gray-300 px-4 py-2">Can be negated/combined</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Strength</td>
          <td className="border border-gray-300 px-4 py-2">Weaker</td>
          <td className="border border-gray-300 px-4 py-2">Stronger</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">If A ≤ B</td>
          <td className="border border-gray-300 px-4 py-2">A ≤_T B also</td>
          <td className="border border-gray-300 px-4 py-2">A ≤_m B maybe not</td>
        </tr>
      </tbody>
    </table>
    <h2 className="text-3xl font-bold mt-8">Key Theorem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Theorem: A ≤_T B iff A' ≤_T B

If you can decide A using oracle B,
you can also decide A's complement using oracle B.
(Just negate the final answer!)

This is NOT true for mapping reduction:
A ≤_m B does NOT imply A' ≤_m B

Example:
- A_TM ≤_T HALT (can use HALT oracle to decide A_TM)
- A_TM' ≤_T HALT (can negate the answer)
- But A_TM' is NOT ≤_m HALT (different RE/non-RE classes)`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Turing Degrees</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Turing Degree: Equivalence class under ≤_T

A ≡_T B iff A ≤_T B and B ≤_T A

Degrees form a hierarchy:
- Degree 0: Decidable languages
- Degree 0': Halting problem and equivalents
- Higher degrees exist (Post's theorem)

The structure of Turing degrees is very complex!`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Turing reduction: use oracle for multiple queries</li>
        <li>A ≤_m B implies A ≤_T B, but not vice versa</li>
        <li>A ≤_T B iff A' ≤_T B (closed under complement)</li>
        <li>Turing degrees form a complex hierarchy</li>
      </ul>
    </div>
  </div>
);
export default TuringReducibility;
