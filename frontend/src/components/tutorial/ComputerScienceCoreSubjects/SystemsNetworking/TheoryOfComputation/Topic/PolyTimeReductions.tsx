import React from 'react';

const PolyTimeReductions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Polynomial-Time Reductions</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Polynomial-time reductions are the primary tool for proving NP-completeness and comparing
      problem difficulty. A reduction from A to B shows that B is at least as hard as A, allowing
      us to transfer hardness results between problems.
    </p>
    <h2 className="text-3xl font-bold mt-8">Formal Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Polynomial-Time Many-One Reduction: A ≤_p B

There exists a function f computable in polynomial time such that:
  For all w: w ∈ A ⟺ f(w) ∈ B

Requirements:
1. f is total (defined on all inputs)
2. f is computable in O(n^k) time for some constant k
3. f preserves membership (yes-instance → yes-instance)

Key Properties:
- If A ≤_p B and B ∈ P, then A ∈ P
- If A ≤_p B and A ∉ P, then B ∉ P
- Transitive: A ≤_p B and B ≤_p C implies A ≤_p C`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">How to Construct a Reduction</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`To reduce A to B:

1. Understand both problems thoroughly
2. Map yes-instances of A to yes-instances of B
3. Ensure no-instances of A map to no-instances of B
4. Verify the mapping is polynomial-time computable
5. Prove correctness: w ∈ A ⟺ f(w) ∈ B

Template:
Given instance x of problem A:
  Construct instance y = f(x) of problem B
  Prove: x ∈ A ⟺ y ∈ B

(→) If x ∈ A, show y ∈ B
(←) If y ∈ B, show x ∈ A`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Example: 3-SAT ≤_p CLIQUE</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`3-SAT instance: φ = C₁ ∧ C₂ ∧ ... ∧ C_k
Each clause Cᵢ = (l₁ ∨ l₂ ∨ l₃)

Construct graph G:
- Vertices: One for each literal in each clause
  - Node (i, j) represents j-th literal of clause i

- Edges: Connect (i, j) to (i', j') if:
  - i ≠ i' (different clauses)
  - Literals are not contradictory (not x and ¬x)

Claim: φ is satisfiable ⟺ G has a k-clique

Proof sketch:
- Satisfying assignment → pick one true literal per clause → k-clique
- k-clique → one vertex per clause, consistent → satisfying assignment`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Common Reduction Strategies</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Gadgets:</strong> Small constructions that enforce local constraints</li>
      <li><strong>Variable encoding:</strong> Represent choices as graph/formula elements</li>
      <li><strong>Clause encoding:</strong> Enforce that constraints are satisfied</li>
      <li><strong>Consistency:</strong> Ensure global coherence of local choices</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>A ≤_p B: transform A instances to B instances in poly time</li>
        <li>Preserves yes/no answers</li>
        <li>Tool for proving NP-completeness</li>
        <li>Common patterns: gadgets, encoding variables/clauses</li>
      </ul>
    </div>
  </div>
);
export default PolyTimeReductions;
