import React from "react";

const RuntimeEnvironmentIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Introduction to Runtime Environments ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Runtime Environments
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A <strong>runtime environment</strong> is the collection of software and hardware resources that
      are available to a program during its execution. It provides the necessary infrastructure for
      executing compiled code, managing memory, handling procedure calls, and supporting various
      language features like recursion, dynamic memory allocation, and exception handling.
    </p>

    {/* What is a Runtime Environment */}
    <h2 className="text-3xl font-bold mt-8">What is a Runtime Environment?</h2>
    <p className="leading-relaxed">
      The runtime environment (also called runtime system or execution environment) is created when
      a program starts executing and is destroyed when the program terminates. It includes:
    </p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Memory management system (stack, heap, static areas)</li>
      <li>Register allocation and management</li>
      <li>Procedure call and return mechanisms</li>
      <li>Parameter passing conventions</li>
      <li>Exception handling mechanisms</li>
      <li>Garbage collection (in managed languages)</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Runtime Environment Components:

+--------------------------------------------------+
|                RUNTIME ENVIRONMENT               |
+--------------------------------------------------+
|                                                  |
|  +----------------+    +--------------------+    |
|  | Memory Manager |    | Procedure Linkage  |    |
|  +----------------+    +--------------------+    |
|                                                  |
|  +----------------+    +--------------------+    |
|  | Stack Manager  |    | Exception Handler  |    |
|  +----------------+    +--------------------+    |
|                                                  |
|  +----------------+    +--------------------+    |
|  | Heap Manager   |    | Garbage Collector  |    |
|  +----------------+    +--------------------+    |
|                                                  |
+--------------------------------------------------+`}
      </pre>
    </div>

    {/* Role of Runtime Environment */}
    <h2 className="text-3xl font-bold mt-8">Role of Runtime Environment</h2>
    <p className="leading-relaxed">
      The runtime environment serves as a bridge between the compiled code and the underlying hardware.
      It handles various responsibilities that cannot be determined at compile time:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Responsibility</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Memory Allocation</td>
            <td className="p-3 border">Allocate and deallocate memory for variables, arrays, and objects</td>
          </tr>
          <tr>
            <td className="p-3 border">Procedure Calls</td>
            <td className="p-3 border">Manage activation records, save/restore registers, handle return values</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Access</td>
            <td className="p-3 border">Provide mechanisms to access local, non-local, and global data</td>
          </tr>
          <tr>
            <td className="p-3 border">Type Checking</td>
            <td className="p-3 border">Perform runtime type checks for dynamically typed operations</td>
          </tr>
          <tr>
            <td className="p-3 border">Bounds Checking</td>
            <td className="p-3 border">Check array indices and pointer validity at runtime</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Compile Time vs Runtime */}
    <h2 className="text-3xl font-bold mt-8">Compile Time vs Runtime</h2>
    <p className="leading-relaxed">
      Understanding the distinction between compile time and runtime is crucial for compiler design:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Compile Time</th>
            <th className="p-3 border">Runtime</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Static analysis and type checking</td>
            <td className="p-3 border">Dynamic type checks</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory layout determination</td>
            <td className="p-3 border">Actual memory allocation</td>
          </tr>
          <tr>
            <td className="p-3 border">Code generation</td>
            <td className="p-3 border">Code execution</td>
          </tr>
          <tr>
            <td className="p-3 border">Symbol table construction</td>
            <td className="p-3 border">Activation record creation</td>
          </tr>
          <tr>
            <td className="p-3 border">Static scope resolution</td>
            <td className="p-3 border">Dynamic scope resolution</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Language Features and Runtime Support */}
    <h2 className="text-3xl font-bold mt-8">Language Features and Runtime Support</h2>
    <p className="leading-relaxed">
      Different programming language features require different levels of runtime support:
    </p>

    <h3 className="text-2xl font-semibold mt-6">1. Simple Languages (C, FORTRAN)</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Minimal runtime support</li>
      <li>Static or stack-based allocation</li>
      <li>Simple procedure call mechanisms</li>
      <li>No automatic garbage collection</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">2. Object-Oriented Languages (Java, C++)</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Virtual method dispatch tables</li>
      <li>Dynamic object creation and destruction</li>
      <li>Inheritance and polymorphism support</li>
      <li>Exception handling mechanisms</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">3. Functional Languages (Haskell, ML)</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>First-class functions and closures</li>
      <li>Lazy evaluation support</li>
      <li>Automatic memory management</li>
      <li>Tail call optimization</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">4. Dynamic Languages (Python, JavaScript)</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Dynamic typing support</li>
      <li>Runtime reflection</li>
      <li>Dynamic method dispatch</li>
      <li>Garbage collection</li>
    </ul>

    {/* Runtime System Architecture */}
    <h2 className="text-3xl font-bold mt-8">Runtime System Architecture</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Program Execution with Runtime Support:

+-------------------+
|   Source Code     |
+-------------------+
         |
         v
+-------------------+
|     Compiler      |
+-------------------+
         |
         v
+-------------------+
|   Object Code     |  <-- Contains calls to runtime routines
+-------------------+
         |
         v
+-------------------+
|      Linker       |
+-------------------+
         |
         v
+-------------------+-------------------+
|   Executable      |  Runtime Library  |
|      Code         |    (Linked)       |
+-------------------+-------------------+
         |
         v
+-------------------+
|      Loader       |
+-------------------+
         |
         v
+-------------------------------------------+
|            EXECUTING PROGRAM              |
|  +-------------------------------------+  |
|  |          Runtime Environment        |  |
|  |  (Stack, Heap, Runtime Routines)    |  |
|  +-------------------------------------+  |
+-------------------------------------------+`}
      </pre>
    </div>

    {/* Binding and Binding Time */}
    <h2 className="text-3xl font-bold mt-8">Binding and Binding Time</h2>
    <p className="leading-relaxed">
      <strong>Binding</strong> is the association of an attribute with a program entity. The time at
      which this association occurs is called the <strong>binding time</strong>.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Binding Time</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Language Definition</td>
            <td className="p-3 border">Meaning of keywords, operator precedence</td>
          </tr>
          <tr>
            <td className="p-3 border">Compile Time</td>
            <td className="p-3 border">Variable types, static array bounds</td>
          </tr>
          <tr>
            <td className="p-3 border">Link Time</td>
            <td className="p-3 border">Global variable addresses, library functions</td>
          </tr>
          <tr>
            <td className="p-3 border">Load Time</td>
            <td className="p-3 border">Absolute memory addresses</td>
          </tr>
          <tr>
            <td className="p-3 border">Runtime</td>
            <td className="p-3 border">Values of variables, dynamic array sizes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Example of Different Binding Times:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`int x;           // Type 'int' bound at compile time
int arr[10];     // Size '10' bound at compile time

int n = 5;
int arr2[n];     // Size bound at runtime (VLA in C99)

int *ptr = malloc(100);  // Memory address bound at runtime`}
      </pre>
    </div>

    {/* Storage Organization Overview */}
    <h2 className="text-3xl font-bold mt-8">Storage Organization Overview</h2>
    <p className="leading-relaxed">
      The runtime environment organizes memory into distinct regions for different purposes:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory Layout (Typical):

