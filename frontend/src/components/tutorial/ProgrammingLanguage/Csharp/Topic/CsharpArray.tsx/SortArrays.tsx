import React from "react";

const CsharpSortArrays: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      C# Sort Arrays
    </h1>

    <h2 className="text-2xl font-bold mt-6">Sort an Array</h2>
    <p className="text-lg  leading-relaxed mt-2">
      C# provides the <code>Sort()</code> method to sort arrays alphabetically (for strings) or in ascending order (for numbers):
    </p>

    <h3 className="text-xl font-semibold mt-4">Example: Sorting Strings and Integers</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`// Sort a string array
string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
Array.Sort(cars);
foreach (string i in cars)
{
  Console.WriteLine(i);
}

// Sort an integer array
int[] myNumbers = {5, 1, 8, 9};
Array.Sort(myNumbers);
foreach (int i in myNumbers)
{
  Console.WriteLine(i);
}`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">System.Linq Namespace</h2>
    <p className="text-lg  mt-2">
      Other useful array methods, such as <code>Min</code>, <code>Max</code>, and <code>Sum</code>, are available in the <code>System.Linq</code> namespace:
    </p>

    <h3 className="text-xl font-semibold mt-4">Example</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`using System;
using System.Linq;

namespace MyApplication
{
  class Program
  {
    static void Main(string[] args)
    {
      int[] myNumbers = {5, 1, 8, 9};
      Console.WriteLine(myNumbers.Max());  // Largest value
      Console.WriteLine(myNumbers.Min());  // Smallest value
      Console.WriteLine(myNumbers.Sum());  // Sum of elements
    }
  }
}`}</code>
    </pre>
  </div>
);

export default CsharpSortArrays;
