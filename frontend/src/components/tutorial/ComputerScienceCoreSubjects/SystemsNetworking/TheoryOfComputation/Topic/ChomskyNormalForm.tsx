import React from 'react';

const ChomskyNormalForm: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Chomsky Normal Form (CNF)</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Chomsky Normal Form is a restricted form of CFG where every production is either A -&gt; BC (two non-terminals)
      or A -&gt; a (single terminal). CNF is useful for parsing algorithms like CYK.
    </p>
    <h2 className="text-3xl font-bold mt-8">CNF Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A CFG is in Chomsky Normal Form if every production is:
1. A -> BC (exactly two non-terminals)
2. A -> a (exactly one terminal)
3. S -> epsilon (only if epsilon in L(G), and S doesn't appear on RHS)

Every CFG can be converted to an equivalent CNF.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Conversion Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Step 1: Add new start symbol if needed
Step 2: Eliminate epsilon productions
Step 3: Eliminate unit productions
Step 4: Replace terminals in mixed productions with new variables
Step 5: Break long productions (more than 2 symbols) into binary`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>CNF: A -&gt; BC or A -&gt; a only</li>
        <li>Used in CYK parsing algorithm</li>
        <li>Any CFG can be converted to CNF</li>
        <li>May increase grammar size but preserves language</li>
      </ul>
    </div>
  </div>
);
export default ChomskyNormalForm;
