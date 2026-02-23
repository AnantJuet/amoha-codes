import React from 'react';

const ChurchTuringThesis: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Church-Turing Thesis</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      The Church-Turing Thesis is a hypothesis stating that any function that can be computed by
      any effective method can be computed by a Turing Machine. It defines the boundary between
      computable and non-computable.
    </p>
    <h2 className="text-3xl font-bold mt-8">Statement of the Thesis</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Church-Turing Thesis:

"Every effectively calculable function is computable
by a Turing Machine."

Equivalently:
"Any algorithm can be implemented as a Turing Machine."

Note: This is NOT a theorem - it cannot be proved.
It is a definition/hypothesis about computation.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Evidence for the Thesis</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Multiple independent models all equivalent to TMs:

1. Turing Machines (Turing, 1936)
2. Lambda Calculus (Church, 1936)
3. μ-recursive functions (Gödel, Kleene)
4. Post systems (Post, 1943)
5. Markov algorithms
6. Register machines
7. Modern programming languages

All these define the SAME class of computable functions!
This convergence strongly supports the thesis.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Implications</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Upper bound on computation:</strong> TMs capture all computable functions</li>
      <li><strong>No more powerful model:</strong> Cannot compute more than TM</li>
      <li><strong>Language equivalence:</strong> All programming languages equally powerful</li>
      <li><strong>Undecidability meaningful:</strong> If TM can't solve it, nothing can</li>
    </ul>
    <h2 className="text-3xl font-bold mt-8">Extended Church-Turing Thesis</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Strong/Extended version (about efficiency):

"Any model of computation can be simulated by a TM
with at most polynomial slowdown."

This is more controversial!
- Quantum computers might violate this
- Physical Church-Turing thesis debates continue`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Church-Turing: TMs capture all effective computation</li>
        <li>It's a thesis/definition, not a theorem</li>
        <li>Supported by equivalence of many models</li>
        <li>Defines the boundary of computability</li>
      </ul>
    </div>
  </div>
);
export default ChurchTuringThesis;
