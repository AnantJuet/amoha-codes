import React from "react";

const CppIntro: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        Introduction to C++
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* What is C++ */}
      <h2 className="text-2xl font-bold mt-6">What is C++?</h2>
      <p className="text-lg leading-relaxed">
        C++ is a powerful, high-performance programming language that was developed by{" "}
        <strong>Bjarne Stroustrup</strong> at Bell Labs starting in 1979. It was designed as an
        extension of the C programming language, adding object-oriented features while maintaining
        backward compatibility with C.
      </p>
      <p className="leading-relaxed">
        Originally called "C with Classes," it was renamed to C++ in 1983. The "++" comes from the
        increment operator in C, symbolizing that C++ is an enhanced version of C.
      </p>

      {/* Key Features */}
      <h2 className="text-2xl font-bold mt-6">Key Features of C++</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Feature</th>
              <th className="text-left px-4 py-2 border">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border font-semibold">Object-Oriented</td>
              <td className="px-4 py-2 border">
                Supports classes, objects, inheritance, polymorphism, encapsulation, and abstraction
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">High Performance</td>
              <td className="px-4 py-2 border">
                Compiled directly to machine code for maximum speed
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Low-Level Access</td>
              <td className="px-4 py-2 border">
                Allows direct memory manipulation through pointers
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Platform Independent</td>
              <td className="px-4 py-2 border">
                Source code can be compiled on different platforms
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Rich Standard Library</td>
              <td className="px-4 py-2 border">
                STL provides containers, algorithms, and iterators
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border font-semibold">Multi-Paradigm</td>
              <td className="px-4 py-2 border">
                Supports procedural, object-oriented, and generic programming
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* C++ vs C */}
      <h2 className="text-2xl font-bold mt-6">C++ vs C</h2>
      <p className="leading-relaxed">
        While C++ is an extension of C, there are several important differences:
      </p>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Aspect</th>
              <th className="text-left px-4 py-2 border">C</th>
              <th className="text-left px-4 py-2 border">C++</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Programming Paradigm</td>
              <td className="px-4 py-2 border">Procedural</td>
              <td className="px-4 py-2 border">Multi-paradigm (OOP + Procedural + Generic)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Classes</td>
              <td className="px-4 py-2 border">Not supported</td>
              <td className="px-4 py-2 border">Fully supported</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Memory Management</td>
              <td className="px-4 py-2 border">malloc() and free()</td>
              <td className="px-4 py-2 border">new and delete operators</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Input/Output</td>
              <td className="px-4 py-2 border">scanf() and printf()</td>
              <td className="px-4 py-2 border">cin and cout streams</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Function Overloading</td>
              <td className="px-4 py-2 border">Not supported</td>
              <td className="px-4 py-2 border">Supported</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Exception Handling</td>
              <td className="px-4 py-2 border">Not built-in</td>
              <td className="px-4 py-2 border">try, catch, throw</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* History Timeline */}
      <h2 className="text-2xl font-bold mt-6">History of C++</h2>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>
          <strong>1979:</strong> Bjarne Stroustrup begins work on "C with Classes"
        </li>
        <li>
          <strong>1983:</strong> Language renamed to C++
        </li>
        <li>
          <strong>1985:</strong> First commercial release of C++
        </li>
        <li>
          <strong>1998:</strong> C++98 - First ISO standardized version
        </li>
        <li>
          <strong>2003:</strong> C++03 - Bug fix release
        </li>
        <li>
          <strong>2011:</strong> C++11 - Major update with lambdas, auto, range-based for loops
        </li>
        <li>
          <strong>2014:</strong> C++14 - Refinements to C++11
        </li>
        <li>
          <strong>2017:</strong> C++17 - Structured bindings, optional, variant
        </li>
        <li>
          <strong>2020:</strong> C++20 - Concepts, ranges, coroutines, modules
        </li>
        <li>
          <strong>2023:</strong> C++23 - Latest standard with further improvements
        </li>
      </ul>

      {/* Basic Structure */}
      <h2 className="text-2xl font-bold mt-6">Basic Structure of a C++ Program</h2>
      <p className="leading-relaxed">
        Every C++ program follows a basic structure. Here is the anatomy of a simple C++ program:
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`// Preprocessor Directive - includes input/output library
#include <iostream>

// Using standard namespace (optional but common)
using namespace std;

// Main function - entry point of the program
int main() {
    // Output statement
    cout << "Hello, World!" << endl;

    // Return 0 indicates successful execution
    return 0;
}`}
      </pre>

      {/* Explanation of Structure */}
      <h3 className="text-xl font-semibold mt-4">Understanding Each Part:</h3>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>
          <strong>#include &lt;iostream&gt;:</strong> Preprocessor directive that includes the
          input/output stream library for cin and cout
        </li>
        <li>
          <strong>using namespace std:</strong> Allows us to use cout instead of std::cout
        </li>
        <li>
          <strong>int main():</strong> The main function where program execution begins
        </li>
        <li>
          <strong>cout:</strong> Standard output stream used to print to the console
        </li>
        <li>
          <strong>endl:</strong> Inserts a newline character and flushes the buffer
        </li>
        <li>
          <strong>return 0:</strong> Indicates successful program termination
        </li>
      </ul>

      {/* Comments */}
      <h2 className="text-2xl font-bold mt-6">Comments in C++</h2>
      <p className="leading-relaxed">
        Comments are used to explain code and are ignored by the compiler:
      </p>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`// This is a single-line comment

/*
   This is a
   multi-line comment
   spanning multiple lines
*/

int x = 10;  // Inline comment: declaring a variable`}
      </pre>

      {/* Compilation Process */}
      <h2 className="text-2xl font-bold mt-6">How C++ Programs are Compiled</h2>
      <p className="leading-relaxed">
        C++ code goes through several stages before becoming an executable:
      </p>
      <ol className="list-decimal list-inside space-y-2 ml-4">
        <li>
          <strong>Preprocessing:</strong> Handles directives like #include, #define
        </li>
        <li>
          <strong>Compilation:</strong> Converts source code to assembly code
        </li>
        <li>
          <strong>Assembly:</strong> Converts assembly code to object code (.o files)
        </li>
        <li>
          <strong>Linking:</strong> Combines object files and libraries into executable
        </li>
      </ol>

      {/* Simple Examples */}
      <h2 className="text-2xl font-bold mt-6">Simple C++ Examples</h2>

      <h3 className="text-xl font-semibold mt-4">Example 1: Print Multiple Lines</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    cout << "Welcome to C++ Programming!" << endl;
    cout << "This is line 2" << endl;
    cout << "This is line 3" << endl;
    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example 2: Using Variables</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int age = 25;
    string name = "Alice";

    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;

    return 0;
}`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example 3: Simple Calculation</h3>
      <pre className="bg-gray-100 text-black p-4 rounded-md font-mono text-sm mt-3 overflow-x-auto">
{`#include <iostream>
using namespace std;

