import React from "react";

const SQLInjectionPrevention: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SQL Injection Prevention
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Preventing SQL Injection requires a combination of secure coding practices, proper
      database configuration, and defense-in-depth strategies. Parameterized queries are
      the primary defense against SQL injection attacks.
    </p>

    <h2 className="text-3xl font-bold mt-8">Prevention Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Effectiveness</th>
            <th className="p-3 border">Implementation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Parameterized Queries</td>
            <td className="p-3 border">Primary defense</td>
            <td className="p-3 border">Code level</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Stored Procedures</td>
            <td className="p-3 border">High (if parameterized)</td>
            <td className="p-3 border">Database level</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Input Validation</td>
            <td className="p-3 border">Additional layer</td>
            <td className="p-3 border">Code level</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Least Privilege</td>
            <td className="p-3 border">Damage limitation</td>
            <td className="p-3 border">Database level</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Parameterized Queries (Prepared Statements)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`VULNERABLE CODE vs SECURE CODE:

=== PHP (PDO) ===
// VULNERABLE
$sql = "SELECT * FROM users WHERE id = " . $_GET['id'];

// SECURE
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([$_GET['id']]);

=== Java (JDBC) ===
// VULNERABLE
String sql = "SELECT * FROM users WHERE id = " + id;

// SECURE
PreparedStatement stmt = conn.prepareStatement(
    "SELECT * FROM users WHERE id = ?");
stmt.setInt(1, id);

=== Python (psycopg2) ===
# VULNERABLE
cursor.execute("SELECT * FROM users WHERE id = " + id)

# SECURE
cursor.execute("SELECT * FROM users WHERE id = %s", (id,))

=== Node.js (mysql2) ===
// VULNERABLE
connection.query("SELECT * FROM users WHERE id = " + id);

// SECURE
connection.execute("SELECT * FROM users WHERE id = ?", [id]);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Stored Procedures</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Stored Procedure Example (SQL Server):

-- Creating secure stored procedure
CREATE PROCEDURE GetUserById
    @UserId INT
AS
BEGIN
    SELECT username, email
    FROM users
    WHERE id = @UserId
END

-- Calling from application
EXEC GetUserById @UserId = 123

IMPORTANT: Stored procedures must also use
parameterized queries internally!

-- STILL VULNERABLE (dynamic SQL)
CREATE PROCEDURE GetUser @Name VARCHAR(50)
AS
BEGIN
    EXEC('SELECT * FROM users WHERE name = '''
         + @Name + '''')
END`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Input Validation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Input Validation Strategies:

WHITELIST VALIDATION (Preferred):
- Accept only expected characters
- Integer IDs: /^[0-9]+$/
- Usernames: /^[a-zA-Z0-9_]{3,20}$/
- Email: Validate format strictly

TYPE CASTING:
// PHP
$id = (int)$_GET['id'];

// Python
id = int(request.args.get('id'))

ESCAPE SPECIAL CHARACTERS (Last Resort):
- Use database-specific escaping
- MySQL: mysql_real_escape_string() [deprecated]
- Not recommended as primary defense

IMPORTANT:
Input validation is a secondary defense.
ALWAYS use parameterized queries!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Database Security Measures</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Least Privilege:</strong> App user should only have necessary permissions</li>
        <li><strong>Remove Default Accounts:</strong> Delete or disable sa, root with defaults</li>
        <li><strong>Disable Dangerous Functions:</strong> xp_cmdshell, LOAD_FILE, etc.</li>
        <li><strong>Separate Read/Write Users:</strong> Different accounts for different operations</li>
        <li><strong>Network Isolation:</strong> Database should not be directly accessible from internet</li>
        <li><strong>Encrypt Sensitive Data:</strong> Hash passwords, encrypt PII</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">5. Web Application Firewall (WAF)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`WAF Rules for SQL Injection:

Block patterns containing:
- UNION SELECT
- OR 1=1
- DROP TABLE
- --  (SQL comments)
- '  (single quotes in suspicious context)
- SLEEP(), BENCHMARK()
- xp_cmdshell

Limitations:
- Can be bypassed with encoding
- May cause false positives
- Should not be sole defense

WAF is a defense layer, NOT a replacement
for secure coding!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Parameterized queries are the primary and most effective defense</li>
        <li>Never concatenate user input directly into SQL queries</li>
        <li>Use ORM frameworks that handle parameterization automatically</li>
        <li>Apply principle of least privilege to database accounts</li>
        <li>Input validation is secondary defense, not primary</li>
        <li>WAF provides additional layer but can be bypassed</li>
      </ul>
    </div>
  </div>
);

export default SQLInjectionPrevention;
