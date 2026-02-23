import React from "react";

const COperators: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">C Operators</h1>

    <p>
      Operators are used to perform operations on variables and values.
    </p>

    <p className="mt-3">
      In the example below, we use the <code>+</code> operator to add together two values:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int myNum = 100 + 50;`}
    </pre>

    <p className="mt-3">
      Although the <code>+</code> operator is often used to add together two values, like in the example above, it can also be used to add together a variable and a value, or a variable and another variable:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`int sum1 = 100 + 50;        // 150 (100 + 50)
int sum2 = sum1 + 250;      // 400 (150 + 250)
int sum3 = sum2 + sum2;     // 800 (400 + 400)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">C divides the operators into the following groups:</h2>
    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li>Arithmetic operators</li>
      <li>Assignment operators</li>
      <li>Comparison operators</li>
      <li>Logical operators</li>
      <li>Bitwise operators</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Arithmetic Operators</h2>
    <p>
      Arithmetic operators are used to perform common mathematical operations.
    </p>

    <table className="w-full mt-3 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Operator</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">+</td>
          <td className="border border-gray-300 px-4 py-2">Addition</td>
          <td className="border border-gray-300 px-4 py-2">Adds together two values</td>
          <td className="border border-gray-300 px-4 py-2">x + y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">-</td>
          <td className="border border-gray-300 px-4 py-2">Subtraction</td>
          <td className="border border-gray-300 px-4 py-2">Subtracts one value from another</td>
          <td className="border border-gray-300 px-4 py-2">x - y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">*</td>
          <td className="border border-gray-300 px-4 py-2">Multiplication</td>
          <td className="border border-gray-300 px-4 py-2">Multiplies two values</td>
          <td className="border border-gray-300 px-4 py-2">x * y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">/</td>
          <td className="border border-gray-300 px-4 py-2">Division</td>
          <td className="border border-gray-300 px-4 py-2">Divides one value by another</td>
          <td className="border border-gray-300 px-4 py-2">x / y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">%</td>
          <td className="border border-gray-300 px-4 py-2">Modulus</td>
          <td className="border border-gray-300 px-4 py-2">Returns the division remainder</td>
          <td className="border border-gray-300 px-4 py-2">x % y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">++</td>
          <td className="border border-gray-300 px-4 py-2">Increment</td>
          <td className="border border-gray-300 px-4 py-2">Increases the value by 1</td>
          <td className="border border-gray-300 px-4 py-2">++x</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">--</td>
          <td className="border border-gray-300 px-4 py-2">Decrement</td>
          <td className="border border-gray-300 px-4 py-2">Decreases the value by 1</td>
          <td className="border border-gray-300 px-4 py-2">--x</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Assignment Operators</h2>
    <p>
      Assignment operators are used to assign values to variables.
    </p>

    <table className="w-full mt-3 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Operator</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Example</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Same As</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">=</td>
          <td className="border border-gray-300 px-4 py-2">x = 5</td>
          <td className="border border-gray-300 px-4 py-2">x = 5</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">+=</td>
          <td className="border border-gray-300 px-4 py-2">x += 3</td>
          <td className="border border-gray-300 px-4 py-2">x = x + 3</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">-=</td>
          <td className="border border-gray-300 px-4 py-2">x -= 3</td>
          <td className="border border-gray-300 px-4 py-2">x = x - 3</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">*=</td>
          <td className="border border-gray-300 px-4 py-2">x *= 3</td>
          <td className="border border-gray-300 px-4 py-2">x = x * 3</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">/=</td>
          <td className="border border-gray-300 px-4 py-2">x /= 3</td>
          <td className="border border-gray-300 px-4 py-2">x = x / 3</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">%=</td>
          <td className="border border-gray-300 px-4 py-2">x %= 3</td>
          <td className="border border-gray-300 px-4 py-2">x = x % 3</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Comparison Operators</h2>
    <p>
      Comparison operators are used to compare two values (or variables). The return value of a comparison is either <code>1</code> (true) or <code>0</code> (false).
    </p>

    <table className="w-full mt-3 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Operator</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">==</td>
          <td className="border border-gray-300 px-4 py-2">Equal to</td>
          <td className="border border-gray-300 px-4 py-2">x == y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">!=</td>
          <td className="border border-gray-300 px-4 py-2">Not equal</td>
          <td className="border border-gray-300 px-4 py-2">x != y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">&gt;</td>
          <td className="border border-gray-300 px-4 py-2">Greater than</td>
          <td className="border border-gray-300 px-4 py-2">x &gt; y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">&lt;</td>
          <td className="border border-gray-300 px-4 py-2">Less than</td>
          <td className="border border-gray-300 px-4 py-2">x &lt; y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">&gt;=</td>
          <td className="border border-gray-300 px-4 py-2">Greater than or equal to</td>
          <td className="border border-gray-300 px-4 py-2">x &gt;= y</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">&lt;=</td>
          <td className="border border-gray-300 px-4 py-2">Less than or equal to</td>
          <td className="border border-gray-300 px-4 py-2">x &lt;= y</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Logical Operators</h2>
    <p>
      You can also test for true or false values with logical operators.
    </p>

    <table className="w-full mt-3 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Operator</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">&&</td>
          <td className="border border-gray-300 px-4 py-2">AND</td>
          <td className="border border-gray-300 px-4 py-2">Returns true if both statements are true</td>
          <td className="border border-gray-300 px-4 py-2">x &lt; 5 && x &lt; 10</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">||</td>
          <td className="border border-gray-300 px-4 py-2">OR</td>
          <td className="border border-gray-300 px-4 py-2">Returns true if one of the statements is true</td>
          <td className="border border-gray-300 px-4 py-2">x &lt; 5 || x &lt; 4</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">!</td>
          <td className="border border-gray-300 px-4 py-2">NOT</td>
          <td className="border border-gray-300 px-4 py-2">Reverses the result</td>
          <td className="border border-gray-300 px-4 py-2">!(x &lt; 5 && x &lt; 10)</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default COperators;
