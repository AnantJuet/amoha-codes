import React from 'react';

const MultiTapeTM: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Multi-tape Turing Machines</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      A multi-tape Turing Machine has multiple tapes, each with its own read/write head. While more
      convenient for designing algorithms, multi-tape TMs are equivalent in power to single-tape TMs.
    </p>
    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`k-tape TM: M = (Q, Σ, Γ, δ, q0, B, F)

Transition function:
δ: Q × Γ^k → Q × Γ^k × {L, R, S}^k

Each transition:
- Reads k symbols (one from each tape)
- Writes k symbols (one to each tape)
- Moves each head independently (L, R, or Stay)

Configuration: (q, tape1, tape2, ..., tapek, pos1, pos2, ..., posk)`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Advantages of Multiple Tapes</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Tape 1: Input (read-only possible)</li>
      <li>Tape 2: Working space (scratch)</li>
      <li>Tape 3: Output (write-only possible)</li>
      <li>Simplifies algorithm design</li>
      <li>Can speed up computations</li>
    </ul>
    <h2 className="text-3xl font-bold mt-8">Example: Palindrome Recognition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Using 2 tapes to check if w = w^R

Tape 1: Input string w
Tape 2: Working tape

Algorithm:
1. Copy w from tape 1 to tape 2
2. Rewind tape 2 head to start
3. Move tape 1 head to end of w
4. Compare: move tape 1 left, tape 2 right
5. If all match, accept; else reject

Much simpler than single-tape palindrome checker!`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Equivalence Theorem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Theorem: Every k-tape TM can be simulated by a single-tape TM.

Simulation method:
- Single tape stores all k tapes separated by #
- Mark head positions with special symbols
- One step of k-tape TM = O(n) steps of 1-tape TM

Single tape: #tape1#tape2#...#tapek#
             [head positions marked]

If k-tape TM runs in time T(n),
single-tape simulation runs in O(T(n)²).`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Multi-tape TM has k independent tapes and heads</li>
        <li>Makes algorithm design easier</li>
        <li>Equivalent in power to single-tape TM</li>
        <li>Simulation has quadratic slowdown</li>
      </ul>
    </div>
  </div>
);
export default MultiTapeTM;
