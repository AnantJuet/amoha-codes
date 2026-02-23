import React from 'react';

const NonCFL: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Proving Languages are Not Context-Free</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Several techniques exist to prove a language is not context-free, with the Pumping Lemma being the most common.
    </p>
    <h2 className="text-3xl font-bold mt-8">Common Non-CFL Languages</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`1. {a^n b^n c^n | n >= 0} - Three equal counts
2. {a^i b^j c^k | i < j < k} - Three different ordered counts
3. {ww | w in {a,b}*} - Exact duplication
4. {a^(n^2) | n >= 0} - Square lengths
5. {a^p | p is prime} - Prime lengths`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Proof Techniques</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Pumping Lemma:</strong> Show pumping fails for some string</li>
      <li><strong>Closure Properties:</strong> Use non-closure under intersection</li>
      <li><strong>Ogden's Lemma:</strong> Stronger version of pumping lemma</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Languages requiring three or more counts are typically not CFL</li>
        <li>Pumping Lemma is the primary proof technique</li>
        <li>Some non-regular languages are also non-CFL</li>
      </ul>
    </div>
  </div>
);
export default NonCFL;
