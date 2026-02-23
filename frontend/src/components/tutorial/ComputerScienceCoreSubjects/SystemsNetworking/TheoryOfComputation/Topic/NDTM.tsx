import React from 'react';

const NDTM: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Nondeterministic Turing Machines</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      A Nondeterministic Turing Machine (NTM) can have multiple possible transitions from any
      configuration. It accepts if ANY computation path leads to acceptance. NTMs are equivalent
      in power to deterministic TMs but are important for complexity theory.
    </p>
    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`NTM: M = (Q, Σ, Γ, δ, q0, B, F)

Transition function:
δ: Q × Γ → P(Q × Γ × {L, R})

Each (state, symbol) can have multiple transitions.

Acceptance:
NTM accepts w if there EXISTS a computation path
that leads from initial configuration to accepting state.

(Unlike deterministic TM where path is unique)`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Computation Tree</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`NTM computation forms a tree:

                    initial
                   /   |   \\
                  /    |    \\
               c1     c2     c3
              / \\     |     / \\
             c4  c5   c6   c7  c8
             ↓   ↓    ↓    ↓   ↓
           rej acc  loop  rej acc

Accept if ANY leaf is accepting (c5 or c8)
Reject if ALL paths reject or loop without accepting`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Equivalence to Deterministic TM</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Theorem: For every NTM N, there exists a DTM M such that L(N) = L(M).

Simulation method (3-tape DTM):
Tape 1: Input (never modified)
Tape 2: Simulation workspace
Tape 3: Path description (sequence of choices)

Algorithm:
1. For each possible path (BFS order):
   - Copy input to tape 2
   - Simulate N following path on tape 3
   - If accepts, M accepts
   - If rejects/halts, try next path
2. If all finite paths exhausted without accept, reject

This is exponential slowdown!`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">NTM vs DTM</h2>
    <table className="min-w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100 text-gray-900">
        <tr>
          <th className="border border-gray-300 px-4 py-2">Aspect</th>
          <th className="border border-gray-300 px-4 py-2">DTM</th>
          <th className="border border-gray-300 px-4 py-2">NTM</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Transitions</td>
          <td className="border border-gray-300 px-4 py-2">At most one</td>
          <td className="border border-gray-300 px-4 py-2">Multiple allowed</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Computation</td>
          <td className="border border-gray-300 px-4 py-2">Single path</td>
          <td className="border border-gray-300 px-4 py-2">Tree of paths</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Power</td>
          <td className="border border-gray-300 px-4 py-2">Same</td>
          <td className="border border-gray-300 px-4 py-2">Same</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Efficiency</td>
          <td className="border border-gray-300 px-4 py-2">-</td>
          <td className="border border-gray-300 px-4 py-2">May be exponentially faster?</td>
        </tr>
      </tbody>
    </table>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>NTM can have multiple transitions per configuration</li>
        <li>Accepts if ANY path accepts</li>
        <li>NTM ≡ DTM in computational power</li>
        <li>P vs NP asks about efficiency difference</li>
      </ul>
    </div>
  </div>
);
export default NDTM;
