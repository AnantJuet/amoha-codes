import React from "react";

const PHPOperators: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP Operators</h1>

      <p>
        Operators are used to perform operations on variables and values. PHP
        offers many operator types grouped as:
      </p>

      <ul className="list-disc ml-6 mt-2">
        <li>Arithmetic Operators</li>
        <li>Assignment Operators</li>
        <li>Comparison Operators</li>
        <li>Increment/Decrement Operators</li>
        <li>Logical Operators</li>
        <li>String Operators</li>
        <li>Array Operators</li>
        <li>Conditional Assignment Operators</li>
      </ul>

      {/* Arithmetic */}
      <h2 className="text-2xl font-semibold mt-6">PHP Arithmetic Operators</h2>
      <p>Used for basic numeric calculations like +, −, ×, ÷ etc.</p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`+   Addition            $x + $y
-   Subtraction         $x - $y
*   Multiplication      $x * $y
/   Division            $x / $y
%   Modulus             $x % $y
**  Exponentiation      $x ** $y
`}
      </pre>

      {/* Assignment */}
      <h2 className="text-2xl font-semibold mt-6">PHP Assignment Operators</h2>
      <p>
        The basic assignment operator is <strong>=</strong>. Other shortcuts:
      </p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`x = y     // set x to y
x += y    // x = x + y
x -= y    // x = x - y
x *= y    // x = x * y
x /= y    // x = x / y
x %= y    // x = x % y
`}
      </pre>

      {/* Comparison */}
      <h2 className="text-2xl font-semibold mt-6">PHP Comparison Operators</h2>
      <p>Used to compare values.</p>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`==   Equal
===  Identical (same value + type)
!=   Not equal
<>   Not equal
!==  Not identical
>    Greater than
<    Less than
>=   Greater or equal
<=   Less or equal
<=>  Spaceship operator
`}
      </pre>

      {/* Increment / Decrement */}
      <h2 className="text-2xl font-semibold mt-6">
        PHP Increment / Decrement Operators
      </h2>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`++$x   Pre-increment
$x++   Post-increment
--$x   Pre-decrement
$x--   Post-decrement
`}
      </pre>

      {/* Logical */}
      <h2 className="text-2xl font-semibold mt-6">PHP Logical Operators</h2>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`and   True if both true
or    True if either true
xor   True if only one is true
&&    Logical AND
||    Logical OR
!     Logical NOT
`}
      </pre>

      {/* String */}
      <h2 className="text-2xl font-semibold mt-6">PHP String Operators</h2>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`.    Concatenation
.=   Concatenation assignment
`}
      </pre>

      {/* Array */}
      <h2 className="text-2xl font-semibold mt-6">PHP Array Operators</h2>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`+     Union
==    Equality
===   Identity
!=    Inequality
<>    Inequality
!==   Non-identity
`}
      </pre>

      {/* Conditional */}
      <h2 className="text-2xl font-semibold mt-6">
        PHP Conditional Assignment Operators
      </h2>

      <pre className="bg-gray-200 p-3 rounded mt-2">
{`?:   Ternary operator
??   Null coalescing operator
`}
      </pre>
    </div>
  );
};

export default PHPOperators;
