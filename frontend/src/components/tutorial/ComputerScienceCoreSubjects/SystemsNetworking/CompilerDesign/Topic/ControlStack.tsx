import React from "react";

const ControlStack: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Runtime Control Stack ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Runtime Control Stack
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The <strong>control stack</strong> (also called the runtime stack or call stack) is a
      fundamental data structure that manages procedure activations during program execution.
      It stores activation records in a Last-In-First-Out (LIFO) manner, enabling the runtime
      system to track which procedures are currently active, manage local variables, handle
      return addresses, and properly return control to calling procedures.
    </p>

    {/* What is the Control Stack */}
    <h2 className="text-3xl font-bold mt-8">What is the Control Stack?</h2>
    <p className="leading-relaxed">
      The control stack is a region of memory that holds activation records for all currently
      active procedure calls:
    </p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Grows and shrinks as procedures are called and return</li>
      <li>Top of stack contains the currently executing procedure's frame</li>
      <li>Each frame contains data for one procedure activation</li>
      <li>Managed by stack pointer (SP) and frame pointer (FP) registers</li>
      <li>Supports the procedure call/return mechanism</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Control Stack Structure:

High Address
+---------------------------+
|   Activation Record       |
|   for main()              |
|   (oldest, at bottom)     |
+---------------------------+
|   Activation Record       |
|   for function_A()        |
+---------------------------+
|   Activation Record       |
|   for function_B()        |
+---------------------------+
|   Activation Record       |
|   for function_C()        |
|   (newest, at top)        |  <- Stack Pointer (SP)
+---------------------------+
|                           |
|   (Available Space)       |
|                           |
+---------------------------+
Low Address

Call sequence: main() -> A() -> B() -> C()
Return sequence: C() -> B() -> A() -> main()`}
      </pre>
    </div>

    {/* Stack Operations */}
    <h2 className="text-3xl font-bold mt-8">Stack Operations During Execution</h2>

    <h3 className="text-2xl font-semibold mt-6">Push Operation (Procedure Call)</h3>
    <p className="leading-relaxed">
      When a procedure is called, a new activation record is pushed onto the stack:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Before call:                After call to foo():

+------------------+        +------------------+
| main's frame     |        | main's frame     |
+------------------+ <- SP  +------------------+
                            | foo's frame      |
                            +------------------+ <- SP

Steps during PUSH:
1. Push actual parameters
2. Push return address
3. Save old frame pointer
4. Set new frame pointer
5. Allocate space for locals
6. Update stack pointer`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Pop Operation (Procedure Return)</h3>
    <p className="leading-relaxed">
      When a procedure returns, its activation record is popped from the stack:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Before return:              After foo() returns:

+------------------+        +------------------+
| main's frame     |        | main's frame     |
+------------------+        +------------------+ <- SP
| foo's frame      |
+------------------+ <- SP

Steps during POP:
1. Place return value
2. Restore saved registers
3. Set SP to FP
4. Restore old FP
5. Jump to return address`}
      </pre>
    </div>

    {/* Stack Pointer and Frame Pointer */}
    <h2 className="text-3xl font-bold mt-8">Stack Pointer vs Frame Pointer</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Register</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Behavior</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Stack Pointer (SP/RSP)</td>
            <td className="p-3 border">Points to top of stack</td>
            <td className="p-3 border">Changes with push/pop</td>
          </tr>
          <tr>
            <td className="p-3 border">Frame Pointer (FP/RBP)</td>
            <td className="p-3 border">Points to current frame base</td>
            <td className="p-3 border">Fixed during function execution</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Stack Frame with Pointers:

+---------------------------+
| Parameter 2               |  FP + 24
+---------------------------+
| Parameter 1               |  FP + 16
+---------------------------+
| Return Address            |  FP + 8
+---------------------------+
| Saved FP                  |  <- Frame Pointer (FP)
+---------------------------+
| Local Variable 1          |  FP - 8
+---------------------------+
| Local Variable 2          |  FP - 16
+---------------------------+
| Temporary                 |  FP - 24
+---------------------------+  <- Stack Pointer (SP)

FP provides stable reference for accessing:
- Parameters (positive offsets)
- Locals (negative offsets)`}
      </pre>
    </div>

    {/* Example Execution Trace */}
    <h2 className="text-3xl font-bold mt-8">Execution Trace Example</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Program Code:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`int multiply(int a, int b) {
    int product = a * b;
    return product;
}

int calculate(int x) {
    int y = 5;
    int result = multiply(x, y);
    return result;
}

int main() {
    int n = 10;
    int answer = calculate(n);
    return 0;
}`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Control Stack Evolution:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Step 1: main() executing
+-------------------+
| main              |
| n = 10            |
| answer = ?        |
+-------------------+ <- SP

Step 2: calculate(10) called
+-------------------+
| main              |
| n = 10            |
| answer = ?        |
+-------------------+
| calculate         |
| x = 10            |
| y = 5             |
| result = ?        |
+-------------------+ <- SP

Step 3: multiply(10, 5) called
+-------------------+
| main              |
+-------------------+
| calculate         |
| x = 10, y = 5     |
+-------------------+
| multiply          |
| a = 10, b = 5     |
| product = 50      |
+-------------------+ <- SP

Step 4: multiply returns 50
+-------------------+
| main              |
+-------------------+
| calculate         |
| x = 10, y = 5     |
| result = 50       |
+-------------------+ <- SP

