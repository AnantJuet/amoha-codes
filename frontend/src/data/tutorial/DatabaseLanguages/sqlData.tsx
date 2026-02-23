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
  { label: "SQL HOME", href: "sql_home.asp" },
  { label: "SQL Intro", href: "sql_intro.asp" },
  { label: "SQL Syntax", href: "sql_syntax.asp" },
  {
    label: "SQL SELECT",
    href: "sql_select.asp",
    isHeader: true,
    children: [
      { label: "SELECT", href: "sql_select.asp" },
      { label: "SELECT DISTINCT", href: "sql_distinct.asp" },
      { label: "SELECT TOP", href: "sql_top.asp" },
    ]
  },
  { label: "SQL WHERE", href: "sql_where.asp" },
  {
    label: "SQL Operators",
    href: "sql_and_or.asp",
    isHeader: true,
    children: [
      { label: "AND, OR, NOT", href: "sql_and_or.asp" },
      { label: "IN Operator", href: "sql_in.asp" },
      { label: "BETWEEN", href: "sql_between.asp" },
      { label: "LIKE", href: "sql_like.asp" },
    ]
  },
  { label: "SQL ORDER BY", href: "sql_orderby.asp" },
  { label: "SQL INSERT INTO", href: "sql_insert.asp" },
  { label: "SQL UPDATE", href: "sql_update.asp" },
  { label: "SQL DELETE", href: "sql_delete.asp" },
  {
    label: "SQL JOINs",
    href: "sql_join.asp",
    isHeader: true,
    children: [
      { label: "JOIN Introduction", href: "sql_join.asp" },
      { label: "INNER JOIN", href: "sql_inner_join.asp" },
      { label: "LEFT JOIN", href: "sql_left_join.asp" },
      { label: "RIGHT JOIN", href: "sql_right_join.asp" },
      { label: "FULL JOIN", href: "sql_full_join.asp" },
      { label: "Self Join", href: "sql_self_join.asp" },
    ]
  },
  {
    label: "SQL Grouping",
    href: "sql_groupby.asp",
    isHeader: true,
    children: [
      { label: "GROUP BY", href: "sql_groupby.asp" },
      { label: "HAVING", href: "sql_having.asp" },
    ]
  },
  {
    label: "SQL Advanced",
    href: "sql_subqueries.asp",
    isHeader: true,
    children: [
      { label: "Subqueries", href: "sql_subqueries.asp" },
      { label: "Views", href: "sql_views.asp" },
      { label: "Indexes", href: "sql_indexes.asp" },
      { label: "NULL Values", href: "sql_null.asp" },
      { label: "Aliases", href: "sql_aliases.asp" },
    ]
  },
  {
    label: "SQL Functions",
    href: "sql_functions.asp",
    isHeader: true,
    children: [
      { label: "Aggregate Functions", href: "sql_functions.asp" },
      { label: "String Functions", href: "sql_string_functions.asp" },
      { label: "Date Functions", href: "sql_date_functions.asp" },
    ]
  },
  { label: "SQL Stored Procedures", href: "sql_stored_procedures.asp" },
  {
    label: "SQL Database",
    href: "sql_create_db.asp",
    isHeader: true,
    children: [
      { label: "CREATE DATABASE", href: "sql_create_db.asp" },
      { label: "CREATE TABLE", href: "sql_create_table.asp" },
      { label: "ALTER TABLE", href: "sql_alter.asp" },
      { label: "DROP TABLE", href: "sql_drop.asp" },
      { label: "Constraints", href: "sql_constraints.asp" },
    ]
  },
];

