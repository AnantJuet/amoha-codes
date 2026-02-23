import React from 'react';

const DPDA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Deterministic Pushdown Automata (DPDA)</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      A Deterministic PDA (DPDA) is a restricted form of PDA where at each step, there is at most
      one possible move. DPDAs are less powerful than NPDAs but more practical for implementation.
    </p>
    <h2 className="text-3xl font-bold mt-8">DPDA Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A PDA is deterministic if for all q ∈ Q, a ∈ Σ, X ∈ Γ:

1. |δ(q, a, X)| + |δ(q, ε, X)| <= 1

This means:
- At most one transition for any (state, input, stack-top)
- If ε-transition exists, no transition on any input
- No choice = deterministic`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">DPDA vs NPDA Power</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Languages recognized:
Regular ⊂ DCFL ⊂ CFL

DCFL (Deterministic CFL):
- Languages accepted by DPDA
- Proper subset of CFL
- Closed under complement
- NOT closed under union, intersection

Example DCFL: {a^n b^n | n >= 0}
Example CFL but not DCFL: {ww^R | w ∈ {a,b}*}`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">DPDA Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`L = {a^n b^n | n >= 1} - Deterministic

DPDA:
δ(q0, a, Z0) = (q0, AZ0)      // Only one choice
δ(q0, a, A) = (q0, AA)        // Only one choice
δ(q0, b, A) = (q1, ε)         // Switch to matching
δ(q1, b, A) = (q1, ε)         // Continue matching
δ(q1, ε, Z0) = (qf, Z0)       // Accept

Each configuration has exactly one next move.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Properties of DCFLs</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Closed under:</strong> Complement</li>
      <li><strong>Not closed under:</strong> Union, intersection, concatenation, Kleene star</li>
      <li><strong>Every regular language is DCFL</strong></li>
      <li><strong>Prefix-free DCFLs</strong> are accepted by DPDA with empty stack</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>DPDA: at most one move per configuration</li>
        <li>DCFL ⊂ CFL (proper subset)</li>
        <li>DCFLs closed under complement but not union</li>
        <li>Used in practical parser implementations</li>
      </ul>
    </div>
  </div>
);
export default DPDA;
