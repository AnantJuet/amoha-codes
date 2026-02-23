import React from 'react';

const PDAExamples: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">PDA Examples and Practice</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Let's explore various PDA examples for common context-free languages. These examples demonstrate
      different techniques and patterns used in PDA design.
    </p>
    <h2 className="text-3xl font-bold mt-8">Example 1: Balanced Parentheses</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`L = {w ∈ {(, )}* | w has balanced parentheses}

PDA (empty stack acceptance):
δ(q0, (, Z0) = {(q0, AZ0)}    // First (
δ(q0, (, A) = {(q0, AA)}      // More (
δ(q0, ), A) = {(q0, ε)}       // Match )
δ(q0, ε, Z0) = {(q0, ε)}      // Accept

Example: "(())"
(q0, (()), Z0) ⊢ (q0, ()), AZ0)
              ⊢ (q0, )), AAZ0)
              ⊢ (q0, ), AZ0)
              ⊢ (q0, ε, Z0)
              ⊢ (q0, ε, ε) ✓`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Example 2: Palindromes</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`L = {wcw^R | w ∈ {a, b}*}  (palindromes with center marker)

PDA:
δ(q0, a, Z0) = {(q0, aZ0)}    // Push a
δ(q0, b, Z0) = {(q0, bZ0)}    // Push b
δ(q0, a, a) = {(q0, aa)}
δ(q0, a, b) = {(q0, ab)}
δ(q0, b, a) = {(q0, ba)}
δ(q0, b, b) = {(q0, bb)}
δ(q0, c, any) = {(q1, any)}   // Switch at center
δ(q1, a, a) = {(q1, ε)}       // Match and pop
δ(q1, b, b) = {(q1, ε)}
δ(q1, ε, Z0) = {(qf, Z0)}     // Accept`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Example 3: a^n b^(2n)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`L = {a^n b^(2n) | n >= 0}

PDA:
δ(q0, a, Z0) = {(q0, AAZ0)}   // Push 2 A's per a
δ(q0, a, A) = {(q0, AAA)}     // Push 2 A's
δ(q0, b, A) = {(q1, ε)}       // Pop 1 A per b
δ(q1, b, A) = {(q1, ε)}
δ(q1, ε, Z0) = {(qf, Z0)}     // Accept

Example: "abb"  (n=1, so 1 'a' and 2 'b's)
(q0, abb, Z0) ⊢ (q0, bb, AAZ0)
             ⊢ (q1, b, AZ0)
             ⊢ (q1, ε, Z0)
             ⊢ (qf, ε, Z0) ✓`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Example 4: Equal a's and b's</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`L = {w ∈ {a, b}* | #a(w) = #b(w)}

PDA:
δ(q0, a, Z0) = {(q0, AZ0)}    // a when balanced: push A
δ(q0, b, Z0) = {(q0, BZ0)}    // b when balanced: push B
δ(q0, a, A) = {(q0, AA)}      // a with A's: push A
δ(q0, b, A) = {(q0, ε)}       // b with A's: pop A
δ(q0, a, B) = {(q0, ε)}       // a with B's: pop B
δ(q0, b, B) = {(q0, BB)}      // b with B's: push B
δ(q0, ε, Z0) = {(qf, Z0)}     // Accept when balanced`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Use stack to count or remember symbols</li>
        <li>Push multiple symbols for counting problems</li>
        <li>Palindromes need center marker for determinism</li>
        <li>Different symbols track different counts</li>
      </ul>
    </div>
  </div>
);
export default PDAExamples;
