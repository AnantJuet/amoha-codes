import React from "react";

const DatabaseSecurity: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Database Security</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Database security involves protecting the database against unauthorized access,
      malicious attacks, and data corruption. It encompasses authentication, authorization,
      encryption, and auditing to ensure data confidentiality, integrity, and availability.
    </p>

    <h2 className="text-3xl font-bold mt-8">Security Threats</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Database Threats:

1. SQL Injection
   - Malicious SQL in user input
   - Can access/modify unauthorized data

2. Unauthorized Access
   - Users accessing data beyond privileges
   - Privilege escalation

3. Data Breach
   - Theft of sensitive data
   - Exposure of personal information

4. Insider Threats
   - Malicious employees
   - Accidental data exposure

5. Denial of Service
   - Overwhelming database resources
   - Making database unavailable`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SQL Injection Prevention</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SQL Injection Example:

User input: ' OR '1'='1
Query: SELECT * FROM users WHERE name = '' OR '1'='1'
Result: Returns ALL users!

Prevention Methods:

1. Parameterized Queries (Best)
   cursor.execute(
     "SELECT * FROM users WHERE name = ?",
     (user_input,)
   )

2. Prepared Statements
   PreparedStatement stmt = conn.prepareStatement(
     "SELECT * FROM users WHERE name = ?"
   );
   stmt.setString(1, userInput);

3. Input Validation
   - Whitelist allowed characters
   - Escape special characters

4. Stored Procedures
   - Define allowed operations
   - Limit direct SQL access`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Authentication</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Authentication: Verify user identity

Methods:
1. Username/Password
   CREATE USER 'admin'@'localhost'
   IDENTIFIED BY 'secure_password';

2. Multi-Factor Authentication (MFA)
   - Password + OTP
   - Password + Certificate

3. External Authentication
   - LDAP/Active Directory
   - Kerberos
   - OAuth/SSO

4. Certificate-Based
   - Client SSL certificates
   - PKI infrastructure

Best Practices:
- Strong password policies
- Account lockout after failed attempts
- Regular password rotation
- No shared accounts`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Authorization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Authorization: Control access to resources

Principle of Least Privilege:
Grant minimum permissions needed

Role-Based Access Control (RBAC):
CREATE ROLE analyst;
GRANT SELECT ON sales.* TO analyst;
GRANT analyst TO john;

Row-Level Security:
CREATE POLICY emp_policy ON employee
FOR SELECT
USING (dept_id = current_user_dept());

Column-Level Security:
GRANT SELECT (name, email) ON users TO public;
-- Salary column not accessible

Views for Security:
CREATE VIEW public_employees AS
SELECT name, dept FROM employee;
-- Hides salary column`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Encryption</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Encryption Levels:

1. At Rest (Stored Data)
   - Transparent Data Encryption (TDE)
   - Column-level encryption
   - Encrypted backups

2. In Transit (Network)
   - SSL/TLS connections
   - Encrypted replication

3. In Use (Memory)
   - Encrypted processing (emerging)

Implementation:
-- Column-level encryption
CREATE TABLE users (
    id INT,
    ssn VARBINARY(256) -- Encrypted
);

INSERT INTO users VALUES (
    1,
    AES_ENCRYPT('123-45-6789', 'secret_key')
);

SELECT id, AES_DECRYPT(ssn, 'secret_key')
FROM users;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Auditing</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Audit: Track database activities

What to Audit:
- Login/logout attempts
- Failed access attempts
- Schema changes (DDL)
- Data changes (DML)
- Privilege changes
- Configuration changes

Audit Log Example:
+----------+------+--------+--------+-------------+
| Time     | User | Action | Object | Details     |
+----------+------+--------+--------+-------------+
| 10:15:03 | john | SELECT | users  | WHERE id=1  |
| 10:15:10 | jane | UPDATE | salary | emp_id=100  |
| 10:15:20 | root | DROP   | temp   | table       |
+----------+------+--------+--------+-------------+

MySQL Audit:
SET GLOBAL general_log = 'ON';
SET GLOBAL log_output = 'TABLE';`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Security Best Practices</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Best Practice</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Access</td>
            <td className="p-3 border">Principle of least privilege</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Passwords</td>
            <td className="p-3 border">Strong policies, rotation, no sharing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Network</td>
            <td className="p-3 border">Firewall, private network, SSL</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Patching</td>
            <td className="p-3 border">Regular security updates</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Backup</td>
            <td className="p-3 border">Encrypted, tested, offsite</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Monitoring</td>
            <td className="p-3 border">Continuous auditing, alerting</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Use parameterized queries to prevent SQL injection</li>
        <li>Implement role-based access control</li>
        <li>Encrypt sensitive data at rest and in transit</li>
        <li>Enable auditing for compliance and detection</li>
        <li>Follow principle of least privilege</li>
      </ul>
    </div>
  </div>
);

export default DatabaseSecurity;
