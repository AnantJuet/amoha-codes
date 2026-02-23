import React from 'react';

const GreibachNormalForm: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Greibach Normal Form (GNF)</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Greibach Normal Form is a restricted CFG where every production starts with a terminal followed by
      zero or more non-terminals. GNF is useful for constructing pushdown automata.
    </p>
    <h2 className="text-3xl font-bold mt-8">GNF Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A CFG is in Greibach Normal Form if every production is:
A -> a B1 B2 ... Bn (n >= 0)

where:
- a is a terminal
- B1, B2, ..., Bn are non-terminals
- S -> epsilon allowed only if S doesn't appear on RHS`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Properties</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Every production consumes exactly one input symbol</li>
      <li>Derivation of string of length n takes exactly n steps</li>
      <li>Easy to construct equivalent PDA</li>
      <li>Every CFG can be converted to GNF</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>GNF: A -&gt; a followed by non-terminals</li>
        <li>Each derivation step consumes one terminal</li>
        <li>Useful for PDA construction</li>
        <li>More complex conversion than CNF</li>
      </ul>
    </div>
  </div>
);
export default GreibachNormalForm;
