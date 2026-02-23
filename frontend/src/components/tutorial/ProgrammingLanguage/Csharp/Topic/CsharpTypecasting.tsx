import React from 'react';

const CsharpTypecasting: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold t border-b-2 pb-2">
      C# Type Casting
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      In <b>C#</b>, <b>type casting</b> means converting a value from one data type to another.
      There are two types of casting:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <p className="font-mono">Implicit Casting: char → int → long → float → double</p>
      <p className=" font-mono mt-1">Explicit Casting: double → float → long → int → char</p>
    </div>

    <h2 className="text-2xl font-bold  mt-8">Implicit Casting</h2>
    <p className=" leading-relaxed mt-3">
      Implicit casting is done <b>automatically</b> when converting a smaller type to a larger type size.
      No manual syntax is required.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`int myInt = 9;
double myDouble = myInt;    // Automatic casting: int to double

Console.WriteLine(myInt);   // Outputs 9
Console.WriteLine(myDouble); // Outputs 9`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-8">Explicit Casting</h2>
    <p className=" leading-relaxed mt-3">
      Explicit casting must be done <b>manually</b> by placing the desired type in parentheses before the value.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`double myDouble = 9.78;
int myInt = (int) myDouble;   // Manual casting: double to int

Console.WriteLine(myDouble);  // Outputs 9.78
Console.WriteLine(myInt);     // Outputs 9`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      When converting manually, some data may be <b>lost</b>. 
      For example, converting <b>9.78</b> to <b>9</b> removes the decimal part.
    </p>

    <h2 className="text-2xl font-bold  mt-8">Type Conversion Methods</h2>
    <p className=" leading-relaxed mt-3">
      C# also provides built-in methods in the <b>Convert</b> class for converting between data types easily.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left ">
        <thead>
          <tr>
            <th className="border p-2">Method</th>
            <th className="border p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Convert.ToBoolean()</td><td className="border p-2">Converts a value to a Boolean</td></tr>
          <tr><td className="border p-2">Convert.ToDouble()</td><td className="border p-2">Converts a value to a Double</td></tr>
          <tr><td className="border p-2">Convert.ToString()</td><td className="border p-2">Converts a value to a String</td></tr>
          <tr><td className="border p-2">Convert.ToInt32()</td><td className="border p-2">Converts a value to an Int32 (int)</td></tr>
          <tr><td className="border p-2">Convert.ToInt64()</td><td className="border p-2">Converts a value to an Int64 (long)</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-xl font-semibold mt-6">Example:</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`int myInt = 10;
double myDouble = 5.25;
bool myBool = true;

Console.WriteLine(Convert.ToString(myInt));   // int → string
Console.WriteLine(Convert.ToDouble(myInt));   // int → double
Console.WriteLine(Convert.ToInt32(myDouble)); // double → int
Console.WriteLine(Convert.ToString(myBool));  // bool → string`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      These methods give you more <b>control</b> over conversions and help prevent unexpected data loss.
    </p>
  </div>
);

export default CsharpTypecasting;
