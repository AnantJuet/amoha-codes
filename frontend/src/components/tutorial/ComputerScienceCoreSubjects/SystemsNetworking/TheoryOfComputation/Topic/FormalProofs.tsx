import React from 'react';

const FormalProofs: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Formal Proofs in Theory of Computation</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Formal proofs are rigorous mathematical arguments used to establish the truth of statements in the Theory of Computation.
      They provide the foundation for understanding what computers can and cannot compute, and help verify the correctness of algorithms and computational systems.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Formal Proof?</h2>
    <p className="leading-relaxed">
      A formal proof is a sequence of logical statements, each of which is either an axiom (a statement assumed to be true) or follows from
      previous statements using accepted rules of inference. In the context of computation theory, formal proofs are essential for:
    </p>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Proving that certain languages are regular, context-free, or decidable</li>
      <li>Demonstrating the equivalence of computational models</li>
      <li>Establishing the undecidability of problems</li>
      <li>Verifying algorithm correctness</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Common Proof Techniques</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Direct Proof</h3>
    <p className="leading-relaxed">
      A direct proof establishes a statement by a straightforward chain of logical deductions from axioms and previously proven theorems.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Example: Prove that the union of two regular languages is regular.

Proof:
- Let L1 and L2 be regular languages
- Since L1 is regular, there exists a DFA M1 that accepts L1
- Since L2 is regular, there exists a DFA M2 that accepts L2
- We can construct a new DFA M that simulates both M1 and M2 in parallel
- M accepts a string if either M1 or M2 accepts it
- Therefore, L1 ∪ L2 is regular`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Proof by Contradiction</h3>
    <p className="leading-relaxed">
      This technique assumes the opposite of what we want to prove and shows that this leads to a logical contradiction.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Example: Prove that L = {a^n b^n | n >= 0} is not regular.

Proof by Contradiction:
1. Assume L is regular
2. By the Pumping Lemma, there exists a pumping length p
3. Consider the string s = a^p b^p, where |s| >= p
4. By Pumping Lemma, s = xyz where |xy| <= p and |y| > 0
5. Since |xy| <= p, y consists only of a's
6. Pumping y gives a^(p+|y|) b^p, which has unequal a's and b's
7. This string is not in L, contradicting the Pumping Lemma
8. Therefore, L is not regular`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Proof by Induction</h3>
    <p className="leading-relaxed">
      Mathematical induction proves statements about all natural numbers by proving a base case and an inductive step.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Structure of Induction Proof:

Base Case: Prove the statement holds for n = 0 (or n = 1)

Inductive Hypothesis: Assume the statement holds for some k >= 0

Inductive Step: Prove that if the statement holds for k,
                then it holds for k + 1

Example: Prove that any DFA with n states can recognize
         strings of length at most n-1 to determine acceptance.`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Proof by Construction</h3>
    <p className="leading-relaxed">
      A constructive proof demonstrates the existence of an object by providing an explicit method to create it.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Example: Prove that every NFA has an equivalent DFA.

Construction:
- Given NFA N = (Q, Σ, δ, q0, F)
- Construct DFA D = (Q', Σ, δ', q0', F')
- Q' = P(Q) (power set of Q)
- q0' = ε-closure({q0})
- F' = {S ∈ Q' | S ∩ F ≠ ∅}
- δ'(S, a) = ε-closure(∪{δ(q, a) | q ∈ S})
- This construction proves equivalence by showing
  L(N) = L(D)`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Proof Techniques in Decidability</h2>

    <h3 className="text-2xl font-semibold mt-6">Reduction Proofs</h3>
    <p className="leading-relaxed">
      Reductions are used to prove that a problem is undecidable by showing that solving it would allow solving a known undecidable problem.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Reduction Framework:

To prove problem B is undecidable:
1. Choose a known undecidable problem A (e.g., Halting Problem)
2. Show how to transform any instance of A into an instance of B
3. Show that a solution to B would give a solution to A
4. Since A is undecidable, B must also be undecidable

Key Property: If A ≤m B (A reduces to B) and A is undecidable,
              then B is also undecidable.`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of Proof Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">When to Use</th>
            <th className="p-3 border">Example Application</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Direct Proof</td>
            <td className="p-3 border">Proving closure properties</td>
            <td className="p-3 border">Regular languages closed under union</td>
          </tr>
          <tr>
            <td className="p-3 border">Contradiction</td>
            <td className="p-3 border">Proving non-regularity</td>
            <td className="p-3 border">Using Pumping Lemma</td>
          </tr>
          <tr>
            <td className="p-3 border">Induction</td>
            <td className="p-3 border">Properties of derivations</td>
            <td className="p-3 border">Parse tree properties</td>
          </tr>
          <tr>
            <td className="p-3 border">Construction</td>
            <td className="p-3 border">Equivalence of models</td>
            <td className="p-3 border">NFA to DFA conversion</td>
          </tr>
          <tr>
            <td className="p-3 border">Reduction</td>
            <td className="p-3 border">Undecidability proofs</td>
            <td className="p-3 border">Halting Problem reductions</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Formal proofs provide mathematical rigor to computational claims</li>
        <li>Different proof techniques suit different types of problems</li>
        <li>Proof by contradiction is commonly used with the Pumping Lemma</li>
        <li>Constructive proofs demonstrate existence by building examples</li>
        <li>Reduction proofs are essential for establishing undecidability</li>
        <li>Understanding proof techniques is crucial for theoretical computer science</li>
      </ul>
    </div>
  </div>
);

export default FormalProofs;
