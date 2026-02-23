import React from "react";

const PHPFunctions: React.FC = () => {
  return (
    <div className="p-6 space-y-6 leading-7">
      <h1 className="text-3xl font-bold">PHP Functions</h1>

      <h2 className="text-2xl font-semibold mt-6">PHP Built-in Functions</h2>
      <p>
        PHP contains over <strong>1000 built-in functions</strong> that can be
        called directly inside your script. These functions perform specific
        tasks. You can also create your own custom functions.
      </p>

      {/* -------------------------------- USER DEFINED -------------------------------- */}

      <h2 className="text-2xl font-semibold">PHP User-Defined Functions</h2>
      <p>A function is a reusable block of statements. Important notes:</p>

      <ul className="list-disc pl-6">
        <li>A function does not run automatically.</li>
        <li>It only executes when it is called.</li>
        <li>
          Function names must start with a letter or underscore and are
          case-insensitive.
        </li>
      </ul>

      <h3 className="text-xl font-semibold">Create a Function</h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`function myMessage() {
  echo "Hello world!";
}`}
      </pre>

      <h3 className="text-xl font-semibold">Call a Function</h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`function myMessage() {
  echo "Hello world!";
}

myMessage();`}
      </pre>

      <p>The function prints "Hello world!".</p>

      {/* -------------------------------- ARGUMENTS -------------------------------- */}

      <h2 className="text-2xl font-semibold">PHP Function Arguments</h2>
      <p>
        You can pass information to functions using <strong>arguments</strong>.
        Arguments are written inside parentheses.
      </p>

      <h3 className="text-xl font-semibold">Example with One Argument</h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`function familyName($fname) {
  echo "$fname Refsnes.<br>";
}

familyName("Jani");
familyName("Hege");
familyName("Stale");`}
      </pre>

      <h3 className="text-xl font-semibold">Example with Two Arguments</h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`function familyName($fname, $year) {
  echo "$fname Refsnes. Born in $year <br>";
}

familyName("Hege", "1975");
familyName("Stale", "1978");`}
      </pre>

      {/* -------------------------------- DEFAULT VALUE -------------------------------- */}

      <h2 className="text-2xl font-semibold">Default Argument Values</h2>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`function setHeight($minheight = 50) {
  echo "The height is : $minheight <br>";
}

setHeight(350);
setHeight(); // default 50
setHeight(135);`}
      </pre>

      {/* -------------------------------- RETURN VALUES -------------------------------- */}

      <h2 className="text-2xl font-semibold">PHP Functions – Returning Values</h2>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`function sum($x, $y) {
  $z = $x + $y;
  return $z;
}

echo sum(5, 10);
echo sum(7, 13);`}
      </pre>

      {/* -------------------------------- PASS BY REFERENCE -------------------------------- */}

      <h2 className="text-2xl font-semibold">Passing Arguments by Reference</h2>
      <p>
        To allow a function to modify the original variable, pass the argument
        by reference using <code>&</code>.
      </p>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`function add_five(&$value) {
  $value += 5;
}

$num = 2;
add_five($num);
echo $num; // output 7`}
      </pre>

      {/* -------------------------------- VARIADIC FUNCTIONS -------------------------------- */}

      <h2 className="text-2xl font-semibold">Variable Number of Arguments</h2>
      <p>
        Using <code>...$x</code> makes the function accept unlimited arguments.
      </p>

      <h3 className="text-xl font-semibold">Variadic Function Example</h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`function sumMyNumbers(...$x) {
  $n = 0;
  foreach ($x as $value) {
    $n += $value;
  }
  return $n;
}

echo sumMyNumbers(5, 2, 6, 2, 7, 7);`}
      </pre>

      <h3 className="text-xl font-semibold">
        Variadic Argument Must Be Last
      </h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`function myFamily($lastname, ...$firstname) {
  $txt = "";
  foreach ($firstname as $name) {
    $txt .= "Hi, $name $lastname.<br>";
  }
  return $txt;
}

echo myFamily("Doe", "Jane", "John", "Joey");`}
      </pre>

      {/* -------------------------------- LOOSE TYPING -------------------------------- */}

      <h2 className="text-2xl font-semibold">PHP is a Loosely Typed Language</h2>
      <p>
        PHP automatically converts variable types based on values.  
        In PHP 7+, you can use <strong>type declarations</strong> and optional{" "}
        <strong>strict typing</strong>.
      </p>

      <h3 className="text-xl font-semibold">Without Strict Mode</h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`function addNumbers(int $a, int $b) {
  return $a + $b;
}

echo addNumbers(5, "5 days"); 
// "5 days" becomes int(5) → output 10`}
      </pre>

      <h3 className="text-xl font-semibold">With Strict Mode Enabled</h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`<?php declare(strict_types=1);

function addNumbers(int $a, int $b) {
  return $a + $b;
}

echo addNumbers(5, "5 days"); 
// ERROR: "5 days" is not an integer`}
      </pre>

      {/* -------------------------------- RETURN TYPE DECLARATIONS -------------------------------- */}

      <h2 className="text-2xl font-semibold">PHP Return Type Declarations</h2>

      <p>
        PHP 7 allows specifying the return type using <code>:</code> after the
        argument list.
      </p>

      <h3 className="text-xl font-semibold">Return Type Example</h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`<?php declare(strict_types=1);

function addNumbers(float $a, float $b) : float {
  return $a + $b;
}

echo addNumbers(1.2, 5.2);`}
      </pre>

      <h3 className="text-xl font-semibold">Returning a Different Type</h3>

      <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
{`<?php declare(strict_types=1);

function addNumbers(float $a, float $b) : int {
  return (int)($a + $b);
}

echo addNumbers(1.2, 5.2);`}
      </pre>
    </div>
  );
};

export default PHPFunctions;
