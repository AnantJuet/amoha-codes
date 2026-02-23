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
  { label: "PL/SQL HOME", href: "plsql_home.asp" },
  { label: "PL/SQL Intro", href: "plsql_intro.asp" },
  { label: "PL/SQL Environment", href: "plsql_environment.asp" },
  { label: "PL/SQL Syntax", href: "plsql_syntax.asp" },
  {
    label: "PL/SQL Variables",
    href: "plsql_variables.asp",
    isHeader: true,
    children: [
      { label: "Variables", href: "plsql_variables.asp" },
      { label: "Constants", href: "plsql_constants.asp" },
      { label: "Literals", href: "plsql_literals.asp" },
    ]
  },
  {
    label: "PL/SQL Data Types",
    href: "plsql_datatypes.asp",
    isHeader: true,
    children: [
      { label: "Data Types", href: "plsql_datatypes.asp" },
      { label: "Scalar Types", href: "plsql_scalar.asp" },
      { label: "Composite Types", href: "plsql_composite.asp" },
    ]
  },
  {
    label: "PL/SQL Operators",
    href: "plsql_operators.asp",
    isHeader: true,
    children: [
      { label: "Arithmetic", href: "plsql_operators.asp" },
      { label: "Relational", href: "plsql_relational.asp" },
      { label: "Logical", href: "plsql_logical.asp" },
    ]
  },
  {
    label: "PL/SQL Control",
    href: "plsql_conditions.asp",
    isHeader: true,
    children: [
      { label: "IF-THEN-ELSE", href: "plsql_conditions.asp" },
      { label: "CASE Statement", href: "plsql_case.asp" },
      { label: "Nested IF", href: "plsql_nested_if.asp" },
    ]
  },
  {
    label: "PL/SQL Loops",
    href: "plsql_loops.asp",
    isHeader: true,
    children: [
      { label: "Basic Loop", href: "plsql_loops.asp" },
      { label: "WHILE Loop", href: "plsql_while.asp" },
      { label: "FOR Loop", href: "plsql_for.asp" },
      { label: "Nested Loops", href: "plsql_nested_loops.asp" },
    ]
  },
  {
    label: "PL/SQL Cursors",
    href: "plsql_cursors.asp",
    isHeader: true,
    children: [
      { label: "Implicit Cursors", href: "plsql_cursors.asp" },
      { label: "Explicit Cursors", href: "plsql_explicit_cursor.asp" },
      { label: "Cursor FOR Loop", href: "plsql_cursor_for.asp" },
    ]
  },
  {
    label: "PL/SQL Exceptions",
    href: "plsql_exceptions.asp",
    isHeader: true,
    children: [
      { label: "Exception Handling", href: "plsql_exceptions.asp" },
      { label: "Predefined Exceptions", href: "plsql_predefined.asp" },
      { label: "User-Defined", href: "plsql_user_defined.asp" },
      { label: "RAISE Statement", href: "plsql_raise.asp" },
    ]
  },
  {
    label: "PL/SQL Procedures",
    href: "plsql_procedures.asp",
    isHeader: true,
    children: [
      { label: "Procedures", href: "plsql_procedures.asp" },
      { label: "Parameters", href: "plsql_parameters.asp" },
    ]
  },
  {
    label: "PL/SQL Functions",
    href: "plsql_functions.asp",
    isHeader: true,
    children: [
      { label: "Functions", href: "plsql_functions.asp" },
      { label: "Return Statement", href: "plsql_return.asp" },
    ]
  },
  { label: "PL/SQL Packages", href: "plsql_packages.asp" },
  {
    label: "PL/SQL Triggers",
    href: "plsql_triggers.asp",
    isHeader: true,
    children: [
      { label: "Triggers", href: "plsql_triggers.asp" },
      { label: "Trigger Types", href: "plsql_trigger_types.asp" },
    ]
  },
  {
    label: "PL/SQL Collections",
    href: "plsql_collections.asp",
    isHeader: true,
    children: [
      { label: "Collections", href: "plsql_collections.asp" },
      { label: "Nested Tables", href: "plsql_nested_tables.asp" },
      { label: "VARRAY", href: "plsql_varray.asp" },
      { label: "Associative Arrays", href: "plsql_associative.asp" },
    ]
  },
  { label: "PL/SQL Records", href: "plsql_records.asp" },
  { label: "PL/SQL Transactions", href: "plsql_transactions.asp" },
];

