import React from "react";

const SQLFunctions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">SQL Functions</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      SQL functions are built-in or user-defined routines that accept parameters,
      perform actions, and return results. They help simplify complex operations
      and promote code reuse in database queries.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Functions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SQL Function Types:

1. Scalar Functions
   - Return single value
   - Can be used in SELECT, WHERE, etc.

2. Aggregate Functions
   - Operate on multiple rows
   - Return single summary value

3. Table-Valued Functions
   - Return a table (result set)
   - Used in FROM clause

4. Window Functions
   - Operate over a window of rows
   - OVER() clause`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">String Functions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common String Functions:

-- Length
SELECT LENGTH('Hello');              -- 5
SELECT CHAR_LENGTH('Hello');         -- 5

-- Case conversion
SELECT UPPER('hello');               -- HELLO
SELECT LOWER('HELLO');               -- hello

-- Substring
SELECT SUBSTRING('Hello World', 1, 5); -- Hello
SELECT LEFT('Hello', 3);             -- Hel
SELECT RIGHT('Hello', 2);            -- lo

-- Concatenation
SELECT CONCAT('Hello', ' ', 'World'); -- Hello World
SELECT 'Hello' || ' World';          -- Hello World

-- Trim
SELECT TRIM('  Hello  ');            -- Hello
SELECT LTRIM('  Hello');             -- Hello
SELECT RTRIM('Hello  ');             -- Hello

-- Replace
SELECT REPLACE('Hello', 'l', 'x');   -- Hexxo

-- Position
SELECT POSITION('o' IN 'Hello');     -- 5
SELECT INSTR('Hello', 'l');          -- 3`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Numeric Functions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Numeric Functions:

-- Rounding
SELECT ROUND(3.14159, 2);   -- 3.14
SELECT CEIL(3.2);           -- 4
SELECT FLOOR(3.8);          -- 3
SELECT TRUNCATE(3.14159, 2); -- 3.14

-- Absolute value
SELECT ABS(-5);             -- 5

-- Power and Root
SELECT POWER(2, 3);         -- 8
SELECT SQRT(16);            -- 4

-- Modulo
SELECT MOD(10, 3);          -- 1
SELECT 10 % 3;              -- 1

-- Sign
SELECT SIGN(-5);            -- -1
SELECT SIGN(5);             -- 1

-- Random
SELECT RAND();              -- 0.0 to 1.0
SELECT FLOOR(RAND() * 100); -- 0 to 99`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Date/Time Functions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Date/Time Functions:

-- Current date/time
SELECT NOW();              -- 2026-01-13 10:30:00
SELECT CURRENT_DATE;       -- 2026-01-13
SELECT CURRENT_TIME;       -- 10:30:00
SELECT CURRENT_TIMESTAMP;  -- Full timestamp

-- Extract parts
SELECT YEAR('2026-01-13');    -- 2026
SELECT MONTH('2026-01-13');   -- 1
SELECT DAY('2026-01-13');     -- 13
SELECT HOUR('10:30:00');      -- 10
SELECT DAYNAME('2026-01-13'); -- Tuesday
SELECT MONTHNAME('2026-01-13'); -- January

-- Date arithmetic
SELECT DATE_ADD('2026-01-13', INTERVAL 7 DAY);
SELECT DATE_SUB('2026-01-13', INTERVAL 1 MONTH);
SELECT DATEDIFF('2026-01-20', '2026-01-13'); -- 7

-- Formatting
SELECT DATE_FORMAT('2026-01-13', '%M %d, %Y');
-- January 13, 2026`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Aggregate Functions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Aggregate Functions:

-- Count
SELECT COUNT(*) FROM employee;        -- All rows
SELECT COUNT(salary) FROM employee;   -- Non-NULL
SELECT COUNT(DISTINCT dept) FROM employee;

-- Sum and Average
SELECT SUM(salary) FROM employee;
SELECT AVG(salary) FROM employee;

-- Min and Max
SELECT MIN(salary) FROM employee;
SELECT MAX(salary) FROM employee;

-- With GROUP BY
SELECT dept, AVG(salary)
FROM employee
GROUP BY dept;

-- Filtering aggregates with HAVING
SELECT dept, AVG(salary) as avg_sal
FROM employee
GROUP BY dept
HAVING AVG(salary) > 50000;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conditional Functions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Conditional Functions:

-- CASE expression
SELECT name,
    CASE
        WHEN salary > 80000 THEN 'High'
        WHEN salary > 50000 THEN 'Medium'
        ELSE 'Low'
    END as salary_level
FROM employee;

-- Simple CASE
SELECT name,
    CASE dept
        WHEN 'IT' THEN 'Technology'
        WHEN 'HR' THEN 'Human Resources'
        ELSE 'Other'
    END as department
FROM employee;

-- COALESCE (first non-NULL)
SELECT COALESCE(phone, email, 'N/A') as contact
FROM employee;

-- NULLIF
SELECT NULLIF(bonus, 0);  -- Returns NULL if bonus = 0

-- IFNULL / NVL
SELECT IFNULL(phone, 'Not provided');  -- MySQL
SELECT NVL(phone, 'Not provided');     -- Oracle`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">User-Defined Functions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Create Scalar Function (MySQL)
DELIMITER //
CREATE FUNCTION calculate_bonus(salary DECIMAL(10,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE bonus DECIMAL(10,2);
    IF salary > 80000 THEN
        SET bonus = salary * 0.15;
    ELSEIF salary > 50000 THEN
        SET bonus = salary * 0.10;
    ELSE
        SET bonus = salary * 0.05;
    END IF;
    RETURN bonus;
END //
DELIMITER ;

-- Use function
SELECT name, salary, calculate_bonus(salary) as bonus
FROM employee;

-- Drop function
DROP FUNCTION IF EXISTS calculate_bonus;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Functions vs Procedures</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Procedure</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Return</td>
            <td className="p-3 border">Must return value</td>
            <td className="p-3 border">Optional (OUT params)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Call</td>
            <td className="p-3 border">In SQL expressions</td>
            <td className="p-3 border">CALL statement</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DML</td>
            <td className="p-3 border">Usually no (varies)</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Use Case</td>
            <td className="p-3 border">Calculations, transforms</td>
            <td className="p-3 border">Business logic, DML</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Scalar functions return single values</li>
        <li>Aggregate functions summarize multiple rows</li>
        <li>Use COALESCE for NULL handling</li>
        <li>CASE provides conditional logic</li>
        <li>UDFs extend SQL capabilities</li>
      </ul>
    </div>
  </div>
);

export default SQLFunctions;