int main() {
    int a = 10;
    int b = 20;
    int sum = a + b;

    cout << "Sum of " << a << " and " << b << " is: " << sum << endl;

    return 0;
}`}
      </pre>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Note:</strong> C++ is case-sensitive. "Main" and "main" are different identifiers.
        Always use lowercase "main" for the main function.
      </div>

      {/* Advantages */}
      <h2 className="text-2xl font-bold mt-6">Advantages of C++</h2>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>High performance and efficiency</li>
        <li>Close-to-hardware programming capabilities</li>
        <li>Rich function library (STL)</li>
        <li>Scalable and suitable for large projects</li>
        <li>Strong community support and resources</li>
        <li>Cross-platform compatibility</li>
      </ul>

      {/* Applications */}
      <h2 className="text-2xl font-bold mt-6">Applications of C++</h2>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>
          <strong>Operating Systems:</strong> Windows, Linux kernel components
        </li>
        <li>
          <strong>Game Engines:</strong> Unreal Engine, Unity (native plugins)
        </li>
        <li>
          <strong>Browsers:</strong> Chrome, Firefox, Safari
        </li>
        <li>
          <strong>Databases:</strong> MySQL, MongoDB, PostgreSQL
        </li>
        <li>
          <strong>Embedded Systems:</strong> Automotive, IoT devices
        </li>
        <li>
          <strong>Financial Systems:</strong> High-frequency trading platforms
        </li>
      </ul>

      {/* Summary */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Summary:</strong> C++ is a powerful, versatile programming language that combines
        the efficiency of C with object-oriented features. It remains one of the most important
        languages for system programming, game development, and performance-critical applications.
      </div>
    </div>
  );
};

export default CppIntro;
