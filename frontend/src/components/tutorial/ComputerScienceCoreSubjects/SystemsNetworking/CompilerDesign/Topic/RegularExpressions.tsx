import React from "react";

const RegularExpressions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Regular Expressions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Regular expressions</strong> (regex) are a powerful notation for specifying patterns
      of strings. In compiler design, they are used to define the lexical structure of tokens.
      Each regular expression describes a <strong>regular language</strong> - a set of strings
      that match the pattern.
    </p>

    <h2 className="text-3xl font-bold mt-8">Formal Definition</h2>
    <p className="leading-relaxed">
      A regular expression over an alphabet Σ is defined inductively:
    </p>
    <ol className="list-decimal list-inside mt-2 space-y-2">
      <li><strong>ε</strong> is a regex denoting {`{ε}`} (empty string)</li>
      <li>For any a ∈ Σ, <strong>a</strong> is a regex denoting {`{a}`}</li>
      <li>If r and s are regex, then <strong>(r|s)</strong> denotes L(r) ∪ L(s) (union)</li>
      <li>If r and s are regex, then <strong>(rs)</strong> denotes L(r)L(s) (concatenation)</li>
      <li>If r is a regex, then <strong>(r)*</strong> denotes (L(r))* (Kleene closure)</li>
    </ol>

    <h2 className="text-3xl font-bold mt-8">Basic Operations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Notation</th>
            <th className="p-3 border">Meaning</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Union</td>
            <td className="p-3 border font-mono text-gray-900">r | s</td>
            <td className="p-3 border">L(r) ∪ L(s)</td>
            <td className="p-3 border font-mono text-gray-900">a|b = {`{a, b}`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Concatenation</td>
            <td className="p-3 border font-mono text-gray-900">rs</td>
            <td className="p-3 border">L(r)L(s)</td>
            <td className="p-3 border font-mono text-gray-900">ab = {`{ab}`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Kleene Star</td>
            <td className="p-3 border font-mono text-gray-900">r*</td>
            <td className="p-3 border">Zero or more</td>
            <td className="p-3 border font-mono text-gray-900">a* = {`{ε, a, aa, ...}`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Positive Closure</td>
            <td className="p-3 border font-mono text-gray-900">r+</td>
            <td className="p-3 border">One or more (rr*)</td>
            <td className="p-3 border font-mono text-gray-900">a+ = {`{a, aa, aaa, ...}`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Optional</td>
            <td className="p-3 border font-mono text-gray-900">r?</td>
            <td className="p-3 border">Zero or one (r|ε)</td>
            <td className="p-3 border font-mono text-gray-900">a? = {`{ε, a}`}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Operator Precedence</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Precedence (highest to lowest):
1. Parentheses ()       - grouping
2. Closure *, +, ?      - repetition
3. Concatenation        - sequencing
4. Union |              - alternation

Example: a | bc*

Parsed as: a | (b(c*))
         = a | (b followed by zero-or-more c's)
         = {a, b, bc, bcc, bccc, ...}

With parentheses: (a|b)c*
         = (either a or b) followed by zero-or-more c's
         = {a, b, ac, bc, acc, bcc, ...}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algebraic Laws</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Regular Expression Algebraic Laws:

Identity:
  r | ∅ = r           (union with empty set)
  r ε = ε r = r       (concatenation with empty string)

Annihilator:
  r ∅ = ∅ r = ∅       (concatenation with empty set)

Commutativity:
  r | s = s | r       (union is commutative)

Associativity:
  (r | s) | t = r | (s | t)
  (rs)t = r(st)

Distributivity:
  r(s | t) = rs | rt
  (s | t)r = sr | tr

Idempotence:
  r | r = r
  r** = r*            (double closure equals single closure)

Closure Properties:
  ε* = ε
  r* = ε | r r*
  r+ = r r* = r* r`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Extended Regular Expressions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Extension</th>
            <th className="p-3 border">Notation</th>
            <th className="p-3 border">Meaning</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Character Class</td>
            <td className="p-3 border font-mono text-gray-900">[abc]</td>
            <td className="p-3 border">a | b | c</td>
          </tr>
          <tr>
            <td className="p-3 border">Range</td>
            <td className="p-3 border font-mono text-gray-900">[a-z]</td>
            <td className="p-3 border">a | b | ... | z</td>
          </tr>
          <tr>
            <td className="p-3 border">Negation</td>
            <td className="p-3 border font-mono text-gray-900">[^abc]</td>
            <td className="p-3 border">Any char except a, b, c</td>
          </tr>
          <tr>
            <td className="p-3 border">Any Character</td>
            <td className="p-3 border font-mono text-gray-900">.</td>
            <td className="p-3 border">Any single character</td>
          </tr>
          <tr>
            <td className="p-3 border">Repetition</td>
            <td className="p-3 border font-mono text-gray-900">{`r{n,m}`}</td>
            <td className="p-3 border">n to m repetitions of r</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Examples for Token Patterns</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Token Patterns:

Identifier:
  letter (letter | digit)*
  where letter = [a-zA-Z_], digit = [0-9]
  Matches: count, _temp, x1, MAX_SIZE

Integer:
  digit+
  Matches: 0, 42, 12345

Signed Integer:
  (+|-)?digit+
  Matches: 42, +42, -42

Float:
  digit+ . digit+
  Matches: 3.14, 0.5, 123.456

Scientific Notation:
  digit+ . digit+ (E|e) (+|-)? digit+
  Matches: 1.5e10, 3.14E-5

String Literal:
  " [^"]* "
  Matches: "hello", "", "abc 123"

Comment (C-style):
  /\\* [^*]* \\*+([^/*][^*]*\\*+)* /
  Matches: /* comment */, /* multi
                           line */`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Regular Expression to DFA</h2>
    <p className="leading-relaxed">
      Regular expressions are converted to finite automata for efficient pattern matching:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Regex → NFA → DFA → Minimized DFA → Scanner

Example: (a|b)*abb

1. Build NFA using Thompson's construction
2. Convert NFA to DFA using subset construction
3. Minimize DFA states
4. Generate scanner code from DFA`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Regular expressions define patterns for tokens</li>
        <li>Three basic operations: union, concatenation, closure</li>
        <li>Operator precedence: *, +, ? {">"} concatenation {">"} |</li>
        <li>Extended notations include character classes and ranges</li>
        <li>Regular expressions are converted to DFA for efficient scanning</li>
      </ul>
    </div>
  </div>
);

export default RegularExpressions;
