import React from 'react';

const CSharpSyntax: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
       C# Syntax
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      In the previous chapter, we created a C# file called <b>Program.cs</b>, 
      and used the following code to print <b>"Hello World"</b> to the screen:
    </p>

    <h2 className="text-2xl font-bold  mt-6">Program.cs</h2>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <pre>
{`using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");    
    }
  }
}`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold  mt-4">Result:</h3>
    <div className="bg-gray-100 border-l-4 border-gray-400 p-3 rounded-lg text-gray-800 font-mono mt-2">
      Hello World!
    </div>

    <h2 className="text-2xl font-bold mt-6">Example Explained</h2>

    <ul className="list-disc list-inside ml-5  space-y-2 mt-2 leading-relaxed">
      <li><b>Line 1:</b> <code>using System</code> means we can use classes from the <b>System</b> namespace.</li>
      <li><b>Line 2:</b> A blank line. C# ignores white space. Multiple lines make code more readable.</li>
      <li><b>Line 3:</b> <code>namespace</code> is used to organize code and acts as a container for classes and other namespaces.</li>
      <li><b>Line 4:</b> The curly braces <code>{'{}'}</code> mark the beginning and end of a block of code.</li>
      <li><b>Line 5:</b> <code>class</code> is a container for data and methods that give functionality to your program. Every C# statement must be inside a class. In our example, we named it <b>Program</b>.</li>
      <li>Don’t worry if you don’t fully understand <code>using System</code>, <code>namespace</code>, or <code>class</code> yet — you’ll learn them in later chapters.</li>
      <li><b>Line 7:</b> <code>Main()</code> is the entry point of a C# program. Any code inside its curly braces <code>{'{}'}</code> runs first.</li>
      <li><b>Line 9:</b> <code>Console</code> is a class in the <b>System</b> namespace. Its <code>WriteLine()</code> method prints text. Here, it outputs <b>"Hello World!"</b>.</li>
    </ul>

    <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 rounded-lg mt-6">
      <b>Note:</b>  
      <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
        <li>Every C# statement ends with a semicolon (<code>;</code>).</li>
        <li>C# is <b>case-sensitive</b>; <code>MyClass</code> and <code>myclass</code> are different.</li>
        <li>Unlike Java, the file name doesn’t have to match the class name — but it often does for organization.</li>
        <li>When saving, use a proper name ending with <b>".cs"</b>.</li>
        <li>Ensure C# is properly installed — see the <b>Get Started</b> chapter for setup instructions.</li>
      </ul>
    </div>

    <h3 className="text-xl font-semibold  mt-6">Expected Output:</h3>
    <div className="bg-gray-100 border-l-4 border-gray-400 p-3 rounded-lg text-gray-800 font-mono mt-2">
      Hello World!
    </div>
  </div>
);

export default CSharpSyntax;
