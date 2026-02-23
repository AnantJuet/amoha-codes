import React from "react";

const StaticAllocation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Static Storage Allocation ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Static Storage Allocation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Static storage allocation</strong> is a memory allocation scheme where the memory
      for all data objects is determined at compile time and remains fixed throughout program
      execution. This is the simplest form of storage allocation and was used in early programming
      languages like FORTRAN 77. In static allocation, the compiler can determine the exact memory
      address for every variable before the program runs.
    </p>

    {/* What is Static Allocation */}
    <h2 className="text-3xl font-bold mt-8">What is Static Allocation?</h2>
    <p className="leading-relaxed">
      In static allocation, the size and location of all data items are known at compile time.
      Memory is allocated once when the program is loaded and persists until the program terminates.
    </p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Memory addresses are determined at compile/link time</li>
      <li>No runtime memory management overhead</li>
      <li>Size of all data must be known at compile time</li>
      <li>Each procedure has exactly one activation record</li>
      <li>No support for recursion or dynamic data structures</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Static Allocation Layout:

+----------------------------------------+
|           Static Memory                |
+----------------------------------------+
|                                        |
|  Global Variables:                     |
|  +----------------------------------+  |
|  | int globalX     (0x1000)         |  |
|  | int globalY     (0x1004)         |  |
|  | float globalZ   (0x1008)         |  |
|  +----------------------------------+  |
|                                        |
|  Procedure A's Static Data:            |
|  +----------------------------------+  |
|  | int localA      (0x1100)         |  |
|  | int paramA      (0x1104)         |  |
|  | return addr     (0x1108)         |  |
|  +----------------------------------+  |
|                                        |
|  Procedure B's Static Data:            |
|  +----------------------------------+  |
|  | int localB      (0x1200)         |  |
|  | int paramB      (0x1204)         |  |
|  | return addr     (0x1208)         |  |
|  +----------------------------------+  |
|                                        |
+----------------------------------------+`}
      </pre>
    </div>

    {/* Characteristics of Static Allocation */}
    <h2 className="text-3xl font-bold mt-8">Characteristics of Static Allocation</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Memory Size</td>
            <td className="p-3 border">Fixed at compile time</td>
          </tr>
          <tr>
            <td className="p-3 border">Addresses</td>
            <td className="p-3 border">Absolute or relative to a base</td>
          </tr>
          <tr>
            <td className="p-3 border">Lifetime</td>
            <td className="p-3 border">Entire program execution</td>
          </tr>
          <tr>
            <td className="p-3 border">Recursion</td>
            <td className="p-3 border">Not supported</td>
          </tr>
          <tr>
            <td className="p-3 border">Dynamic Structures</td>
            <td className="p-3 border">Not supported</td>
          </tr>
          <tr>
            <td className="p-3 border">Efficiency</td>
            <td className="p-3 border">Very efficient (no runtime overhead)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Example Language: FORTRAN 77 */}
    <h2 className="text-3xl font-bold mt-8">Example: FORTRAN 77 Static Allocation</h2>
    <p className="leading-relaxed">
      FORTRAN 77 is a classic example of a language that uses static allocation exclusively.
      All variables and arrays have their sizes determined at compile time:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">FORTRAN 77 Program:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`      PROGRAM EXAMPLE
      INTEGER X, Y, Z
      REAL ARRAY(100)

      X = 10
      Y = 20
      Z = X + Y

      CALL SUBONE(X, Y)
      END

      SUBROUTINE SUBONE(A, B)
      INTEGER A, B, LOCAL

      LOCAL = A * B
      CALL SUBTWO(LOCAL)
      RETURN
      END

      SUBROUTINE SUBTWO(C)
      INTEGER C, RESULT

      RESULT = C * 2
      RETURN
      END`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Memory Allocation:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Static Memory Layout:

Address     Variable          Size
---------------------------------------
0x1000      X (MAIN)          4 bytes
0x1004      Y (MAIN)          4 bytes
0x1008      Z (MAIN)          4 bytes
0x100C      ARRAY(100)        400 bytes
...
0x1200      A (SUBONE)        4 bytes
0x1204      B (SUBONE)        4 bytes
0x1208      LOCAL (SUBONE)    4 bytes
0x120C      RetAddr (SUBONE)  4 bytes
...
0x1300      C (SUBTWO)        4 bytes
0x1304      RESULT (SUBTWO)   4 bytes
0x1308      RetAddr (SUBTWO)  4 bytes

Note: Each subroutine has only ONE activation record
      allocated at compile time!`}
      </pre>
    </div>

    {/* Why Recursion is Not Supported */}
    <h2 className="text-3xl font-bold mt-8">Why Recursion is Not Supported</h2>
    <p className="leading-relaxed">
      In static allocation, each procedure has exactly one static area for its local variables.
      If the procedure calls itself recursively, the new call would overwrite the existing values:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Hypothetical recursive call with static allocation

SUBROUTINE FACTORIAL(N)
    INTEGER N, RESULT

    IF (N <= 1) THEN
        RESULT = 1
    ELSE
        RESULT = N * FACTORIAL(N-1)  ! PROBLEM!
    ENDIF
    RETURN
END

Static Memory for FACTORIAL:
+----------------+
| N      = ?     |  <- Only ONE location for N
| RESULT = ?     |  <- Only ONE location for RESULT
| RetAddr        |
+----------------+

