import React from 'react';

const NonRegularity: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Proving Non-Regularity</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Proving that a language is not regular is an important skill in the Theory of Computation.
      There are several techniques available, with the Pumping Lemma being the most common approach.
    </p>

    <h2 className="text-3xl font-bold mt-8">Techniques for Proving Non-Regularity</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Pumping Lemma</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`The most common technique:

1. Assume L is regular
2. Choose s in L with |s| >= p
3. Show that no valid split xyz works
4. Conclude L is not regular

Best for: Languages requiring counting or matching`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Closure Properties</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Use closure properties with known non-regular languages:

1. Assume L is regular
2. Apply operations (intersection, complement, etc.)
   with known regular languages
3. Show the result would be a known non-regular language
4. Contradiction - L must not be regular

Example:
To show L = {a^n b^n c^n} is not regular:
- Intersect with a*b*c* (regular)
- Still get {a^n b^n c^n}
- Use Pumping Lemma on result`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Myhill-Nerode Theorem</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Based on distinguishing strings:

Two strings x and y are "distinguishable" with respect to L if
there exists z such that exactly one of xz and yz is in L.

Myhill-Nerode Theorem:
L is regular if and only if L has finitely many
equivalence classes under the distinguishability relation.

To prove non-regularity:
- Find infinitely many pairwise distinguishable strings
- Each pair needs a different distinguishing suffix`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Using Myhill-Nerode</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Prove L = {a^n b^n | n >= 0} is not regular.

Consider the strings: a, aa, aaa, aaaa, ...

Claim: Any two distinct a^i and a^j (where i != j) are distinguishable.

Proof:
- For a^i, the suffix b^i makes a^i b^i in L
- For a^j with j != i, the suffix b^i makes a^j b^i NOT in L
  (since j != i means it's not of form a^n b^n)

So z = b^i distinguishes a^i from a^j.

Since there are infinitely many strings a, aa, aaa, ...
and each pair is distinguishable, L has infinitely many
equivalence classes.

By Myhill-Nerode, L is not regular.`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Non-Regular Languages</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Language</th>
            <th className="p-3 border">Why Non-Regular</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">{'{a^n b^n | n >= 0}'}</td>
            <td className="p-3 border">Requires counting a's and matching b's</td>
          </tr>
          <tr>
            <td className="p-3 border">{'{ww | w in Sigma*}'}</td>
            <td className="p-3 border">Requires remembering first half</td>
          </tr>
          <tr>
            <td className="p-3 border">{'{w | w is a palindrome}'}</td>
            <td className="p-3 border">Requires comparing first and last halves</td>
          </tr>
          <tr>
            <td className="p-3 border">{'{a^p | p is prime}'}</td>
            <td className="p-3 border">No finite memory can recognize primes</td>
          </tr>
          <tr>
            <td className="p-3 border">{'{a^(n^2) | n >= 0}'}</td>
            <td className="p-3 border">Gaps between squares grow unboundedly</td>
          </tr>
          <tr>
            <td className="p-3 border">{'{a^n b^m | n != m}'}</td>
            <td className="p-3 border">Requires comparing counts</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Quick Recognition Rules</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A language is LIKELY non-regular if it requires:

1. Counting and comparing two quantities
   Example: {a^n b^n}, {a^m b^n | m < n}

2. Remembering arbitrary-length prefixes
   Example: {ww}, {ww^R}

3. Recognizing mathematical properties
   Example: {a^p | p is prime}, {a^(n!) | n >= 0}

4. Comparing distant parts of the string
   Example: palindromes, {a^i b^j c^k | i = j or j = k}

A language is LIKELY regular if:
1. Pattern depends only on fixed-length prefix/suffix
2. Pattern depends on modular arithmetic (finite states)
3. Pattern is a finite set of strings
4. Pattern can be described with finite memory`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Strategy for Problems</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`When asked to prove non-regularity:

1. First, understand what the language recognizes

2. If it involves unbounded counting or comparison:
   - Try Pumping Lemma first
   - Choose s that maximizes the constraint

3. If Pumping Lemma is awkward:
   - Try closure properties
   - Intersect with a regular language to simplify

4. If you need to show infinite equivalence classes:
   - Use Myhill-Nerode theorem
   - Find infinitely many distinguishable strings`}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Pumping Lemma is the most common technique for proving non-regularity</li>
        <li>Closure properties can reduce problems to known non-regular languages</li>
        <li>Myhill-Nerode theorem provides an alternative approach via equivalence classes</li>
        <li>Languages requiring unbounded counting/comparison are typically non-regular</li>
        <li>Patterns like a^n b^n, palindromes, ww are classic non-regular examples</li>
        <li>Choose the technique based on the structure of the language</li>
      </ul>
    </div>
  </div>
);

export default NonRegularity;
