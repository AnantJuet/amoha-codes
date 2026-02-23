import React from "react";

const ProjectionOperation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Projection Operation (π)</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Projection is a unary operation that selects specific columns from a relation.
      It creates a vertical subset of the relation containing only the specified attributes.
    </p>

    <h2 className="text-3xl font-bold mt-8">Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Projection Syntax:

π <attribute-list> (Relation)

Where:
- π (pi) is the projection operator
- <attribute-list> is comma-separated column names
- Relation is the input relation

SQL Equivalent:
SELECT attribute1, attribute2, ... FROM Relation;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Basic Projection Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`STUDENT Table:
+------+-------+------+--------+
| SID  | Name  | Age  | Major  |
+------+-------+------+--------+
| S1   | John  | 20   | CS     |
| S2   | Alice | 21   | IT     |
| S3   | Bob   | 22   | CS     |
| S4   | Carol | 20   | ECE    |
+------+-------+------+--------+

Query: Get only Name and Major
π Name, Major (STUDENT)

Result:
+-------+--------+
| Name  | Major  |
+-------+--------+
| John  | CS     |
| Alice | IT     |
| Bob   | CS     |
| Carol | ECE    |
+-------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Duplicate Elimination</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Important: Projection removes duplicate tuples!

STUDENT Table:
+------+-------+------+--------+
| SID  | Name  | Age  | Major  |
+------+-------+------+--------+
| S1   | John  | 20   | CS     |
| S2   | Alice | 21   | IT     |
| S3   | Bob   | 22   | CS     |
| S4   | Carol | 20   | ECE    |
+------+-------+------+--------+

Query: Get all majors
π Major (STUDENT)

Result (duplicates removed):
+--------+
| Major  |
+--------+
| CS     |   ← Only one CS
| IT     |
| ECE    |
+--------+

Note: S1 and S3 both had CS, but result shows only once.
This is because relations are SETS (no duplicates).`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Combining Selection and Projection</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Combining σ and π:

Query: Names of students with Age > 20
π Name (σ Age > 20 (STUDENT))

Step 1: Selection σ Age > 20 (STUDENT)
+------+-------+------+--------+
| SID  | Name  | Age  | Major  |
+------+-------+------+--------+
| S2   | Alice | 21   | IT     |
| S3   | Bob   | 22   | CS     |
+------+-------+------+--------+

Step 2: Projection π Name
+-------+
| Name  |
+-------+
| Alice |
| Bob   |
+-------+

SQL Equivalent:
SELECT Name FROM STUDENT WHERE Age > 20;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties of Projection</h2>
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
            <td className="p-3 border font-semibold">Not Commutative</td>
            <td className="p-3 border">π A (π B (R)) ≠ π B (π A (R)) in general</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Degree Reduced</td>
            <td className="p-3 border">Result degree ≤ input degree</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cardinality</td>
            <td className="p-3 border">Result cardinality ≤ input (due to duplicate removal)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cascading</td>
            <td className="p-3 border">π A (π A,B (R)) = π A (R) when A ⊆ B</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Projection with Selection Order</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Order matters when combining:

Correct:
π Name (σ Age > 20 (STUDENT))
- First filter, then project

Incorrect (generally):
σ Age > 20 (π Name (STUDENT))
- Error! Age is not in the projected result

If selection condition uses attributes not in projection,
selection MUST come before projection.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Selection vs Projection</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Selection (σ)</th>
            <th className="p-3 border">Projection (π)</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Subset Type</td>
            <td className="p-3 border">Horizontal (rows)</td>
            <td className="p-3 border">Vertical (columns)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Based On</td>
            <td className="p-3 border">Condition/predicate</td>
            <td className="p-3 border">Attribute list</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Degree</td>
            <td className="p-3 border">Unchanged</td>
            <td className="p-3 border">May decrease</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cardinality</td>
            <td className="p-3 border">May decrease</td>
            <td className="p-3 border">May decrease</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Projection selects columns (vertical subset)</li>
        <li>Uses π (pi) symbol</li>
        <li>Automatically removes duplicate tuples</li>
        <li>Result has same or fewer columns</li>
        <li>Order with selection matters for correctness</li>
      </ul>
    </div>
  </div>
);

export default ProjectionOperation;