Call FACTORIAL(3):
  N = 3
  Calls FACTORIAL(2):
    N = 2  (overwrites 3!)
    Calls FACTORIAL(1):
      N = 1  (overwrites 2!)
      RESULT = 1
    Returns: Now N is still 1, not 2!

The values are overwritten with each recursive call!`}
      </pre>
    </div>

    {/* Compiler Implementation */}
    <h2 className="text-3xl font-bold mt-8">Compiler Implementation</h2>
    <p className="leading-relaxed">
      The compiler assigns static addresses to all variables during the compilation process:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Compiler Algorithm for Static Allocation:

1. For each global variable:
   - Allocate space in global data area
   - Assign absolute address

2. For each procedure:
   - Create a static activation record
   - Allocate space for:
     * Return address
     * Parameters
     * Local variables
   - Assign addresses relative to procedure's base

3. Generate code with hardcoded addresses:

   Source: X = Y + Z

   Generated Code (with absolute addresses):
   LOAD  R1, 0x1004    ; Load Y from address 0x1004
   LOAD  R2, 0x1008    ; Load Z from address 0x1008
   ADD   R1, R2        ; R1 = Y + Z
   STORE R1, 0x1000    ; Store to X at address 0x1000`}
      </pre>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>

    <h3 className="text-2xl font-semibold mt-6">Advantages</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Efficiency:</strong> No runtime memory management overhead</li>
      <li><strong>Simplicity:</strong> Easy to implement in compilers</li>
      <li><strong>Speed:</strong> Direct address access, no indirection</li>
      <li><strong>Predictability:</strong> Memory usage is completely predictable</li>
      <li><strong>No Fragmentation:</strong> No heap fragmentation issues</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Disadvantages</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>No Recursion:</strong> Cannot support recursive procedures</li>
      <li><strong>Fixed Size:</strong> Arrays must have compile-time constant sizes</li>
      <li><strong>Memory Waste:</strong> Memory allocated even if not used</li>
      <li><strong>Limited Flexibility:</strong> No dynamic data structures</li>
      <li><strong>No Closures:</strong> Cannot support first-class functions</li>
    </ul>

    {/* Static Variables in Modern Languages */}
    <h2 className="text-3xl font-bold mt-8">Static Variables in Modern Languages</h2>
    <p className="leading-relaxed">
      While modern languages use stack/heap allocation, they still support static allocation
      for specific cases:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">C/C++ Static Variables:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Global variables (static allocation)
int globalCounter = 0;  // Data segment

// Static local variables
void incrementCounter() {
    static int callCount = 0;  // Static allocation
    callCount++;               // Persists across calls
    printf("Called %d times\\n", callCount);
}

// Static class members (C++)
class MyClass {
    static int instanceCount;  // Shared across all instances
};
int MyClass::instanceCount = 0;

// Memory allocation:
// globalCounter  -> Data segment (0x601000)
// callCount      -> Data segment (0x601004)
// instanceCount  -> Data segment (0x601008)`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Java Static Members:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`public class Counter {
    // Static field (stored in class metadata, not heap objects)
    private static int count = 0;

    // Static method
    public static int getCount() {
        return count;
    }

    public Counter() {
        count++;  // Shared across all instances
    }
}

// Memory model:
// Class metadata area contains:
// - static field 'count'
// - method references

// Each instance (on heap) does NOT contain 'count'`}
      </pre>
    </div>

    {/* Comparison with Other Allocation Strategies */}
    <h2 className="text-3xl font-bold mt-8">Comparison with Other Allocation Strategies</h2>

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
            <td className="p-3 border">When Allocated</td>
            <td className="p-3 border">Compile/Load time</td>
            <td className="p-3 border">Function call</td>
            <td className="p-3 border">Explicit request</td>
          </tr>
          <tr>
            <td className="p-3 border">When Freed</td>
            <td className="p-3 border">Program end</td>
            <td className="p-3 border">Function return</td>
            <td className="p-3 border">Explicit/GC</td>
          </tr>
          <tr>
            <td className="p-3 border">Recursion</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Dynamic Size</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Limited</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Fastest</td>
            <td className="p-3 border">Fast</td>
            <td className="p-3 border">Slower</td>
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
      Which programming language traditionally uses only static allocation?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) C</li>
      <li>(B) Java</li>
      <li>(C) FORTRAN 77</li>
      <li>(D) Python</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) FORTRAN 77 - Early FORTRAN used only static allocation.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      Why can't static allocation support recursion?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Static memory is read-only</li>
      <li>(B) Each procedure has only one activation record</li>
      <li>(C) Static allocation is too slow</li>
      <li>(D) The stack would overflow</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Each procedure has only one activation record - recursive calls would overwrite previous values.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      In C, a static local variable is stored in which memory region?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Stack</li>
      <li>(B) Heap</li>
      <li>(C) Data segment</li>
      <li>(D) Code segment</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Data segment - Static variables are stored in the data segment, not on the stack.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Static allocation determines all memory addresses at compile time</li>
      <li>Each procedure has exactly one activation record in static allocation</li>
      <li>Recursion and dynamic data structures are not supported</li>
      <li>Very efficient with no runtime memory management overhead</li>
      <li>Modern languages still use static allocation for global and static variables</li>
    </ul>

  </div>
);

export default StaticAllocation;
