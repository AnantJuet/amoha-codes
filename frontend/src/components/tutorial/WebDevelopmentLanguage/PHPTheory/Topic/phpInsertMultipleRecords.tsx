import React from "react";

// Reusable Code Block Component
const CodeBlock: React.FC<{ code: string }> = ({ code }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied!");
  };

  return (
    <div className="relative my-4">
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
        <code>{code}</code>
      </pre>

      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
      >
        Copy
      </button>
    </div>
  );
};

const PhpMysqlInsertMultiple: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-4">PHP MySQL – Insert Multiple Records</h1>

      <p className="mb-4">
        To insert multiple records into a MySQL table using PHP, you can execute
        several SQL statements at once using <strong>multi_query()</strong> for MySQLi.
      </p>

      <p className="mb-4">
        In these examples, we insert 3 records into the <strong>MyGuests</strong> table.
      </p>

      <h2 className="text-2xl font-semibold mt-6">
        🔹 MySQLi (Object-Oriented)
      </h2>

      <CodeBlock
        code={`<?php
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

$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com');";
$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('Mary', 'Moe', 'mary@example.com');";
$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('Julie', 'Dooley', 'julie@example.com')";

if ($conn->multi_query($sql) === TRUE) {
  echo "New records created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>`}
      />

      <p className="mt-4">
        ✔️ Note: Each SQL query **must end with a semicolon**.
      </p>

      <h2 className="text-2xl font-semibold mt-6">
        🔹 MySQLi (Procedural)
      </h2>

      <CodeBlock
        code={`<?php
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

$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com');";
$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('Mary', 'Moe', 'mary@example.com');";
$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('Julie', 'Dooley', 'julie@example.com')";

if (mysqli_multi_query($conn, $sql)) {
  echo "New records created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>`}
      />

      <h2 className="text-2xl font-semibold mt-6">
        🔹 PDO (Transaction Based)
      </h2>

      <p className="mb-4">
        PDO does not support multi-query.  
        Instead, we use a **transaction** to insert multiple records safely.
      </p>

      <CodeBlock
        code={`<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDBPDO";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // begin the transaction
  $conn->beginTransaction();

  // Insert records
  $conn->exec("INSERT INTO MyGuests (firstname, lastname, email)
  VALUES ('John', 'Doe', 'john@example.com')");
  $conn->exec("INSERT INTO MyGuests (firstname, lastname, email)
  VALUES ('Mary', 'Moe', 'mary@example.com')");
  $conn->exec("INSERT INTO MyGuests (firstname, lastname, email)
  VALUES ('Julie', 'Dooley', 'julie@example.com')");

  // Commit changes
  $conn->commit();

  echo "New records created successfully";

} catch(PDOException $e) {

  // Rollback if error
  $conn->rollback();
  echo "Error: " . $e->getMessage();
}

$conn = null;
?>`}
      />
    </div>
  );
};

export default PhpMysqlInsertMultiple;
