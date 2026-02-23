import React from "react";

const Cursors: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Cursors in SQL</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A cursor is a database object used to retrieve and process rows one at a time
      from a result set. Cursors provide a mechanism to iterate through query results
      in procedural code, such as stored procedures and triggers.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Use Cursors?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Set-Based vs Row-Based Operations:

Set-Based (Preferred):
UPDATE employee SET salary = salary * 1.1;
-- Processes all rows at once

Row-Based (Cursor):
- Process one row at a time
- Complex logic per row
- Interact with external systems

Use Cursors When:
- Complex row-by-row processing needed
- Need to call procedure for each row
- Set-based solution not possible
- Building result dynamically`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cursor Lifecycle</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Cursor Lifecycle:

1. DECLARE - Define cursor with SELECT
2. OPEN    - Execute query, create result set
3. FETCH   - Retrieve one row at a time
4. CLOSE   - Release result set
5. DEALLOCATE - Remove cursor definition

   DECLARE → OPEN → FETCH → FETCH → ... → CLOSE → DEALLOCATE
                      ↓        ↓
                    Row 1    Row 2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Basic Cursor Syntax</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- MySQL Cursor Example

DELIMITER //
CREATE PROCEDURE process_employees()
BEGIN
    -- Variables to hold fetched data
    DECLARE v_id INT;
    DECLARE v_name VARCHAR(50);
    DECLARE v_salary DECIMAL(10,2);
    DECLARE done INT DEFAULT FALSE;

    -- Declare cursor
    DECLARE emp_cursor CURSOR FOR
        SELECT emp_id, name, salary FROM employee;

    -- Handler for end of result set
    DECLARE CONTINUE HANDLER FOR NOT FOUND
        SET done = TRUE;

    -- Open cursor
    OPEN emp_cursor;

    -- Fetch loop
    read_loop: LOOP
        FETCH emp_cursor INTO v_id, v_name, v_salary;

        IF done THEN
            LEAVE read_loop;
        END IF;

        -- Process each row
        IF v_salary < 30000 THEN
            UPDATE employee
            SET salary = salary * 1.1
            WHERE emp_id = v_id;
        END IF;
    END LOOP;

    -- Close cursor
    CLOSE emp_cursor;
END //
DELIMITER ;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cursor Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Movement</th>
            <th className="p-3 border">Updates</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Forward-Only</td>
            <td className="p-3 border">Next only</td>
            <td className="p-3 border">Read-only</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Static</td>
            <td className="p-3 border">Any direction</td>
            <td className="p-3 border">Snapshot (no updates seen)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dynamic</td>
            <td className="p-3 border">Any direction</td>
            <td className="p-3 border">Sees all changes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Keyset</td>
            <td className="p-3 border">Any direction</td>
            <td className="p-3 border">Sees updates, not inserts</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">SQL Server Cursor Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- SQL Server Cursor

DECLARE @emp_id INT, @name VARCHAR(50);

-- Declare with options
DECLARE emp_cursor CURSOR
    LOCAL           -- Scope
    FAST_FORWARD    -- Forward-only, read-only
FOR
    SELECT emp_id, name FROM employee;

OPEN emp_cursor;

FETCH NEXT FROM emp_cursor INTO @emp_id, @name;

WHILE @@FETCH_STATUS = 0
BEGIN
    PRINT 'Processing: ' + @name;
    -- Process row here

    FETCH NEXT FROM emp_cursor INTO @emp_id, @name;
END

CLOSE emp_cursor;
DEALLOCATE emp_cursor;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cursor with UPDATE</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Updatable Cursor (SQL Server)

DECLARE emp_cursor CURSOR FOR
    SELECT emp_id, salary FROM employee
    FOR UPDATE OF salary;

DECLARE @id INT, @salary DECIMAL(10,2);

OPEN emp_cursor;
FETCH NEXT FROM emp_cursor INTO @id, @salary;

WHILE @@FETCH_STATUS = 0
BEGIN
    IF @salary < 30000
    BEGIN
        UPDATE employee
        SET salary = @salary * 1.1
        WHERE CURRENT OF emp_cursor;
    END

    FETCH NEXT FROM emp_cursor INTO @id, @salary;
END

CLOSE emp_cursor;
DEALLOCATE emp_cursor;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cursor Performance</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Avoid when possible:</strong> Set-based operations are faster</li>
        <li><strong>Use FAST_FORWARD:</strong> Forward-only, read-only is fastest</li>
        <li><strong>Minimize scope:</strong> Use LOCAL cursors</li>
        <li><strong>Close promptly:</strong> Release resources quickly</li>
        <li><strong>Consider alternatives:</strong> WHILE loops, temp tables, CTEs</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Alternatives to Cursors</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Alternative 1: WHILE loop with temp table
CREATE TEMPORARY TABLE temp_emp AS
SELECT emp_id, salary FROM employee;

WHILE EXISTS (SELECT 1 FROM temp_emp)
BEGIN
    -- Process first row
    DELETE TOP(1) FROM temp_emp;
END

-- Alternative 2: Set-based with CASE
UPDATE employee
SET salary = CASE
    WHEN salary < 30000 THEN salary * 1.1
    WHEN salary < 50000 THEN salary * 1.05
    ELSE salary
END;

-- Alternative 3: Recursive CTE
-- For hierarchical processing`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Cursors process rows one at a time</li>
        <li>Lifecycle: DECLARE → OPEN → FETCH → CLOSE</li>
        <li>Prefer set-based operations when possible</li>
        <li>Use FAST_FORWARD for best performance</li>
        <li>Always close and deallocate cursors</li>
      </ul>
    </div>
  </div>
);

export default Cursors;
