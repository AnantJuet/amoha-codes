import React from "react";

const CsharpMethodParameters: React.FC = () => (
  <div className="mt-20 px-6">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      C# Method Parameters
    </h1>

    <h2 className="text-2xl font-bold mt-6">Parameters and Arguments</h2>
    <p className="text-lg leading-relaxed mt-2">
      Information can be passed to methods as parameters. Parameters act as variables inside the method and are specified inside the parentheses <code>()</code> after the method name. Multiple parameters can be separated by commas.
    </p>

    <h3 className="text-xl font-semibold mt-4">Example: Single Parameter</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`static void MyMethod(string fname) 
{
  Console.WriteLine(fname + " Refsnes");
}

static void Main(string[] args)
{
  MyMethod("Liam");
  MyMethod("Jenny");
  MyMethod("Anja");
}

// Output:
// Liam Refsnes
// Jenny Refsnes
// Anja Refsnes`}</code>
    </pre>

    <p className="text-lg mt-2">
      <strong>Note:</strong> <code>fname</code> is a parameter, while <code>"Liam"</code>, <code>"Jenny"</code>, and <code>"Anja"</code> are arguments passed to the method.
    </p>

    <h2 className="text-2xl font-bold mt-6">Multiple Parameters</h2>
    <p className="text-lg  mt-2">
      You can define multiple parameters in a method, separated by commas:
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
      <code>{`static void MyMethod(string fname, int age) 
{
  Console.WriteLine(fname + " is " + age);
}

static void Main(string[] args)
{
  MyMethod("Liam", 5);
  MyMethod("Jenny", 8);
  MyMethod("Anja", 31);
}

// Output:
// Liam is 5
// Jenny is 8
// Anja is 31`}</code>
    </pre>
  </div>
);

export default CsharpMethodParameters;
