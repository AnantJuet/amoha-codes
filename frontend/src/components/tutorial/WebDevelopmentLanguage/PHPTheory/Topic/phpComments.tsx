import React from "react";

const PHPOperators: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP Operators</h1>

      <p>
        Operators are used to perform actions on variables and values. PHP
        includes multiple categories of operators:
      </p>

      <ul className="list-disc ml-6 mt-2">
        <li>Arithmetic Operators</li>
        <li>Assignment Operators</li>
        <li>Comparison Operators</li>
        <li>Increment / Decrement Operators</li>
        <li>Logical Operators</li>
        <li>String Operators</li>
        <li>Array Operators</li>
        <li>Conditional Assignment Operators</li>
      </ul>

      {/* Arithmetic Operators */}
      <h2 className="text-2xl font-semibold mt-6">PHP Arithmetic Operators</h2>
      <p>Arithmetic operators perform basic mathematical operations.</p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`+   Addition            $x + $y
-   Subtraction         $x - $y
*   Multiplication      $x * $y
/   Division            $x / $y
%   Modulus             $x % $y
**  Exponentiation      $x ** $y`}
      </pre>

      {/* Assignment Operators */}
      <h2 className="text-2xl font-semibold mt-6">PHP Assignment Operators</h2>
      <p>The assignment operator sets a variable's value. Short forms include:</p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`x = y     // Assign y to x
x += y    // x = x + y
x -= y    // x = x - y
x *= y    // x = x * y
x /= y    // x = x / y
x %= y    // x = x % y`}
      </pre>

      {/* Comparison Operators */}
      <h2 className="text-2xl font-semibold mt-6">PHP Comparison Operators</h2>
      <p>Used to compare two values.</p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`==   Equal
===  Identical (same value & type)
!=   Not equal
<>   Not equal
!==  Not identical
>    Greater than
<    Less than
>=   Greater than or equal
<=   Less than or equal
<=>  Spaceship operator`}
      </pre>

      {/* Increment / Decrement */}
      <h2 className="text-2xl font-semibold mt-6">PHP Increment / Decrement Operators</h2>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`++$x   Pre-increment
$x++   Post-increment
--$x   Pre-decrement
$x--   Post-decrement`}
      </pre>

      {/* Logical Operators */}
      <h2 className="text-2xl font-semibold mt-6">PHP Logical Operators</h2>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`and   True if both conditions are true
or    True if any condition is true
xor   True if only one condition is true
&&    Logical AND
||    Logical OR
!     Logical NOT`}
      </pre>

      {/* String Operators */}
      <h2 className="text-2xl font-semibold mt-6">PHP String Operators</h2>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`.    Concatenation
.=   Concatenation assignment`}
      </pre>

      {/* Array Operators */}
      <h2 className="text-2xl font-semibold mt-6">PHP Array Operators</h2>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`+     Union of arrays
==    Equal (same key/value pairs)
===   Identical (same key/value, type, and order)
!=    Not equal
<>    Not equal
!==   Not identical`}
      </pre>

      {/* Conditional Operators */}
      <h2 className="text-2xl font-semibold mt-6">PHP Conditional Assignment Operators</h2>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`?:   Ternary operator
??   Null coalescing operator`}
      </pre>
    </div>
  );
};

export default PHPOperators;
