import React from "react";

const CsharpMultidimensionalArrays: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      C# Multidimensional Arrays
    </h1>

    <h2 className="text-2xl font-bold mt-6">Introduction</h2>
    <p className="text-lg text-gray-700 leading-relaxed mt-2">
      Multidimensional arrays are arrays of arrays, useful for storing data in a tabular form with rows and columns. The most common type is a two-dimensional array (2D).
    </p>

    <h2 className="text-2xl font-bold mt-6">Two-Dimensional Arrays</h2>
    <p className="text-lg  mt-2">
      To create a 2D array, use curly braces for each array and separate dimensions with a comma inside square brackets:
    </p>
    <pre className="bg-gray-100 p-4 rounded-lg mt-2 text-sm">
      <code>{`int[,] numbers = { {1, 4, 2}, {3, 6, 8} };`}</code>
    </pre>
    <p className="text-lg  mt-2">
      The single comma <code>[,]</code> specifies a two-dimensional array. A three-dimensional array would use <code>[,,]</code>. Visualize it as a table with rows and columns.
    </p>

    <h2 className="text-2xl font-bold mt-6">Access Elements of a 2D Array</h2>
    <p className="text-lg mt-2">
      Specify two indexes: one for the row and one for the column:
    </p>
    <pre className="bg-gray-100 p-4 rounded-lg mt-2 text-sm">
      <code>{`int[,] numbers = { {1, 4, 2}, {3, 6, 8} };
Console.WriteLine(numbers[0, 2]);  // Outputs 2`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Change Elements of a 2D Array</h2>
    <pre className="bg-gray-100 p-4 rounded-lg mt-2 text-sm">
      <code>{`int[,] numbers = { {1, 4, 2}, {3, 6, 8} };
numbers[0, 0] = 5;  // Change value to 5
Console.WriteLine(numbers[0, 0]); // Outputs 5 instead of 1`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Loop Through a 2D Array</h2>
    <p className="text-lg  mt-2">
      You can use a <code>foreach</code> loop to iterate through all elements:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`int[,] numbers = { {1, 4, 2}, {3, 6, 8} };

foreach (int i in numbers)
{
  Console.WriteLine(i);
}`}</code>
    </pre>

    <p className="text-lg  mt-2">
      Or use nested <code>for</code> loops. Use <code>GetLength()</code> instead of <code>Length</code> for each dimension:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`int[,] numbers = { {1, 4, 2}, {3, 6, 8} };

for (int i = 0; i < numbers.GetLength(0); i++) 
{ 
  for (int j = 0; j < numbers.GetLength(1); j++) 
  { 
    Console.WriteLine(numbers[i, j]); 
  } 
}`}</code>
    </pre>
  </div>
);

export default CsharpMultidimensionalArrays;
