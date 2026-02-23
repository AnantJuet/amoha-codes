import React from 'react';

const CFGtoPDA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Converting CFG to PDA</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Every context-free grammar can be converted to an equivalent pushdown automaton. This conversion
      proves that CFGs and PDAs have equal expressive power for defining context-free languages.
    </p>
    <h2 className="text-3xl font-bold mt-8">Conversion Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Given CFG G = (V, Σ, R, S), construct PDA M:

M = ({q}, Σ, V ∪ Σ, δ, q, S, ∅)  (empty stack acceptance)

Transitions:
1. For each production A → α in R:
   δ(q, ε, A) includes (q, α)

2. For each terminal a ∈ Σ:
   δ(q, a, a) = {(q, ε)}

The PDA simulates leftmost derivation:
- Stack holds the sentential form
- Pop non-terminals and push their RHS
- Match terminals with input`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Example Conversion</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`CFG:
S → aSb | ε

PDA M = ({q}, {a, b}, {S, a, b}, δ, q, S, ∅)

Transitions:
δ(q, ε, S) = {(q, aSb), (q, ε)}    // From S productions
δ(q, a, a) = {(q, ε)}              // Match a
δ(q, b, b) = {(q, ε)}              // Match b

Trace for "aabb":
(q, aabb, S) ⊢ (q, aabb, aSb)      // Apply S → aSb
            ⊢ (q, abb, Sb)         // Match a
            ⊢ (q, abb, aSbb)       // Apply S → aSb
            ⊢ (q, bb, Sbb)         // Match a
            ⊢ (q, bb, bb)          // Apply S → ε
            ⊢ (q, b, b)            // Match b
            ⊢ (q, ε, ε) ✓          // Match b, accept`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Single state PDA suffices for any CFG</li>
      <li>All work is done on the stack</li>
      <li>PDA simulates leftmost derivation</li>
      <li>Nondeterminism handles multiple productions</li>
      <li>Empty stack acceptance is natural for this construction</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Any CFG can be converted to an equivalent PDA</li>
        <li>The PDA simulates leftmost derivations</li>
        <li>Only one state needed in the construction</li>
        <li>This proves L(CFG) ⊆ L(PDA)</li>
      </ul>
    </div>
  </div>
);
export default CFGtoPDA;
