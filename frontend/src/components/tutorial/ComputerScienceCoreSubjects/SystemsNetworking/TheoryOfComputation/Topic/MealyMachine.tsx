import React from 'react';

const MealyMachine: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Mealy Machine</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Mealy Machine is a finite state machine where the output depends on both the current state and the current input.
      Unlike Moore machines where output is associated with states, Mealy machines associate outputs with transitions.
      Named after George H. Mealy who introduced them in 1955.
    </p>

    <h2 className="text-3xl font-bold mt-8">Formal Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A Mealy Machine is defined as a 6-tuple:
M = (Q, Sigma, O, delta, lambda, q0)

Where:
Q      = Finite set of states
Sigma  = Input alphabet
O      = Output alphabet
delta  = Transition function: Q x Sigma -> Q
lambda = Output function: Q x Sigma -> O  (depends on state AND input)
q0     = Initial state (q0 in Q)

Key Property:
- Output is associated with transitions (edges), not states
- Output changes immediately when input is received`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Diagram Representation</h2>
    <p className="leading-relaxed">
      In a Mealy machine state diagram, each transition is labeled with both the input and output, separated by a slash (input/output).
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Transition notation: input/output

Example: A Mealy machine that outputs 1 when it detects
the pattern "01" in the input.

     +------+  0/0   +------+
---->|  q0  |------->|  q1  |
     +------+        +------+
       ^  |            |  ^
    1/0|  |0/0      1/1|  |0/0
       |  v            v  |
       +--+            +--+

States:
- q0: Initial/Haven't seen 0 yet
- q1: Just saw 0, waiting for 1`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Sequence Detector for "01"</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Mealy Machine Definition:
Q = {S0, S1}
Sigma = {0, 1}
O = {0, 1}
q0 = S0

Transitions with Outputs:
delta(S0, 0) = S1,  lambda(S0, 0) = 0
delta(S0, 1) = S0,  lambda(S0, 1) = 0
delta(S1, 0) = S1,  lambda(S1, 0) = 0
delta(S1, 1) = S0,  lambda(S1, 1) = 1  (detected "01"!)`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Transition Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Current State</th>
            <th className="p-3 border">Input</th>
            <th className="p-3 border">Next State</th>
            <th className="p-3 border">Output</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">S0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">S1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">S0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">S0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">S1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">S1</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">S1</td>
            <td className="p-3 border">1</td>
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
Time | State | Input | Output | Next State
-----|-------|-------|--------|------------
  1  |  S0   |   1   |   0    |    S0
  2  |  S0   |   0   |   0    |    S1
  3  |  S1   |   1   |   1    |    S0  (detected "01"!)
  4  |  S0   |   0   |   0    |    S1
  5  |  S1   |   1   |   1    |    S0  (detected "01"!)

Output sequence: 0 0 1 0 1
Note: Output length = Input length (no initial output)`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Mealy vs Moore Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Mealy Machine</th>
            <th className="p-3 border">Moore Machine</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Output depends on</td>
            <td className="p-3 border">State AND Input</td>
            <td className="p-3 border">State only</td>
          </tr>
          <tr>
            <td className="p-3 border">Output location</td>
            <td className="p-3 border">On transitions (edges)</td>
            <td className="p-3 border">On states (nodes)</td>
          </tr>
          <tr>
            <td className="p-3 border">Output length</td>
            <td className="p-3 border">n (same as input)</td>
            <td className="p-3 border">n+1 (includes initial)</td>
          </tr>
          <tr>
            <td className="p-3 border">Number of states</td>
            <td className="p-3 border">Generally fewer</td>
            <td className="p-3 border">Generally more</td>
          </tr>
          <tr>
            <td className="p-3 border">Output response</td>
            <td className="p-3 border">Faster (immediate)</td>
            <td className="p-3 border">Delayed by one clock</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties of Mealy Machines</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Faster Response:</strong> Output produced immediately with input</li>
      <li><strong>Fewer States:</strong> Often requires fewer states than equivalent Moore machine</li>
      <li><strong>Input-Dependent:</strong> Same state can produce different outputs</li>
      <li><strong>Equivalence:</strong> Every Mealy machine has an equivalent Moore machine</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Serial Communication:</strong> UART, SPI controllers</li>
      <li><strong>Protocol Handlers:</strong> Network packet processing</li>
      <li><strong>Pattern Detection:</strong> Real-time sequence recognition</li>
      <li><strong>Control Logic:</strong> Immediate response systems</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Mealy machine output depends on both current state and input</li>
        <li>Outputs are associated with transitions, not states</li>
        <li>For n inputs, Mealy machine produces exactly n outputs</li>
        <li>Generally requires fewer states than equivalent Moore machine</li>
        <li>Output responds immediately to input changes</li>
        <li>Every Mealy machine can be converted to an equivalent Moore machine</li>
      </ul>
    </div>
  </div>
);

export default MealyMachine;
