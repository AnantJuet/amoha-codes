import React from "react";

const ERDiagrams: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">ER Diagrams</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      ER Diagrams (Entity-Relationship Diagrams) are graphical representations of the
      ER model. They provide a visual blueprint of the database structure showing
      entities, attributes, and relationships.
    </p>

    <h2 className="text-3xl font-bold mt-8">ER Diagram Symbols</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Standard ER Diagram Symbols:

+-------------+
|   ENTITY    |     Rectangle - Entity
+-------------+

    (  )
   (    )           Oval/Ellipse - Attribute
    (  )

   /    \\
  /      \\         Diamond - Relationship
  \\      /
   \\    /

+=============+
||  ENTITY   ||    Double Rectangle - Weak Entity
+=============+

   ((    ))        Double Oval - Multi-valued Attribute

   - - - - -
  (        )       Dashed Oval - Derived Attribute
   - - - - -

   _______
  (  Key  )        Underlined - Key Attribute
   -------`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete ER Diagram Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`University Database ER Diagram:

                    (Name)
                      |
(SSN)---(Name)---(DOB)                (CourseNo)---(Title)---(Credits)
   \\       |       /                        \\         |         /
    \\      |      /                          \\        |        /
   +------------+                            +-----------+
   |  STUDENT   |                            |  COURSE   |
   +------------+                            +-----------+
         |                                         |
         |         (Grade)                         |
         |            |                            |
         +-------< ENROLLS >-----------------------+
                   /     \\
                  /       \\
               (Date)   (Semester)


   +------------+                            +-----------+
   |   DEPT     |---------< OFFERS >---------|  COURSE   |
   +------------+                            +-----------+
         |
         |
   < WORKS_IN >
         |
         |
   +------------+
   |  FACULTY   |
   +------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Steps to Draw ER Diagram</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">Action</th>
            <th className="p-3 border">Output</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1</td>
            <td className="p-3 border">Identify all entities</td>
            <td className="p-3 border">List of rectangles</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2</td>
            <td className="p-3 border">Identify attributes for each entity</td>
            <td className="p-3 border">Ovals connected to entities</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3</td>
            <td className="p-3 border">Mark primary keys</td>
            <td className="p-3 border">Underlined attributes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4</td>
            <td className="p-3 border">Identify relationships</td>
            <td className="p-3 border">Diamonds between entities</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5</td>
            <td className="p-3 border">Specify cardinality</td>
            <td className="p-3 border">1, N, M on connection lines</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">6</td>
            <td className="p-3 border">Add participation constraints</td>
            <td className="p-3 border">Single/double lines</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Weak Entity in ER Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Weak Entity Representation:

+------------+                    +===============+
|  EMPLOYEE  |======< HAS >======||  DEPENDENT  ||
+------------+   (Double Diamond) +===============+
     |                                   |
  (EmpID)                          - - - - - -
     |                            ( DepName )  <-- Partial key (dashed)
  (Name)                           - - - - - -
     |
  (Salary)


- Double rectangle for weak entity
- Double diamond for identifying relationship
- Dashed underline for partial key
- Double line shows total participation`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cardinality in ER Diagrams</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Cardinality Notation:

One-to-One (1:1):
+--------+    1         1    +--------+
| PERSON |-------<>----------| LICENSE|
+--------+      HAS          +--------+

One-to-Many (1:N):
+--------+    1         N    +----------+
|  DEPT  |-------<>----------| EMPLOYEE |
+--------+   HAS             +----------+

Many-to-Many (M:N):
+---------+   M         N    +--------+
| STUDENT |-------<>---------| COURSE |
+---------+   ENROLLS        +--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common ER Diagram Mistakes</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Missing Primary Keys:</strong> Every entity must have a key attribute</li>
      <li><strong>Redundant Relationships:</strong> Avoid unnecessary relationship paths</li>
      <li><strong>Misplaced Attributes:</strong> Attributes should belong to correct entity</li>
      <li><strong>Wrong Cardinality:</strong> Carefully analyze business rules</li>
      <li><strong>Missing Participation:</strong> Specify total/partial participation</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Use standard symbols consistently</li>
        <li>Every entity needs at least one key attribute</li>
        <li>Relationship attributes belong to the diamond</li>
        <li>Double symbols indicate weak entities/identifying relationships</li>
        <li>Cardinality and participation must be clearly marked</li>
      </ul>
    </div>
  </div>
);

export default ERDiagrams;
