import React from "react";

const DFA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      DFA (Deterministic Finite Automaton)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A <strong>Deterministic Finite Automaton (DFA)</strong> is a finite automaton where
      for each state and input symbol, there is exactly one transition to a next state.
      DFAs are used to implement efficient lexical analyzers.
    </p>

    <h2 className="text-3xl font-bold mt-8">Formal Definition</h2>
    <p className="leading-relaxed">
      A DFA is a 5-tuple M = (Q, Σ, δ, q₀, F) where:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Q:</strong> Finite set of states</li>
      <li><strong>Σ:</strong> Input alphabet</li>
      <li><strong>δ:</strong> Q × Σ → Q (transition function - total)</li>
      <li><strong>q₀:</strong> Initial state (q₀ ∈ Q)</li>
      <li><strong>F:</strong> Set of accepting states (F ⊆ Q)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Properties</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>Deterministic:</strong> Exactly one transition for each (state, symbol) pair</li>
      <li><strong>No ε-transitions:</strong> All transitions consume input</li>
      <li><strong>Complete:</strong> Transition defined for every symbol in every state</li>
      <li><strong>Single start state:</strong> One initial state</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">DFA Example: Even Number of 0s</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`DFA accepting strings with even number of 0s

M = ({q0, q1}, {0, 1}, δ, q0, {q0})

Transition Table:
┌───────┬───────┬───────┐
│ State │   0   │   1   │
├───────┼───────┼───────┤
│ →q0*  │  q1   │  q0   │  (even 0s - accepting)
│  q1   │  q0   │  q1   │  (odd 0s)
└───────┴───────┴───────┘
* indicates accepting state

State Diagram:
        1                    1
     ┌─────┐              ┌─────┐
     │     │              │     │
     ▼     │              ▼     │
  →((q0))──0──────────→(q1)────┘
     ↑                    │
     └────────0───────────┘

Traces:
• "0110": q0→q1→q1→q1→q0 ✓ (even 0s: two)
• "010":  q0→q1→q1→q0 ✓ (even 0s: two)
• "0":    q0→q1 ✗ (odd 0s: one)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DFA Example: Strings Ending in "ab"</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`DFA for strings over {a, b} ending in "ab"

M = ({q0, q1, q2}, {a, b}, δ, q0, {q2})

Transition Table:
┌───────┬───────┬───────┐
│ State │   a   │   b   │
├───────┼───────┼───────┤
│ →q0   │  q1   │  q0   │
│  q1   │  q1   │  q2   │
│  q2*  │  q1   │  q0   │
└───────┴───────┴───────┘

State Diagram:
                b
        ┌──────────────────┐
        │                  │
        ▼       a          │      b
  →(q0)────────────→(q1)──────→((q2))
     ↑              │ ↑          │
     │              │ │    a     │
     │      b       │ └──────────┘
     └──────────────┘

Accepting strings: "ab", "aab", "bab", "aaab", ...`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Transition Function Extension</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Extended transition function δ̂ handles strings:

Base case:
  δ̂(q, ε) = q

Recursive case:
  δ̂(q, wa) = δ(δ̂(q, w), a)

where w is a string and a is a symbol

Example: δ̂(q0, "ab") for the "ends in ab" DFA
  δ̂(q0, "ab") = δ(δ̂(q0, "a"), b)
              = δ(δ(δ̂(q0, ε), a), b)
              = δ(δ(q0, a), b)
              = δ(q1, b)
              = q2 ✓ (accepting)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DFA Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Table-driven DFA implementation
#define NUM_STATES 3
#define NUM_SYMBOLS 2

int transition[NUM_STATES][NUM_SYMBOLS] = {
    /* State 0: */ {1, 0},  // a→1, b→0
    /* State 1: */ {1, 2},  // a→1, b→2
    /* State 2: */ {1, 0}   // a→1, b→0
};

bool accepting[NUM_STATES] = {false, false, true};

bool accepts(const char* input) {
    int state = 0;  // Start state

    for (int i = 0; input[i] != '\\0'; i++) {
        int symbol = (input[i] == 'a') ? 0 : 1;
        state = transition[state][symbol];
    }

    return accepting[state];
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DFA for Token Recognition</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`DFA for recognizing identifiers: [a-zA-Z][a-zA-Z0-9]*

States:
  q0: Start state
  q1: Seen one letter (accepting)
  qE: Error state (dead state)

Transition Table:
┌───────┬────────┬───────┬───────┐
│ State │ letter │ digit │ other │
├───────┼────────┼───────┼───────┤
│ →q0   │   q1   │  qE   │  qE   │
│  q1*  │   q1   │  q1   │  qE   │
│  qE   │   qE   │  qE   │  qE   │
└───────┴────────┴───────┴───────┘

When reaching qE or end of input in q1:
  Return IDENTIFIER token`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of DFA</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>Efficient:</strong> O(n) time to process string of length n</li>
      <li><strong>Simple:</strong> Easy to implement with table lookup</li>
      <li><strong>Predictable:</strong> Deterministic behavior</li>
      <li><strong>Compact code:</strong> Table-driven implementation</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">DFA vs NFA Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">DFA</th>
            <th className="p-3 border">NFA</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">One transition per symbol</td>
            <td className="p-3 border">Multiple transitions allowed</td>
          </tr>
          <tr>
            <td className="p-3 border">Faster execution</td>
            <td className="p-3 border">Easier construction</td>
          </tr>
          <tr>
            <td className="p-3 border">May have more states</td>
            <td className="p-3 border">Often more compact</td>
          </tr>
          <tr>
            <td className="p-3 border">Used in actual scanners</td>
            <td className="p-3 border">Used in construction</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DFA has exactly one transition per (state, symbol) pair</li>
        <li>No ε-transitions allowed in DFA</li>
        <li>DFA execution is O(n) for input of length n</li>
        <li>Table-driven implementation is efficient and common</li>
        <li>DFAs are used to implement actual lexical analyzers</li>
      </ul>
    </div>
  </div>
);

export default DFA;
