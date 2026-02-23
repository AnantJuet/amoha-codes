import React from 'react';

const DecidabilityIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Introduction to Decidability</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Decidability theory studies which computational problems can be solved by algorithms. A problem
      is decidable if there exists a Turing Machine that always halts with the correct answer. Understanding
      decidability helps us know the fundamental limits of computation.
    </p>
    <h2 className="text-3xl font-bold mt-8">Key Concepts</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Decidable Problem (Recursive):
- An algorithm exists that ALWAYS halts
- Gives correct yes/no answer for every input
- Example: "Is string w in regular language L?"

Undecidable Problem:
- NO algorithm can always halt with correct answer
- Example: Halting problem

Semi-decidable (RE):
- Algorithm halts and says "yes" for yes-instances
- May loop forever for no-instances
- Example: "Does TM M accept input w?"`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Decision Problems</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A decision problem asks a yes/no question:

Format: "Given [input], is [property] true?"

Examples:
1. Membership: "Is string w in language L?"
2. Emptiness: "Is language L empty?"
3. Equivalence: "Are L1 and L2 the same language?"
4. Finiteness: "Is language L finite?"

Each problem is a language:
L_problem = {encodings of yes-instances}`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Why Study Decidability?</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Know what computers CAN and CANNOT solve</li>
      <li>Avoid wasting time on impossible problems</li>
      <li>Find approximate or restricted solutions</li>
      <li>Understand fundamental limits of computation</li>
      <li>Essential for compiler design, verification, AI</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Decidable = always-halting algorithm exists</li>
        <li>Undecidable = no such algorithm can exist</li>
        <li>Decision problems ask yes/no questions</li>
        <li>Understanding limits guides problem-solving</li>
      </ul>
    </div>
  </div>
);
export default DecidabilityIntro;
