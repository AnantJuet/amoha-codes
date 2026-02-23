import React from "react";

const ParameterPassing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Parameter Passing Mechanisms ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Parameter Passing Mechanisms
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Parameter passing</strong> defines how arguments are transferred from a calling
      procedure to a called procedure and how modifications to parameters affect the caller.
      Different parameter passing mechanisms have different semantics for how values, addresses,
      or expressions are communicated between procedures. The main mechanisms are call by value,
      call by reference, and call by name.
    </p>

    {/* Terminology */}
    <h2 className="text-3xl font-bold mt-8">Terminology</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Term</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Actual Parameter</td>
            <td className="p-3 border">The argument passed by the caller (e.g., x in foo(x))</td>
          </tr>
          <tr>
            <td className="p-3 border">Formal Parameter</td>
            <td className="p-3 border">The parameter declared in the function (e.g., a in void foo(int a))</td>
          </tr>
          <tr>
            <td className="p-3 border">L-value</td>
            <td className="p-3 border">Memory location (address) of a variable</td>
          </tr>
          <tr>
            <td className="p-3 border">R-value</td>
            <td className="p-3 border">Value stored in a variable</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Call by Value */}
    <h2 className="text-3xl font-bold mt-8">Call by Value</h2>
    <p className="leading-relaxed">
      In <strong>call by value</strong>, the value of the actual parameter is copied to the
      formal parameter. Changes to the formal parameter do not affect the actual parameter.
    </p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>A copy of the argument's value is passed</li>
      <li>Formal parameter is a local variable initialized with the copy</li>
      <li>Modifications do not affect the caller's variable</li>
      <li>Safe from unintended side effects</li>
      <li>Used by: C, Java (primitives), Python (immutable objects)</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// C - Call by Value

void increment(int n) {
    n = n + 1;  // Modifies local copy
    printf("Inside: n = %d\\n", n);  // n = 11
}

int main() {
    int x = 10;
    increment(x);
    printf("Outside: x = %d\\n", x);  // x = 10 (unchanged!)
    return 0;
}

Memory during increment():
+------------------+
| main's frame     |
| x = 10           |  <- Original, unchanged
+------------------+
| increment's frame|
| n = 11           |  <- Copy, modified
+------------------+

Output:
Inside: n = 11
Outside: x = 10`}
      </pre>
    </div>

    {/* Call by Reference */}
    <h2 className="text-3xl font-bold mt-8">Call by Reference</h2>
    <p className="leading-relaxed">
      In <strong>call by reference</strong>, the address (L-value) of the actual parameter
      is passed. The formal parameter becomes an alias for the actual parameter, and changes
      affect the original variable.
    </p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Address of the argument is passed</li>
      <li>Formal parameter is an alias for the actual parameter</li>
      <li>Modifications directly affect the caller's variable</li>
      <li>Efficient for large data structures (no copying)</li>
      <li>Used by: C++ (references), Fortran, Pascal (var parameters)</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// C++ - Call by Reference

void increment(int &n) {  // n is a reference
    n = n + 1;  // Modifies original
    cout << "Inside: n = " << n << endl;  // n = 11
}

int main() {
    int x = 10;
    increment(x);
    cout << "Outside: x = " << x << endl;  // x = 11 (changed!)
    return 0;
}

Memory during increment():
+------------------+
| main's frame     |
| x = 11           |  <- Modified through reference
+------------------+
| increment's frame|
| n -> (addr of x) |  <- Reference to x
+------------------+

Output:
Inside: n = 11
Outside: x = 11`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">C - Simulating Call by Reference with Pointers:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// C uses pointers to achieve reference-like behavior

void increment(int *n) {  // n is a pointer
    *n = *n + 1;  // Dereference and modify
}

int main() {
    int x = 10;
    increment(&x);  // Pass address of x
    printf("x = %d\\n", x);  // x = 11
    return 0;
}

