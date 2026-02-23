import React from 'react';

const MyhillNerode: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Myhill-Nerode Theorem</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Myhill-Nerode Theorem provides a necessary and sufficient condition for a language to be regular.
      It characterizes regular languages in terms of equivalence relations on strings and directly relates
      to the minimum number of states in a DFA for the language.
    </p>

    <h2 className="text-3xl font-bold mt-8">Indistinguishability Relation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Definition:

For a language L over alphabet Sigma, define the relation ~L on Sigma*:

x ~L y  if and only if  for all z in Sigma*: (xz in L <=> yz in L)

In words: x and y are "indistinguishable" (or equivalent) with
respect to L if they behave the same way when any suffix z is added.

Properties of ~L:
1. Reflexive: x ~L x
2. Symmetric: x ~L y implies y ~L x
3. Transitive: x ~L y and y ~L z implies x ~L z

Therefore ~L is an equivalence relation.`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">The Myhill-Nerode Theorem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Myhill-Nerode Theorem:

The following three statements are equivalent:

1. L is regular (recognized by some DFA)

2. L is the union of some equivalence classes of a
   right-invariant equivalence relation of finite index

3. The relation ~L has finite index (finitely many
   equivalence classes)

Furthermore:
- The index of ~L equals the number of states in the
  minimum DFA for L
- Each equivalence class corresponds to a state in
  the minimum DFA`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Understanding Equivalence Classes</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`For a language L, [x] denotes the equivalence class of x under ~L:
[x] = {y in Sigma* | x ~L y}

Example: L = strings ending with 'a' over {a, b}

Equivalence classes:
[epsilon] = strings NOT ending with 'a' = {epsilon, b, ab, bb, ...}
[a] = strings ending with 'a' = {a, aa, ba, aba, ...}

These are the only two classes!
- Index of ~L = 2
- Minimum DFA has 2 states

For the minimum DFA:
- State for [epsilon]: reached by strings not ending in 'a'
- State for [a]: reached by strings ending in 'a' (accepting)`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Proving Non-Regularity</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Prove L = {a^n b^n | n >= 0} is not regular using Myhill-Nerode.

Consider the strings: epsilon, a, aa, aaa, a^4, a^5, ...

Claim: For i != j, a^i is NOT equivalent to a^j under ~L.

Proof:
Let z = b^i (the distinguishing suffix)
- a^i b^i is in L (it's a^i b^i with equal i's)
- a^j b^i is NOT in L (j != i, so different counts)

Therefore a^i and a^j are distinguishable.

Since there are infinitely many strings a, aa, aaa, ...
and they are pairwise distinguishable, ~L has infinitely
many equivalence classes.

By Myhill-Nerode, L is not regular.`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Connection to Minimum DFA</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`The Myhill-Nerode theorem tells us:

1. Each equivalence class of ~L corresponds to one state
   in the minimum DFA

2. The start state corresponds to [epsilon]

3. The accepting states correspond to classes [x] where x in L

4. Transitions: delta([x], a) = [xa]
   (concatenating a to any string in [x] gives strings in [xa])

This gives a direct construction of the minimum DFA:
- States = equivalence classes
- For each class and each symbol, determine the resulting class
- Mark classes containing L-strings as accepting`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Finding Distinguishing Extensions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Language L</th>
            <th className="p-3 border">Strings</th>
            <th className="p-3 border">Distinguisher</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">{'{a^n b^n}'}</td>
            <td className="p-3 border">a^i vs a^j</td>
            <td className="p-3 border">z = b^i</td>
          </tr>
          <tr>
            <td className="p-3 border">{'{ww}'}</td>
            <td className="p-3 border">a^i vs a^j</td>
            <td className="p-3 border">z = a^i</td>
          </tr>
          <tr>
            <td className="p-3 border">palindromes</td>
            <td className="p-3 border">a^i b vs a^j b</td>
            <td className="p-3 border">z = a^i</td>
          </tr>
          <tr>
            <td className="p-3 border">{'{a^p | p prime}'}</td>
            <td className="p-3 border">a^i vs a^j</td>
            <td className="p-3 border">z = a^k for appropriate k</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages Over Pumping Lemma</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Myhill-Nerode provides necessary AND sufficient conditions</li>
      <li>Can prove both regularity and non-regularity</li>
      <li>Gives the exact minimum DFA size</li>
      <li>No need to consider all possible string decompositions</li>
      <li>More intuitive: just find distinguishable strings</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Myhill-Nerode gives necessary and sufficient conditions for regularity</li>
        <li>L is regular iff ~L has finitely many equivalence classes</li>
        <li>The index of ~L equals the minimum DFA size</li>
        <li>To prove non-regularity: find infinitely many distinguishable strings</li>
        <li>Each equivalence class becomes a state in the minimum DFA</li>
        <li>More powerful than Pumping Lemma (works both ways)</li>
      </ul>
    </div>
  </div>
);

export default MyhillNerode;
