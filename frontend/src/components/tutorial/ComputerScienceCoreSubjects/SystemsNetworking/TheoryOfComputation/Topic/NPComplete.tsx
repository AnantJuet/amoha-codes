import React from 'react';

const NPComplete: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">NP-Completeness</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      NP-complete problems are the hardest problems in NP. If any NP-complete problem can be solved
      in polynomial time, then ALL problems in NP can be, proving P = NP. They represent the
      frontier of computational tractability.
    </p>
    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A language L is NP-complete if:

1. L ∈ NP (verifiable in polynomial time)

2. L is NP-hard: Every language A ∈ NP
   polynomial-time reduces to L
   (A ≤_p L for all A ∈ NP)

NP-complete = hardest problems in NP

Key property:
If ANY NP-complete problem is in P, then P = NP.
If P ≠ NP, then NO NP-complete problem is in P.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Polynomial-Time Reduction</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A ≤_p B (A poly-time reduces to B):

There exists polynomial-time computable f such that:
w ∈ A ⟺ f(w) ∈ B

Properties:
- If A ≤_p B and B ∈ P, then A ∈ P
- If A ≤_p B and A is NP-hard, then B is NP-hard
- Transitive: A ≤_p B and B ≤_p C implies A ≤_p C

To prove L is NP-complete:
1. Show L ∈ NP
2. Reduce a known NP-complete problem to L`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Classic NP-Complete Problems</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Famous NP-complete problems:

SAT - Boolean Satisfiability (Cook's theorem)
3-SAT - SAT with 3 literals per clause
CLIQUE - Does graph have k-clique?
VERTEX-COVER - Can k vertices cover all edges?
INDEPENDENT-SET - Does graph have independent set of size k?
HAMILTONIAN-PATH/CYCLE
SUBSET-SUM - Does subset sum to target?
KNAPSACK (decision version)
3-COLORING - Can graph be colored with 3 colors?
TRAVELING-SALESMAN (decision version)
SET-COVER
INTEGER-PROGRAMMING`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Reduction Chain Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Cook-Levin → many reductions:

SAT
 │
 └→ 3-SAT
      │
      ├→ CLIQUE
      │    └→ INDEPENDENT-SET
      │         └→ VERTEX-COVER
      │
      └→ HAMPATH
           └→ HAMCYCLE
                └→ TSP

Each arrow is a polynomial-time reduction.
All these problems are equally hard (up to polynomial factors).`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>NP-complete = in NP and NP-hard</li>
        <li>Hardest problems in NP</li>
        <li>One in P implies all in P (P = NP)</li>
        <li>SAT was the first proven NP-complete</li>
      </ul>
    </div>
  </div>
);
export default NPComplete;
