import React from 'react';

const UndecidableCFL: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Undecidable CFL Problems</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Despite having decidable membership and emptiness problems, context-free languages have several
      important undecidable problems. These limitations have practical implications for compiler
      design and programming language theory.
    </p>
    <h2 className="text-3xl font-bold mt-8">Undecidable CFL Problems</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`1. Universality: Is L(G) = Σ*?
   - Does grammar generate all possible strings?
   - Undecidable (reduce from PCP)

2. Equivalence: Is L(G1) = L(G2)?
   - Do two grammars generate same language?
   - Undecidable (reduce from universality)

3. Inclusion: Is L(G1) ⊆ L(G2)?
   - Is one CFL a subset of another?
   - Undecidable

4. Ambiguity: Is grammar G ambiguous?
   - Does some string have two parse trees?
   - Undecidable (reduce from PCP)

5. Regularity: Is L(G) a regular language?
   - Undecidable

6. Intersection emptiness: Is L(G1) ∩ L(G2) = ∅?
   - Undecidable (CFLs not closed under intersection)`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Why Ambiguity is Undecidable</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Proof sketch (reduction from PCP):

Given PCP instance P = {(t₁,b₁), ..., (tₙ,bₙ)}

Construct CFG:
  S → T | B
  T → t₁ T a₁ | t₂ T a₂ | ... | tₙ T aₙ | t₁ a₁ | ... | tₙ aₙ
  B → b₁ B a₁ | b₂ B a₂ | ... | bₙ B aₙ | b₁ a₁ | ... | bₙ aₙ

String tᵢ₁...tᵢₖ aᵢₖ...aᵢ₁ can be derived via T or B.
Both derivations exist iff tᵢ₁...tᵢₖ = bᵢ₁...bᵢₖ
Which is exactly when PCP has solution!

PCP undecidable → Ambiguity undecidable`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Practical Implications</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Parser generators:</strong> Cannot auto-detect all ambiguity</li>
      <li><strong>Language design:</strong> No algorithm to verify unambiguous</li>
      <li><strong>Optimization:</strong> Cannot always determine grammar equivalence</li>
      <li><strong>Type systems:</strong> Some type inference problems are undecidable</li>
    </ul>
    <h2 className="text-3xl font-bold mt-8">Decidable Restrictions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Some restricted versions ARE decidable:

1. Equivalence for DETERMINISTIC CFLs
   - DCFL equivalence is decidable!
   - Much harder algorithm (Sénizergues, 1997)

2. Ambiguity for specific grammar classes
   - LL grammars: unambiguous by construction
   - LR grammars: unambiguous by construction

3. Intersection with regular language
   - L(G) ∩ R emptiness is decidable`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>CFL equivalence, universality: undecidable</li>
        <li>CFG ambiguity: undecidable (via PCP)</li>
        <li>DCFL equivalence: decidable (but complex)</li>
        <li>Practical tools use restricted decidable subclasses</li>
      </ul>
    </div>
  </div>
);
export default UndecidableCFL;
