import React from "react";

const LeftRecursion: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Left Recursion Elimination
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Left recursion</strong> occurs when a grammar production has the same non-terminal
      as both the left-hand side and the first symbol of the right-hand side. Top-down parsers
      cannot handle left recursion as it causes infinite loops.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Left Recursion</h2>

    <h3 className="text-2xl font-semibold mt-6">Immediate Left Recursion</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`A → Aα | β

where α, β are strings of grammar symbols
and β does not start with A

Example:
  E → E + T | T    (left recursive)
  A → Aa | b       (left recursive)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Indirect Left Recursion</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`A → Bα
B → Aβ

The recursion occurs through multiple productions.

Example:
  S → Aa | b
  A → Sc | d

S → Aa → Sca (indirect left recursion)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Eliminating Immediate Left Recursion</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`General Rule:
  A → Aα₁ | Aα₂ | ... | Aαₙ | β₁ | β₂ | ... | βₘ

becomes:
  A  → β₁A' | β₂A' | ... | βₘA'
  A' → α₁A' | α₂A' | ... | αₙA' | ε

Example:
  E → E + T | T

becomes:
  E  → T E'
  E' → + T E' | ε

Derivation of "T + T + T":
  E → TE' → T + TE' → T + T + TE' → T + T + T`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Original Grammar (left recursive):
  E → E + T | E - T | T
  T → T * F | T / F | F
  F → ( E ) | id

After eliminating left recursion:
  E  → T E'
  E' → + T E' | - T E' | ε
  T  → F T'
  T' → * F T' | / F T' | ε
  F  → ( E ) | id

This grammar is suitable for top-down parsing.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Eliminating Indirect Left Recursion</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Algorithm:
1. Order non-terminals: A₁, A₂, ..., Aₙ
2. For i = 1 to n:
   For j = 1 to i-1:
     Replace Aᵢ → Aⱼγ with Aᵢ → δ₁γ | δ₂γ | ...
     where Aⱼ → δ₁ | δ₂ | ... are all Aⱼ productions
   Eliminate immediate left recursion from Aᵢ

Example:
  S → Aa | b
  A → Sc | d

Order: S, A
For A: Replace S with its productions
  A → Aac | bc | d
Now eliminate immediate left recursion:
  A  → bcA' | dA'
  A' → acA' | ε

Result:
  S  → Aa | b
  A  → bcA' | dA'
  A' → acA' | ε`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Eliminate?</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>Top-down parsers enter infinite loops with left recursion</li>
      <li>Recursive descent cannot handle A → Aα</li>
      <li>LL parsers require non-left-recursive grammars</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Left recursion: A derives Aα in one or more steps</li>
        <li>Top-down parsers cannot handle left recursion</li>
        <li>Eliminate by introducing new non-terminal with right recursion</li>
        <li>Indirect left recursion requires substitution first</li>
        <li>The transformed grammar generates the same language</li>
      </ul>
    </div>
  </div>
);

export default LeftRecursion;
