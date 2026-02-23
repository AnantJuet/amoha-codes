import React from 'react';

const ClosureRegular: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Closure Properties of Regular Languages</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A class of languages is said to be closed under an operation if applying that operation to languages in the class
      always produces another language in the same class. Regular languages are closed under many important operations.
    </p>

    <h2 className="text-3xl font-bold mt-8">Union Closure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`If L1 and L2 are regular, then L1 U L2 is regular.

Construction 1: NFA Union
- Create new start state q0
- Add epsilon transitions from q0 to starts of M1 and M2
- Accept states are union of accept states

Construction 2: Product DFA
- States: Q1 x Q2
- Accept if either component accepts
- Transition: delta((p,q), a) = (delta1(p,a), delta2(q,a))

Example:
L1 = {strings ending in 'a'}
L2 = {strings ending in 'b'}
L1 U L2 = {strings ending in 'a' or 'b'} = (a+b)*(a+b)`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Intersection Closure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`If L1 and L2 are regular, then L1 intersect L2 is regular.

Construction: Product DFA
Given DFAs M1 = (Q1, Sigma, delta1, q01, F1) and
              M2 = (Q2, Sigma, delta2, q02, F2)

Build M = (Q1 x Q2, Sigma, delta, (q01, q02), F1 x F2)

Where:
- delta((p,q), a) = (delta1(p,a), delta2(q,a))
- Accept only if BOTH components accept

Example:
L1 = {strings with even number of a's}
L2 = {strings with odd number of b's}
L1 intersect L2 = {even a's AND odd b's}`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complement Closure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`If L is regular, then L' (complement) is regular.

Construction: DFA Complement
Given DFA M = (Q, Sigma, delta, q0, F)
Build M' = (Q, Sigma, delta, q0, Q - F)

Simply swap accepting and non-accepting states!

Important: Must start with a COMPLETE DFA
- Every state must have transitions for all symbols
- Add a "dead state" if needed

Example:
L = {strings containing 'aa'}
L' = {strings NOT containing 'aa'}`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Concatenation Closure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`If L1 and L2 are regular, then L1.L2 is regular.

Construction: NFA Concatenation
- Start state: start of M1
- Accept states: accept states of M2
- Add epsilon transitions from M1's accept states to M2's start

Example:
L1 = a* = {epsilon, a, aa, ...}
L2 = b* = {epsilon, b, bb, ...}
L1.L2 = a*b* = {epsilon, a, b, ab, aab, abb, ...}`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Kleene Star Closure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`If L is regular, then L* is regular.

Construction: NFA Star
- Add new start state (also accepting, for epsilon)
- Add epsilon from new start to old start
- Add epsilon from old accept states back to old start
- New start is the only accept state

Example:
L = {ab}
L* = {epsilon, ab, abab, ababab, ...} = (ab)*`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Reversal Closure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`If L is regular, then L^R (reversal) is regular.

Construction: NFA Reversal
- Reverse all transitions (flip arrow directions)
- Old start becomes accept state
- Old accept states become start states
  (add new start with epsilon to all old accepts)

Example:
L = {ab, abc}
L^R = {ba, cba}`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Difference Closure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`If L1 and L2 are regular, then L1 - L2 is regular.

Proof: L1 - L2 = L1 intersect L2'
Since regular languages are closed under complement
and intersection, the difference is also regular.

Example:
L1 = (a+b)* (all strings)
L2 = (a+b)*aa(a+b)* (strings containing 'aa')
L1 - L2 = strings NOT containing 'aa'`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Summary of Closure Properties</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Notation</th>
            <th className="p-3 border">Closed?</th>
            <th className="p-3 border">Method</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Union</td>
            <td className="p-3 border">L1 U L2</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">NFA or Product DFA</td>
          </tr>
          <tr>
            <td className="p-3 border">Intersection</td>
            <td className="p-3 border">L1 int L2</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Product DFA</td>
          </tr>
          <tr>
            <td className="p-3 border">Complement</td>
            <td className="p-3 border">L'</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Swap accept states</td>
          </tr>
          <tr>
            <td className="p-3 border">Concatenation</td>
            <td className="p-3 border">L1.L2</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">NFA concatenation</td>
          </tr>
          <tr>
            <td className="p-3 border">Kleene Star</td>
            <td className="p-3 border">L*</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">NFA star</td>
          </tr>
          <tr>
            <td className="p-3 border">Kleene Plus</td>
            <td className="p-3 border">L+</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">L.L*</td>
          </tr>
          <tr>
            <td className="p-3 border">Reversal</td>
            <td className="p-3 border">L^R</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Reverse NFA</td>
          </tr>
          <tr>
            <td className="p-3 border">Difference</td>
            <td className="p-3 border">L1 - L2</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">L1 int L2'</td>
          </tr>
          <tr>
            <td className="p-3 border">Homomorphism</td>
            <td className="p-3 border">h(L)</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Replace in RE</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Regular languages are closed under all Boolean operations</li>
        <li>Closure under complement requires starting with a complete DFA</li>
        <li>Product construction handles union and intersection</li>
        <li>NFA constructions are simpler for union, concatenation, and star</li>
        <li>Closure properties are useful for proving regularity/non-regularity</li>
        <li>These properties enable compositional language specification</li>
      </ul>
    </div>
  </div>
);

export default ClosureRegular;
