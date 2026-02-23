import React from "react";

const CsharpLogical: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      C# Logical Operators
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Similar to comparison operators, <b>logical operators</b> are used to test for <b>True</b> or <b>False</b> values.
      They help determine the logic between two or more conditions.
    </p>

    <p className=" leading-relaxed mt-3">
      Logical operators are often used in <b>if statements</b> or loops to control the flow of the program
      based on multiple conditions.
    </p>

    <h2 className="text-2xl font-bold  mt-6">List of Logical Operators</h2>
    <p className=" leading-relaxed mt-3">
      The table below shows the most commonly used logical operators in C#:
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
            <td className="py-2 px-3 border-b border-gray-300 font-mono">&amp;&amp;</td>
            <td className="py-2 px-3 border-b border-gray-300">Logical AND</td>
            <td className="py-2 px-3 border-b border-gray-300">
              Returns <b>True</b> if both statements are true
            </td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x &lt; 5 &amp;&amp; x &lt; 10</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">||</td>
            <td className="py-2 px-3 border-b border-gray-300">Logical OR</td>
            <td className="py-2 px-3 border-b border-gray-300">
              Returns <b>True</b> if at least one of the statements is true
            </td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x &lt; 5 || x &lt; 4</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">!</td>
            <td className="py-2 px-3 border-b border-gray-300">Logical NOT</td>
            <td className="py-2 px-3 border-b border-gray-300">
              Reverses the result; returns <b>False</b> if the statement is true
            </td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">!(x &lt; 5 &amp;&amp; x &lt; 10)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className=" leading-relaxed mt-6">
      ✅ These operators are very useful when combining multiple conditions in your programs,
      for example in <b>if</b> statements or <b>loops</b>.
    </p>
  </>
);

export default CsharpLogical;
