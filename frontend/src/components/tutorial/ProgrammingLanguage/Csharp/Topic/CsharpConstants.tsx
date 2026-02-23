import React from 'react';

const CsharpConstants: React.FC = () => (
  <div className="mt-20"> {/* 👈 pushes content below navbar */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
       C# Constants
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      In C#, if you don't want anyone (including yourself) to change or overwrite an existing value, 
      you can declare a variable as a <b>constant</b> using the <b>const</b> keyword.
    </p>

    <p className=" leading-relaxed mt-3">
      A <b>constant</b> is <b>unchangeable</b> and <b>read-only</b> — once a value is assigned, it cannot be modified.
    </p>

    <h2 className="text-2xl font-bold mt-6">Declaring a Constant</h2>

    <p className=" leading-relaxed mt-2">
      To declare a constant, use the <code>const</code> keyword before the data type:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`const int myNum = 15;
myNum = 20; //  Error: Cannot modify a constant value`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold  mt-4">Explanation:</h3>
    <ul className="list-disc list-inside ml-5 \space-y-2 mt-2 leading-relaxed">
      <li><b>const</b> makes a variable value fixed and non-editable.</li>
      <li>You must assign a value when declaring a constant — it cannot be left uninitialized.</li>
      <li>Any attempt to change its value later will cause a <b>compile-time error</b>.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Example</h2>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`const double PI = 3.1416;
const int DaysInWeek = 7;

Console.WriteLine(PI);
Console.WriteLine(DaysInWeek);`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold  mt-4">Output:</h3>
    <div className="bg-gray-100 border-l-4 border-gray-400 p-3 rounded-lg text-gray-800 font-mono mt-2">
      3.1416<br />
      7
    </div>

    <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 rounded-lg mt-6">
      <b>Note:</b>
      <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
        <li>Constants improve code safety and readability.</li>
        <li>By convention, constant names are often written in <b>UPPERCASE</b> (e.g., <code>PI</code>, <code>DAYSINWEEK</code>).</li>
        <li>Constants cannot be assigned values from runtime inputs or variables — only fixed compile-time values.</li>
      </ul>
    </div>
  </div>
);

export default CsharpConstants;
