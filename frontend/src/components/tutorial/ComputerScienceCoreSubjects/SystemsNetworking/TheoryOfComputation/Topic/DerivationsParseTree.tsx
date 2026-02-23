import React from 'react';

const DerivationsParseTree: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Derivations and Parse Trees</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Derivations show how strings are generated from a grammar, while parse trees provide a visual representation
      of the derivation structure. Both are essential for understanding syntax analysis in compilers.
    </p>

    <h2 className="text-3xl font-bold mt-8">Derivations</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A derivation is a sequence of rule applications from start symbol to string.

Notation:
- alpha => beta means "alpha derives beta in one step"
- alpha =>* beta means "alpha derives beta in zero or more steps"
- alpha =>+ beta means "alpha derives beta in one or more steps"

Example Grammar: E -> E + E | E * E | (E) | id

Derivation of "id + id * id":
E => E + E => id + E => id + E * E => id + id * E => id + id * id`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parse Trees</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A parse tree is a tree representation of a derivation.

Properties:
- Root is the start symbol
- Internal nodes are non-terminals
- Leaves are terminals (or epsilon)
- Children of a node represent right side of a production

Example parse tree for "id + id":
        E
       /|\
      E + E
      |   |
     id  id

Reading leaves left-to-right gives the derived string.`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Leftmost vs Rightmost Derivation</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Leftmost Derivation</th>
            <th className="p-3 border">Rightmost Derivation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Always replace leftmost non-terminal</td>
            <td className="p-3 border">Always replace rightmost non-terminal</td>
          </tr>
          <tr>
            <td className="p-3 border">Used in top-down parsing</td>
            <td className="p-3 border">Used in bottom-up parsing</td>
          </tr>
          <tr>
            <td className="p-3 border">E =&gt; E+E =&gt; id+E =&gt; id+id</td>
            <td className="p-3 border">E =&gt; E+E =&gt; E+id =&gt; id+id</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Relationship Between Derivations and Parse Trees</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Each parse tree corresponds to many derivations (different orders)</li>
      <li>Each parse tree has exactly one leftmost derivation</li>
      <li>Each parse tree has exactly one rightmost derivation</li>
      <li>Different derivations may produce the same parse tree</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Derivations show step-by-step string generation</li>
        <li>Parse trees visualize the derivation structure</li>
        <li>Leftmost derivation expands leftmost non-terminal first</li>
        <li>Rightmost derivation expands rightmost non-terminal first</li>
        <li>Parse trees are unique for unambiguous grammars</li>
      </ul>
    </div>
  </div>
);

export default DerivationsParseTree;
