import React from 'react';

const CFGComponents: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Components of Context-Free Grammars</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Context-Free Grammar consists of four essential components that work together to define a language.
      Understanding each component is crucial for designing and analyzing grammars.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Four Components</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`G = (V, T, P, S)

V = Variables (Non-terminals)
T = Terminals
P = Production Rules
S = Start Symbol`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Variables (Non-terminals)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Variables are symbols that can be replaced by other symbols.

Conventions:
- Usually denoted by uppercase letters: A, B, C, S, E, T, F
- Or descriptive names: <expr>, <stmt>, <term>

Properties:
- Finite set
- V and T are disjoint (V intersection T = empty)
- Variables are "placeholders" that get rewritten

Example:
V = {S, A, B}
V = {E, T, F}  (for expression grammar)
V = {<program>, <statement>, <expression>}`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Terminals</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Terminals are the actual symbols that appear in the strings of the language.

Conventions:
- Usually denoted by lowercase letters: a, b, c
- Or actual symbols: +, *, (, ), 0, 1
- Or keywords: if, while, int

Properties:
- Finite set (the alphabet)
- Cannot be rewritten (they are "terminal")
- Form the actual strings of the language

Example:
T = {a, b}
T = {+, *, (, ), id}
T = {if, else, while, {, }, ;, id, num}`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Production Rules</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Productions define how to rewrite variables.

Form: A -> alpha
- A is a single variable (left-hand side)
- alpha is a string of variables and terminals (right-hand side)
- alpha can be epsilon (empty string)

Notations:
A -> alpha | beta    means A -> alpha and A -> beta
A -> epsilon         means A can produce empty string

Examples:
S -> aSb | epsilon   (generates {a^n b^n})
E -> E + T | T       (expression can be sum or term)
F -> ( E ) | id      (factor is parenthesized expr or identifier)`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Start Symbol</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`The start symbol is where all derivations begin.

Properties:
- Must be a variable (S in V)
- Usually denoted as S
- Every derivation starts from S
- L(G) = {w in T* | S =>* w}

Convention:
- Listed first in grammar definition
- Or explicitly stated as start symbol

Example:
If G has start symbol S and S -> aS | b
Then L(G) = {a^n b | n >= 0} = {b, ab, aab, aaab, ...}`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Grammar for balanced parentheses:

G = (V, T, P, S) where:

V = {S}
T = {(, )}
S = S (start symbol)

P = {
  S -> ( S ) S
  S -> epsilon
}

Derivation of "(())()":
S => (S)S => ((S)S)S => (()S)S => (())S => (())(S)S
  => (())()S => (())()`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Summary Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Role</th>
            <th className="p-3 border">Notation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Variables</td>
            <td className="p-3 border">V</td>
            <td className="p-3 border">Rewritable symbols</td>
            <td className="p-3 border">A, B, S, E, T</td>
          </tr>
          <tr>
            <td className="p-3 border">Terminals</td>
            <td className="p-3 border">T</td>
            <td className="p-3 border">Final symbols</td>
            <td className="p-3 border">a, b, +, *, id</td>
          </tr>
          <tr>
            <td className="p-3 border">Productions</td>
            <td className="p-3 border">P</td>
            <td className="p-3 border">Rewrite rules</td>
            <td className="p-3 border">{'A -> alpha'}</td>
          </tr>
          <tr>
            <td className="p-3 border">Start</td>
            <td className="p-3 border">S</td>
            <td className="p-3 border">Initial symbol</td>
            <td className="p-3 border">S (in V)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Variables (V) are rewritable placeholder symbols</li>
        <li>Terminals (T) form the actual strings of the language</li>
        <li>Productions (P) define how to rewrite variables</li>
        <li>Start symbol (S) is where all derivations begin</li>
        <li>V and T must be disjoint sets</li>
        <li>The language L(G) is all terminal strings derivable from S</li>
      </ul>
    </div>
  </div>
);

export default CFGComponents;
