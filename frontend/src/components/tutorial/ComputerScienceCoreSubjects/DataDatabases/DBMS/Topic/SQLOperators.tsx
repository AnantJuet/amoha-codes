import React from "react";

const SQLOperators: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SQL Operators
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      SQL operators are used to perform operations on data, specify conditions in queries,
      and combine multiple conditions. Understanding operators is essential for writing
      effective SQL queries.
    </p>

    <h2 className="text-3xl font-bold mt-8">Comparison Operators</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operator</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">=</td>
            <td className="p-3 border">Equal to</td>
            <td className="p-3 border">WHERE age = 25</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">{`<>`} or !=</td>
            <td className="p-3 border">Not equal to</td>
            <td className="p-3 border">{`WHERE status <> 'Inactive'`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">&gt;</td>
            <td className="p-3 border">Greater than</td>
            <td className="p-3 border">{`WHERE salary > 50000`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">&lt;</td>
            <td className="p-3 border">Less than</td>
            <td className="p-3 border">{`WHERE age < 30`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">&gt;=</td>
            <td className="p-3 border">Greater than or equal</td>
            <td className="p-3 border">{`WHERE score >= 90`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">&lt;=</td>
            <td className="p-3 border">Less than or equal</td>
            <td className="p-3 border">{`WHERE price <= 100`}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Logical Operators</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- AND: Both conditions must be true
SELECT * FROM Employee
WHERE Dept = 'IT' AND Salary > 50000;

-- OR: Either condition can be true
SELECT * FROM Employee
WHERE Dept = 'IT' OR Dept = 'Sales';

-- NOT: Negates a condition
SELECT * FROM Employee
WHERE NOT Status = 'Inactive';

-- Combining operators (use parentheses for clarity)
SELECT * FROM Employee
WHERE (Dept = 'IT' OR Dept = 'Sales') AND Salary > 40000;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Special Operators</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- BETWEEN: Range of values (inclusive)
SELECT * FROM Employee
WHERE Salary BETWEEN 40000 AND 60000;

-- IN: Match any value in a list
SELECT * FROM Employee
WHERE Dept IN ('IT', 'Sales', 'HR');

-- LIKE: Pattern matching
SELECT * FROM Employee
WHERE Name LIKE 'A%';        -- Starts with A
WHERE Name LIKE '%son';      -- Ends with 'son'
WHERE Name LIKE '%an%';      -- Contains 'an'
WHERE Name LIKE '_ohn';      -- Second char onwards is 'ohn'

-- IS NULL / IS NOT NULL
SELECT * FROM Employee
WHERE Manager_ID IS NULL;

-- EXISTS: Check if subquery returns results
SELECT * FROM Department D
WHERE EXISTS (SELECT 1 FROM Employee E WHERE E.Dept_ID = D.ID);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Arithmetic Operators</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Basic arithmetic
SELECT
    Name,
    Salary,
    Salary + Bonus AS Total_Compensation,
    Salary * 12 AS Annual_Salary,
    Salary / 160 AS Hourly_Rate,
    Salary % 1000 AS Remainder
FROM Employee;

-- In conditions
SELECT * FROM Product
WHERE (Price * Quantity) > 1000;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">String Operators</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Concatenation (varies by DBMS)
SELECT First_Name || ' ' || Last_Name AS Full_Name  -- Standard SQL
FROM Employee;

SELECT CONCAT(First_Name, ' ', Last_Name) AS Full_Name  -- MySQL
FROM Employee;

-- LIKE patterns
% = Any sequence of characters
_ = Any single character

Examples:
'A%'     -- Starts with A
'%A'     -- Ends with A
'%A%'    -- Contains A
'A_B'    -- A, any char, B (e.g., 'AAB', 'AXB')
'___'    -- Exactly 3 characters`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Set Operators</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- UNION: Combine results (removes duplicates)
SELECT Name FROM Employee WHERE Dept = 'IT'
UNION
SELECT Name FROM Employee WHERE Salary > 60000;

-- UNION ALL: Combine results (keeps duplicates)
SELECT Name FROM Table1
UNION ALL
SELECT Name FROM Table2;

-- INTERSECT: Common rows
SELECT Name FROM IT_Employees
INTERSECT
SELECT Name FROM Senior_Employees;

-- EXCEPT/MINUS: Difference
SELECT Name FROM All_Employees
EXCEPT
SELECT Name FROM Managers;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Operator Precedence</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ol className="list-decimal list-inside leading-relaxed space-y-2">
        <li>Parentheses ()</li>
        <li>Arithmetic: *, /, %</li>
        <li>Arithmetic: +, -</li>
        <li>Comparison: =, &gt;, &lt;, &gt;=, &lt;=, &lt;&gt;</li>
        <li>NOT</li>
        <li>AND</li>
        <li>OR</li>
      </ol>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Use parentheses to clarify operator precedence</li>
        <li>NULL requires IS NULL / IS NOT NULL (not = NULL)</li>
        <li>BETWEEN is inclusive on both ends</li>
        <li>LIKE is case-sensitive in some databases</li>
        <li>Use IN instead of multiple OR conditions</li>
        <li>String concatenation syntax varies by database</li>
      </ul>
    </div>
  </div>
);

export default SQLOperators;
