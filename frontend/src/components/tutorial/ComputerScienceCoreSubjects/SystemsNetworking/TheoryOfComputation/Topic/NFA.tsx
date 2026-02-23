import React from "react";

const NFA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Non-deterministic Finite Automata (NFA)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Non-deterministic Finite Automaton (NFA) is a finite state machine where for a given state
      and input symbol, there can be zero, one, or multiple possible transitions. This
      non-determinism often allows for simpler designs compared to equivalent DFAs.
    </p>

    <h2 className="text-3xl font-bold mt-8">Formal Definition</h2>
    <p className="leading-relaxed">
      An NFA is a 5-tuple M = (Q, Σ, δ, q₀, F) where:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Difference from DFA</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">Q</td>
            <td className="p-3 border">Finite set of states</td>
            <td className="p-3 border">Same as DFA</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">Σ</td>
            <td className="p-3 border">Input alphabet</td>
            <td className="p-3 border">Same as DFA</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">δ</td>
            <td className="p-3 border">Transition function</td>
            <td className="p-3 border font-semibold">δ: Q × Σ → 2^Q (returns set of states)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">q₀</td>
            <td className="p-3 border">Initial state</td>
            <td className="p-3 border">Same as DFA</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">F</td>
            <td className="p-3 border">Set of final states</td>
            <td className="p-3 border">Same as DFA</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Properties of NFA</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Non-deterministic:</strong> Multiple transitions possible for same (state, symbol) pair</li>
      <li><strong>Partial Function:</strong> Transition may not be defined for every state-symbol combination</li>
      <li><strong>Multiple Paths:</strong> Many computation paths possible for a single input</li>
      <li><strong>Acceptance:</strong> String accepted if ANY path leads to a final state</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">DFA vs NFA</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">DFA</th>
            <th className="p-3 border">NFA</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Transitions per symbol</td>
            <td className="p-3 border">Exactly one</td>
            <td className="p-3 border">Zero or more</td>
          </tr>
          <tr>
            <td className="p-3 border">Transition function</td>
            <td className="p-3 border">Q × Σ → Q</td>
            <td className="p-3 border">Q × Σ → 2^Q</td>
          </tr>
          <tr>
            <td className="p-3 border">Computation paths</td>
            <td className="p-3 border">Unique</td>
            <td className="p-3 border">Multiple</td>
          </tr>
          <tr>
            <td className="p-3 border">Acceptance</td>
            <td className="p-3 border">End in final state</td>
            <td className="p-3 border">Any path ends in final</td>
          </tr>
          <tr>
            <td className="p-3 border">Ease of design</td>
            <td className="p-3 border">More complex</td>
            <td className="p-3 border">Often simpler</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: NFA for strings containing "01"</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NFA for L = { w | w contains "01" as substring }

        0,1            0,1
    +---------+    +---------+
    |         v    |         v
  → +---+  0  +---+  1  +======+
    | q0|---->| q1|---->|| q2 ||
    +---+     +---+     +======+

States:
  q0: Haven't started seeing "01" pattern
  q1: Just saw '0', looking for '1'
  q2: Found "01" - accepting (stays in this state)

Key Features:
- State q0 has TWO transitions on '0': to q0 and to q1
- This non-determinism allows "guessing" when pattern starts
- String accepted if ANY path leads to q2`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Transition Table</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">State</th>
            <th className="p-3 border">0</th>
            <th className="p-3 border">1</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">→ q0</td>
            <td className="p-3 border">{"{ q0, q1 }"}</td>
            <td className="p-3 border">{"{ q0 }"}</td>
          </tr>
          <tr>
            <td className="p-3 border">q1</td>
            <td className="p-3 border">{"{ }"}</td>
            <td className="p-3 border">{"{ q2 }"}</td>
          </tr>
          <tr>
            <td className="p-3 border">*q2</td>
            <td className="p-3 border">{"{ q2 }"}</td>
            <td className="p-3 border">{"{ q2 }"}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Extended Transition Function for NFA</h2>
    <p className="leading-relaxed">
      The extended transition function δ̂ processes entire strings and returns a set of states:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <p>δ̂(q, ε) = {"{ q }"}</p>
      <p>δ̂(q, wa) = ∪ δ(p, a) for all p ∈ δ̂(q, w)</p>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Example Computation Tree</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Input: "1001" on the NFA above

Computation Tree:
                      q0 (start)
                       |
          1 ───────────────────────
                       |
                      q0
                       |
          0 ───────────────────────
                      / \
                    q0   q1
                    |     |
          0 ────────┘     └────(dead - no transition on 0)
                   / \
                 q0   q1
                 |     |
          1 ─────┘     └────
                 |           |
                q0          q2 ✓

Result: ACCEPT (path q0 → q0 → q1 → (dead) fails,
                but q0 → q0 → q0 → q1 → q2 succeeds)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Acceptance in NFA</h2>
    <p className="leading-relaxed">
      A string w is accepted by an NFA M if and only if there exists at least one computation path
      from the start state to a final state.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      L(M) = {"{ w ∈ Σ* | δ̂(q₀, w) ∩ F ≠ ∅ }"}
    </div>

    <h2 className="text-3xl font-bold mt-8">Non-determinism Interpretation</h2>
    <p className="leading-relaxed">
      Non-determinism can be interpreted in several equivalent ways:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Parallel Execution:</strong> All possible transitions happen simultaneously</li>
      <li><strong>Guessing:</strong> The automaton "guesses" the right path to take</li>
      <li><strong>Backtracking:</strong> Try one path; if it fails, try another</li>
      <li><strong>Mathematical:</strong> Accept if any accepting path exists</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Advantages of NFA</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantage</th>
            <th className="p-3 border">Explanation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Simpler Design</td>
            <td className="p-3 border">Often requires fewer states than equivalent DFA</td>
          </tr>
          <tr>
            <td className="p-3 border">Natural Modeling</td>
            <td className="p-3 border">Pattern matching problems are easier to express</td>
          </tr>
          <tr>
            <td className="p-3 border">Union Construction</td>
            <td className="p-3 border">Combining languages is straightforward</td>
          </tr>
          <tr>
            <td className="p-3 border">Regex Conversion</td>
            <td className="p-3 border">Direct conversion from regular expressions</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Equivalence of DFA and NFA</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold">Theorem (Rabin-Scott, 1959):</p>
      <p className="mt-2">
        For every NFA, there exists an equivalent DFA that accepts the same language.
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
        <li>NFA with n states can be converted to DFA with at most 2^n states</li>
        <li>Conversion uses the subset construction algorithm</li>
        <li>DFA and NFA recognize exactly the class of regular languages</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>NFA allows multiple transitions for the same (state, symbol) pair</li>
        <li>A string is accepted if ANY computation path leads to a final state</li>
        <li>NFA and DFA have the same computational power</li>
        <li>NFA can have exponentially fewer states than equivalent DFA</li>
        <li>Every NFA can be converted to an equivalent DFA (subset construction)</li>
        <li>NFAs are often easier to design and understand</li>
      </ul>
    </div>
  </div>
);

export default NFA;
