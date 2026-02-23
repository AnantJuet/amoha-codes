import React from 'react';

const ProofTechniques: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Proof Techniques</h1>

    <p className="text-lg leading-relaxed">
      Different mathematical statements require different proof strategies. Mastering various
      proof techniques allows you to tackle a wide range of problems and choose the most
      elegant approach for each situation.
    </p>

    <h2 className="text-2xl font-bold mt-8">1. Direct Proof</h2>
    <p className="mt-3"><strong>To prove p &rarr; q:</strong> Assume p is true, show q must be true.</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Example</th>
          <th className="p-2 border">Proof</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">If n is odd, then n&sup2; is odd.</td><td className="p-2 border font-mono text-sm text-gray-900">n = 2k + 1, so n&sup2; = 4k&sup2; + 4k + 1 = 2(2k&sup2; + 2k) + 1, which is odd. &#9633;</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">2. Proof by Contrapositive</h2>
    <p className="mt-3"><strong>To prove p &rarr; q:</strong> Prove &not;q &rarr; &not;p (logically equivalent).</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Example</th>
          <th className="p-2 border">Contrapositive</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">If n&sup2; is even, then n is even.</td><td className="p-2 border">If n is odd, then n&sup2; is odd.</td></tr>
      </tbody>
    </table>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-3 font-mono text-sm text-gray-900 overflow-x-auto">
{`Proof: If n = 2k + 1, then n² = 2(2k² + 2k) + 1, which is odd. ∎`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">3. Proof by Contradiction</h2>
    <p className="mt-3"><strong>Approach:</strong> Assume the negation of what you want to prove, derive a contradiction.</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Example</th>
          <th className="p-2 border">&radic;2 is irrational</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Assume</td><td className="p-2 border">&radic;2 = p/q in lowest terms</td></tr>
        <tr><td className="p-2 border">Then</td><td className="p-2 border">2q&sup2; = p&sup2;, so p&sup2; is even, so p is even</td></tr>
        <tr><td className="p-2 border">Let p = 2k</td><td className="p-2 border">2q&sup2; = 4k&sup2;, so q&sup2; = 2k&sup2;, so q is even</td></tr>
        <tr><td className="p-2 border">Contradiction</td><td className="p-2 border">p and q are both even, so not in lowest terms. &#9633;</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">4. Mathematical Induction</h2>
    <p className="mt-3"><strong>To prove P(n) for all n &ge; base:</strong></p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Step</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Base case</td><td className="p-2 border">Prove P(base) is true</td></tr>
        <tr><td className="p-2 border">Inductive step</td><td className="p-2 border">Prove P(k) &rarr; P(k+1) for arbitrary k</td></tr>
      </tbody>
    </table>
    <p className="mt-3"><strong>Example:</strong> 1 + 2 + ... + n = n(n+1)/2</p>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-3 font-mono text-sm text-gray-900 overflow-x-auto">
{`Base: n=1: 1 = 1(2)/2 ✓
Inductive: Assume true for k.
Then 1+...+k+(k+1) = k(k+1)/2 + (k+1) = (k+1)(k+2)/2 ✓`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">5. Strong Induction</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Aspect</th>
          <th className="p-2 border">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Approach</td><td className="p-2 border">Assume P(base), P(base+1), ..., P(k) to prove P(k+1)</td></tr>
        <tr><td className="p-2 border">When to use</td><td className="p-2 border">When P(k+1) depends on multiple previous cases</td></tr>
        <tr><td className="p-2 border">Example</td><td className="p-2 border">Every integer &ge; 2 is a product of primes</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">6. Proof by Cases</h2>
    <p className="mt-3"><strong>Approach:</strong> Divide into exhaustive cases and prove each separately.</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Example: |xy| = |x| &times; |y|</th>
          <th className="p-2 border">Cases</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Case 1</td><td className="p-2 border">x &ge; 0, y &ge; 0</td></tr>
        <tr><td className="p-2 border">Case 2</td><td className="p-2 border">x &ge; 0, y {"<"} 0</td></tr>
        <tr><td className="p-2 border">Case 3</td><td className="p-2 border">x {"<"} 0, y &ge; 0</td></tr>
        <tr><td className="p-2 border">Case 4</td><td className="p-2 border">x {"<"} 0, y {"<"} 0</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">7. Constructive Proof</h2>
    <p className="mt-3"><strong>Approach:</strong> Prove existence by explicitly constructing an example.</p>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Example</th>
          <th className="p-2 border">Construction</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">There exist irrational numbers a, b such that a&#x1D47; is rational.</td><td className="p-2 border">Let a = &radic;2 and b = &radic;2. If &radic;2&#x221A;&#x32; is rational, done. Otherwise, let a = &radic;2&#x221A;&#x32; and b = &radic;2. Then a&#x1D47; = (&radic;2&#x221A;&#x32;)&#x221A;&#x32; = &radic;2&sup2; = 2. &#9633;</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-8">Choosing a Technique</h2>
    <table className="min-w-full border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">Technique</th>
          <th className="p-2 border">When to Use</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="p-2 border">Direct proof</td><td className="p-2 border">When the path from p to q is clear</td></tr>
        <tr><td className="p-2 border">Contrapositive</td><td className="p-2 border">When &not;q gives useful information</td></tr>
        <tr><td className="p-2 border">Contradiction</td><td className="p-2 border">When no direct approach works</td></tr>
        <tr><td className="p-2 border">Induction</td><td className="p-2 border">For statements about all natural numbers</td></tr>
        <tr><td className="p-2 border">Cases</td><td className="p-2 border">When different scenarios need different handling</td></tr>
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
        <tr><td className="p-2 border">1</td><td className="p-2 border">Prove by induction: 1&sup2; + 2&sup2; + ... + n&sup2; = n(n+1)(2n+1)/6</td></tr>
        <tr><td className="p-2 border">2</td><td className="p-2 border">Prove by contradiction: There are infinitely many primes</td></tr>
        <tr><td className="p-2 border">3</td><td className="p-2 border">Prove by contrapositive: If 3n + 2 is odd, then n is odd</td></tr>
        <tr><td className="p-2 border">4</td><td className="p-2 border">Prove by cases: For any integer n, n&sup2; + n is even</td></tr>
      </tbody>
    </table>
  </div>
);

export default ProofTechniques;
