import React from 'react';

const CFGAmbiguity: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Ambiguity in Context-Free Grammars</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A grammar is ambiguous if some string has more than one parse tree (or equivalently, more than one leftmost derivation).
      Ambiguity causes problems in parsing and must often be resolved for practical applications.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition of Ambiguity</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A CFG G is AMBIGUOUS if there exists a string w in L(G) such that:
- w has two or more distinct parse trees, OR
- w has two or more distinct leftmost derivations, OR
- w has two or more distinct rightmost derivations

Example of ambiguous grammar:
E -> E + E | E * E | id

String "id + id * id" has TWO parse trees:
Tree 1: ((id + id) * id)  - addition first
Tree 2: (id + (id * id))  - multiplication first`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Removing Ambiguity</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Techniques to remove ambiguity:

1. Operator Precedence: Use different non-terminals for different precedence levels
   E -> E + T | T
   T -> T * F | F
   F -> (E) | id

2. Associativity: Use left or right recursion appropriately
   Left associative (a+b+c = (a+b)+c): E -> E + T | T
   Right associative (a^b^c = a^(b^c)): E -> T ^ E | T

3. Dangling Else: Match else with nearest if
   stmt -> matched_stmt | unmatched_stmt
   matched_stmt -> if expr then matched_stmt else matched_stmt | other
   unmatched_stmt -> if expr then stmt | if expr then matched_stmt else unmatched_stmt`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Inherent Ambiguity</h2>
    <p className="leading-relaxed">
      Some context-free languages are inherently ambiguous - every grammar for them is ambiguous.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Example of inherently ambiguous language:
L = {a^i b^j c^k | i = j or j = k}

No unambiguous grammar exists for this language.`}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Ambiguous grammar: some string has multiple parse trees</li>
        <li>Causes problems in semantic interpretation</li>
        <li>Can often be removed by restructuring the grammar</li>
        <li>Some languages are inherently ambiguous</li>
        <li>Determining if a grammar is ambiguous is undecidable</li>
      </ul>
    </div>
  </div>
);

export default CFGAmbiguity;
