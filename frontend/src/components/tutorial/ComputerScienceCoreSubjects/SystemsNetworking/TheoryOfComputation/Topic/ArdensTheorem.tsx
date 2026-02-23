import React from 'react';

const ArdensTheorem: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Arden's Theorem</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Arden's Theorem provides a method to solve equations involving regular expressions. It is particularly useful for
      converting finite automata to regular expressions by solving a system of equations derived from the automaton's transitions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Statement of Arden's Theorem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Arden's Theorem:

If P, Q, and R are regular expressions over alphabet Sigma, and
if P does not contain epsilon (the empty string), then the equation:

    R = Q + RP

has a unique solution:

    R = QP*

Explanation:
- R = Q + RP means "R is either Q, or R followed by P"
- The solution R = QP* means "Q followed by zero or more P's"

Important Condition:
- P must NOT contain epsilon
- If P contains epsilon, the equation may have multiple solutions`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Proof of Arden's Theorem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Given: R = Q + RP

Substituting R into itself repeatedly:
R = Q + RP
  = Q + (Q + RP)P       [substitute R = Q + RP]
  = Q + QP + RP^2
  = Q + QP + (Q + RP)P^2
  = Q + QP + QP^2 + RP^3
  ...continuing...
  = Q + QP + QP^2 + QP^3 + ... + QP^n + RP^(n+1)

As n approaches infinity (and since P has no epsilon):
R = Q(epsilon + P + P^2 + P^3 + ...)
  = QP*

Verification:
QP* = Q + QP*P        [since P* = epsilon + P*P]
    = Q + (QP*)P

This matches R = Q + RP with R = QP*. QED.`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Application: FA to Regular Expression</h2>
    <p className="leading-relaxed">
      Arden's Theorem is used to convert DFA/NFA to regular expressions by setting up and solving a system of equations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Method to derive RE from FA:

Step 1: Write an equation for each state qi:
        qi = (transitions into qi) + (epsilon if qi is start)

        General form:
        qi = Sum over all (qj, a) where delta(qj, a) = qi of (qj . a)
             + epsilon  (if qi is the start state)

Step 2: Solve the system of equations using:
        - Substitution
        - Arden's Theorem (when equation is of form R = Q + RP)

Step 3: The regular expression for state qi represents
        all strings that can reach qi from the start state.

Step 4: The final RE is the union of expressions for
        all accepting states.`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Converting DFA to RE</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`DFA:
States: {q0, q1, q2}
Alphabet: {a, b}
Start: q0
Accept: {q2}

Transitions:
delta(q0, a) = q1    delta(q0, b) = q0
delta(q1, a) = q1    delta(q1, b) = q2
delta(q2, a) = q1    delta(q2, b) = q0

Step 1: Write equations

q0 = epsilon + q0.b + q2.b     (start state, receives b from q0 and q2)
q1 = q0.a + q1.a + q2.a        (receives a from q0, q1, q2)
q2 = q1.b                       (receives b from q1 only)

Step 2: Substitute q2 into q0 and q1

q0 = epsilon + q0.b + q1.b.b   (substitute q2 = q1.b)
q1 = q0.a + q1.a + q1.b.a      (substitute q2 = q1.b)

Step 3: Simplify q1

q1 = q0.a + q1(a + ba)
Using Arden's Theorem with P = (a + ba), Q = q0.a:
q1 = q0.a(a + ba)*

Step 4: Substitute into q0

q0 = epsilon + q0.b + q0.a(a + ba)*bb
q0 = epsilon + q0(b + a(a + ba)*bb)
Using Arden's Theorem with P = (b + a(a + ba)*bb), Q = epsilon:
q0 = (b + a(a + ba)*bb)*

Step 5: Find q2 (accepting state)

q2 = q1.b = q0.a(a + ba)*b
   = (b + a(a + ba)*bb)* a(a + ba)*b

Final RE: (b + a(a + ba)*bb)* a(a + ba)*b`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Important Notes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Condition</th>
            <th className="p-3 border">Implication</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">P contains no epsilon</td>
            <td className="p-3 border">Unique solution R = QP*</td>
          </tr>
          <tr>
            <td className="p-3 border">P contains epsilon</td>
            <td className="p-3 border">Multiple solutions possible</td>
          </tr>
          <tr>
            <td className="p-3 border">Q = empty</td>
            <td className="p-3 border">R = empty (trivial solution)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Alternative Forms</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Arden's Theorem also applies to:

Left-linear form:
R = Q + PR  has solution  R = P*Q

This is useful when the recursive term is on the left.

Example:
R = a + aR
Solution: R = a*a = a+  (one or more a's)`}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Arden's Theorem: R = Q + RP has solution R = QP* (when P has no epsilon)</li>
        <li>Used to convert finite automata to regular expressions</li>
        <li>Set up equations based on transitions into each state</li>
        <li>Solve using substitution and Arden's Theorem</li>
        <li>Final RE is union of expressions for accepting states</li>
        <li>P must not contain epsilon for unique solution</li>
      </ul>
    </div>
  </div>
);

export default ArdensTheorem;
