import React from "react";

const PHPGet: React.FC = () => {
  return (
    <div className="p-6 space-y-6 leading-7">
      <h1 className="text-3xl font-bold">PHP Superglobal - $_GET</h1>

      <p>
        The <strong>$_GET</strong> superglobal contains an array of variables
        received through the HTTP GET method.
      </p>

      <h2 className="text-2xl font-semibold mt-5">Ways to Send GET Data</h2>
      <ul className="list-disc pl-6">
        <li>Query string in the URL</li>
        <li>HTML Forms (method="GET")</li>
      </ul>

      {/* --------------------------- QUERY STRING ------------------------------- */}

      <h2 className="text-2xl font-semibold mt-6">1. Query String in the URL</h2>
      <p>
        A query string is added at the end of a URL. Anything after the{" "}
        <strong>?</strong> symbol is part of the query string.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`<a href="demo_phpfile.php?subject=PHP&web=W3schools.com">Test $GET</a>`}
      </pre>

      <p>The above contains two key/value pairs:</p>
      <ul className="list-disc pl-6">
        <li><code>subject = PHP</code></li>
        <li><code>web = W3schools.com</code></li>
      </ul>

      <p>Inside the PHP file you can access them using <strong>$_GET</strong>.</p>

      <h3 className="text-xl font-semibold">PHP Example (demo_phpfile.php)</h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`<html>
<body>

<?php
echo "Study " . $_GET['subject'] . " at " . $_GET['web'];
?>

</body>
</html>`}
      </pre>

      {/* --------------------------- HTML FORM ------------------------------- */}

      <h2 className="text-2xl font-semibold mt-6">2. $_GET in HTML Forms</h2>
      <p>
        A form submits data using GET when its <code>method</code> is set to{" "}
        <strong>GET</strong>.
      </p>

      <h3 className="text-xl font-semibold">HTML Form Example</h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`<html>
<body>

<form action="welcome_get.php" method="GET">
  Name: <input type="text" name="name">
  E-mail: <input type="text" name="email">
  <input type="submit">
</form>

</body>
</html>`}
      </pre>

      <p>After submission, the form data appears in the URL like this:</p>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`welcome_get.php?name=John&email=john@example.com`}
      </pre>

      <p>The PHP file can read the values using <strong>$_GET</strong>:</p>

      <h3 className="text-xl font-semibold">PHP Example (welcome_get.php)</h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`<html>
<body>

Welcome <?php echo $_GET["name"]; ?><br>
Your email address is: <?php echo $_GET["email"]; ?>

</body>
</html>`}
      </pre>
    </div>
  );
};

export default PHPGet;
