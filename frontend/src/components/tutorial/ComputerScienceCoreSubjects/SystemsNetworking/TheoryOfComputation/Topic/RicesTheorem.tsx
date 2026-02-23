import React from 'react';

const RicesTheorem: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rice's Theorem</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Rice's Theorem is a powerful meta-theorem that states every non-trivial semantic property
      of Turing Machine languages is undecidable. It provides a quick way to identify undecidable
      problems without constructing explicit reductions.
    </p>
    <h2 className="text-3xl font-bold mt-8">Theorem Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Rice's Theorem:

Let P be any property of languages such that:
1. P is non-trivial:
   - Some RE language has property P
   - Some RE language does NOT have property P

Then the following problem is undecidable:
"Given TM M, does L(M) have property P?"

In other words:
{<M> | L(M) has property P} is undecidable`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">What Rice's Theorem Covers</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Examples of undecidable properties (by Rice's Theorem):

Semantic properties of L(M):
✗ "Is L(M) empty?"
✗ "Is L(M) finite?"
✗ "Is L(M) regular?"
✗ "Is L(M) context-free?"
✗ "Is L(M) = Σ*?"
✗ "Does L(M) contain the string '101'?"
✗ "Is L(M) = L(M')?" (for fixed M')

All undecidable because:
- Non-trivial (some TMs satisfy, some don't)
- Properties of the language, not the machine`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">What Rice's Theorem Does NOT Cover</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Rice's Theorem does NOT apply to:

1. Trivial properties:
   ✓ "Is L(M) an RE language?" (always true)
   ✓ "Is L(M) not an RE language?" (always false)

2. Properties of the TM itself (not its language):
   ✓ "Does M have exactly 5 states?"
   ✓ "Does M have an even number of transitions?"
   These are decidable - just examine M!

3. Runtime/resource properties:
   May or may not be decidable depending on specifics`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Proof Sketch</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Proof idea (reduction from A_TM):

Assume WLOG that ∅ does not have property P.
Let M_P be a TM whose language has property P.

Given <M, w>, construct M':
  M'(x) =
    1. Run M on w (ignore x)
    2. If M accepts, run M_P on x
    3. Accept if M_P accepts

If M accepts w: L(M') = L(M_P) has P
If M rejects w: L(M') = ∅ doesn't have P

So: <M, w> ∈ A_TM ⟺ <M'> has property P`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Rice's Theorem: Non-trivial language properties are undecidable</li>
        <li>Covers semantic properties (about L(M))</li>
        <li>Does NOT cover syntactic properties (about M itself)</li>
        <li>Quick way to identify undecidable problems</li>
      </ul>
    </div>
  </div>
);
export default RicesTheorem;