Note: This is still call by value (the pointer value is copied),
but the effect is similar to call by reference.`}
      </pre>
    </div>

    {/* Call by Name */}
    <h2 className="text-3xl font-bold mt-8">Call by Name</h2>
    <p className="leading-relaxed">
      In <strong>call by name</strong>, the actual parameter is not evaluated until it is
      used in the called procedure. The parameter is textually substituted, and each use
      re-evaluates the expression.
    </p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Argument expression is passed unevaluated (as a "thunk")</li>
      <li>Evaluated each time the formal parameter is accessed</li>
      <li>Can have surprising side effects</li>
      <li>Enables lazy evaluation patterns</li>
      <li>Used by: Algol 60, (simulated in) Scala</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Pseudocode - Call by Name (Algol 60 style)

procedure swap(name a, name b);
begin
    integer temp;
    temp := a;
    a := b;
    b := temp;
end;

// Call with array elements
integer i;
integer array A[1:10];

i := 1;
A[1] := 10;
A[2] := 20;

swap(i, A[i]);  // What happens?

// With call by name, this expands to:
// temp := i;        // temp = 1
// i := A[i];        // i = A[1] = 10
// A[i] := temp;     // A[10] = 1 (not A[1]!)

// The index is re-evaluated each time!
// Result: A[10] = 1, i = 10, A[1] = 10

// This is known as "Jensen's device" side effect!`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Thunks (Call by Name Implementation):</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`A "thunk" is a parameterless procedure that evaluates
and returns the actual parameter's value:

procedure example(name x);
begin
    print(x);  // Calls thunk, gets current value
    i := i + 1;
    print(x);  // Calls thunk again, may get different value!
end;

i := 0;
example(A[i]);

// First print: thunk returns A[0]
// i becomes 1
// Second print: thunk returns A[1] (different!)

Thunk for A[i]:
function thunk():
    return &A[i]  // Re-evaluate expression each time`}
      </pre>
    </div>

    {/* Call by Value-Result */}
    <h2 className="text-3xl font-bold mt-8">Call by Value-Result (Copy-Restore)</h2>
    <p className="leading-relaxed">
      In <strong>call by value-result</strong>, the value is copied in at call time and
      copied back at return time:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Call by Value-Result:

1. On call: Copy actual parameter value to formal parameter
2. During execution: Work with local copy
3. On return: Copy formal parameter value back to actual parameter

procedure swap(inout a: integer, inout b: integer);
var temp: integer;
begin
    temp := a;
    a := b;
    b := temp;
end;

var x := 1, y := 2;
swap(x, y);
// After: x = 2, y = 1

Difference from call by reference:
If x and y are aliased (same variable),
call by reference and call by value-result differ!

swap(x, x);  // What happens?

Call by reference: temp = x; x = x; x = temp; // No change
Call by value-result: copies in twice, copies back twice
                      Final value depends on copy-back order!`}
      </pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison of Parameter Passing Mechanisms</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Mechanism</th>
            <th className="p-3 border">What's Passed</th>
            <th className="p-3 border">When Evaluated</th>
            <th className="p-3 border">Caller Affected</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Value</td>
            <td className="p-3 border">Copy of value</td>
            <td className="p-3 border">At call time</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Reference</td>
            <td className="p-3 border">Address</td>
            <td className="p-3 border">At call time</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Name</td>
            <td className="p-3 border">Thunk (code)</td>
            <td className="p-3 border">Each use</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Value-Result</td>
            <td className="p-3 border">Copy in, copy out</td>
            <td className="p-3 border">Call and return</td>
            <td className="p-3 border">Yes (at return)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Language Examples */}
    <h2 className="text-3xl font-bold mt-8">Parameter Passing in Different Languages</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Language Parameter Passing Summary:

C:
  - All parameters: call by value
  - Use pointers for reference-like behavior

C++:
  - Default: call by value
  - int& param: call by reference
  - const int& param: const reference (efficient, no modify)

Java:
  - Primitives: call by value
  - Objects: call by value of reference
    (reference is copied, but object is shared)

Python:
  - Everything is call by value of object reference
  - Immutable objects (int, str): behaves like call by value
  - Mutable objects (list, dict): modifications visible to caller

Fortran:
  - Default: call by reference

Pascal:
  - Default: call by value
  - var param: call by reference

Swift:
  - Default: call by value
  - inout param: call by value-result`}
      </pre>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`void foo(int a, int b) {
    a = a + 1;
    b = b + 2;
}
int main() {
    int x = 5, y = 10;
    foo(x, y);
    printf("%d %d", x, y);
}`}
      </pre>
    </div>
    <p className="leading-relaxed mt-2">
      With call by value, what is printed?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) 5 10</li>
      <li>(B) 6 12</li>
      <li>(C) 6 10</li>
      <li>(D) 5 12</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (A) 5 10 - Call by value copies values, so x and y are unchanged.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      What is a "thunk" in the context of call by name?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) A copy of the argument value</li>
      <li>(B) A parameterless procedure that evaluates the argument</li>
      <li>(C) The address of the argument</li>
      <li>(D) A type conversion function</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) A parameterless procedure that evaluates the argument - Thunks delay and repeat evaluation.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      Which parameter passing mechanism is most efficient for passing large structures when no modification is needed?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Call by value</li>
      <li>(B) Call by name</li>
      <li>(C) Const reference</li>
      <li>(D) Call by value-result</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Const reference - Avoids copying while preventing modification.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Call by value copies the argument; changes don't affect the caller</li>
      <li>Call by reference passes the address; the formal parameter is an alias</li>
      <li>Call by name passes a thunk; the expression is re-evaluated each use</li>
      <li>Call by value-result copies in and copies back on return</li>
      <li>Different languages have different default and optional mechanisms</li>
      <li>Choice of mechanism affects both semantics and performance</li>
    </ul>

  </div>
);

export default ParameterPassing;
