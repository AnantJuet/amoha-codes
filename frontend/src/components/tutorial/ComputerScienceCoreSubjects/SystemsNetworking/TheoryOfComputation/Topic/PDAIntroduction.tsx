import React from 'react';

const PDAIntroduction: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Introduction to Pushdown Automata</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      A Pushdown Automaton (PDA) is a computational model that extends finite automata with an unlimited stack memory.
      PDAs are more powerful than finite automata and can recognize context-free languages, which include
      programming language syntax, balanced parentheses, and nested structures.
    </p>
    <h2 className="text-3xl font-bold mt-8">What is a PDA?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A PDA is a 7-tuple: M = (Q, Σ, Γ, δ, q0, Z0, F)

Where:
- Q: Finite set of states
- Σ: Input alphabet
- Γ: Stack alphabet
- δ: Transition function (Q × (Σ ∪ {ε}) × Γ → P(Q × Γ*))
- q0: Initial state
- Z0: Initial stack symbol
- F: Set of accepting states`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">PDA vs Finite Automata</h2>
    <table className="min-w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100 text-gray-900">
        <tr>
          <th className="border border-gray-300 px-4 py-2">Feature</th>
          <th className="border border-gray-300 px-4 py-2">Finite Automata</th>
          <th className="border border-gray-300 px-4 py-2">PDA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Memory</td>
          <td className="border border-gray-300 px-4 py-2">No memory</td>
          <td className="border border-gray-300 px-4 py-2">Stack (LIFO)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Languages</td>
          <td className="border border-gray-300 px-4 py-2">Regular</td>
          <td className="border border-gray-300 px-4 py-2">Context-Free</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Equivalent to</td>
          <td className="border border-gray-300 px-4 py-2">Regular expressions</td>
          <td className="border border-gray-300 px-4 py-2">CFGs</td>
        </tr>
      </tbody>
    </table>
    <h2 className="text-3xl font-bold mt-8">Why Use PDAs?</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Recognize nested structures (balanced parentheses)</li>
      <li>Parse programming language syntax</li>
      <li>Implement compilers and interpreters</li>
      <li>Process XML/HTML document structure</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>PDA = Finite Automaton + Stack</li>
        <li>PDAs recognize context-free languages</li>
        <li>Equivalent in power to context-free grammars</li>
        <li>Essential for parsing and compiler design</li>
      </ul>
    </div>
  </div>
);
export default PDAIntroduction;
