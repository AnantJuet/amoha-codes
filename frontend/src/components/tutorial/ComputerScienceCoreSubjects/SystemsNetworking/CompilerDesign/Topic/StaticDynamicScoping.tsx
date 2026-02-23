import React from "react";

const StaticDynamicScoping: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Static and Dynamic Scoping
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Scoping</strong> determines how variable names are resolved in a program.
      Static (lexical) scoping resolves names based on the program's textual structure,
      while dynamic scoping resolves names based on the runtime call stack. Most modern
      languages use static scoping for predictability and easier reasoning about code.
    </p>

    <h2 className="text-3xl font-bold mt-8">Static (Lexical) Scoping</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Static Scoping:
- Variable binding determined at COMPILE TIME
- Based on textual structure of program
- Enclosing scope is the lexically enclosing block
- Used by: C, Java, Python, JavaScript, most modern languages

Example:
    int x = 10;                 // Global x

    void foo() {
        print(x);               // Which x?
    }

    void bar() {
        int x = 20;             // Local x
        foo();                  // Calls foo
    }

    bar();                      // Output: 10 (static scoping)

With static scoping:
- foo() sees the x from its lexical scope (global)
- bar's local x is NOT visible to foo
- Binding is determined by where foo is DEFINED, not called`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Dynamic Scoping</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Dynamic Scoping:
- Variable binding determined at RUNTIME
- Based on the call stack
- Enclosing scope is the most recent activation
- Used by: Bash, older Lisps, Emacs Lisp, some Perl

Same Example with Dynamic Scoping:
    int x = 10;                 // Global x

    void foo() {
        print(x);               // Which x?
    }

    void bar() {
        int x = 20;             // Local x
        foo();                  // Calls foo
    }

    bar();                      // Output: 20 (dynamic scoping!)

With dynamic scoping:
- foo() sees x from bar's scope (caller)
- bar's local x IS visible to foo
- Binding is determined by call chain at runtime`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Static Scoping</th>
            <th className="p-3 border">Dynamic Scoping</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Resolution</td>
            <td className="p-3 border">Compile time</td>
            <td className="p-3 border">Runtime</td>
          </tr>
          <tr>
            <td className="p-3 border">Based on</td>
            <td className="p-3 border">Program text</td>
            <td className="p-3 border">Call stack</td>
          </tr>
          <tr>
            <td className="p-3 border">Predictability</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Low</td>
          </tr>
          <tr>
            <td className="p-3 border">Debugging</td>
            <td className="p-3 border">Easier</td>
            <td className="p-3 border">Harder</td>
          </tr>
          <tr>
            <td className="p-3 border">Performance</td>
            <td className="p-3 border">Faster (compiled)</td>
            <td className="p-3 border">Slower (runtime lookup)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Static Scoping Implementation:
- Use static links in activation records
- Follow chain of static links to find variable
- Compiler can compute offset at compile time

Dynamic Scoping Implementation:
Option 1: Search call stack
- Look through activation records top-down
- First match wins
- Slow: O(depth) per lookup

Option 2: Association list (A-list)
- Push (name, value) on call
- Pop on return
- Still O(n) lookup

Option 3: Deep binding table
- Hash table of name -> stack of values
- Push value on call, pop on return
- O(1) lookup`}
      </pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Static scoping resolves names based on program structure</li>
        <li>Dynamic scoping resolves names based on call stack</li>
        <li>Static scoping is more predictable and efficient</li>
        <li>Most modern languages use static scoping</li>
        <li>Dynamic scoping can be useful for configuration and context</li>
      </ul>
    </div>
  </div>
);

export default StaticDynamicScoping;
