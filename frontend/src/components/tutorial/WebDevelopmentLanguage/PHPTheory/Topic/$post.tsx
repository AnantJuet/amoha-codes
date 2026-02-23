import React from "react";

const PhpPost: React.FC = () => {
  return (
    <div className="p-5 text-white">
      <h1 className="text-3xl font-bold mb-4">PHP - $_POST</h1>

      <p className="mb-4">
        <code>$_POST</code> contains an array of variables received via the HTTP{" "}
        <strong>POST</strong> method.
      </p>

      <p className="mb-4">There are two main ways to send POST data:</p>

      <ul className="list-disc ml-6 mb-4">
        <li>HTML Forms</li>
        <li>JavaScript HTTP Requests</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">$_POST in HTML Forms</h2>

      <p className="mb-4">
        A form sends data via POST when the <code>method</code> attribute is set to{" "}
        <code>&quot;POST&quot;</code>.
      </p>

      {/* HTML FORM */}
      <div className="bg-gray-900 p-4 rounded mb-4">
        <pre>
{`<html>
<body>

<form method="POST" action="demo_request.php">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

</body>
</html>`}
        </pre>
      </div>

      <p className="mb-4">
        After submission, the data is sent to the PHP file in the{" "}
        <code>action</code> attribute.
      </p>

      {/* PHP CODE */}
      <div className="bg-gray-900 p-4 rounded mb-4">
        <pre>
{`$name = $_POST['fname'];
echo $name;`}
        </pre>
      </div>

      <h3 className="text-xl font-semibold mb-2">
        POST Example (HTML + PHP in Same File)
      </h3>

      {/* HTML + PHP Combined */}
      <div className="bg-gray-900 p-4 rounded mb-4">
        <pre>
{`<html>
<body>

<form method="POST" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['fname']);
  if (empty($name)) {
    echo "Name is empty";
  } else {
    echo $name;
  }
}
?>

</body>
</html>`}
        </pre>
      </div>

      <h2 className="text-2xl font-semibold mb-3">
        $_POST in JavaScript HTTP Requests
      </h2>

      <p className="mb-4">
        In JavaScript, you can send a POST request using{" "}
        <code>XMLHttpRequest()</code>.
      </p>

      {/* JS FUNCTION */}
      <div className="bg-gray-900 p-4 rounded mb-4">
        <pre>
{`function myfunction() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "demo_phpfile.php");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.send("fname=Mary");
}`}
        </pre>
      </div>

      <p className="mb-4">The code above will:</p>

      <ul className="list-disc ml-6 mb-4">
        <li>Initiate an HTTP POST request</li>
        <li>Set a request header</li>
        <li>Send data (<code>fname=Mary</code>)</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Full HTML Example</h3>

      {/* FULL HTML PAGE WITH JS */}
      <div className="bg-gray-900 p-4 rounded mb-4">
        <pre>
{`<html>
<script>
function myfunction() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "demo_ajax.php");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.send("fname=Mary");
}
</script>

<body>

<button onclick="myfunction()">Click me!</button>

<h1 id="demo"></h1>

</body>
</html>`}
        </pre>
      </div>

      <h3 className="text-xl font-semibold mb-2">
        PHP File Receiving POST Request
      </h3>

      {/* PHP RECEIVER */}
      <div className="bg-gray-900 p-4 rounded mb-4">
        <pre>
{`$name = $_POST['fname'];
echo $name;`}
        </pre>
      </div>
    </div>
  );
};

export default PhpPost;
