import React from "react";

const FAIntroduction: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Finite Automata
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Finite Automata (FA), also known as Finite State Machines (FSM), are the simplest computational
      models in the theory of computation. They are abstract machines that can be in one of a finite
      number of states at any given time. Finite automata are used to recognize regular languages and
      form the foundation for understanding more complex computational models.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Finite Automaton?</h2>
    <p className="leading-relaxed">
      A finite automaton is a mathematical model of computation that consists of:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li>A finite set of states</li>
      <li>A finite set of input symbols (alphabet)</li>
      <li>A transition function that determines state changes</li>
      <li>A designated start state</li>
      <li>A set of accepting (final) states</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Visual Representation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Finite Automaton Structure:

        Input Tape (read-only)
    +---+---+---+---+---+---+---+
    | a | b | b | a | a | ... |   |
    +---+---+---+---+---+---+---+
          ↑
      Read Head (moves left to right)
          |
          v
    +-------------+
    |   Finite    |
    |   Control   |  (States: q0, q1, q2, ...)
    |   Unit      |
    +-------------+

Key Characteristics:
- No external memory
- Read input once, left to right
- Cannot write on the tape
- Accept or reject at end of input`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Formal Definition</h2>
    <p className="leading-relaxed">
      A finite automaton is formally defined as a 5-tuple M = (Q, Σ, δ, q₀, F) where:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">States</td>
            <td className="p-3 border font-mono text-gray-900">Q</td>
            <td className="p-3 border">Finite, non-empty set of states</td>
          </tr>
          <tr>
            <td className="p-3 border">Input Alphabet</td>
            <td className="p-3 border font-mono text-gray-900">Σ</td>
            <td className="p-3 border">Finite set of input symbols</td>
          </tr>
          <tr>
            <td className="p-3 border">Transition Function</td>
            <td className="p-3 border font-mono text-gray-900">δ</td>
            <td className="p-3 border">δ: Q × Σ → Q (for DFA) or δ: Q × Σ → 2^Q (for NFA)</td>
          </tr>
          <tr>
            <td className="p-3 border">Start State</td>
            <td className="p-3 border font-mono text-gray-900">q₀</td>
            <td className="p-3 border">Initial state, q₀ ∈ Q</td>
          </tr>
          <tr>
            <td className="p-3 border">Final States</td>
            <td className="p-3 border font-mono text-gray-900">F</td>
            <td className="p-3 border">Set of accepting states, F ⊆ Q</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Finite Automata</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Transition</th>
            <th className="p-3 border">Determinism</th>
            <th className="p-3 border">ε-moves</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">DFA</td>
            <td className="p-3 border">Exactly one next state</td>
            <td className="p-3 border">Deterministic</td>
            <td className="p-3 border">Not allowed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">NFA</td>
            <td className="p-3 border">Zero or more next states</td>
            <td className="p-3 border">Non-deterministic</td>
            <td className="p-3 border">Not allowed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ε-NFA</td>
            <td className="p-3 border">Zero or more next states</td>
            <td className="p-3 border">Non-deterministic</td>
            <td className="p-3 border">Allowed</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Diagram Notation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`State Diagram Conventions:

    State:           Represented as a circle
         +---+
         | q |
         +---+

    Start State:     Arrow pointing to it
         →  +---+
            | q₀|
            +---+

    Final State:     Double circle
         +-------+
         | +---+ |
         | | q | |
         | +---+ |
         +-------+

    Transition:      Arrow with input symbol
         +---+   a    +---+
         | q₁|------->| q₂|
         +---+        +---+

Example DFA (accepts strings ending with 'ab'):

         →  +----+   a    +----+   b    +======+
            | q0 |------->| q1 |------->|| q2 ||
            +----+        +----+        +======+
               ↑    b       ↑  a           |
               |____________|______________|
                    a              b`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">How a Finite Automaton Works</h2>
    <ol className="list-decimal ml-6 space-y-2 mt-4">
      <li><strong>Start:</strong> Begin in the initial state q₀</li>
      <li><strong>Read:</strong> Read the next input symbol from the tape</li>
      <li><strong>Transition:</strong> Move to the next state according to the transition function</li>
      <li><strong>Repeat:</strong> Continue until all input symbols are processed</li>
      <li><strong>Decision:</strong> Accept if current state is in F; otherwise reject</li>
    </ol>

    <h2 className="text-3xl font-bold mt-8">Language Accepted by FA</h2>
    <p className="leading-relaxed">
      The language L(M) accepted by a finite automaton M is the set of all strings that cause M
      to end in an accepting state:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      L(M) = {"{ w ∈ Σ* | δ*(q₀, w) ∈ F }"}
    </div>
    <p className="leading-relaxed mt-2">
      Where δ* is the extended transition function that processes entire strings.
    </p>

    <h2 className="text-3xl font-bold mt-8">Equivalence Results</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold">Important Theorem:</p>
      <p className="mt-2">DFA, NFA, and ε-NFA are all equivalent in computational power.</p>
      <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
        <li>Any NFA can be converted to an equivalent DFA</li>
        <li>Any ε-NFA can be converted to an equivalent NFA</li>
        <li>They all recognize exactly the class of regular languages</li>
        <li>NFA may have exponentially fewer states than equivalent DFA</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of Finite Automata</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Lexical Analysis:</strong> Tokenizing source code in compilers</li>
      <li><strong>Pattern Matching:</strong> Regular expression engines (grep, sed)</li>
      <li><strong>Text Processing:</strong> Search and replace operations</li>
      <li><strong>Protocol Design:</strong> Network protocol state machines</li>
      <li><strong>Hardware Design:</strong> Digital circuit design and verification</li>
      <li><strong>Game AI:</strong> Character behavior modeling</li>
      <li><strong>Natural Language Processing:</strong> Morphological analysis</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Finite automata are the simplest model of computation</li>
        <li>They have no memory beyond their finite set of states</li>
        <li>They can only read input, not write</li>
        <li>They recognize exactly the class of regular languages</li>
        <li>DFA, NFA, and ε-NFA have equal computational power</li>
        <li>FA are used extensively in compiler design and text processing</li>
      </ul>
    </div>
  </div>
);

export default FAIntroduction;
