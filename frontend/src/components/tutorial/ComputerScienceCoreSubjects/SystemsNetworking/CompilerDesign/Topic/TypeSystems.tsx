import React from "react";

const TypeSystems: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Type Systems in Compilers
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A type system is a set of rules that assigns a type to various constructs in a
      program (variables, expressions, functions). It helps detect type errors at
      compile time, ensuring type safety and correctness of the program.
    </p>

    <h2 className="text-3xl font-bold mt-8">Purpose of Type Systems</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Error Detection</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Catch type mismatches early</li>
          <li>Prevent invalid operations</li>
          <li>Ensure correct function calls</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Code Generation</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Determine storage requirements</li>
          <li>Select appropriate instructions</li>
          <li>Enable optimizations</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Type Classifications</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Types</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Basic Types</td>
            <td className="p-3 border">Primitive types</td>
            <td className="p-3 border font-mono text-gray-900">int, float, char, bool</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Constructed Types</td>
            <td className="p-3 border">Built from other types</td>
            <td className="p-3 border font-mono text-gray-900">array, struct, pointer</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Function Types</td>
            <td className="p-3 border">Parameter and return types</td>
            <td className="p-3 border font-mono text-gray-900">int → int, (int,int) → bool</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Static vs Dynamic Typing</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
STATIC TYPING (Compile-time)
────────────────────────────────────────
Languages: C, C++, Java, Go
Characteristics:
  • Types checked at compile time
  • Variables have fixed types
  • Errors caught before runtime
  • Better performance (no runtime checks)

Example (Java):
  int x = 5;        // x is always int
  x = "hello";      // Compile error!


DYNAMIC TYPING (Runtime)
────────────────────────────────────────
Languages: Python, JavaScript, Ruby
Characteristics:
  • Types checked at runtime
  • Variables can change types
  • More flexible but error-prone
  • Runtime type errors possible

Example (Python):
  x = 5             # x is int
  x = "hello"       # x is now string (OK!)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Strong vs Weak Typing</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">Strongly Typed</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Strict type rules</li>
          <li>No implicit dangerous conversions</li>
          <li>Examples: Java, Python, Haskell</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2">Weakly Typed</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Flexible type rules</li>
          <li>Implicit conversions allowed</li>
          <li>Examples: C, JavaScript, PHP</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Type systems ensure type safety in programs</li>
        <li>Static typing catches errors at compile time</li>
        <li>Dynamic typing checks types at runtime</li>
        <li>Strong typing prevents implicit dangerous conversions</li>
        <li>Type information aids code generation and optimization</li>
      </ul>
    </div>
  </div>
);

export default TypeSystems;
