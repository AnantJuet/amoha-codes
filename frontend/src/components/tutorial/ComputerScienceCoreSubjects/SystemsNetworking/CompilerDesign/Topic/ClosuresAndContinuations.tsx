import React from "react";

const ClosuresAndContinuations: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Closures and Continuations
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Closures</strong> are functions that capture variables from their enclosing
      scope. <strong>Continuations</strong> represent the rest of a computation at any
      point in program execution. Both concepts require special runtime support and
      present interesting challenges for compiler implementation.
    </p>

    <h2 className="text-3xl font-bold mt-8">Closures</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Closure = Function + Environment

function makeCounter() {
    let count = 0;           // Free variable
    return function() {      // Closure
        count++;
        return count;
    };
}

let counter = makeCounter();
counter();  // 1
counter();  // 2
counter();  // 3

The inner function "closes over" the variable count.
Even after makeCounter returns, count is preserved.

Closure Structure:
+------------------+
| Closure          |
+------------------+
| code pointer     |--> function code
| environment ptr  |--> +-------------+
+------------------+    | count: 3    |
                        +-------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Closure Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Implementation Options:

1. HEAP-ALLOCATED ENVIRONMENT
   - Captured variables live on heap
   - Closure points to heap environment
   - Variables outlive stack frame

2. FLAT CLOSURE (Copy captured values)
   - Copy values into closure object
   - Simple but doesn't support mutation

3. DISPLAY/STATIC CHAIN
   - Keep chain of environments
   - Follow chain to find variables

JavaScript Implementation:
function outer(x) {
    return function inner(y) {
        return x + y;
    };
}

// Compiled closure object:
{
    code: inner_code_addr,
    env: { x: value_of_x }
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Continuations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Continuation = "The rest of the computation"

At any point in execution, the continuation is
what would happen next with the current value.

Example: 1 + 2 * 3

At "2 * 3", continuation is: "take result, add 1, return"

call/cc (call-with-current-continuation):
(define (example)
  (+ 1 (call/cc
         (lambda (k)    ; k is the continuation
           (k 10)       ; invoke continuation with 10
           5))))        ; never reached
; Returns 11 (1 + 10)

The continuation k represents:
"take a value, add 1 to it, and return"`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Use Cases</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Concept</th>
            <th className="p-3 border">Use Cases</th>
            <th className="p-3 border">Languages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Closures</td>
            <td className="p-3 border">Callbacks, iterators, encapsulation</td>
            <td className="p-3 border">JS, Python, Rust, Swift</td>
          </tr>
          <tr>
            <td className="p-3 border">Continuations</td>
            <td className="p-3 border">Exceptions, coroutines, generators</td>
            <td className="p-3 border">Scheme, Ruby, Haskell</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation Challenges</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Closure Challenges:
1. Stack-allocated variables can't be captured
   Solution: Heap-allocate or copy

2. Mutable captured variables
   Solution: Box/cell indirection

3. Lifetime management
   Solution: GC or reference counting

Continuation Challenges:
1. Must save entire call stack
   Solution: CPS transform or stack copying

2. Space efficiency
   Solution: Delimited continuations

3. Integration with exceptions
   Solution: Unified exception/continuation model`}
      </pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Closures capture variables from enclosing scope</li>
        <li>Require heap allocation for captured variables</li>
        <li>Continuations represent remaining computation</li>
        <li>Enable advanced control flow patterns</li>
        <li>Both require special runtime support</li>
      </ul>
    </div>
  </div>
);

export default ClosuresAndContinuations;
