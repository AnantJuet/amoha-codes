import React from "react";

const FunctionalDependencies: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Functional Dependencies</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A functional dependency (FD) is a constraint between two sets of attributes in a relation.
      It describes the relationship between attributes and is fundamental to normalization.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Functional Dependency: X → Y

"X functionally determines Y" or "Y is functionally dependent on X"

Meaning:
- For any two tuples t1 and t2
- If t1[X] = t2[X], then t1[Y] = t2[Y]
- Same X value always maps to same Y value

X is called the determinant
Y is called the dependent`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`EMPLOYEE Table:
+------+-------+--------+-----------+----------+
| EID  | Name  | DeptID | DeptName  | Manager  |
+------+-------+--------+-----------+----------+
| E1   | John  | D1     | IT        | Bob      |
| E2   | Alice | D1     | IT        | Bob      |
| E3   | Carol | D2     | HR        | Eve      |
+------+-------+--------+-----------+----------+

Functional Dependencies:
EID → Name          (Employee ID determines Name)
EID → DeptID        (Employee ID determines Department)
DeptID → DeptName   (Dept ID determines Dept Name)
DeptID → Manager    (Dept ID determines Manager)

Combined:
EID → Name, DeptID
DeptID → DeptName, Manager`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Functional Dependencies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Trivial</td>
            <td className="p-3 border">Y is subset of X</td>
            <td className="p-3 border">(A, B) → A</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Non-trivial</td>
            <td className="p-3 border">Y is not subset of X</td>
            <td className="p-3 border">A → B</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Full</td>
            <td className="p-3 border">Y depends on entire X</td>
            <td className="p-3 border">(A, B) → C (need both)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Partial</td>
            <td className="p-3 border">Y depends on part of X</td>
            <td className="p-3 border">(A, B) → C where A → C</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Transitive</td>
            <td className="p-3 border">X → Y → Z implies X → Z</td>
            <td className="p-3 border">A → B, B → C ⟹ A → C</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Armstrong's Axioms</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Armstrong's Axioms (Inference Rules):

Primary Rules:
1. Reflexivity: If Y ⊆ X, then X → Y
   Example: (A, B) → A

2. Augmentation: If X → Y, then XZ → YZ
   Example: A → B implies AC → BC

3. Transitivity: If X → Y and Y → Z, then X → Z
   Example: A → B, B → C implies A → C

Derived Rules:
4. Union: If X → Y and X → Z, then X → YZ
5. Decomposition: If X → YZ, then X → Y and X → Z
6. Pseudotransitivity: If X → Y and WY → Z, then WX → Z`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Closure of Attributes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Attribute Closure (X+):
Set of all attributes functionally determined by X.

Given FDs:
A → B
B → C
C → D
A → E

Find A+:
Step 1: A+ = {A}           (start with A)
Step 2: A → B, add B       A+ = {A, B}
Step 3: A → E, add E       A+ = {A, B, E}
Step 4: B → C, add C       A+ = {A, B, C, E}
Step 5: C → D, add D       A+ = {A, B, C, D, E}

A+ = {A, B, C, D, E}

Usage: Check if X is a candidate key
If X+ contains all attributes, X is a superkey.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Finding Candidate Keys</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`To find candidate keys:

1. Find attributes that appear only on LEFT side of FDs
   (These MUST be in every key)
2. Find attributes that appear only on RIGHT side
   (These can NEVER be in a key)
3. Start with left-only attributes
4. Add other attributes and check closure

Example: R(A, B, C, D, E) with FDs:
A → B
BC → D
D → E

Left only: A, C (never on right)
Right only: E (never on left)

Check {A, C}:
- A → B, so {A, C}+ includes B
- BC → D, so {A, C}+ includes D
- D → E, so {A, C}+ includes E
- {A, C}+ = {A, B, C, D, E} = all attributes

Candidate Key: {A, C}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>X → Y: Same X always gives same Y</li>
        <li>Armstrong's axioms derive new FDs</li>
        <li>Closure X+ = all attributes determined by X</li>
        <li>If X+ = all attributes, X is a superkey</li>
        <li>FDs are essential for normalization</li>
      </ul>
    </div>
  </div>
);

export default FunctionalDependencies;
