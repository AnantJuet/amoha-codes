export default function PhpPreparedStatementsTutorial() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">PHP MySQL Prepared Statements</h1>

      <p>
        Prepared statements are one of the best ways to protect your database
        from <b>SQL injection attacks</b>. They allow you to execute the same SQL
        query multiple times with different values efficiently.
      </p>

      <h2 className="text-2xl font-semibold">What Are Prepared Statements?</h2>
      <p>Prepared statements work in two main steps:</p>

      <ol className="list-decimal ml-6 space-y-2">
        <li>
          <b>Prepare:</b> SQL template is created and sent to MySQL.  
          Example: <code>INSERT INTO MyGuests VALUES (?, ?, ?)</code>
        </li>
        <li>
          <b>Execute:</b> Values are bound to the placeholders and executed.  
          You can execute the query multiple times with new values each time.
        </li>
      </ol>

      <h3 className="text-xl font-semibold">Advantages</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>Faster execution because parsing happens only once.</li>
        <li>Less bandwidth—only parameters are sent during execution.</li>
        <li>Strong protection against SQL injection.</li>
      </ul>

      <hr className="my-6" />

      {/* MYSQLi Example */}
      <h2 className="text-2xl font-semibold">MySQLi Prepared Statement Example</h2>

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
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

// prepare and bind
$stmt = $conn->prepare("INSERT INTO MyGuests (firstname, lastname, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $firstname, $lastname, $email);

// Insert row 1
$firstname = "John";
$lastname = "Doe";
$email = "john@example.com";
$stmt->execute();

// Insert row 2
$firstname = "Mary";
$lastname = "Moe";
$email = "mary@example.com";
$stmt->execute();

// Insert row 3
$firstname = "Julie";
$lastname = "Dooley";
$email = "julie@example.com";
$stmt->execute();

echo "New records created successfully";

$stmt->close();
$conn->close();
?>`}
      </pre>

      <h3 className="text-xl font-semibold">Understanding bind_param()</h3>
      <p>
        The function <code>bind_param("sss", ...)</code> tells MySQL what type of
        data each parameter contains.
      </p>

      <ul className="list-disc ml-6 space-y-2">
        <li><b>i</b> – integer</li>
        <li><b>d</b> – double</li>
        <li><b>s</b> – string</li>
        <li><b>b</b> – BLOB</li>
      </ul>

      <hr className="my-6" />

      {/* PDO Example */}
      <h2 className="text-2xl font-semibold">PDO Prepared Statement Example</h2>

      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDBPDO";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // prepare SQL and bind parameters
  $stmt = $conn->prepare("INSERT INTO MyGuests (firstname, lastname, email)
                          VALUES (:firstname, :lastname, :email)");
  $stmt->bindParam(':firstname', $firstname);
  $stmt->bindParam(':lastname', $lastname);
  $stmt->bindParam(':email', $email);

  // Insert row 1
  $firstname = "John";
  $lastname = "Doe";
  $email = "john@example.com";
  $stmt->execute();

  // Insert row 2
  $firstname = "Mary";
  $lastname = "Moe";
  $email = "mary@example.com";
  $stmt->execute();

  // Insert row 3
  $firstname = "Julie";
  $lastname = "Dooley";
  $email = "julie@example.com";
  $stmt->execute();

  echo "New records created successfully";
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

$conn = null;
?>`}
      </pre>

      <p>
        PDO allows binding using named placeholders like{" "}
        <code>:firstname</code>, making the code cleaner and more readable.
      </p>

      <h2 className="text-xl font-semibold">Why Use Prepared Statements?</h2>
      <p className="leading-relaxed">
        Prepared statements ensure that user input cannot modify your query
        structure, which prevents SQL injection attacks. Always sanitize and
        validate external data before processing.
      </p>
    </div>
  );
}
