import React from 'react';

const MathProofs: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Introduction to Mathematical Proofs</h1>

    <p className="text-lg leading-relaxed">
      A mathematical proof is a rigorous argument that establishes the truth of a statement.
      Proofs are the foundation of mathematics and computer science, providing certainty and
      understanding beyond empirical evidence.
    </p>

    <h2 className="text-2xl font-bold mt-8">What Makes a Valid Proof?</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Requirement</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Logical sequence</td><td className="p-2 border">Each step follows from previous steps</td></tr>
        <tr><td className="p-2 border">Justified steps</td><td className="p-2 border">Each step uses axioms, definitions, or proven theorems</td></tr>
        <tr><td className="p-2 border">Complete</td><td className="p-2 border">No gaps in reasoning</td></tr>
        <tr><td className="p-2 border">Correct assumptions</td><td className="p-2 border">Hypotheses are clearly stated</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Terminology</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Term</th>
          <th className="p-2 border">Definition</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Axiom</td><td className="p-2 border">A statement accepted as true without proof</td></tr>
        <tr><td className="p-2 border">Definition</td><td className="p-2 border">Precise meaning of a mathematical term</td></tr>
        <tr><td className="p-2 border">Theorem</td><td className="p-2 border">An important statement that has been proven</td></tr>
        <tr><td className="p-2 border">Lemma</td><td className="p-2 border">A helper theorem used to prove a larger theorem</td></tr>
        <tr><td className="p-2 border">Corollary</td><td className="p-2 border">A result that follows easily from a theorem</td></tr>
        <tr><td className="p-2 border">Conjecture</td><td className="p-2 border">An unproven statement believed to be true</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Structure of a Proof</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Step</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1. State the theorem</td><td className="p-2 border">What you're trying to prove</td></tr>
        <tr><td className="p-2 border">2. List assumptions</td><td className="p-2 border">Given conditions (hypotheses)</td></tr>
        <tr><td className="p-2 border">3. Choose a method</td><td className="p-2 border">Direct, contradiction, induction, etc.</td></tr>
        <tr><td className="p-2 border">4. Provide the argument</td><td className="p-2 border">Logical steps with justifications</td></tr>
        <tr><td className="p-2 border">5. Conclude</td><td className="p-2 border">State that the proof is complete (QED, &#9633;, &#8718;)</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Example: Direct Proof</h2>
    <p className="mt-3"><strong>Theorem:</strong> The sum of two even integers is even.</p>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-3 font-mono text-sm text-gray-900 overflow-x-auto">
{`Proof:
Let a and b be even integers.
By definition, a = 2k and b = 2m for some integers k and m.
Then a + b = 2k + 2m = 2(k + m).
Since k + m is an integer, a + b = 2(k + m) is even.
∎`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">Common Errors to Avoid</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Error</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Circular reasoning</td><td className="p-2 border">Using the conclusion in the proof</td></tr>
        <tr><td className="p-2 border">Assuming what you prove</td><td className="p-2 border">"Assume &radic;2 is rational..."</td></tr>
        <tr><td className="p-2 border">Examples aren't proofs</td><td className="p-2 border">2, 4, 6 are even doesn't prove all cases</td></tr>
        <tr><td className="p-2 border">Unjustified steps</td><td className="p-2 border">"Obviously..." or "Clearly..."</td></tr>
        <tr><td className="p-2 border">Division by zero</td><td className="p-2 border">Dividing by an expression that might be zero</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Why Proofs Matter in CS</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Application</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Algorithm correctness</td><td className="p-2 border">Prove algorithms work for all inputs</td></tr>
        <tr><td className="p-2 border">Complexity analysis</td><td className="p-2 border">Prove running time bounds</td></tr>
        <tr><td className="p-2 border">Security</td><td className="p-2 border">Cryptographic proofs</td></tr>
        <tr><td className="p-2 border">Program verification</td><td className="p-2 border">Prove code meets specifications</td></tr>
        <tr><td className="p-2 border">Type systems</td><td className="p-2 border">Prove type safety</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Practice Problems</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">#</th>
          <th className="p-2 border">Problem</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">1</td><td className="p-2 border">Prove: The product of two odd integers is odd</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">Prove: If n&sup2; is even, then n is even</td></tr>
        <tr><td className="p-2 border">3</td><td className="p-2 border">Find the error: "Let a = b, then a&sup2; = ab, so a&sup2; - b&sup2; = ab - b&sup2;, (a+b)(a-b) = b(a-b), a+b = b, 2b = b, 2 = 1"</td></tr>
        <tr><td className="p-2 border">4</td><td className="p-2 border">Prove: There is no largest integer</td></tr>
      </tbody>
    </table>
  </div>
);

export default MathProofs;
