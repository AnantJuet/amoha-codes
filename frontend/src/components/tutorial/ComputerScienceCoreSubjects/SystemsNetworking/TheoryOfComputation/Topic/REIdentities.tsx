import React from 'react';

const REIdentities: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Regular Expression Identities</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Regular expression identities are algebraic laws that allow us to manipulate and simplify regular expressions.
      Understanding these identities is essential for optimizing patterns and proving the equivalence of different expressions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Union Identities</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`1. Commutativity:    R + S = S + R
2. Associativity:    (R + S) + T = R + (S + T)
3. Idempotence:      R + R = R
4. Identity:         R + empty = R
5. Annihilator:      R + Sigma* = Sigma* (where Sigma* matches everything)

Examples:
- a + b = b + a
- (a + b) + c = a + (b + c)
- aa* + aa* = aa*
- (a + b)* + empty = (a + b)*`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Concatenation Identities</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`1. Associativity:    (RS)T = R(ST)
2. Identity:         R.epsilon = epsilon.R = R
3. Annihilator:      R.empty = empty.R = empty
4. NOT Commutative:  RS != SR (in general)

Examples:
- (ab)c = a(bc) = abc
- a.epsilon = epsilon.a = a
- a.empty = empty (no strings matched)
- ab != ba`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Kleene Star Identities</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`1. empty* = epsilon
2. epsilon* = epsilon
3. (R*)* = R*         (idempotence)
4. R*R* = R*
5. (R + epsilon)* = R*
6. R+ = RR* = R*R     (Kleene plus definition)
7. R* = epsilon + R*R = epsilon + RR*
8. R* = (epsilon + R)*
9. (R*S*)* = (R + S)*

Examples:
- a** = a*
- (a*b*)* = (a + b)*
- a+ = aa* = a*a
- (epsilon + a)* = a*`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Distributive Laws</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`1. Left Distribution:  R(S + T) = RS + RT
2. Right Distribution: (R + S)T = RT + ST

Note: Concatenation distributes over union, but NOT vice versa.

Examples:
- a(b + c) = ab + ac
- (a + b)c = ac + bc
- (a + b)(c + d) = ac + ad + bc + bd`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Useful Derived Identities</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Identity</th>
            <th className="p-3 border">Explanation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">(R*S)* R* = (R + S)*</td>
            <td className="p-3 border">Combining alternating patterns</td>
          </tr>
          <tr>
            <td className="p-3 border">R(SR)* = (RS)*R</td>
            <td className="p-3 border">Rearranging repeated concatenation</td>
          </tr>
          <tr>
            <td className="p-3 border">(RS + R)* R = R(SR + R)*</td>
            <td className="p-3 border">Factoring patterns</td>
          </tr>
          <tr>
            <td className="p-3 border">S(RS + S)* = (SR + S)* S</td>
            <td className="p-3 border">Symmetric factoring</td>
          </tr>
          <tr>
            <td className="p-3 border">(R + S)* = R*(SR*)*</td>
            <td className="p-3 border">Alternate form of union star</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Simplification Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Example 1: Simplify (a + b)*a(a + b)*
This already represents "strings containing at least one 'a'"
Cannot be simplified further in general.

Example 2: Simplify a*a*
Using R*R* = R*:
a*a* = a*

Example 3: Simplify (epsilon + a)(epsilon + a)*
Using (epsilon + R)* = R*:
= (epsilon + a)a*
= a* (since epsilon + a matches a*, just one extra step)
Actually: = a*

Example 4: Simplify empty*
Using empty* = epsilon:
empty* = epsilon

Example 5: Simplify (a*)*b*
Using (R*)* = R*:
= a*b*`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Proving Equivalence</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`To prove R = S (two regex are equivalent):

Method 1: Algebraic Manipulation
- Use identities to transform R into S
- Each step preserves language equality

Method 2: Subset in Both Directions
- Show L(R) subset of L(S)
- Show L(S) subset of L(R)
- Therefore L(R) = L(S)

Method 3: Convert to Minimal DFA
- Build DFA for R and S
- Minimize both DFAs
- Check if they are isomorphic

Example: Prove (a + b)* = (a*b*)*
Using (R*S*)* = (R + S)*:
(a*b*)* = (a + b)*  [Direct application of identity]`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Summary of Key Identities</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Key Identities</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Union</td>
            <td className="p-3 border">R+R=R, R+empty=R, R+S=S+R</td>
          </tr>
          <tr>
            <td className="p-3 border">Concatenation</td>
            <td className="p-3 border">R.epsilon=R, R.empty=empty</td>
          </tr>
          <tr>
            <td className="p-3 border">Kleene Star</td>
            <td className="p-3 border">R**=R*, empty*=epsilon, R*R*=R*</td>
          </tr>
          <tr>
            <td className="p-3 border">Distribution</td>
            <td className="p-3 border">R(S+T)=RS+RT</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Union is commutative and associative; concatenation is only associative</li>
        <li>Epsilon is the identity for concatenation; empty set is the identity for union</li>
        <li>Kleene star is idempotent: R** = R*</li>
        <li>Concatenation distributes over union but not vice versa</li>
        <li>These identities enable algebraic manipulation of regex</li>
        <li>Use identities to simplify expressions and prove equivalence</li>
      </ul>
    </div>
  </div>
);

export default REIdentities;
