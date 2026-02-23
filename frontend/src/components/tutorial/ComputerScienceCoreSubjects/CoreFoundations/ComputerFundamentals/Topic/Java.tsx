import React from 'react';

const JavaTutorial: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Java Tutorial ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Java Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 01 Nov, 2025</p>

    <p className="text-lg leading-relaxed">
      Java is a high-level, object-oriented programming language used to build web apps, mobile applications, and enterprise software systems. 
      Known for its Write Once, Run Anywhere (WORA) capability, Java code can run on any device supporting the Java Virtual Machine (JVM). 
      Its syntax is similar to other C-based languages like C++ and C#.
    </p>

    {/* ================= Hello World Example ================= */}
    <h2 className="text-3xl font-bold mt-6">Basic Code Example</h2>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm text-gray-900 overflow-x-auto">
{`public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`}
    </pre>

    {/* ================= Why Learn Java ================= */}
    <h2 className="text-3xl font-bold mt-6">Why Learn Java?</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Build Android apps, desktop & web apps, enterprise backend systems, and cloud software.</li>
      <li>High demand in the software development job market.</li>
      <li>Popular frameworks like Spring and Hibernate for enterprise applications.</li>
      <li>Supports object-oriented programming for maintainable and reusable code.</li>
      <li>Used by top companies like Amazon, Netflix, and LinkedIn.</li>
    </ul>

    {/* ================= Basics ================= */}
    <h2 className="text-3xl font-bold mt-6">Basics</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Introduction</li>
      <li>Download and Install Java</li>
      <li>JDK vs JRE vs JVM</li>
      <li>Identifiers</li>
      <li>Keywords</li>
      <li>Data Types</li>
      <li>Variables</li>
      <li>Operators</li>
      <li>Decision Making</li>
      <li>Loops & Jump Statements</li>
      <li>Project: Number Guessing Game</li>
    </ul>

    {/* ================= Methods ================= */}
    <h2 className="text-3xl font-bold mt-6">Methods</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Introduction to Methods</li>
      <li>Static Methods vs Instance Methods</li>
      <li>Access Modifiers</li>
      <li>Command Line Arguments</li>
      <li>Variable Arguments (Varargs)</li>
    </ul>

    {/* ================= Arrays ================= */}
    <h2 className="text-3xl font-bold mt-6">Arrays</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Introduction</li>
      <li>Declare and Initialize Arrays</li>
      <li>Multi-Dimensional Arrays</li>
      <li>Jagged Arrays</li>
      <li>Arrays Class</li>
      <li>Final Arrays</li>
      <li>Project: Tic-Tac-Toe Game</li>
    </ul>

    {/* ================= Strings ================= */}
    <h2 className="text-3xl font-bold mt-6">Strings</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Introduction</li>
      <li>Why Strings are Immutable</li>
      <li>String Concatenation</li>
      <li>String Methods</li>
      <li>String Class, StringBuffer Class, StringBuilder Class</li>
      <li>Strings vs StringBuffer vs StringBuilder</li>
    </ul>

    {/* ================= Regex ================= */}
    <h2 className="text-3xl font-bold mt-6">Regex</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>What is Java Regex?</li>
      <li>Pattern Class</li>
      <li>Matcher Class</li>
      <li>Character Class</li>
      <li>Quantifiers</li>
    </ul>

    {/* ================= OOP Concepts ================= */}
    <h2 className="text-3xl font-bold mt-6">OOP Concepts</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Classes and Objects</li>
      <li>Constructors</li>
      <li>Object Class</li>
      <li>Abstraction & Encapsulation</li>
      <li>Inheritance & Polymorphism</li>
      <li>Packages</li>
      <li>Project: Simple Banking Application</li>
      <li>Interfaces, Functional Interface, Nested Interface, Marker Interface</li>
      <li>Project: Employee Management System</li>
    </ul>

    {/* ================= Exception Handling ================= */}
    <h2 className="text-3xl font-bold mt-6">Exception Handling</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Exceptions</li>
      <li>Final, Finally and Finalize</li>
      <li>Throw and Throws</li>
      <li>Customized Exception Handling</li>
      <li>Chained Exceptions</li>
      <li>Null Pointer Exceptions</li>
      <li>Exception Handling with Method Overriding</li>
    </ul>

    {/* ================= Memory Allocation ================= */}
    <h2 className="text-3xl font-bold mt-6">Memory Allocation</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Java Memory Management</li>
      <li>How Java Objects Are Stored in Memory</li>
      <li>Types of Memory Areas Allocated by JVM</li>
      <li>Stack vs Heap Memory Allocation</li>
      <li>Garbage Collection</li>
      <li>Memory Leaks</li>
      <li>Types of JVM Garbage Collectors</li>
    </ul>

    {/* ================= Collections ================= */}
    <h2 className="text-3xl font-bold mt-6">Collections</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Collection Interface & Classes</li>
      <li>List, ArrayList, LinkedList</li>
      <li>Set, HashSet, TreeSet</li>
      <li>Queue, Priority Queue, Deque</li>
      <li>Map, HashMap</li>
      <li>Iterator, Comparator, Comparable</li>
      <li>Project: Face Detection System</li>
    </ul>

    {/* ================= Lambda Expressions & Streams ================= */}
    <h2 className="text-3xl font-bold mt-6">Lambda Expressions & Streams</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Lambda Expressions</li>
      <li>Method References</li>
      <li>Java Streams</li>
    </ul>

    {/* ================= Multithreading & Synchronization ================= */}
    <h2 className="text-3xl font-bold mt-6">Multithreading & Synchronization</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Introduction to Threads</li>
      <li>Thread.start() vs Thread.run()</li>
      <li>Thread.sleep()</li>
      <li>Runnable Interface</li>
      <li>Main Thread</li>
      <li>Thread Priority & Daemon Thread</li>
      <li>Java Synchronization, Thread Safety, Locks</li>
      <li>Deadlock & Thread Pools</li>
      <li>Executor Framework</li>
      <li>Project: Snake Game</li>
    </ul>

    {/* ================= File Handling ================= */}
    <h2 className="text-3xl font-bold mt-6">File Handling</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Java IO Introduction</li>
      <li>Reader & Writer Classes</li>
      <li>File Handling using java.io & java.nio</li>
      <li>BufferedReader / BufferedWriter</li>
      <li>Fast I/O Techniques</li>
      <li>FilePermission & FileDescriptor Classes</li>
      <li>Project: Text Editor</li>
    </ul>

    {/* ================= Networking ================= */}
    <h2 className="text-3xl font-bold mt-6">Networking</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Java Networking Introduction</li>
      <li>Socket Programming, ServerSocket Class</li>
      <li>URL Class and Methods</li>
      <li>Project: Chat Application</li>
    </ul>

    {/* ================= JDBC ================= */}
    <h2 className="text-3xl font-bold mt-6">Java Database Connectivity (JDBC)</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Introduction to JDBC</li>
      <li>JDBC Driver & Connection</li>
      <li>Types of Statements</li>
    </ul>

  </div>
);

export default JavaTutorial;
