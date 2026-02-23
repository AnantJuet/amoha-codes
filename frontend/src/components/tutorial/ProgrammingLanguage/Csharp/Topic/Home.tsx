import React from "react";

const CSharpHome: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-15">
      Learn C#
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      <b>C# (C-Sharp)</b> is a modern, object-oriented programming language created by Microsoft
      that runs on the <b>.NET Framework</b> and <b>.NET Core</b>. It is used to build web apps,
      desktop apps, mobile apps, games, cloud services, and much more.
    </p>

    <p className=" leading-relaxed mt-3">
      C# provides strong typing, automatic memory management, asynchronous programming support,
      LINQ, and a rich class library — making it a powerful and secure language for developers of
      all levels.
    </p>

    <p className=" leading-relaxed mt-3">
      You can practice C# easily using our online <b>"Try it Yourself"</b> editor where you can
      write C# code and instantly see the results.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Example</h2>

    <p className=" leading-relaxed mt-3">
      Here is a simple C# program that prints <b>"Hello World!"</b> to the console:
    </p>

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

    <p className=" leading-relaxed mt-4">
      ✅ This program uses the <b>Console.WriteLine()</b> method to display output on the screen.
    </p>
  </>
);

export default CSharpHome;