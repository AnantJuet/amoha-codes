import React from "react";

const Cardinality: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Cardinality in ER Model</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cardinality defines the numerical relationships between entity instances. It specifies
      how many instances of one entity can be associated with instances of another entity.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Cardinality</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Cardinality Types (Mapping Cardinality):

+----------------+------------------+-------------------+
|     Type       |    Notation      |     Meaning       |
+----------------+------------------+-------------------+
|   One-to-One   |      1:1         | A -> exactly 1 B  |
|   One-to-Many  |      1:N         | A -> many B       |
|   Many-to-One  |      N:1         | Many A -> 1 B     |
|   Many-to-Many |      M:N         | Many A -> Many B  |
+----------------+------------------+-------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. One-to-One (1:1)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`One-to-One Relationship:
Each entity A is associated with at most one entity B and vice versa.

Example: Person - Passport

PERSON                              PASSPORT
+------+-------+                    +------+--------+
| PID  | Name  |                    | PNo  | Expiry |
+------+-------+                    +------+--------+
| P1   | John  |<------HAS-------->| PS1  | 2025   |
| P2   | Alice |<------HAS-------->| PS2  | 2026   |
| P3   | Bob   |                    |      |        |
+------+-------+                    +------+--------+

ER Diagram:
+--------+      1        1      +----------+
| PERSON |----------<>---------| PASSPORT |
+--------+       HAS            +----------+

- One person has one passport
- One passport belongs to one person`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. One-to-Many (1:N)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`One-to-Many Relationship:
One entity A can be associated with many entities B.
Each entity B is associated with at most one entity A.

Example: Department - Employee

DEPARTMENT                          EMPLOYEE
+------+--------+                   +------+-------+------+
| DNo  | DName  |                   | EID  | Name  | DNo  |
+------+--------+                   +------+-------+------+
| D1   | Sales  |<---+              | E1   | John  | D1   |
+------+--------+    |----HAS       | E2   | Alice | D1   |
| D2   | IT     |<---+----HAS       | E3   | Bob   | D2   |
+------+--------+                   +------+-------+------+

ER Diagram:
+------------+      1        N      +----------+
| DEPARTMENT |----------<>---------| EMPLOYEE |
+------------+       HAS            +----------+

- One department has many employees
- Each employee works in one department`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Many-to-One (N:1)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Many-to-One Relationship:
Many entities A can be associated with one entity B.
(Same as 1:N viewed from other direction)

Example: Students - Advisor

STUDENT                             PROFESSOR
+------+-------+                    +------+--------+
| SID  | Name  |                    | PID  | Name   |
+------+-------+                    +------+--------+
| S1   | John  |----+               | P1   | Dr.Lee |
| S2   | Alice |----+---ADVISED_BY->| P1   | Dr.Lee |
| S3   | Bob   |--------ADVISED_BY->| P2   | Dr.Kim |
+------+-------+                    +------+--------+

ER Diagram:
+---------+      N        1      +-----------+
| STUDENT |----------<>----------| PROFESSOR |
+---------+    ADVISED_BY        +-----------+

- Many students can have one advisor
- One professor advises many students`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Many-to-Many (M:N)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Many-to-Many Relationship:
Many entities A can be associated with many entities B.

Example: Student - Course

STUDENT                             COURSE
+------+-------+                    +------+---------+
| SID  | Name  |                    | CID  | Title   |
+------+-------+                    +------+---------+
| S1   | John  |<---ENROLLS-------->| C1   | DBMS    |
| S2   | Alice |<---ENROLLS-------->| C1   | DBMS    |
| S1   | John  |<---ENROLLS-------->| C2   | OS      |
+------+-------+                    +------+---------+

ER Diagram:
+---------+      M        N      +--------+
| STUDENT |----------<>----------| COURSE |
+---------+      ENROLLS         +--------+

- One student enrolls in many courses
- One course has many students enrolled
- Requires junction/bridge table in relational model`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cardinality Notation Styles</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Cardinality</th>
            <th className="p-3 border">Chen Notation</th>
            <th className="p-3 border">Crow's Foot</th>
            <th className="p-3 border">Min-Max</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">One-to-One</td>
            <td className="p-3 border">1 --- 1</td>
            <td className="p-3 border">|------|</td>
            <td className="p-3 border">(1,1) --- (1,1)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">One-to-Many</td>
            <td className="p-3 border">1 --- N</td>
            <td className="p-3 border">|------&lt;</td>
            <td className="p-3 border">(1,1) --- (0,N)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Many-to-Many</td>
            <td className="p-3 border">M --- N</td>
            <td className="p-3 border">&gt;------&lt;</td>
            <td className="p-3 border">(0,M) --- (0,N)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Min-Max Notation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Min-Max Notation: (min, max)

- min = minimum participation (0 or 1)
- max = maximum participation (1 or N)

Example:
+----------+              +----------+
| EMPLOYEE |-(1,1)----(1,N)| DEPT    |
+----------+  WORKS_IN    +----------+

Meaning:
- Each employee works in (1,1): exactly 1 department
- Each department has (1,N): at least 1, possibly many employees`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>1:1 - One entity associated with exactly one other</li>
        <li>1:N - One entity associated with many others</li>
        <li>M:N - Many entities associated with many others</li>
        <li>M:N requires a junction table in relational model</li>
        <li>Min-max notation specifies exact participation constraints</li>
      </ul>
    </div>
  </div>
);

export default Cardinality;
