import React from "react";

const ERModelIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Introduction to ER Model</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Entity-Relationship (ER) Model is a high-level conceptual data model used to describe
      the structure of a database. It was proposed by Peter Chen in 1976 and provides a graphical
      representation of entities and their relationships.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is ER Model?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ER Model Components:

+-------------+          +---------------+          +-------------+
|   ENTITY    |----------|  RELATIONSHIP |----------|   ENTITY    |
| (Rectangle) |          |   (Diamond)   |          | (Rectangle) |
+-------------+          +---------------+          +-------------+
      |                                                    |
      |                                                    |
+-------------+                                      +-------------+
| ATTRIBUTES  |                                      | ATTRIBUTES  |
|  (Ovals)    |                                      |  (Ovals)    |
+-------------+                                      +-------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ER Model Components</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Entity</td>
            <td className="p-3 border">Rectangle</td>
            <td className="p-3 border">Real-world object (Student, Employee)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Attribute</td>
            <td className="p-3 border">Oval/Ellipse</td>
            <td className="p-3 border">Property of entity (Name, Age)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Relationship</td>
            <td className="p-3 border">Diamond</td>
            <td className="p-3 border">Association between entities (Works_In)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Primary Key</td>
            <td className="p-3 border">Underlined Attribute</td>
            <td className="p-3 border">Unique identifier for entity</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: University Database</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`University Database ER Diagram:

    (Name)  (ID)  (Dept)           (CID) (Title) (Credits)
       \\     |     /                  \\     |      /
        \\    |    /                    \\    |     /
       +-----------+   ENROLLS    +------------+
       |  STUDENT  |--------------|   COURSE   |
       +-----------+   (Grade)    +------------+
            |
            | ADVISED_BY
            |
       +-----------+
       | PROFESSOR |
       +-----------+
       /     |     \\
    (PID) (Name) (Salary)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Use ER Model?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Conceptual Design:</strong> Provides a clear visual representation of data requirements</li>
      <li><strong>Communication:</strong> Easy for non-technical stakeholders to understand</li>
      <li><strong>Documentation:</strong> Serves as documentation for database design</li>
      <li><strong>Conversion:</strong> Can be easily converted to relational schema</li>
      <li><strong>Validation:</strong> Helps identify design issues early</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">ER Model Design Process</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Design Steps:

1. Requirements Analysis
        |
        v
2. Identify Entities
        |
        v
3. Identify Attributes
        |
        v
4. Identify Relationships
        |
        v
5. Draw ER Diagram
        |
        v
6. Convert to Relational Schema`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>ER model is used for conceptual database design</li>
        <li>Main components: Entity, Attribute, Relationship</li>
        <li>Proposed by Peter Chen in 1976</li>
        <li>ER diagrams are converted to relational tables</li>
        <li>Provides a high-level view before implementation</li>
      </ul>
    </div>
  </div>
);

export default ERModelIntro;
