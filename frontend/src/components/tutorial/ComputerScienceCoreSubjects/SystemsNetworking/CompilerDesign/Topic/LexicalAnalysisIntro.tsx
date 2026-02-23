import React from "react";

const LexicalAnalysisIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Lexical Analysis
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Lexical analysis</strong>, also known as <em>scanning</em>, is the first phase of a
      compiler. In this phase, the compiler reads the source program character by character from
      left to right and groups them into meaningful units called <strong>tokens</strong>.
    </p>

    <h2 className="text-3xl font-bold mt-8">Role of Lexical Analyzer</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Source Code → [Lexical Analyzer] → Token Stream → [Parser]
                     ↓
              Symbol Table Updates
                     ↓
              Error Messages`}
      </pre>
    </div>

    <p className="leading-relaxed mt-4">
      The lexical analyzer (scanner) performs the following tasks:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>Reads input characters from the source program</li>
      <li>Groups characters into lexemes (meaningful sequences)</li>
      <li>Produces tokens as output for the parser</li>
      <li>Removes whitespace and comments</li>
      <li>Correlates error messages with line numbers</li>
      <li>Updates the symbol table with identifiers</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Terminology</h2>

    <h3 className="text-2xl font-semibold mt-6">Token</h3>
    <p className="leading-relaxed">
      A <strong>token</strong> is a pair consisting of a token name and an optional attribute value.
      The token name is an abstract symbol representing a kind of lexical unit.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Token format: <token-name, attribute-value>

Examples:
• <KEYWORD, if>
• <IDENTIFIER, count>
• <NUMBER, 42>
• <OPERATOR, +>`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Lexeme</h3>
    <p className="leading-relaxed">
      A <strong>lexeme</strong> is the actual character sequence in the source program that matches
      a pattern for a token.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Pattern</h3>
    <p className="leading-relaxed">
      A <strong>pattern</strong> is a rule that describes the set of lexemes that can represent a
      particular token. Patterns are often specified using regular expressions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Example: Tokenization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Source Code:
    int x = 10;

Tokens Generated:
+----------+--------+------------------+
| Lexeme   | Token  | Description      |
+----------+--------+------------------+
| int      | KEYWORD| Data type        |
| x        | ID     | Identifier       |
| =        | ASSIGN | Assignment op    |
| 10       | NUMBER | Integer literal  |
| ;        | SEMI   | Statement end    |
+----------+--------+------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Token Categories</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Keywords</td>
            <td className="p-3 border">Reserved words with predefined meanings</td>
            <td className="p-3 border font-mono text-gray-900">if, else, for, while, int</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Identifiers</td>
            <td className="p-3 border">Names for variables, functions, etc.</td>
            <td className="p-3 border font-mono text-gray-900">count, sum, main</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Constants</td>
            <td className="p-3 border">Fixed values (literals)</td>
            <td className="p-3 border font-mono text-gray-900">10, 3.14, 'a', "hello"</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Operators</td>
            <td className="p-3 border">Symbols for operations</td>
            <td className="p-3 border font-mono text-gray-900">+, -, *, /, ==, {"<"}</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Punctuation</td>
            <td className="p-3 border">Special symbols for structure</td>
            <td className="p-3 border font-mono text-gray-900">;, ,, (, ), {"{"}, {"}"}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">How Lexical Analyzer Works</h2>
    <ol className="list-decimal list-inside mt-2 space-y-2">
      <li>Read input characters one at a time</li>
      <li>Group characters into lexemes based on patterns</li>
      <li>Match lexemes against token patterns (using DFA)</li>
      <li>Return the corresponding token to the parser</li>
      <li>Skip whitespace and comments</li>
      <li>Report errors for invalid lexemes</li>
    </ol>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Token recognition using DFA:

For identifier pattern: [a-zA-Z][a-zA-Z0-9]*

    ┌─────────────────┐
    │     Start       │
    └────────┬────────┘
             │ letter
             ▼
    ┌─────────────────┐
    │    Accepting    │◄───┐
    │   (Identifier)  │    │ letter or digit
    └────────┬────────┘────┘
             │ other
             ▼
    Return IDENTIFIER token`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Interaction with Parser</h2>
    <p className="leading-relaxed">
      The lexical analyzer and parser work together. The parser calls the lexical analyzer whenever
      it needs the next token. This is called the "pull" model of interaction.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Parser                    Lexical Analyzer
   │                              │
   │── getNextToken() ──────────→│
   │                              │ (reads source,
   │                              │  identifies token)
   │←──── <TOKEN, value> ────────│
   │                              │`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Separate Lexical Analysis?</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>Simplicity:</strong> Separating tokenization simplifies the parser design</li>
      <li><strong>Efficiency:</strong> Specialized techniques can optimize token recognition</li>
      <li><strong>Portability:</strong> Character-handling specifics isolated in one module</li>
      <li><strong>Modularity:</strong> Easier to maintain and modify independently</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Lexical analysis is the first phase of compilation</li>
        <li>It converts source code into a stream of tokens</li>
        <li>Tokens are categorized as keywords, identifiers, operators, etc.</li>
        <li>Regular expressions define patterns for token recognition</li>
        <li>DFAs (Deterministic Finite Automata) implement the scanner</li>
      </ul>
    </div>
  </div>
);

export default LexicalAnalysisIntro;
