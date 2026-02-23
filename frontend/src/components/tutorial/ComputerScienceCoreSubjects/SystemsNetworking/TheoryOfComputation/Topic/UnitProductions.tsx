import React from 'react';

const UnitProductions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Unit Productions</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      A unit production is a production rule of the form A -&gt; B, where both A and B are non-terminals.
      These can be eliminated to simplify the grammar.
    </p>
    <h2 className="text-3xl font-bold mt-8">Elimination Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`For each non-terminal A:
1. Find all B such that A =>* B (unit derivation)
2. For each non-unit production B -> alpha, add A -> alpha
3. Remove all unit productions

Example:
E -> T, T -> F, F -> id | (E)
After elimination:
E -> id | (E)
T -> id | (E)
F -> id | (E)`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Unit production: A -&gt; B (single non-terminal)</li>
        <li>Replace with the non-terminal's actual productions</li>
        <li>Must compute transitive closure of unit derivations</li>
      </ul>
    </div>
  </div>
);
export default UnitProductions;
