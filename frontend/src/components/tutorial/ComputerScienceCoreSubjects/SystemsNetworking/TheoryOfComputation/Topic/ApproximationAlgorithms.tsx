import React from 'react';

const ApproximationAlgorithms: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Approximation Algorithms</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      For NP-hard optimization problems, we may not find optimal solutions efficiently, but we can
      often find solutions that are provably close to optimal. Approximation algorithms provide
      this guarantee while running in polynomial time.
    </p>
    <h2 className="text-3xl font-bold mt-8">Approximation Ratio</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`An algorithm A is a c-approximation if for all inputs:

For minimization: A(I) ≤ c × OPT(I)
For maximization: A(I) ≥ OPT(I) / c

where c >= 1 is the approximation ratio.

Examples:
- 2-approximation: At most 2× worse than optimal
- (1+ε)-approximation: Within (1+ε) factor

Smaller c is better (closer to optimal).
c = 1 would be optimal (usually NP-hard).`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Example: Vertex Cover</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`2-Approximation for Vertex Cover:

Algorithm:
  C = ∅
  while edges remain:
    Pick arbitrary edge (u, v)
    Add both u and v to C
    Remove all edges incident to u or v
  return C

Analysis:
- Each picked edge contributes 2 to our cover
- But optimal must include at least one endpoint
- So |C| ≤ 2 × |OPT|

This is a 2-approximation.
No known polynomial (2-ε)-approximation!`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Example: Traveling Salesman</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`For metric TSP (triangle inequality holds):

Christofides Algorithm: 1.5-approximation
1. Build minimum spanning tree
2. Find minimum matching on odd-degree vertices
3. Combine to form Eulerian graph
4. Shortcut to get Hamiltonian cycle

For general TSP: No constant approximation exists
                 (unless P = NP)

The metric restriction is crucial!`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Classes of Approximability</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Problems have different approximability:

1. PTAS (Polynomial-Time Approximation Scheme)
   - (1+ε)-approximation for any ε > 0
   - Time may depend badly on ε
   - Example: KNAPSACK

2. FPTAS (Fully PTAS)
   - PTAS with time polynomial in 1/ε
   - Best possible approximation guarantee
   - Example: KNAPSACK (yes, it has FPTAS!)

3. Constant factor approximable
   - Example: VERTEX-COVER (factor 2)

4. No constant approximation
   - Example: General TSP, CLIQUE`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Inapproximability</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>CLIQUE:</strong> No n^(1-ε) approximation unless P = NP</li>
      <li><strong>SET-COVER:</strong> No (1-ε)ln(n) approximation</li>
      <li><strong>TSP:</strong> No constant approximation for general case</li>
      <li>PCP theorem proves many inapproximability results</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Approximation algorithms find near-optimal solutions</li>
        <li>Ratio c means within factor c of optimal</li>
        <li>Some problems have PTAS, others have no constant approx</li>
        <li>PCP theorem proves hardness of approximation</li>
      </ul>
    </div>
  </div>
);
export default ApproximationAlgorithms;
