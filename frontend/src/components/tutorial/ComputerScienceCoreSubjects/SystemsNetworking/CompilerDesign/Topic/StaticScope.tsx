import React from "react";

const StaticScope: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Static/Lexical Scoping ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Static/Lexical Scoping
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Static scoping</strong> (also called <strong>lexical scoping</strong>) is a scoping
      mechanism where the scope of a variable is determined by its position in the source code.
      A variable's binding is resolved based on the lexical structure of the program (how the code
      is written), not on the runtime call sequence. Most modern programming languages including
      C, C++, Java, Python, and JavaScript use static scoping.
    </p>

    {/* What is Static Scoping */}
    <h2 className="text-3xl font-bold mt-8">What is Static Scoping?</h2>
    <p className="leading-relaxed">
      In static scoping, variable references are resolved at compile time based on the textual
      nesting of scopes in the source code:
    </p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>The scope of a variable is determined by its lexical context</li>
      <li>A reference is resolved by searching outward through enclosing blocks</li>
      <li>The binding can be determined by examining the source code alone</li>
      <li>Does not depend on how procedures are called at runtime</li>
      <li>Most common scoping rule in modern languages</li>
    </ul>

    {/* Basic Example */}
    <h2 className="text-3xl font-bold mt-8">Basic Example</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`int x = 10;  // Global scope

void foo() {
    int x = 20;  // Local to foo
    printf("%d", x);  // Prints 20 (local x)
}

void bar() {
    printf("%d", x);  // Prints 10 (global x)
}

int main() {
    foo();  // Output: 20
    bar();  // Output: 10
    printf("%d", x);  // Output: 10 (global x)
    return 0;
}

Scope Resolution:
- In foo(): x resolves to foo's local x (20)
- In bar(): x resolves to global x (10)
- In main(): x resolves to global x (10)

This is determined by the CODE STRUCTURE, not call order!`}
      </pre>
    </div>

    {/* Nested Functions Example */}
    <h2 className="text-3xl font-bold mt-8">Nested Functions Example</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Pascal-like pseudocode with nested functions

program StaticScopeDemo;
var x: integer;  // Global, level 0

procedure A;      // Level 1
var y: integer;

    procedure B;   // Level 2, nested in A
    begin
        write(x);  // Accesses global x
        write(y);  // Accesses A's y (enclosing scope)
    end;

begin
    y := 5;
    B;
end;

procedure C;      // Level 1
begin
    A;
end;

begin
    x := 10;
    C;  // Calls C, which calls A, which calls B
end.

When B executes (called via C -> A -> B):
- x refers to global x = 10
- y refers to A's y = 5

Even though C called A, B's scope is determined by
where B is DEFINED (inside A), not where A is called!`}
      </pre>
    </div>

    {/* Scope Resolution Rules */}
    <h2 className="text-3xl font-bold mt-8">Scope Resolution Rules</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Static Scope Resolution Algorithm:

To resolve a reference to variable 'v' in procedure P:

1. Look in P's local declarations
   - If found, use this binding

2. If not found, look in P's immediately enclosing scope
   - If found, use this binding

3. Continue outward through enclosing scopes
   - Check each enclosing block/procedure

4. Finally check the global scope
   - If found, use this binding

5. If still not found
   - Report "undefined variable" error

Example:
+---------------------------+
| Global Scope              |
| int x = 1;                |
| +-----------------------+ |
| | Function A            | |
| | int y = 2;            | |
| | +-------------------+ | |
| | | Function B        | | |
| | | int z = 3;        | | |
| | | // Access x: 1    | | |
| | | // Access y: 2    | | |
| | | // Access z: 3    | | |
| | +-------------------+ | |
| +-----------------------+ |
+---------------------------+`}
      </pre>
    </div>

    {/* Block Scope */}
    <h2 className="text-3xl font-bold mt-8">Block Scope</h2>
    <p className="leading-relaxed">
      Many languages support block-level scoping where variables can be declared in any block:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`void example() {
    int x = 1;

    {
        int y = 2;
        printf("%d %d", x, y);  // OK: x=1, y=2

        {
            int z = 3;
            printf("%d %d %d", x, y, z);  // OK: x=1, y=2, z=3
        }

        // z is out of scope here
    }

    // y is out of scope here
    printf("%d", x);  // OK: x=1
}

Scope Nesting:
+-------------------------+
| Function scope          |
| x = 1                   |
| +---------------------+ |
| | Block 1             | |
| | y = 2               | |
| | +-----------------+ | |
| | | Block 2         | | |
| | | z = 3           | | |
| | +-----------------+ | |
| +---------------------+ |
+-------------------------+`}
      </pre>
    </div>

    {/* Variable Shadowing */}
    <h2 className="text-3xl font-bold mt-8">Variable Shadowing</h2>
    <p className="leading-relaxed">
      When an inner scope declares a variable with the same name as an outer scope variable,
      the inner variable <strong>shadows</strong> (hides) the outer one:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`int x = 100;  // Global x

void foo() {
    int x = 200;  // Shadows global x

    printf("%d\\n", x);  // Prints 200

    {
        int x = 300;  // Shadows foo's x
        printf("%d\\n", x);  // Prints 300
    }

    printf("%d\\n", x);  // Prints 200 (foo's x)
}

int main() {
    printf("%d\\n", x);  // Prints 100 (global x)
    foo();
    printf("%d\\n", x);  // Prints 100 (global x unchanged)
    return 0;
}

Output:
100
200
300
200
100

Each scope has its own 'x', the innermost one is used.`}
      </pre>
    </div>

    {/* Implementation with Symbol Tables */}
    <h2 className="text-3xl font-bold mt-8">Implementation with Symbol Tables</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Compiler uses a symbol table stack for static scoping:

