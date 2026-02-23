import React from 'react';

const PDAComponents: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Components of a PDA</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      A Pushdown Automaton consists of several key components that work together to process input strings.
      Understanding each component is essential for designing and analyzing PDAs.
    </p>
    <h2 className="text-3xl font-bold mt-8">The Seven Components</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`PDA = (Q, Σ, Γ, δ, q0, Z0, F)

1. Q (States)
   - Finite set of states
   - Example: Q = {q0, q1, q2, qf}

2. Σ (Input Alphabet)
   - Finite set of input symbols
   - Example: Σ = {a, b, c}

3. Γ (Stack Alphabet)
   - Symbols that can be pushed/popped
   - Example: Γ = {A, B, Z0}
   - Typically Σ ⊆ Γ

4. δ (Transition Function)
   - δ: Q × (Σ ∪ {ε}) × Γ → P(Q × Γ*)
   - Read state, input (or ε), stack top
   - Output: new state, stack string

5. q0 (Initial State)
   - Starting state, q0 ∈ Q

6. Z0 (Initial Stack Symbol)
   - Bottom of stack marker
   - Z0 ∈ Γ

7. F (Final/Accepting States)
   - Set of accepting states
   - F ⊆ Q`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Transition Notation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`δ(q, a, X) = {(p, γ)}

Meaning:
- In state q
- Reading input symbol a (or ε)
- With X on top of stack
- Move to state p
- Replace X with string γ

Examples:
δ(q0, a, Z0) = {(q1, AZ0)}  // Push A
δ(q1, b, A) = {(q1, ε)}     // Pop A
δ(q1, ε, Z0) = {(qf, Z0)}   // Accept`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Stack Operations</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Push:</strong> Replace top with longer string (e.g., X → AX)</li>
      <li><strong>Pop:</strong> Replace top with ε (e.g., X → ε)</li>
      <li><strong>Replace:</strong> Replace top with different symbol (e.g., X → Y)</li>
      <li><strong>No change:</strong> Replace top with itself (e.g., X → X)</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>PDA has 7 components: Q, Σ, Γ, δ, q0, Z0, F</li>
        <li>Stack alphabet Γ includes initial symbol Z0</li>
        <li>Transitions can read input or be ε-transitions</li>
        <li>Stack operations: push, pop, replace</li>
      </ul>
    </div>
  </div>
);
export default PDAComponents;
