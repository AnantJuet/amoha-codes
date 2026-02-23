import React from "react";

const FiniteAutomata: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Finite Automata
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Finite Automata</strong> (FA) are abstract machines used to recognize patterns in
      strings. In compiler design, they implement lexical analyzers by converting regular
      expressions into executable pattern matchers.
    </p>

    <h2 className="text-3xl font-bold mt-8">Formal Definition</h2>
    <p className="leading-relaxed">
      A finite automaton is a 5-tuple M = (Q, Σ, δ, q₀, F) where:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Q:</strong> Finite set of states</li>
      <li><strong>Σ:</strong> Input alphabet (set of symbols)</li>
      <li><strong>δ:</strong> Transition function</li>
      <li><strong>q₀:</strong> Initial/start state (q₀ ∈ Q)</li>
      <li><strong>F:</strong> Set of accepting/final states (F ⊆ Q)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Types of Finite Automata</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Transition Function</th>
            <th className="p-3 border">Properties</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">DFA</td>
            <td className="p-3 border">δ: Q × Σ → Q</td>
            <td className="p-3 border">Exactly one transition per symbol</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NFA</td>
            <td className="p-3 border">δ: Q × Σ → P(Q)</td>
            <td className="p-3 border">Multiple or no transitions possible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ε-NFA</td>
            <td className="p-3 border">δ: Q × (Σ ∪ {`{ε}`}) → P(Q)</td>
            <td className="p-3 border">Allows epsilon transitions</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Diagram Notation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`State Diagram Elements:

    →    Start state indicator
    ○    Regular state
    ◎    Accepting (final) state
    →a   Transition on input 'a'

Example: DFA for strings ending in "ab"

    →○─────a─────→○─────b─────→◎
     q0           q1            q2
      ↑           │
      └────b──────┘
      ↑           ↑
      └─────a─────┘
              from q2 on 'a': go to q1
              from q2 on 'b': go to q0`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DFA Example</h2>
    <p className="leading-relaxed">
      DFA recognizing strings that contain "01":
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`DFA M = ({q0, q1, q2}, {0, 1}, δ, q0, {q2})

Transition Table:
┌───────┬───────┬───────┐
│ State │   0   │   1   │
├───────┼───────┼───────┤
│  q0   │  q1   │  q0   │  (looking for '0')
│  q1   │  q1   │  q2   │  (seen '0', looking for '1')
│  q2   │  q2   │  q2   │  (accepting - found "01")
└───────┴───────┴───────┘

State Diagram:
          1
       ┌─────┐
       │     │
  →(q0)──0──→(q1)──1──→((q2))
       ↑      │         │
       │      0         │
       │      │         │
       └──────┘    0,1──┘

Traces:
• "001": q0 →0→ q1 →0→ q1 →1→ q2 ✓ Accept
• "11":  q0 →1→ q0 →1→ q0 ✗ Reject`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Acceptance</h2>
    <p className="leading-relaxed">
      A string w is <strong>accepted</strong> by a finite automaton if, starting from the initial
      state, reading all characters of w leads to an accepting state.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`For DFA M and string w = a₁a₂...aₙ:

δ̂(q0, w) = δ(δ(...δ(δ(q0, a₁), a₂)...), aₙ)

w is accepted if δ̂(q0, w) ∈ F

Language of M:
L(M) = { w ∈ Σ* | δ̂(q0, w) ∈ F }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">FA in Lexical Analysis</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Conversion Pipeline:

Regular Expression
        │
        ▼
   Thompson's Construction
        │
        ▼
      NFA
        │
        ▼
   Subset Construction
        │
        ▼
      DFA
        │
        ▼
   Minimization
        │
        ▼
  Minimized DFA
        │
        ▼
   Scanner Code`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DFA for Identifier Pattern</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Pattern: [a-zA-Z][a-zA-Z0-9]*

DFA:
        ┌───────────────────┐
        │                   │
        │    letter/digit   │
        │                   ▼
→(q0)──letter──→((q1))──────┘
        │
       other
        │
        ▼
     (error)

States:
q0: Start state
q1: Accepting state (valid identifier)

Transition function:
δ(q0, letter) = q1
δ(q1, letter) = q1
δ(q1, digit) = q1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementing DFA</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Table-driven DFA implementation
int transition[NUM_STATES][NUM_SYMBOLS];
bool accepting[NUM_STATES];

int simulate(string input) {
    int state = START_STATE;

    for (char c : input) {
        int symbol = charToSymbol(c);
        state = transition[state][symbol];

        if (state == ERROR_STATE)
            return REJECT;
    }

    return accepting[state] ? ACCEPT : REJECT;
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Finite automata recognize regular languages</li>
        <li>DFA has exactly one transition per input symbol</li>
        <li>NFA can have multiple or no transitions</li>
        <li>Both DFA and NFA recognize the same class of languages</li>
        <li>Lexical analyzers are implemented using DFAs</li>
      </ul>
    </div>
  </div>
);

export default FiniteAutomata;
