import React from "react";

const CsharpLoopThroughArrays: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      C# Loop Through Arrays
    </h1>

    <h2 className="text-2xl font-bold mt-6">Using the for Loop</h2>
    <p className="text-lg leading-relaxed mt-2">
      You can loop through array elements using a <code>for</code> loop and the <code>Length</code> property to determine how many times to run the loop:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (int i = 0; i < cars.Length; i++) 
{
  Console.WriteLine(cars[i]);
}`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Using the foreach Loop</h2>
    <p className="text-lg  mt-2">
      The <strong>foreach loop</strong> is used exclusively to loop through elements in an array. It automatically iterates over each element:
    </p>
    <h3 className="text-xl font-semibold mt-4">Syntax</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`foreach (type variableName in arrayName) 
{
  // code block to be executed
}`}</code>
    </pre>

    <h3 className="text-xl font-semibold mt-4">Example</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
foreach (string i in cars) 
{
  Console.WriteLine(i);
}`}</code>
    </pre>
  </div>
);

export default CsharpLoopThroughArrays;
