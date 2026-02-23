import React from 'react';

const MooreMachine: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Moore Machine</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Moore Machine is a finite state machine where the output depends only on the current state, not on the input.
      It is a type of transducer that produces output symbols based on state transitions. Moore machines are named after
      Edward F. Moore who introduced them in 1956.
    </p>

    <h2 className="text-3xl font-bold mt-8">Formal Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A Moore Machine is defined as a 6-tuple:
M = (Q, Sigma, O, delta, lambda, q0)

Where:
Q      = Finite set of states
Sigma  = Input alphabet
O      = Output alphabet
delta  = Transition function: Q x Sigma -> Q
lambda = Output function: Q -> O  (output depends on STATE only)
q0     = Initial state (q0 in Q)

Key Property:
- Output is associated with states, not transitions
- Each state produces exactly one output symbol`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Diagram Representation</h2>
    <p className="leading-relaxed">
      In a Moore machine state diagram, each state is labeled with both the state name and its output, separated by a slash (/).
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`State notation: state_name/output

Example: A Moore machine that outputs 1 when it has seen
an odd number of 1s, and 0 otherwise.

     +-------+  0   +-------+
---->| q0/0  |----->| q0/0  |
     +-------+      +-------+
         |              ^
       1 |              | 0
         v              |
     +-------+  1   +-------+
     | q1/1  |<-----| q1/1  |
     +-------+      +-------+

States:
- q0: Even number of 1s seen, output 0
- q1: Odd number of 1s seen, output 1`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Binary Sequence Detector</h2>
    <p className="leading-relaxed">
      Design a Moore machine that outputs 1 when the input sequence ends with "01".
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Moore Machine Definition:
Q = {S0, S1, S2}
Sigma = {0, 1}
O = {0, 1}
q0 = S0

States and Outputs:
S0/0 - Initial state, output 0
S1/0 - Seen 0, waiting for 1, output 0
S2/1 - Seen 01, output 1

Transitions:
delta(S0, 0) = S1    delta(S0, 1) = S0
delta(S1, 0) = S1    delta(S1, 1) = S2
delta(S2, 0) = S1    delta(S2, 1) = S0`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Transition Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Current State</th>
            <th className="p-3 border">Input 0</th>
            <th className="p-3 border">Input 1</th>
            <th className="p-3 border">Output</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">S0</td>
            <td className="p-3 border">S1</td>
            <td className="p-3 border">S0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">S1</td>
            <td className="p-3 border">S1</td>
            <td className="p-3 border">S2</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">S2</td>
            <td className="p-3 border">S1</td>
            <td className="p-3 border">S0</td>
            <td className="p-3 border">1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Processing an Input String</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Input: 1 0 1 0 1

Processing:
Time | State | Input | Output
-----|-------|-------|-------
  0  |  S0   |   -   |   0    (initial output)
  1  |  S0   |   1   |   0
  2  |  S1   |   0   |   0
  3  |  S2   |   1   |   1    (seen "01")
  4  |  S1   |   0   |   0
  5  |  S2   |   1   |   1    (seen "01" again)

Output sequence: 0 0 0 1 0 1
Note: Output length = Input length + 1`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties of Moore Machines</h2>
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
            <td className="p-3 border">Output Length</td>
            <td className="p-3 border">For n inputs, produces n+1 outputs (includes initial state output)</td>
          </tr>
          <tr>
            <td className="p-3 border">Output Timing</td>
            <td className="p-3 border">Output changes only when state changes</td>
          </tr>
          <tr>
            <td className="p-3 border">State Count</td>
            <td className="p-3 border">May require more states than equivalent Mealy machine</td>
          </tr>
          <tr>
            <td className="p-3 border">Synchronous</td>
            <td className="p-3 border">Output is stable between clock edges (in digital circuits)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Digital Circuit Design:</strong> Sequential circuits with registered outputs</li>
      <li><strong>Traffic Light Controllers:</strong> State determines light color</li>
      <li><strong>Vending Machines:</strong> State indicates current amount inserted</li>
      <li><strong>Protocol Design:</strong> Network protocol state machines</li>
      <li><strong>Control Systems:</strong> Industrial automation controllers</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Moore machine output depends only on the current state</li>
        <li>Each state is associated with exactly one output symbol</li>
        <li>For n inputs, Moore machine produces n+1 outputs</li>
        <li>Output is more stable than Mealy machine (changes only on state change)</li>
        <li>Every Moore machine has an equivalent Mealy machine and vice versa</li>
        <li>Moore machines are preferred when output stability is important</li>
      </ul>
    </div>
  </div>
);

export default MooreMachine;
