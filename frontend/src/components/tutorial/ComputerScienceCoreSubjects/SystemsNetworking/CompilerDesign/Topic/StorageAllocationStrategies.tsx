import React from "react";

const StorageAllocationStrategies: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Storage Allocation Strategies
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Storage allocation strategies</strong> determine where and how memory is
      allocated for program data. The choice of strategy depends on the lifetime, size,
      and nature of the data being stored. Compilers must select appropriate strategies
      to ensure correct and efficient memory usage.
    </p>

    <h2 className="text-3xl font-bold mt-8">Three Storage Regions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Memory Layout:
+------------------+ High addresses
|      Stack       | <- Local variables, parameters
|        |         |
|        v         |
|                  |
|        ^         |
|        |         |
|       Heap       | <- Dynamic allocation
+------------------+
|       BSS        | <- Uninitialized globals
+------------------+
|      Data        | <- Initialized globals
+------------------+
|      Text        | <- Program code
+------------------+ Low addresses

Three Main Regions:
1. STATIC (Data/BSS): Global/static variables
2. STACK: Local variables, function calls
3. HEAP: Dynamic allocation (malloc/new)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Allocation Strategy Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Static</th>
            <th className="p-3 border">Stack</th>
            <th className="p-3 border">Heap</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Lifetime</td>
            <td className="p-3 border">Entire program</td>
            <td className="p-3 border">Function call</td>
            <td className="p-3 border">Programmer controlled</td>
          </tr>
          <tr>
            <td className="p-3 border">Size known</td>
            <td className="p-3 border">Compile time</td>
            <td className="p-3 border">Compile time</td>
            <td className="p-3 border">Runtime</td>
          </tr>
          <tr>
            <td className="p-3 border">Allocation</td>
            <td className="p-3 border">Load time</td>
            <td className="p-3 border">Function entry</td>
            <td className="p-3 border">Explicit request</td>
          </tr>
          <tr>
            <td className="p-3 border">Deallocation</td>
            <td className="p-3 border">Program exit</td>
            <td className="p-3 border">Function return</td>
            <td className="p-3 border">Explicit or GC</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Fastest</td>
            <td className="p-3 border">Very fast</td>
            <td className="p-3 border">Slower</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use Each Strategy</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`STATIC ALLOCATION
Use for:
- Global variables
- Static local variables
- Constants and string literals
- Variables that persist across calls

int globalCounter = 0;        // Static (data section)
const char* message = "Hello"; // Static (rodata)

STACK ALLOCATION
Use for:
- Local variables (fixed size)
- Function parameters
- Return addresses
- Temporary values

void foo() {
    int local = 5;        // Stack
    int arr[10];          // Stack (fixed size)
}

HEAP ALLOCATION
Use for:
- Dynamic-sized data structures
- Objects that outlive function
- Large allocations
- Linked structures

void bar() {
    int* arr = malloc(n * sizeof(int));  // Heap
    Node* node = new Node();             // Heap
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Compiler Decisions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Compiler chooses allocation based on:

1. Scope and lifetime
   - Block scope -> stack
   - File/global scope -> static
   - Unknown lifetime -> heap

2. Size requirements
   - Fixed, small size -> stack
   - Fixed, known at compile -> static or stack
   - Variable size -> heap

3. Language semantics
   - C arrays -> stack (fixed) or heap (dynamic)
   - Java objects -> always heap
   - Rust: stack by default, Box<T> for heap`}
      </pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Static: compile-time known, program lifetime</li>
        <li>Stack: LIFO, automatic, function-scoped</li>
        <li>Heap: dynamic, explicit management</li>
        <li>Compiler chooses based on scope, size, lifetime</li>
        <li>Stack is fastest, heap is most flexible</li>
      </ul>
    </div>
  </div>
);

export default StorageAllocationStrategies;
