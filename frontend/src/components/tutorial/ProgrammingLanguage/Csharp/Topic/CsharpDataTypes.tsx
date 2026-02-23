import React from 'react';

const CsharpDataTypes: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      C# Data Types
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      In <b>C#</b>, every variable must have a specific data type that determines what kind of data it can store.
    </p>

    <h2 className="text-2xl font-bold  mt-6">Example:</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`int myNum = 5;               // Integer (whole number)
double myDoubleNum = 5.99D;  // Floating point number
char myLetter = 'D';         // Character
bool myBool = true;          // Boolean
string myText = "Hello";     // String`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      A data type defines the <b>size</b> and <b>type</b> of variable values. Choosing the right data type helps prevent errors, saves memory, and makes your code more readable.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Common C# Data Types:</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left ">
        <thead>
          <tr>
            <th className="border p-2">Data Type</th>
            <th className="border p-2">Size</th>
            <th className="border p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">int</td><td className="border p-2">4 bytes</td><td className="border p-2">Stores whole numbers (-2,147,483,648 to 2,147,483,647)</td></tr>
          <tr><td className="border p-2">long</td><td className="border p-2">8 bytes</td><td className="border p-2">Stores very large whole numbers</td></tr>
          <tr><td className="border p-2">float</td><td className="border p-2">4 bytes</td><td className="border p-2">Stores fractional numbers (6–7 decimal digits)</td></tr>
          <tr><td className="border p-2">double</td><td className="border p-2">8 bytes</td><td className="border p-2">Stores fractional numbers (15 decimal digits)</td></tr>
          <tr><td className="border p-2">bool</td><td className="border p-2">1 byte</td><td className="border p-2">Stores true or false values</td></tr>
          <tr><td className="border p-2">char</td><td className="border p-2">2 bytes</td><td className="border p-2">Stores a single character (e.g., 'A')</td></tr>
          <tr><td className="border p-2">string</td><td className="border p-2">2 bytes/char</td><td className="border p-2">Stores sequence of characters (text)</td></tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-8">Integer Types</h2>

    <h3 className="text-xl font-semibold mt-4">Int Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`int myNum = 100000;
Console.WriteLine(myNum);`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Long Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`long myNum = 15000000000L;
Console.WriteLine(myNum);`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-8">Floating Point Types</h2>
    <p className=" leading-relaxed mt-3">
      Use <b>float</b> or <b>double</b> for decimal numbers. End values with <b>F</b> for float and <b>D</b> for double.
    </p>

    <h3 className="text-xl font-semibold mt-4">Float Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`float myNum = 5.75F;
Console.WriteLine(myNum);`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Double Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`double myNum = 19.99D;
Console.WriteLine(myNum);`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      <b>float</b> has precision up to 7 digits, while <b>double</b> can handle about 15 digits, so it’s safer for most calculations.
    </p>

    <h2 className="text-2xl font-bold mt-8">Scientific Numbers</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`float f1 = 35e3F;
double d1 = 12E4D;
Console.WriteLine(f1);
Console.WriteLine(d1);`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-8">Booleans</h2>
    <p className=" leading-relaxed mt-3">
      Boolean data type is declared with <b>bool</b> and can only be <b>true</b> or <b>false</b>.
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`bool isCSharpFun = true;
bool isFishTasty = false;
Console.WriteLine(isCSharpFun);
Console.WriteLine(isFishTasty);`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-8">Characters</h2>
    <p className=" leading-relaxed mt-3">
      The <b>char</b> type stores a single character in single quotes.
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`char myGrade = 'B';
Console.WriteLine(myGrade);`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-8">Strings</h2>
    <p className=" leading-relaxed mt-3">
      The <b>string</b> type stores text, surrounded by double quotes.
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>{`string greeting = "Hello World";
Console.WriteLine(greeting);`}</pre>
    </div>
  </div>
);

export default CsharpDataTypes;
