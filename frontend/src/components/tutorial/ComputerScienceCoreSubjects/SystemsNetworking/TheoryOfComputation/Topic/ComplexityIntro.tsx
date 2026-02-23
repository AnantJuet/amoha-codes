import React from 'react';

const ComplexityIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Introduction to Complexity Theory</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Complexity theory studies the resources required to solve computational problems. While decidability
      asks "Can it be computed?", complexity asks "How efficiently can it be computed?" This field
      classifies problems by time, space, and other computational resources.
    </p>
    <h2 className="text-3xl font-bold mt-8">Why Study Complexity?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Key Questions:
1. How long does an algorithm take?
2. How much memory does it need?
3. Can we do better?
4. Are some problems inherently hard?

Practical Impact:
- Algorithm design and analysis
- Cryptography (hard problems = security)
- Optimization and approximation
- Understanding computational limits`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Measuring Complexity</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Time Complexity: Number of steps as function of input size
- T(n) = number of TM transitions
- Focus on asymptotic behavior (big-O)

Space Complexity: Amount of memory used
- S(n) = number of tape cells used
- Often measure "work tape" separately from input

Input size n:
- Usually length of input string
- For numbers, can be log(value) or value itself`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Complexity Classes</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A complexity class is a set of problems solvable within
certain resource bounds.

Example classes:
P      - Polynomial time (efficient)
NP     - Nondeterministic polynomial time
PSPACE - Polynomial space
EXPTIME - Exponential time

Hierarchy:
P ⊆ NP ⊆ PSPACE ⊆ EXPTIME

Major open question: Is P = NP?`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Worst-Case vs Average-Case</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Worst-case:</strong> Maximum over all inputs of size n</li>
      <li><strong>Average-case:</strong> Expected over random inputs</li>
      <li><strong>Best-case:</strong> Minimum over all inputs (less useful)</li>
      <li>Complexity theory typically uses worst-case analysis</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Complexity measures resources (time, space)</li>
        <li>Focus on asymptotic worst-case behavior</li>
        <li>Problems grouped into complexity classes</li>
        <li>P vs NP is the central open question</li>
      </ul>
    </div>
  </div>
);
export default ComplexityIntro;
