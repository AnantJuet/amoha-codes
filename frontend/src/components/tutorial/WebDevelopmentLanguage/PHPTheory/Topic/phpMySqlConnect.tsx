export default function PhpMysqlConnectionTutorial() {
  return (
    <div className="p-6 space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold">PHP: Connect to MySQL</h1>

      <p>
        PHP (version 5 and later) can work with MySQL databases using two main
        extensions:
      </p>

      <ul className="list-disc ml-6">
        <li>MySQLi (MySQL Improved)</li>
        <li>PDO (PHP Data Objects)</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">MySQLi vs PDO</h2>

      <p>Both MySQLi and PDO are powerful, but each has advantages:</p>

      <ul className="list-disc ml-6">
        <li>PDO supports 12 different database systems.</li>
        <li>MySQLi supports only MySQL.</li>
        <li>PDO makes switching databases easy.</li>
        <li>MySQLi has both object-oriented and procedural APIs.</li>
        <li>Both support Prepared Statements (protection against SQL injection).</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">MySQL Examples</h2>
      <p>This tutorial shows connection examples using:</p>

      <ul className="list-disc ml-6">
        <li>MySQLi (Object-Oriented)</li>
        <li>MySQLi (Procedural)</li>
        <li>PDO</li>
      </ul>

      <h2 className="text-2xl font-bold mt-6">MySQLi Installation</h2>
      <p>
        On Windows/Linux servers, MySQLi is automatically installed when the PHP
        MySQL package is installed.
      </p>

      <h2 className="text-2xl font-bold mt-6">PDO Installation</h2>
      <p>
        PDO is included in modern PHP versions but may require enabling in older
        versions.
      </p>

      <h2 className="text-2xl font-bold mt-6">📌 Example 1 — MySQLi (Object-Oriented)</h2>

      <pre className="bg-gray-900 text-green-300 p-4 rounded-lg text-sm overflow-auto">
{`<?php
$servername = "localhost";
$username = "username";
$password = "password";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>`}
      </pre>

      <h3 className="text-xl font-semibold">Older PHP Compatibility</h3>
      <pre className="bg-gray-900 text-green-300 p-4 rounded-lg text-sm overflow-auto">
{`if (mysqli_connect_error()) {
  die("Database connection failed: " . mysqli_connect_error());
}`}
      </pre>

      <h2 className="text-2xl font-bold mt-6">📌 Example 2 — MySQLi (Procedural)</h2>

      <pre className="bg-gray-900 text-green-300 p-4 rounded-lg text-sm overflow-auto">
{`<?php
$servername = "localhost";
$username = "username";
$password = "password";

$conn = mysqli_connect($servername, $username, $password);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>`}
      </pre>

      <h2 className="text-2xl font-bold mt-6">📌 Example 3 — PDO</h2>

      <pre className="bg-gray-900 text-green-300 p-4 rounded-lg text-sm overflow-auto">
{`<?php
$servername = "localhost";
$username = "username";
$password = "password";

try {
  $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>`}
      </pre>

      <p>
        <strong>Note:</strong> PDO requires a valid database name. If none is
        provided, an exception will be thrown.
      </p>

      <h2 className="text-2xl font-bold mt-6">Closing the Connection</h2>

      <p>Connections close automatically, but can be closed manually:</p>

      <ul className="list-disc ml-6">
        <li>MySQLi OOP: <code>$conn-&gt;close();</code></li>
        <li>MySQLi Procedural: <code>mysqli_close($conn);</code></li>
        <li>PDO: <code>$conn = null;</code></li>
      </ul>
    </div>
  );
}
