import React from 'react';

const CsharpDisplayVariables: React.FC = () => (
  <div className="mt-20"> {/* 👈 added padding for full-screen layout */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      C# Display Variables
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      The <b>WriteLine()</b> method is often used in C# to display variable values 
      to the console window.
    </p>

    <p className=" leading-relaxed mt-2">
      To combine both <b>text</b> and a <b>variable</b>, use the <b>+</b> character.
    </p>

    <h2 className="text-2xl font-bold  mt-6">
      Example: Combine Text and Variable
    </h2>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre className="overflow-x-auto whitespace-pre-wrap">
{`string name = "John";
Console.WriteLine("Hello " + name);`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold  mt-8">
      Example: Combine Two Variables
    </h2>

    <p className=" leading-relaxed mt-2">
      You can also use the <b>+</b> character to add one variable to another:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre className="overflow-x-auto whitespace-pre-wrap">
{`string firstName = "John ";
string lastName = "Doe";
string fullName = firstName + lastName;
Console.WriteLine(fullName);`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-8">
      Example: Add Numeric Values
    </h2>

    <p className=" leading-relaxed mt-2">
      For numeric values, the <b>+</b> character works as a mathematical operator.
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre className="overflow-x-auto whitespace-pre-wrap">
{`int x = 5;
int y = 6;
Console.WriteLine(x + y); // Print the value of x + y`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold  mt-8">Output:</h3>
    <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded-lg text-gray-800 font-mono mt-2">
      11
    </div>

    <h2 className="text-2xl font-bold mt-8">Explanation</h2>

    <ul className="list-disc list-inside ml-5 text-gray-700 space-y-2 mt-3 leading-relaxed">
      <li><b>x</b> stores the value <code>5</code>.</li>
      <li><b>y</b> stores the value <code>6</code>.</li>
      <li>The <b>WriteLine()</b> method displays the sum of <code>x + y</code>, which equals <b>11</b>.</li>
    </ul>
  </div>
);

export default CsharpDisplayVariables;
