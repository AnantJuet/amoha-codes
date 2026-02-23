import React from 'react';

const DFAMinimization: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">DFA Minimization</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      DFA minimization is the process of converting a given DFA into an equivalent DFA with the minimum number of states.
      The minimized DFA is unique (up to state naming) and is the most efficient representation for the language it recognizes.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Minimize DFAs?</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Reduced Complexity:</strong> Fewer states mean simpler automata</li>
      <li><strong>Space Efficiency:</strong> Less memory required for storage</li>
      <li><strong>Faster Processing:</strong> Fewer states to traverse during string processing</li>
      <li><strong>Canonical Form:</strong> Unique minimal DFA helps in comparing languages</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Distinguishable States</h2>
    <p className="leading-relaxed">
      Two states are distinguishable if there exists a string that, when processed from these states, leads to different outcomes
      (one accepts, one rejects).
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Definition of Distinguishable States:

States p and q are distinguishable if:
  There exists a string w such that exactly one of
  delta*(p, w) and delta*(q, w) is in F

States p and q are equivalent (indistinguishable) if:
  For all strings w:
  delta*(p, w) in F if and only if delta*(q, w) in F

Key Insight:
- Equivalent states can be merged without changing the language
- The minimal DFA has no equivalent states`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Table Filling Algorithm (Hopcroft's Method)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Algorithm to find distinguishable pairs:

Step 1: Create a table for all pairs (p, q) where p != q

Step 2: Mark all pairs where one state is final and
        the other is non-final (base case)
        - These are clearly distinguishable

Step 3: Repeat until no new pairs are marked:
        For each unmarked pair (p, q):
          For each symbol a in Sigma:
            If (delta(p,a), delta(q,a)) is marked:
              Mark (p, q) as distinguishable

Step 4: Unmarked pairs are equivalent states
        - Merge equivalent states into single states`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Minimizing a DFA</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Given DFA:
States: {q0, q1, q2, q3, q4, q5}
Alphabet: {0, 1}
Start: q0
Final: {q2, q4}

Transitions:
q0 --0--> q1, q0 --1--> q3
q1 --0--> q2, q1 --1--> q4
q2 --0--> q1, q2 --1--> q4
q3 --0--> q2, q3 --1--> q4
q4 --0--> q1, q4 --1--> q4
q5 --0--> q5, q5 --1--> q4`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Step 1: Initial Partition</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`P0 = { {q2, q4}, {q0, q1, q3, q5} }
       Final states | Non-final states`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Step 2: Refine Partitions</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Check {q0, q1, q3, q5}:

On input 0:
  q0 --0--> q1 (non-final group)
  q1 --0--> q2 (final group)
  q3 --0--> q2 (final group)
  q5 --0--> q5 (non-final group)

q0 and q5 go to non-final, q1 and q3 go to final
Split into: {q0, q5} and {q1, q3}

P1 = { {q2, q4}, {q0, q5}, {q1, q3} }

Continue refining...

On input 1 from {q0, q5}:
  q0 --1--> q3 (in {q1, q3})
  q5 --1--> q4 (in {q2, q4})
Different groups! Split further.

P2 = { {q2, q4}, {q0}, {q5}, {q1, q3} }`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Step 3: Final Partition</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`After complete refinement:
P_final = { {q2, q4}, {q1, q3}, {q0}, {q5} }

Equivalent pairs: (q2, q4) and (q1, q3)

Minimized DFA States:
A = {q0}
B = {q1, q3}
C = {q2, q4}
D = {q5}

Note: q5 is unreachable from q0, can be removed`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Partition Refinement Algorithm</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">Action</th>
            <th className="p-3 border">Result</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">Remove unreachable states</td>
            <td className="p-3 border">Smaller state set</td>
          </tr>
          <tr>
            <td className="p-3 border">2</td>
            <td className="p-3 border">Initial partition: F and Q-F</td>
            <td className="p-3 border">Two groups</td>
          </tr>
          <tr>
            <td className="p-3 border">3</td>
            <td className="p-3 border">Refine: split distinguishable states</td>
            <td className="p-3 border">More groups</td>
          </tr>
          <tr>
            <td className="p-3 border">4</td>
            <td className="p-3 border">Repeat until no change</td>
            <td className="p-3 border">Final partition</td>
          </tr>
          <tr>
            <td className="p-3 border">5</td>
            <td className="p-3 border">Create new DFA from partition</td>
            <td className="p-3 border">Minimal DFA</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complexity Analysis</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Table Filling Method:
- Time: O(n^2) where n = number of states
- Space: O(n^2) for the table

Hopcroft's Algorithm (optimized):
- Time: O(n log n)
- Most efficient known algorithm

Moore's Algorithm:
- Time: O(n^2)
- Easier to implement`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties of Minimal DFA</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>The minimal DFA is unique up to isomorphism (state renaming)</li>
      <li>No two states in the minimal DFA are equivalent</li>
      <li>All states in the minimal DFA are reachable from the start state</li>
      <li>Every regular language has exactly one minimal DFA</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>DFA minimization produces the smallest equivalent DFA</li>
        <li>Two states are equivalent if no string can distinguish them</li>
        <li>The table-filling algorithm marks distinguishable pairs iteratively</li>
        <li>Partition refinement groups equivalent states together</li>
        <li>The minimal DFA is unique for each regular language</li>
        <li>Always remove unreachable states before minimization</li>
      </ul>
    </div>
  </div>
);

export default DFAMinimization;
