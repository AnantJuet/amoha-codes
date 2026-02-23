import React from 'react';

const CppProgrammingTutorial: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= C++ Programming Language ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      C++ Programming Language
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 13 Oct, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      C++ is a high-performance programming language known for its speed and low-level memory management. 
      It is widely used in operating systems, embedded systems, graphical user interfaces, and high-frequency trading systems.
      C++ supports both low-level features like manual memory management and high-level features such as Object-Oriented Programming (OOP). 
      Its syntax is similar to C, Java, and C#, making it easier to switch between languages.
    </p>

    {/* ================= Basics ================= */}
    <h2 className="text-3xl font-bold mt-6">Basics</h2>
    <p className="text-lg leading-relaxed">
      This section covers fundamental C++ concepts needed to write programs, handle data, and control program flow.
    </p>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Introduction</li>
      <li>Identifiers</li>
      <li>Keywords</li>
      <li>Variables</li>
      <li>Data Types</li>
      <li>Operators</li>
      <li>Basic Input / Output</li>
      <li>Conditional Statements</li>
      <li>Loops</li>
    </ul>
    <p className="text-lg leading-relaxed font-semibold">Quiz: Basics | Variables | Data Types | Operators | Input/Output | Control Statements | Loops</p>

    {/* ================= Functions ================= */}
    <h2 className="text-3xl font-bold mt-6">Functions</h2>
    <p className="text-lg leading-relaxed">
      Functions divide programs into reusable blocks performing specific tasks.
    </p>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Functions</li>
      <li>Parameter Passing Techniques</li>
      <li>Default Arguments</li>
      <li>Recursion</li>
      <li>Inline Functions</li>
      <li>Lambda Expression</li>
    </ul>
    <p className="text-lg leading-relaxed font-semibold">Quiz: Functions</p>

    {/* ================= Compound Data Types ================= */}
    <h2 className="text-3xl font-bold mt-6">Compound Data Types</h2>
    <p className="text-lg leading-relaxed">
      Compound data types are derived from built-in types and help manage complex real-world data efficiently.
    </p>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Arrays</li>
      <li>Pointers</li>
      <li>References</li>
      <li>Strings</li>
      <li>Structures</li>
      <li>Unions</li>
      <li>Enumeration (enum)</li>
    </ul>
    <p className="text-lg leading-relaxed font-semibold">Quiz: Arrays | Pointers | References | Strings | Structures & Unions</p>

    {/* ================= Dynamic Memory Management ================= */}
    <h2 className="text-3xl font-bold mt-6">Dynamic Memory Management</h2>
    <p className="text-lg leading-relaxed">
      Learn low-level memory manipulation using pointers and dynamic memory allocation with <code>new</code> and <code>delete</code> operators.
    </p>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>new and delete Operators</li>
      <li>Memory Leak</li>
    </ul>
    <p className="text-lg leading-relaxed font-semibold">Quiz: Dynamic Memory Management</p>

    {/* ================= Object Oriented Programming (OOP) ================= */}
    <h2 className="text-3xl font-bold mt-6">Object Oriented Programming (OOP)</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Object Oriented Programming (OOP)</li>
      <li>Classes and Objects</li>
      <li>Encapsulation</li>
      <li>Polymorphism</li>
      <li>Inheritance</li>
      <li>Abstraction</li>
    </ul>
    <p className="text-lg leading-relaxed font-semibold">Quiz: OOP</p>

    {/* ================= Standard Template Library (STL) ================= */}
    <h2 className="text-3xl font-bold mt-6">Standard Template Library (STL)</h2>
    <p className="text-lg leading-relaxed">
      STL provides commonly used data structures and algorithms, enhancing productivity and performance.
    </p>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Templates</li>
      <li>Standard Template Library (STL)</li>
      <li>Algorithms</li>
      <li>Containers</li>
      <li>Iterators</li>
      <li>Vector</li>
      <li>Stack</li>
      <li>Queue</li>
      <li>Map</li>
      <li>Set</li>
    </ul>
    <p className="text-lg leading-relaxed font-semibold">Quiz: STL</p>

    {/* ================= Exception Handling ================= */}
    <h2 className="text-3xl font-bold mt-6">Exception Handling</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Exception Handling</li>
      <li>Exception Handling using Classes</li>
      <li>Stack Unwinding</li>
      <li>User-Defined Exceptions</li>
    </ul>
    <p className="text-lg leading-relaxed font-semibold">Quiz: Exception Handling</p>

    {/* ================= File Handling ================= */}
    <h2 className="text-3xl font-bold mt-6">File Handling</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Files and Streams</li>
      <li>I/O Redirection</li>
    </ul>
    <p className="text-lg leading-relaxed font-semibold">Quiz: File Handling</p>

    {/* ================= Advanced Concepts ================= */}
    <h2 className="text-3xl font-bold mt-6">Advanced Concepts</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Preprocessor</li>
      <li>Namespaces</li>
      <li>Smart Pointers</li>
      <li>Callbacks</li>
      <li>Multithreading</li>
      <li>Signal Handling</li>
    </ul>

  </div>
);

export default CppProgrammingTutorial;
