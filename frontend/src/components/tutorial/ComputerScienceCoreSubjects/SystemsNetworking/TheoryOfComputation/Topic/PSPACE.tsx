import React from 'react';

const PSPACE: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">PSPACE and PSPACE-Complete</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      PSPACE is the class of problems solvable using polynomial space. It's believed to be larger
      than NP and contains problems related to games, planning, and quantified Boolean formulas.
      PSPACE-complete problems are the hardest in this class.
    </p>
    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`PSPACE = ∪_k SPACE(n^k)

Problems solvable using polynomial space.
Time may be exponential!

Key relationship:
P ⊆ NP ⊆ PSPACE ⊆ EXPTIME

By Savitch's Theorem:
PSPACE = NPSPACE
(Nondeterminism doesn't help for space!)

Unknown: Is P = PSPACE? Is NP = PSPACE?`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">PSPACE-Complete</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A problem is PSPACE-complete if:
1. It's in PSPACE
2. Every PSPACE problem reduces to it (poly-time)

The canonical PSPACE-complete problem:

TQBF (True Quantified Boolean Formula):
∀x₁ ∃x₂ ∀x₃ ... φ(x₁, x₂, x₃, ...)

Is this quantified formula true?

Unlike SAT (existential only), TQBF has alternating quantifiers.
This captures the "game-like" nature of PSPACE problems.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Examples of PSPACE-Complete Problems</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Game problems:
- Generalized Chess (arbitrary board size)
- Generalized Checkers
- Generalized Go
- SOKOBAN puzzle

Planning problems:
- STRIPS planning
- Finite automaton equivalence (for NFAs)

Logic problems:
- TQBF
- Modal logic satisfiability

Regular expression problems:
- Regex equivalence (with complements)`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Why Games are PSPACE</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Two-player games naturally model alternating quantifiers:

"Does player 1 have a winning strategy?"

∃(move1) ∀(response1) ∃(move2) ∀(response2) ... Player1 wins

- ∃ quantifiers: Player 1's moves
- ∀ quantifiers: Player 2's moves (worst case)

This alternation is exactly TQBF structure.
Games with polynomial-length play are in PSPACE.
Many are PSPACE-complete.`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">PSPACE Hierarchy</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Polynomial Hierarchy inside PSPACE:

Σ₁ᴾ = NP              (∃ only)
Π₁ᴾ = coNP            (∀ only)
Σ₂ᴾ = NP^NP           (∃∀)
Π₂ᴾ = coNP^NP         (∀∃)
...
PH = ∪_i Σᵢᴾ ⊆ PSPACE

If PH = PSPACE, the hierarchy collapses.
Most believe PH ⊊ PSPACE.`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>PSPACE = polynomial space problems</li>
        <li>TQBF is the canonical PSPACE-complete problem</li>
        <li>Many game problems are PSPACE-complete</li>
        <li>PSPACE = NPSPACE (Savitch's theorem)</li>
      </ul>
    </div>
  </div>
);
export default PSPACE;
