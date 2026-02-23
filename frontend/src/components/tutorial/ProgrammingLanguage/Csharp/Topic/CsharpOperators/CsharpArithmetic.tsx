import React from "react";

const CsharpArithmetic: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      C# Operators
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      <b>Operators</b> are special symbols used to perform operations on variables and values in C#.
      They allow you to manipulate data, perform calculations, and control logic.
    </p>

    <h2 className="text-2xl font-bold mt-6">Example</h2>
    <p className=" leading-relaxed mt-3">
      In the example below, we use the <b>+</b> operator to add two values together:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`int x = 100 + 50;`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      Although the <b>+</b> operator is often used to add two numbers, it can also be used to add a variable
      and a value, or even two variables.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`int sum1 = 100 + 50;        // 150 (100 + 50)
int sum2 = sum1 + 250;      // 400 (150 + 250)
int sum3 = sum2 + sum2;     // 800 (400 + 400)`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold  mt-8">
      Arithmetic Operators
    </h2>
    <p className=" leading-relaxed mt-3">
      Arithmetic operators are used to perform common mathematical operations like addition,
      subtraction, multiplication, and division.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 rounded-lg text-left">
        <thead>
          <tr>
            <th className="py-2 px-3 border-b border-gray-300">Operator</th>
            <th className="py-2 px-3 border-b border-gray-300">Name</th>
            <th className="py-2 px-3 border-b border-gray-300">Description</th>
            <th className="py-2 px-3 border-b border-gray-300">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">+</td>
            <td className="py-2 px-3 border-b border-gray-300">Addition</td>
            <td className="py-2 px-3 border-b border-gray-300">Adds together two values</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x + y</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">-</td>
            <td className="py-2 px-3 border-b border-gray-300">Subtraction</td>
            <td className="py-2 px-3 border-b border-gray-300">Subtracts one value from another</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x - y</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">*</td>
            <td className="py-2 px-3 border-b border-gray-300">Multiplication</td>
            <td className="py-2 px-3 border-b border-gray-300">Multiplies two values</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x * y</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">/</td>
            <td className="py-2 px-3 border-b border-gray-300">Division</td>
            <td className="py-2 px-3 border-b border-gray-300">Divides one value by another</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x / y</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">%</td>
            <td className="py-2 px-3 border-b border-gray-300">Modulus</td>
            <td className="py-2 px-3 border-b border-gray-300">
              Returns the remainder of a division
            </td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x % y</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">++</td>
            <td className="py-2 px-3 border-b border-gray-300">Increment</td>
            <td className="py-2 px-3 border-b border-gray-300">
              Increases the value of a variable by 1
            </td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x++</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">--</td>
            <td className="py-2 px-3 border-b border-gray-300">Decrement</td>
            <td className="py-2 px-3 border-b border-gray-300">
              Decreases the value of a variable by 1
            </td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x--</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default CsharpArithmetic;
