import React from "react";

const SQLDataTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SQL Data Types
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      SQL data types define the type of data that can be stored in a column. Choosing the
      right data type is crucial for data integrity, storage efficiency, and query
      performance. Different database systems may have variations in available data types.
    </p>

    <h2 className="text-3xl font-bold mt-8">Numeric Data Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Range/Size</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">INT/INTEGER</td>
            <td className="p-3 border">Standard integer</td>
            <td className="p-3 border">-2B to 2B (4 bytes)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">SMALLINT</td>
            <td className="p-3 border">Small integer</td>
            <td className="p-3 border">-32,768 to 32,767 (2 bytes)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">BIGINT</td>
            <td className="p-3 border">Large integer</td>
            <td className="p-3 border">-9Q to 9Q (8 bytes)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">DECIMAL(p,s)</td>
            <td className="p-3 border">Exact numeric</td>
            <td className="p-3 border">p digits, s after decimal</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">FLOAT/REAL</td>
            <td className="p-3 border">Floating point</td>
            <td className="p-3 border">Approximate numeric</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">String Data Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Usage</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">CHAR(n)</td>
            <td className="p-3 border">Fixed-length string</td>
            <td className="p-3 border">Codes, IDs with fixed length</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">VARCHAR(n)</td>
            <td className="p-3 border">Variable-length string</td>
            <td className="p-3 border">Names, descriptions</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">TEXT</td>
            <td className="p-3 border">Large text</td>
            <td className="p-3 border">Articles, comments</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">NCHAR/NVARCHAR</td>
            <td className="p-3 border">Unicode strings</td>
            <td className="p-3 border">International characters</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Date and Time Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Format</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">DATE</td>
            <td className="p-3 border">YYYY-MM-DD</td>
            <td className="p-3 border">2026-01-16</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">TIME</td>
            <td className="p-3 border">HH:MI:SS</td>
            <td className="p-3 border">14:30:00</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">DATETIME/TIMESTAMP</td>
            <td className="p-3 border">YYYY-MM-DD HH:MI:SS</td>
            <td className="p-3 border">2026-01-16 14:30:00</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">YEAR</td>
            <td className="p-3 border">YYYY</td>
            <td className="p-3 border">2026</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Other Data Types</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Boolean
BOOLEAN / BOOL    -- TRUE, FALSE, NULL

-- Binary
BINARY(n)         -- Fixed-length binary
VARBINARY(n)      -- Variable-length binary
BLOB              -- Binary Large Object

-- Special
JSON              -- JSON data
XML               -- XML data
UUID              -- Universally unique identifier
ENUM              -- Enumeration of allowed values`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Type Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CREATE TABLE Employee (
    -- Numeric types
    Emp_ID INT PRIMARY KEY,
    Age SMALLINT,
    Salary DECIMAL(10, 2),        -- Max 99999999.99
    Rating FLOAT,

    -- String types
    SSN CHAR(11),                 -- Fixed: 123-45-6789
    Name VARCHAR(100),            -- Variable length
    Bio TEXT,                     -- Large text

    -- Date/Time types
    Birth_Date DATE,
    Hire_Time TIMESTAMP,

    -- Boolean
    Is_Active BOOLEAN DEFAULT TRUE,

    -- Enum
    Status ENUM('Active', 'Inactive', 'OnLeave')
);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Choosing the Right Data Type</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>INT vs BIGINT:</strong> Use INT unless you need very large numbers</li>
        <li><strong>CHAR vs VARCHAR:</strong> Use CHAR for fixed-length (SSN, codes)</li>
        <li><strong>DECIMAL vs FLOAT:</strong> Use DECIMAL for money (exact precision)</li>
        <li><strong>DATE vs DATETIME:</strong> Use DATE if time is not needed</li>
        <li><strong>TEXT vs VARCHAR:</strong> Use VARCHAR with limit when possible</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Choose the smallest data type that fits your needs</li>
        <li>Use DECIMAL for financial data (avoid floating point errors)</li>
        <li>VARCHAR is generally preferred over CHAR for variable text</li>
        <li>Data types vary between database systems</li>
        <li>Consider NULL handling when choosing data types</li>
        <li>Data type affects indexing and query performance</li>
      </ul>
    </div>
  </div>
);

export default SQLDataTypes;
