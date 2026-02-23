import React from 'react';

const CFGSimplification: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Simplification of Context-Free Grammars</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      CFG simplification removes redundant elements from a grammar while preserving the language.
      Simplification is necessary before converting to normal forms like CNF or GNF.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Simplification</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`1. Eliminate Useless Symbols
   - Non-generating symbols (can't derive terminal string)
   - Non-reachable symbols (can't be reached from S)

2. Eliminate Epsilon Productions
   - Productions of form A -> epsilon
   - Except possibly S -> epsilon if epsilon is in L(G)

3. Eliminate Unit Productions
   - Productions of form A -> B (single non-terminal)

Order of elimination matters:
1. First remove epsilon productions
2. Then remove unit productions
3. Finally remove useless symbols`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Method</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Remove epsilon</td>
            <td className="p-3 border">No A -&gt; epsilon</td>
            <td className="p-3 border">Find nullable, add combinations</td>
          </tr>
          <tr>
            <td className="p-3 border">Remove units</td>
            <td className="p-3 border">No A -&gt; B</td>
            <td className="p-3 border">Replace with B's productions</td>
          </tr>
          <tr>
            <td className="p-3 border">Remove useless</td>
            <td className="p-3 border">All symbols useful</td>
            <td className="p-3 border">Find generating, then reachable</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Simplification preserves the language (except possibly epsilon)</li>
        <li>Order of elimination is important</li>
        <li>Required before CNF/GNF conversion</li>
        <li>Makes grammars more efficient for parsing</li>
      </ul>
    </div>
  </div>
);

export default CFGSimplification;
