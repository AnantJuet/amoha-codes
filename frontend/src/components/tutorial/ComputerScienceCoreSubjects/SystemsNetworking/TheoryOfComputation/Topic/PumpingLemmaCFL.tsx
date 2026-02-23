import React from 'react';

const PumpingLemmaCFL: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Pumping Lemma for CFLs</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      The Pumping Lemma for CFLs is used to prove that certain languages are NOT context-free.
      It is similar to the regular language pumping lemma but involves two pumpable substrings.
    </p>
    <h2 className="text-3xl font-bold mt-8">Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`If L is context-free, there exists p >= 1 such that:
For any s in L with |s| >= p, s can be written as s = uvwxy where:

1. |vwx| <= p
2. |vx| >= 1  (v and x are not both empty)
3. For all i >= 0: uv^i wx^i y is in L

The substrings v and x can be "pumped" together.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Example: Proving Non-CFL</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Prove L = {a^n b^n c^n | n >= 0} is not context-free.

Choose s = a^p b^p c^p

Since |vwx| <= p, vwx cannot contain all three symbols.
So vx contains at most two types of symbols.
Pumping changes counts of at most two symbols.
But pumped string won't have equal a's, b's, c's.
Contradiction! L is not context-free.`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>CFL pumping: two substrings v and x pumped together</li>
        <li>|vwx| &lt;= p constrains the pumpable region</li>
        <li>Classic non-CFL: a^n b^n c^n</li>
        <li>Pumping Lemma proves non-CFL, not CFL membership</li>
      </ul>
    </div>
  </div>
);
export default PumpingLemmaCFL;
