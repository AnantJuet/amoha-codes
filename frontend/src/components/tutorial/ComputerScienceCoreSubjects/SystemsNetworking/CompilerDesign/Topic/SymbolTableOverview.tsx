import React from "react";

const SymbolTableOverview: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Symbol Table Overview
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A <strong>symbol table</strong> is a data structure used by a compiler to track all
      identifiers (variables, functions, classes, etc.) in a program. It stores information
      such as the name, type, scope, and memory location of each identifier.
    </p>

    <h2 className="text-3xl font-bold mt-8">Purpose of Symbol Table</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>Store information about all identifiers in the program</li>
      <li>Support scope management and name resolution</li>
      <li>Enable type checking during semantic analysis</li>
      <li>Assist in code generation and optimization</li>
      <li>Help in error detection and reporting</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Information Stored</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Attribute</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Name</td>
            <td className="p-3 border">Identifier string</td>
            <td className="p-3 border font-mono text-gray-900">count, sum, main</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Type</td>
            <td className="p-3 border">Data type information</td>
            <td className="p-3 border font-mono text-gray-900">int, float, function</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scope</td>
            <td className="p-3 border">Visibility region</td>
            <td className="p-3 border">global, local, block</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Memory Location</td>
            <td className="p-3 border">Address or offset</td>
            <td className="p-3 border font-mono text-gray-900">0x1000, offset 8</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Size</td>
            <td className="p-3 border">Memory size in bytes</td>
            <td className="p-3 border">4, 8, 100</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Line Number</td>
            <td className="p-3 border">Declaration location</td>
            <td className="p-3 border">Line 15</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Symbol Table Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Source Code:
const float pi = 3.14159f;
float calculateArea(float radius) {
    return pi * radius * radius;
}
int main() {
    float distance = 5.0;
    float area = calculateArea(distance);
    return 0;
}

Symbol Table:
+----------------+----------+--------+--------+------+
| Name           | Type     | Scope  | Size   | Line |
+----------------+----------+--------+--------+------+
| pi             | float    | global | 4      | 1    |
| calculateArea  | function | global | -      | 2    |
| radius         | float    | local  | 4      | 2    |
| main           | function | global | -      | 5    |
| distance       | float    | local  | 4      | 6    |
| area           | float    | local  | 4      | 7    |
+----------------+----------+--------+--------+------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Role in Compiler Phases</h2>

    <h3 className="text-2xl font-semibold mt-6">Lexical Analysis</h3>
    <p className="leading-relaxed">
      Creates new entries for identifiers as they are encountered. Stores basic information
      like the name and token type.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Syntax Analysis</h3>
    <p className="leading-relaxed">
      Adds information about attribute type, scope, dimension, line of reference, and usage
      patterns to existing entries.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Semantic Analysis</h3>
    <p className="leading-relaxed">
      Uses available information for type checking and semantic verification. Updates entries
      with resolved type information.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Intermediate Code Generation</h3>
    <p className="leading-relaxed">
      Refers to symbol table for memory allocation information. Adds temporary variable entries.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Code Optimization</h3>
    <p className="leading-relaxed">
      Uses symbol table information for machine-dependent optimization decisions.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Code Generation</h3>
    <p className="leading-relaxed">
      Generates code using address information of identifiers stored in the table.
    </p>

    <h2 className="text-3xl font-bold mt-8">Implementation Approaches</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Linear List</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Simple to implement</li>
      <li>Search time: O(n)</li>
      <li>Best for small programs</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">2. Hash Table</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Fast lookup: O(1) average</li>
      <li>Most commonly used</li>
      <li>Handles collisions with chaining or probing</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">3. Binary Search Tree</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Maintains sorted order</li>
      <li>Search time: O(log n)</li>
      <li>Good for range queries</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Hash Table Implementation:

hash("count") = 5
hash("sum")   = 3
hash("main")  = 7

Index | Entries
------+------------------
  0   | (empty)
  1   | (empty)
  2   | (empty)
  3   | sum -> [type: int, scope: local, ...]
  4   | (empty)
  5   | count -> [type: int, scope: global, ...]
  6   | (empty)
  7   | main -> [type: function, scope: global, ...]`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Scope Management</h2>
    <p className="leading-relaxed">
      Symbol tables must handle nested scopes (blocks, functions, classes). Common approaches:
    </p>

    <h3 className="text-2xl font-semibold mt-6">Single Table with Scope Markers</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Stack-based approach:
+--------+-------+-------+
| x (1)  | y (2) | x (2) |  <- Different scopes
+--------+-------+-------+
  global    local   local

When exiting a scope, pop entries until marker`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Hierarchical Tables</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Separate table for each scope:

Global Table          Local Table (main)
+-----------+        +------------+
| pi        |   ←──  | distance   |
| main()    |        | area       |
+-----------+        +------------+
                           ↑
                     Parent pointer`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Operations</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>Insert:</strong> Add new identifier to the table</li>
      <li><strong>Lookup:</strong> Search for an identifier</li>
      <li><strong>Delete:</strong> Remove identifier (when leaving scope)</li>
      <li><strong>Update:</strong> Modify attributes of existing entry</li>
      <li><strong>Enter Scope:</strong> Create new scope level</li>
      <li><strong>Exit Scope:</strong> Remove current scope entries</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Symbol table stores information about all identifiers in a program</li>
        <li>It is used by all phases of the compiler</li>
        <li>Hash tables are the most common implementation for fast lookup</li>
        <li>Scope management requires careful handling of nested blocks</li>
        <li>Information includes name, type, scope, memory location, and more</li>
      </ul>
    </div>
  </div>
);

export default SymbolTableOverview;
