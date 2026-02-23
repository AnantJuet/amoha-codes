import React from "react";

const DomainConstraints: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Domain Constraints
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Domain constraints are the most fundamental form of integrity constraint in the
      relational model. They specify that the value of each attribute must be an atomic
      value from its defined domain.
    </p>

    <h2 className="text-3xl font-bold mt-8">What are Domain Constraints?</h2>
    <p className="leading-relaxed mt-2">
      A domain constraint ensures that the value of each attribute A must be an atomic
      value from the domain dom(A). This means values must be of the correct data type
      and fall within the specified range or set of allowed values.
    </p>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold mb-2">Components of Domain Constraints:</p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Data Type:</strong> INTEGER, VARCHAR, DATE, DECIMAL, etc.</li>
        <li><strong>Length/Size:</strong> VARCHAR(50), DECIMAL(10,2)</li>
        <li><strong>Range:</strong> CHECK constraints for value bounds</li>
        <li><strong>Format:</strong> Pattern matching for specific formats</li>
        <li><strong>Enumeration:</strong> Specific set of allowed values</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Data Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Data Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example Domain</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">INTEGER</td>
            <td className="p-3 border">Whole numbers</td>
            <td className="p-3 border">-2147483648 to 2147483647</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">DECIMAL(p,s)</td>
            <td className="p-3 border">Fixed-point numbers</td>
            <td className="p-3 border">DECIMAL(10,2): -99999999.99 to 99999999.99</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">VARCHAR(n)</td>
            <td className="p-3 border">Variable-length string</td>
            <td className="p-3 border">String up to n characters</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">CHAR(n)</td>
            <td className="p-3 border">Fixed-length string</td>
            <td className="p-3 border">Exactly n characters (padded)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">DATE</td>
            <td className="p-3 border">Calendar date</td>
            <td className="p-3 border">YYYY-MM-DD format</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">BOOLEAN</td>
            <td className="p-3 border">True/False</td>
            <td className="p-3 border">TRUE, FALSE, NULL</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementing Domain Constraints in SQL</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Creating custom domains
CREATE DOMAIN Age_Domain AS INTEGER
    CHECK (VALUE >= 0 AND VALUE <= 150);

CREATE DOMAIN Email_Domain AS VARCHAR(100)
    CHECK (VALUE LIKE '%@%.%');

CREATE DOMAIN Gender_Domain AS CHAR(1)
    CHECK (VALUE IN ('M', 'F', 'O'));

-- Using domains in table definition
CREATE TABLE Employee (
    Emp_ID INT PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Age Age_Domain,
    Email Email_Domain,
    Gender Gender_Domain
);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CHECK Constraints</h2>
    <p className="leading-relaxed mt-2">
      CHECK constraints allow you to define custom conditions that values must satisfy.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CREATE TABLE Product (
    Product_ID INT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Price DECIMAL(10,2) CHECK (Price > 0),
    Quantity INT CHECK (Quantity >= 0),
    Category VARCHAR(20) CHECK (Category IN ('Electronics', 'Clothing', 'Food')),
    Discount DECIMAL(5,2) CHECK (Discount >= 0 AND Discount <= 100)
);

-- Table-level CHECK constraint
CREATE TABLE Order_Item (
    Order_ID INT,
    Product_ID INT,
    Quantity INT,
    Unit_Price DECIMAL(10,2),
    Discount_Percent DECIMAL(5,2),
    CHECK (Unit_Price * Quantity * (1 - Discount_Percent/100) > 0)
);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Domain Constraint Violations</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Examples of domain constraint violations

-- Type mismatch
INSERT INTO Employee (Emp_ID, Name, Age)
VALUES (1, 'John', 'Twenty');  -- Error: Age expects INTEGER

-- Range violation
INSERT INTO Employee (Emp_ID, Name, Age)
VALUES (2, 'Jane', 200);       -- Error: Age > 150

-- Format violation
INSERT INTO Employee (Emp_ID, Name, Email)
VALUES (3, 'Bob', 'invalid');  -- Error: Email format invalid

-- Enumeration violation
INSERT INTO Employee (Emp_ID, Name, Gender)
VALUES (4, 'Alice', 'X');      -- Error: Gender not in ('M','F','O')`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Atomicity Requirement</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        Domain constraints require that all values be atomic (indivisible). This is a
        fundamental requirement of the First Normal Form (1NF).
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
        <li><strong>Atomic:</strong> Single value like 'John' or 25</li>
        <li><strong>Non-atomic:</strong> Lists like 'John, Jane' or sets {`{1, 2, 3}`}</li>
        <li>Composite attributes must be broken into simple attributes</li>
        <li>Multi-valued attributes require separate relations</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Domain constraints are the most basic form of integrity constraint</li>
        <li>Every attribute value must come from its defined domain</li>
        <li>Use appropriate data types to enforce domain constraints</li>
        <li>CHECK constraints allow custom validation rules</li>
        <li>Custom domains can be reused across multiple tables</li>
        <li>Domain constraints ensure data quality and consistency</li>
      </ul>
    </div>
  </div>
);

export default DomainConstraints;
