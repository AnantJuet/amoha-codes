import React from "react";

const AttributesDomains: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Attributes and Domains
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Attributes and domains are fundamental concepts in the relational model. An attribute
      is a named column in a relation, while a domain defines the set of permissible values
      for that attribute.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is an Attribute?</h2>
    <p className="leading-relaxed mt-2">
      An attribute is a characteristic or property of an entity represented as a column
      in a relation. Each attribute has a name and a domain (data type).
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`EMPLOYEE Relation:
+----------+---------+------------+-----------+
| Emp_ID   | Name    | Birth_Date | Salary    |
+----------+---------+------------+-----------+
   |          |          |            |
   |          |          |            +-> Attribute: Salary
   |          |          +-> Attribute: Birth_Date
   |          +-> Attribute: Name
   +-> Attribute: Emp_ID

Each column header is an attribute name`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">What is a Domain?</h2>
    <p className="leading-relaxed mt-2">
      A domain is a set of atomic (indivisible) values that defines all possible values
      an attribute can take. It specifies the data type and constraints for attribute values.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Domain Name</th>
            <th className="p-3 border">Data Type</th>
            <th className="p-3 border">Valid Values</th>
            <th className="p-3 border">Example Attribute</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Employee_IDs</td>
            <td className="p-3 border">VARCHAR(10)</td>
            <td className="p-3 border">E001, E002, ...</td>
            <td className="p-3 border">Emp_ID</td>
          </tr>
          <tr>
            <td className="p-3 border">Names</td>
            <td className="p-3 border">VARCHAR(50)</td>
            <td className="p-3 border">Any string up to 50 chars</td>
            <td className="p-3 border">First_Name, Last_Name</td>
          </tr>
          <tr>
            <td className="p-3 border">Ages</td>
            <td className="p-3 border">INTEGER</td>
            <td className="p-3 border">0 to 150</td>
            <td className="p-3 border">Employee_Age</td>
          </tr>
          <tr>
            <td className="p-3 border">Salaries</td>
            <td className="p-3 border">DECIMAL(10,2)</td>
            <td className="p-3 border">0.00 to 9999999.99</td>
            <td className="p-3 border">Monthly_Salary</td>
          </tr>
          <tr>
            <td className="p-3 border">Genders</td>
            <td className="p-3 border">CHAR(1)</td>
            <td className="p-3 border">{`{'M', 'F', 'O'}`}</td>
            <td className="p-3 border">Gender</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Domain Constraints</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        Domain constraints ensure that attribute values are valid and consistent:
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
        <li><strong>Data Type:</strong> INTEGER, VARCHAR, DATE, BOOLEAN, etc.</li>
        <li><strong>Size/Length:</strong> VARCHAR(50), DECIMAL(10,2)</li>
        <li><strong>Range:</strong> CHECK (age BETWEEN 0 AND 150)</li>
        <li><strong>Format:</strong> Email pattern, phone number format</li>
        <li><strong>Enumeration:</strong> Gender IN ('M', 'F', 'O')</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">SQL Domain Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Creating a domain in SQL
CREATE DOMAIN Salary_Domain AS DECIMAL(10,2)
  CHECK (VALUE >= 0);

CREATE DOMAIN Gender_Domain AS CHAR(1)
  CHECK (VALUE IN ('M', 'F', 'O'));

-- Using domains in table creation
CREATE TABLE Employee (
  Emp_ID VARCHAR(10) PRIMARY KEY,
  Name VARCHAR(50) NOT NULL,
  Salary Salary_Domain,
  Gender Gender_Domain
);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Atomicity of Attributes</h2>
    <p className="leading-relaxed mt-2">
      In the relational model, all attribute values must be atomic (indivisible). This is
      a requirement of the First Normal Form (1NF).
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Non-Atomic (Violates 1NF):
+--------+-----------------------+
| Emp_ID | Phone_Numbers         |
+--------+-----------------------+
| E001   | 123-456, 789-012      |  <- Multiple values
+--------+-----------------------+

Atomic (Satisfies 1NF):
+--------+--------------+
| Emp_ID | Phone_Number |
+--------+--------------+
| E001   | 123-456      |
| E001   | 789-012      |
+--------+--------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Each attribute must have a unique name within a relation</li>
        <li>A domain defines the legal values for an attribute</li>
        <li>Two attributes can share the same domain (e.g., Start_Date and End_Date)</li>
        <li>Domain constraints help maintain data integrity</li>
        <li>Attribute values must be atomic (single, indivisible values)</li>
        <li>NULL is a special value indicating missing or unknown data</li>
      </ul>
    </div>
  </div>
);

export default AttributesDomains;
