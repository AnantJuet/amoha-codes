import React from "react";

const CanonicalCover: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Canonical Cover</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A canonical cover (or minimal cover) is a simplified set of functional dependencies
      equivalent to the original set but with no redundancy. It is used in database
      normalization and schema design.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Canonical Cover?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Purpose:
- Remove redundant functional dependencies
- Simplify constraint checking
- Minimize storage for FD metadata
- Essential for normalization algorithms

Original FDs may have:
- Redundant FDs (implied by others)
- Extraneous attributes (unnecessary on LHS or RHS)

Canonical Cover removes all redundancy.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties of Canonical Cover</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Canonical Cover Fc of F satisfies:

1. Equivalent to F
   - F implies Fc (F |= Fc)
   - Fc implies F (Fc |= F)

2. No extraneous attributes
   - No attribute in any FD can be removed
     without changing closure

3. Each LHS is unique
   - No two FDs with same left-hand side
   - Combine: A→B and A→C becomes A→BC

4. Right-hand sides are minimal
   - Single attribute on RHS (some definitions)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm to Find Canonical Cover</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Algorithm:

Input: Set of FDs F
Output: Canonical cover Fc

Step 1: Split RHS (make single attribute)
   A → BC becomes A → B, A → C

Step 2: Remove extraneous LHS attributes
   For each FD X → A:
     For each attribute Y in X:
       If (X - Y)+ contains A:
         Remove Y from X

Step 3: Remove extraneous RHS attributes
   For each FD X → A:
     If A can be derived from F - {X→A} using X:
       Remove X → A

Step 4: Combine FDs with same LHS
   A → B and A → C becomes A → BC

Repeat until no changes.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Finding Canonical Cover</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Given FDs:
F = {A → BC, B → C, A → B, AB → C}

Step 1: Split RHS
F = {A → B, A → C, B → C, A → B, AB → C}
Remove duplicate: A → B appears twice
F = {A → B, A → C, B → C, AB → C}

Step 2: Remove extraneous LHS in AB → C
Check if A → C without B in LHS:
  A+ = {A, B, C} (using A→B, A→C, B→C)
  A+ contains C, so B is extraneous
  AB → C becomes A → C (already exists)
F = {A → B, A → C, B → C}

Step 3: Remove extraneous RHS
Check A → C:
  Without A → C, can we derive C from A?
  A+ = {A, B, C} (using A→B, B→C)
  Yes! C is derivable, so A → C is redundant
F = {A → B, B → C}

Step 4: Combine same LHS
No FDs with same LHS to combine.

Canonical Cover: Fc = {A → B, B → C}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Attribute Closure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Attribute Closure X+ for attribute set X:

All attributes functionally determined by X

Algorithm:
result = X
repeat
  for each FD Y → Z in F:
    if Y ⊆ result:
      result = result ∪ Z
until result doesn't change
return result

Example:
F = {A → B, B → C, C → D}
A+ = ?

result = {A}
A → B: A ⊆ {A}, add B → result = {A, B}
B → C: B ⊆ {A,B}, add C → result = {A, B, C}
C → D: C ⊆ {A,B,C}, add D → result = {A, B, C, D}

A+ = {A, B, C, D}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Extraneous Attribute Detection</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Detecting Extraneous Attributes:

LHS Extraneous:
In X → A, attribute Y ∈ X is extraneous if:
(X - Y)+ contains A using current FDs

Example:
F = {AB → C, A → B}
In AB → C, is B extraneous?
A+ = {A, B} (using A → B)
A+ contains C? Need to check if A → C holds.
{A}+ = {A, B} using A → B
Not containing C... but with AB → C:
Actually compute: A+ with AB→C and A→B
A → B, so A+ includes B, then AB → C applies
A+ = {A, B, C}
Yes! B is extraneous. AB → C becomes A → C

RHS Extraneous:
A in X → A is extraneous if:
X+ contains A using F - {X → A}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Canonical cover: Minimal equivalent FD set</li>
        <li>No redundant FDs or extraneous attributes</li>
        <li>Use attribute closure to test redundancy</li>
        <li>Split RHS, remove extraneous, combine LHS</li>
        <li>Essential for normalization algorithms</li>
      </ul>
    </div>
  </div>
);

export default CanonicalCover;
