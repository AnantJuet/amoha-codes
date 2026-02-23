import React from "react";

const EntitySets: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Entity and Entity Sets</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An entity is a real-world object or concept that can be distinctly identified. An entity set
      is a collection of entities of the same type that share the same properties or attributes.
    </p>

    <h2 className="text-3xl font-bold mt-8">Entity vs Entity Set</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Entity vs Entity Set:

Entity Set: STUDENT
+------------------------------------------+
|  Entity 1: {101, "John", 20, "CS"}       |
|  Entity 2: {102, "Alice", 21, "IT"}      |
|  Entity 3: {103, "Bob", 22, "CS"}        |
|  Entity 4: {104, "Carol", 20, "ECE"}     |
+------------------------------------------+

Entity = A single row/instance (e.g., John with ID 101)
Entity Set = The entire collection (all students)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Entities</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">ER Notation</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Strong Entity</td>
            <td className="p-3 border">Has its own primary key, exists independently</td>
            <td className="p-3 border">Single Rectangle</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Weak Entity</td>
            <td className="p-3 border">Depends on strong entity, has partial key</td>
            <td className="p-3 border">Double Rectangle</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Strong Entity</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Strong Entity Example:

+-------------+
|  EMPLOYEE   |  <-- Strong Entity (single border)
+-------------+
      |
     / \\
   (EmpID)  <-- Primary Key (underlined)
   (Name)
   (Salary)

Characteristics:
- Has a primary key that uniquely identifies each entity
- Can exist independently in the database
- Does not depend on any other entity for identification
- Represented by a single rectangle

Examples: Student, Employee, Product, Customer`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Weak Entity</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Weak Entity Example:

+-------------+          +=============+
|  EMPLOYEE   |----------|  DEPENDENT  |  <-- Weak Entity (double border)
+-------------+   HAS    +=============+
      |                        |
   (EmpID)              (Dep_Name)  <-- Partial Key (dashed underline)
                        (Relationship)

Characteristics:
- Does not have a complete primary key
- Uses partial key (discriminator) + owner's key
- Cannot exist without the owner entity
- Represented by a double rectangle
- Connected via identifying relationship (double diamond)

Examples: Dependent (of Employee), Room (of Building)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Strong vs Weak Entity Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Strong Entity</th>
            <th className="p-3 border">Weak Entity</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Primary Key</td>
            <td className="p-3 border">Has its own primary key</td>
            <td className="p-3 border">Uses partial key + owner's key</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Existence</td>
            <td className="p-3 border">Independent</td>
            <td className="p-3 border">Depends on owner entity</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Notation</td>
            <td className="p-3 border">Single rectangle</td>
            <td className="p-3 border">Double rectangle</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Relationship</td>
            <td className="p-3 border">Regular relationship</td>
            <td className="p-3 border">Identifying relationship</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Entity is a single instance; Entity Set is a collection</li>
        <li>Strong entities have their own primary key</li>
        <li>Weak entities depend on strong entities for identification</li>
        <li>Weak entities use partial key + owner's primary key</li>
        <li>Double borders indicate weak entities in ER diagrams</li>
      </ul>
    </div>
  </div>
);

export default EntitySets;
