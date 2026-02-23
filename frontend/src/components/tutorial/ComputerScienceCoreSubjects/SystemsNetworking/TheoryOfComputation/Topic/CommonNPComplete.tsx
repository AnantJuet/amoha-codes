import React from 'react';

const CommonNPComplete: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Common NP-Complete Problems</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Thousands of problems have been proven NP-complete. Understanding the classic ones helps
      recognize NP-completeness in new problems and provides starting points for reductions.
    </p>
    <h2 className="text-3xl font-bold mt-8">Logic Problems</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`SAT: Given Boolean formula φ, is it satisfiable?
     The original NP-complete problem (Cook-Levin)

3-SAT: SAT where each clause has exactly 3 literals
       Often used as starting point for reductions

CIRCUIT-SAT: Given Boolean circuit, is there satisfying input?
             More directly models computation`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Graph Problems</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`CLIQUE: Does graph G have a clique of size k?
        (k vertices all pairwise connected)

INDEPENDENT-SET: Does G have k mutually non-adjacent vertices?
                 Complement of CLIQUE

VERTEX-COVER: Can k vertices cover all edges?
              Complement of INDEPENDENT-SET

HAMILTONIAN-PATH: Does G have a path visiting each vertex once?

HAMILTONIAN-CYCLE: Does G have a cycle visiting each vertex once?

GRAPH-COLORING: Can G be colored with k colors?
                (k >= 3 is NP-complete; k=2 is in P)

LONGEST-PATH: Does G have a simple path of length >= k?`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Numeric/Optimization Problems</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`SUBSET-SUM: Given set S and target t, does subset sum to t?
            Foundation for many number problems

KNAPSACK: Given items with weights/values, can we achieve value V
          with weight <= W? (decision version)

PARTITION: Can set be divided into two equal-sum halves?
           Special case of SUBSET-SUM

BIN-PACKING: Can n items fit in k bins of capacity C?

INTEGER-LINEAR-PROGRAMMING: Does system of linear inequalities
                           have integer solution?`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Traveling Salesman and Variants</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`TSP (Decision): Given cities and distances, is there tour
                of length <= k visiting all cities?

SET-COVER: Given universe U and sets S1...Sn,
           can k sets cover U?

STEINER-TREE: Given graph and required vertices,
              is there tree of weight <= k connecting them?`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Reduction Relationships</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Key reductions:

SAT → 3-SAT → CLIQUE ↔ INDEPENDENT-SET ↔ VERTEX-COVER
            → SUBSET-SUM → PARTITION
            → HAMPATH → TSP
            → 3-COLORING

All equally hard (up to polynomial factors).
Choose starting problem based on structure of target.`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>SAT and 3-SAT are fundamental NP-complete problems</li>
        <li>Graph problems: CLIQUE, VERTEX-COVER, HAMPATH</li>
        <li>Numeric problems: SUBSET-SUM, KNAPSACK</li>
        <li>All NP-complete problems are equivalent up to poly time</li>
      </ul>
    </div>
  </div>
);
export default CommonNPComplete;
