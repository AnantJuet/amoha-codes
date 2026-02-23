import React from 'react';

const TMComponents: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Components of a Turing Machine</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      A Turing Machine has several key components that work together to perform computation.
      Understanding each component is essential for designing TMs and analyzing their behavior.
    </p>
    <h2 className="text-3xl font-bold mt-8">The Seven Components</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`TM = (Q, Σ, Γ, δ, q0, B, F)

1. Q (States)
   - Finite set of states
   - Includes initial, accepting, and rejecting states
   - Example: Q = {q0, q1, q2, qa, qr}

2. Σ (Input Alphabet)
   - Symbols that can appear in input
   - Does NOT include blank symbol
   - Example: Σ = {0, 1}

3. Γ (Tape Alphabet)
   - All symbols that can appear on tape
   - Includes input alphabet and blank
   - Σ ⊂ Γ, B ∈ Γ
   - Example: Γ = {0, 1, X, Y, B}

4. δ (Transition Function)
   - δ: Q × Γ → Q × Γ × {L, R}
   - Determines: next state, symbol to write, head movement
   - Undefined for accepting/rejecting states

5. q0 (Initial State)
   - Starting state
   - q0 ∈ Q

6. B (Blank Symbol)
   - Fills empty tape cells
   - B ∈ Γ, B ∉ Σ

7. F (Final/Accepting States)
   - States where TM accepts
   - F ⊆ Q`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Transition Notation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`δ(q, a) = (p, b, D)

Meaning:
- In state q, reading symbol a
- Write symbol b
- Move head in direction D (L or R)
- Enter state p

Example:
δ(q0, 0) = (q1, X, R)
"In q0 reading 0: write X, move right, go to q1"

Alternative notation:
(q0, 0) → (q1, X, R)
or
q0: 0 → X, R, q1`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Configuration and Computation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Configuration: αqβ
- α: tape contents to left of head
- q: current state
- β: tape contents from head position to right

Computation step: αqβ ⊢ α'q'β'
A sequence of configurations forms a computation.

Example:
q0 0 1 1 ⊢ X q1 1 1 ⊢ X 1 q1 1 ⊢ ...`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>TM has 7 components: Q, Σ, Γ, δ, q0, B, F</li>
        <li>Tape alphabet Γ includes blank B</li>
        <li>Transitions specify write, move, and next state</li>
        <li>Configuration captures complete machine state</li>
      </ul>
    </div>
  </div>
);
export default TMComponents;
