import React from 'react';

const CFGIntroduction: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Introduction to Context-Free Grammars</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Context-Free Grammars (CFGs) are a type of formal grammar that can describe languages more complex than regular languages.
      They are fundamental to programming language design, compiler construction, and natural language processing.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Context-Free Grammar?</h2>
    <p className="leading-relaxed">
      A CFG is a set of recursive rewriting rules used to generate patterns of strings. The term "context-free" refers to the
      fact that a non-terminal symbol can be replaced regardless of its surrounding context (neighboring symbols).
    </p>

    <h2 className="text-3xl font-bold mt-8">Formal Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A Context-Free Grammar is a 4-tuple G = (V, T, P, S) where:

V = Finite set of non-terminal symbols (variables)
T = Finite set of terminal symbols (alphabet)
P = Finite set of production rules
S = Start symbol (S is in V)

Production rules have the form:
A -> alpha

where:
- A is a single non-terminal (A in V)
- alpha is a string of terminals and non-terminals (alpha in (V U T)*)

Key restriction: Left side must be a SINGLE non-terminal`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Simple Arithmetic Expressions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Grammar for arithmetic expressions:

G = ({E, T, F}, {+, *, (, ), id}, P, E)

Production rules P:
E -> E + T | T
T -> T * F | F
F -> ( E ) | id

This grammar generates expressions like:
- id
- id + id
- id * id
- (id + id) * id
- id + id * id`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Derivations</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A derivation shows how to generate a string from the start symbol.

Example: Derive "id + id * id"

E => E + T           (E -> E + T)
  => T + T           (E -> T)
  => F + T           (T -> F)
  => id + T          (F -> id)
  => id + T * F      (T -> T * F)
  => id + F * F      (T -> F)
  => id + id * F     (F -> id)
  => id + id * id    (F -> id)

The symbol => means "derives in one step"
The symbol =>* means "derives in zero or more steps"`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Derivations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Leftmost</td>
            <td className="p-3 border">Always expand leftmost non-terminal</td>
            <td className="p-3 border">Top-down parsing</td>
          </tr>
          <tr>
            <td className="p-3 border">Rightmost</td>
            <td className="p-3 border">Always expand rightmost non-terminal</td>
            <td className="p-3 border">Bottom-up parsing</td>
          </tr>
          <tr>
            <td className="p-3 border">Arbitrary</td>
            <td className="p-3 border">Expand any non-terminal</td>
            <td className="p-3 border">General derivation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Context-Free Languages</h2>
    <p className="leading-relaxed">
      A language L is context-free if there exists a CFG G such that L = L(G). Context-free languages include:
    </p>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>All regular languages (CFLs are a superset)</li>
      <li>Languages with balanced parentheses</li>
      <li>{'L = {a^n b^n | n >= 0}'}</li>
      <li>Most programming language syntaxes</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">CFG vs Regular Grammar</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Regular Grammar</th>
            <th className="p-3 border">Context-Free Grammar</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Production form</td>
            <td className="p-3 border">{'A -> aB or A -> a'}</td>
            <td className="p-3 border">{'A -> any string'}</td>
          </tr>
          <tr>
            <td className="p-3 border">Recognizer</td>
            <td className="p-3 border">Finite Automaton</td>
            <td className="p-3 border">Pushdown Automaton</td>
          </tr>
          <tr>
            <td className="p-3 border">Nesting</td>
            <td className="p-3 border">Cannot handle</td>
            <td className="p-3 border">Can handle</td>
          </tr>
          <tr>
            <td className="p-3 border">Example</td>
            <td className="p-3 border">a*b*</td>
            <td className="p-3 border">{'a^n b^n'}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of CFGs</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Programming Languages:</strong> Syntax definition</li>
      <li><strong>Compilers:</strong> Parsing and syntax analysis</li>
      <li><strong>Natural Language Processing:</strong> Sentence structure</li>
      <li><strong>XML/HTML:</strong> Document structure validation</li>
      <li><strong>DNA Sequence Analysis:</strong> Pattern matching</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>CFG is a 4-tuple: variables, terminals, productions, start symbol</li>
        <li>Productions have a single non-terminal on the left side</li>
        <li>Derivations show how to generate strings from the grammar</li>
        <li>CFLs properly contain regular languages</li>
        <li>CFGs can express nested/recursive structures</li>
        <li>Recognized by pushdown automata</li>
      </ul>
    </div>
  </div>
);

export default CFGIntroduction;
