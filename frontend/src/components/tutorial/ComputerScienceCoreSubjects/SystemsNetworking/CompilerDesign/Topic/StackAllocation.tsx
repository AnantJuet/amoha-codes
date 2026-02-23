import React from "react";

const StackAllocation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Stack-Based Allocation ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Stack-Based Allocation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Stack-based allocation</strong> is a memory management strategy where memory for
      local variables and procedure activations is allocated on a runtime stack. This approach
      follows the Last-In-First-Out (LIFO) principle, making it ideal for managing procedure
      calls and returns. Stack allocation enables support for recursion and is used by most
      modern programming languages including C, C++, Java, and Python.
    </p>

    {/* How Stack Allocation Works */}
    <h2 className="text-3xl font-bold mt-8">How Stack Allocation Works</h2>
    <p className="leading-relaxed">
      The runtime stack grows and shrinks as procedures are called and return. Each procedure
      call pushes an activation record (stack frame) onto the stack, and returning from a
      procedure pops the frame.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Stack Operations During Procedure Calls:

1. CALL: Push activation record
   - Save return address
   - Push parameters
   - Push local variables
   - Update stack pointer

2. RETURN: Pop activation record
   - Restore saved registers
   - Pop local variables
   - Pop parameters
   - Jump to return address

Stack Pointer (SP) Management:
+------------------+
|  main's frame    |
+------------------+
|  foo's frame     |
+------------------+
|  bar's frame     |  <- SP after calling bar
+------------------+
        |
        v  (stack grows downward)

After bar returns:
+------------------+
|  main's frame    |
+------------------+
|  foo's frame     |  <- SP after bar returns
+------------------+`}
      </pre>
    </div>

    {/* Stack Frame Structure */}
    <h2 className="text-3xl font-bold mt-8">Stack Frame Structure</h2>
    <p className="leading-relaxed">
      A stack frame (activation record) contains all the data needed for a single procedure
      activation:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Typical Stack Frame Layout:

+---------------------------+  Higher Addresses
|    Caller's Frame         |
+---------------------------+
|    Arguments (passed      |
|    by caller)             |
+---------------------------+
|    Return Address         |
+---------------------------+
|    Saved Frame Pointer    |  <- Frame Pointer (FP/BP)
+---------------------------+
|    Saved Registers        |
+---------------------------+
|    Local Variables        |
+---------------------------+
|    Temporary Values       |
+---------------------------+  <- Stack Pointer (SP)
        |
        v  (space for new frames)

Lower Addresses`}
      </pre>
    </div>

    {/* Example: Procedure Call Sequence */}
    <h2 className="text-3xl font-bold mt-8">Example: Procedure Call Sequence</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">C Code Example:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`int add(int a, int b) {
    int sum = a + b;
    return sum;
}

int main() {
    int x = 5;
    int y = 10;
    int result = add(x, y);
    return 0;
}`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Stack Evolution:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Step 1: main() starts
+------------------+
| main's frame     |
| x = 5            |
| y = 10           |
| result = ?       |
+------------------+ <- SP

Step 2: Calling add(x, y)
+------------------+
| main's frame     |
| x = 5            |
| y = 10           |
| result = ?       |
+------------------+
| Arguments:       |
| a = 5            |
| b = 10           |
+------------------+
| Return address   |
+------------------+
| Saved FP         |  <- FP
+------------------+
| add's frame      |
| sum = 15         |
+------------------+ <- SP

Step 3: add() returns (sum = 15)
+------------------+
| main's frame     |
| x = 5            |
| y = 10           |
| result = 15      |
+------------------+ <- SP

add's frame is popped!`}
      </pre>
    </div>

    {/* Supporting Recursion */}
    <h2 className="text-3xl font-bold mt-8">Supporting Recursion</h2>
    <p className="leading-relaxed">
      Stack allocation naturally supports recursion because each recursive call gets its own
      independent stack frame with its own copy of local variables:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Recursive Factorial:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Call: factorial(4)

Stack during deepest recursion:

