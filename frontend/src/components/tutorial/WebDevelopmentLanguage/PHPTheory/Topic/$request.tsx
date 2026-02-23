import React from "react";

const PhpRequest: React.FC = () => {
  return (
    <div className="p-5 text-white">
      <h1 className="text-3xl font-bold mb-4">PHP - $_REQUEST</h1>

      <p className="mb-4">
        <code>$_REQUEST</code> is a PHP super global variable which contains submitted
        form data and cookie data. It includes values from <code>$_GET</code>,{" "}
        <code>$_POST</code>, and <code>$_COOKIE</code>.
      </p>

      <p className="mb-4">
        You can access the data using <code>$_REQUEST['fieldname']</code>.
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        Using $_REQUEST on POST Requests
      </h2>

      <p className="mb-4">
        POST requests usually come from an HTML form. Here is a simple example:
      </p>

      {/* HTML FORM EXAMPLE */}
      <div className="bg-gray-900 p-4 rounded mb-4">
        <pre>
{`<html>
<body>

<form method="post" action="demo_request.php">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

</body>
</html>`}
        </pre>
      </div>

      <p className="mb-4">
        When the user clicks submit, form data goes to <code>demo_request.php</code>.
      </p>

      <h3 className="text-xl font-semibold mb-2">PHP File:</h3>

      <div className="bg-gray-900 p-4 rounded mb-4">
        <pre>
{`$name = $_REQUEST['fname'];
echo $name;`}
        </pre>
      </div>

      <h3 className="text-xl font-semibold mb-2">
        POST Example (HTML + PHP in same file)
      </h3>

      <div className="bg-gray-900 p-4 rounded mb-4">
        <pre>
{`<html>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Name: <input type="text" name="fname">
  <input type="submit">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_REQUEST['fname']);
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
        Using $_REQUEST on GET Requests
      </h2>

      <p className="mb-4">
        GET requests can come from forms or hyperlinks with query strings.
      </p>

      <h3 className="text-xl font-semibold mb-2">HTML Link Example:</h3>

      <div className="bg-gray-900 p-4 rounded mb-4">
        <pre>
{`<html>
<body>

<a href="demo_phpfile.php?subject=PHP&web=W3schools.com">Test $GET</a>

</body>
</html>`}
        </pre>
      </div>

      <p className="mb-4">
        When the user clicks the link, the data is passed through the URL.
      </p>

      <h3 className="text-xl font-semibold mb-2">PHP File (demo_phpfile.php):</h3>

      <div className="bg-gray-900 p-4 rounded mb-4">
        <pre>
{`<html>
<body>

<?php
echo "Study " . $_REQUEST['subject'] . " at " . $_REQUEST['web'];
?>

</body>
</html>`}
        </pre>
      </div>
    </div>
  );
};

export default PhpRequest;
