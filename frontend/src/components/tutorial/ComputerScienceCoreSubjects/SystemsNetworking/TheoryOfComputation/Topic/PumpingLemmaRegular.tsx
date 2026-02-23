import React from 'react';

const PumpingLemmaRegular: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Pumping Lemma for Regular Languages</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Pumping Lemma is a property that all regular languages satisfy. It is primarily used as a tool to prove that
      certain languages are NOT regular. If a language fails to satisfy the Pumping Lemma, it cannot be regular.
    </p>

    <h2 className="text-3xl font-bold mt-8">Statement of the Pumping Lemma</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Pumping Lemma for Regular Languages:

If L is a regular language, then there exists a constant p >= 1
(called the "pumping length") such that:

For every string s in L with |s| >= p,
s can be divided into three parts s = xyz satisfying:

1. |xy| <= p         (x and y are within first p characters)
2. |y| >= 1          (y is not empty)
3. For all i >= 0:   xy^i z is in L   (y can be "pumped")

In other words: y can be repeated any number of times
(including zero) and the resulting string is still in L.`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Intuition Behind the Lemma</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Why does this work?

If L is regular, it has a DFA with p states.

When processing a string s with |s| >= p:
- The DFA visits at least p+1 states
- By Pigeonhole Principle, some state must repeat
- This creates a cycle in the path

The cycle corresponds to the "y" part:
- x: path from start to first visit of repeated state
- y: cycle (can be traversed 0, 1, 2, ... times)
- z: path from repeated state to accept state

Since y corresponds to a cycle, we can "pump" it!`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Using the Pumping Lemma</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`To prove L is NOT regular using the Pumping Lemma:

1. Assume L is regular (proof by contradiction)

2. Let p be the pumping length (we don't choose p!)

3. Choose a string s in L with |s| >= p
   (Choose wisely - this is the key step)

4. Consider ALL possible ways to divide s = xyz where:
   - |xy| <= p
   - |y| >= 1

5. For each valid division, show that some xy^i z is NOT in L
   (Usually i = 0 or i = 2 works)

6. This contradicts the Pumping Lemma

7. Therefore, L is not regular`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example 1: L = {'{a^n b^n | n >= 0}'}</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Prove L = {a^n b^n | n >= 0} is not regular.

1. Assume L is regular with pumping length p

2. Choose s = a^p b^p (clearly s is in L, |s| = 2p >= p)

3. Since |xy| <= p, both x and y consist only of a's
   Let x = a^j, y = a^k where j >= 0, k >= 1, j + k <= p

4. Consider xy^2 z = a^j a^(2k) a^(p-j-k) b^p
                    = a^(p+k) b^p

5. Since k >= 1, we have p + k > p
   So xy^2 z has more a's than b's
   Therefore xy^2 z is NOT in L

6. This contradicts the Pumping Lemma

7. Therefore, L = {a^n b^n} is NOT regular`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example 2: L = {'{ww | w in {a,b}*}'}</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Prove L = {ww | w in {a,b}*} is not regular.

1. Assume L is regular with pumping length p

2. Choose s = a^p b a^p b (this is ww where w = a^p b)

3. Since |xy| <= p, y consists only of a's from the first half
   Let y = a^k where k >= 1

4. Consider xy^0 z = a^(p-k) b a^p b

5. For this to be in L, it must be ww form
   But a^(p-k) b != a^p b when k >= 1
   So xy^0 z is NOT in L

6. Contradiction! Therefore L is not regular`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Mistakes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Mistake</th>
            <th className="p-3 border">Correction</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Choosing p yourself</td>
            <td className="p-3 border">p is given; you choose s based on p</td>
          </tr>
          <tr>
            <td className="p-3 border">Choosing specific xyz split</td>
            <td className="p-3 border">Must work for ALL valid splits</td>
          </tr>
          <tr>
            <td className="p-3 border">Only checking i = 2</td>
            <td className="p-3 border">One counterexample (any i) is enough</td>
          </tr>
          <tr>
            <td className="p-3 border">Using Pumping Lemma to prove regularity</td>
            <td className="p-3 border">It can only prove NON-regularity</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Important Notes</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>The Pumping Lemma is a necessary but NOT sufficient condition for regularity</li>
      <li>Some non-regular languages satisfy the Pumping Lemma</li>
      <li>If a language fails the Pumping Lemma, it is definitely not regular</li>
      <li>If a language passes the Pumping Lemma, it may or may not be regular</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>The Pumping Lemma states that long strings in regular languages can be "pumped"</li>
        <li>Used to prove languages are NOT regular (proof by contradiction)</li>
        <li>Choose string s wisely - typically based on p</li>
        <li>Must show pumping fails for ALL valid xyz divisions</li>
        <li>Cannot prove a language IS regular using Pumping Lemma</li>
        <li>Common non-regular patterns: a^n b^n, ww, palindromes</li>
      </ul>
    </div>
  </div>
);

export default PumpingLemmaRegular;
