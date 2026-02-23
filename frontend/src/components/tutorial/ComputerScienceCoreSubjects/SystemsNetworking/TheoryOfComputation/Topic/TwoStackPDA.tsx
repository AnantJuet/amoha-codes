import React from 'react';

const TwoStackPDA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Two-Stack PDA and Turing Equivalence</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      A two-stack PDA is a pushdown automaton with two independent stacks. Surprisingly, two-stack PDAs
      are equivalent in power to Turing machines, making them capable of recognizing any recursively
      enumerable language.
    </p>
    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Two-Stack PDA: M = (Q, Σ, Γ, δ, q0, Z0, F)

Transition function:
δ: Q × (Σ ∪ {ε}) × Γ × Γ → P(Q × Γ* × Γ*)

Each transition:
- Reads state, input, top of stack 1, top of stack 2
- Outputs new state, replacement for stack 1, replacement for stack 2

Configuration: (q, w, γ1, γ2)
- q: current state
- w: remaining input
- γ1: contents of stack 1
- γ2: contents of stack 2`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Equivalence to Turing Machines</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Simulating a TM tape with two stacks:

Stack 1: tape contents to the LEFT of head
Stack 2: tape contents to the RIGHT of head (including current cell)

Operations:
- Move right: push current cell to stack 1, pop from stack 2
- Move left: push current cell to stack 2, pop from stack 1
- Write: replace top of stack 2

Example tape: ...a b [c] d e...
Stack 1: a b (bottom to top)
Stack 2: c d e (top to bottom)

This simulation proves:
Two-Stack PDA ≡ Turing Machine`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Power Hierarchy</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Adding stacks increases power:

0 stacks: Finite Automata (Regular languages)
1 stack:  PDA (Context-free languages)
2 stacks: Turing Machine equivalent (RE languages)
k stacks: Same as 2 stacks for k >= 2

Key insight: Two stacks can simulate a tape!`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Languages Recognized</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>One-stack PDA:</strong> Context-free languages only</li>
      <li><strong>Two-stack PDA:</strong> All recursively enumerable languages</li>
      <li>Can recognize {"{"} a^n b^n c^n {"}"} (not CFL)</li>
      <li>Can recognize {"{"} ww | w ∈ Σ* {"}"} (not CFL)</li>
      <li>Can simulate any Turing machine computation</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Two-stack PDA = Turing machine in power</li>
        <li>Two stacks simulate a TM tape</li>
        <li>Adding more stacks doesn't increase power beyond 2</li>
        <li>Demonstrates the computational leap from 1 to 2 stacks</li>
      </ul>
    </div>
  </div>
);
export default TwoStackPDA;
