
import React from "react";

const CsharpConcatenation: React.FC = () => (
  <div className="mt-20 ">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      C# String Concatenation
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      The <code>+</code> operator can be used between strings to combine them. This is called concatenation:
    </p>

    <h2 className="text-2xl font-bold mt-6">Example: Using + Operator</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string firstName = "John ";
string lastName = "Doe";
string name = firstName + lastName;
Console.WriteLine(name);`}</code>
    </pre>
    <p className="text-lg  mt-2">
      <strong>Note:</strong> We added a space after "John" to create a space between <code>firstName</code> and <code>lastName</code> when printed.
    </p>

    <h2 className="text-2xl font-bold mt-6">Example: Using string.Concat()</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string firstName = "John ";
string lastName = "Doe";
string name = string.Concat(firstName, lastName);
Console.WriteLine(name);`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Adding Numbers and Strings</h2>
    <p className="text-lg  mt-2">
      <strong>Warning:</strong> C# uses the <code>+</code> operator for both addition and concatenation.
    </p>
    <p className="text-lg  mt-2">
      Remember: Numbers are added. Strings are concatenated.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example: Adding Numbers</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`int x = 10;
int y = 20;
int z = x + y;  // z will be 30 (an integer)`}</code>
    </pre>

    <h3 className="text-xl font-semibold mt-4">Example: Adding Strings</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string x = "10";
string y = "20";
string z = x + y;  // z will be "1020" (a string)`}</code>
    </pre>
  </div>
);

export default CsharpConcatenation;
