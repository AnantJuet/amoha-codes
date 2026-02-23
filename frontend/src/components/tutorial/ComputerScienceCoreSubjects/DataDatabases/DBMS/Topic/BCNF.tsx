import React from "react";

const BCNF: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Boyce-Codd Normal Form (BCNF)</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      BCNF is a stricter version of 3NF. A relation is in BCNF if for every functional
      dependency X → Y, X is a superkey. This eliminates all redundancy based on FDs.
    </p>

    <h2 className="text-3xl font-bold mt-8">BCNF Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`BCNF Requirement:

For every non-trivial FD X → Y:
X must be a superkey

Comparison:
3NF: X → Y where X is superkey OR Y is prime
BCNF: X → Y where X MUST be superkey (no exception)

BCNF is stricter than 3NF.
Every BCNF relation is in 3NF, but not vice versa.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3NF vs BCNF Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ENROLLMENT (SID, Subject, Teacher)

Rules:
- Each student studies each subject with one teacher
- Each teacher teaches only one subject

+------+----------+---------+
| SID  | Subject  | Teacher |
+------+----------+---------+
| S1   | DBMS     | Dr.A    |
| S1   | OS       | Dr.B    |
| S2   | DBMS     | Dr.A    |
| S2   | OS       | Dr.C    |
+------+----------+---------+

Functional Dependencies:
(SID, Subject) → Teacher
Teacher → Subject

Candidate Keys:
- (SID, Subject)
- (SID, Teacher)

Check 3NF:
- (SID, Subject) → Teacher: (SID, Subject) is superkey ✓
- Teacher → Subject: Subject is prime (part of key) ✓
Result: IN 3NF

Check BCNF:
- (SID, Subject) → Teacher: (SID, Subject) is superkey ✓
- Teacher → Subject: Teacher is NOT superkey ✗
Result: NOT IN BCNF`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Converting to BCNF</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`BCNF Decomposition:

Original: ENROLLMENT (SID, Subject, Teacher)
Violating FD: Teacher → Subject

Decomposition:
1. Create table with violating FD:
   TEACHES (Teacher, Subject)

2. Create table with remaining attributes + determinant:
   STUDENT_TEACHER (SID, Teacher)

Result:
TEACHES (Teacher, Subject)
+---------+----------+
| Teacher | Subject  |
+---------+----------+
| Dr.A    | DBMS     |
| Dr.B    | OS       |
| Dr.C    | OS       |
+---------+----------+

STUDENT_TEACHER (SID, Teacher)
+------+---------+
| SID  | Teacher |
+------+---------+
| S1   | Dr.A    |
| S1   | Dr.B    |
| S2   | Dr.A    |
| S2   | Dr.C    |
+------+---------+

Both tables are now in BCNF!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">BCNF Decomposition Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`BCNF Decomposition Algorithm:

Input: Relation R with FDs F
Output: Set of BCNF relations

1. If R is in BCNF, done
2. Find FD X → Y that violates BCNF
   (X is not a superkey)
3. Decompose R into:
   - R1 = X ∪ Y (with FD X → Y)
   - R2 = R - Y (original minus dependent attributes)
4. Recursively apply to R1 and R2

Note: BCNF decomposition is always lossless
but may NOT preserve all FDs.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3NF vs BCNF Trade-off</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">3NF</th>
            <th className="p-3 border">BCNF</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Strictness</td>
            <td className="p-3 border">Less strict</td>
            <td className="p-3 border">More strict</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Redundancy</td>
            <td className="p-3 border">Some may exist</td>
            <td className="p-3 border">Minimal</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">FD Preservation</td>
            <td className="p-3 border">Always possible</td>
            <td className="p-3 border">May be lost</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Lossless Join</td>
            <td className="p-3 border">Always</td>
            <td className="p-3 border">Always</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use Which?</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Use 3NF when:</strong> FD preservation is important, some redundancy acceptable</li>
        <li><strong>Use BCNF when:</strong> Minimal redundancy is critical, FD preservation less important</li>
        <li><strong>In practice:</strong> Most relations in 3NF are also in BCNF</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>BCNF: Every determinant must be a superkey</li>
        <li>BCNF is stricter than 3NF</li>
        <li>3NF allows non-superkey if dependent is prime</li>
        <li>BCNF decomposition always lossless</li>
        <li>BCNF may not preserve all FDs</li>
      </ul>
    </div>
  </div>
);

export default BCNF;
