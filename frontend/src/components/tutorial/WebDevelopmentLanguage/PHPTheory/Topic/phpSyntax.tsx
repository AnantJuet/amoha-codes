import React from "react";

const PhpSyntax: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold">PHP Syntax</h1>

      <p>
        A PHP script is executed on the server and the plain HTML result is sent back to the
        browser.
      </p>

      <h2 className="text-2xl font-semibold">Basic PHP Syntax</h2>

      <p>A PHP script starts with <code>&lt;?php</code> and ends with <code>?&gt;</code>:</p>

      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`<?php
// PHP code goes here
?>`}
      </pre>

      <p>The default file extension for PHP files is <strong>.php</strong>.</p>

      <p>
        A PHP file normally contains HTML tags along with PHP scripting code. Here is an example of
        a simple PHP file:
      </p>

      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "Hello World!";
?>

</body>
</html>`}
      </pre>

      <p className="text-yellow-700 font-semibold">
        Note: PHP statements end with a semicolon <code>;</code>.
      </p>

      <h2 className="text-2xl font-semibold">PHP Case Sensitivity</h2>

      <p>
        In PHP, keywords such as <code>if</code>, <code>else</code>, <code>while</code>,{" "}
        <code>echo</code>, functions, and user-defined functions are{" "}
        <strong>not case-sensitive</strong>.
      </p>

      <p>All three echo statements below are valid and equal:</p>

      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`<!DOCTYPE html>
<html>
<body>

<?php
ECHO "Hello World!<br>";
echo "Hello World!<br>";
EcHo "Hello World!<br>";
?>

</body>
</html>`}
      </pre>

      <p className="font-semibold">
        ⚠️ However, <strong>variable names are case-sensitive</strong>.
      </p>

      <p>
        In the example below, only the first statement displays the value because{" "}
        <code>$color</code>, <code>$COLOR</code>, and <code>$coLOR</code> are treated as{" "}
        <strong>different variables</strong>:
      </p>

      <pre className="bg-gray-100 p-4 rounded-md overflow-auto">
{`<!DOCTYPE html>
<html>
<body>

<?php
$color = "red";
echo "My car is " . $color . "<br>";
echo "My house is " . $COLOR . "<br>";
echo "My boat is " . $coLOR . "<br>";
?>

</body>
</html>`}
      </pre>
    </div>
  );
};

export default PhpSyntax;
