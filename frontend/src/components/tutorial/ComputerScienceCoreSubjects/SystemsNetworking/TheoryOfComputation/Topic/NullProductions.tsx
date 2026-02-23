import React from 'react';

const NullProductions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Null (Epsilon) Productions</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      A null production (or epsilon production) is a rule of the form A -&gt; epsilon.
      These can be eliminated except when epsilon is in the language.
    </p>
    <h2 className="text-3xl font-bold mt-8">Elimination Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Step 1: Find all nullable variables
   - A is nullable if A -> epsilon exists
   - A is nullable if A -> B1B2...Bn where all Bi are nullable

Step 2: For each production A -> X1X2...Xn:
   - Add all combinations where nullable Xi are present/absent
   - Don't add A -> epsilon (unless A = S and epsilon in L)

Step 3: Remove all A -> epsilon productions (except S if needed)`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Null production: A -&gt; epsilon</li>
        <li>Find all nullable variables first</li>
        <li>Add combinations with nullables removed</li>
        <li>Only S may have epsilon if epsilon is in L(G)</li>
      </ul>
    </div>
  </div>
);
export default NullProductions;