export const tutorialContent: Record<string, TopicContent> = {
  "sql_home.asp": {
    title: "SQL Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Welcome to SQL Tutorial</h2>
        <p className="leading-relaxed mb-4">
          <strong>SQL (Structured Query Language)</strong> is the standard language for storing, manipulating, and retrieving data in relational databases.
        </p>
        <p className="leading-relaxed mb-4">
          SQL is used by all major database systems including MySQL, PostgreSQL, Microsoft SQL Server, Oracle, and SQLite.
        </p>
        <h3 className="text-xl font-medium mb-3">Example: Basic Query</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT * FROM Customers
WHERE Country = 'USA';`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">What You Will Learn</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>How to query data using SELECT statements</li>
          <li>How to filter and sort data</li>
          <li>How to insert, update, and delete records</li>
          <li>How to join tables together</li>
          <li>How to create and manage databases</li>
        </ul>
      </>
    ),
  },
  "sql_intro.asp": {
    title: "SQL Introduction",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">What is SQL?</h2>
        <p className="leading-relaxed mb-4">SQL stands for Structured Query Language. It is used to communicate with databases.</p>
        <p className="leading-relaxed mb-4">SQL lets you access and manipulate databases to perform various operations like:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Execute queries against a database</li>
          <li>Retrieve data from a database</li>
          <li>Insert, update, and delete records</li>
          <li>Create new databases and tables</li>
          <li>Set permissions on tables and procedures</li>
        </ul>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200">SQL is a Standard</h2>
        <p className="leading-relaxed mb-4">
          SQL is an ANSI (American National Standards Institute) standard. However, different database systems have their own extensions.
        </p>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200">RDBMS</h2>
        <p className="leading-relaxed mb-4">
          RDBMS stands for Relational Database Management System. It is the basis for SQL and modern database systems like MySQL, PostgreSQL, Oracle, and SQL Server.
        </p>
      </>
    ),
  },
  "sql_syntax.asp": {
    title: "SQL Syntax",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">SQL Statements</h2>
        <p className="leading-relaxed mb-4">Most SQL actions are performed with SQL statements. A SQL statement consists of keywords that tell the database what to do.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT column1, column2
FROM table_name
WHERE condition;`}
          </pre>
        </div>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200">Important SQL Keywords</h2>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 mb-6">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Keyword</th>
              <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">SELECT</td><td className="border border-gray-300 dark:border-gray-700 p-2">Extracts data from a database</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">UPDATE</td><td className="border border-gray-300 dark:border-gray-700 p-2">Updates data in a database</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">DELETE</td><td className="border border-gray-300 dark:border-gray-700 p-2">Deletes data from a database</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">INSERT INTO</td><td className="border border-gray-300 dark:border-gray-700 p-2">Inserts new data into a database</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">CREATE DATABASE</td><td className="border border-gray-300 dark:border-gray-700 p-2">Creates a new database</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">CREATE TABLE</td><td className="border border-gray-300 dark:border-gray-700 p-2">Creates a new table</td></tr>
          </tbody>
        </table>
        <p className="leading-relaxed mb-4"><strong>Note:</strong> SQL keywords are NOT case sensitive. SELECT is the same as select.</p>
      </>
    ),
  },
  "sql_select.asp": {
    title: "SQL SELECT Statement",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">The SELECT Statement</h2>
        <p className="leading-relaxed mb-4">The SELECT statement is used to select data from a database. The data returned is stored in a result table, called the result-set.</p>
        <h3 className="text-xl font-medium mb-3">Syntax</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT column1, column2, ...
FROM table_name;

-- Or select all columns:
SELECT * FROM table_name;`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Example</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Select specific columns
SELECT CustomerName, City FROM Customers;

-- Select all columns
SELECT * FROM Customers;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_distinct.asp": {
    title: "SQL SELECT DISTINCT",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">The SELECT DISTINCT Statement</h2>
        <p className="leading-relaxed mb-4">The SELECT DISTINCT statement returns only unique values, eliminating duplicate records.</p>
        <h3 className="text-xl font-medium mb-3">Syntax</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT DISTINCT column1, column2, ...
FROM table_name;`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Example</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Get unique countries
SELECT DISTINCT Country FROM Customers;

-- Count unique countries
SELECT COUNT(DISTINCT Country) FROM Customers;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_top.asp": {
    title: "SQL SELECT TOP",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">The SELECT TOP Clause</h2>
        <p className="leading-relaxed mb-4">The SELECT TOP clause limits the number of records returned. Useful for large tables.</p>
        <h3 className="text-xl font-medium mb-3">Syntax (varies by database)</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- SQL Server / MS Access
SELECT TOP number column_name(s) FROM table_name;

-- MySQL
SELECT column_name(s) FROM table_name LIMIT number;

-- Oracle
SELECT column_name(s) FROM table_name FETCH FIRST number ROWS ONLY;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_where.asp": {
    title: "SQL WHERE Clause",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">The WHERE Clause</h2>
        <p className="leading-relaxed mb-4">The WHERE clause filters records based on specified conditions.</p>
        <h3 className="text-xl font-medium mb-3">Syntax</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT column1, column2, ...
FROM table_name
WHERE condition;`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Operators in WHERE</h3>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 mb-6">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-700 p-2">Operator</th>
              <th className="border border-gray-300 dark:border-gray-700 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">=</td><td className="border border-gray-300 dark:border-gray-700 p-2">Equal</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">&gt;</td><td className="border border-gray-300 dark:border-gray-700 p-2">Greater than</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">&lt;</td><td className="border border-gray-300 dark:border-gray-700 p-2">Less than</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">&gt;=</td><td className="border border-gray-300 dark:border-gray-700 p-2">Greater than or equal</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">&lt;=</td><td className="border border-gray-300 dark:border-gray-700 p-2">Less than or equal</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">&lt;&gt;</td><td className="border border-gray-300 dark:border-gray-700 p-2">Not equal</td></tr>
          </tbody>
        </table>
        <h3 className="text-xl font-medium mb-3">Example</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT * FROM Customers
WHERE Country = 'Mexico';

SELECT * FROM Products
WHERE Price > 50;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_and_or.asp": {
    title: "SQL AND, OR, NOT Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Logical Operators</h2>
        <p className="leading-relaxed mb-4">The WHERE clause can be combined with AND, OR, and NOT operators to filter records based on multiple conditions.</p>
        <h3 className="text-xl font-medium mb-3">AND Operator</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT * FROM Customers
WHERE Country = 'Germany' AND City = 'Berlin';`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">OR Operator</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT * FROM Customers
WHERE City = 'Berlin' OR City = 'London';`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">NOT Operator</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT * FROM Customers
WHERE NOT Country = 'Germany';`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_in.asp": {
    title: "SQL IN Operator",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">The IN Operator</h2>
        <p className="leading-relaxed mb-4">The IN operator allows you to specify multiple values in a WHERE clause. It is a shorthand for multiple OR conditions.</p>
        <h3 className="text-xl font-medium mb-3">Syntax</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);

