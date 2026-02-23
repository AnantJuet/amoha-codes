import React from 'react';

const MealyToMoore: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Mealy to Moore Machine Conversion</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Every Mealy machine can be converted to an equivalent Moore machine. This conversion may require creating additional states
      because different inputs to the same state might produce different outputs, and in a Moore machine, each state can only
      have one output.
    </p>

    <h2 className="text-3xl font-bold mt-8">Conversion Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Given Mealy Machine:
M_mealy = (Q, Sigma, O, delta, lambda_mealy, q0)
where lambda_mealy: Q x Sigma -> O

Construct Moore Machine:
M_moore = (Q', Sigma, O, delta', lambda_moore, q0')

Conversion Steps:

Step 1: For each state q in Q, create new states based on
        possible outputs when entering q.

        For each distinct output o that can be produced
        when transitioning TO state q, create state (q, o).

Step 2: Define new start state:
        If q0 has incoming transitions with output o,
        use (q0, o) or create (q0, default_output).

Step 3: For each transition delta(p, a) = q with
        lambda_mealy(p, a) = o:

        Create transition delta'((p, x), a) = (q, o)
        for all states (p, x) in Q'.

Step 4: Define output function:
        lambda_moore((q, o)) = o`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Step-by-Step Example</h2>
    <p className="leading-relaxed">
      Convert the following Mealy machine to a Moore machine:
    </p>

    <h3 className="text-2xl font-semibold mt-6">Original Mealy Machine</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`States: {q0, q1}
Alphabet: {0, 1}
Output: {0, 1}
Start: q0

Transitions and Outputs:
delta(q0, 0) = q1,  lambda(q0, 0) = 0
delta(q0, 1) = q0,  lambda(q0, 1) = 1
delta(q1, 0) = q1,  lambda(q1, 0) = 1
delta(q1, 1) = q0,  lambda(q1, 1) = 0`}</pre>
    </div>

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
            <td className="p-3 border">q0</td>
            <td className="p-3 border">q1 / 0</td>
            <td className="p-3 border">q0 / 1</td>
          </tr>
          <tr>
            <td className="p-3 border">q1</td>
            <td className="p-3 border">q1 / 1</td>
            <td className="p-3 border">q0 / 0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Step 1: Identify Incoming Outputs</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`For each state, find all outputs on incoming transitions:

State q0:
  - From q0 on input 1: output 1
  - From q1 on input 1: output 0
  Incoming outputs to q0: {0, 1}
  Create: (q0, 0) and (q0, 1)

State q1:
  - From q0 on input 0: output 0
  - From q1 on input 0: output 1
  Incoming outputs to q1: {0, 1}
  Create: (q1, 0) and (q1, 1)`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Step 2: Determine Start State</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Since q0 is the start state and has no "initial" output
defined, we typically choose a default or the most common
incoming output.

Let's choose (q0, 0) as the start state (or we can add
a special initial state with output 0).`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Step 3: Define New Transitions</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`From (q0, 0) and (q0, 1):
  On input 0: goes to q1 with output 0 -> (q1, 0)
  On input 1: goes to q0 with output 1 -> (q0, 1)

From (q1, 0) and (q1, 1):
  On input 0: goes to q1 with output 1 -> (q1, 1)
  On input 1: goes to q0 with output 0 -> (q0, 0)

Note: All states with same original state have same
transitions (they differ only in their output).`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Resulting Moore Machine</h3>
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
            <td className="p-3 border">(q0, 0) - start</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">(q1, 0)</td>
            <td className="p-3 border">(q0, 1)</td>
          </tr>
          <tr>
            <td className="p-3 border">(q0, 1)</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">(q1, 0)</td>
            <td className="p-3 border">(q0, 1)</td>
          </tr>
          <tr>
            <td className="p-3 border">(q1, 0)</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">(q1, 1)</td>
            <td className="p-3 border">(q0, 0)</td>
          </tr>
          <tr>
            <td className="p-3 border">(q1, 1)</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">(q1, 1)</td>
            <td className="p-3 border">(q0, 0)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Verification</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Input: 0 1 0

Mealy Machine:
State: q0 -> q1 -> q0 -> q1
Output:    0    0    0
(3 outputs)

Moore Machine:
State: (q0,0) -> (q1,0) -> (q0,0) -> (q1,0)
Output:   0       0        0        0
(4 outputs including initial)

Moore output (after removing first) = 0, 0, 0
Matches Mealy output!`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Count Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scenario</th>
            <th className="p-3 border">State Count</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Original Mealy</td>
            <td className="p-3 border">n states</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst Case Moore</td>
            <td className="p-3 border">n * |O| states (n times output alphabet size)</td>
          </tr>
          <tr>
            <td className="p-3 border">Best Case Moore</td>
            <td className="p-3 border">n states (if each state has unique incoming output)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Every Mealy machine can be converted to an equivalent Moore machine</li>
        <li>The Moore machine may have more states than the original Mealy machine</li>
        <li>New states are created for each (state, incoming-output) combination</li>
        <li>The conversion preserves the output behavior (with Moore having one extra initial output)</li>
        <li>Worst case: number of states multiplied by output alphabet size</li>
        <li>This conversion is more complex than Moore to Mealy conversion</li>
      </ul>
    </div>
  </div>
);

export default MealyToMoore;
