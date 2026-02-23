import React from "react";

const SwiftHome: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Learn Swift Programming
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <strong>Swift</strong> is a fast, safe, and modern programming language created by Apple for building
      apps on iOS, macOS, watchOS, tvOS, and even for server-side development.
    </p>

    <p className="text-lg leading-relaxed mt-3">
      Swift offers features like type inference, optionals, value semantics, and powerful
      protocols/generics — making it both beginner-friendly and extremely powerful for
      professional development.
    </p>

    <h2 className="text-2xl font-bold mt-6">Why Learn Swift?</h2>
    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li><strong>Modern Syntax:</strong> Clean, readable code that's easy to learn</li>
      <li><strong>Safe by Design:</strong> Built-in protection against common programming errors</li>
      <li><strong>Fast Performance:</strong> Compiled language with speed comparable to C++</li>
      <li><strong>Apple Ecosystem:</strong> The official language for iOS, macOS, watchOS, tvOS</li>
      <li><strong>Open Source:</strong> Active community and cross-platform support</li>
      <li><strong>Career Opportunities:</strong> High demand for iOS developers</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">What Can You Build with Swift?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
        <h3 className="font-semibold text-blue-800">iOS Apps</h3>
        <p className="text-sm mt-1">iPhone and iPad applications for the App Store</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
        <h3 className="font-semibold text-green-800">macOS Apps</h3>
        <p className="text-sm mt-1">Desktop applications for Mac computers</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
        <h3 className="font-semibold text-purple-800">watchOS Apps</h3>
        <p className="text-sm mt-1">Applications for Apple Watch</p>
      </div>
      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
        <h3 className="font-semibold text-orange-800">Server-Side</h3>
        <p className="text-sm mt-1">Backend services with Vapor or Kitura frameworks</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Hello World Example</h2>
    <p className="text-lg leading-relaxed mt-2">
      Here's a simple Swift program that prints "Hello, Swift!" to the console:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`print("Hello, Swift!")

// Output: Hello, Swift!`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Variables and Constants</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Constants (cannot be changed)
let name = "Swift"
let version = 5.9

// Variables (can be changed)
var score = 0
score = 100

// Type annotations
let language: String = "Swift"
var count: Int = 0`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Basic Data Types</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Integers
let age: Int = 25

// Floating-point numbers
let pi: Double = 3.14159
let price: Float = 19.99

// Booleans
let isActive: Bool = true

// Strings
let greeting: String = "Hello"

// Arrays
let numbers: [Int] = [1, 2, 3, 4, 5]

// Dictionaries
let person: [String: Any] = ["name": "Alice", "age": 25]`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">What You'll Learn</h2>
    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Topic</th>
          <th className="border border-gray-300 px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Basics</td>
          <td className="border border-gray-300 px-4 py-2">Variables, constants, data types, operators</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Control Flow</td>
          <td className="border border-gray-300 px-4 py-2">If/else, switch, loops (for, while)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Functions</td>
          <td className="border border-gray-300 px-4 py-2">Parameters, return types, closures</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Collections</td>
          <td className="border border-gray-300 px-4 py-2">Arrays, dictionaries, sets</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Optionals</td>
          <td className="border border-gray-300 px-4 py-2">Safe handling of nil values</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">OOP</td>
          <td className="border border-gray-300 px-4 py-2">Classes, structs, enums, protocols</td>
        </tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Getting Started</h2>
    <p className="text-lg leading-relaxed mt-2">
      To start developing with Swift, you'll need:
    </p>
    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li><strong>Xcode:</strong> Apple's IDE for macOS (free on the Mac App Store)</li>
      <li><strong>Swift Playgrounds:</strong> Interactive learning app for iPad and Mac</li>
      <li><strong>Online Editors:</strong> Use web-based Swift compilers for quick testing</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Tip:</strong> Swift Playgrounds is a great way to learn Swift interactively.
        It provides instant feedback and step-by-step tutorials perfect for beginners.
      </p>
    </div>
  </div>
);

export default SwiftHome;
