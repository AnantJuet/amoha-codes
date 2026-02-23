import React from 'react';

const EpsilonNFAtoNFA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Epsilon NFA to NFA Conversion</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An Epsilon NFA (e-NFA) can be converted to an equivalent NFA without epsilon transitions. This conversion eliminates all epsilon
      moves while preserving the language recognized by the automaton. The key technique involves using epsilon closures to compute
      new transitions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Conversion Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Given e-NFA N = (Q, Sigma, delta, q0, F)
Construct NFA N' = (Q, Sigma, delta', q0, F')

Algorithm:

Step 1: Keep the same set of states Q and alphabet Sigma

Step 2: Compute epsilon-closure for every state:
        e-closure(q) = all states reachable from q via epsilon

Step 3: Compute new transition function delta':
        For each state q and symbol a:
        delta'(q, a) = e-closure( Union of delta(r, a)
                       for all r in e-closure(q) )

Step 4: Update final states:
        F' = F U {q in Q | e-closure(q) intersection F != empty}

        A state is final if its epsilon-closure contains
        any original final state`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Step-by-Step Example</h2>
    <p className="leading-relaxed">
      Consider the following e-NFA:
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`e-NFA Definition:
Q = {q0, q1, q2, q3}
Sigma = {a, b}
Start: q0
Accept: {q3}

Transition Table:
State | a    | b    | epsilon
------+------+------+---------
q0    | -    | -    | {q1}
q1    | {q2} | -    | -
q2    | -    | {q2} | {q3}
q3    | -    | -    | -`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Step 1: Compute Epsilon Closures</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`e-closure(q0) = {q0, q1}     (q0 -> q1 via epsilon)
e-closure(q1) = {q1}         (no epsilon from q1)
e-closure(q2) = {q2, q3}     (q2 -> q3 via epsilon)
e-closure(q3) = {q3}         (no epsilon from q3)`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Step 2: Compute New Transitions</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`For q0:
  e-closure(q0) = {q0, q1}

  delta'(q0, a):
    - From q0 on 'a': nothing
    - From q1 on 'a': {q2}
    - Union: {q2}
    - e-closure({q2}) = {q2, q3}
    Result: delta'(q0, a) = {q2, q3}

  delta'(q0, b):
    - From q0 on 'b': nothing
    - From q1 on 'b': nothing
    Result: delta'(q0, b) = empty

For q1:
  e-closure(q1) = {q1}

  delta'(q1, a) = e-closure({q2}) = {q2, q3}
  delta'(q1, b) = empty

For q2:
  e-closure(q2) = {q2, q3}

  delta'(q2, a) = empty
  delta'(q2, b) = e-closure({q2}) = {q2, q3}

For q3:
  e-closure(q3) = {q3}

  delta'(q3, a) = empty
  delta'(q3, b) = empty`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Step 3: Determine Final States</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Original F = {q3}

Check each state's epsilon-closure:
- e-closure(q0) = {q0, q1}, does not contain q3: q0 not final
- e-closure(q1) = {q1}, does not contain q3: q1 not final
- e-closure(q2) = {q2, q3}, contains q3: q2 is final
- e-closure(q3) = {q3}, contains q3: q3 is final

New F' = {q2, q3}`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Resulting NFA</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">State</th>
            <th className="p-3 border">a</th>
            <th className="p-3 border">b</th>
            <th className="p-3 border">Final?</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">q0 (start)</td>
            <td className="p-3 border">{'{q2, q3}'}</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">q1</td>
            <td className="p-3 border">{'{q2, q3}'}</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">q2</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">{'{q2, q3}'}</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">q3</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">-</td>
            <td className="p-3 border">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why This Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`The conversion preserves language equivalence because:

1. Any path in the e-NFA using epsilon transitions is
   captured by the epsilon-closure computation

2. The new transitions "jump over" epsilon moves by
   computing where we can end up after:
   - Following epsilon transitions from current state
   - Reading an input symbol
   - Following epsilon transitions again

3. Adding states to F' handles the case where a string
   is accepted by reaching a final state via epsilon
   transitions (without reading more input)`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Special Case: Epsilon-Only Paths</h2>
    <p className="leading-relaxed">
      If the e-NFA accepts the empty string (epsilon), the start state's epsilon-closure will contain a final state.
      In this case, the start state becomes final in the resulting NFA.
    </p>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>e-NFA can be converted to NFA without epsilon transitions</li>
        <li>The conversion uses epsilon-closures to compute new transitions</li>
        <li>States become final if their epsilon-closure contains a final state</li>
        <li>The number of states remains the same after conversion</li>
        <li>The resulting NFA recognizes exactly the same language</li>
        <li>This is often an intermediate step before converting to DFA</li>
      </ul>
    </div>
  </div>
);

export default EpsilonNFAtoNFA;
