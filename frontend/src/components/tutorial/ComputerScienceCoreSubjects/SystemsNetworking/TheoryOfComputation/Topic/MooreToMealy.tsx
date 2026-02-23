import React from 'react';

const MooreToMealy: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Moore to Mealy Machine Conversion</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Every Moore machine can be converted to an equivalent Mealy machine. The conversion moves the output from states to
      transitions, resulting in a machine that produces the same output sequence (excluding the initial output of the Moore machine).
    </p>

    <h2 className="text-3xl font-bold mt-8">Conversion Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Given Moore Machine:
M_moore = (Q, Sigma, O, delta, lambda_moore, q0)
where lambda_moore: Q -> O

Construct Mealy Machine:
M_mealy = (Q, Sigma, O, delta, lambda_mealy, q0)
where lambda_mealy: Q x Sigma -> O

Conversion Rule:
For each transition delta(q, a) = p:
  lambda_mealy(q, a) = lambda_moore(p)

In words: The Mealy output on a transition equals the
Moore output of the destination state.

Note:
- Same states Q
- Same transitions delta
- Only the output function changes`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Step-by-Step Example</h2>
    <p className="leading-relaxed">
      Convert the following Moore machine to a Mealy machine:
    </p>

    <h3 className="text-2xl font-semibold mt-6">Original Moore Machine</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Moore Machine (detects odd number of 1s):

States and Outputs:
S0/0 - Even number of 1s (output 0)
S1/1 - Odd number of 1s (output 1)

Transitions:
delta(S0, 0) = S0
delta(S0, 1) = S1
delta(S1, 0) = S1
delta(S1, 1) = S0`}</pre>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">State</th>
            <th className="p-3 border">Output</th>
            <th className="p-3 border">Input 0</th>
            <th className="p-3 border">Input 1</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">S0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">S0</td>
            <td className="p-3 border">S1</td>
          </tr>
          <tr>
            <td className="p-3 border">S1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">S1</td>
            <td className="p-3 border">S0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Conversion Process</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Apply conversion rule: lambda_mealy(q, a) = lambda_moore(delta(q, a))

For S0:
  delta(S0, 0) = S0, lambda_moore(S0) = 0
    => lambda_mealy(S0, 0) = 0

  delta(S0, 1) = S1, lambda_moore(S1) = 1
    => lambda_mealy(S0, 1) = 1

For S1:
  delta(S1, 0) = S1, lambda_moore(S1) = 1
    => lambda_mealy(S1, 0) = 1

  delta(S1, 1) = S0, lambda_moore(S0) = 0
    => lambda_mealy(S1, 1) = 0`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Resulting Mealy Machine</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">State</th>
            <th className="p-3 border">Input 0 (Next/Output)</th>
            <th className="p-3 border">Input 1 (Next/Output)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">S0</td>
            <td className="p-3 border">S0 / 0</td>
            <td className="p-3 border">S1 / 1</td>
          </tr>
          <tr>
            <td className="p-3 border">S1</td>
            <td className="p-3 border">S1 / 1</td>
            <td className="p-3 border">S0 / 0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Verification</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Input: 1 0 1 1

Moore Machine:
State: S0 -> S1 -> S1 -> S0 -> S0
Output: 0    1    1    0    0
(Initial + 4 outputs = 5 total)

Mealy Machine:
State: S0 -> S1 -> S1 -> S0 -> S0
Output:    1    1    0    0
(4 outputs, matches Moore after initial)

The Mealy output matches the Moore output shifted by one position.`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Properties</h2>
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
            <td className="p-3 border">State Count</td>
            <td className="p-3 border">Same number of states (no reduction)</td>
          </tr>
          <tr>
            <td className="p-3 border">Transitions</td>
            <td className="p-3 border">Same transition structure</td>
          </tr>
          <tr>
            <td className="p-3 border">Output Difference</td>
            <td className="p-3 border">Moore has one extra initial output</td>
          </tr>
          <tr>
            <td className="p-3 border">Equivalence</td>
            <td className="p-3 border">Output sequences match (after initial)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Visual Representation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Moore Machine:
     0          1
  +-----+    +-----+
  v     |    v     |
+--------+  +--------+
| S0 / 0 |  | S1 / 1 |
+--------+  +--------+
     |   1   ^
     +------>+
         0
     <------+

Mealy Machine:
      0/0        1/1
   +-----+    +-----+
   v     |    v     |
+------+      +------+
|  S0  |      |  S1  |
+------+      +------+
    |    1/1   ^
    +--------->+
         0/0
    <---------+`}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Every Moore machine can be converted to an equivalent Mealy machine</li>
        <li>The number of states remains the same after conversion</li>
        <li>Mealy output = Moore output of the destination state</li>
        <li>Mealy machine output is shifted one step earlier than Moore</li>
        <li>The conversion only changes where output is associated (edges vs nodes)</li>
        <li>This conversion is straightforward and always possible</li>
      </ul>
    </div>
  </div>
);

export default MooreToMealy;
