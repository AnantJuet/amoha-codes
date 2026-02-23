import React from "react";

const GoComparisonOperators: React.FC = () => (
  <>
    {/* Main Heading */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-20">
      Go Comparison Operators
    </h1>

    {/* Intro Paragraph */}
    <p className="text-lg  mt-4 leading-relaxed">
      Comparison operators are used to compare two values in Go. 
      These operators return a boolean value — either <code>true</code> (1) or <code>false</code> (0).
    </p>

    {/* Example Section */}
    <h2 className="text-2xl font-bold  mt-6">Example</h2>
    <p className=" mt-2">
      In this example, the greater than (<code>&gt;</code>) operator is used to check if 5 is greater than 3:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var x = 5
  var y = 3
  fmt.Println(x > y) // returns true because 5 is greater than 3
}`}
    </pre>

    {/* Table Section */}
    <h2 className="text-2xl font-bold  mt-6">
      List of Comparison Operators
    </h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left ">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Operator</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border text-center">==</td>
            <td className="py-2 px-4 border">Equal to</td>
            <td className="py-2 px-4 border">x == y</td>
          </tr>
          <tr >
            <td className="py-2 px-4 border text-center">!=</td>
            <td className="py-2 px-4 border">Not equal</td>
            <td className="py-2 px-4 border">x != y</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">&gt;</td>
            <td className="py-2 px-4 border">Greater than</td>
            <td className="py-2 px-4 border">x &gt; y</td>
          </tr>
          <tr >
            <td className="py-2 px-4 border text-center">&lt;</td>
            <td className="py-2 px-4 border">Less than</td>
            <td className="py-2 px-4 border">x &lt; y</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">&gt;=</td>
            <td className="py-2 px-4 border">Greater than or equal to</td>
            <td className="py-2 px-4 border">x &gt;= y</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">&lt;=</td>
            <td className="py-2 px-4 border">Less than or equal to</td>
            <td className="py-2 px-4 border">x &lt;= y</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default GoComparisonOperators;
