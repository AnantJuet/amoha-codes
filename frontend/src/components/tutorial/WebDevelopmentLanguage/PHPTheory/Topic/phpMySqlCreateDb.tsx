export default function PhpCreateDatabaseTutorial() {
  return (
    <div className="p-6 space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold">PHP: Create a MySQL Database</h1>

      <p>
        A MySQL database contains one or more tables. To create or delete a
        database, your MySQL user must have <strong>CREATE privileges</strong>.
      </p>

      <h2 className="text-2xl font-bold mt-6">
        Creating a MySQL Database (MySQLi + PDO)
      </h2>

      <p>
        The SQL <code>CREATE DATABASE</code> statement is used to create a
        database.  
        Below examples create a database named <strong>"myDB"</strong>.
      </p>

      {/* MySQLi OOP */}
      <h2 className="text-xl font-semibold mt-6">
        📌 Example: MySQLi (Object-Oriented)
      </h2>

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

// Create database
$sql = "CREATE DATABASE myDB";
if ($conn->query($sql) === TRUE) {
  echo "Database created successfully";
} else {
  echo "Error creating database: " . $conn->error;
}

$conn->close();
?>`}
      </pre>

      <p>
        <strong>Note:</strong> When creating a database, pass only the first three
        arguments: <code>servername</code>, <code>username</code>,{" "}
        <code>password</code>.
      </p>

      <p>
        <strong>Tip:</strong> If using a custom port, add an empty string for DB
        name:  
        <code>
          new mysqli("localhost", "username", "password", "", 3307);
        </code>
      </p>

      {/* MySQLi Procedural */}
      <h2 className="text-xl font-semibold mt-6">
        📌 Example: MySQLi (Procedural)
      </h2>

      <pre className="bg-gray-900 text-green-300 p-4 rounded-lg text-sm overflow-auto">
{`<?php
$servername = "localhost";
$username = "username";
$password = "password";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Create database
$sql = "CREATE DATABASE myDB";
if (mysqli_query($conn, $sql)) {
  echo "Database created successfully";
} else {
  echo "Error creating database: " . mysqli_error($conn);
}

mysqli_close($conn);
?>`}
      </pre>

      {/* PDO */}
      <h2 className="text-xl font-semibold mt-6">
        📌 Example: PDO (Creates Database "myDBPDO")
      </h2>

      <pre className="bg-gray-900 text-green-300 p-4 rounded-lg text-sm overflow-auto">
{`<?php
$servername = "localhost";
$username = "username";
$password = "password";

try {
  $conn = new PDO("mysql:host=$servername", $username, $password);

  // Enable exceptions
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // SQL to create DB
  $sql = "CREATE DATABASE myDBPDO";

  // exec() used because no result returned
  $conn->exec($sql);

  echo "Database created successfully<br>";

} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>`}
      </pre>

      <p>
        <strong>Tip:</strong> PDO uses exceptions to handle errors. If something
        goes wrong inside the <code>try</code> block, execution jumps to{" "}
        <code>catch</code>.
      </p>
    </div>
  );
}
