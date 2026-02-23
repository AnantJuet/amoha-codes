import React from "react";

const CsharpMultipleVariables: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      C# Multiple Variables
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      You can declare multiple variables of the same type in a single line using a
      <b> comma-separated list</b>. This helps make your code shorter and cleaner.
    </p>

    <h2 className="text-2xl font-bold  mt-6">
      Example: Declare Many Variables
    </h2>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre className="overflow-x-auto whitespace-pre-wrap">
{`int x = 5, y = 6, z = 50;
Console.WriteLine(x + y + z);`}
      </pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this example, three variables (<b>x</b>, <b>y</b>, and <b>z</b>) of type{" "}
      <b>int</b> are declared and assigned values in one line.
    </p>

    <h2 className="text-2xl font-bold  mt-8">
      Example: Assign Same Value to Multiple Variables
    </h2>

    <p className=" leading-relaxed mt-2">
      You can also assign the <b>same value</b> to several variables in one line:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre className="overflow-x-auto whitespace-pre-wrap">
{`int x, y, z;
x = y = z = 50;
Console.WriteLine(x + y + z);`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold  mt-6">Output:</h3>
    <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded-lg text-gray-800 font-mono mt-2">
      150
    </div>

    <h2 className="text-2xl font-bold mt-8">Explanation</h2>
    <ul className="list-disc list-inside ml-5 space-y-2 mt-3 leading-relaxed">
      <li>
        <b>x</b>, <b>y</b>, and <b>z</b> are declared as <code>int</code> variables.
      </li>
      <li>They are all assigned the value <code>50</code>.</li>
      <li>
        <b>Console.WriteLine(x + y + z)</b> prints the sum of the three variables,
        which equals <b>150</b>.
      </li>
    </ul>
  </div>
);

export default CsharpMultipleVariables;
