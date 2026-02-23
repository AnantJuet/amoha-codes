import React from 'react';

const DecisionRegular: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Decision Problems for Regular Languages</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Decision problems ask yes/no questions about computational objects. For regular languages, many important
      decision problems are decidable, meaning there exist algorithms that always terminate with the correct answer.
    </p>

    <h2 className="text-3xl font-bold mt-8">Membership Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Problem: Given a DFA M and a string w, is w in L(M)?

Algorithm:
1. Start at the initial state of M
2. Process each symbol of w, following transitions
3. Accept if final state is accepting, reject otherwise

Complexity: O(|w|) time, O(1) space

For NFA:
- Use subset construction on-the-fly, or
- Track set of current states
- Complexity: O(|w| * |Q|^2) or O(|w| * |Q|) with optimization`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Emptiness Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Problem: Given a DFA M, is L(M) = empty?

Algorithm:
1. Perform BFS/DFS from the start state
2. Check if any accepting state is reachable
3. L(M) is empty iff no accepting state is reachable

Complexity: O(|Q| + |delta|) = O(|Q| * |Sigma|)

Intuition:
If we can reach an accepting state, some string is accepted.
If no accepting state is reachable, no string is accepted.`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Finiteness Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Problem: Given a DFA M, is L(M) finite?

Algorithm:
1. Find all states reachable from the start state
2. Find all states from which an accepting state is reachable
3. Let S = intersection of these sets
4. L(M) is infinite iff there's a cycle in S

Alternative (using pumping length):
L(M) is finite iff there's no string w with n <= |w| < 2n in L(M)
where n = number of states

Complexity: O(|Q| + |delta|)`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Universality Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Problem: Given a DFA M, is L(M) = Sigma*?

Algorithm:
1. Construct the complement DFA M' (swap accepting/non-accepting)
2. Check if L(M') is empty
3. L(M) = Sigma* iff L(M') = empty

Complexity: O(|Q| + |delta|)

Note: M must be complete (all transitions defined).
Add dead state if necessary.`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Equivalence Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Problem: Given DFAs M1 and M2, is L(M1) = L(M2)?

Algorithm 1: Symmetric Difference
1. Construct DFA for (L1 - L2) union (L2 - L1)
2. Check if this language is empty
3. Equivalent iff symmetric difference is empty

Algorithm 2: Minimization
1. Minimize both M1 and M2
2. Check if minimal DFAs are isomorphic
3. Equivalent iff isomorphic (same structure)

Complexity:
- Method 1: O(|Q1| * |Q2|) using product construction
- Method 2: O(n log n) for minimization + O(n) for comparison`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Inclusion Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Problem: Given DFAs M1 and M2, is L(M1) subset of L(M2)?

Algorithm:
1. Construct DFA for L(M1) intersection L(M2)'
   (strings in M1 but not in M2)
2. Check if this language is empty
3. L(M1) subset of L(M2) iff L(M1) int L(M2)' = empty

Using product construction:
- Build product DFA with M1 and complement of M2
- Accept if M1 accepts AND M2 rejects
- Subset holds iff no accepting state is reachable

Complexity: O(|Q1| * |Q2|)`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Summary of Decision Problems</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Problem</th>
            <th className="p-3 border">Question</th>
            <th className="p-3 border">Decidable?</th>
            <th className="p-3 border">Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Membership</td>
            <td className="p-3 border">w in L?</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">O(|w|)</td>
          </tr>
          <tr>
            <td className="p-3 border">Emptiness</td>
            <td className="p-3 border">L = empty?</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Finiteness</td>
            <td className="p-3 border">|L| finite?</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Universality</td>
            <td className="p-3 border">L = Sigma*?</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Equivalence</td>
            <td className="p-3 border">L1 = L2?</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">O(n log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Inclusion</td>
            <td className="p-3 border">L1 subset L2?</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">O(n1 * n2)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Contrast with Other Language Classes</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Problem          | Regular | CFL      | CSL       | RE
-----------------+---------+----------+-----------+------------
Membership       | Decide  | Decide   | Decide    | Semi-decide
Emptiness        | Decide  | Decide   | Undecide  | Undecide
Finiteness       | Decide  | Decide   | Undecide  | Undecide
Universality     | Decide  | Undecide | Undecide  | Undecide
Equivalence      | Decide  | Undecide | Undecide  | Undecide

Regular languages have the best decidability properties!`}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>All major decision problems for regular languages are decidable</li>
        <li>Membership testing runs in linear time for DFAs</li>
        <li>Emptiness and finiteness use graph reachability</li>
        <li>Equivalence can use minimization or product construction</li>
        <li>Regular languages have better decidability than CFLs and beyond</li>
        <li>Efficient algorithms exist for all these problems</li>
      </ul>
    </div>
  </div>
);

export default DecisionRegular;
