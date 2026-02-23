export default function PhpCreateTableTutorial() {
  return (
    <div className="p-6 space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold">PHP MySQL: Create Table</h1>

      <p>
        A MySQL table has a unique name and contains <strong>columns</strong> and{" "}
        <strong>rows</strong>.  
        We can create a table in PHP using MySQLi or PDO.
      </p>

      <h2 className="text-2xl font-bold mt-6">Table to Create: MyGuests</h2>

      <p>This table has 5 columns:</p>
      <ul className="list-disc ml-6">
        <li>id</li>
        <li>firstname</li>
        <li>lastname</li>
        <li>email</li>
        <li>reg_date</li>
      </ul>

      <pre className="bg-gray-900 text-green-300 p-4 rounded-lg text-sm overflow-auto">
{`CREATE TABLE MyGuests (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(30) NOT NULL,
  lastname VARCHAR(30) NOT NULL,
  email VARCHAR(50),
  reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`}
      </pre>

      <h2 className="text-xl font-semibold mt-4">Notes About Columns</h2>

      <ul className="list-disc ml-6 space-y-1">
        <li><strong>NOT NULL</strong> → Column cannot be empty</li>
        <li><strong>DEFAULT</strong> → Sets a default value</li>
        <li><strong>UNSIGNED</strong> → Only positive numbers</li>
        <li><strong>AUTO_INCREMENT</strong> → Auto increases with each new row</li>
        <li><strong>PRIMARY KEY</strong> → Uniquely identifies each row</li>
      </ul>

      <hr className="my-6" />

      {/* MYSQLI OOP */}
      <h2 className="text-2xl font-bold">📌 Example: MySQLi (Object-Oriented)</h2>

      <pre className="bg-gray-900 text-green-300 p-4 rounded-lg text-sm overflow-auto">
{`<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// SQL to create table
$sql = "CREATE TABLE MyGuests (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
  echo "Table MyGuests created successfully";
} else {
  echo "Error creating table: " . $conn->error;
}

$conn->close();
?>`}
      </pre>

      {/* MYSQLI PROCEDURAL */}
      <h2 className="text-2xl font-bold">📌 Example: MySQLi (Procedural)</h2>

      <pre className="bg-gray-900 text-green-300 p-4 rounded-lg text-sm overflow-auto">
{`<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// SQL to create table
$sql = "CREATE TABLE MyGuests (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if (mysqli_query($conn, $sql)) {
  echo "Table MyGuests created successfully";
} else {
  echo "Error creating table: " . mysqli_error($conn);
}

mysqli_close($conn);
?>`}
      </pre>

      {/* PDO */}
      <h2 className="text-2xl font-bold">📌 Example: PDO</h2>

      <pre className="bg-gray-900 text-green-300 p-4 rounded-lg text-sm overflow-auto">
{`<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDBPDO";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

  // Set PDO error mode
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // SQL
  $sql = "CREATE TABLE MyGuests (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(30) NOT NULL,
  lastname VARCHAR(30) NOT NULL,
  email VARCHAR(50),
  reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )";

  // Execute
  $conn->exec($sql);
  echo "Table MyGuests created successfully";

} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>`}
      </pre>
    </div>
  );
}
