import React from 'react';

const LRDerivations: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Leftmost and Rightmost Derivations</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Leftmost and rightmost derivations are special types of derivations that follow a consistent order when expanding
      non-terminals. They are fundamental to parsing algorithms and compiler construction.
    </p>

    <h2 className="text-3xl font-bold mt-8">Leftmost Derivation (LMD)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`In a leftmost derivation, at each step we replace the LEFTMOST non-terminal.

Example Grammar:
E -> E + T | T
T -> T * F | F
F -> (E) | id

Leftmost derivation of "id + id * id":
E =>lm E + T
  =>lm T + T
  =>lm F + T
  =>lm id + T
  =>lm id + T * F
  =>lm id + F * F
  =>lm id + id * F
  =>lm id + id * id`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Rightmost Derivation (RMD)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`In a rightmost derivation, at each step we replace the RIGHTMOST non-terminal.

Rightmost derivation of "id + id * id":
E =>rm E + T
  =>rm E + T * F
  =>rm E + T * id
  =>rm E + F * id
  =>rm E + id * id
  =>rm T + id * id
  =>rm F + id * id
  =>rm id + id * id`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications in Parsing</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Parsing Type</th>
            <th className="p-3 border">Derivation Used</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Top-Down</td>
            <td className="p-3 border">Leftmost</td>
            <td className="p-3 border">Recursive Descent, LL(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Bottom-Up</td>
            <td className="p-3 border">Rightmost (reverse)</td>
            <td className="p-3 border">LR(0), SLR, LALR, LR(1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>LMD always expands the leftmost non-terminal first</li>
        <li>RMD always expands the rightmost non-terminal first</li>
        <li>Both produce the same parse tree for unambiguous grammars</li>
        <li>Top-down parsers build leftmost derivations</li>
        <li>Bottom-up parsers build rightmost derivations in reverse</li>
      </ul>
    </div>
  </div>
);

export default LRDerivations;
