import React from "react";

const CsharpStrings: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      C# Strings
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Strings are used for storing text. A string variable contains a collection of characters surrounded by double quotes.
    </p>

    <h2 className="text-2xl font-bold mt-6">Creating a String</h2>
    <p className="text-lg mt-2">
      Create a variable of type <code>string</code> and assign it a value:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string greeting = "Hello";`}</code>
    </pre>

    <p className="text-lg mt-2">
      A string variable can contain many words as well:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string greeting2 = "Nice to meet you!";`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">String Length</h2>
    <p className="text-lg mt-2">
      A string in C# is actually an object, which contains properties and methods to perform operations. 
      For example, the <code>Length</code> property returns the length of a string:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
Console.WriteLine("The length of the txt string is: " + txt.Length);`}</code>
    </pre>

    <h2 className="text-2xl font-bold mt-6">Other Methods</h2>
    <p className="text-lg  mt-2">
      There are many string methods available. For example, <code>ToUpper()</code> and <code>ToLower()</code> return a copy of the string converted to uppercase or lowercase:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`string txt = "Hello World";
Console.WriteLine(txt.ToUpper());   // Outputs "HELLO WORLD"
Console.WriteLine(txt.ToLower());   // Outputs "hello world"`}</code>
    </pre>
  </div>
);

export default CsharpStrings;
