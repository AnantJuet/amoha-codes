import React from "react";

const CsharpInterpolation: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      C# String Interpolation
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Another way to combine strings is <strong>string interpolation</strong>, which substitutes the values of variables into placeholders in a string. 
      Unlike concatenation, you do not have to worry about manually adding spaces.
    </p>

    <h2 className="text-2xl font-bold mt-6">Example: String Interpolation</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string firstName = "John";
string lastName = "Doe";
string name = $"My full name is: {firstName} {lastName}";
Console.WriteLine(name);`}</code>
    </pre>
  </div>
);

export default CsharpInterpolation;
