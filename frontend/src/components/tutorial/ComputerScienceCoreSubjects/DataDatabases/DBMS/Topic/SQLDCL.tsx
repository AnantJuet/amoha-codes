import React from "react";

const SQLDCL: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">SQL DCL - Data Control Language</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data Control Language (DCL) commands are used to control access to data
      in the database. DCL provides security by allowing administrators to grant
      or revoke permissions to users and roles.
    </p>

    <h2 className="text-3xl font-bold mt-8">DCL Commands Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DCL Commands:

GRANT   - Give privileges to users
REVOKE  - Remove privileges from users

Privileges can be granted on:
- Tables
- Views
- Stored Procedures
- Databases
- Schemas`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Privileges</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Privilege</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">SELECT</td>
            <td className="p-3 border">Read data from table</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">INSERT</td>
            <td className="p-3 border">Add new rows</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">UPDATE</td>
            <td className="p-3 border">Modify existing rows</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DELETE</td>
            <td className="p-3 border">Remove rows</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">EXECUTE</td>
            <td className="p-3 border">Run stored procedures</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ALL PRIVILEGES</td>
            <td className="p-3 border">All available privileges</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">GRANT Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Basic syntax
GRANT privilege_list ON object TO user;

-- Grant SELECT on a table
GRANT SELECT ON employee TO john;

-- Grant multiple privileges
GRANT SELECT, INSERT, UPDATE ON employee TO john;

-- Grant all privileges
GRANT ALL PRIVILEGES ON employee TO admin;

-- Grant to multiple users
GRANT SELECT ON employee TO john, alice, bob;

-- Grant on all tables in database
GRANT SELECT ON company.* TO analyst;

-- Grant on specific columns
GRANT SELECT (name, dept) ON employee TO intern;
GRANT UPDATE (salary) ON employee TO manager;

-- Grant with GRANT OPTION (user can grant to others)
GRANT SELECT ON employee TO john WITH GRANT OPTION;

-- Create user and grant
CREATE USER 'analyst'@'localhost' IDENTIFIED BY 'password';
GRANT SELECT ON company.* TO 'analyst'@'localhost';`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">REVOKE Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Basic syntax
REVOKE privilege_list ON object FROM user;

-- Revoke specific privilege
REVOKE INSERT ON employee FROM john;

-- Revoke multiple privileges
REVOKE INSERT, UPDATE, DELETE ON employee FROM john;

-- Revoke all privileges
REVOKE ALL PRIVILEGES ON employee FROM temp_user;

-- Revoke from multiple users
REVOKE SELECT ON salary_info FROM john, alice;

-- Revoke GRANT OPTION
REVOKE GRANT OPTION ON employee FROM john;

-- CASCADE: Also revoke from users who got grant from this user
REVOKE SELECT ON employee FROM john CASCADE;

-- RESTRICT: Fail if user has granted to others
REVOKE SELECT ON employee FROM john RESTRICT;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Roles in SQL</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Roles: Named collection of privileges

-- Create role
CREATE ROLE manager;
CREATE ROLE analyst;
CREATE ROLE developer;

-- Grant privileges to role
GRANT SELECT, UPDATE ON employee TO manager;
GRANT SELECT ON reports TO analyst;
GRANT SELECT, INSERT, UPDATE, DELETE ON dev_db.* TO developer;

-- Grant role to user
GRANT manager TO john;
GRANT analyst TO alice, bob;

-- Revoke role from user
REVOKE analyst FROM alice;

-- Drop role
DROP ROLE temp_role;

-- Benefits of roles:
-- - Manage privileges for groups of users
-- - Easy to add/remove users
-- - Consistent permissions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Privilege Hierarchy</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Privilege Levels:

Global (*.*)
    ↓
Database (database.*)
    ↓
Table (database.table)
    ↓
Column (database.table.column)

Example:
-- Global admin
GRANT ALL PRIVILEGES ON *.* TO superadmin;

-- Database admin
GRANT ALL PRIVILEGES ON company.* TO db_admin;

-- Table access
GRANT SELECT ON company.employee TO user1;

-- Column access
GRANT SELECT (name, email) ON company.employee TO user2;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">View Privileges</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Check user privileges

-- MySQL
SHOW GRANTS FOR 'john'@'localhost';

-- PostgreSQL
\\du john

-- Oracle
SELECT * FROM USER_TAB_PRIVS;

-- SQL Server
SELECT * FROM fn_my_permissions(NULL, 'DATABASE');`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DCL Best Practices</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Principle of Least Privilege:</strong> Grant minimum required access</li>
        <li><strong>Use Roles:</strong> Group privileges for easier management</li>
        <li><strong>Avoid WITH GRANT OPTION:</strong> Limit who can grant privileges</li>
        <li><strong>Regular Audits:</strong> Review and revoke unused privileges</li>
        <li><strong>Separate Accounts:</strong> Different accounts for different tasks</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>GRANT gives privileges, REVOKE removes them</li>
        <li>Privileges can be on database, table, or column level</li>
        <li>Roles simplify privilege management</li>
        <li>WITH GRANT OPTION allows privilege delegation</li>
        <li>Follow principle of least privilege</li>
      </ul>
    </div>
  </div>
);

export default SQLDCL;
