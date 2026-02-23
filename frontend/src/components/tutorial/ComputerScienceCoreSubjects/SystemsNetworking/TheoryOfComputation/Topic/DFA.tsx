import React from "react";

const DFA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Deterministic Finite Automata (DFA)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Deterministic Finite Automaton (DFA) is a finite state machine where for each state and
      input symbol, there is exactly one transition to a next state. This determinism makes DFAs
      easier to implement and analyze compared to their non-deterministic counterparts.
    </p>

    <h2 className="text-3xl font-bold mt-8">Formal Definition</h2>
    <p className="leading-relaxed">
      A DFA is a 5-tuple M = (Q, Σ, δ, q₀, F) where:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Constraint</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">Q</td>
            <td className="p-3 border">Finite set of states</td>
            <td className="p-3 border">Non-empty, finite</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">Σ</td>
            <td className="p-3 border">Input alphabet</td>
            <td className="p-3 border">Finite set of symbols</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">δ</td>
            <td className="p-3 border">Transition function</td>
            <td className="p-3 border">δ: Q × Σ → Q (total function)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">q₀</td>
            <td className="p-3 border">Initial state</td>
            <td className="p-3 border">q₀ ∈ Q</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">F</td>
            <td className="p-3 border">Set of final states</td>
            <td className="p-3 border">F ⊆ Q</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Properties of DFA</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Deterministic:</strong> Exactly one transition for each (state, symbol) pair</li>
      <li><strong>Total Function:</strong> Transition defined for every state and every input symbol</li>
      <li><strong>No ε-transitions:</strong> Cannot move without reading input</li>
      <li><strong>Unique Path:</strong> Only one computation path for any input string</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Example: DFA for strings ending with "01"</h2>
    <p className="leading-relaxed mt-2">
      Design a DFA over Σ = {"{ 0, 1 }"} that accepts all strings ending with "01".
    </p>

    <h3 className="text-2xl font-semibold mt-4">State Diagram</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DFA for L = { w | w ends with "01" }

         1              0              1
    +---------+    +---------+    +=========+
    |         v    |         v    |         |
  → +---+  0  +---+     +---+     ||  q2  ||
    | q0|---->| q1|---->|| q2||<--+=========+
    +---+     +---+     +======+       0
      ^         |                      |
      |    1    |                      |
      +---------+                      |
      |__________________________← 0 __+

States:
  q0: Start state (no relevant suffix seen)
  q1: Last symbol was '0'
  q2: Last two symbols were '01' (ACCEPTING)

Transition Table:
  State    0      1
  ─────────────────
   q0     q1     q0
   q1     q1     q2
   q2     q1     q0`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Formal Specification</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <ul className="list-disc list-inside space-y-1">
        <li>Q = {"{ q0, q1, q2 }"}</li>
        <li>Σ = {"{ 0, 1 }"}</li>
        <li>q₀ = q0</li>
        <li>F = {"{ q2 }"}</li>
        <li>δ: See transition table above</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Extended Transition Function</h2>
    <p className="leading-relaxed">
      The extended transition function δ* processes entire strings instead of single symbols.
      It is defined recursively:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <p>δ*(q, ε) = q</p>
      <p>δ*(q, wa) = δ(δ*(q, w), a)  where w ∈ Σ* and a ∈ Σ</p>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Example Computation</h3>
    <p className="leading-relaxed mt-2">
      Trace the DFA on input "1101":
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900 text-sm">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Input: 1101

Step 1: δ*(q0, ε) = q0
Step 2: δ*(q0, 1) = δ(q0, 1) = q0
Step 3: δ*(q0, 11) = δ(q0, 1) = q0
Step 4: δ*(q0, 110) = δ(q0, 0) = q1
Step 5: δ*(q0, 1101) = δ(q1, 1) = q2

Final state: q2 ∈ F
Result: ACCEPT`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Transition Table Representation</h2>
    <p className="leading-relaxed">
      A DFA can be represented as a transition table where rows represent states and columns
      represent input symbols.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">State</th>
            <th className="p-3 border">0</th>
            <th className="p-3 border">1</th>
            <th className="p-3 border">Type</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">→ q0</td>
            <td className="p-3 border">q1</td>
            <td className="p-3 border">q0</td>
            <td className="p-3 border">Start</td>
          </tr>
          <tr>
            <td className="p-3 border">q1</td>
            <td className="p-3 border">q1</td>
            <td className="p-3 border">q2</td>
            <td className="p-3 border">-</td>
          </tr>
          <tr>
            <td className="p-3 border">*q2</td>
            <td className="p-3 border">q1</td>
            <td className="p-3 border">q0</td>
            <td className="p-3 border">Final</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Language Accepted by DFA</h2>
    <p className="leading-relaxed">
      The language L(M) accepted by a DFA M is:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      L(M) = {"{ w ∈ Σ* | δ*(q₀, w) ∈ F }"}
    </div>
    <p className="leading-relaxed mt-2">
      A string is accepted if and only if the DFA ends in a final state after processing
      the entire input.
    </p>

    <h2 className="text-3xl font-bold mt-8">Dead State (Trap State)</h2>
    <p className="leading-relaxed">
      A dead state (or trap state) is a non-accepting state that, once entered, cannot be left.
      All transitions from a dead state lead back to itself.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Dead State Example:

           0,1
    +---+  ↓
    |   v
  → +---+  a    +---+  b    +======+
    | q0|----->| q1|------>|| q2 ||
    +---+      +---+       +======+
                 |
                 | a
                 v
               +---+  ←─────────+
               |DEAD|  0,1      |
               +---+  ──────────+

State 'DEAD' is a trap state - input never accepted once reached`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete vs Incomplete DFA</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Complete DFA</th>
            <th className="p-3 border">Incomplete DFA</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Transition defined for every (state, symbol) pair</td>
            <td className="p-3 border">Some transitions may be missing</td>
          </tr>
          <tr>
            <td className="p-3 border">May include dead states</td>
            <td className="p-3 border">Missing transitions imply rejection</td>
          </tr>
          <tr>
            <td className="p-3 border">Standard definition of DFA</td>
            <td className="p-3 border">Often used for convenience</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Design Strategies for DFA</h2>
    <ol className="list-decimal ml-6 space-y-2 mt-4">
      <li><strong>Identify the pattern:</strong> What strings should be accepted?</li>
      <li><strong>Determine states:</strong> What information needs to be remembered?</li>
      <li><strong>Define transitions:</strong> How does each input symbol change the state?</li>
      <li><strong>Mark start state:</strong> Where does computation begin?</li>
      <li><strong>Mark final states:</strong> Which states represent acceptance?</li>
      <li><strong>Test with examples:</strong> Verify with accepting and rejecting strings</li>
    </ol>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>DFA has exactly one transition for each (state, input) pair</li>
        <li>The transition function δ must be a total function</li>
        <li>Every string has a unique computation path in a DFA</li>
        <li>DFAs recognize exactly the regular languages</li>
        <li>DFAs are equivalent in power to NFAs and regular expressions</li>
        <li>Incomplete DFAs can be converted to complete by adding a dead state</li>
      </ul>
    </div>
  </div>
);

export default DFA;
