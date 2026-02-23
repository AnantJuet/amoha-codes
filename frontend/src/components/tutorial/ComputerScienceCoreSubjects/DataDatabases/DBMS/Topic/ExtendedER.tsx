import React from "react";

const ExtendedER: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Extended ER Model (EER)</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Extended Entity-Relationship (EER) Model adds additional semantic concepts to
      the basic ER model. It includes specialization, generalization, aggregation, and
      category/union types for more expressive database design.
    </p>

    <h2 className="text-3xl font-bold mt-8">EER Model Extensions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`EER Model Additional Concepts:

Basic ER Model
    |
    +-- Entities, Attributes, Relationships
    |
Extended ER Model (EER)
    |
    +-- Specialization / Generalization
    |       |
    |       +-- Superclass / Subclass
    |       +-- IS-A relationships
    |
    +-- Aggregation
    |
    +-- Categories (Union Types)
    |
    +-- Attribute and Relationship Inheritance`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Specialization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Specialization (Top-Down Approach):
Defining subclasses from a superclass based on distinguishing features.

                +----------+
                |  PERSON  |  <-- Superclass
                +----------+
                /    |     \\
              IS-A  IS-A  IS-A
              /      |       \\
    +----------+ +----------+ +----------+
    | STUDENT  | | EMPLOYEE | | CUSTOMER |
    +----------+ +----------+ +----------+
    (GPA, Major) (Salary)     (CreditLimit)

Process:
1. Start with general entity (PERSON)
2. Identify distinctive characteristics
3. Create specialized subclasses
4. Add specific attributes to subclasses`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Generalization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Generalization (Bottom-Up Approach):
Creating a superclass from common features of subclasses.

    +-------+    +-------+    +-------+
    |  CAR  |    | TRUCK |    |  BUS  |
    +-------+    +-------+    +-------+
         \\          |          /
          \\        IS-A       /
           \\        |        /
            +-------+-------+
                    |
               +---------+
               | VEHICLE |  <-- Generalized superclass
               +---------+
               (VIN, Make, Model, Year)

Process:
1. Identify similar entity types
2. Find common attributes
3. Create generalized superclass
4. Move common attributes to superclass`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Constraints on Specialization</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Constraint</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Disjoint (d)</td>
            <td className="p-3 border">Disjointness</td>
            <td className="p-3 border">Entity can be member of only ONE subclass</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Overlapping (o)</td>
            <td className="p-3 border">Disjointness</td>
            <td className="p-3 border">Entity can be member of MULTIPLE subclasses</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Total</td>
            <td className="p-3 border">Completeness</td>
            <td className="p-3 border">Every entity MUST belong to a subclass</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Partial</td>
            <td className="p-3 border">Completeness</td>
            <td className="p-3 border">Entity MAY NOT belong to any subclass</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Constraint Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Disjoint, Total:
    +----------+
    |  PERSON  |
    +-----d----+  (d = disjoint)
       /    \\
      /      \\     (double line = total)
+--------+ +--------+
|  MALE  | | FEMALE |
+--------+ +--------+
Every person must be either male or female (not both)

Overlapping, Partial:
    +----------+
    | EMPLOYEE |
    +-----o----+  (o = overlapping)
       /    \\
      /      \\     (single line = partial)
+--------+ +---------+
| SALARIED| | HOURLY  |
+--------+ +---------+
Employee can be both or neither`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Attribute Inheritance</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Inheritance in EER:

    +-----------+
    |   PERSON  |
    +-----------+
    | SSN (PK)  |  <-- Inherited by all subclasses
    | Name      |
    | DOB       |
    +-----------+
          |
         IS-A
        /    \\
+-----------+ +-----------+
|  STUDENT  | | EMPLOYEE  |
+-----------+ +-----------+
| GPA       | | Salary    |
| Major     | | HireDate  |
+-----------+ +-----------+

STUDENT inherits: SSN, Name, DOB from PERSON
EMPLOYEE inherits: SSN, Name, DOB from PERSON`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Specialization is top-down (superclass to subclasses)</li>
        <li>Generalization is bottom-up (subclasses to superclass)</li>
        <li>Disjoint: entity belongs to only one subclass</li>
        <li>Overlapping: entity can belong to multiple subclasses</li>
        <li>Subclasses inherit all attributes from superclass</li>
      </ul>
    </div>
  </div>
);

export default ExtendedER;
