import React from "react";

const Relationships: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Relationships in ER Model</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A relationship represents an association between two or more entities. Relationships
      describe how entities interact with each other in the database model.
    </p>

    <h2 className="text-3xl font-bold mt-8">Relationship Basics</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relationship Representation:

+----------+                    +----------+
| STUDENT  |----< ENROLLS >----| COURSE   |
+----------+      (Diamond)     +----------+

Components:
- Entities: STUDENT, COURSE (Rectangles)
- Relationship: ENROLLS (Diamond)
- Connection lines show participation`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Degree of Relationship</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Degree = Number of entities participating in relationship

1. Unary (Degree 1) - Self-referencing:
   +----------+
   | EMPLOYEE |----< MANAGES >----+
   +----------+                    |
        ^--------------------------|

   Example: Employee manages another Employee

2. Binary (Degree 2) - Most common:
   +----------+                +----------+
   | STUDENT  |---< TAKES >---| COURSE   |
   +----------+                +----------+

   Example: Student takes Course

3. Ternary (Degree 3):
   +----------+
   | SUPPLIER |
   +----------+
        |
   < SUPPLIES >
    /         \\
+-------+   +--------+
| PART  |   | PROJECT|
+-------+   +--------+

   Example: Supplier supplies Part to Project`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Relationships</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Degree</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Entities</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1</td>
            <td className="p-3 border">Unary/Recursive</td>
            <td className="p-3 border">1 entity type</td>
            <td className="p-3 border">Employee manages Employee</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2</td>
            <td className="p-3 border">Binary</td>
            <td className="p-3 border">2 entity types</td>
            <td className="p-3 border">Student enrolls in Course</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3</td>
            <td className="p-3 border">Ternary</td>
            <td className="p-3 border">3 entity types</td>
            <td className="p-3 border">Supplier-Part-Project</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">n</td>
            <td className="p-3 border">N-ary</td>
            <td className="p-3 border">n entity types</td>
            <td className="p-3 border">Complex associations</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Relationship Attributes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relationships can have their own attributes:

+----------+                      +----------+
| STUDENT  |----< ENROLLS >------| COURSE   |
+----------+         |            +----------+
                     |
                 (Grade)
                 (Date)

ENROLLS relationship has:
- Grade: The grade student received
- Date: When student enrolled

These attributes belong to the relationship,
not to either entity alone.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Participation Constraints</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Total Participation (mandatory):
Every entity MUST participate - shown with double line

+----------+                    +----------+
| EMPLOYEE |====< WORKS_IN >===| DEPT     |
+----------+                    +----------+
(Every employee must work in some department)

Partial Participation (optional):
Entity MAY participate - shown with single line

+----------+                    +----------+
| EMPLOYEE |----< MANAGES >----| DEPT     |
+----------+                    +----------+
(Not every employee manages a department)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Identifying Relationship</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Identifying Relationship:
Connects weak entity to its owner (double diamond)

+----------+                    +============+
| EMPLOYEE |====< HAS >========| DEPENDENT  |
+----------+  (Double Diamond)  +============+
   (Owner)                      (Weak Entity)

- DEPENDENT cannot exist without EMPLOYEE
- DEPENDENT's key includes EMPLOYEE's key
- Shown with double lines and double diamond`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Degree indicates number of participating entities</li>
        <li>Binary relationships (degree 2) are most common</li>
        <li>Relationships can have their own attributes</li>
        <li>Double line indicates total (mandatory) participation</li>
        <li>Double diamond indicates identifying relationship for weak entities</li>
      </ul>
    </div>
  </div>
);

export default Relationships;
