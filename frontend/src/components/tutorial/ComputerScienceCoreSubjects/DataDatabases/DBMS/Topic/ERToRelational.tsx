import React from "react";

const ERToRelational: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">ER to Relational Mapping</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Converting an ER diagram to a relational schema involves a systematic process of
      transforming entities, attributes, and relationships into tables, columns, and
      foreign key constraints.
    </p>

    <h2 className="text-3xl font-bold mt-8">Mapping Algorithm Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ER to Relational Mapping Steps:

Step 1: Map Strong Entity Types
Step 2: Map Weak Entity Types
Step 3: Map Binary 1:1 Relationships
Step 4: Map Binary 1:N Relationships
Step 5: Map Binary M:N Relationships
Step 6: Map Multi-valued Attributes
Step 7: Map N-ary Relationships`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Step 1: Strong Entity Mapping</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Strong Entity → Table

ER:
    (EmpID)  (Name)  (Salary)
        \\      |       /
       +------------+
       |  EMPLOYEE  |
       +------------+

Relational:
EMPLOYEE (EmpID, Name, Salary)
         ------
         Primary Key

Rules:
- Entity name becomes table name
- Simple attributes become columns
- Key attribute becomes primary key
- Composite attributes: include sub-attributes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Step 2: Weak Entity Mapping</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Weak Entity → Table with Foreign Key

ER:
+----------+            +===========+
| EMPLOYEE |====<HAS>===| DEPENDENT |
+----------+            +===========+
   (EmpID)               (DepName)

Relational:
EMPLOYEE (EmpID, Name, Salary)
         ------

DEPENDENT (EmpID, DepName, Relationship)
          ------  -------
          FK      Partial Key

          Primary Key = (EmpID, DepName)

Rules:
- Include owner's primary key as foreign key
- Primary key = Owner's PK + Partial Key
- Add ON DELETE CASCADE for referential integrity`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Step 3: Binary 1:1 Relationships</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1:1 Relationship → Foreign Key or Merge

ER:
+----------+      HAS      +----------+
| EMPLOYEE |------<>-------| PARKING  |
+----------+   1       1   +----------+

Option 1: Foreign Key Approach
EMPLOYEE (EmpID, Name, ParkingID)
                       --------
                       FK to PARKING

PARKING (ParkingID, Location)

Option 2: Merge Tables (if total participation)
EMPLOYEE_PARKING (EmpID, Name, ParkingID, Location)

Choose based on:
- Total participation → Merge may be better
- Partial participation → Foreign key approach`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Step 4: Binary 1:N Relationships</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1:N Relationship → Foreign Key on N-side

ER:
+----------+    WORKS_IN   +----------+
|   DEPT   |------<>-------|  EMPLOYEE|
+----------+   1       N   +----------+

Relational:
DEPT (DeptID, DeptName)
      ------

EMPLOYEE (EmpID, Name, DeptID)
                       ------
                       FK to DEPT

Rule: Add foreign key to the N-side (many side)
The "many" side references the "one" side.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Step 5: Binary M:N Relationships</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`M:N Relationship → New Junction Table

ER:
+----------+    ENROLLS    +----------+
| STUDENT  |------<>-------| COURSE   |
+----------+   M       N   +----------+
               (Grade)

Relational:
STUDENT (StudentID, Name)
         ---------

COURSE (CourseID, Title)
        --------

ENROLLMENT (StudentID, CourseID, Grade)
            ---------  --------
            FK         FK

            Primary Key = (StudentID, CourseID)

Rules:
- Create new table for relationship
- Include PKs of both entities as FKs
- These FKs together form the primary key
- Relationship attributes go in junction table`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Step 6: Multi-valued Attributes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Multi-valued Attribute → New Table

ER:
+----------+
| EMPLOYEE |
+----------+
     |
((PhoneNums))

Relational:
EMPLOYEE (EmpID, Name)
          ------

EMPLOYEE_PHONE (EmpID, PhoneNum)
                ------  --------
                FK

                Primary Key = (EmpID, PhoneNum)

Each phone number gets its own row.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Mapping Summary Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">ER Construct</th>
            <th className="p-3 border">Relational Mapping</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Strong Entity</td>
            <td className="p-3 border">Table with attributes as columns</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Weak Entity</td>
            <td className="p-3 border">Table + Owner's PK as FK</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">1:1 Relationship</td>
            <td className="p-3 border">FK in either table or merge</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">1:N Relationship</td>
            <td className="p-3 border">FK on N-side</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">M:N Relationship</td>
            <td className="p-3 border">New junction table</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Multi-valued Attr</td>
            <td className="p-3 border">Separate table</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Composite Attr</td>
            <td className="p-3 border">Include sub-attributes only</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Derived Attr</td>
            <td className="p-3 border">Usually not stored</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Strong entities map directly to tables</li>
        <li>Weak entities include owner's PK in their key</li>
        <li>1:N relationships: FK goes on the N-side</li>
        <li>M:N relationships require a junction table</li>
        <li>Multi-valued attributes need separate tables</li>
        <li>Derived attributes are typically not stored</li>
      </ul>
    </div>
  </div>
);

export default ERToRelational;
