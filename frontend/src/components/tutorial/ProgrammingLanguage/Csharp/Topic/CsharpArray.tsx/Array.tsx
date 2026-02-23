import React from "react";

const CsharpArrays: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      C# Arrays
    </h1>

    <h2 className="text-2xl font-bold mt-6">Create an Array</h2>
    <p className="text-lg  leading-relaxed mt-2">
      Arrays are used to store multiple values in a single variable. To declare an array, define the variable type with square brackets:
    </p>
    <pre className="bg-gray-100 p-4 rounded-lg mt-2 text-sm">
      <code>{`string[] cars;`}</code>
    </pre>
    <p className="text-lg mt-2">
      You can insert values using an array literal:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
int[] myNum = {10, 20, 30, 40};`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Access Elements of an Array</h2>
    <p className="text-lg  mt-2">
      Access elements by referring to their index number. Array indexes start at 0.
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
Console.WriteLine(cars[0]);  // Outputs "Volvo"`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Change an Array Element</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`cars[0] = "Opel";
Console.WriteLine(cars[0]);  // Now outputs "Opel"`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Array Length</h2>
    <p className="text-lg text-gray-700 mt-2">
      Use the <code>Length</code> property to find out how many elements an array has:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
Console.WriteLine(cars.Length);  // Outputs 4`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Other Ways to Create an Array</h2>
    <p className="text-lg  mt-2">
      There are several ways to create an array in C#:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`// Create an array of four elements, and add values later
string[] cars = new string[4];

// Create an array of four elements and add values right away
string[] cars = new string[4] {"Volvo", "BMW", "Ford", "Mazda"};

// Create an array of four elements without specifying the size
string[] cars = new string[] {"Volvo", "BMW", "Ford", "Mazda"};

// Create an array without new keyword
string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};`}</code>
    </pre>

    <p className="text-lg  mt-2">
      If you declare an array and initialize it later, you must use the <code>new</code> keyword:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`// Declare an array
string[] cars;

// Add values using new
cars = new string[] {"Volvo", "BMW", "Ford"};

// Adding values without new (will cause an error)
cars = {"Volvo", "BMW", "Ford"};`}</code>
    </pre>
  </div>
);

export default CsharpArrays;
