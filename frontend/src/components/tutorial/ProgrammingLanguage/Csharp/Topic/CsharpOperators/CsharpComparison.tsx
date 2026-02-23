import React from "react";

const CsharpComparison: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      C# Comparison Operators
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      <b>Comparison operators</b> are used to compare two values or variables. This is very
      important in programming because it helps us make decisions and find answers to logical
      questions.
    </p>

    <p className="text-lg  leading-relaxed mt-3">
      The result of a comparison is always either <b>True</b> or <b>False</b>. These results are
      called <b>Boolean values</b>. You will learn more about them in the <b>Booleans</b> and{" "}
      <b>If..Else</b> chapters.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Example</h2>
    <p className=" leading-relaxed mt-3">
      In the example below, the greater than (<b>&gt;</b>) operator is used to check if 5 is greater
      than 3:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`int x = 5;
int y = 3;
Console.WriteLine(x > y); // returns True because 5 is greater than 3`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-8">
      List of Comparison Operators
    </h2>
    <p className=" leading-relaxed mt-3">
      Here’s a list of all comparison operators used in C#, along with examples:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 rounded-lg text-left">
        <thead>
          <tr>
            <th className="py-2 px-3 border-b border-gray-300">Operator</th>
            <th className="py-2 px-3 border-b border-gray-300">Name</th>
            <th className="py-2 px-3 border-b border-gray-300">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">==</td>
            <td className="py-2 px-3 border-b border-gray-300">Equal to</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x == y</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">!=</td>
            <td className="py-2 px-3 border-b border-gray-300">Not equal</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x != y</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">&gt;</td>
            <td className="py-2 px-3 border-b border-gray-300">Greater than</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x &gt; y</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">&lt;</td>
            <td className="py-2 px-3 border-b border-gray-300">Less than</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x &lt; y</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">&gt;=</td>
            <td className="py-2 px-3 border-b border-gray-300">
              Greater than or equal to
            </td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x &gt;= y</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">&lt;=</td>
            <td className="py-2 px-3 border-b border-gray-300">
              Less than or equal to
            </td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x &lt;= y</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="leading-relaxed mt-6">
      These operators are commonly used in conditions like <b>if statements</b> and loops to control
      program flow based on comparisons.
    </p>
  </>
);

export default CsharpComparison;
