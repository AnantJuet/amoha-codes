import React from "react";

const PHPIncludeFiles: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP Include Files</h1>

      <p>
        The <code>include</code> (or <code>require</code>) statement takes all the text/code/markup 
        from a specified file and copies it into the file that uses the statement. 
        Including files is useful for reusing PHP, HTML, or text across multiple pages.
      </p>

      <h2 className="text-2xl font-semibold mt-6">include vs require</h2>
      <ul className="list-disc ml-6 mt-2">
        <li>
          <strong>require</strong> - Produces a fatal error (E_COMPILE_ERROR) if the file is missing, stopping the script.
        </li>
        <li>
          <strong>include</strong> - Produces a warning (E_WARNING) if the file is missing, but the script continues.
        </li>
      </ul>

      <p className="mt-2">
        Including files allows you to create standard headers, footers, or menus for all pages. 
        Update the include file, and all pages will automatically reflect the change.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Syntax</h2>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`include 'filename';
require 'filename';`}
      </pre>

      <h2 className="text-2xl font-semibold mt-6">Examples</h2>

      <h3 className="text-xl font-semibold mt-4">Example 1: Footer File</h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
echo "<p>Copyright &copy; 1999-" . date("Y") . " W3Schools.com</p>";
?>`}
      </pre>
      <p>Include it in a page:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<html>
<body>

<h1>Welcome to my home page!</h1>
<p>Some text.</p>
<p>Some more text.</p>
<?php include 'footer.php';?>

</body>
</html>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example 2: Menu File</h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
echo '<a href="/default.asp">Home</a> -
<a href="/html/default.asp">HTML Tutorial</a> -
<a href="/css/default.asp">CSS Tutorial</a> -
<a href="/js/default.asp">JavaScript Tutorial</a> -
<a href="default.asp">PHP Tutorial</a>';
?>`}
      </pre>
      <p>Include it in a page inside a div:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<html>
<body>

<div class="menu">
<?php include 'menu.php';?>
</div>

<h1>Welcome to my home page!</h1>
<p>Some text.</p>
<p>Some more text.</p>

</body>
</html>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example 3: Variables File</h3>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<?php
$color = 'red';
$car = 'BMW';
?>`}
      </pre>
      <p>Include it in a page and use variables:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<html>
<body>

<h1>Welcome to my home page!</h1>
<?php 
include 'vars.php';
echo "I have a $color $car.";
?>

</body>
</html>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Include vs Require Example</h3>
      <p>Using <code>include</code> when file doesn't exist:</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<html>
<body>

<h1>Welcome to my home page!</h1>
<?php include 'noFileExists.php';
echo "I have a $color $car.";
?>

</body>
</html>`}
      </pre>

      <p>Using <code>require</code> when file doesn't exist (script stops):</p>
      <pre className="bg-gray-200 p-3 rounded mt-2">
{`<html>
<body>

<h1>Welcome to my home page!</h1>
<?php require 'noFileExists.php';
echo "I have a $color $car.";
?>

</body>
</html>`}
      </pre>

      <p className="mt-2">
        <strong>Rule of Thumb:</strong> Use <code>require</code> for essential files, and <code>include</code> for optional files.
      </p>
    </div>
  );
};

export default PHPIncludeFiles;
