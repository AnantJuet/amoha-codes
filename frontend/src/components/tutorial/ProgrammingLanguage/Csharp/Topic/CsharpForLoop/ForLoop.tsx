import React from "react";

const CsharpForLoop: React.FC = () => (
  <div className="mt-20 px-6">
    <h1 className="text-4xl font-extrabold text-gray-900 border-b-2 pb-2">
      C# For Loop
    </h1>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      When you know exactly how many times you want to loop through a block of code, use the <strong>for loop</strong> instead of a <code>while</code> loop.
    </p>

    <h2 className="text-2xl font-bold mt-6">Syntax</h2>
    <pre className="bg-gray-100 p-4 rounded-lg mt-2 text-sm">
      <code>{`for (statement 1; statement 2; statement 3) 
{
  // code block to be executed
}`}</code>
    </pre>
    <p className="text-lg text-gray-700 mt-2">
      <strong>Explanation:</strong>
    </p>
    <ul className="list-disc list-inside text-lg text-gray-700 mt-2">
      <li>Statement 1 is executed once before the code block starts.</li>
      <li>Statement 2 defines the condition for executing the code block.</li>
      <li>Statement 3 is executed after each iteration of the code block.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Example: Numbers 0 to 4</h2>
    <pre className="bg-gray-100 p-4 rounded-lg mt-2 text-sm">
      <code>{`for (int i = 0; i < 5; i++) 
{
  Console.WriteLine(i);
}`}</code>
    </pre>

    <p className="text-lg text-gray-700 mt-2">
      <strong>Explanation:</strong> Statement 1 sets the variable <code>i = 0</code>. Statement 2 runs the loop while <code>i &lt; 5</code>. Statement 3 increments <code>i++</code> after each iteration.
    </p>

    <h2 className="text-2xl font-bold mt-6">Example: Even Numbers 0 to 10</h2>
    <pre className="bg-gray-100 p-4 rounded-lg mt-2 text-sm">
      <code>{`for (int i = 0; i <= 10; i = i + 2) 
{
  Console.WriteLine(i);
}`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Nested Loops</h2>
    <p className="text-lg text-gray-700 mt-2">
      You can place a loop inside another loop. The inner loop executes for each iteration of the outer loop:
    </p>
    <pre className="bg-gray-100 p-4 rounded-lg mt-2 text-sm">
      <code>{`// Outer loop
for (int i = 1; i <= 2; ++i) 
{
  Console.WriteLine("Outer: " + i);  // Executes 2 times

  // Inner loop
  for (int j = 1; j <= 3; j++) 
  {
    Console.WriteLine(" Inner: " + j); // Executes 6 times (2 * 3)
  }
}`}</code>
    </pre>
  </div>
);

export default CsharpForLoop;