-- Or with subquery:
SELECT column_name(s)
FROM table_name
WHERE column_name IN (SELECT STATEMENT);`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Example</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT * FROM Customers
WHERE Country IN ('Germany', 'France', 'UK');`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_between.asp": {
    title: "SQL BETWEEN Operator",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">The BETWEEN Operator</h2>
        <p className="leading-relaxed mb-4">The BETWEEN operator selects values within a given range. Values can be numbers, text, or dates.</p>
        <h3 className="text-xl font-medium mb-3">Syntax</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT column_name(s)
FROM table_name
WHERE column_name BETWEEN value1 AND value2;`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Example</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;

SELECT * FROM Orders
WHERE OrderDate BETWEEN '2023-01-01' AND '2023-12-31';`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_like.asp": {
    title: "SQL LIKE Operator",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">The LIKE Operator</h2>
        <p className="leading-relaxed mb-4">The LIKE operator is used with WHERE to search for a specified pattern in a column.</p>
        <h3 className="text-xl font-medium mb-3">Wildcards</h3>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 mb-6">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-700 p-2">Symbol</th>
              <th className="border border-gray-300 dark:border-gray-700 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">%</td><td className="border border-gray-300 dark:border-gray-700 p-2">Zero or more characters</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-700 p-2">_</td><td className="border border-gray-300 dark:border-gray-700 p-2">Single character</td></tr>
          </tbody>
        </table>
        <h3 className="text-xl font-medium mb-3">Examples</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Starts with 'a'
SELECT * FROM Customers WHERE CustomerName LIKE 'a%';

-- Ends with 'a'
SELECT * FROM Customers WHERE CustomerName LIKE '%a';

-- Contains 'or'
SELECT * FROM Customers WHERE CustomerName LIKE '%or%';

-- Second character is 'r'
SELECT * FROM Customers WHERE CustomerName LIKE '_r%';`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_orderby.asp": {
    title: "SQL ORDER BY",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">The ORDER BY Clause</h2>
        <p className="leading-relaxed mb-4">The ORDER BY keyword sorts the result-set in ascending or descending order.</p>
        <h3 className="text-xl font-medium mb-3">Syntax</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Examples</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Ascending (default)
SELECT * FROM Customers ORDER BY Country;

-- Descending
SELECT * FROM Customers ORDER BY Country DESC;

-- Multiple columns
SELECT * FROM Customers ORDER BY Country ASC, CustomerName DESC;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_insert.asp": {
    title: "SQL INSERT INTO",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">The INSERT INTO Statement</h2>
        <p className="leading-relaxed mb-4">The INSERT INTO statement inserts new records in a table.</p>
        <h3 className="text-xl font-medium mb-3">Syntax</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Specify columns
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

-- All columns (must match order)
INSERT INTO table_name
VALUES (value1, value2, value3, ...);`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Example</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`INSERT INTO Customers (CustomerName, City, Country)
VALUES ('Cardinal', 'Stavanger', 'Norway');`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_update.asp": {
    title: "SQL UPDATE",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">The UPDATE Statement</h2>
        <p className="leading-relaxed mb-4">The UPDATE statement modifies existing records in a table.</p>
        <h3 className="text-xl font-medium mb-3">Syntax</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;`}
          </pre>
        </div>
        <p className="leading-relaxed mb-4 text-red-600 dark:text-red-400"><strong>Warning:</strong> Always use WHERE! Without it, ALL records will be updated.</p>
        <h3 className="text-xl font-medium mb-3">Example</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`UPDATE Customers
