import React from "react";

const SQLSecurity: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SQL Security
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      SQL security involves protecting database systems from unauthorized access, data
      breaches, and malicious attacks. It encompasses authentication, authorization,
      encryption, and protection against SQL injection.
    </p>

    <h2 className="text-3xl font-bold mt-8">User Authentication</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Create user (MySQL)
CREATE USER 'john'@'localhost' IDENTIFIED BY 'password123';

-- Create user (PostgreSQL)
CREATE USER john WITH PASSWORD 'password123';

-- Change password
ALTER USER john IDENTIFIED BY 'newpassword';

-- Drop user
DROP USER john;

-- View users
SELECT User, Host FROM mysql.user;  -- MySQL`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Privileges and Permissions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Grant specific privileges
GRANT SELECT, INSERT ON Database.Table TO 'john'@'localhost';

-- Grant all privileges on a database
GRANT ALL PRIVILEGES ON Database.* TO 'john'@'localhost';

-- Grant with option to grant others
GRANT SELECT ON Employee TO john WITH GRANT OPTION;

-- Revoke privileges
REVOKE INSERT ON Database.Table FROM 'john'@'localhost';

-- View privileges
SHOW GRANTS FOR 'john'@'localhost';`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Role-Based Access Control</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Create role
CREATE ROLE read_only;
CREATE ROLE data_entry;
CREATE ROLE admin;

-- Grant privileges to role
GRANT SELECT ON ALL TABLES IN SCHEMA public TO read_only;
GRANT SELECT, INSERT, UPDATE ON Employee TO data_entry;
GRANT ALL PRIVILEGES ON DATABASE company TO admin;

-- Assign role to user
GRANT read_only TO john;
GRANT data_entry TO jane;

-- Set default role
SET DEFAULT ROLE read_only TO john;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SQL Injection Prevention</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- VULNERABLE CODE (DON'T DO THIS!)
query = "SELECT * FROM Users WHERE username='" + input + "'";

-- If input is: ' OR '1'='1
-- Query becomes: SELECT * FROM Users WHERE username='' OR '1'='1'
-- This returns ALL users!

-- SAFE: Use parameterized queries
-- Python example:
cursor.execute("SELECT * FROM Users WHERE username = %s", (input,))

-- Java example:
PreparedStatement stmt = conn.prepareStatement(
    "SELECT * FROM Users WHERE username = ?");
stmt.setString(1, input);

-- Stored procedure (adds layer of protection)
CREATE PROCEDURE GetUser(IN p_username VARCHAR(50))
BEGIN
    SELECT * FROM Users WHERE username = p_username;
END;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Encryption</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Transparent Data Encryption (TDE)
-- Encrypts data at rest automatically

-- Column-level encryption (MySQL)
INSERT INTO Users (name, ssn)
VALUES ('John', AES_ENCRYPT('123-45-6789', 'encryption_key'));

SELECT name, AES_DECRYPT(ssn, 'encryption_key') AS ssn
FROM Users;

-- Hash passwords (never store plain text!)
INSERT INTO Users (username, password_hash)
VALUES ('john', SHA2('mypassword', 256));

-- Verify password
SELECT * FROM Users
WHERE username = 'john'
AND password_hash = SHA2('mypassword', 256);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Security Best Practices</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Principle of Least Privilege:</strong> Grant minimum required permissions</li>
        <li><strong>Use Prepared Statements:</strong> Prevent SQL injection</li>
        <li><strong>Encrypt Sensitive Data:</strong> At rest and in transit</li>
        <li><strong>Regular Audits:</strong> Monitor and log database access</li>
        <li><strong>Strong Passwords:</strong> Enforce password policies</li>
        <li><strong>Keep Updated:</strong> Apply security patches promptly</li>
        <li><strong>Backup Security:</strong> Encrypt and secure backups</li>
        <li><strong>Network Security:</strong> Use firewalls, limit access</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Auditing</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Enable audit logging (varies by DBMS)
-- MySQL
SET GLOBAL general_log = 'ON';

-- Create audit trigger
CREATE TRIGGER audit_employee_changes
AFTER UPDATE ON Employee
FOR EACH ROW
BEGIN
    INSERT INTO Audit_Log (table_name, action, user, timestamp)
    VALUES ('Employee', 'UPDATE', USER(), NOW());
END;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Always use parameterized queries to prevent SQL injection</li>
        <li>Implement role-based access control</li>
        <li>Encrypt sensitive data (passwords, PII)</li>
        <li>Audit database access and changes</li>
        <li>Follow principle of least privilege</li>
        <li>Regularly review and update security measures</li>
      </ul>
    </div>
  </div>
);

export default SQLSecurity;
