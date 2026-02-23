import React from 'react';

const REOperators: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Regular Expression Operators</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Regular expression operators are the building blocks for constructing complex patterns from simpler ones.
      Understanding these operators and their properties is essential for working with regular expressions effectively.
    </p>

    <h2 className="text-3xl font-bold mt-8">Core Operators</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Union (Alternation)</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Symbol: + or | (pipe)

Definition: L(R1 + R2) = L(R1) union L(R2)

The union of two regular expressions matches any string
that matches either expression.

Examples:
- a + b matches "a" or "b"
- cat + dog matches "cat" or "dog"
- (ab + cd) matches "ab" or "cd"

Properties:
- Commutative: R + S = S + R
- Associative: (R + S) + T = R + (S + T)
- Identity: R + empty = R`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Concatenation</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Symbol: . (dot) or implicit (juxtaposition)

Definition: L(R1.R2) = {xy | x in L(R1) and y in L(R2)}

Concatenation joins strings from both expressions in order.

Examples:
- ab matches "ab" (string "a" followed by "b")
- (a + b)c matches "ac" or "bc"
- a(bc) matches "abc"

Properties:
- Associative: (RS)T = R(ST)
- Identity: R.epsilon = epsilon.R = R
- Annihilator: R.empty = empty.R = empty
- NOT commutative: ab != ba`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Kleene Star (Closure)</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Symbol: *

Definition: L(R*) = union of L(R)^n for n = 0, 1, 2, ...
           = {epsilon} union L(R) union L(R).L(R) union ...

Kleene star matches zero or more repetitions.

Examples:
- a* matches "", "a", "aa", "aaa", ...
- (ab)* matches "", "ab", "abab", "ababab", ...
- (a + b)* matches all strings over {a, b}

Properties:
- empty* = epsilon
- epsilon* = epsilon
- R** = R* (idempotent)
- R*R* = R*`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Extended Operators</h2>
    <p className="leading-relaxed">
      These operators are derived from the core operators and provide convenience in writing regular expressions.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operator</th>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Meaning</th>
            <th className="p-3 border">Equivalent</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Kleene Plus</td>
            <td className="p-3 border">R+</td>
            <td className="p-3 border">One or more of R</td>
            <td className="p-3 border">RR* or R*R</td>
          </tr>
          <tr>
            <td className="p-3 border">Optional</td>
            <td className="p-3 border">R?</td>
            <td className="p-3 border">Zero or one of R</td>
            <td className="p-3 border">R + epsilon</td>
          </tr>
          <tr>
            <td className="p-3 border">Exactly n</td>
            <td className="p-3 border">{`R{n}`}</td>
            <td className="p-3 border">Exactly n copies of R</td>
            <td className="p-3 border">RRR...R (n times)</td>
          </tr>
          <tr>
            <td className="p-3 border">At least n</td>
            <td className="p-3 border">{`R{n,}`}</td>
            <td className="p-3 border">n or more copies</td>
            <td className="p-3 border">{`R{n}R*`}</td>
          </tr>
          <tr>
            <td className="p-3 border">Range</td>
            <td className="p-3 border">{`R{n,m}`}</td>
            <td className="p-3 border">n to m copies</td>
            <td className="p-3 border">{`R{n}(R + epsilon)...(m-n times)`}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Operator Precedence</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Precedence (highest to lowest):

1. Parentheses ()      - Explicit grouping
2. Kleene Star *       - Binds tightest
3. Kleene Plus +
4. Optional ?
5. Concatenation       - Implicit operator
6. Union + or |        - Binds loosest

Examples with precedence:
- ab*    = a(b*)     not (ab)*
- ab+c   = (ab)+c    not a(b+c)
- a+b*   = a+(b*)    not (a+b)*
- ab|cd  = (ab)|(cd) not a(b|c)d`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Examples</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Expression</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Sample Matches</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">(0+1)*</td>
            <td className="p-3 border">All binary strings</td>
            <td className="p-3 border">"", "0", "1", "01", "110"</td>
          </tr>
          <tr>
            <td className="p-3 border">0*10*</td>
            <td className="p-3 border">Exactly one 1</td>
            <td className="p-3 border">"1", "01", "10", "0010"</td>
          </tr>
          <tr>
            <td className="p-3 border">(0+1)*00(0+1)*</td>
            <td className="p-3 border">Contains "00"</td>
            <td className="p-3 border">"00", "100", "001", "10011"</td>
          </tr>
          <tr>
            <td className="p-3 border">(00+11)*</td>
            <td className="p-3 border">Even length, pairs</td>
            <td className="p-3 border">"", "00", "11", "0011"</td>
          </tr>
          <tr>
            <td className="p-3 border">1(0+1)*1+0</td>
            <td className="p-3 border">Starts and ends with 1, or just "0"</td>
            <td className="p-3 border">"0", "11", "101", "1001"</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Patterns</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Useful Regular Expression Patterns:

1. Identifier: letter(letter + digit)*
   - Starts with letter, followed by letters or digits

2. Integer: digit+
   - One or more digits

3. Signed Integer: (+|-)?digit+
   - Optional sign followed by digits

4. Decimal: digit+(.digit+)?
   - Digits with optional decimal part

5. Email (simplified): letter+(letter+digit)*@letter+.letter+
   - Basic email pattern`}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Three core operators: union, concatenation, Kleene star</li>
        <li>Extended operators (R+, R?) are derived from core operators</li>
        <li>Kleene star has highest precedence, union has lowest</li>
        <li>Use parentheses to override default precedence</li>
        <li>Concatenation is implicit (no operator symbol needed)</li>
        <li>Understanding precedence prevents common errors</li>
      </ul>
    </div>
  </div>
);

export default REOperators;
