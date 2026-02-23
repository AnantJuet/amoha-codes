import React from "react";

const PhpVariables: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">PHP Variables</h1>

      <p>
        Variables in PHP are containers used to store data. A variable always
        starts with the <b>$</b> sign, followed by its name.
      </p>

      {/* Creating variables */}
      <h2 className="text-xl font-semibold">Creating (Declaring) PHP Variables</h2>
      <p>PHP creates a variable automatically when you assign a value to it.</p>

      <pre className="bg-gray-200 p-3 rounded">
{`$x = 5;
$y = "John";`}
      </pre>

      <p>
        Always wrap string values in quotes. PHP does not require a specific
        command to declare a variable—it's created when assigned.
      </p>

      {/* Rules */}
      <h2 className="text-xl font-semibold">Rules for PHP Variables</h2>
      <ul className="list-disc ml-6">
        <li>A variable starts with the <b>$</b> sign</li>
        <li>Must start with a letter or underscore</li>
        <li>Cannot start with a number</li>
        <li>Can include letters, numbers, and underscores</li>
        <li>Variable names are case-sensitive</li>
      </ul>

      {/* Output variables */}
      <h2 className="text-xl font-semibold">Output Variables</h2>
      <p>You can output variables using the <code>echo</code> statement.</p>

      <pre className="bg-gray-200 p-3 rounded">
{`$txt = "W3Schools.com";
echo "I love $txt!";`}
      </pre>

      <p>Or using concatenation:</p>

      <pre className="bg-gray-200 p-3 rounded">
{`$txt = "W3Schools.com";
echo "I love " . $txt . "!";`}
      </pre>

      <p>Outputting a sum:</p>

      <pre className="bg-gray-200 p-3 rounded">
{`$x = 5;
$y = 4;
echo $x + $y;`}
      </pre>

      {/* Loose typing */}
      <h2 className="text-xl font-semibold">PHP is a Loosely Typed Language</h2>
      <p>
        PHP does not require declaring the data type. The type is automatically
        assigned based on the value.
      </p>

      <pre className="bg-gray-200 p-3 rounded">
{`$x = 5;      // integer
$y = "John"; // string`}
      </pre>

      <p>
        PHP allows adding a string and a number without an error. Optionally,
        PHP 7+ supports type declarations for functions.
      </p>

      {/* Variable types */}
      <h2 className="text-xl font-semibold">Variable Types</h2>
      <p>PHP supports several data types:</p>
      <ul className="list-disc ml-6">
        <li>String</li>
        <li>Integer</li>
        <li>Float</li>
        <li>Boolean</li>
        <li>Array</li>
        <li>Object</li>
        <li>NULL</li>
        <li>Resource</li>
      </ul>

      {/* var_dump */}
      <h2 className="text-xl font-semibold">Get the Type</h2>
      <p>Use <code>var_dump()</code> to display a variable’s type and value.</p>

      <pre className="bg-gray-200 p-3 rounded">
{`$x = 5;
var_dump($x);`}
      </pre>

      <p>More examples:</p>

      <pre className="bg-gray-200 p-3 rounded">
{`var_dump(5);
var_dump("John");
var_dump(3.14);
var_dump(true);
var_dump([2, 3, 56]);
var_dump(NULL);`}
      </pre>

      {/* string assign */}
      <h2 className="text-xl font-semibold">Assign String to a Variable</h2>

      <pre className="bg-gray-200 p-3 rounded">
{`$x = "John";
echo $x;`}
      </pre>

      {/* multiple values */}
      <h2 className="text-xl font-semibold">Assign Multiple Values</h2>
      <p>You can assign the same value to multiple variables in one line:</p>

      <pre className="bg-gray-200 p-3 rounded">
{`$x = $y = $z = "Fruit";`}
      </pre>
    </div>
  );
};

export default PhpVariables;
