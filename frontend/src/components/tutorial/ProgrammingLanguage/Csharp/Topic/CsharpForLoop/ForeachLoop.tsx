import React from "react";

const CsharpForeachLoop: React.FC = () => (
  <div className="mt-20 px-6">
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2">
      C# Foreach Loop
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      The <strong>foreach loop</strong> is used to loop through elements in an array or other data sets. It is useful when you do not need to know the index of the element.
    </p>

    <h2 className="text-2xl font-bold mt-6">Syntax</h2>
    <pre className="bg-gray-100 p-4 rounded-lg mt-2 text-sm">
      <code>{`foreach (type variableName in arrayName) 
{
  // code block to be executed
}`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Example: Loop Through an Array</h2>
    <pre className="bg-gray-100 p-4 rounded-lg mt-2 text-sm">
      <code>{`string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
foreach (string i in cars) 
{
  Console.WriteLine(i);
}`}</code>
    </pre>
  </div>
);

export default CsharpForeachLoop;
