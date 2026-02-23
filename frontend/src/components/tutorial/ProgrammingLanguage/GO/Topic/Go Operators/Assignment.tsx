import React from "react";

const GoAssignmentOperators: React.FC = () => (
  <>
    {/* Main Heading */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-17">
      Go Assignment Operators
    </h1>

    {/* Intro Paragraph */}
    <p className="text-lg  mt-4 leading-relaxed">
      Assignment operators are used to assign values to variables in Go. 
      The most basic assignment operator is the <code>=</code> operator, 
      which assigns the value on the right to the variable on the left.
    </p>

    {/* Example 1 */}
    <h2 className="text-2xl font-bold  mt-6">
      Example 1: Basic Assignment (=)
    </h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var x = 10
  fmt.Println(x)
}`}
    </pre>

    {/* Example 2 */}
    <h2 className="text-2xl font-bold  mt-6">
      Example 2: Addition Assignment (+=)
    </h2>
    <p className=" mt-2">
      The addition assignment operator (<code>+=</code>) adds a value to a variable and stores the result in that variable.
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var x = 10
  x += 5
  fmt.Println(x)
}`}
    </pre>

    {/* Table Section */}
    <h2 className="text-2xl font-bold  mt-6">
      List of Assignment Operators
    </h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left ">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Operator</th>
            <th className="py-2 px-4 border">Example</th>
            <th className="py-2 px-4 border">Same As</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border text-center">=</td>
            <td className="py-2 px-4 border">x = 5</td>
            <td className="py-2 px-4 border">x = 5</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">+=</td>
            <td className="py-2 px-4 border">x += 3</td>
            <td className="py-2 px-4 border">x = x + 3</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">-=</td>
            <td className="py-2 px-4 border">x -= 3</td>
            <td className="py-2 px-4 border">x = x - 3</td>
          </tr>
          <tr >
            <td className="py-2 px-4 border text-center">*=</td>
            <td className="py-2 px-4 border">x *= 3</td>
            <td className="py-2 px-4 border">x = x * 3</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">/=</td>
            <td className="py-2 px-4 border">x /= 3</td>
            <td className="py-2 px-4 border">x = x / 3</td>
          </tr>
          <tr >
            <td className="py-2 px-4 border text-center">%=
            </td>
            <td className="py-2 px-4 border">x %= 3</td>
            <td className="py-2 px-4 border">x = x % 3</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">&=</td>
            <td className="py-2 px-4 border">x &= 3</td>
            <td className="py-2 px-4 border">x = x & 3</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">|=</td>
            <td className="py-2 px-4 border">x |= 3</td>
            <td className="py-2 px-4 border">x = x | 3</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">^=</td>
            <td className="py-2 px-4 border">x ^= 3</td>
            <td className="py-2 px-4 border">x = x ^ 3</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">&gt;&gt;=</td>
            <td className="py-2 px-4 border">x &gt;&gt;= 3</td>
            <td className="py-2 px-4 border">x = x &gt;&gt; 3</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border text-center">&lt;&lt;=</td>
            <td className="py-2 px-4 border">x &lt;&lt;= 3</td>
            <td className="py-2 px-4 border">x = x &lt;&lt; 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default GoAssignmentOperators;
