import React from "react";

export interface SidebarItem {
  label: string;
  href: string;
  isHeader?: boolean;
  children?: SidebarItem[];
}

export interface TopicContent {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export const tutorialData: SidebarItem[] = [
  { label: "T-SQL HOME", href: "tsql_home.asp" },
  { label: "T-SQL Intro", href: "tsql_intro.asp" },
  { label: "T-SQL Syntax", href: "tsql_syntax.asp" },
  {
    label: "T-SQL Variables",
    href: "tsql_variables.asp",
    isHeader: true,
    children: [
      { label: "Variables", href: "tsql_variables.asp" },
      { label: "Data Types", href: "tsql_datatypes.asp" },
      { label: "DECLARE", href: "tsql_declare.asp" },
      { label: "SET vs SELECT", href: "tsql_set_select.asp" },
    ]
  },
  {
    label: "T-SQL Control Flow",
    href: "tsql_if_else.asp",
    isHeader: true,
    children: [
      { label: "IF...ELSE", href: "tsql_if_else.asp" },
      { label: "CASE Expression", href: "tsql_case.asp" },
      { label: "WHILE Loop", href: "tsql_while.asp" },
      { label: "BREAK/CONTINUE", href: "tsql_break_continue.asp" },
      { label: "GOTO", href: "tsql_goto.asp" },
    ]
  },
  {
    label: "T-SQL Error Handling",
    href: "tsql_try_catch.asp",
    isHeader: true,
    children: [
      { label: "TRY...CATCH", href: "tsql_try_catch.asp" },
      { label: "RAISERROR", href: "tsql_raiserror.asp" },
      { label: "THROW", href: "tsql_throw.asp" },
      { label: "Error Functions", href: "tsql_error_functions.asp" },
    ]
  },
  {
    label: "T-SQL Procedures",
    href: "tsql_stored_procedures.asp",
    isHeader: true,
    children: [
      { label: "Stored Procedures", href: "tsql_stored_procedures.asp" },
      { label: "Parameters", href: "tsql_parameters.asp" },
      { label: "Output Parameters", href: "tsql_output_params.asp" },
    ]
  },
  {
    label: "T-SQL Functions",
    href: "tsql_functions.asp",
    isHeader: true,
    children: [
      { label: "Scalar Functions", href: "tsql_functions.asp" },
      { label: "Table-Valued", href: "tsql_table_functions.asp" },
      { label: "Built-in Functions", href: "tsql_builtin.asp" },
    ]
  },
  {
    label: "T-SQL Triggers",
    href: "tsql_triggers.asp",
    isHeader: true,
    children: [
      { label: "DML Triggers", href: "tsql_triggers.asp" },
      { label: "DDL Triggers", href: "tsql_ddl_triggers.asp" },
      { label: "INSTEAD OF", href: "tsql_instead_of.asp" },
    ]
  },
  {
    label: "T-SQL Transactions",
    href: "tsql_transactions.asp",
    isHeader: true,
    children: [
      { label: "Transactions", href: "tsql_transactions.asp" },
      { label: "COMMIT/ROLLBACK", href: "tsql_commit_rollback.asp" },
      { label: "SAVEPOINT", href: "tsql_savepoint.asp" },
      { label: "Isolation Levels", href: "tsql_isolation.asp" },
    ]
  },
  {
    label: "T-SQL Window Functions",
    href: "tsql_window.asp",
    isHeader: true,
    children: [
      { label: "Window Functions", href: "tsql_window.asp" },
      { label: "ROW_NUMBER", href: "tsql_row_number.asp" },
      { label: "RANK/DENSE_RANK", href: "tsql_rank.asp" },
      { label: "LEAD/LAG", href: "tsql_lead_lag.asp" },
      { label: "OVER Clause", href: "tsql_over.asp" },
    ]
  },
  {
    label: "T-SQL CTEs",
    href: "tsql_cte.asp",
    isHeader: true,
    children: [
      { label: "Common Table Expressions", href: "tsql_cte.asp" },
      { label: "Recursive CTE", href: "tsql_recursive_cte.asp" },
    ]
  },
  { label: "T-SQL Temp Tables", href: "tsql_temp_tables.asp" },
  { label: "T-SQL Table Variables", href: "tsql_table_variables.asp" },
  { label: "T-SQL Cursors", href: "tsql_cursors.asp" },
  { label: "T-SQL Dynamic SQL", href: "tsql_dynamic.asp" },
];

export const tutorialContent: Record<string, TopicContent> = {
  "tsql_home.asp": {
    title: "T-SQL Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Welcome to T-SQL Tutorial</h2>
        <p className="leading-relaxed mb-4">
          <strong>T-SQL (Transact-SQL)</strong> is Microsoft's proprietary extension to SQL used in SQL Server and Azure SQL Database.
        </p>
        <p className="leading-relaxed mb-4">T-SQL adds procedural programming capabilities including variables, control flow, error handling, and more to standard SQL.</p>
        <h3 className="text-xl font-medium mb-3">Example: Hello World</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`PRINT 'Hello, World!';

-- Or using SELECT
SELECT 'Hello, World!' AS Message;`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">What You Will Learn</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Variables and data types</li>
          <li>Control flow statements</li>
          <li>Error handling with TRY...CATCH</li>
          <li>Stored procedures and functions</li>
          <li>Triggers and transactions</li>
          <li>Window functions and CTEs</li>
        </ul>
      </>
    ),
  },
  "tsql_intro.asp": {
    title: "T-SQL Introduction",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">What is T-SQL?</h2>
        <p className="leading-relaxed mb-4">Transact-SQL (T-SQL) is Microsoft's implementation of SQL with procedural programming extensions. It is the primary language for interacting with SQL Server databases.</p>
        <h3 className="text-xl font-medium mb-3">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Variables:</strong> Local and global variables for data storage</li>
          <li><strong>Control Flow:</strong> IF, WHILE, CASE, BEGIN...END</li>
          <li><strong>Error Handling:</strong> TRY...CATCH blocks</li>
          <li><strong>Stored Procedures:</strong> Reusable code modules</li>
          <li><strong>Functions:</strong> Scalar and table-valued functions</li>
          <li><strong>Triggers:</strong> Automated responses to data changes</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">T-SQL vs Standard SQL</h3>
        <p className="leading-relaxed mb-4">T-SQL extends ANSI SQL with proprietary features specific to Microsoft SQL Server, such as TOP, OUTPUT clause, and unique functions.</p>
      </>
    ),
  },
  "tsql_syntax.asp": {
    title: "T-SQL Basic Syntax",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">T-SQL Syntax Rules</h2>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Statements end with semicolons (optional but recommended)</li>
          <li>Use GO to separate batches</li>
          <li>Comments: -- for single line, /* */ for multi-line</li>
          <li>Identifiers with spaces need square brackets: [Column Name]</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Basic Structure</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Single line comment

/* Multi-line
   comment */

-- Batch separator
GO

-- Use database
USE DatabaseName;
GO

-- Basic query
SELECT Column1, Column2
FROM TableName
WHERE Condition;`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_variables.asp": {
    title: "T-SQL Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Variables in T-SQL</h2>
        <p className="leading-relaxed mb-4">Variables store temporary values during script execution. Local variables start with @ and global variables start with @@.</p>
        <h3 className="text-xl font-medium mb-3">Declaring Variables</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Declare and set separately
DECLARE @Name VARCHAR(50);
SET @Name = 'John';

-- Declare and initialize
DECLARE @Age INT = 25;

-- Multiple variables
DECLARE @FirstName VARCHAR(50) = 'John',
        @LastName VARCHAR(50) = 'Doe',
        @Salary DECIMAL(10,2);

-- Print variable
PRINT @Name;
SELECT @Name AS CustomerName;`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Global Variables</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT @@VERSION;        -- SQL Server version
SELECT @@SERVERNAME;     -- Server name
SELECT @@ROWCOUNT;       -- Rows affected by last statement
SELECT @@ERROR;          -- Last error number
SELECT @@IDENTITY;       -- Last inserted identity value`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_datatypes.asp": {
    title: "T-SQL Data Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">T-SQL Data Types</h2>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 mb-6">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-700 p-2">Category</th>
              <th className="border border-gray-300 dark:border-gray-700 p-2">Types</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">Numeric</td><td className="border border-gray-300 dark:border-gray-700 p-2">INT, BIGINT, SMALLINT, TINYINT, DECIMAL, FLOAT</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">String</td><td className="border border-gray-300 dark:border-gray-700 p-2">VARCHAR, NVARCHAR, CHAR, NCHAR, TEXT</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">Date/Time</td><td className="border border-gray-300 dark:border-gray-700 p-2">DATE, TIME, DATETIME, DATETIME2, DATETIMEOFFSET</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">Binary</td><td className="border border-gray-300 dark:border-gray-700 p-2">BINARY, VARBINARY, IMAGE</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">Other</td><td className="border border-gray-300 dark:border-gray-700 p-2">BIT, UNIQUEIDENTIFIER, XML, TABLE</td></tr>
          </tbody>
        </table>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE @ID INT = 100;
DECLARE @Name NVARCHAR(100) = N'Unicode text';
DECLARE @Price DECIMAL(10,2) = 99.99;
DECLARE @Created DATETIME2 = GETDATE();
DECLARE @IsActive BIT = 1;
DECLARE @UniqueID UNIQUEIDENTIFIER = NEWID();`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_declare.asp": {
    title: "T-SQL DECLARE Statement",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">DECLARE Statement</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Basic declaration
DECLARE @Counter INT;

-- With initialization (SQL Server 2008+)
DECLARE @Message VARCHAR(100) = 'Hello';

-- Multiple variables
DECLARE
    @FirstName VARCHAR(50),
    @LastName VARCHAR(50),
    @FullName VARCHAR(100);

-- Table variable
DECLARE @TempData TABLE (
    ID INT,
    Name VARCHAR(50),
    Amount DECIMAL(10,2)
);

INSERT INTO @TempData VALUES (1, 'Item1', 100.00);
SELECT * FROM @TempData;`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_set_select.asp": {
    title: "T-SQL SET vs SELECT",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">SET vs SELECT for Assignment</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE @Value INT, @Name VARCHAR(50);

-- SET: One variable at a time
SET @Value = 10;
SET @Name = 'John';

-- SELECT: Multiple variables at once
SELECT @Value = 20, @Name = 'Jane';

-- SELECT from table
SELECT @Name = FirstName FROM Customers WHERE CustomerID = 1;

-- Key difference: If query returns no rows
-- SET: Variable becomes NULL
-- SELECT: Variable keeps previous value`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Best Practice</h3>
        <p className="leading-relaxed mb-4">Use SET for assigning single values or when you need ANSI standard compliance. Use SELECT when assigning from queries or multiple variables.</p>
      </>
    ),
  },
  "tsql_if_else.asp": {
    title: "T-SQL IF...ELSE",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">IF...ELSE Statement</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE @Score INT = 85;

IF @Score >= 90
    PRINT 'Grade: A';
ELSE IF @Score >= 80
    PRINT 'Grade: B';
ELSE IF @Score >= 70
    PRINT 'Grade: C';
ELSE
    PRINT 'Grade: F';

-- Multiple statements require BEGIN...END
IF @Score >= 60
BEGIN
    PRINT 'Passed!';
    UPDATE Students SET Status = 'Passed' WHERE Score >= 60;
END
ELSE
BEGIN
    PRINT 'Failed!';
    UPDATE Students SET Status = 'Failed' WHERE Score < 60;
END`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_case.asp": {
    title: "T-SQL CASE Expression",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">CASE Expression</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Simple CASE
SELECT ProductName,
    CASE Category
        WHEN 'Electronics' THEN 'Tech'
        WHEN 'Clothing' THEN 'Fashion'
        WHEN 'Food' THEN 'Grocery'
        ELSE 'Other'
    END AS CategoryGroup
FROM Products;

-- Searched CASE
SELECT CustomerName, TotalPurchases,
    CASE
        WHEN TotalPurchases >= 10000 THEN 'Gold'
        WHEN TotalPurchases >= 5000 THEN 'Silver'
        WHEN TotalPurchases >= 1000 THEN 'Bronze'
        ELSE 'Regular'
    END AS CustomerTier
FROM Customers;`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_while.asp": {
    title: "T-SQL WHILE Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">WHILE Loop</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE @Counter INT = 1;

WHILE @Counter <= 5
BEGIN
    PRINT 'Counter: ' + CAST(@Counter AS VARCHAR);
    SET @Counter = @Counter + 1;
END

-- Loop through table rows
DECLARE @ID INT, @Name VARCHAR(50);
DECLARE @MaxID INT = (SELECT MAX(ID) FROM Products);
SET @ID = 1;

WHILE @ID <= @MaxID
BEGIN
    SELECT @Name = ProductName FROM Products WHERE ID = @ID;
    IF @Name IS NOT NULL
        PRINT @Name;
    SET @ID = @ID + 1;
END`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_break_continue.asp": {
    title: "T-SQL BREAK and CONTINUE",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">BREAK and CONTINUE</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE @i INT = 0;

-- BREAK: Exit loop entirely
WHILE @i < 10
BEGIN
    SET @i = @i + 1;
    IF @i = 5
        BREAK;  -- Exit when i equals 5
    PRINT @i;
END
-- Prints: 1, 2, 3, 4

-- CONTINUE: Skip to next iteration
SET @i = 0;
WHILE @i < 5
BEGIN
    SET @i = @i + 1;
    IF @i = 3
        CONTINUE;  -- Skip printing 3
    PRINT @i;
END
-- Prints: 1, 2, 4, 5`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_goto.asp": {
    title: "T-SQL GOTO Statement",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">GOTO Statement</h2>
        <p className="leading-relaxed mb-4 text-yellow-600 dark:text-yellow-400">Note: GOTO is generally discouraged as it can make code hard to follow. Use sparingly.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE @Counter INT = 1;

StartLoop:
IF @Counter <= 5
BEGIN
    PRINT @Counter;
    SET @Counter = @Counter + 1;
    GOTO StartLoop;
END

PRINT 'Done';`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_try_catch.asp": {
    title: "T-SQL TRY...CATCH",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">TRY...CATCH Error Handling</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`BEGIN TRY
    -- Code that might cause an error
    DECLARE @Result INT;
    SET @Result = 10 / 0;  -- Division by zero
END TRY
BEGIN CATCH
    SELECT
        ERROR_NUMBER() AS ErrorNumber,
        ERROR_SEVERITY() AS ErrorSeverity,
        ERROR_STATE() AS ErrorState,
        ERROR_PROCEDURE() AS ErrorProcedure,
        ERROR_LINE() AS ErrorLine,
        ERROR_MESSAGE() AS ErrorMessage;
END CATCH`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_raiserror.asp": {
    title: "T-SQL RAISERROR",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">RAISERROR Statement</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Basic RAISERROR
RAISERROR('An error occurred', 16, 1);

-- With substitution parameters
DECLARE @EmpName VARCHAR(50) = 'John';
RAISERROR('Employee %s not found', 16, 1, @EmpName);

-- Severity levels:
-- 0-10: Informational
-- 11-16: User errors
-- 17-19: Resource/hardware errors
-- 20-25: System errors (terminates connection)

-- State: 1-255, user-defined`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_throw.asp": {
    title: "T-SQL THROW",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">THROW Statement (SQL Server 2012+)</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Basic THROW
THROW 50001, 'Custom error message', 1;

-- Re-throw in CATCH block
BEGIN TRY
    SELECT 1/0;
END TRY
BEGIN CATCH
    PRINT 'Error caught, re-throwing...';
    THROW;  -- Re-throws original error
END CATCH

-- Conditional throw
DECLARE @Value INT = -1;
IF @Value < 0
    THROW 50002, 'Value cannot be negative', 1;`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_error_functions.asp": {
    title: "T-SQL Error Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Error Functions</h2>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 mb-6">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-700 p-2">Function</th>
              <th className="border border-gray-300 dark:border-gray-700 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">ERROR_NUMBER()</td><td className="border border-gray-300 dark:border-gray-700 p-2">Returns error number</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">ERROR_MESSAGE()</td><td className="border border-gray-300 dark:border-gray-700 p-2">Returns error message text</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">ERROR_SEVERITY()</td><td className="border border-gray-300 dark:border-gray-700 p-2">Returns error severity</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">ERROR_STATE()</td><td className="border border-gray-300 dark:border-gray-700 p-2">Returns error state</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">ERROR_LINE()</td><td className="border border-gray-300 dark:border-gray-700 p-2">Returns line number where error occurred</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">ERROR_PROCEDURE()</td><td className="border border-gray-300 dark:border-gray-700 p-2">Returns stored procedure name</td></tr>
          </tbody>
        </table>
      </>
    ),
  },
  "tsql_stored_procedures.asp": {
    title: "T-SQL Stored Procedures",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Stored Procedures</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Create procedure
CREATE PROCEDURE usp_GetCustomers
AS
BEGIN
    SELECT CustomerID, CustomerName, City
    FROM Customers;
END;
GO

-- Execute procedure
EXEC usp_GetCustomers;
-- or
EXECUTE usp_GetCustomers;

-- Alter procedure
ALTER PROCEDURE usp_GetCustomers
AS
BEGIN
    SELECT * FROM Customers ORDER BY CustomerName;
END;
GO

-- Drop procedure
DROP PROCEDURE usp_GetCustomers;`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_parameters.asp": {
    title: "T-SQL Procedure Parameters",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Input Parameters</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`CREATE PROCEDURE usp_GetCustomersByCity
    @City VARCHAR(50)
AS
BEGIN
    SELECT * FROM Customers WHERE City = @City;
END;
GO

-- Execute with parameter
EXEC usp_GetCustomersByCity @City = 'London';
EXEC usp_GetCustomersByCity 'London';

-- With default parameter
CREATE PROCEDURE usp_GetProducts
    @Category VARCHAR(50) = NULL,
    @MinPrice DECIMAL(10,2) = 0
AS
BEGIN
    SELECT * FROM Products
    WHERE (@Category IS NULL OR Category = @Category)
      AND Price >= @MinPrice;
END;
GO`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_output_params.asp": {
    title: "T-SQL Output Parameters",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Output Parameters</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`CREATE PROCEDURE usp_GetOrderTotal
    @OrderID INT,
    @TotalAmount DECIMAL(10,2) OUTPUT
AS
BEGIN
    SELECT @TotalAmount = SUM(Quantity * UnitPrice)
    FROM OrderDetails
    WHERE OrderID = @OrderID;
END;
GO

-- Execute with output parameter
DECLARE @Total DECIMAL(10,2);
EXEC usp_GetOrderTotal @OrderID = 10248, @TotalAmount = @Total OUTPUT;
PRINT 'Order Total: $' + CAST(@Total AS VARCHAR);`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_functions.asp": {
    title: "T-SQL Scalar Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Scalar Functions</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`CREATE FUNCTION fn_CalculateTax(@Amount DECIMAL(10,2))
RETURNS DECIMAL(10,2)
AS
BEGIN
    RETURN @Amount * 0.08;
END;
GO

-- Use function
SELECT ProductName, Price, dbo.fn_CalculateTax(Price) AS Tax
FROM Products;

-- Function with multiple parameters
CREATE FUNCTION fn_GetFullName(@First VARCHAR(50), @Last VARCHAR(50))
RETURNS VARCHAR(100)
AS
BEGIN
    RETURN @First + ' ' + @Last;
END;
GO`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_table_functions.asp": {
    title: "T-SQL Table-Valued Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Table-Valued Functions</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Inline Table-Valued Function
CREATE FUNCTION fn_GetOrdersByCustomer(@CustomerID INT)
RETURNS TABLE
AS
RETURN (
    SELECT OrderID, OrderDate, TotalAmount
    FROM Orders
    WHERE CustomerID = @CustomerID
);
GO

-- Use like a table
SELECT * FROM fn_GetOrdersByCustomer(1);

-- Multi-Statement Table-Valued Function
CREATE FUNCTION fn_GetTopProducts(@TopN INT)
RETURNS @Result TABLE (
    ProductID INT,
    ProductName VARCHAR(100),
    TotalSales DECIMAL(10,2)
)
AS
BEGIN
    INSERT INTO @Result
    SELECT TOP (@TopN) p.ProductID, p.ProductName, SUM(od.Quantity * od.UnitPrice)
    FROM Products p
    JOIN OrderDetails od ON p.ProductID = od.ProductID
    GROUP BY p.ProductID, p.ProductName
    ORDER BY SUM(od.Quantity * od.UnitPrice) DESC;
    RETURN;
END;
GO`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_builtin.asp": {
    title: "T-SQL Built-in Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Common Built-in Functions</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- String Functions
SELECT LEN('Hello');           -- 5
SELECT UPPER('hello');         -- HELLO
SELECT LOWER('HELLO');         -- hello
SELECT TRIM('  text  ');       -- text
SELECT CONCAT('Hello', ' ', 'World');
SELECT SUBSTRING('Hello', 1, 3);  -- Hel
SELECT REPLACE('Hello', 'l', 'x');

-- Date Functions
SELECT GETDATE();              -- Current date/time
SELECT DATEADD(day, 30, GETDATE());
SELECT DATEDIFF(day, '2024-01-01', GETDATE());
SELECT YEAR(GETDATE()), MONTH(GETDATE()), DAY(GETDATE());
SELECT FORMAT(GETDATE(), 'yyyy-MM-dd');

-- Conversion Functions
SELECT CAST(123 AS VARCHAR);
SELECT CONVERT(VARCHAR, 123);
SELECT TRY_CAST('abc' AS INT);  -- Returns NULL
SELECT ISNULL(NULL, 'Default');
SELECT COALESCE(NULL, NULL, 'Value');`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_triggers.asp": {
    title: "T-SQL DML Triggers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">DML Triggers</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- AFTER trigger
CREATE TRIGGER tr_AuditProducts
ON Products
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    IF EXISTS(SELECT * FROM inserted)
        INSERT INTO ProductAudit(Action, ProductID, ActionDate)
        SELECT 'INSERT/UPDATE', ProductID, GETDATE() FROM inserted;

    IF EXISTS(SELECT * FROM deleted)
        INSERT INTO ProductAudit(Action, ProductID, ActionDate)
        SELECT 'DELETE', ProductID, GETDATE() FROM deleted;
END;
GO

-- Access inserted/deleted pseudo-tables
-- inserted: New rows (INSERT, UPDATE)
-- deleted: Old rows (DELETE, UPDATE)`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_ddl_triggers.asp": {
    title: "T-SQL DDL Triggers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">DDL Triggers</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Trigger on database level
CREATE TRIGGER tr_PreventTableDrop
ON DATABASE
FOR DROP_TABLE
AS
BEGIN
    PRINT 'Cannot drop tables. Contact DBA.';
    ROLLBACK;
END;
GO

-- Trigger on server level
CREATE TRIGGER tr_LogDatabaseCreation
ON ALL SERVER
FOR CREATE_DATABASE
AS
BEGIN
    INSERT INTO master.dbo.DatabaseLog(EventType, EventDate, LoginName)
    VALUES('CREATE_DATABASE', GETDATE(), SUSER_SNAME());
END;
GO`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_instead_of.asp": {
    title: "T-SQL INSTEAD OF Triggers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">INSTEAD OF Triggers</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- INSTEAD OF replaces the triggering action
CREATE TRIGGER tr_ValidateInsert
ON Employees
INSTEAD OF INSERT
AS
BEGIN
    -- Validate before inserting
    IF EXISTS(SELECT * FROM inserted WHERE Salary < 0)
    BEGIN
        RAISERROR('Salary cannot be negative', 16, 1);
        RETURN;
    END

    -- Perform the actual insert
    INSERT INTO Employees(Name, Salary, DepartmentID)
    SELECT Name, Salary, DepartmentID FROM inserted;
END;
GO`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_transactions.asp": {
    title: "T-SQL Transactions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Transactions</h2>
        <p className="leading-relaxed mb-4">Transactions ensure data integrity by grouping operations that must all succeed or all fail.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`BEGIN TRANSACTION;
    UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1;
    UPDATE Accounts SET Balance = Balance + 100 WHERE AccountID = 2;

    IF @@ERROR <> 0
        ROLLBACK TRANSACTION;
    ELSE
        COMMIT TRANSACTION;`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_commit_rollback.asp": {
    title: "T-SQL COMMIT and ROLLBACK",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">COMMIT and ROLLBACK</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`BEGIN TRY
    BEGIN TRANSACTION;

    INSERT INTO Orders(CustomerID, OrderDate) VALUES(1, GETDATE());
    DECLARE @OrderID INT = SCOPE_IDENTITY();

    INSERT INTO OrderDetails(OrderID, ProductID, Quantity)
    VALUES(@OrderID, 1, 10);

    COMMIT TRANSACTION;
    PRINT 'Transaction committed successfully';
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
    PRINT 'Transaction rolled back: ' + ERROR_MESSAGE();
END CATCH`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_savepoint.asp": {
    title: "T-SQL SAVEPOINT",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Save Points</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`BEGIN TRANSACTION;
    INSERT INTO Products(Name, Price) VALUES('Product A', 10);

    SAVE TRANSACTION SavePoint1;

    INSERT INTO Products(Name, Price) VALUES('Product B', 20);

    -- Rollback only to savepoint
    ROLLBACK TRANSACTION SavePoint1;

    -- Product A is still in transaction
    COMMIT TRANSACTION;`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_isolation.asp": {
    title: "T-SQL Isolation Levels",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Transaction Isolation Levels</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Set isolation level
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;  -- Default
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
SET TRANSACTION ISOLATION LEVEL SNAPSHOT;

-- Example
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN TRANSACTION;
    SELECT * FROM Products WHERE Category = 'Electronics';
    -- Other transactions cannot modify these rows
COMMIT TRANSACTION;`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_window.asp": {
    title: "T-SQL Window Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Window Functions Overview</h2>
        <p className="leading-relaxed mb-4">Window functions perform calculations across a set of rows related to the current row.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT
    ProductName,
    Category,
    Price,
    AVG(Price) OVER() AS OverallAvg,
    AVG(Price) OVER(PARTITION BY Category) AS CategoryAvg,
    SUM(Price) OVER(ORDER BY Price) AS RunningTotal
FROM Products;`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_row_number.asp": {
    title: "T-SQL ROW_NUMBER",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">ROW_NUMBER Function</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Sequential numbering
SELECT
    ROW_NUMBER() OVER(ORDER BY ProductName) AS RowNum,
    ProductName, Price
FROM Products;

-- Numbering within partitions
SELECT
    ROW_NUMBER() OVER(PARTITION BY Category ORDER BY Price DESC) AS RankInCategory,
    Category, ProductName, Price
FROM Products;

-- Pagination
WITH NumberedProducts AS (
    SELECT ROW_NUMBER() OVER(ORDER BY ProductID) AS RowNum, *
    FROM Products
)
SELECT * FROM NumberedProducts
WHERE RowNum BETWEEN 11 AND 20;  -- Page 2`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_rank.asp": {
    title: "T-SQL RANK and DENSE_RANK",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">RANK vs DENSE_RANK</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT
    ProductName,
    Price,
    RANK() OVER(ORDER BY Price DESC) AS PriceRank,
    DENSE_RANK() OVER(ORDER BY Price DESC) AS DensePriceRank
FROM Products;

-- RANK: Skips numbers after ties (1, 2, 2, 4)
-- DENSE_RANK: No gaps (1, 2, 2, 3)

-- Find top 3 products per category
WITH RankedProducts AS (
    SELECT *, DENSE_RANK() OVER(PARTITION BY Category ORDER BY Price DESC) AS Rnk
    FROM Products
)
SELECT * FROM RankedProducts WHERE Rnk <= 3;`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_lead_lag.asp": {
    title: "T-SQL LEAD and LAG",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">LEAD and LAG Functions</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT
    OrderDate,
    TotalAmount,
    LAG(TotalAmount, 1) OVER(ORDER BY OrderDate) AS PrevAmount,
    LEAD(TotalAmount, 1) OVER(ORDER BY OrderDate) AS NextAmount,
    TotalAmount - LAG(TotalAmount, 1) OVER(ORDER BY OrderDate) AS Change
FROM Orders;

-- LAG: Access previous row value
-- LEAD: Access next row value
-- Second parameter: offset (default 1)
-- Third parameter: default value if no row exists`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_over.asp": {
    title: "T-SQL OVER Clause",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">OVER Clause</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- PARTITION BY: Divides result set
SELECT Category, ProductName, Price,
    SUM(Price) OVER(PARTITION BY Category) AS CategoryTotal
FROM Products;

-- ORDER BY: Defines ordering within partition
SELECT OrderDate, Amount,
    SUM(Amount) OVER(ORDER BY OrderDate) AS RunningTotal
FROM Orders;

-- ROWS/RANGE: Frame specification
SELECT OrderDate, Amount,
    AVG(Amount) OVER(ORDER BY OrderDate ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS MovingAvg
FROM Orders;`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_cte.asp": {
    title: "T-SQL Common Table Expressions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Common Table Expressions (CTE)</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Basic CTE
WITH TopCustomers AS (
    SELECT CustomerID, SUM(TotalAmount) AS TotalSpent
    FROM Orders
    GROUP BY CustomerID
    HAVING SUM(TotalAmount) > 10000
)
SELECT c.CustomerName, tc.TotalSpent
FROM TopCustomers tc
JOIN Customers c ON tc.CustomerID = c.CustomerID;

-- Multiple CTEs
WITH
OrderTotals AS (
    SELECT CustomerID, COUNT(*) AS OrderCount
    FROM Orders GROUP BY CustomerID
),
HighValueCustomers AS (
    SELECT CustomerID FROM OrderTotals WHERE OrderCount > 10
)
SELECT * FROM HighValueCustomers;`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_recursive_cte.asp": {
    title: "T-SQL Recursive CTE",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Recursive CTE</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Employee hierarchy
WITH EmployeeHierarchy AS (
    -- Anchor: Top-level managers
    SELECT EmployeeID, Name, ManagerID, 0 AS Level
    FROM Employees
    WHERE ManagerID IS NULL

    UNION ALL

    -- Recursive: Employees reporting to managers
    SELECT e.EmployeeID, e.Name, e.ManagerID, eh.Level + 1
    FROM Employees e
    JOIN EmployeeHierarchy eh ON e.ManagerID = eh.EmployeeID
)
SELECT * FROM EmployeeHierarchy
ORDER BY Level, Name
OPTION (MAXRECURSION 100);  -- Limit recursion depth`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_temp_tables.asp": {
    title: "T-SQL Temporary Tables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Temporary Tables</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Local temp table (# prefix) - Session scope
CREATE TABLE #TempProducts (
    ID INT,
    Name VARCHAR(100),
    Price DECIMAL(10,2)
);

INSERT INTO #TempProducts VALUES (1, 'Product A', 10.00);
SELECT * FROM #TempProducts;
DROP TABLE #TempProducts;

-- Global temp table (## prefix) - All sessions
CREATE TABLE ##GlobalTemp (
    ID INT,
    Value VARCHAR(100)
);

-- SELECT INTO creates temp table
SELECT ProductID, ProductName, Price
INTO #TopProducts
FROM Products
WHERE Price > 100;`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_table_variables.asp": {
    title: "T-SQL Table Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Table Variables</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE @Products TABLE (
    ID INT PRIMARY KEY,
    Name VARCHAR(100),
    Price DECIMAL(10,2)
);

INSERT INTO @Products VALUES (1, 'Widget', 9.99);
INSERT INTO @Products VALUES (2, 'Gadget', 19.99);

SELECT * FROM @Products;

-- Advantages over temp tables:
-- No transaction log
-- Automatic cleanup
-- Can be used in functions`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_cursors.asp": {
    title: "T-SQL Cursors",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Cursors</h2>
        <p className="leading-relaxed mb-4 text-yellow-600 dark:text-yellow-400">Note: Cursors are slow. Use set-based operations when possible.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE @ID INT, @Name VARCHAR(100);

DECLARE ProductCursor CURSOR FOR
    SELECT ProductID, ProductName FROM Products;

OPEN ProductCursor;

FETCH NEXT FROM ProductCursor INTO @ID, @Name;

WHILE @@FETCH_STATUS = 0
BEGIN
    PRINT 'Product: ' + @Name;
    FETCH NEXT FROM ProductCursor INTO @ID, @Name;
END

CLOSE ProductCursor;
DEALLOCATE ProductCursor;`}
          </pre>
        </div>
      </>
    ),
  },
  "tsql_dynamic.asp": {
    title: "T-SQL Dynamic SQL",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Dynamic SQL</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- EXEC with string
DECLARE @SQL NVARCHAR(MAX);
SET @SQL = N'SELECT * FROM Products WHERE Price > 100';
EXEC(@SQL);

-- sp_executesql (preferred - parameterized)
DECLARE @TableName NVARCHAR(50) = 'Products';
DECLARE @MinPrice DECIMAL(10,2) = 50;

SET @SQL = N'SELECT * FROM ' + QUOTENAME(@TableName) +
           N' WHERE Price > @Price';

EXEC sp_executesql @SQL, N'@Price DECIMAL(10,2)', @MinPrice;

-- Always use QUOTENAME() for identifiers
-- Always use parameters to prevent SQL injection`}
          </pre>
        </div>
      </>
    ),
  },
};
