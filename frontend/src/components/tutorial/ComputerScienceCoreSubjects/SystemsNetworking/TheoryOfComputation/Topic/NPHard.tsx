import React from 'react';

const NPHard: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">NP-Hard Problems</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      NP-hard problems are at least as hard as the hardest problems in NP, but they don't have to
      be in NP themselves. This includes optimization problems, problems with no polynomial-time
      verifiable certificate, and even undecidable problems.
    </p>
    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A problem H is NP-hard if:
  For every A ∈ NP: A ≤_p H

Note: H doesn't need to be in NP!

NP-complete = NP-hard ∩ NP

Comparison:
- NP-hard: At least as hard as NP problems
- NP-complete: Exactly the hardest problems IN NP

                 NP-hard
                /       \\
               /   NP    \\
              /  /    \\  \\
             /  / NP-C \\  \\
            /  |--------|  \\
           /   |   P    |   \\
          /    |________|    \\
         /____________________|`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">NP-Hard but Not NP-Complete</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Examples of NP-hard problems NOT in NP:

1. Halting Problem
   - Undecidable, so not in NP
   - But every NP problem reduces to it

2. Optimization versions of NP-complete problems:
   - "Find the minimum vertex cover" (vs "Is there cover of size k?")
   - Output isn't yes/no, so technically not in NP

3. TQBF (True Quantified Boolean Formulas)
   - PSPACE-complete
   - Harder than NP (unless NP = PSPACE)

4. Counting problems (#SAT)
   - Count satisfying assignments
   - In #P, which contains NP`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Proving NP-Hardness</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`To prove H is NP-hard:

Method: Reduce a known NP-hard problem to H

If we know A is NP-hard:
1. Show A ≤_p H (polynomial-time reduction)
2. Then H is also NP-hard

Don't need to show H ∈ NP for NP-hardness!

Common starting points:
- 3-SAT
- CLIQUE
- VERTEX-COVER
- HAMPATH`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Dealing with NP-Hard Problems</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Approximation algorithms:</strong> Get close to optimal in poly time</li>
      <li><strong>Heuristics:</strong> Often work well in practice (e.g., SAT solvers)</li>
      <li><strong>Special cases:</strong> Restricted inputs may be tractable</li>
      <li><strong>Parameterized algorithms:</strong> Efficient if some parameter is small</li>
      <li><strong>Exponential but practical:</strong> Smart exhaustive search</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>NP-hard: as hard as any NP problem</li>
        <li>NP-complete = NP-hard AND in NP</li>
        <li>Some NP-hard problems aren't even decidable</li>
        <li>Use approximation, heuristics for practical solutions</li>
      </ul>
    </div>
  </div>
);
export default NPHard;
