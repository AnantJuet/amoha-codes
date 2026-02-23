import React from "react";

const SyntaxAnalysisIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Syntax Analysis
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Syntax Analysis</strong>, also called <em>parsing</em>, is the second stage of a
      compiler. It takes the token stream from the lexical analyzer and checks whether the tokens
      are arranged according to the grammar rules of the programming language.
    </p>

    <h2 className="text-3xl font-bold mt-8">Role of Syntax Analyzer</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Token Stream → [Parser] → Parse Tree/AST → [Semantic Analyzer]
                   ↓
            Error Messages`}
      </pre>
    </div>

    <p className="leading-relaxed mt-4">The parser performs:</p>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>Verifies that tokens follow grammatical structure</li>
      <li>Detects and reports syntax errors</li>
      <li>Builds a parse tree or abstract syntax tree (AST)</li>
      <li>Groups tokens into grammatical phrases</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Context-Free Grammar (CFG)</h2>
    <p className="leading-relaxed">
      Syntax analysis uses <strong>Context-Free Grammars</strong> to define the syntax rules.
      A CFG consists of:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Terminals:</strong> Tokens from lexical analyzer</li>
      <li><strong>Non-terminals:</strong> Syntactic variables</li>
      <li><strong>Start symbol:</strong> Special non-terminal</li>
      <li><strong>Productions:</strong> Rules defining structure</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example Grammar for Arithmetic Expressions:

E → E + T | E - T | T
T → T * F | T / F | F
F → ( E ) | id | num

Terminals: +, -, *, /, (, ), id, num
Non-terminals: E, T, F
Start symbol: E`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parse Tree</h2>
    <p className="leading-relaxed">
      A <strong>parse tree</strong> shows the syntactic structure of the input according to the grammar.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Input: id + id * id

Parse Tree:
           E
          /|\\
         E + T
         |   |\\
         T  T * F
         |  |   |
         F  F  id
         |  |
        id id`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Parsers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Direction</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Top-Down</td>
            <td className="p-3 border">Root to leaves</td>
            <td className="p-3 border">Recursive Descent, LL(1)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Bottom-Up</td>
            <td className="p-3 border">Leaves to root</td>
            <td className="p-3 border">LR(0), SLR, LALR, CLR</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Derivation</h2>
    <p className="leading-relaxed">
      A <strong>derivation</strong> is the process of replacing non-terminals with their productions
      to generate a string.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Leftmost Derivation (expand leftmost non-terminal first):
E ⇒ E + T ⇒ T + T ⇒ F + T ⇒ id + T ⇒ id + T * F
  ⇒ id + F * F ⇒ id + id * F ⇒ id + id * id

Rightmost Derivation (expand rightmost non-terminal first):
E ⇒ E + T ⇒ E + T * F ⇒ E + T * id ⇒ E + F * id
  ⇒ E + id * id ⇒ T + id * id ⇒ F + id * id ⇒ id + id * id`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Syntax analysis checks grammatical structure of tokens</li>
        <li>Context-free grammars define language syntax</li>
        <li>Parsers build parse trees from token streams</li>
        <li>Top-down parsers work from root to leaves</li>
        <li>Bottom-up parsers work from leaves to root</li>
      </ul>
    </div>
  </div>
);

export default SyntaxAnalysisIntro;
