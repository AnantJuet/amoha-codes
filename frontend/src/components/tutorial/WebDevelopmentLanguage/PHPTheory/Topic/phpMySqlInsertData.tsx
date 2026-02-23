import React from "react";

// Reusable code block component
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

const PhpMysqlInsertData: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">PHP MySQL – Insert Data Tutorial</h1>

      <p className="mb-4">
        After creating a database and a table, we can insert data into it using
        the <strong>INSERT INTO</strong> SQL statement.
      </p>

      <h2 className="text-2xl font-semibold mt-6">📌 SQL Insert Syntax</h2>

      <CodeBlock
        code={`INSERT INTO table_name (column1, column2, column3)
VALUES (value1, value2, value3);`}
      />

      <p className="mb-4">
        Important rules:
        <ul className="list-disc ml-6 mt-2">
          <li>SQL query must be inside quotes in PHP.</li>
          <li>String values must be quoted.</li>
          <li>Numeric values should NOT be quoted.</li>
          <li><code>NULL</code> must not be quoted.</li>
        </ul>
      </p>

      <p className="mb-4">
        We will insert a new record into the table <strong>MyGuests</strong>{" "}
        created earlier.
      </p>

      {/* Object Oriented MySQLi */}
      <h2 className="text-2xl font-semibold mt-6">🔹 Example 1 — MySQLi Object-Oriented</h2>

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
VALUES ('John', 'Doe', 'john@example.com')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>`}
      />

      {/* Procedural MySQLi */}
      <h2 className="text-2xl font-semibold mt-6">🔹 Example 2 — MySQLi Procedural</h2>

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
VALUES ('John', 'Doe', 'john@example.com')";

if (mysqli_query($conn, $sql)) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>`}
      />

      {/* PDO Example */}
      <h2 className="text-2xl font-semibold mt-6">🔹 Example 3 — PDO</h2>

      <CodeBlock
        code={`<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDBPDO";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $sql = "INSERT INTO MyGuests (firstname, lastname, email)
  VALUES ('John', 'Doe', 'john@example.com')";

  $conn->exec($sql);
  echo "New record created successfully";

} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>`}
      />
    </div>
  );
};

export default PhpMysqlInsertData;
