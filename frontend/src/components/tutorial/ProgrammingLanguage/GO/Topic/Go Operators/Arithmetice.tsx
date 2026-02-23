import React from "react";

const GoArithmeticOperators: React.FC = () => (
  <>
    {/* Main Heading */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-17">
      Go Arithmetic Operators
    </h1>

    {/* Intro Paragraph */}
    <p className="text-lg  mt-4 leading-relaxed">
      Arithmetic operators are used to perform common mathematical operations in Go. 
      These operators help perform addition, subtraction, multiplication, division, and more.
    </p>

    {/* Subheading */}
    <h2 className="text-2xl font-bold  mt-6">
      Arithmetic Operators
    </h2>

    {/* Operators Table */}
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left ">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Operator</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Description</th>
            <th className="py-2 px-4 border">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border text-center">+</td>
            <td className="py-2 px-4 border">Addition</td>
            <td className="py-2 px-4 border">Adds together two values</td>
            <td className="py-2 px-4 border">x + y</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">-</td>
            <td className="py-2 px-4 border">Subtraction</td>
            <td className="py-2 px-4 border">Subtracts one value from another</td>
            <td className="py-2 px-4 border">x - y</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">*</td>
            <td className="py-2 px-4 border">Multiplication</td>
            <td className="py-2 px-4 border">Multiplies two values</td>
            <td className="py-2 px-4 border">x * y</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">/</td>
            <td className="py-2 px-4 border">Division</td>
            <td className="py-2 px-4 border">Divides one value by another</td>
            <td className="py-2 px-4 border">x / y</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">%</td>
            <td className="py-2 px-4 border">Modulus</td>
            <td className="py-2 px-4 border">Returns the division remainder</td>
            <td className="py-2 px-4 border">x % y</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">++</td>
            <td className="py-2 px-4 border">Increment</td>
            <td className="py-2 px-4 border">Increases the value of a variable by 1</td>
            <td className="py-2 px-4 border">x++</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">--</td>
            <td className="py-2 px-4 border">Decrement</td>
            <td className="py-2 px-4 border">Decreases the value of a variable by 1</td>
            <td className="py-2 px-4 border">x--</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default GoArithmeticOperators;