+---------------------------+  High Address
|                           |
|          Stack            |  <- Grows downward
|  (Activation Records)     |
|             |             |
|             v             |
|                           |
|         (Free)            |
|                           |
|             ^             |
|             |             |
|          Heap             |  <- Grows upward
|   (Dynamic Allocation)    |
|                           |
+---------------------------+
|    Static/Global Data     |
|   (Initialized + BSS)     |
+---------------------------+
|         Code              |
|   (Text Segment)          |
+---------------------------+  Low Address`}
      </pre>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      Which of the following is NOT a component of the runtime environment?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Stack Manager</li>
      <li>(B) Heap Manager</li>
      <li>(C) Lexical Analyzer</li>
      <li>(D) Garbage Collector</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Lexical Analyzer - The lexical analyzer is a compile-time component, not a runtime component.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      At what binding time is the value of a variable typically bound?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Compile time</li>
      <li>(B) Link time</li>
      <li>(C) Load time</li>
      <li>(D) Runtime</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (D) Runtime - Variable values are bound when assignment statements are executed.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      In memory layout, the stack typically grows in which direction?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Towards higher addresses</li>
      <li>(B) Towards lower addresses</li>
      <li>(C) Both directions</li>
      <li>(D) Direction is random</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Towards lower addresses - In most architectures, the stack grows downward from high to low addresses.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>The runtime environment provides support for program execution that cannot be determined at compile time</li>
      <li>It manages memory, procedure calls, parameter passing, and various language features</li>
      <li>Binding time refers to when attributes are associated with program entities</li>
      <li>Different language features require different levels of runtime support</li>
      <li>Memory is organized into code, data, stack, and heap regions</li>
    </ul>

  </div>
);

export default RuntimeEnvironmentIntro;
