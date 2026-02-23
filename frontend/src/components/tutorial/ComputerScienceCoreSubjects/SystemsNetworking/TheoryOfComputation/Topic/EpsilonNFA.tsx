import React from 'react';

const EpsilonNFA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Epsilon NFA (NFA with Epsilon Transitions)</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An Epsilon NFA (e-NFA) is a Non-deterministic Finite Automaton that allows transitions without consuming any input symbol.
      These special transitions, called epsilon transitions, provide additional flexibility in automaton design while maintaining
      the same computational power as regular NFAs and DFAs.
    </p>

    <h2 className="text-3xl font-bold mt-8">Formal Definition</h2>
    <p className="leading-relaxed">
      An e-NFA is defined as a 5-tuple (Q, Sigma, delta, q0, F) where:
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`e-NFA = (Q, Sigma, delta, q0, F) where:

Q     = Finite set of states
Sigma = Input alphabet (does not include epsilon)
delta = Transition function: Q x (Sigma U {epsilon}) -> P(Q)
q0    = Initial state (q0 in Q)
F     = Set of final/accepting states (F is subset of Q)

Key Difference from NFA:
- The transition function accepts epsilon as input
- delta(q, epsilon) gives states reachable without consuming input`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Epsilon Closure</h2>
    <p className="leading-relaxed">
      The epsilon closure (e-closure) of a state is the set of all states reachable from that state using only epsilon transitions.
      This includes the state itself.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Epsilon Closure Definition:

e-closure(q) = {q} U {p | p is reachable from q via epsilon transitions}

Algorithm to compute e-closure(q):
1. Initialize: closure = {q}
2. Repeat:
   For each state r in closure:
     Add all states in delta(r, epsilon) to closure
3. Until no new states are added
4. Return closure

Example:
If delta(q0, epsilon) = {q1} and delta(q1, epsilon) = {q2}
Then e-closure(q0) = {q0, q1, q2}`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Extended Transition Function</h2>
    <p className="leading-relaxed">
      The extended transition function for e-NFA processes strings by including epsilon closures at each step.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Extended Transition Function delta*:

delta*(q, epsilon) = e-closure(q)

delta*(q, wa) = e-closure( U delta(r, a) )
                for all r in delta*(q, w)

Where:
- w is a string
- a is a single symbol
- U represents union over all states

String Acceptance:
A string w is accepted if delta*(q0, w) intersect F is not empty`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: e-NFA for (a|b)*abb</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`States: Q = {q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10}
Alphabet: Sigma = {a, b}
Start: q0
Accept: {q10}

Transitions:
q0 --epsilon--> q1, q7
q1 --epsilon--> q2, q4
q2 --a--> q3
q3 --epsilon--> q6
q4 --b--> q5
q5 --epsilon--> q6
q6 --epsilon--> q1, q7
q7 --a--> q8
q8 --b--> q9
q9 --b--> q10

This e-NFA recognizes strings ending with "abb"`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Diagram Representation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Simple e-NFA Example for L = {a^n | n >= 0}:

     epsilon        a         epsilon
q0 ---------> q1 -----> q2 ---------> q3
              ^                        |
              |______epsilon__________|

States: {q0, q1, q2, q3}
Start: q0
Accept: {q3}

e-closure(q0) = {q0, q1}
e-closure(q2) = {q2, q3, q1}  (q2 -> q3 -> q1 via epsilon)`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties of e-NFA</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Equivalence</td>
            <td className="p-3 border">e-NFA, NFA, and DFA all recognize the same class of languages (regular languages)</td>
          </tr>
          <tr>
            <td className="p-3 border">Design Flexibility</td>
            <td className="p-3 border">Epsilon transitions make it easier to design automata, especially for union and concatenation</td>
          </tr>
          <tr>
            <td className="p-3 border">State Explosion</td>
            <td className="p-3 border">Converting to DFA may result in exponentially more states</td>
          </tr>
          <tr>
            <td className="p-3 border">Thompson Construction</td>
            <td className="p-3 border">Used to convert regular expressions to e-NFA</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of Epsilon Transitions</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Union Construction:</strong> Connect start states of two NFAs with epsilon transitions from a new start state</li>
      <li><strong>Concatenation:</strong> Connect accept states of first NFA to start state of second NFA with epsilon</li>
      <li><strong>Kleene Star:</strong> Add epsilon transitions for loop-back and bypass</li>
      <li><strong>Optional Components:</strong> Allow skipping parts of the pattern</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>e-NFA allows transitions without consuming input symbols</li>
        <li>Epsilon closure captures all states reachable via epsilon transitions</li>
        <li>e-NFA has the same power as NFA and DFA (recognizes regular languages)</li>
        <li>Epsilon transitions simplify automaton construction</li>
        <li>Every e-NFA can be converted to an equivalent DFA</li>
        <li>Thompson's construction uses e-NFA for regex to automaton conversion</li>
      </ul>
    </div>
  </div>
);

export default EpsilonNFA;
