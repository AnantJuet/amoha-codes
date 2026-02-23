import React from 'react';

const CSharpTutorial: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= C# Tutorial ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      C# Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 25 Sep, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      C# (pronounced C-sharp) is a modern, object-oriented programming language developed by Microsoft. 
      It is used to build Windows applications, web applications, mobile apps, games (using Unity), and enterprise software systems. 
      C# runs on the .NET runtime, enabling cross-platform applications on Windows, macOS, and Linux with .NET Core and later versions. 
      Its syntax is similar to other C-based languages like C++ and Java.
    </p>

    {/* ================= Hello World Program ================= */}
    <h2 className="text-3xl font-bold mt-6">Hello World Program</h2>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm text-gray-900 overflow-x-auto">
{`using System;

class HelloWorldProgram {
    static void Main(string[] args){
        // printing Hello World
        Console.WriteLine("Hello, World!");
    }
}`}
    </pre>
    <p className="text-lg font-semibold">Output: Hello, World!</p>

    {/* ================= Introduction to C# ================= */}
    <h2 className="text-3xl font-bold mt-6">Introduction to C#</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Introduction</li>
      <li>Installing and Setup Visual Studio Code</li>
      <li>Setting Up Environment Variables</li>
      <li>Executing Program on CMD</li>
    </ul>

    {/* ================= Basics ================= */}
    <h2 className="text-3xl font-bold mt-6">Basics</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Identifiers</li>
      <li>Variables</li>
      <li>Data Types</li>
      <li>Constants and Literals</li>
      <li>Scope of Variables</li>
      <li>Params</li>
      <li>Type Casting</li>
      <li>Comments</li>
      <li>Operators</li>
    </ul>

    {/* ================= Control Structures ================= */}
    <h2 className="text-3xl font-bold mt-6">Control Structures</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Decision Making: If-Else, Switch-Case</li>
      <li>Loops: For, While, Do-While</li>
      <li>Foreach Loop</li>
      <li>Jump Statements: Break, Continue</li>
    </ul>

    {/* ================= Arrays & Strings ================= */}
    <h2 className="text-3xl font-bold mt-6">Arrays & Strings</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Introduction to Arrays</li>
      <li>Jagged Arrays</li>
      <li>Sorting an Array</li>
      <li>Introduction to String</li>
      <li>Verbatim String Literal</li>
      <li>String vs StringBuilder</li>
    </ul>

    {/* ================= OOP Concepts ================= */}
    <h2 className="text-3xl font-bold mt-6">OOP Concepts</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Class and Objects</li>
      <li>Methods</li>
      <li>Constructors</li>
      <li>Destructors</li>
      <li>Properties</li>
      <li>Access Modifiers</li>
      <li>Abstraction</li>
      <li>Encapsulation</li>
      <li>Inheritance</li>
      <li>Method Overloading & Overriding</li>
      <li>Abstract Classes</li>
      <li>Interface</li>
    </ul>

    {/* ================= Delegates, Events and Lambdas ================= */}
    <h2 className="text-3xl font-bold mt-6">Delegates, Events & Lambdas</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Delegates</li>
      <li>Predicate Delegate</li>
      <li>Action Delegate</li>
      <li>Func Delegate</li>
      <li>Events</li>
      <li>Anonymous Methods</li>
      <li>Lambda Expressions</li>
    </ul>

    {/* ================= Tuple, ValueTuple and Indexers ================= */}
    <h2 className="text-3xl font-bold mt-6">Tuple, ValueTuple & Indexers</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Tuple</li>
      <li>Tuple Class</li>
      <li>ValueTuple</li>
      <li>ValueTuple Struct</li>
      <li>Indexers</li>
      <li>Multidimensional Indexers</li>
      <li>Overloading of Indexers</li>
    </ul>

    {/* ================= Generics ================= */}
    <h2 className="text-3xl font-bold mt-6">Generics</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Introduction</li>
      <li>Generic Classes</li>
      <li>Generic Methods</li>
      <li>Generic Constraints</li>
      <li>Collections with Generics</li>
    </ul>

    {/* ================= Exception Handling ================= */}
    <h2 className="text-3xl font-bold mt-6">Exception Handling</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Exceptions</li>
      <li>System vs Application Level Exceptions</li>
      <li>Try-Catch-Finally</li>
      <li>Multiple Catch Clauses</li>
      <li>Nesting Try-Catch Blocks</li>
    </ul>

    {/* ================= Multithreading ================= */}
    <h2 className="text-3xl font-bold mt-6">Multithreading</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Introduction</li>
      <li>Types of Threads</li>
      <li>Creating Threads</li>
      <li>Main Thread</li>
      <li>Lifecycle and States of Thread</li>
      <li>Thread Class & Priority</li>
      <li>Thread Synchronization</li>
      <li>Thread Safety & Race Conditions</li>
      <li>Joining Threads</li>
      <li>Terminating a Thread</li>
    </ul>

    {/* ================= Collections Framework ================= */}
    <h2 className="text-3xl font-bold mt-6">Collections Framework</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Array Class</li>
      <li>List, ArrayList</li>
      <li>SortedList</li>
      <li>HashSet, SortedSet</li>
      <li>Dictionary, SortedDictionary</li>
      <li>Hashtable</li>
      <li>Stack, Queue</li>
      <li>LinkedList</li>
      <li>BitArray Class</li>
    </ul>

    {/* ================= LINQ ================= */}
    <h2 className="text-3xl font-bold mt-6">LINQ (Language Integrated Query)</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Introduction</li>
      <li>Method Syntax & Query Syntax</li>
      <li>LINQ Operators and Methods</li>
      <li>LINQ Element Operators</li>
    </ul>

    {/* ================= .NET Framework ================= */}
    <h2 className="text-3xl font-bold mt-6">.NET Framework</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>What is .NET Framework</li>
      <li>.NET Framework Architecture</li>
      <li>Managed vs Unmanaged Code</li>
      <li>CIL / MSIL</li>
      <li>Common Language Runtime (CLR)</li>
    </ul>

    {/* ================= Advanced C# Features ================= */}
    <h2 className="text-3xl font-bold mt-6">Advanced C# Features</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Attributes</li>
      <li>Reflection</li>
      <li>Nullable Types</li>
      <li>Partial Classes</li>
      <li>Static Classes</li>
      <li>Anonymous Types</li>
      <li>Extension Methods</li>
      <li>Index and Range</li>
      <li>Pattern Matching</li>
    </ul>

  </div>
);

export default CSharpTutorial;
