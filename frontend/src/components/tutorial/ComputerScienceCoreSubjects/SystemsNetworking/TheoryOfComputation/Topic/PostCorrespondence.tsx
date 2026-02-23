import React from 'react';

const PostCorrespondence: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Post's Correspondence Problem</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Post's Correspondence Problem (PCP) is an important undecidable problem that doesn't directly
      involve Turing Machines. It's useful for proving undecidability of problems in formal languages,
      compilers, and other areas of computer science.
    </p>
    <h2 className="text-3xl font-bold mt-8">Problem Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Post's Correspondence Problem (PCP):

Given: A set of dominoes (pairs of strings)
       {(t₁, b₁), (t₂, b₂), ..., (tₙ, bₙ)}
       where tᵢ is the "top" and bᵢ is the "bottom"

Question: Is there a sequence of indices i₁, i₂, ..., iₖ such that:
         t_{i₁} t_{i₂} ... t_{iₖ} = b_{i₁} b_{i₂} ... b_{iₖ}

In other words: Can we arrange dominoes so top string = bottom string?

Note:
- Indices can repeat
- At least one domino must be used
- Order matters`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Example with solution:

Dominoes:
  [a]   [ab]   [bba]
  [aab] [b]    [aa]
   1      2      3

Solution: Use dominoes 1, 3, 2, 3

  Top:    a  + bba + ab + bba = abbaabbba
  Bottom: aab + aa + b  + aa  = abbaabbba ✓

Example without solution:

Dominoes:
  [ab]   [a]
  [a]    [ba]

No sequence makes top = bottom.
(Can be proved but takes work)`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Undecidability Proof Sketch</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`PCP is undecidable.

Proof idea: Reduce from A_TM

Given TM M and input w:
- Construct dominoes that encode M's computation
- Top strings encode computation steps
- Bottom strings verify correct transitions

The dominoes match iff M accepts w.

Since A_TM is undecidable, so is PCP.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Applications of PCP</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>CFG ambiguity:</strong> Is CFG G ambiguous? (reduce from PCP)</li>
      <li><strong>CFG equivalence:</strong> Do G1 and G2 generate same language?</li>
      <li><strong>Type checking:</strong> Some type inference problems</li>
      <li><strong>Program verification:</strong> Certain property checking</li>
    </ul>
    <h2 className="text-3xl font-bold mt-8">Variants</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Modified PCP (MPCP):
- First domino must be used first
- Still undecidable
- Often easier to reduce to

Bounded PCP:
- Limited number of dominoes can be used
- Decidable (exponential time)

Binary PCP:
- Alphabet size = 2
- Still undecidable`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>PCP: Match top and bottom strings using dominoes</li>
        <li>PCP is undecidable (reduction from A_TM)</li>
        <li>Useful for proving other problems undecidable</li>
        <li>CFG ambiguity reduces to PCP</li>
      </ul>
    </div>
  </div>
);
export default PostCorrespondence;
