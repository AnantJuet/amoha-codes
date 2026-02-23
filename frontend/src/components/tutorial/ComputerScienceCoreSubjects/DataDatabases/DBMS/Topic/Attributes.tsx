import React from "react";

const Attributes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Attributes in ER Model</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Attributes are properties or characteristics that describe an entity. They define what
      information is stored about each entity in the database.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Attributes</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Attribute Classification:

Types of Attributes
        |
        +-- Simple vs Composite
        |
        +-- Single-valued vs Multi-valued
        |
        +-- Stored vs Derived
        |
        +-- Key Attributes
        |
        +-- NULL Attributes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Simple vs Composite Attributes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Simple Attribute:
Cannot be divided further

    (Age)  (Salary)  (Gender)
       \\      |       /
        +-----+-----+
        |  EMPLOYEE |
        +-----------+

Composite Attribute:
Can be divided into sub-parts

            (Name)
           /      \\
    (FirstName)  (LastName)
          \\      /
        +----------+
        | EMPLOYEE |
        +----------+

            (Address)
         /     |      \\
   (Street) (City) (ZipCode)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Single-valued vs Multi-valued Attributes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Single-valued Attribute:
Holds exactly one value per entity

    (EmpID)  -- Each employee has exactly ONE ID
    (DOB)    -- Each person has exactly ONE date of birth

Multi-valued Attribute:
Can hold multiple values (shown with double oval)

    ((Phone_Numbers))  -- Employee can have multiple phone numbers
    ((Email_IDs))      -- Person can have multiple emails
    ((Skills))         -- Employee can have multiple skills

        +------------+
        |  EMPLOYEE  |
        +------------+
             |
      ((Phone_Numbers))`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Stored vs Derived Attributes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Stored Attribute:
Actual data stored in database

    (DOB) -- Date of Birth is stored

Derived Attribute:
Computed from stored attributes (shown with dashed oval)

    - - - - -
   (   Age   )  -- Calculated from DOB
    - - - - -

Example:
    EMPLOYEE
    +--------+
    | (DOB)  |  -- Stored: 1990-05-15
    | (Age)  |  -- Derived: CurrentYear - BirthYear = 35
    +--------+

Other Derived Examples:
- TotalPrice = Quantity × UnitPrice
- Experience = CurrentYear - JoiningYear`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Key Attributes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Key Attribute:
Uniquely identifies each entity (shown underlined)

        +------------+
        |  STUDENT   |
        +------------+
             |
      (Student_ID)  <-- Underlined in ER diagram
             |
         +---+---+
         |       |
      (Name)  (Age)

Characteristics:
- Must be unique for each entity
- Cannot be NULL
- Forms the primary key of the table
- Can be single or composite (multiple attributes)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">5. Complex Attributes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Complex Attribute:
Combination of composite and multi-valued

Example: Phone can be multi-valued and composite

            ((Phone))
           /        \\
   (CountryCode)  (Number)

Each employee can have multiple phones,
and each phone has country code and number.

Notation in schema:
Phone: {(CountryCode, Number)}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Attribute Notation Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Attribute Type</th>
            <th className="p-3 border">ER Notation</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Simple</td>
            <td className="p-3 border">Single Oval</td>
            <td className="p-3 border">Age, Salary</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Composite</td>
            <td className="p-3 border">Oval with Sub-ovals</td>
            <td className="p-3 border">Name(First, Last)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Multi-valued</td>
            <td className="p-3 border">Double Oval</td>
            <td className="p-3 border">Phone Numbers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Derived</td>
            <td className="p-3 border">Dashed Oval</td>
            <td className="p-3 border">Age (from DOB)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Key</td>
            <td className="p-3 border">Underlined Oval</td>
            <td className="p-3 border">StudentID</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Simple attributes cannot be divided further</li>
        <li>Composite attributes have sub-components</li>
        <li>Multi-valued attributes can have multiple values (double oval)</li>
        <li>Derived attributes are calculated, not stored (dashed oval)</li>
        <li>Key attributes uniquely identify entities (underlined)</li>
      </ul>
    </div>
  </div>
);

export default Attributes;
