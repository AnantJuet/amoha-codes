import React from 'react';

const TMAcceptor: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Turing Machine as Language Acceptor</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      When a Turing Machine is used to decide whether strings belong to a language, it acts as an
      acceptor. The TM reads the input and either accepts, rejects, or potentially loops forever.
    </p>
    <h2 className="text-3xl font-bold mt-8">Acceptance Modes</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A TM M accepts input w if:
- M halts in an accepting state

A TM M rejects input w if:
- M halts in a rejecting state

A TM M loops on input w if:
- M never halts

Language accepted by M:
L(M) = {w | M accepts w}`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Types of TM Acceptors</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`1. Decider (Total TM)
   - Always halts on every input
   - Either accepts or rejects
   - Language is "decidable" or "recursive"

2. Recognizer (Partial TM)
   - Halts and accepts if w ∈ L
   - May halt and reject OR loop if w ∉ L
   - Language is "recognizable" or "recursively enumerable"

Decidable ⊂ Recognizable ⊂ All Languages`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Example: Decider for a^n b^n c^n</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`This TM always halts:

1. Scan input for proper form (a*b*c*)
   - If not, REJECT
2. While a's remain:
   - Mark one a, one b, one c
   - If can't find matching b or c, REJECT
3. Check all symbols are marked
   - If yes, ACCEPT
   - If extra b's or c's, REJECT

Every input leads to ACCEPT or REJECT - never loops.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Halting Behavior</h2>
    <table className="min-w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100 text-gray-900">
        <tr>
          <th className="border border-gray-300 px-4 py-2">Input w</th>
          <th className="border border-gray-300 px-4 py-2">Decider</th>
          <th className="border border-gray-300 px-4 py-2">Recognizer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">w ∈ L</td>
          <td className="border border-gray-300 px-4 py-2">Accept</td>
          <td className="border border-gray-300 px-4 py-2">Accept</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">w ∉ L</td>
          <td className="border border-gray-300 px-4 py-2">Reject</td>
          <td className="border border-gray-300 px-4 py-2">Reject or Loop</td>
        </tr>
      </tbody>
    </table>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Acceptor TMs decide language membership</li>
        <li>Deciders always halt (accept or reject)</li>
        <li>Recognizers may loop on non-members</li>
        <li>Decidable languages are a subset of recognizable</li>
      </ul>
    </div>
  </div>
);
export default TMAcceptor;
