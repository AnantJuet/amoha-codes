import React from 'react';

const UndecidableLanguages: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Undecidable Languages and Problems</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Some problems have no algorithmic solution - they are undecidable. Understanding undecidability
      helps us avoid futile attempts to solve impossible problems and guides us to find alternative
      approaches like approximations or restricted cases.
    </p>
    <h2 className="text-3xl font-bold mt-8">Classic Undecidable Problems</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Undecidable Problems for Turing Machines:

1. Halting Problem (HALT)
   "Does TM M halt on input w?"

2. Acceptance Problem (A_TM)
   "Does TM M accept input w?"

3. Emptiness Problem (E_TM)
   "Is L(M) empty?"

4. Regularity Problem
   "Is L(M) a regular language?"

5. Equality Problem (EQ_TM)
   "Do M1 and M2 accept the same language?"

6. Rice's Theorem problems
   Any non-trivial property of TM languages`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">RE vs non-RE Undecidable</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Undecidable problems can be:

1. RE (Recognizable but not Decidable):
   - A_TM: TM accepts w
   - HALT: TM halts on w
   - Has a TM that accepts yes-instances
   - But may loop on no-instances

2. Non-RE (Not even Recognizable):
   - A_TM complement: TM doesn't accept w
   - HALT complement: TM doesn't halt
   - EQ_TM: Are two TMs equivalent?
   - No TM recognizes these at all!

Hierarchy:
Decidable ⊂ RE ⊂ All Languages
       Non-RE is outside RE`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Why Do Undecidable Problems Exist?</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Cardinality argument:</strong> More languages than TMs</li>
      <li><strong>Diagonalization:</strong> Self-reference leads to contradiction</li>
      <li><strong>TMs can simulate themselves:</strong> Enables paradoxes</li>
      <li><strong>Infinite behavior:</strong> Cannot always predict termination</li>
    </ul>
    <h2 className="text-3xl font-bold mt-8">Practical Implications</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Cannot build perfect:
- Bug detector (finds all bugs)
- Virus scanner (detects all malware)
- Program verifier (proves all properties)
- Optimizer (finds optimal code)

Solutions:
- Approximate algorithms (may give wrong answer)
- Restricted inputs (only handle special cases)
- Time bounds (give up after timeout)
- Human assistance (ask user for help)`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Many TM problems are undecidable</li>
        <li>Some undecidable problems are RE, others are not</li>
        <li>Self-reference enables undecidability proofs</li>
        <li>Practical tools use approximations and restrictions</li>
      </ul>
    </div>
  </div>
);
export default UndecidableLanguages;
