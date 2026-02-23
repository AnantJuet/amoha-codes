import React from 'react';

const CProgrammingTutorial: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= C Programming Tutorial ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      C Programming Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 13 Oct, 2025</p>

    {/* Introduction */}
    <p className="text-lg leading-relaxed">
      C is a general-purpose mid-level programming language developed by Dennis M. Ritchie at Bell Laboratories in 1972. 
      Initially created for UNIX operating system development, C is now widely used for various applications and remains one of the top programming languages today.
    </p>

    {/* ================= Basics ================= */}
    <h2 className="text-3xl font-bold mt-6">Basics</h2>
    <p className="text-lg leading-relaxed">
      This section covers the foundational concepts of C programming, including storing and displaying data, performing operations, and controlling program flow.
    </p>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>C Introduction</li>
      <li>Compilation Process</li>
      <li>Identifiers</li>
      <li>C Keywords</li>
      <li>C Variables</li>
      <li>Data Types in C</li>
      <li>Input and Output in C</li>
      <li>Operators</li>
      <li>Conditional Statements</li>
      <li>Loops</li>
    </ul>
    <p className="text-lg leading-relaxed font-semibold">Quiz: C Basics | Variables | Data Types | Input/Output | Operators | Conditional Statements | Loops</p>

    {/* ================= Functions ================= */}
    <h2 className="text-3xl font-bold mt-6">Functions</h2>
    <p className="text-lg leading-relaxed">
      Functions are blocks of code that perform specific tasks, enabling modular and reusable programming.
    </p>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Functions in C</li>
      <li>Parameter Passing Techniques</li>
      <li>Main Function</li>
      <li>Recursion</li>
      <li>Inline Function</li>
      <li>Nested Functions</li>
    </ul>
    <p className="text-lg leading-relaxed font-semibold">Quiz: Functions</p>

    {/* ================= Compound Data Types ================= */}
    <h2 className="text-3xl font-bold mt-6">Compound Data Types</h2>
    <p className="text-lg leading-relaxed">
      Compound data types are created from primitive data types and allow you to organize and process real-world data efficiently.
    </p>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>C Arrays</li>
      <li>Pointers in C</li>
      <li>C Strings</li>
      <li>Structures</li>
      <li>Unions</li>
      <li>Enumeration (enum)</li>
    </ul>
    <p className="text-lg leading-relaxed font-semibold">Quiz: Arrays | Pointers | Strings | Structures & Unions</p>

    {/* ================= Memory Management ================= */}
    <h2 className="text-3xl font-bold mt-6">Memory Management</h2>
    <p className="text-lg leading-relaxed">
      This section explains manual memory management in C using pointers, and dynamic memory allocation using <code>malloc()</code>, <code>calloc()</code>, <code>realloc()</code>, and <code>free()</code>.
    </p>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Program's Memory Layout</li>
      <li>Dynamic Memory Allocation</li>
      <li>Memory Leaks</li>
    </ul>
    <p className="text-lg leading-relaxed font-semibold">Quiz: Memory Management</p>

    {/* ================= File Handling ================= */}
    <h2 className="text-3xl font-bold mt-6">File Handling</h2>
    <p className="text-lg leading-relaxed">
      Learn how to create, read, write, manipulate, and delete files in C.
    </p>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Basics of File Handling</li>
      <li>Read a File</li>
      <li>Read/Write Structure From/To a File</li>
      <li>EOF, getc() and feof()</li>
      <li>Delete a File</li>
    </ul>
    <p className="text-lg leading-relaxed font-semibold">Quiz: File Handling</p>

    {/* ================= Error Handling ================= */}
    <h2 className="text-3xl font-bold mt-6">Error Handling</h2>
    <p className="text-lg leading-relaxed">
      C requires manual error handling using functions like <code>perror()</code> and <code>strerror()</code>, debugging strategies, and <code>goto</code> for exception handling.
    </p>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Error Handling in C</li>
      <li>Exception Handling Using goto</li>
      <li>File Error Handling</li>
      <li>Divide by Zero Exception</li>
    </ul>

    {/* ================= Miscellaneous Concepts ================= */}
    <h2 className="text-3xl font-bold mt-6">Miscellaneous Concepts</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>C Preprocessors & Macros</li>
      <li>C Header Files</li>
      <li>Date and Time</li>
      <li>Linkage</li>
      <li>Storage Classes</li>
    </ul>
    <p className="text-lg leading-relaxed font-semibold">Quiz: Preprocessors, Macros & Storage Classes</p>

    {/* ================= Advanced Concepts ================= */}
    <h2 className="text-3xl font-bold mt-6">Advanced Concepts</h2>
    <p className="text-lg leading-relaxed">
      Explore high-level C programming techniques for robust applications, including multithreading, signal handling, and socket programming.
    </p>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Variadic Functions</li>
      <li>Input-Output System Calls</li>
      <li>Signals</li>
      <li>Socket Programming</li>
      <li>_Generics Keyword</li>
      <li>Multithreading in C</li>
    </ul>

  </div>
);

export default CProgrammingTutorial;
