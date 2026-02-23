import React from "react";

const CsharpAssignment: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      C# Assignment Operators
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      <b>Assignment operators</b> in C# are used to assign values to variables. The most common one
      is the <b>=</b> operator, which assigns the value on the right to the variable on the left.
    </p>

    <h2 className="text-2xl font-bold  mt-6">Example</h2>
    <p className=" leading-relaxed mt-3">
      In the example below, the assignment operator (<b>=</b>) assigns the value <b>10</b> to a
      variable named <b>x</b>:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`int x = 10;`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold  mt-8">
      Addition Assignment Operator (+=)
    </h2>
    <p className=" leading-relaxed mt-3">
      The <b>+=</b> operator adds a value to a variable and assigns the result back to that same
      variable.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg shadow-md mt-3">
      <pre>
{`int x = 10;
x += 5;  // same as x = x + 5`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      ✅ After execution, the value of <b>x</b> becomes <b>15</b>.
    </p>

    <h2 className="text-2xl font-bold  mt-8">
      List of Assignment Operators
    </h2>
    <p className=" leading-relaxed mt-3">
      The table below shows all assignment operators available in C#, along with examples and their
      equivalent expanded expressions.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 rounded-lg text-left">
        <thead>
          <tr>
            <th className="py-2 px-3 border-b border-gray-300">Operator</th>
            <th className="py-2 px-3 border-b border-gray-300">Example</th>
            <th className="py-2 px-3 border-b border-gray-300">Same As</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">=</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x = 5</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x = 5</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">+=</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x += 3</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x = x + 3</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">-=</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x -= 3</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x = x - 3</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">*=</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x *= 3</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x = x * 3</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">/=</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x /= 3</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x = x / 3</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">%=
            </td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x %= 3</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x = x % 3</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">&=</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x &= 3</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x = x & 3</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">|=</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x |= 3</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x = x | 3</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">^=</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x ^= 3</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x = x ^ 3</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">&gt;&gt;=</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x &gt;&gt;= 3</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x = x &gt;&gt; 3</td>
          </tr>
          <tr>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">&lt;&lt;=</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x &lt;&lt;= 3</td>
            <td className="py-2 px-3 border-b border-gray-300 font-mono">x = x &lt;&lt; 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default CsharpAssignment;