Step 5: calculate returns 50
+-------------------+
| main              |
| n = 10            |
| answer = 50       |
+-------------------+ <- SP`}
      </pre>
    </div>

    {/* Chain of Control Links */}
    <h2 className="text-3xl font-bold mt-8">Chain of Control Links</h2>
    <p className="leading-relaxed">
      Each activation record contains a control link (saved frame pointer) that points to the
      caller's activation record, forming a chain:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Control Link Chain:

+-------------------+
| main's frame      |
| Saved FP = NULL   |  <- End of chain
+-------------------+
         ^
         |  (control link)
+-------------------+
| calculate's frame |
| Saved FP ---------|----+
+-------------------+    |
         ^               |
         |               |
+-------------------+    |
| multiply's frame  |    |
| Saved FP ---------|----+
+-------------------+ <- FP (current)

Following the chain from multiply:
multiply -> calculate -> main -> (end)

This chain allows:
1. Restoring FP on return
2. Walking the stack for debugging
3. Exception handling (unwinding)`}
      </pre>
    </div>

    {/* Stack Unwinding */}
    <h2 className="text-3xl font-bold mt-8">Stack Unwinding</h2>
    <p className="leading-relaxed">
      Stack unwinding is the process of removing stack frames, either normally (returns) or
      exceptionally (exception handling):
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Normal Unwinding (Sequential Returns):

Initial:            After d() returns:    After c() returns:
+--------+          +--------+            +--------+
| main   |          | main   |            | main   |
+--------+          +--------+            +--------+
| a      |          | a      |            | a      |
+--------+          +--------+            +--------+ <- SP
| b      |          | b      |
+--------+          +--------+ <- SP
| c      |
+--------+
| d      |
+--------+ <- SP


Exception Unwinding:
+--------+
| main   |   <- Has try-catch
+--------+
| func1  |   <- No handler
+--------+
| func2  |   <- No handler
+--------+
| func3  |   <- Exception thrown here!
+--------+

Exception propagates up, unwinding stack:
1. func3 frame removed (no handler)
2. func2 frame removed (no handler)
3. func1 frame removed (no handler)
4. main catches exception

Destructors (C++) or finally blocks (Java)
are called during unwinding!`}
      </pre>
    </div>

    {/* Stack Overflow */}
    <h2 className="text-3xl font-bold mt-8">Stack Overflow</h2>
    <p className="leading-relaxed">
      Stack overflow occurs when the control stack exceeds its allocated memory:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Stack Memory Layout:

+---------------------------+  Stack Limit (High)
|                           |
| Stack grows down          |
|     |                     |
|     v                     |
|                           |
| Current Stack             |
| +---------------------+   |
| | main                |   |
| +---------------------+   |
| | recursive(1000)     |   |
| +---------------------+   |
| | recursive(999)      |   |
| +---------------------+   |
| | ...                 |   |
| +---------------------+   |
| | recursive(1)        |   |  <- SP approaching limit
| +---------------------+   |
+---------------------------+  Stack Limit (Low)
|                           |
|  GUARD PAGE / HEAP        |  <- Crash if accessed
|                           |
+---------------------------+

Causes of Stack Overflow:
1. Infinite recursion
2. Very deep recursion
3. Large local arrays
4. Too many function arguments`}
      </pre>
    </div>

    {/* Relationship to Activation Tree */}
    <h2 className="text-3xl font-bold mt-8">Control Stack and Activation Tree</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Activation Tree:                Control Stack (at point *):

         main                    +------------------+
        /    \\                   | main             |
       a      b                  +------------------+
       |     / \\                 | b                |
       c    d   e*               +------------------+
                                 | e    <- current  |
                                 +------------------+

The control stack contains EXACTLY the nodes
on the path from root to current position:

main -> b -> e

When e returns:
- Pop e from stack
- Continue in b (next: nothing left)

When b returns:
- Pop b from stack
- Continue in main`}
      </pre>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      What happens to the stack pointer when a function is called?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) It increases (moves to higher address)</li>
      <li>(B) It decreases (moves to lower address)</li>
      <li>(C) It stays the same</li>
      <li>(D) It becomes NULL</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) It decreases - The stack grows downward, so SP moves to lower addresses.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      The control link in an activation record points to:
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) The next instruction to execute</li>
      <li>(B) The caller's activation record</li>
      <li>(C) The global data area</li>
      <li>(D) The heap</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) The caller's activation record - The control link (saved FP) allows returning to the caller's frame.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      What is stack unwinding in the context of exception handling?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Adding more stack frames</li>
      <li>(B) Removing stack frames while searching for a handler</li>
      <li>(C) Compressing the stack</li>
      <li>(D) Moving the stack to heap</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Removing stack frames while searching for a handler - Unwinding pops frames until an exception handler is found.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>The control stack manages all active procedure activations in LIFO order</li>
      <li>Stack pointer (SP) tracks the top; frame pointer (FP) provides stable frame reference</li>
      <li>Control links form a chain through all active activation records</li>
      <li>Stack unwinding removes frames during returns or exception handling</li>
      <li>The stack corresponds to the path from root to current node in activation tree</li>
      <li>Stack overflow occurs when recursion or local data exceeds stack limits</li>
    </ul>

  </div>
);

export default ControlStack;
