import React from "react";

const AttributeClosure: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Attribute Closure
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Attribute closure is the set of all attributes that can be functionally determined
      by a given set of attributes using the available functional dependencies. It is
      essential for finding candidate keys and verifying functional dependencies.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        <strong>Notation:</strong> X+ (X closure)
      </p>
      <p className="leading-relaxed mt-2">
        The closure of attribute set X under functional dependencies F is the set of
        all attributes A such that X functionally determines A.
      </p>
      <p className="leading-relaxed mt-2 font-mono text-gray-900">
        X+ = {`{A | X -> A can be derived from F}`}
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm to Find Attribute Closure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Algorithm: Compute X+

Input: Set of attributes X, Set of FDs F
Output: X+ (closure of X)

1. result = X
2. repeat
3.   for each FD Y -> Z in F do
4.     if Y ⊆ result then
5.       result = result ∪ Z
6. until result doesn't change
7. return result`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Computing Attribute Closure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Given: R(A, B, C, D, E)
FDs: F = { A -> B, BC -> D, D -> E, E -> A }

Find A+:
Initial: result = {A}

Iteration 1:
  A -> B: A ⊆ {A}? Yes! result = {A, B}
  BC -> D: BC ⊆ {A, B}? No
  D -> E: D ⊆ {A, B}? No
  E -> A: E ⊆ {A, B}? No
  result changed from {A} to {A, B}

Iteration 2:
  A -> B: already have B
  BC -> D: BC ⊆ {A, B}? No
  D -> E: No
  E -> A: No
  result = {A, B} (no change)

A+ = {A, B}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Another Example: Finding a Superkey</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Given: R(A, B, C, D, E)
FDs: F = { A -> B, BC -> D, D -> E, E -> A }

Find {A, C}+:
Initial: result = {A, C}

Iteration 1:
  A -> B: A ⊆ {A, C}? Yes! result = {A, B, C}
  BC -> D: BC ⊆ {A, B, C}? Yes! result = {A, B, C, D}
  D -> E: D ⊆ {A, B, C, D}? Yes! result = {A, B, C, D, E}
  E -> A: already have A
  result changed to {A, B, C, D, E}

Iteration 2:
  No changes (already have all attributes)

{A, C}+ = {A, B, C, D, E} = All attributes!

Therefore {A, C} is a SUPERKEY (determines everything)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of Attribute Closure</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Application</th>
            <th className="p-3 border">How to Use</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Find Superkey</td>
            <td className="p-3 border">If X+ = all attributes, X is superkey</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Find Candidate Key</td>
            <td className="p-3 border">Minimal X where X+ = all attributes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Verify FD</td>
            <td className="p-3 border">{`X -> Y holds if Y ⊆ X+`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Equivalence of FD sets</td>
            <td className="p-3 border">Check if closures are equal</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Finding Candidate Keys Using Closure</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Given: R(A, B, C, D), F = {A -> B, B -> C, C -> D}

Step 1: Identify attributes
  - Only on LEFT: A (never on right side)
  - Only on RIGHT: D (never on left side)
  - Both sides: B, C

Step 2: A must be in every candidate key
  (It's the only source of determining other attributes)

Step 3: Compute A+
  A+ = {A, B, C, D} = All attributes!

Step 4: Is A minimal?
  Yes, single attribute, can't be reduced.

Therefore: A is the ONLY candidate key!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>X+ is the set of all attributes determined by X</li>
        <li>Use iterative algorithm until no change occurs</li>
        <li>X is superkey if X+ = all attributes of relation</li>
        <li>Essential for finding candidate keys</li>
        <li>Used to verify if an FD holds: X {`->`} Y holds iff Y ⊆ X+</li>
        <li>Important for normalization algorithms</li>
      </ul>
    </div>
  </div>
);

export default AttributeClosure;
