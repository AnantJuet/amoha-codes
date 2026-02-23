import React from 'react';

const PDAEmptyStack: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">PDA Acceptance by Empty Stack</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      In empty stack acceptance, a PDA accepts a string when the stack becomes completely empty after
      consuming all input. The final state is irrelevant - only the stack emptiness matters.
    </p>
    <h2 className="text-3xl font-bold mt-8">Formal Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Language accepted by empty stack:
N(M) = {w ∈ Σ* | (q0, w, Z0) ⊢* (q, ε, ε)}

Conditions:
1. Start in initial state q0 with initial stack Z0
2. Consume entire input string w
3. Stack must be completely empty
4. End state q can be any state (F is ignored)`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Example: L = {"{"} a^n b^n | n {">="} 0 {"}"}</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`PDA M = ({q0, q1}, {a, b}, {A, Z0}, δ, q0, Z0, ∅)

Transitions:
δ(q0, ε, Z0) = {(q0, ε)}      // Accept empty string
δ(q0, a, Z0) = {(q0, AZ0)}    // First a: push A
δ(q0, a, A) = {(q0, AA)}      // More a's: push A
δ(q0, b, A) = {(q1, ε)}       // First b: pop A
δ(q1, b, A) = {(q1, ε)}       // More b's: pop A
δ(q1, ε, Z0) = {(q1, ε)}      // Pop Z0 to empty stack

Trace for "aabb":
(q0, aabb, Z0) ⊢ (q0, abb, AZ0)
              ⊢ (q0, bb, AAZ0)
              ⊢ (q1, b, AZ0)
              ⊢ (q1, ε, Z0)
              ⊢ (q1, ε, ε) ✓ Accepted (stack empty)`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Converting Final State to Empty Stack</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Given PDA M accepting by final state, construct M' accepting by empty stack:

1. Add new initial state q0' and new bottom marker X0
2. Add transition: δ'(q0', ε, X0) = {(q0, Z0X0)}
3. Add new state qe (empty state)
4. For each final state qf ∈ F:
   Add δ'(qf, ε, any) = {(qe, ε)}
5. Add δ'(qe, ε, any) = {(qe, ε)} to empty the stack`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Advantages of Empty Stack Acceptance</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>No need to define or track final states</li>
      <li>Simpler specification in some cases</li>
      <li>Natural for matching/counting problems</li>
      <li>Stack directly reflects remaining work</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Accept when stack is empty after reading all input</li>
        <li>Final states F are not used (can be empty)</li>
        <li>Natural for counting and matching languages</li>
        <li>Equivalent to final state acceptance in power</li>
      </ul>
    </div>
  </div>
);
export default PDAEmptyStack;
