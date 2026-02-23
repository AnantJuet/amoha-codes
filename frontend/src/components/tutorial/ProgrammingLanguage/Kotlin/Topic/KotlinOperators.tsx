import React from "react";

const KotlinOperators: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-3">
      Kotlin Operators
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Operators are used to perform operations on variables and values. The
      values are called <strong>operands</strong>, while the operation to be
      performed is defined by an <strong>operator</strong>.
    </p>

    {/* Operator Example Table */}
    <div className="overflow-x-auto mt-4">
      <table className="bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-100 p-3 rounded-md font-mono">
        <thead>
          <tr>
            <th className="p-2">Operand</th>
            <th className="p-2">Operator</th>
            <th className="p-2">Operand</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">100</td>
            <td className="p-2">+</td>
            <td className="p-2">50</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Code Block */}
    <pre className="bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-100 p-3 rounded-md font-mono">
{`var x = 100 + 50`}
    </pre>

    <p className="mt-4">
      The <code>+</code> operator can add two values, a variable and a value, or
      two variables:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-100 p-3 rounded-md font-mono">
{`var sum1 = 100 + 50       // 150 (100 + 50)
var sum2 = sum1 + 250     // 400 (150 + 250)
var sum3 = sum2 + sum2    // 800 (400 + 400)`}
    </pre>

    <h2 className="text-2xl font-bold mt-8">
      Types of Operators in Kotlin
    </h2>
    <ul className="list-disc ml-8 mt-3 space-y-2">
      <li>Arithmetic operators</li>
      <li>Assignment operators</li>
      <li>Comparison operators</li>
      <li>Logical operators</li>
    </ul>

    {/* Arithmetic Operators Table */}
    <h3 className="text-xl font-semibold mt-8">
      Arithmetic Operators
    </h3>
    <p className="mt-2">
      Arithmetic operators are used to perform basic mathematical operations.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-gray-100 dark:bg-gray-800 rounded-lg text-left text-sm text-black dark:text-gray-100">
        <thead>
          <tr>
            <th className="p-2">Operator</th>
            <th className="p-2">Name</th>
            <th className="p-2">Description</th>
            <th className="p-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2">+</td><td>Addition</td><td>Adds two values</td><td>x + y</td></tr>
          <tr><td className="p-2">-</td><td>Subtraction</td><td>Subtracts one from another</td><td>x - y</td></tr>
          <tr><td className="p-2">*</td><td>Multiplication</td><td>Multiplies two values</td><td>x * y</td></tr>
          <tr><td className="p-2">/</td><td>Division</td><td>Divides one by another</td><td>x / y</td></tr>
          <tr><td className="p-2">%</td><td>Modulus</td><td>Returns remainder</td><td>x % y</td></tr>
          <tr><td className="p-2">++</td><td>Increment</td><td>Increases by 1</td><td>++x</td></tr>
          <tr><td className="p-2">--</td><td>Decrement</td><td>Decreases by 1</td><td>--x</td></tr>
        </tbody>
      </table>
    </div>

    {/* Assignment Operators */}
    <h3 className="text-xl font-semibold mt-10">
      Kotlin Assignment Operators
    </h3>
    <p className="mt-2">
      Assignment operators are used to assign values to variables.
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-100 p-3 rounded-md font-mono">
{`var x = 10`}
    </pre>

    <p className="mt-4">
      The addition assignment operator (<code>+=</code>) adds a value to a variable:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-black dark:text-gray-100 p-3 rounded-md font-mono">
{`var x = 10
x += 5`}
    </pre>

    {/* Assignment Operator Table */}
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-gray-100 dark:bg-gray-800 rounded-lg text-left text-sm text-black dark:text-gray-100">
        <thead>
          <tr>
            <th className="p-2">Operator</th>
            <th className="p-2">Example</th>
            <th className="p-2">Same As</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2">=</td><td>x = 5</td><td>x = 5</td></tr>
          <tr><td className="p-2">+=</td><td>x += 3</td><td>x = x + 3</td></tr>
          <tr><td className="p-2">-=</td><td>x -= 3</td><td>x = x - 3</td></tr>
          <tr><td className="p-2">*=</td><td>x *= 3</td><td>x = x * 3</td></tr>
          <tr><td className="p-2">/=</td><td>x /= 3</td><td>x = x / 3</td></tr>
          <tr><td className="p-2">%=</td><td>x %= 3</td><td>x = x % 3</td></tr>
        </tbody>
      </table>
    </div>

    {/* Comparison Operators */}
    <h3 className="text-xl font-semibold mt-10">
      Kotlin Comparison Operators
    </h3>
    <p className="mt-2">
      Comparison operators compare two values and return a{" "}
      <code>Boolean</code> (true or false).
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-gray-100 dark:bg-gray-800 rounded-lg text-left text-sm text-black dark:text-gray-100">
        <thead>
          <tr>
            <th className="p-2">Operator</th>
            <th className="p-2">Name</th>
            <th className="p-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-2">==</td><td>Equal to</td><td>x == y</td></tr>
          <tr><td className="p-2">!=</td><td>Not equal</td><td>x != y</td></tr>
          <tr><td className="p-2">&gt;</td><td>Greater than</td><td>x &gt; y</td></tr>
          <tr><td className="p-2">&lt;</td><td>Less than</td><td>x &lt; y</td></tr>
          <tr><td className="p-2">&gt;=</td><td>Greater or equal</td><td>x &gt;= y</td></tr>
          <tr><td className="p-2">&lt;=</td><td>Less or equal</td><td>x &lt;= y</td></tr>
        </tbody>
      </table>
    </div>

    {/* Logical Operators */}
    <h3 className="text-xl font-semibold mt-10">
      Kotlin Logical Operators
    </h3>
    <p className="mt-2">
      Logical operators determine the logic between variables or expressions.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-gray-100 dark:bg-gray-800 rounded-lg text-left text-sm text-black dark:text-gray-100">
        <thead>
          <tr>
            <th className="p-2">Operator</th>
            <th className="p-2">Name</th>
            <th className="p-2">Description</th>
            <th className="p-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">&amp;&amp;</td>
            <td>Logical AND</td>
            <td>Returns true if both statements are true</td>
            <td>x &lt; 5 &amp;&amp; x &lt; 10</td>
          </tr>
          <tr>
            <td className="p-2">||</td>
            <td>Logical OR</td>
            <td>Returns true if one statement is true</td>
            <td>x &lt; 5 || x &lt; 4</td>
          </tr>
          <tr>
            <td className="p-2">!</td>
            <td>Logical NOT</td>
            <td>Reverses the result</td>
            <td>!(x &lt; 5 &amp;&amp; x &lt; 10)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default KotlinOperators;
