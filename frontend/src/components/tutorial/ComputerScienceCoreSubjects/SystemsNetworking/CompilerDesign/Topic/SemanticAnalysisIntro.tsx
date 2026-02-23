import React from "react";

const SemanticAnalysisIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Semantic Analysis
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Semantic analysis is the third phase of a compiler that ensures the source code makes
      sense logically. It checks for semantic errors that cannot be detected during lexical
      or syntax analysis, such as type mismatches, undeclared variables, and scope violations.
    </p>

    <h2 className="text-3xl font-bold mt-8">Role in Compilation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
Compilation Pipeline:

Source Code
    ↓
[Lexical Analysis] → Tokens
    ↓
[Syntax Analysis] → Parse Tree / AST
    ↓
[Semantic Analysis] → Annotated AST  ← YOU ARE HERE
    ↓
[Intermediate Code Generation]
    ↓
[Code Optimization]
    ↓
[Code Generation] → Target Code
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Checks in Semantic Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Check Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example Error</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Type Checking</td>
            <td className="p-3 border">Ensures operands have compatible types</td>
            <td className="p-3 border font-mono text-gray-900">int x = "hello";</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scope Resolution</td>
            <td className="p-3 border">Verifies variables are declared before use</td>
            <td className="p-3 border font-mono text-gray-900">y = 5; // y not declared</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Function Calls</td>
            <td className="p-3 border">Validates argument count and types</td>
            <td className="p-3 border font-mono text-gray-900">func(1, 2, 3); // expects 2 args</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Array Bounds</td>
            <td className="p-3 border">Checks array index validity</td>
            <td className="p-3 border font-mono text-gray-900">arr[-1] // invalid index</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Return Types</td>
            <td className="p-3 border">Ensures return matches function type</td>
            <td className="p-3 border font-mono text-gray-900">int func() {"{"} return "x"; {"}"}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Type Mismatch Detection</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
Source Code:
    int a = 5;
    float b = 3.5;
    a = a + b;    // Type mismatch!

Semantic Analysis Output:
    Error: Cannot assign float to int without explicit cast
    Line 3: Type mismatch in assignment

Solution:
    a = (int)(a + b);  // Explicit type cast
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Symbol Table Usage</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <p className="mb-2">The semantic analyzer heavily relies on the symbol table to:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Store and retrieve variable types and scopes</li>
        <li>Track function signatures and parameters</li>
        <li>Manage nested scopes and visibility</li>
        <li>Detect duplicate declarations</li>
        <li>Support type inference and checking</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Semantic analysis ensures logical correctness of code</li>
        <li>Uses symbol table for type and scope information</li>
        <li>Detects errors that syntax analysis cannot find</li>
        <li>Produces an annotated AST for code generation</li>
        <li>Essential for generating correct target code</li>
      </ul>
    </div>
  </div>
);

export default SemanticAnalysisIntro;
