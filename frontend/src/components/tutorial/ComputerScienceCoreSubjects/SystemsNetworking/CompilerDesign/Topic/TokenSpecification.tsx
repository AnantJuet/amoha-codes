import React from "react";

const TokenSpecification: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Specification of Tokens
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Tokens are specified using <strong>regular expressions</strong>, which provide a precise
      and concise way to describe the patterns that lexemes must match. Regular expressions
      form the foundation of lexical analyzer specification.
    </p>

    <h2 className="text-3xl font-bold mt-8">Regular Expression Basics</h2>
    <p className="leading-relaxed">
      A regular expression (regex) is built from simpler expressions using a set of defining rules.
      Each regular expression r denotes a language L(r) - the set of strings it describes.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Basic Operations</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Notation</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Union</td>
            <td className="p-3 border font-mono text-gray-900">r | s</td>
            <td className="p-3 border">Either r or s</td>
            <td className="p-3 border font-mono text-gray-900">a | b matches "a" or "b"</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Concatenation</td>
            <td className="p-3 border font-mono text-gray-900">rs</td>
            <td className="p-3 border">r followed by s</td>
            <td className="p-3 border font-mono text-gray-900">ab matches "ab"</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Kleene Closure</td>
            <td className="p-3 border font-mono text-gray-900">r*</td>
            <td className="p-3 border">Zero or more r's</td>
            <td className="p-3 border font-mono text-gray-900">a* matches "", "a", "aa"</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Positive Closure</td>
            <td className="p-3 border font-mono text-gray-900">r+</td>
            <td className="p-3 border">One or more r's</td>
            <td className="p-3 border font-mono text-gray-900">a+ matches "a", "aa", "aaa"</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Optional</td>
            <td className="p-3 border font-mono text-gray-900">r?</td>
            <td className="p-3 border">Zero or one r</td>
            <td className="p-3 border font-mono text-gray-900">a? matches "" or "a"</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Precedence of Operations</h2>
    <ol className="list-decimal list-inside mt-2 space-y-1">
      <li><strong>Kleene closure (*)</strong> - highest precedence</li>
      <li><strong>Concatenation</strong> - middle precedence</li>
      <li><strong>Union (|)</strong> - lowest precedence</li>
    </ol>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example: a | bc*

Parsed as: a | (b(c*))
- c* applies to c only
- bc* means b followed by zero or more c's
- Then union with a

Matches: "a", "b", "bc", "bcc", "bccc", ...`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Character Classes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Notation for sets of characters:

[abc]       - matches a, b, or c
[a-z]       - matches any lowercase letter
[A-Z]       - matches any uppercase letter
[0-9]       - matches any digit
[a-zA-Z]    - matches any letter
[a-zA-Z0-9] - matches any alphanumeric

Negation:
[^abc]      - matches any character except a, b, c
[^0-9]      - matches any non-digit

Special characters:
.           - matches any single character
\\d          - matches any digit (same as [0-9])
\\w          - matches word character [a-zA-Z0-9_]
\\s          - matches whitespace`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Token Specifications</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Common Token Patterns:

Token          Regular Expression              Examples
─────────────────────────────────────────────────────────────
IDENTIFIER     [a-zA-Z_][a-zA-Z0-9_]*         count, _temp, x1
INTEGER        [0-9]+                          42, 100, 0
FLOAT          [0-9]+\\.[0-9]+                  3.14, 2.0
FLOAT_SCI      [0-9]+\\.[0-9]+[eE][+-]?[0-9]+  1.5e10, 2.0E-3
STRING         \"[^\"]*\"                      "hello"
CHAR           \'[^\']\'                       'a', '\\n'
KEYWORD_IF     if                              if
KEYWORD_WHILE  while                           while
RELOP          <|>|<=|>=|==|!=                 <, >=, ==
ASSIGN         =                               =
PLUS           \\+                              +
MINUS          -                               -
MULT           \\*                              *
DIV            /                               /`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Regular Definitions</h2>
    <p className="leading-relaxed">
      Regular definitions give names to regular expressions, allowing complex patterns to be
      built from simpler ones.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Regular Definitions for C Identifiers and Numbers:

letter    → [a-zA-Z_]
digit     → [0-9]
id        → letter (letter | digit)*
digits    → digit+
fraction  → . digits | ε
exponent  → (E (+ | - | ε) digits) | ε
number    → digits fraction exponent

Example matches for 'number':
- 42        (digits only)
- 3.14      (digits.digits)
- 1e10      (digits E digits)
- 2.5e-3    (digits.digits E - digits)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handling Keywords</h2>
    <p className="leading-relaxed">
      Keywords like "if", "while", "for" match the identifier pattern but must be recognized
      as separate tokens. Two approaches:
    </p>

    <h3 className="text-2xl font-semibold mt-6">1. Reserved Word Table</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`1. Match identifier pattern
2. Look up in reserved word table
3. If found, return keyword token
4. Otherwise, return IDENTIFIER token

Reserved Words Table:
┌─────────┬───────────────┐
│ Lexeme  │ Token         │
├─────────┼───────────────┤
│ if      │ KEYWORD_IF    │
│ else    │ KEYWORD_ELSE  │
│ while   │ KEYWORD_WHILE │
│ for     │ KEYWORD_FOR   │
│ return  │ KEYWORD_RETURN│
└─────────┴───────────────┘`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Priority in Pattern Matching</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`List keyword patterns before identifier pattern:

if        → return KEYWORD_IF
else      → return KEYWORD_ELSE
while     → return KEYWORD_WHILE
[a-zA-Z]+ → return IDENTIFIER

First match wins, so "if" matches keyword before identifier`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Tokens are specified using regular expressions</li>
        <li>Basic operations: union (|), concatenation, closure (*)</li>
        <li>Character classes simplify pattern specification</li>
        <li>Regular definitions name and compose patterns</li>
        <li>Keywords can be handled via lookup table or pattern priority</li>
      </ul>
    </div>
  </div>
);

export default TokenSpecification;
