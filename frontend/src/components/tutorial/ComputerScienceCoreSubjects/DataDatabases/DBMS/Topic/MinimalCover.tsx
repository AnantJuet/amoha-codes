import React from "react";

const MinimalCover: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Minimal Cover (Canonical Cover)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A minimal cover (also called canonical cover) is the smallest set of functional
      dependencies that is equivalent to the original set. It removes redundant dependencies
      and simplifies the representation without losing any information.
    </p>

    <h2 className="text-3xl font-bold mt-8">Properties of Minimal Cover</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Single attribute on RHS:</strong> Each FD has exactly one attribute on the right</li>
        <li><strong>No redundant FDs:</strong> No FD can be derived from others</li>
        <li><strong>No extraneous attributes on LHS:</strong> All attributes on left are necessary</li>
        <li><strong>Equivalent to original:</strong> Covers the same dependencies</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Steps to Find Minimal Cover</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Algorithm to find Minimal Cover:

Step 1: Decompose RHS (Right Hand Side)
        Convert A -> BC to A -> B, A -> C

Step 2: Remove extraneous attributes from LHS
        If AB -> C and A -> C (without B), remove B

Step 3: Remove redundant FDs
        If A -> B can be derived from other FDs, remove it

Result: Minimal cover with no redundancy`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Finding Minimal Cover</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Given FDs:
F = { A -> BC, B -> C, AB -> D, D -> A }

Step 1: Decompose RHS
F = { A -> B, A -> C, B -> C, AB -> D, D -> A }

Step 2: Check for extraneous attributes in LHS
- For AB -> D: Check if A -> D using remaining FDs
  A+ = {A, B, C} (doesn't include D)
  B+ = {B, C} (doesn't include D)
  So both A and B are needed. Keep AB -> D.

Step 3: Remove redundant FDs
- A -> C: Can we derive it from {A -> B, B -> C, AB -> D, D -> A}?
  Yes! A -> B and B -> C implies A -> C (transitive)
  Remove A -> C

Minimal Cover:
Fc = { A -> B, B -> C, AB -> D, D -> A }

Wait - let's recheck AB -> D:
With D -> A, we have D -> A -> B -> C
With A -> B: A+ = {A, B, C}
So AB+ = {A, B, C, D}
But A+ alone = {A, B, C} (no D)
So AB -> D is necessary.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Checking for Extraneous Attributes</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`To check if attribute X is extraneous in AB -> C:

For Left side (AB):
1. Remove X (say B) from LHS, giving A -> C
2. Compute A+ using all FDs
3. If C is in A+, then B is extraneous

Example:
Given: A -> B, AB -> C
Check if B is extraneous in AB -> C:
- Remove B: Check if A -> C
- A+ = {A, B} (using A -> B)
- C is not in A+
- B is NOT extraneous, keep AB -> C`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Another Complete Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Given: F = { A -> BCD, BC -> A, D -> B }

Step 1: Decompose RHS
F = { A -> B, A -> C, A -> D, BC -> A, D -> B }

Step 2: Check extraneous attributes
BC -> A: Check B alone: B+ = {B} (no A) - B needed
         Check C alone: C+ = {C} (no A) - C needed
Both B and C are necessary. Keep BC -> A.

Step 3: Remove redundant FDs
- A -> B: A+ (without this FD) = {A, C, D, B} (via A->D, D->B)
  Yes, B is derivable! Remove A -> B

Final Minimal Cover:
Fc = { A -> C, A -> D, BC -> A, D -> B }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Importance of Minimal Cover</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Required for BCNF and 3NF decomposition algorithms</li>
        <li>Simplifies database schema design</li>
        <li>Reduces constraint checking overhead</li>
        <li>Helps identify true dependencies in the data</li>
        <li>Multiple minimal covers may exist (not unique)</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always decompose RHS first (single attribute)</li>
        <li>Check extraneous attributes using attribute closure</li>
        <li>Remove redundant FDs that can be derived from others</li>
        <li>Order of removal may affect final result</li>
        <li>Minimal cover is equivalent to original FD set</li>
        <li>Used in normalization algorithms</li>
      </ul>
    </div>
  </div>
);

export default MinimalCover;