export const tutorialContent: Record<string, TopicContent> = {
  "plsql_home.asp": {
    title: "PL/SQL Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Welcome to PL/SQL Tutorial</h2>
        <p className="leading-relaxed mb-4">
          <strong>PL/SQL (Procedural Language/SQL)</strong> is Oracle's procedural extension to SQL. It combines the data manipulation power of SQL with the processing power of procedural languages.
        </p>
        <p className="leading-relaxed mb-4">PL/SQL enables you to write code with loops, conditions, and exception handling to build robust database applications.</p>
        <h3 className="text-xl font-medium mb-3">Example: Hello World</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`BEGIN
   DBMS_OUTPUT.PUT_LINE('Hello, World!');
END;
/`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">What You Will Learn</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>PL/SQL block structure and syntax</li>
          <li>Variables, data types, and operators</li>
          <li>Control statements and loops</li>
          <li>Cursors for data retrieval</li>
          <li>Exception handling</li>
          <li>Procedures, functions, and packages</li>
          <li>Triggers and collections</li>
        </ul>
      </>
    ),
  },
  "plsql_intro.asp": {
    title: "PL/SQL Introduction",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">What is PL/SQL?</h2>
        <p className="leading-relaxed mb-4">PL/SQL stands for Procedural Language extensions to SQL. It is Oracle Corporation's procedural extension for SQL and the Oracle relational database.</p>
        <h3 className="text-xl font-medium mb-3">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Block Structure:</strong> Code organized in logical blocks</li>
          <li><strong>Variables and Constants:</strong> Store and manipulate data</li>
          <li><strong>Control Structures:</strong> IF, CASE, LOOP statements</li>
          <li><strong>Exception Handling:</strong> Graceful error management</li>
          <li><strong>Cursors:</strong> Process query results row by row</li>
          <li><strong>Modular Programming:</strong> Procedures, functions, packages</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Advantages of PL/SQL</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Tight integration with SQL</li>
          <li>High performance through bulk operations</li>
          <li>Portability across Oracle platforms</li>
          <li>Security through stored procedures</li>
        </ul>
      </>
    ),
  },
  "plsql_environment.asp": {
    title: "PL/SQL Environment Setup",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Setting Up PL/SQL Environment</h2>
        <p className="leading-relaxed mb-4">To work with PL/SQL, you need access to an Oracle database. Options include:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Oracle Database Express Edition (XE):</strong> Free, lightweight version</li>
          <li><strong>Oracle Live SQL:</strong> Online platform for practicing</li>
          <li><strong>Oracle Cloud:</strong> Cloud-based database service</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Tools for PL/SQL Development</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>SQL*Plus:</strong> Command-line interface</li>
          <li><strong>SQL Developer:</strong> Free GUI tool from Oracle</li>
          <li><strong>TOAD:</strong> Third-party development tool</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Enable Output</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Enable output display in SQL*Plus
SET SERVEROUTPUT ON;`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_syntax.asp": {
    title: "PL/SQL Basic Syntax",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">PL/SQL Block Structure</h2>
        <p className="leading-relaxed mb-4">A PL/SQL block has three sections: DECLARE, BEGIN, and EXCEPTION.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE
   -- Variable declarations (optional)
   v_name VARCHAR2(50);
BEGIN
   -- Executable statements (required)
   v_name := 'Oracle';
   DBMS_OUTPUT.PUT_LINE('Hello ' || v_name);
EXCEPTION
   -- Exception handlers (optional)
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('Error occurred');
END;
/`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Block Types</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>Anonymous Block:</strong> Not stored, executed immediately</li>
          <li><strong>Named Block:</strong> Stored procedures and functions</li>
          <li><strong>Nested Block:</strong> Blocks within blocks</li>
        </ul>
      </>
    ),
  },
  "plsql_variables.asp": {
    title: "PL/SQL Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Variables in PL/SQL</h2>
        <p className="leading-relaxed mb-4">Variables are named storage locations that hold values.</p>
        <h3 className="text-xl font-medium mb-3">Syntax</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`variable_name datatype [NOT NULL] [:= initial_value];`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Examples</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE
   v_name VARCHAR2(50) := 'John';
   v_age NUMBER(3) := 25;
   v_salary NUMBER(10,2);
   v_hire_date DATE := SYSDATE;
   v_is_active BOOLEAN := TRUE;
BEGIN
   v_salary := 50000.00;
   DBMS_OUTPUT.PUT_LINE('Name: ' || v_name);
   DBMS_OUTPUT.PUT_LINE('Age: ' || v_age);
END;
/`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">%TYPE Attribute</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Use column's data type
v_emp_name employees.first_name%TYPE;`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_constants.asp": {
    title: "PL/SQL Constants",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Constants in PL/SQL</h2>
        <p className="leading-relaxed mb-4">Constants are variables whose values cannot be changed after initialization.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE
   c_pi CONSTANT NUMBER := 3.14159;
   c_company_name CONSTANT VARCHAR2(50) := 'Oracle Corp';
   c_tax_rate CONSTANT NUMBER(5,2) := 0.08;
BEGIN
   DBMS_OUTPUT.PUT_LINE('Pi: ' || c_pi);
   DBMS_OUTPUT.PUT_LINE('Company: ' || c_company_name);
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_literals.asp": {
    title: "PL/SQL Literals",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Literals in PL/SQL</h2>
        <p className="leading-relaxed mb-4">Literals are explicit values not represented by identifiers.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Numeric Literals
123, -456, 3.14, 2.5E3

-- Character Literals
'Hello World', 'O''Brien'

-- String Literals
'This is a string'

-- Boolean Literals
TRUE, FALSE, NULL

-- Date Literals
DATE '2024-01-15'`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_datatypes.asp": {
    title: "PL/SQL Data Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">PL/SQL Data Types</h2>
        <p className="leading-relaxed mb-4">PL/SQL supports various data types for different purposes.</p>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 mb-6">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-700 p-2">Category</th>
              <th className="border border-gray-300 dark:border-gray-700 p-2">Data Types</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">Numeric</td><td className="border border-gray-300 dark:border-gray-700 p-2">NUMBER, PLS_INTEGER, BINARY_INTEGER</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">Character</td><td className="border border-gray-300 dark:border-gray-700 p-2">VARCHAR2, CHAR, NCHAR, NVARCHAR2</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">Date/Time</td><td className="border border-gray-300 dark:border-gray-700 p-2">DATE, TIMESTAMP, INTERVAL</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">Boolean</td><td className="border border-gray-300 dark:border-gray-700 p-2">BOOLEAN</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">Large Object</td><td className="border border-gray-300 dark:border-gray-700 p-2">BLOB, CLOB, NCLOB, BFILE</td></tr>
          </tbody>
        </table>
      </>
    ),
  },
  "plsql_scalar.asp": {
    title: "PL/SQL Scalar Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Scalar Data Types</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE
   -- Numeric types
   v_num NUMBER(10,2) := 1234.56;
   v_int PLS_INTEGER := 100;

   -- Character types
   v_char CHAR(10) := 'ABC';
   v_varchar VARCHAR2(100) := 'Hello World';

   -- Date type
   v_date DATE := SYSDATE;

   -- Boolean type
   v_flag BOOLEAN := TRUE;
BEGIN
   DBMS_OUTPUT.PUT_LINE('Number: ' || v_num);
   DBMS_OUTPUT.PUT_LINE('Date: ' || TO_CHAR(v_date, 'YYYY-MM-DD'));
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_composite.asp": {
    title: "PL/SQL Composite Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Composite Data Types</h2>
        <p className="leading-relaxed mb-4">Composite types can hold multiple values.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Record type (holds row of data)
DECLARE
   TYPE emp_rec IS RECORD (
      emp_id NUMBER,
      emp_name VARCHAR2(50),
      salary NUMBER
   );
   v_employee emp_rec;
BEGIN
   v_employee.emp_id := 101;
   v_employee.emp_name := 'John Doe';
   v_employee.salary := 50000;
END;
/

-- Using %ROWTYPE
DECLARE
   v_emp_row employees%ROWTYPE;
BEGIN
   SELECT * INTO v_emp_row FROM employees WHERE employee_id = 100;
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_operators.asp": {
    title: "PL/SQL Arithmetic Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Arithmetic Operators</h2>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 mb-6">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-700 p-2">Operator</th>
              <th className="border border-gray-300 dark:border-gray-700 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">+</td><td className="border border-gray-300 dark:border-gray-700 p-2">Addition</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">-</td><td className="border border-gray-300 dark:border-gray-700 p-2">Subtraction</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">*</td><td className="border border-gray-300 dark:border-gray-700 p-2">Multiplication</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">/</td><td className="border border-gray-300 dark:border-gray-700 p-2">Division</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">**</td><td className="border border-gray-300 dark:border-gray-700 p-2">Exponentiation</td></tr>
          </tbody>
        </table>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE
   a NUMBER := 10;
   b NUMBER := 3;
BEGIN
   DBMS_OUTPUT.PUT_LINE('Sum: ' || (a + b));
   DBMS_OUTPUT.PUT_LINE('Power: ' || (a ** b));
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_relational.asp": {
    title: "PL/SQL Relational Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Relational Operators</h2>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 mb-6">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-700 p-2">Operator</th>
              <th className="border border-gray-300 dark:border-gray-700 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">=</td><td className="border border-gray-300 dark:border-gray-700 p-2">Equal to</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">&lt;&gt; or !=</td><td className="border border-gray-300 dark:border-gray-700 p-2">Not equal to</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">&gt;</td><td className="border border-gray-300 dark:border-gray-700 p-2">Greater than</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">&lt;</td><td className="border border-gray-300 dark:border-gray-700 p-2">Less than</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">&gt;=</td><td className="border border-gray-300 dark:border-gray-700 p-2">Greater than or equal</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">&lt;=</td><td className="border border-gray-300 dark:border-gray-700 p-2">Less than or equal</td></tr>
          </tbody>
        </table>
      </>
    ),
  },
  "plsql_logical.asp": {
    title: "PL/SQL Logical Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Logical Operators</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE
   a BOOLEAN := TRUE;
   b BOOLEAN := FALSE;
BEGIN
   -- AND operator
   IF a AND b THEN
      DBMS_OUTPUT.PUT_LINE('Both true');
   END IF;

   -- OR operator
   IF a OR b THEN
      DBMS_OUTPUT.PUT_LINE('At least one true');
   END IF;

   -- NOT operator
   IF NOT b THEN
      DBMS_OUTPUT.PUT_LINE('b is false');
   END IF;
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_conditions.asp": {
    title: "PL/SQL IF-THEN-ELSE",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">IF-THEN-ELSE Statement</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE
   v_grade NUMBER := 85;
BEGIN
   IF v_grade >= 90 THEN
      DBMS_OUTPUT.PUT_LINE('Grade: A');
   ELSIF v_grade >= 80 THEN
      DBMS_OUTPUT.PUT_LINE('Grade: B');
   ELSIF v_grade >= 70 THEN
      DBMS_OUTPUT.PUT_LINE('Grade: C');
   ELSE
      DBMS_OUTPUT.PUT_LINE('Grade: F');
   END IF;
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_case.asp": {
    title: "PL/SQL CASE Statement",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">CASE Statement</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE
   v_day NUMBER := 3;
   v_day_name VARCHAR2(20);
BEGIN
   v_day_name := CASE v_day
      WHEN 1 THEN 'Monday'
      WHEN 2 THEN 'Tuesday'
      WHEN 3 THEN 'Wednesday'
      WHEN 4 THEN 'Thursday'
      WHEN 5 THEN 'Friday'
      ELSE 'Weekend'
   END;
   DBMS_OUTPUT.PUT_LINE('Day: ' || v_day_name);
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_nested_if.asp": {
    title: "PL/SQL Nested IF",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Nested IF Statements</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE
   v_age NUMBER := 25;
   v_citizen BOOLEAN := TRUE;
BEGIN
   IF v_age >= 18 THEN
      IF v_citizen THEN
         DBMS_OUTPUT.PUT_LINE('Eligible to vote');
      ELSE
         DBMS_OUTPUT.PUT_LINE('Must be a citizen');
      END IF;
   ELSE
      DBMS_OUTPUT.PUT_LINE('Must be 18 or older');
   END IF;
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_loops.asp": {
    title: "PL/SQL Basic Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Basic LOOP</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE
   v_counter NUMBER := 1;
BEGIN
   LOOP
      DBMS_OUTPUT.PUT_LINE('Counter: ' || v_counter);
      v_counter := v_counter + 1;
      EXIT WHEN v_counter > 5;
   END LOOP;
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_while.asp": {
    title: "PL/SQL WHILE Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">WHILE Loop</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE
   v_counter NUMBER := 1;
BEGIN
   WHILE v_counter <= 5 LOOP
      DBMS_OUTPUT.PUT_LINE('Counter: ' || v_counter);
      v_counter := v_counter + 1;
   END LOOP;
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_for.asp": {
    title: "PL/SQL FOR Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">FOR Loop</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`BEGIN
   -- Forward loop
   FOR i IN 1..5 LOOP
      DBMS_OUTPUT.PUT_LINE('i = ' || i);
   END LOOP;

   -- Reverse loop
   FOR i IN REVERSE 1..5 LOOP
      DBMS_OUTPUT.PUT_LINE('Reverse i = ' || i);
   END LOOP;
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_nested_loops.asp": {
    title: "PL/SQL Nested Loops",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Nested Loops</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`BEGIN
   FOR i IN 1..3 LOOP
      FOR j IN 1..3 LOOP
         DBMS_OUTPUT.PUT_LINE('i=' || i || ', j=' || j);
      END LOOP;
   END LOOP;
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_cursors.asp": {
    title: "PL/SQL Implicit Cursors",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Implicit Cursors</h2>
        <p className="leading-relaxed mb-4">Oracle automatically creates implicit cursors for SQL statements.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`BEGIN
   UPDATE employees SET salary = salary * 1.1 WHERE department_id = 10;

   IF SQL%FOUND THEN
      DBMS_OUTPUT.PUT_LINE('Rows updated: ' || SQL%ROWCOUNT);
   ELSE
      DBMS_OUTPUT.PUT_LINE('No rows updated');
   END IF;
END;
/`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Cursor Attributes</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>SQL%FOUND:</strong> TRUE if statement affected rows</li>
          <li><strong>SQL%NOTFOUND:</strong> TRUE if no rows affected</li>
          <li><strong>SQL%ROWCOUNT:</strong> Number of rows affected</li>
        </ul>
      </>
    ),
  },
  "plsql_explicit_cursor.asp": {
    title: "PL/SQL Explicit Cursors",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Explicit Cursors</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE
   CURSOR c_employees IS
      SELECT employee_id, first_name, salary
      FROM employees WHERE department_id = 10;
   v_emp_id employees.employee_id%TYPE;
   v_name employees.first_name%TYPE;
   v_salary employees.salary%TYPE;
BEGIN
   OPEN c_employees;
   LOOP
      FETCH c_employees INTO v_emp_id, v_name, v_salary;
      EXIT WHEN c_employees%NOTFOUND;
      DBMS_OUTPUT.PUT_LINE(v_name || ': $' || v_salary);
   END LOOP;
   CLOSE c_employees;
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_cursor_for.asp": {
    title: "PL/SQL Cursor FOR Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Cursor FOR Loop</h2>
        <p className="leading-relaxed mb-4">Simplifies cursor operations by handling open, fetch, and close automatically.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`BEGIN
   FOR emp_rec IN (SELECT first_name, salary FROM employees) LOOP
      DBMS_OUTPUT.PUT_LINE(emp_rec.first_name || ': $' || emp_rec.salary);
   END LOOP;
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_exceptions.asp": {
    title: "PL/SQL Exception Handling",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Exception Handling</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE
   v_result NUMBER;
BEGIN
   v_result := 10 / 0;
EXCEPTION
   WHEN ZERO_DIVIDE THEN
      DBMS_OUTPUT.PUT_LINE('Error: Division by zero');
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_predefined.asp": {
    title: "PL/SQL Predefined Exceptions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Predefined Exceptions</h2>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 mb-6">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-700 p-2">Exception</th>
              <th className="border border-gray-300 dark:border-gray-700 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">NO_DATA_FOUND</td><td className="border border-gray-300 dark:border-gray-700 p-2">SELECT returned no rows</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">TOO_MANY_ROWS</td><td className="border border-gray-300 dark:border-gray-700 p-2">SELECT returned multiple rows</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">ZERO_DIVIDE</td><td className="border border-gray-300 dark:border-gray-700 p-2">Division by zero</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">VALUE_ERROR</td><td className="border border-gray-300 dark:border-gray-700 p-2">Arithmetic or conversion error</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">INVALID_CURSOR</td><td className="border border-gray-300 dark:border-gray-700 p-2">Invalid cursor operation</td></tr>
          </tbody>
        </table>
      </>
    ),
  },
  "plsql_user_defined.asp": {
    title: "PL/SQL User-Defined Exceptions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">User-Defined Exceptions</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE
   e_invalid_age EXCEPTION;
   v_age NUMBER := -5;
BEGIN
   IF v_age < 0 THEN
      RAISE e_invalid_age;
   END IF;
EXCEPTION
   WHEN e_invalid_age THEN
      DBMS_OUTPUT.PUT_LINE('Error: Age cannot be negative');
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_raise.asp": {
    title: "PL/SQL RAISE Statement",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">RAISE Statement</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- RAISE_APPLICATION_ERROR
BEGIN
   RAISE_APPLICATION_ERROR(-20001, 'Custom error message');
EXCEPTION
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('Error Code: ' || SQLCODE);
      DBMS_OUTPUT.PUT_LINE('Error Message: ' || SQLERRM);
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_procedures.asp": {
    title: "PL/SQL Procedures",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Stored Procedures</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Create procedure
CREATE OR REPLACE PROCEDURE greet_user(p_name VARCHAR2) IS
BEGIN
   DBMS_OUTPUT.PUT_LINE('Hello, ' || p_name || '!');
END greet_user;
/

-- Execute procedure
BEGIN
   greet_user('John');
END;
/

-- Or using EXEC
EXEC greet_user('Jane');`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_parameters.asp": {
    title: "PL/SQL Procedure Parameters",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Parameter Modes</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`CREATE OR REPLACE PROCEDURE calc_bonus(
   p_emp_id IN NUMBER,           -- Input parameter
   p_bonus OUT NUMBER,           -- Output parameter
   p_multiplier IN OUT NUMBER    -- Input/Output parameter
) IS
   v_salary NUMBER;
BEGIN
   SELECT salary INTO v_salary FROM employees WHERE employee_id = p_emp_id;
   p_bonus := v_salary * p_multiplier;
   p_multiplier := p_multiplier + 0.1;
END calc_bonus;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_functions.asp": {
    title: "PL/SQL Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Creating Functions</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`CREATE OR REPLACE FUNCTION calculate_tax(p_salary NUMBER)
RETURN NUMBER IS
   v_tax NUMBER;
BEGIN
   v_tax := p_salary * 0.2;
   RETURN v_tax;
END calculate_tax;
/

-- Using the function
DECLARE
   v_result NUMBER;
BEGIN
   v_result := calculate_tax(50000);
   DBMS_OUTPUT.PUT_LINE('Tax: $' || v_result);
END;
/

-- In SQL
SELECT first_name, calculate_tax(salary) AS tax FROM employees;`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_return.asp": {
    title: "PL/SQL RETURN Statement",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">RETURN Statement</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`CREATE OR REPLACE FUNCTION get_grade(p_score NUMBER)
RETURN VARCHAR2 IS
BEGIN
   IF p_score >= 90 THEN
      RETURN 'A';
   ELSIF p_score >= 80 THEN
      RETURN 'B';
   ELSIF p_score >= 70 THEN
      RETURN 'C';
   ELSE
      RETURN 'F';
   END IF;
END get_grade;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_packages.asp": {
    title: "PL/SQL Packages",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Packages</h2>
        <p className="leading-relaxed mb-4">Packages group related procedures, functions, and variables.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Package Specification
CREATE OR REPLACE PACKAGE emp_pkg IS
   PROCEDURE hire_employee(p_name VARCHAR2, p_salary NUMBER);
   FUNCTION get_salary(p_emp_id NUMBER) RETURN NUMBER;
END emp_pkg;
/

-- Package Body
CREATE OR REPLACE PACKAGE BODY emp_pkg IS
   PROCEDURE hire_employee(p_name VARCHAR2, p_salary NUMBER) IS
   BEGIN
      INSERT INTO employees(first_name, salary) VALUES(p_name, p_salary);
   END hire_employee;

   FUNCTION get_salary(p_emp_id NUMBER) RETURN NUMBER IS
      v_salary NUMBER;
   BEGIN
      SELECT salary INTO v_salary FROM employees WHERE employee_id = p_emp_id;
      RETURN v_salary;
   END get_salary;
END emp_pkg;
/

-- Using package
BEGIN
   emp_pkg.hire_employee('John', 50000);
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_triggers.asp": {
    title: "PL/SQL Triggers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Database Triggers</h2>
        <p className="leading-relaxed mb-4">Triggers are procedures that execute automatically when certain events occur.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`CREATE OR REPLACE TRIGGER audit_salary_change
BEFORE UPDATE OF salary ON employees
FOR EACH ROW
BEGIN
   INSERT INTO salary_audit(
      employee_id, old_salary, new_salary, change_date
   ) VALUES (
      :OLD.employee_id, :OLD.salary, :NEW.salary, SYSDATE
   );
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_trigger_types.asp": {
    title: "PL/SQL Trigger Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Types of Triggers</h2>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>BEFORE:</strong> Executes before the triggering event</li>
          <li><strong>AFTER:</strong> Executes after the triggering event</li>
          <li><strong>ROW-level:</strong> Fires once for each row affected</li>
          <li><strong>Statement-level:</strong> Fires once per statement</li>
        </ul>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Statement-level trigger
CREATE OR REPLACE TRIGGER log_table_changes
AFTER INSERT OR UPDATE OR DELETE ON employees
BEGIN
   INSERT INTO audit_log(table_name, action, change_date)
   VALUES('EMPLOYEES', 'DML', SYSDATE);
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_collections.asp": {
    title: "PL/SQL Collections",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Collections Overview</h2>
        <p className="leading-relaxed mb-4">Collections are ordered groups of elements with the same data type.</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Nested Tables:</strong> Like one-column database tables</li>
          <li><strong>VARRAYs:</strong> Variable-size arrays with fixed upper bound</li>
          <li><strong>Associative Arrays:</strong> Key-value pairs (PL/SQL tables)</li>
        </ul>
      </>
    ),
  },
  "plsql_nested_tables.asp": {
    title: "PL/SQL Nested Tables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Nested Tables</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE
   TYPE name_table IS TABLE OF VARCHAR2(50);
   v_names name_table := name_table('John', 'Jane', 'Bob');
BEGIN
   FOR i IN 1..v_names.COUNT LOOP
      DBMS_OUTPUT.PUT_LINE(v_names(i));
   END LOOP;

   v_names.EXTEND;
   v_names(4) := 'Alice';
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_varray.asp": {
    title: "PL/SQL VARRAY",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">VARRAY (Variable-Size Arrays)</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE
   TYPE color_array IS VARRAY(5) OF VARCHAR2(20);
   v_colors color_array := color_array('Red', 'Green', 'Blue');
BEGIN
   FOR i IN 1..v_colors.COUNT LOOP
      DBMS_OUTPUT.PUT_LINE(v_colors(i));
   END LOOP;
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_associative.asp": {
    title: "PL/SQL Associative Arrays",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Associative Arrays</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE
   TYPE salary_table IS TABLE OF NUMBER INDEX BY VARCHAR2(50);
   v_salaries salary_table;
BEGIN
   v_salaries('John') := 50000;
   v_salaries('Jane') := 60000;
   v_salaries('Bob') := 55000;

   DBMS_OUTPUT.PUT_LINE('John: $' || v_salaries('John'));
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_records.asp": {
    title: "PL/SQL Records",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">PL/SQL Records</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DECLARE
   TYPE emp_record IS RECORD (
      emp_id NUMBER,
      emp_name VARCHAR2(50),
      salary NUMBER,
      hire_date DATE
   );
   v_emp emp_record;
BEGIN
   v_emp.emp_id := 101;
   v_emp.emp_name := 'John Doe';
   v_emp.salary := 50000;
   v_emp.hire_date := SYSDATE;

   DBMS_OUTPUT.PUT_LINE(v_emp.emp_name || ': $' || v_emp.salary);
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
  "plsql_transactions.asp": {
    title: "PL/SQL Transactions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Transaction Control</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`BEGIN
   SAVEPOINT before_update;

   UPDATE employees SET salary = salary * 1.1 WHERE department_id = 10;

   IF SQL%ROWCOUNT > 100 THEN
      ROLLBACK TO before_update;
      DBMS_OUTPUT.PUT_LINE('Too many rows, rolled back');
   ELSE
      COMMIT;
      DBMS_OUTPUT.PUT_LINE('Changes committed');
   END IF;
EXCEPTION
   WHEN OTHERS THEN
      ROLLBACK;
      RAISE;
END;
/`}
          </pre>
        </div>
      </>
    ),
  },
};
