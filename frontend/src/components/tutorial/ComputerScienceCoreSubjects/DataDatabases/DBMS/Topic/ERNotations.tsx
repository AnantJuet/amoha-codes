import React from "react";

const ERNotations: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">ER Notations</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Different notation styles exist for drawing ER diagrams. The most common are
      Chen Notation, Crow's Foot Notation, and UML notation. Each has its own symbols
      and conventions.
    </p>

    <h2 className="text-3xl font-bold mt-8">1. Chen Notation (Original)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Chen Notation (Peter Chen, 1976):

Entity:          +----------+
                 |  ENTITY  |
                 +----------+

Attribute:           (Attr)

Key Attribute:       (Key)
                     -----

Relationship:        /    \\
                    < REL  >
                     \\    /

Multi-valued:       (( Attr ))

Derived:           - - - - -
                  (  Attr   )
                   - - - - -

Example:
    (ID)  (Name)                     (CID)  (Title)
      \\    /                            \\    /
   +----------+     ENROLLS         +----------+
   | STUDENT  |------<>-------------| COURSE   |
   +----------+    M     N          +----------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Crow's Foot Notation (IE Notation)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Crow's Foot Notation (Information Engineering):

Entity:     +------------+
            | EntityName |
            |------------|
            | attribute1 |
            | attribute2 |
            +------------+

Cardinality Symbols:
    |       One (mandatory)
    O       Zero (optional)
    <       Many (crow's foot)

Common Patterns:
    ||------||    One-to-One (mandatory both sides)
    ||------O<    One-to-Many (optional on many side)
    O|------O<    One-to-Many (optional both sides)
    ><------><    Many-to-Many

Example:
+------------+            +------------+
| DEPARTMENT |            | EMPLOYEE   |
|------------|            |------------|
| DeptID     ||---------O<| EmpID      |
| DeptName   |            | Name       |
+------------+            | DeptID(FK) |
                          +------------+

One department has many employees (optional)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. UML Class Diagram Notation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`UML (Unified Modeling Language):

Entity (Class):
+------------------+
|    ClassName     |
+------------------+
| - attribute1     |
| - attribute2     |
+------------------+
| + method1()      |
+------------------+

Multiplicity:
    1       Exactly one
    0..1    Zero or one
    *       Many (zero or more)
    1..*    One or more
    0..*    Zero or more

Example:
+------------+       1..*         +------------+
| Department |<>----------------<>| Employee   |
+------------+                    +------------+
| - deptId   |                    | - empId    |
| - name     |                    | - name     |
+------------+                    +------------+

Association types:
    -------      Association
    ------->     Directed association
    ----<>       Aggregation
    ----<*>      Composition`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Notation Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Chen</th>
            <th className="p-3 border">Crow's Foot</th>
            <th className="p-3 border">UML</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Entity</td>
            <td className="p-3 border">Rectangle</td>
            <td className="p-3 border">Rectangle with sections</td>
            <td className="p-3 border">Class box</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Attribute</td>
            <td className="p-3 border">Oval outside</td>
            <td className="p-3 border">Inside entity box</td>
            <td className="p-3 border">Inside class box</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Relationship</td>
            <td className="p-3 border">Diamond</td>
            <td className="p-3 border">Line only</td>
            <td className="p-3 border">Line with name</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cardinality</td>
            <td className="p-3 border">1, N, M</td>
            <td className="p-3 border">Crow's foot symbols</td>
            <td className="p-3 border">Multiplicity numbers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Primary Use</td>
            <td className="p-3 border">Academic/conceptual</td>
            <td className="p-3 border">Database design tools</td>
            <td className="p-3 border">Software engineering</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Min-Max Notation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Min-Max Notation (Structural Constraints):

Format: (min, max) on each side of relationship

+----------+              +----------+
| EMPLOYEE |-(1,1)---(1,N)| DEPT     |
+----------+   WORKS_IN   +----------+

Reading:
- Employee side (1,1): Each employee works in
  exactly 1 department (min=1, max=1)
- Dept side (1,N): Each department has
  1 to many employees (min=1, max=N)

Common patterns:
  (0,1)  - Optional, at most one
  (1,1)  - Mandatory, exactly one
  (0,N)  - Optional, any number
  (1,N)  - Mandatory, one or more`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Chen notation is original and commonly used in academics</li>
        <li>Crow's foot is popular in database design tools</li>
        <li>UML is used in software engineering contexts</li>
        <li>All notations convey the same information differently</li>
        <li>Choose notation based on audience and tool support</li>
      </ul>
    </div>
  </div>
);

export default ERNotations;
