import React from 'react';

const FAtoRE: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Converting Finite Automata to Regular Expressions</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Every finite automaton (DFA or NFA) can be converted to an equivalent regular expression. This proves that regular expressions
      and finite automata have the same expressive power - they both describe exactly the class of regular languages.
    </p>

    <h2 className="text-3xl font-bold mt-8">Methods for Conversion</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>State Elimination Method:</strong> Systematically remove states while preserving the language</li>
      <li><strong>Arden's Theorem Method:</strong> Solve a system of equations derived from transitions</li>
      <li><strong>Transitive Closure Method:</strong> Dynamic programming approach using path expressions</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">State Elimination Method</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Algorithm Overview:

1. If the start state has incoming edges, create a new start state
   with an epsilon transition to the old start state.

2. If there are multiple accept states, or the accept state has
   outgoing edges, create a new accept state with epsilon transitions
   from all old accept states.

3. Repeatedly eliminate non-start, non-accept states:
   For each state q being eliminated:
   - For each pair of states (p, r) where there's a path p -> q -> r
   - Add/update direct transition from p to r
   - The new label is: (old p->r) + (p->q)(q->q)*(q->r)

4. When only start and accept remain, the transition label is the RE.`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Elimination Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`DFA accepting strings ending with 'ab':

States: {q0, q1, q2}
Start: q0, Accept: {q2}

Transitions:
q0 --a--> q1    q0 --b--> q0
q1 --a--> q1    q1 --b--> q2
q2 --a--> q1    q2 --b--> q0

Step 1: Already one start state (q0) with no incoming edges. Good.

Step 2: q2 has outgoing edges, so create new accept state qf:
        Add q2 --epsilon--> qf, make q2 non-accepting

Step 3: Eliminate q1:
        - Path q0 -> q1 -> q1 (self-loop): label = a, a
        - Path q0 -> q1 -> q2: label = a, b
        - Path q2 -> q1 -> q1 (self-loop): label = a, a
        - Path q2 -> q1 -> q2 (via q1): label = a, b

        New transitions after eliminating q1:
        q0 --aa*b--> q2   (was q0->q1->q2 with q1 loop)
        q0 --b--> q0      (unchanged)
        q2 --aa*b--> q2   (was q2->q1->q2 with q1 loop)
        q2 --b--> q0      (unchanged)

Step 4: Eliminate q2:
        Path q0 -> q2 -> qf with q2 loop:
        RE = (b)*(aa*b)(aa*b)*(epsilon)
           = b*aa*b(aa*b)*

Step 5: Eliminate q0's self-loop:
        RE = (b)*aa*b(aa*b)*
        But we need to handle the b loop on q0...

Final RE: (a+b)*ab  (simplified)
          or: b*aa*b(aa*b + b)*  (direct from elimination)`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Arden's Theorem Method</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Using the same DFA:

Write equations for each state (what strings reach it):

q0 = epsilon + q0.b + q2.b    (start + loops back)
q1 = q0.a + q1.a + q2.a
q2 = q1.b

Solve step by step:

From q1 = q0.a + q1.a + q2.a:
q1 = (q0 + q2).a + q1.a
q1 = (q0 + q2).a.a*         [Arden's: R = Q + RP => R = QP*]

Substitute into q2:
q2 = q1.b = (q0 + q2).a.a*.b

q2 = q0.aa*b + q2.aa*b
q2 = q0.aa*b.(aa*b)*        [Arden's theorem]

Substitute into q0:
q0 = epsilon + q0.b + q0.aa*b(aa*b)*.b
q0 = epsilon + q0.(b + aa*b(aa*b)*b)
q0 = (b + aa*b(aa*b)*b)*    [Arden's theorem]

Final RE for accepting (reaching q2):
q2 = q0.aa*b(aa*b)*
   = (b + aa*b(aa*b)*b)* aa*b(aa*b)*`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">State Elimination</td>
            <td className="p-3 border">Visual, intuitive process</td>
            <td className="p-3 border">Can produce long expressions</td>
          </tr>
          <tr>
            <td className="p-3 border">Arden's Theorem</td>
            <td className="p-3 border">Systematic, algebraic</td>
            <td className="p-3 border">Equation solving can be complex</td>
          </tr>
          <tr>
            <td className="p-3 border">Transitive Closure</td>
            <td className="p-3 border">Good for automation</td>
            <td className="p-3 border">Produces non-minimal expressions</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Tips for State Elimination</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`1. Elimination Order Matters
   - Different orders produce different (equivalent) REs
   - Try to eliminate states with fewer connections first

2. Simplify During Construction
   - Apply RE identities as you go
   - epsilon + R = R when R contains epsilon
   - R.epsilon = R

3. Handle Self-Loops
   - A state with self-loop R gets R* when eliminated
   - Combine with incoming/outgoing paths

4. Empty Transitions
   - If no path exists, the contribution is empty set
   - empty + R = R`}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Every FA can be converted to an equivalent RE</li>
        <li>State elimination removes states while preserving the language</li>
        <li>Arden's Theorem provides an algebraic approach via equations</li>
        <li>Different methods/orders may produce different equivalent REs</li>
        <li>The resulting RE may not be minimal - simplification may help</li>
        <li>This conversion proves FA and RE describe the same languages</li>
      </ul>
    </div>
  </div>
);

export default FAtoRE;
