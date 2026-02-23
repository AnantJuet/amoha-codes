import React from "react";

const CppHome: React.FC = () => {
  return (
    <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold border-b-2 pb-2">
        C++ Programming Tutorial
      </h1>
      <p className="text-sm text-gray-500">Last Updated: January 2025</p>

      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Welcome to our comprehensive C++ programming tutorial! C++ is one of the most powerful and
        widely-used programming languages in the world. From operating systems and game engines to
        high-performance applications and embedded systems, C++ powers some of the most critical
        software we use every day.
      </p>

      {/* Why Learn C++ */}
      <h2 className="text-3xl font-bold mt-8">Why Learn C++?</h2>
      <p className="italic">
        C++ gives you the power to write efficient, high-performance code while still providing
        modern programming features!
      </p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>
          <strong>Industry Standard:</strong> Used extensively in game development, system programming,
          and competitive programming.
        </li>
        <li>
          <strong>Performance:</strong> Offers low-level memory manipulation for maximum efficiency.
        </li>
        <li>
          <strong>Object-Oriented:</strong> Supports OOP concepts like classes, inheritance, and polymorphism.
        </li>
        <li>
          <strong>Career Opportunities:</strong> High demand in tech companies, gaming studios, and
          finance industries.
        </li>
        <li>
          <strong>Foundation for Other Languages:</strong> Understanding C++ makes learning other
          languages like Java, C#, and Python easier.
        </li>
      </ul>

      {/* Tip Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <strong>Tip:</strong> Practice coding regularly! The best way to learn C++ is by writing
        actual programs and solving problems.
      </div>

      {/* Tutorial Sections */}
      <h2 className="text-2xl font-bold mt-8">1. Getting Started</h2>
      <p>
        Begin your C++ journey with the basics. Learn about the history of C++, set up your
        development environment, and write your first program.
      </p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Introduction to C++</li>
        <li>Setting Up Development Environment</li>
        <li>Your First C++ Program</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">2. C++ Basics</h2>
      <p>
        Master the fundamental building blocks of C++ programming including variables, data types,
        operators, and input/output operations.
      </p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Variables and Constants</li>
        <li>Data Types</li>
        <li>Operators</li>
        <li>Input and Output (cin, cout)</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">3. Control Flow</h2>
      <p>
        Learn how to control the flow of your programs using conditional statements and loops.
      </p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>If Statements</li>
        <li>If-Else and Else-If</li>
        <li>Switch Statements</li>
        <li>For, While, and Do-While Loops</li>
        <li>Break and Continue</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">4. Functions</h2>
      <p>
        Organize your code into reusable blocks with functions. Learn about parameters,
        return types, overloading, and recursion.
      </p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Function Declaration and Definition</li>
        <li>Parameters and Return Types</li>
        <li>Function Overloading</li>
        <li>Recursion</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">5. Arrays</h2>
      <p>
        Store and manipulate collections of data using arrays, including single and
        multi-dimensional arrays.
      </p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Single Dimensional Arrays</li>
        <li>Multi-Dimensional Arrays</li>
        <li>Common Array Operations</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">6. Strings</h2>
      <p>
        Work with text data using both C-style character arrays and the powerful C++ string class.
      </p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>C-Style Strings</li>
        <li>C++ String Class</li>
        <li>String Methods and Operations</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">7. Pointers</h2>
      <p>
        Unlock the power of C++ with pointers. Learn about memory addresses, pointer arithmetic,
        and dynamic memory allocation.
      </p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Pointer Basics</li>
        <li>Pointer Arithmetic</li>
        <li>Pointers and Arrays</li>
        <li>Dynamic Memory Allocation</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">8. Object-Oriented Programming</h2>
      <p>
        Master the four pillars of OOP: Encapsulation, Abstraction, Inheritance, and Polymorphism.
      </p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Classes and Objects</li>
        <li>Constructors and Destructors</li>
        <li>Encapsulation</li>
        <li>Inheritance</li>
        <li>Polymorphism</li>
        <li>Abstraction</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">9. Standard Template Library (STL)</h2>
      <p>
        Leverage the power of STL with ready-to-use containers, iterators, and algorithms.
      </p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>STL Overview</li>
        <li>Vectors</li>
        <li>Lists</li>
        <li>Maps and Sets</li>
        <li>Iterators</li>
        <li>Algorithms</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8">10. Advanced Topics</h2>
      <p>
        Take your C++ skills to the next level with templates, exception handling, file I/O,
        and namespaces.
      </p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Templates</li>
        <li>Exception Handling</li>
        <li>File Handling</li>
        <li>Namespaces</li>
      </ul>

      {/* C++ Applications */}
      <h2 className="text-3xl font-bold mt-8">Where is C++ Used?</h2>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left px-4 py-2 border">Domain</th>
              <th className="text-left px-4 py-2 border">Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Game Development</td>
              <td className="px-4 py-2 border">Unreal Engine, Unity (native plugins)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">System Programming</td>
              <td className="px-4 py-2 border">Operating Systems, Device Drivers</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Embedded Systems</td>
              <td className="px-4 py-2 border">IoT devices, Automotive software</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Finance</td>
              <td className="px-4 py-2 border">High-frequency trading systems</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Browsers</td>
              <td className="px-4 py-2 border">Chrome, Firefox, Safari</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Databases</td>
              <td className="px-4 py-2 border">MySQL, MongoDB, PostgreSQL</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Prerequisites */}
      <h2 className="text-3xl font-bold mt-8">Prerequisites</h2>
      <p>
        This tutorial is designed for beginners. However, having basic knowledge of the following
        will be helpful:
      </p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Basic understanding of how computers work</li>
        <li>Familiarity with any text editor or IDE</li>
        <li>Logical thinking and problem-solving mindset</li>
      </ul>

      {/* Final Note */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
        <strong>Ready to Begin?</strong> Start with the Introduction to C++ section and work your
        way through each topic systematically. Happy coding!
      </div>
    </div>
  );
};

export default CppHome;