+----------------------+
| factorial(4)         |
| n = 4                |
| return: 4 * fact(3)  |
+----------------------+
| factorial(3)         |
| n = 3                |
| return: 3 * fact(2)  |
+----------------------+
| factorial(2)         |
| n = 2                |
| return: 2 * fact(1)  |
+----------------------+
| factorial(1)         |
| n = 1                |
| return: 1            |  <- Base case
+----------------------+ <- SP

Each call has its OWN copy of 'n'!

Unwinding:
factorial(1) returns 1
factorial(2) returns 2 * 1 = 2
factorial(3) returns 3 * 2 = 6
factorial(4) returns 4 * 6 = 24`}
      </pre>
    </div>

    {/* Register Allocation */}
    <h2 className="text-3xl font-bold mt-8">Registers and Calling Conventions</h2>
    <p className="leading-relaxed">
      Stack allocation works closely with CPU registers. Calling conventions define how
      parameters are passed, results returned, and which registers must be preserved:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Convention</th>
            <th className="p-3 border">Parameters</th>
            <th className="p-3 border">Return Value</th>
            <th className="p-3 border">Stack Cleanup</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">cdecl (C)</td>
            <td className="p-3 border">Right to left on stack</td>
            <td className="p-3 border">EAX/RAX</td>
            <td className="p-3 border">Caller</td>
          </tr>
          <tr>
            <td className="p-3 border">stdcall (Win32)</td>
            <td className="p-3 border">Right to left on stack</td>
            <td className="p-3 border">EAX</td>
            <td className="p-3 border">Callee</td>
          </tr>
          <tr>
            <td className="p-3 border">System V AMD64</td>
            <td className="p-3 border">RDI, RSI, RDX, RCX, R8, R9</td>
            <td className="p-3 border">RAX</td>
            <td className="p-3 border">Caller</td>
          </tr>
          <tr>
            <td className="p-3 border">Microsoft x64</td>
            <td className="p-3 border">RCX, RDX, R8, R9</td>
            <td className="p-3 border">RAX</td>
            <td className="p-3 border">Caller</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">x86-64 Calling Convention Example:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`; Calling: result = add(5, 10)
; System V AMD64 convention

; Caller (main):
mov edi, 5          ; First argument in EDI
mov esi, 10         ; Second argument in ESI
call add            ; Call the function
mov [result], eax   ; Store return value

; Callee (add):
add:
    push rbp            ; Save old frame pointer
    mov rbp, rsp        ; Set up new frame pointer

    ; edi = a (5), esi = b (10)
    mov eax, edi        ; eax = a
    add eax, esi        ; eax = a + b

    pop rbp             ; Restore frame pointer
    ret                 ; Return (result in eax)`}
      </pre>
    </div>

    {/* Stack Pointer and Frame Pointer */}
    <h2 className="text-3xl font-bold mt-8">Stack Pointer vs Frame Pointer</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Stack Pointer (SP/RSP)</th>
            <th className="p-3 border">Frame Pointer (FP/RBP)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Points to top of stack</td>
            <td className="p-3 border">Points to base of current frame</td>
          </tr>
          <tr>
            <td className="p-3 border">Changes with push/pop</td>
            <td className="p-3 border">Fixed within a function</td>
          </tr>
          <tr>
            <td className="p-3 border">Volatile during execution</td>
            <td className="p-3 border">Stable reference point</td>
          </tr>
          <tr>
            <td className="p-3 border">Used for allocation</td>
            <td className="p-3 border">Used for variable access</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Accessing Variables Using Frame Pointer:

+---------------------------+
| Argument 2 (b)            |  FP + 24
+---------------------------+
| Argument 1 (a)            |  FP + 16
+---------------------------+
| Return Address            |  FP + 8
+---------------------------+
| Saved FP                  |  <- FP (Frame Pointer)
+---------------------------+
| Local var 1               |  FP - 8
+---------------------------+
| Local var 2               |  FP - 16
+---------------------------+
| Temp value                |  FP - 24
+---------------------------+  <- SP (Stack Pointer)

Access patterns:
- Arguments:     positive offset from FP
- Local vars:    negative offset from FP
- Saved FP:      at FP itself`}
      </pre>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>

    <h3 className="text-2xl font-semibold mt-6">Advantages</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Recursion Support:</strong> Each call gets its own activation record</li>
      <li><strong>Automatic Management:</strong> Memory freed automatically on function return</li>
      <li><strong>Fast Allocation:</strong> Just adjust stack pointer</li>
      <li><strong>No Fragmentation:</strong> LIFO nature prevents fragmentation</li>
      <li><strong>Cache Friendly:</strong> Temporal locality of reference</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Disadvantages</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Limited Size:</strong> Stack size is typically limited (1-8 MB)</li>
      <li><strong>Stack Overflow:</strong> Deep recursion can exhaust stack</li>
      <li><strong>No Persistence:</strong> Data lost when function returns</li>
      <li><strong>LIFO Only:</strong> Cannot deallocate in arbitrary order</li>
    </ul>

    {/* Stack Overflow */}
    <h2 className="text-3xl font-bold mt-8">Stack Overflow</h2>
    <p className="leading-relaxed">
      Stack overflow occurs when the stack grows beyond its allocated limit, typically due to
      deep recursion or large local arrays:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Causes stack overflow
