import React from "react";

const NFA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      NFA (Non-deterministic Finite Automaton)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A <strong>Non-deterministic Finite Automaton (NFA)</strong> is a finite automaton where
      the transition function can map a state-symbol pair to multiple states, or even no states.
      NFAs also allow <strong>epsilon (ε) transitions</strong> - transitions that occur without
      consuming any input.
    </p>

    <h2 className="text-3xl font-bold mt-8">Formal Definition</h2>
    <p className="leading-relaxed">
      An NFA is a 5-tuple M = (Q, Σ, δ, q₀, F) where:
    </p>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Q:</strong> Finite set of states</li>
      <li><strong>Σ:</strong> Input alphabet</li>
      <li><strong>δ:</strong> Q × (Σ ∪ {`{ε}`}) → P(Q) (power set of Q)</li>
      <li><strong>q₀:</strong> Initial state</li>
      <li><strong>F:</strong> Set of accepting states</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">NFA vs DFA</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">DFA</th>
            <th className="p-3 border">NFA</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Transitions</td>
            <td className="p-3 border">Exactly one per symbol</td>
            <td className="p-3 border">Zero, one, or many per symbol</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ε-transitions</td>
            <td className="p-3 border">Not allowed</td>
            <td className="p-3 border">Allowed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Determinism</td>
            <td className="p-3 border">Deterministic</td>
            <td className="p-3 border">Non-deterministic</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">States</td>
            <td className="p-3 border">May have more states</td>
            <td className="p-3 border">Often fewer states</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Construction</td>
            <td className="p-3 border">More complex</td>
            <td className="p-3 border">Easier from regex</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">NFA Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`NFA for pattern (a|b)*abb

States: {q0, q1, q2, q3}
Alphabet: {a, b}
Start: q0
Accept: {q3}

Transition Table:
┌───────┬───────────┬───────────┐
│ State │     a     │     b     │
├───────┼───────────┼───────────┤
│  q0   │ {q0, q1}  │   {q0}    │
│  q1   │    ∅      │   {q2}    │
│  q2   │    ∅      │   {q3}    │
│  q3   │    ∅      │    ∅      │
└───────┴───────────┴───────────┘

State Diagram:
                   a
              ┌────────┐
              │        │
              ▼        │
  →(q0)──a──→(q1)──b──→(q2)──b──→((q3))
     │
     b
     │
     └──┘ (self-loop)

Note: From q0 on 'a', can go to q0 OR q1 (non-determinism)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Epsilon Transitions</h2>
    <p className="leading-relaxed">
      ε-transitions allow the NFA to change states without consuming input. They are useful
      for combining multiple NFAs.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`NFA with ε-transitions for a(b|c)*

     ε          ε
  →(q0)──a──→(q1)──→(q2)──b──→(q3)──ε──→((q5))
                │              ↑
                │     ε        │
                └────→(q4)──c──┘

The ε-transitions allow:
• Moving from q1 to q2 without input
• Choosing between b-path and c-path
• Returning from q3 or after c to repeat`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Thompson's Construction</h2>
    <p className="leading-relaxed">
      Thompson's construction converts a regular expression into an equivalent NFA.
      It builds the NFA recursively based on the structure of the regex.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Thompson's Construction Rules:

1. For symbol 'a':
   →(i)──a──→((f))

2. For ε:
   →(i)──ε──→((f))

3. For r|s (union):
        ┌──ε──→ NFA(r) ──ε──┐
   →(i)─┤                   ├→((f))
        └──ε──→ NFA(s) ──ε──┘

4. For rs (concatenation):
   →(i)──→ NFA(r) ──→ NFA(s) ──→((f))

5. For r* (closure):
              ε
        ┌─────────────┐
        │             │
   →(i)─┴─ε──→ NFA(r) ──ε──┬→((f))
        │                  │
        └────────ε─────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">NFA Acceptance</h2>
    <p className="leading-relaxed">
      An NFA accepts a string if there exists <em>at least one</em> computation path from
      the start state to an accepting state.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Simulating NFA on input "aabb" for (a|b)*abb:

Step 0: Start in {q0}
Step 1: Read 'a' → {q0, q1}
Step 2: Read 'a' → {q0, q1}
Step 3: Read 'b' → {q0, q2}
Step 4: Read 'b' → {q0, q3}

q3 is accepting → String ACCEPTED

Key insight: Track ALL possible states simultaneously`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ε-closure</h2>
    <p className="leading-relaxed">
      The ε-closure of a state is the set of all states reachable by following only
      ε-transitions.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`ε-closure(q):
  Initialize result = {q}
  Push q onto stack

  While stack not empty:
    Pop state t from stack
    For each state u with ε-transition from t to u:
      If u not in result:
        Add u to result
        Push u onto stack

  Return result

Example:
If q0 ──ε──→ q1 ──ε──→ q2

Then ε-closure(q0) = {q0, q1, q2}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Use NFAs?</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>Easy construction:</strong> Simple to build from regular expressions</li>
      <li><strong>Composition:</strong> Easy to combine multiple patterns</li>
      <li><strong>Compact:</strong> Often fewer states than equivalent DFA</li>
      <li><strong>Theoretical:</strong> Useful for proving language properties</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>NFA allows multiple transitions for same input</li>
        <li>ε-transitions change state without consuming input</li>
        <li>Thompson's construction builds NFA from regex</li>
        <li>NFA accepts if any path leads to accepting state</li>
        <li>NFAs and DFAs recognize the same languages</li>
      </ul>
    </div>
  </div>
);

export default NFA;