SET ContactName = 'Alfred Schmidt', City = 'Frankfurt'
WHERE CustomerID = 1;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_delete.asp": {
    title: "SQL DELETE",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">The DELETE Statement</h2>
        <p className="leading-relaxed mb-4">The DELETE statement deletes existing records from a table.</p>
        <h3 className="text-xl font-medium mb-3">Syntax</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`DELETE FROM table_name WHERE condition;

-- Delete all records
DELETE FROM table_name;`}
          </pre>
        </div>
        <p className="leading-relaxed mb-4 text-red-600 dark:text-red-400"><strong>Warning:</strong> Always use WHERE! Without it, ALL records will be deleted.</p>
      </>
    ),
  },
  "sql_join.asp": {
    title: "SQL JOINs Introduction",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">SQL JOIN</h2>
        <p className="leading-relaxed mb-4">A JOIN clause combines rows from two or more tables based on a related column.</p>
        <h3 className="text-xl font-medium mb-3">Types of JOINs</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>INNER JOIN:</strong> Returns matching records from both tables</li>
          <li><strong>LEFT JOIN:</strong> Returns all from left table + matching from right</li>
          <li><strong>RIGHT JOIN:</strong> Returns all from right table + matching from left</li>
          <li><strong>FULL JOIN:</strong> Returns all records when there is a match in either table</li>
        </ul>
      </>
    ),
  },
  "sql_inner_join.asp": {
    title: "SQL INNER JOIN",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">INNER JOIN</h2>
        <p className="leading-relaxed mb-4">The INNER JOIN keyword returns records that have matching values in both tables.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_left_join.asp": {
    title: "SQL LEFT JOIN",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">LEFT JOIN</h2>
        <p className="leading-relaxed mb-4">The LEFT JOIN returns all records from the left table and matching records from the right table.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_right_join.asp": {
    title: "SQL RIGHT JOIN",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">RIGHT JOIN</h2>
        <p className="leading-relaxed mb-4">The RIGHT JOIN returns all records from the right table and matching records from the left table.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT Orders.OrderID, Employees.LastName
FROM Orders
RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_full_join.asp": {
    title: "SQL FULL JOIN",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">FULL OUTER JOIN</h2>
        <p className="leading-relaxed mb-4">The FULL OUTER JOIN returns all records when there is a match in left or right table.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL OUTER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_self_join.asp": {
    title: "SQL Self Join",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Self Join</h2>
        <p className="leading-relaxed mb-4">A self join is a regular join where a table is joined with itself.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT A.CustomerName AS Customer1, B.CustomerName AS Customer2, A.City
FROM Customers A, Customers B
WHERE A.CustomerID <> B.CustomerID AND A.City = B.City;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_groupby.asp": {
    title: "SQL GROUP BY",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">The GROUP BY Statement</h2>
        <p className="leading-relaxed mb-4">The GROUP BY statement groups rows with the same values into summary rows, often used with aggregate functions.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_having.asp": {
    title: "SQL HAVING",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">The HAVING Clause</h2>
        <p className="leading-relaxed mb-4">HAVING filters groups after GROUP BY, similar to WHERE but for aggregated data.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_subqueries.asp": {
    title: "SQL Subqueries",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Subqueries</h2>
        <p className="leading-relaxed mb-4">A subquery is a query nested inside another query. It can be used in SELECT, INSERT, UPDATE, or DELETE statements.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- In WHERE clause
SELECT * FROM Products
WHERE Price > (SELECT AVG(Price) FROM Products);

-- In FROM clause
SELECT AVG(TotalOrders) FROM
(SELECT CustomerID, COUNT(*) AS TotalOrders FROM Orders GROUP BY CustomerID) AS OrderCounts;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_views.asp": {
    title: "SQL Views",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">SQL Views</h2>
        <p className="leading-relaxed mb-4">A view is a virtual table based on the result of a SQL statement.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Create view
CREATE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName FROM Customers
WHERE Country = 'Brazil';

-- Use view
SELECT * FROM [Brazil Customers];

-- Drop view
DROP VIEW [Brazil Customers];`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_indexes.asp": {
    title: "SQL Indexes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">SQL Indexes</h2>
        <p className="leading-relaxed mb-4">Indexes speed up searches on a database table. They are created on columns.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Create index
CREATE INDEX idx_lastname ON Persons (LastName);

-- Create unique index
CREATE UNIQUE INDEX idx_personid ON Persons (PersonID);

-- Drop index (SQL Server)
DROP INDEX table_name.index_name;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_null.asp": {
    title: "SQL NULL Values",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">NULL Values</h2>
        <p className="leading-relaxed mb-4">A NULL value represents missing or unknown data. Use IS NULL or IS NOT NULL to test for NULL.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT * FROM Customers WHERE Address IS NULL;
SELECT * FROM Customers WHERE Address IS NOT NULL;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_aliases.asp": {
    title: "SQL Aliases",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">SQL Aliases</h2>
        <p className="leading-relaxed mb-4">Aliases give tables or columns temporary names for readability.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Column alias
SELECT CustomerName AS Customer, ContactName AS [Contact Person] FROM Customers;

-- Table alias
SELECT o.OrderID, c.CustomerName
FROM Customers AS c, Orders AS o
WHERE c.CustomerID = o.CustomerID;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_functions.asp": {
    title: "SQL Aggregate Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Aggregate Functions</h2>
        <p className="leading-relaxed mb-4">Aggregate functions perform calculations on sets of values and return a single value.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT COUNT(*) FROM Products;
SELECT AVG(Price) FROM Products;
SELECT SUM(Quantity) FROM OrderDetails;
SELECT MIN(Price) AS SmallestPrice FROM Products;
SELECT MAX(Price) AS LargestPrice FROM Products;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_string_functions.asp": {
    title: "SQL String Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">String Functions</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`SELECT CONCAT(FirstName, ' ', LastName) AS FullName FROM Employees;
SELECT UPPER(CustomerName) FROM Customers;
SELECT LOWER(CustomerName) FROM Customers;
SELECT LENGTH(CustomerName) FROM Customers;
SELECT SUBSTRING(CustomerName, 1, 5) FROM Customers;
SELECT TRIM('  Hello  ');`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_date_functions.asp": {
    title: "SQL Date Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Date Functions</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Current date/time
SELECT GETDATE();  -- SQL Server
SELECT NOW();      -- MySQL

-- Extract parts
SELECT YEAR(OrderDate) FROM Orders;
SELECT MONTH(OrderDate) FROM Orders;
SELECT DAY(OrderDate) FROM Orders;

-- Date arithmetic
SELECT DATEADD(day, 30, OrderDate) FROM Orders;
SELECT DATEDIFF(day, OrderDate, ShipDate) FROM Orders;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_stored_procedures.asp": {
    title: "SQL Stored Procedures",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">Stored Procedures</h2>
        <p className="leading-relaxed mb-4">A stored procedure is prepared SQL code that can be saved and reused.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Create procedure
CREATE PROCEDURE SelectAllCustomers
AS
SELECT * FROM Customers
GO;

-- Execute procedure
EXEC SelectAllCustomers;

-- With parameter
CREATE PROCEDURE SelectCustomersByCity @City nvarchar(30)
AS
SELECT * FROM Customers WHERE City = @City
GO;

EXEC SelectCustomersByCity @City = 'London';`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_create_db.asp": {
    title: "SQL CREATE DATABASE",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">CREATE DATABASE</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`CREATE DATABASE testDB;
DROP DATABASE testDB;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_create_table.asp": {
    title: "SQL CREATE TABLE",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">CREATE TABLE</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_alter.asp": {
    title: "SQL ALTER TABLE",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">ALTER TABLE</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Add column
ALTER TABLE Customers ADD Email varchar(255);

-- Drop column
ALTER TABLE Customers DROP COLUMN Email;

-- Modify column
ALTER TABLE Customers ALTER COLUMN Email varchar(100);`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_drop.asp": {
    title: "SQL DROP TABLE",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">DROP TABLE</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`-- Delete table
DROP TABLE Shippers;

-- Delete data only
TRUNCATE TABLE Shippers;`}
          </pre>
        </div>
      </>
    ),
  },
  "sql_constraints.asp": {
    title: "SQL Constraints",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">SQL Constraints</h2>
        <p className="leading-relaxed mb-4">Constraints are rules enforced on data columns in a table.</p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int CHECK (Age >= 18),
    City varchar(255) DEFAULT 'Unknown',
    UNIQUE (ID),
    PRIMARY KEY (ID)
);

-- Foreign Key
CREATE TABLE Orders (
    OrderID int NOT NULL PRIMARY KEY,
    PersonID int FOREIGN KEY REFERENCES Persons(ID)
);`}
          </pre>
        </div>
      </>
    ),
  },
};
