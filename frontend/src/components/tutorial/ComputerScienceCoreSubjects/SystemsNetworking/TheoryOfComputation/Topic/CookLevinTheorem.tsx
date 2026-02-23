import React from 'react';

const CookLevinTheorem: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Cook-Levin Theorem</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      The Cook-Levin Theorem proves that SAT (Boolean Satisfiability) is NP-complete. This was the
      first NP-completeness proof and established the foundation for the theory of NP-completeness.
      Stephen Cook and Leonid Levin independently proved this in 1971.
    </p>
    <h2 className="text-3xl font-bold mt-8">Theorem Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Cook-Levin Theorem:

SAT is NP-complete.

Where SAT = {φ | φ is a satisfiable Boolean formula}

This means:
1. SAT ∈ NP (easy: assignment is the certificate)
2. Every A ∈ NP reduces to SAT in polynomial time

The hard part is proving (2): any NP problem → SAT.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Proof Idea</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`For any L ∈ NP, reduce L to SAT:

Given: NTM M deciding L in polynomial time p(n)

For input w, create Boolean formula φ_w such that:
  w ∈ L ⟺ φ_w is satisfiable

Encode the computation as variables:
- x_{i,j,s}: cell j contains symbol s at step i
- h_{i,j}: head is at position j at step i
- q_{i,k}: machine is in state k at step i

Create clauses ensuring:
1. Initial configuration matches w
2. Each step follows transition function
3. Exactly one symbol per cell, one state, one head position
4. Final state is accepting`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Significance</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Why Cook-Levin is important:

1. First NP-complete problem
   - Proved such problems exist
   - Opened the field of NP-completeness

2. Shows SAT is "universal" for NP
   - Any NP problem is equivalent to SAT (up to poly factor)
   - SAT solver = universal NP solver

3. Foundation for proving other NP-completeness results
   - Reduce FROM SAT (or 3-SAT) TO new problem
   - Thousands of problems now known NP-complete`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">From SAT to 3-SAT</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`3-SAT: Each clause has exactly 3 literals

SAT ≤_p 3-SAT:

Convert clause (l₁ ∨ l₂ ∨ ... ∨ l_k):

If k = 1: (l₁ ∨ l₁ ∨ l₁)
If k = 2: (l₁ ∨ l₂ ∨ l₂)
If k = 3: (l₁ ∨ l₂ ∨ l₃)
If k > 3: Introduce new variables
  (l₁ ∨ l₂ ∨ y₁)
  (¬y₁ ∨ l₃ ∨ y₂)
  ...
  (¬y_{k-3} ∨ l_{k-1} ∨ l_k)

3-SAT is also NP-complete and often used for reductions.`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>SAT was the first proven NP-complete problem</li>
        <li>Any NP computation can be encoded as a SAT instance</li>
        <li>Enables proving other problems NP-complete via reduction</li>
        <li>3-SAT is equally hard and often easier to reduce from</li>
      </ul>
    </div>
  </div>
);
export default CookLevinTheorem;
