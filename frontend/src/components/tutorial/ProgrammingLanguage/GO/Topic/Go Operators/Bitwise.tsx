import React from "react";

const GoBitwiseOperators: React.FC = () => (
  <div className="mt-20">
    {/* Main Heading */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Go Bitwise Operators
    </h1>

    {/* Intro Paragraph */}
    <p className="text-lg  mt-4 leading-relaxed">
      Bitwise operators in Go are used to perform bit-level operations on integers. 
      They operate on the binary representations of numbers and manipulate individual bits directly.
    </p>

    {/* Table Section */}
    <h2 className="text-2xl font-bold  mt-6">Bitwise Operators</h2>

    <p className=" mt-2">
      The following table lists all bitwise operators available in Go:
    </p>

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
            <td className="py-2 px-4 border text-center">&amp;</td>
            <td className="py-2 px-4 border">AND</td>
            <td className="py-2 px-4 border">
              Sets each bit to 1 if both bits are 1
            </td>
            <td className="py-2 px-4 border">x &amp; y</td>
          </tr>
          <tr className="">
            <td className="py-2 px-4 border text-center">|</td>
            <td className="py-2 px-4 border">OR</td>
            <td className="py-2 px-4 border">
              Sets each bit to 1 if one of two bits is 1
            </td>
            <td className="py-2 px-4 border">x | y</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">^</td>
            <td className="py-2 px-4 border">XOR</td>
            <td className="py-2 px-4 border">
              Sets each bit to 1 if only one of two bits is 1
            </td>
            <td className="py-2 px-4 border">x ^ y</td>
          </tr>
          <tr className="">
            <td className="py-2 px-4 border text-center">&lt;&lt;</td>
            <td className="py-2 px-4 border">Zero fill left shift</td>
            <td className="py-2 px-4 border">
              Shifts bits to the left and pushes zeros in from the right
            </td>
            <td className="py-2 px-4 border">x &lt;&lt; 2</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">&gt;&gt;</td>
            <td className="py-2 px-4 border">Signed right shift</td>
            <td className="py-2 px-4 border">
              Shifts bits to the right, copies the leftmost bit, and drops the rightmost bits
            </td>
            <td className="py-2 px-4 border">x &gt;&gt; 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default GoBitwiseOperators;
