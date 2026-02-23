import React from 'react';

const PDAtoCFG: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Converting PDA to CFG</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Every pushdown automaton can be converted to an equivalent context-free grammar. Combined with
      the CFG to PDA conversion, this proves that CFGs and PDAs define exactly the same class of languages.
    </p>
    <h2 className="text-3xl font-bold mt-8">Conversion Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Given PDA M = (Q, Σ, Γ, δ, q0, Z0, ∅) accepting by empty stack,
construct CFG G = (V, Σ, R, S):

Non-terminals V:
- S (start symbol)
- [qXp] for all q, p ∈ Q and X ∈ Γ

The non-terminal [qXp] generates all strings that:
- Take M from state q to state p
- While popping X from the stack

Productions R:
1. S → [q0 Z0 p] for all p ∈ Q

2. For each δ(q, a, X) containing (r, Y1Y2...Yk):
   [qXs] → a[rY1s1][s1Y2s2]...[sk-1Yks]
   for all combinations s1, s2, ..., sk-1, s ∈ Q

3. For each δ(q, a, X) containing (r, ε):
   [qXr] → a`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`PDA for {a^n b^n}:
δ(q, a, Z) = {(q, AZ)}
δ(q, a, A) = {(q, AA)}
δ(q, b, A) = {(q, ε)}
δ(q, ε, Z) = {(q, ε)}

States: Q = {q}
Stack alphabet: Γ = {Z, A}

CFG Productions (simplified):
S → [qZq]
[qZq] → ε                    // from δ(q, ε, Z)
[qZq] → a[qAq][qZq]         // from δ(q, a, Z)
[qAq] → a[qAq][qAq]         // from δ(q, a, A)
[qAq] → b                   // from δ(q, b, A)

Simplified equivalent:
S → aSb | ε`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Complexity Considerations</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Number of non-terminals: O(|Q|² × |Γ|)</li>
      <li>Can produce many productions</li>
      <li>Resulting grammar may have useless symbols</li>
      <li>Simplification often possible after conversion</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Any PDA can be converted to an equivalent CFG</li>
        <li>Non-terminals represent state-symbol-state triples</li>
        <li>Combined with CFG→PDA: L(CFG) = L(PDA)</li>
        <li>Proves CFLs are exactly the PDA-recognizable languages</li>
      </ul>
    </div>
  </div>
);
export default PDAtoCFG;
