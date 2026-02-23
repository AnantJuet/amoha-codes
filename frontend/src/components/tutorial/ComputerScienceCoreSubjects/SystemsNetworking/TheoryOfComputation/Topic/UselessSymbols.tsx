import React from 'react';

const UselessSymbols: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Useless Symbols in CFG</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Useless symbols are non-terminals or terminals that do not contribute to generating any string in the language.
      Removing them simplifies the grammar without changing the language.
    </p>
    <h2 className="text-3xl font-bold mt-8">Types of Useless Symbols</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`1. Non-generating symbols: Cannot derive any terminal string
2. Non-reachable symbols: Cannot be reached from start symbol

A symbol is USEFUL if it is both generating AND reachable.
Otherwise, it is USELESS.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Elimination Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Step 1: Find all generating symbols (can derive terminal strings)
Step 2: Remove non-generating symbols and their productions
Step 3: Find all reachable symbols (reachable from S)
Step 4: Remove non-reachable symbols and their productions

Order matters: generating first, then reachable!`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Useful = generating AND reachable</li>
        <li>Remove non-generating first, then non-reachable</li>
        <li>Simplifies grammar without changing language</li>
      </ul>
    </div>
  </div>
);
export default UselessSymbols;
