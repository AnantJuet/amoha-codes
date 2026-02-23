import React from 'react';

const PDAFinalState: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">PDA Acceptance by Final State</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      In final state acceptance, a PDA accepts a string if it reaches an accepting state after consuming
      all input. The stack contents at the time of acceptance are irrelevant - only the state matters.
    </p>
    <h2 className="text-3xl font-bold mt-8">Formal Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Language accepted by final state:
L(M) = {w ∈ Σ* | (q0, w, Z0) ⊢* (qf, ε, γ) where qf ∈ F}

Conditions:
1. Start in initial state q0 with initial stack Z0
2. Consume entire input string w
3. End in some final state qf ∈ F
4. Stack can contain anything (γ ∈ Γ*)`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Example: L = {"{"} a^n b^n | n {">="} 0 {"}"}</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`PDA M = ({q0, q1, qf}, {a, b}, {A, Z0}, δ, q0, Z0, {qf})

Transitions:
δ(q0, a, Z0) = {(q0, AZ0)}    // First a: push A
δ(q0, a, A) = {(q0, AA)}      // More a's: push A
δ(q0, b, A) = {(q1, ε)}       // First b: pop A
δ(q1, b, A) = {(q1, ε)}       // More b's: pop A
δ(q1, ε, Z0) = {(qf, Z0)}     // All b's matched: accept

Trace for "aabb":
(q0, aabb, Z0) ⊢ (q0, abb, AZ0)
              ⊢ (q0, bb, AAZ0)
              ⊢ (q1, b, AZ0)
              ⊢ (q1, ε, Z0)
              ⊢ (qf, ε, Z0) ✓ Accepted`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Advantages of Final State Acceptance</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>More intuitive - similar to DFA/NFA acceptance</li>
      <li>Easier to visualize and understand</li>
      <li>Stack can retain useful information after accepting</li>
      <li>Natural for many parsing applications</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Accept when reaching a final state after reading all input</li>
        <li>Stack contents are irrelevant for acceptance</li>
        <li>Requires F ≠ ∅ (at least one final state)</li>
        <li>Equivalent to empty stack acceptance in power</li>
      </ul>
    </div>
  </div>
);
export default PDAFinalState;