int x = 1;
void A() {
    int y = 2;
    void B() {
        int z = 3;
        // Reference to x, y, z here
    }
    B();
}

Symbol Table Stack (when compiling B's body):

+------------------+
| Scope: B         |  <- Top (current scope)
| z -> local       |
+------------------+
| Scope: A         |
| y -> local       |
+------------------+
| Scope: Global    |
| x -> global      |
| A -> procedure   |
+------------------+

Lookup 'z': Found in B (top)
Lookup 'y': Not in B, found in A
Lookup 'x': Not in B, not in A, found in Global
Lookup 'w': Not found -> Error!`}
      </pre>
    </div>

    {/* Advantages of Static Scoping */}
    <h2 className="text-3xl font-bold mt-8">Advantages of Static Scoping</h2>

    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>
        <strong>Readability:</strong> Variable bindings can be determined by reading the code
      </li>
      <li>
        <strong>Early Error Detection:</strong> Undefined variable errors caught at compile time
      </li>
      <li>
        <strong>Optimization:</strong> Compiler knows exactly where variables are located
      </li>
      <li>
        <strong>Modularity:</strong> Procedure behavior depends only on its definition context
      </li>
      <li>
        <strong>Debugging:</strong> Easier to trace variable values through code structure
      </li>
    </ul>

    {/* Closures and Static Scope */}
    <h2 className="text-3xl font-bold mt-8">Closures and Static Scope</h2>
    <p className="leading-relaxed">
      Static scoping is essential for closures, where a function captures variables from its
      defining environment:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// JavaScript closure example

function makeCounter() {
    let count = 0;  // Captured by inner function

    return function() {
        count++;       // References count from makeCounter
        return count;
    };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1());  // 1
console.log(counter1());  // 2
console.log(counter2());  // 1 (separate count)
console.log(counter1());  // 3

Static scoping ensures:
- Inner function sees 'count' from its defining scope
- Each makeCounter() call creates a new 'count'
- The returned function "closes over" that specific 'count'`}
      </pre>
    </div>

    {/* Comparison with Dynamic Scope */}
    <h2 className="text-3xl font-bold mt-8">Static vs Dynamic Scoping</h2>

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
            <td className="p-3 border">Resolution Time</td>
            <td className="p-3 border">Compile time</td>
            <td className="p-3 border">Runtime</td>
          </tr>
          <tr>
            <td className="p-3 border">Based On</td>
            <td className="p-3 border">Lexical structure</td>
            <td className="p-3 border">Call sequence</td>
          </tr>
          <tr>
            <td className="p-3 border">Predictability</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Low</td>
          </tr>
          <tr>
            <td className="p-3 border">Languages</td>
            <td className="p-3 border">C, Java, Python</td>
            <td className="p-3 border">Some Lisps, Bash</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      In static scoping, variable bindings are determined by:
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) The order of function calls at runtime</li>
      <li>(B) The textual structure of the source code</li>
      <li>(C) The order of variable declarations</li>
      <li>(D) The size of the variable</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) The textual structure of the source code - Static/lexical scoping uses code structure.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      What is variable shadowing?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Deleting a variable</li>
      <li>(B) An inner scope variable hiding an outer scope variable of the same name</li>
      <li>(C) Making a variable invisible to all scopes</li>
      <li>(D) Creating a copy of a variable</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) An inner scope variable hiding an outer scope variable of the same name</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`int x = 1;
void foo() { printf("%d", x); }
void bar() { int x = 2; foo(); }
int main() { bar(); return 0; }`}
      </pre>
    </div>
    <p className="leading-relaxed mt-2">
      With static scoping, what does this program print?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) 1</li>
      <li>(B) 2</li>
      <li>(C) Error</li>
      <li>(D) Undefined</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (A) 1 - foo() sees global x, not bar's local x, because foo is defined at global scope.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Static scoping determines variable bindings based on source code structure</li>
      <li>Variables are resolved by searching outward through enclosing lexical scopes</li>
      <li>Variable shadowing occurs when an inner scope declares a variable with the same name</li>
      <li>Closures rely on static scoping to capture their defining environment</li>
      <li>Most modern languages (C, Java, Python, JavaScript) use static scoping</li>
      <li>Static scoping enables compile-time error detection and optimization</li>
    </ul>

  </div>
);

export default StaticScope;