void infiniteRecursion() {
    infiniteRecursion();  // Never ends
}

// Large local array can cause overflow
void stackHog() {
    int hugeArray[10000000];  // 40 MB on stack!
    // ...
}

Prevention Strategies:
1. Limit recursion depth
2. Use iteration instead of recursion
3. Use tail recursion (if compiler optimizes)
4. Allocate large data on heap
5. Increase stack size (OS-dependent)`}
      </pre>
    </div>

    {/* Tail Call Optimization */}
    <h2 className="text-3xl font-bold mt-8">Tail Call Optimization</h2>
    <p className="leading-relaxed">
      Tail call optimization (TCO) reuses the current stack frame for tail-recursive calls,
      preventing stack growth:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Not tail recursive (operation after recursive call)
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);  // Multiply AFTER call
}

// Tail recursive (recursive call is the last operation)
int factorial_tail(int n, int acc) {
    if (n <= 1) return acc;
    return factorial_tail(n - 1, n * acc);  // Direct return
}

// With TCO, tail recursive version uses O(1) stack space!

Without TCO:        With TCO:
+-------------+     +-------------+
| fact(4)     |     | fact(4,1)   |  <- Reused
+-------------+     +-------------+
| fact(3)     |            ||
+-------------+            ||
| fact(2)     |            \\/
+-------------+     +-------------+
| fact(1)     |     | fact(3,4)   |  <- Same frame
+-------------+     +-------------+`}
      </pre>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      What happens to local variables when a function returns?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) They are garbage collected</li>
      <li>(B) They persist in memory</li>
      <li>(C) They are automatically deallocated</li>
      <li>(D) They are moved to heap</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) They are automatically deallocated - The stack frame is popped on function return.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      Which register typically points to the base of the current stack frame?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Stack Pointer (SP)</li>
      <li>(B) Frame Pointer (FP/BP)</li>
      <li>(C) Instruction Pointer (IP)</li>
      <li>(D) Accumulator (AX)</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Frame Pointer (FP/BP) - The frame pointer provides a stable reference to the current activation record.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      What causes a stack overflow?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Too many global variables</li>
      <li>(B) Deep recursion or large local arrays</li>
      <li>(C) Memory leaks in heap</li>
      <li>(D) Slow program execution</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Deep recursion or large local arrays - These consume stack space beyond its limit.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Stack allocation uses LIFO principle for managing procedure activations</li>
      <li>Each function call creates a new stack frame with its own local variables</li>
      <li>Stack allocation naturally supports recursion</li>
      <li>Frame pointer provides stable access to local variables and parameters</li>
      <li>Stack overflow occurs when the stack exceeds its size limit</li>
      <li>Tail call optimization can prevent stack growth in recursive calls</li>
    </ul>

  </div>
);

export default StackAllocation;
