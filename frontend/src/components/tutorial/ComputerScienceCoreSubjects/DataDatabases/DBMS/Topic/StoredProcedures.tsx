import React from "react";

const StoredProcedures: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Stored Procedures</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A stored procedure is a prepared SQL code that you save and reuse. It is
      a group of SQL statements stored in the database that can be executed as a
      single unit, accepting parameters and returning results.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Use Stored Procedures?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Advantages:

1. Reusability
   - Write once, use many times
   - Consistent logic across applications

2. Performance
   - Precompiled and cached
   - Reduced network traffic

3. Security
   - Control access through procedures
   - Hide underlying tables

4. Maintainability
   - Centralized business logic
   - Easy to update

5. Reduced Errors
   - Tested and validated code
   - Less application-side SQL`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Creating Stored Procedures</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Basic syntax
DELIMITER //
CREATE PROCEDURE procedure_name()
BEGIN
    -- SQL statements
END //
DELIMITER ;

-- Simple procedure
DELIMITER //
CREATE PROCEDURE GetAllEmployees()
BEGIN
    SELECT * FROM employee;
END //
DELIMITER ;

-- Call procedure
CALL GetAllEmployees();

-- Procedure with calculations
DELIMITER //
CREATE PROCEDURE GetEmployeeStats()
BEGIN
    SELECT
        COUNT(*) as total,
        AVG(salary) as avg_salary,
        MAX(salary) as max_salary
    FROM employee;
END //
DELIMITER ;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parameters in Procedures</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Parameter Types:
- IN:    Input parameter (default)
- OUT:   Output parameter
- INOUT: Both input and output

-- IN parameter
DELIMITER //
CREATE PROCEDURE GetEmployeeByDept(IN dept_name VARCHAR(50))
BEGIN
    SELECT * FROM employee WHERE dept = dept_name;
END //
DELIMITER ;

CALL GetEmployeeByDept('IT');

-- OUT parameter
DELIMITER //
CREATE PROCEDURE GetEmployeeCount(OUT total INT)
BEGIN
    SELECT COUNT(*) INTO total FROM employee;
END //
DELIMITER ;

CALL GetEmployeeCount(@count);
SELECT @count;

-- INOUT parameter
DELIMITER //
CREATE PROCEDURE DoubleValue(INOUT num INT)
BEGIN
    SET num = num * 2;
END //
DELIMITER ;

SET @value = 5;
CALL DoubleValue(@value);
SELECT @value;  -- Returns 10`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Variables and Control Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Variables
DELIMITER //
CREATE PROCEDURE CalculateBonus(IN emp_id INT)
BEGIN
    DECLARE emp_salary DECIMAL(10,2);
    DECLARE bonus DECIMAL(10,2);

    SELECT salary INTO emp_salary
    FROM employee WHERE id = emp_id;

    SET bonus = emp_salary * 0.10;

    SELECT emp_salary, bonus;
END //
DELIMITER ;

-- IF-ELSE
DELIMITER //
CREATE PROCEDURE GetGrade(IN score INT, OUT grade CHAR(1))
BEGIN
    IF score >= 90 THEN
        SET grade = 'A';
    ELSEIF score >= 80 THEN
        SET grade = 'B';
    ELSEIF score >= 70 THEN
        SET grade = 'C';
    ELSE
        SET grade = 'F';
    END IF;
END //
DELIMITER ;

-- CASE
DELIMITER //
CREATE PROCEDURE GetDeptBonus(IN dept VARCHAR(50), OUT bonus_pct DECIMAL(5,2))
BEGIN
    CASE dept
        WHEN 'IT' THEN SET bonus_pct = 15.00;
        WHEN 'Sales' THEN SET bonus_pct = 20.00;
        WHEN 'HR' THEN SET bonus_pct = 10.00;
        ELSE SET bonus_pct = 5.00;
    END CASE;
END //
DELIMITER ;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Loops in Procedures</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- WHILE loop
DELIMITER //
CREATE PROCEDURE PrintNumbers(IN n INT)
BEGIN
    DECLARE i INT DEFAULT 1;
    WHILE i <= n DO
        SELECT i;
        SET i = i + 1;
    END WHILE;
END //
DELIMITER ;

-- LOOP with LEAVE
DELIMITER //
CREATE PROCEDURE LoopExample()
BEGIN
    DECLARE counter INT DEFAULT 0;
    my_loop: LOOP
        SET counter = counter + 1;
        IF counter >= 10 THEN
            LEAVE my_loop;
        END IF;
    END LOOP;
    SELECT counter;
END //
DELIMITER ;

-- REPEAT loop
DELIMITER //
CREATE PROCEDURE RepeatExample(IN n INT)
BEGIN
    DECLARE i INT DEFAULT 0;
    REPEAT
        SET i = i + 1;
        SELECT i;
    UNTIL i >= n
    END REPEAT;
END //
DELIMITER ;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Error Handling</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Error handling with HANDLER
DELIMITER //
CREATE PROCEDURE SafeInsert(
    IN emp_name VARCHAR(50),
    IN emp_dept VARCHAR(50)
)
BEGIN
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SELECT 'Error occurred, transaction rolled back';
    END;

    START TRANSACTION;
    INSERT INTO employee (name, dept) VALUES (emp_name, emp_dept);
    COMMIT;
    SELECT 'Insert successful';
END //
DELIMITER ;

-- Continue handler
DELIMITER //
CREATE PROCEDURE HandleDuplicate()
BEGIN
    DECLARE CONTINUE HANDLER FOR 1062
    BEGIN
        SELECT 'Duplicate key error - continuing';
    END;

    INSERT INTO users (id, name) VALUES (1, 'John');
    INSERT INTO users (id, name) VALUES (1, 'Jane'); -- Duplicate
    INSERT INTO users (id, name) VALUES (2, 'Bob');
END //
DELIMITER ;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Managing Procedures</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Show all procedures
SHOW PROCEDURE STATUS;

-- Show procedures in database
SHOW PROCEDURE STATUS WHERE Db = 'company';

-- View procedure code
SHOW CREATE PROCEDURE GetAllEmployees;

-- Drop procedure
DROP PROCEDURE IF EXISTS GetAllEmployees;

-- Alter procedure (drop and recreate)
DROP PROCEDURE IF EXISTS MyProcedure;
CREATE PROCEDURE MyProcedure() ...`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Stored procedures are precompiled SQL</li>
        <li>Parameters: IN, OUT, INOUT</li>
        <li>Use DELIMITER to change statement terminator</li>
        <li>Support variables, control flow, loops</li>
        <li>Can handle errors with HANDLERs</li>
      </ul>
    </div>
  </div>
);

export default StoredProcedures;
