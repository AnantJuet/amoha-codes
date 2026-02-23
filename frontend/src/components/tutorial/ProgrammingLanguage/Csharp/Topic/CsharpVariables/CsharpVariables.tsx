import React from 'react';

const CsharpVariables: React.FC = () => (
  <div className="mt-20"> {/* 👈 pushes content below navbar */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
       C# Variables
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Variables are <b>containers for storing data values</b>. In C#, there are different types of variables defined with different keywords.
    </p>

    <h2 className="text-2xl font-bold mt-6">Variable Types</h2>
    <ul className="list-disc list-inside ml-5  space-y-2 mt-2 leading-relaxed">
      <li><b>int</b> - stores integers (whole numbers), without decimals, such as <code>123</code> or <code>-123</code></li>
      <li><b>double</b> - stores floating point numbers, with decimals, such as <code>19.99</code> or <code>-19.99</code></li>
      <li><b>char</b> - stores single characters, such as <code>'a'</code> or <code>'B'</code>. Char values are surrounded by single quotes</li>
      <li><b>string</b> - stores text, such as <code>"Hello World"</code>. String values are surrounded by double quotes</li>
      <li><b>bool</b> - stores values with two states: <code>true</code> or <code>false</code></li>
    </ul>

    <h2 className="text-2xl font-bold  mt-6">Declaring (Creating) Variables</h2>
    <p className="text-gray-700 leading-relaxed mt-2">
      To create a variable, specify the type and assign it a value:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`type variableName = value;`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-3">
      Where <b>type</b> is a C# data type (such as <code>int</code> or <code>string</code>), and <b>variableName</b> is the name of the variable.  
      The equal sign (<b>=</b>) is used to assign a value to the variable.
    </p>

    <h2 className="text-2xl font-bold  mt-6">Example 1: String Variable</h2>
    <p className="text-gray-700 leading-relaxed mt-2">
      Create a variable called <b>name</b> of type <code>string</code> and assign it the value <b>"John"</b>:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`string name = "John";
Console.WriteLine(name);`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Example 2: Integer Variable</h2>
    <p className="text-gray-700 leading-relaxed mt-2">
      Create a variable called <b>myNum</b> of type <code>int</code> and assign it the value <b>15</b>:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`int myNum = 15;
Console.WriteLine(myNum);`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold  mt-6">Example 3: Declare First, Assign Later</h2>
    <p className=" leading-relaxed mt-2">
      You can also declare a variable without assigning a value immediately:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`int myNum;
myNum = 15;
Console.WriteLine(myNum);`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold  mt-6">Example 4: Overwriting Variables</h2>
    <p className=" leading-relaxed mt-2">
      If you assign a new value to an existing variable, it overwrites the previous one:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`int myNum = 15;
myNum = 20; // myNum is now 20
Console.WriteLine(myNum);`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold  mt-6">Other Variable Types</h2>
    <p className=" leading-relaxed mt-2">
      Here’s how to declare variables of other types in one example:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`int myNum = 5;
double myDoubleNum = 5.99D;
char myLetter = 'D';
bool myBool = true;
string myText = "Hello";`}
      </pre>
    </div>
  </div>
);

export default CsharpVariables;
