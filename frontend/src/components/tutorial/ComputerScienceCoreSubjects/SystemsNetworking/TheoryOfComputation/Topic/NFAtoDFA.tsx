import React from 'react';

const NFAtoDFA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">NFA to DFA Conversion</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Every Non-deterministic Finite Automaton (NFA) can be converted to an equivalent Deterministic Finite Automaton (DFA) using the
      subset construction (also called powerset construction). This conversion proves that NFAs and DFAs recognize the same class of
      languages - regular languages.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Subset Construction Algorithm</h2>
    <p className="leading-relaxed">
      The key idea is that each state of the DFA corresponds to a set of states of the NFA. The DFA simulates being in multiple
      NFA states simultaneously.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Given NFA N = (Q, Sigma, delta, q0, F)
Construct DFA D = (Q', Sigma, delta', q0', F')

Algorithm:

Step 1: Q' = P(Q) - Power set of Q (all subsets of Q)
        Note: In practice, only reachable subsets are computed

Step 2: q0' = {q0} - Start state is the singleton containing NFA's start

Step 3: F' = {S in Q' | S intersection F != empty}
        - Any subset containing an NFA accepting state is accepting

Step 4: For each S in Q' and each a in Sigma:
        delta'(S, a) = Union of delta(q, a) for all q in S

Step 5: If NFA has epsilon transitions:
        - Include epsilon closures in computations
        - q0' = epsilon-closure({q0})`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Step-by-Step Example</h2>
    <p className="leading-relaxed">
      Convert the following NFA to a DFA:
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`NFA Definition:
Q = {q0, q1, q2}
Sigma = {a, b}
Start: q0
Accept: {q2}

Transition Table:
State | a      | b
------+--------+--------
q0    | {q0,q1}| {q0}
q1    | empty  | {q2}
q2    | empty  | empty`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Conversion Process</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Step 1: Start with DFA start state = {q0}

Step 2: Compute transitions from {q0}:
  delta'({q0}, a) = delta(q0, a) = {q0, q1}
  delta'({q0}, b) = delta(q0, b) = {q0}

Step 3: Process new state {q0, q1}:
  delta'({q0,q1}, a) = delta(q0,a) U delta(q1,a) = {q0,q1} U {} = {q0,q1}
  delta'({q0,q1}, b) = delta(q0,b) U delta(q1,b) = {q0} U {q2} = {q0,q2}

Step 4: Process new state {q0, q2}:
  delta'({q0,q2}, a) = delta(q0,a) U delta(q2,a) = {q0,q1} U {} = {q0,q1}
  delta'({q0,q2}, b) = delta(q0,b) U delta(q2,b) = {q0} U {} = {q0}

Step 5: No new states discovered - DONE

DFA Transition Table:
State   | a       | b
--------+---------+--------
{q0}    | {q0,q1} | {q0}
{q0,q1} | {q0,q1} | {q0,q2}
{q0,q2} | {q0,q1} | {q0}

Start: {q0}
Accept: {q0,q2} (contains q2 from NFA)`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DFA State Naming Convention</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">NFA States</th>
            <th className="p-3 border">DFA State Name</th>
            <th className="p-3 border">Accepting?</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">{'{q0}'}</td>
            <td className="p-3 border">A</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">{'{q0, q1}'}</td>
            <td className="p-3 border">B</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">{'{q0, q2}'}</td>
            <td className="p-3 border">C</td>
            <td className="p-3 border">Yes (contains q2)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handling Epsilon Transitions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`For e-NFA to DFA conversion:

Step 1: Compute epsilon-closure of start state
        q0' = e-closure({q0})

Step 2: For each state S and symbol a:
        delta'(S, a) = e-closure( Union of delta(q, a) for all q in S )

The epsilon-closure ensures all states reachable via epsilon
transitions are included in the computation.

Example:
If e-closure({q0}) = {q0, q1, q2}
Then DFA starts with state {q0, q1, q2}`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Analysis</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Worst Case States</td>
            <td className="p-3 border">2^n states where n = |Q| of NFA</td>
          </tr>
          <tr>
            <td className="p-3 border">Typical Case</td>
            <td className="p-3 border">Much fewer states are usually reachable</td>
          </tr>
          <tr>
            <td className="p-3 border">Time Complexity</td>
            <td className="p-3 border">O(2^n * |Sigma| * n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Space Complexity</td>
            <td className="p-3 border">O(2^n) for storing DFA states</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lazy vs Eager Construction</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Eager Construction:
- Build the entire DFA upfront
- All reachable states computed before use
- Useful when DFA will be used many times

Lazy Construction:
- Compute DFA states on-demand
- Only compute states as they are reached
- Memory efficient for large NFAs
- Used in pattern matching and lexers`}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Every NFA can be converted to an equivalent DFA</li>
        <li>The subset construction creates DFA states from sets of NFA states</li>
        <li>DFA may have up to 2^n states for n-state NFA (exponential blowup)</li>
        <li>In practice, only reachable states are computed</li>
        <li>Epsilon closures must be included when converting e-NFA</li>
        <li>This conversion proves NFA and DFA have equivalent power</li>
      </ul>
    </div>
  </div>
);

export default NFAtoDFA;
