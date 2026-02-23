import React from "react";

const DivisionOperation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Division Operation (÷)</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Division is a binary operation that finds tuples in one relation that are associated
      with ALL tuples in another relation. It's useful for "for all" type queries.
    </p>

    <h2 className="text-3xl font-bold mt-8">Division Concept</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Division: R ÷ S

Given:
- R(A, B) where A and B are sets of attributes
- S(B) where B matches some attributes of R

Result:
- Tuples from R[A] that are associated with ALL tuples in S

Used for queries like:
"Find students who enrolled in ALL courses"
"Find suppliers who supply ALL parts"`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Division Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ENROLLMENT (R)                  REQUIRED_COURSES (S)
+------+------+                 +------+
| SID  | CID  |                 | CID  |
+------+------+                 +------+
| S1   | C1   |                 | C1   |
| S1   | C2   |                 | C2   |
| S1   | C3   |                 +------+
| S2   | C1   |
| S2   | C2   |
| S3   | C1   |
+------+------+

Query: Find students enrolled in ALL required courses

ENROLLMENT ÷ REQUIRED_COURSES

Result:
+------+
| SID  |
+------+
| S1   |  ← Enrolled in C1, C2 (and C3)
| S2   |  ← Enrolled in C1, C2
+------+

S3 not included: Only enrolled in C1, not C2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Division Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Division can be expressed using basic operations:

R ÷ S = π_A(R) - π_A((π_A(R) × S) - R)

Step by step for ENROLLMENT ÷ REQUIRED_COURSES:

Step 1: π_SID(ENROLLMENT)
+------+
| S1   |
| S2   |
| S3   |
+------+

Step 2: π_SID(ENROLLMENT) × REQUIRED_COURSES
+------+------+
| S1   | C1   |
| S1   | C2   |
| S2   | C1   |
| S2   | C2   |
| S3   | C1   |
| S3   | C2   |
+------+------+

Step 3: (Step 2) - ENROLLMENT
+------+------+
| S3   | C2   |   ← S3 not enrolled in C2
+------+------+

Step 4: π_SID(Step 3)
+------+
| S3   |
+------+

Step 5: (Step 1) - (Step 4)
+------+
| S1   |
| S2   |
+------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Another Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SUPPLY                          ALL_PARTS
+----------+--------+           +--------+
| Supplier | PartNo |           | PartNo |
+----------+--------+           +--------+
| S1       | P1     |           | P1     |
| S1       | P2     |           | P2     |
| S1       | P3     |           | P3     |
| S2       | P1     |           +--------+
| S2       | P2     |
| S3       | P1     |
+----------+--------+

Query: Find suppliers who supply ALL parts

SUPPLY ÷ ALL_PARTS

Result:
+----------+
| Supplier |
+----------+
| S1       |  ← Supplies P1, P2, P3
+----------+

S2 supplies P1, P2 only (missing P3)
S3 supplies P1 only (missing P2, P3)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SQL Equivalent</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Division in SQL (using NOT EXISTS):

-- Find students enrolled in ALL required courses
SELECT DISTINCT e1.SID
FROM ENROLLMENT e1
WHERE NOT EXISTS (
    SELECT CID FROM REQUIRED_COURSES
    WHERE CID NOT IN (
        SELECT CID FROM ENROLLMENT e2
        WHERE e2.SID = e1.SID
    )
);

Alternative using COUNT:
SELECT SID
FROM ENROLLMENT
WHERE CID IN (SELECT CID FROM REQUIRED_COURSES)
GROUP BY SID
HAVING COUNT(DISTINCT CID) = (SELECT COUNT(*) FROM REQUIRED_COURSES);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Division Properties</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Schema Requirement</td>
            <td className="p-3 border">S's attributes must be subset of R's</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Result Schema</td>
            <td className="p-3 border">Attributes in R but not in S</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Empty S</td>
            <td className="p-3 border">Returns all distinct values from R[A]</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Not Commutative</td>
            <td className="p-3 border">R ÷ S ≠ S ÷ R</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Division finds tuples related to ALL tuples in divisor</li>
        <li>Used for "for all" queries</li>
        <li>Can be expressed using π, ×, and - operations</li>
        <li>S's schema must be subset of R's schema</li>
        <li>SQL requires NOT EXISTS or HAVING COUNT for division</li>
      </ul>
    </div>
  </div>
);

export default DivisionOperation;
