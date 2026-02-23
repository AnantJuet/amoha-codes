import React from 'react';

const CsharpComments: React.FC = () => (
  <div className="mt-20"> {/* 👈 pushes content below navbar */}
    <h1 className="text-4xl font-extrabold    border-b-2 pb-2">
       C# Comments
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      Comments can be used to <b>explain C# code</b> and make it more readable. 
      They can also be used to <b>prevent code execution</b> when testing or debugging.
    </p>

    <h2 className="text-2xl font-bold  mt-6">Single-line Comments</h2>
    <p className=" leading-relaxed mt-2">
      Single-line comments start with two forward slashes <b>(//)</b>.  
      Any text between <b>//</b> and the end of the line is ignored by C# (it will not be executed).
    </p>

    <p className=" leading-relaxed mt-2">
      This example uses a single-line comment before a line of code:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`// This is a comment
Console.WriteLine("Hello World!");`}
      </pre>
    </div>

    <p className=" leading-relaxed mt-4">
      This example uses a single-line comment at the end of a line of code:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`Console.WriteLine("Hello World!");  // This is a comment`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-blue-600 mt-6">C# Multi-line Comments</h2>
    <p className=" leading-relaxed mt-2">
      Multi-line comments start with <b>/*</b> and end with <b>*/</b>.  
      Any text between <b>/*</b> and <b>*/</b> will be ignored by C#.
    </p>

    <p className=" leading-relaxed mt-2">
      This example uses a multi-line comment (comment block) to explain code:
    </p>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`/* The code below will print the words Hello World
to the screen, and it is amazing */
Console.WriteLine("Hello World!");`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold  mt-6">Single or Multi-line Comments?</h2>
    <p className=" leading-relaxed mt-2">
      It’s up to you which one you prefer to use.  
      Usually, <b>//</b> is used for short, single-line comments, and  
      <b>/* ... */</b> is used for longer, descriptive comment blocks.
    </p>
  </div>
);

export default CsharpComments;
