import React from 'react';

const StackOrg: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Stack Organization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Stack Organization is a CPU architecture where operands are stored in a stack data structure.
      The stack follows the Last-In-First-Out (LIFO) principle, where operations are performed
      on the top elements of the stack. This organization is fundamental to expression evaluation,
      subroutine calls, and interrupt handling.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Stack?</h2>
    <p className="leading-relaxed">
      A stack is a linear data structure that stores data in LIFO order. Items are added (pushed)
      and removed (popped) from only one end called the "top" of the stack. In computer organization,
      stacks can be implemented either in CPU registers (register stack) or in main memory (memory stack).
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Stack Concept:

PUSH Operation:                    POP Operation:

    +-----+                            +-----+
    |  C  | <-- Top (SP)              |     |
    +-----+                            +-----+
    |  B  |                            |  C  | <-- Top (SP)
    +-----+                            +-----+
    |  A  |                            |  B  |
    +-----+                            +-----+
                                       |  A  |
Push D:                                +-----+
    +-----+
    |  D  | <-- Top (SP)           After Pop:
    +-----+                        Removed element: C
    |  C  |
    +-----+
    |  B  |
    +-----+
    |  A  |
    +-----+

LIFO: Last In, First Out
- PUSH adds element to top
- POP removes element from top
- Stack Pointer (SP) always points to top`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Stack Implementation</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Register Stack</h3>
    <p className="leading-relaxed">
      A register stack is implemented using a set of registers within the CPU. It provides
      fast access but has limited capacity. The stack pointer is typically a counter that
      tracks the current top of stack.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Register Stack Organization:

                    +-------------------+
                    |      DR (Data)    | <-- Data Register
                    +-------------------+
                             |
                             v
    Address  +---------------------------------+
      63     |                                 |
      62     |                                 |
      ...    |                                 |
       4     |     Stack Register Array       |
       3     |         (64 words)             |
       2     |                                 |
       1     |            [B]                 |
       0     |            [A]                 |
             +---------------------------------+
                             ^
                             |
                    +-------------------+
                    |   SP (6 bits)     | <-- Stack Pointer
                    +-------------------+
                             |
             +---------------+---------------+
             |                               |
    +----------------+             +----------------+
    |   FULL Flag    |             |   EMTY Flag    |
    +----------------+             +----------------+

FULL = 1 when SP = 63 (Stack is full)
EMTY = 1 when SP = 0  (Stack is empty)

For 64-word stack: SP needs 6 bits (2^6 = 64)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Memory Stack</h3>
    <p className="leading-relaxed">
      A memory stack uses a portion of main memory to implement the stack. The Stack Pointer (SP)
      register holds the address of the top of stack. Memory stacks can grow either upward
      (toward higher addresses) or downward (toward lower addresses).
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory Stack Organization:

        Memory                          Stack Growth
                                        (Downward)
    +-------------+
    |   Program   |  High Address           ^
    |    Code     |                         |
    +-------------+                         |
    |             |                         |
    |    Data     |                         |
    |             |                         |
    +-------------+ <-- Stack Base          |
    |     A       |  4000                   |
    +-------------+                         |
    |     B       |  3999                   |
    +-------------+                         |
    |     C       |  3998  <-- SP           |
    +-------------+                         |
    |             |  3997                   |
    |  (Free)     |                     Stack grows
    |             |                     downward
    +-------------+
    |             |  Low Address
    +-------------+

Initial: SP = 4001 (one above base)
After PUSH A: SP = 4000, M[4000] = A
After PUSH B: SP = 3999, M[3999] = B
After PUSH C: SP = 3998, M[3998] = C`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stack Operations</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Register Stack</th>
            <th className="p-3 border">Memory Stack (Down)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">PUSH X</td>
            <td className="p-3 border">SP = SP + 1; Stack[SP] = X</td>
            <td className="p-3 border">SP = SP - 1; M[SP] = X</td>
          </tr>
          <tr>
            <td className="p-3 border">POP X</td>
            <td className="p-3 border">X = Stack[SP]; SP = SP - 1</td>
            <td className="p-3 border">X = M[SP]; SP = SP + 1</td>
          </tr>
          <tr>
            <td className="p-3 border">TOP/PEEK</td>
            <td className="p-3 border">X = Stack[SP]</td>
            <td className="p-3 border">X = M[SP]</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Register Stack Operations (Detailed)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`PUSH Operation (Register Stack):

if (FULL = 0) then          // Check if stack is not full
    SP = SP + 1             // Increment stack pointer
    Stack[SP] = DR          // Write data to top of stack
    if (SP = 63) then       // Check if stack is now full
        FULL = 1            // Set FULL flag
    EMTY = 0                // Clear EMPTY flag
else
    Stack Overflow Error    // Cannot push, stack is full
end if

-------------------------------------------

POP Operation (Register Stack):

if (EMTY = 0) then          // Check if stack is not empty
    DR = Stack[SP]          // Read data from top of stack
    SP = SP - 1             // Decrement stack pointer
    if (SP = 0) then        // Check if stack is now empty
        EMTY = 1            // Set EMPTY flag
    FULL = 0                // Clear FULL flag
else
    Stack Underflow Error   // Cannot pop, stack is empty
end if`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stack-Based CPU Operations</h2>
    <p className="leading-relaxed">
      In a stack-organized CPU, arithmetic and logical operations use the stack implicitly.
      Operations pop operands from the stack and push results back onto the stack.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Stack-Based Arithmetic Operations:

ADD Operation:
    +-----+                +-----+
    |  5  | <-- Top        |     |
    +-----+     POP        +-----+
    |  3  | --------->     |  8  | <-- Top (Result: 3+5)
    +-----+                +-----+
    | ... |                | ... |
    +-----+                +-----+

SUB Operation:
    +-----+                +-----+
    |  2  | <-- Top        |     |
    +-----+     POP        +-----+
    |  7  | --------->     |  5  | <-- Top (Result: 7-2)
    +-----+                +-----+
    | ... |                | ... |
    +-----+                +-----+

MUL Operation:
    +-----+                +-----+
    |  4  | <-- Top        |     |
    +-----+     POP        +-----+
    |  3  | --------->     | 12  | <-- Top (Result: 3*4)
    +-----+                +-----+
    | ... |                | ... |
    +-----+                +-----+

Note: Top-of-Stack (TOS) is second operand
      Next-to-Top is first operand`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Expression Evaluation Using Stack</h2>
    <p className="leading-relaxed">
      Stacks are ideal for evaluating arithmetic expressions, especially in Reverse Polish
      Notation (RPN) or postfix notation. The process involves scanning the expression and
      either pushing operands or applying operators.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example: Evaluate (3 + 4) * (5 - 2)

Step 1: Convert to Postfix (RPN)
   Infix:   (3 + 4) * (5 - 2)
   Postfix: 3 4 + 5 2 - *

Step 2: Evaluate Postfix using Stack

   Token  |  Operation       |  Stack
   -------|------------------|----------------
   3      |  PUSH 3          |  [3]
   4      |  PUSH 4          |  [3, 4]
   +      |  POP 4, POP 3    |  []
          |  PUSH (3+4)      |  [7]
   5      |  PUSH 5          |  [7, 5]
   2      |  PUSH 2          |  [7, 5, 2]
   -      |  POP 2, POP 5    |  [7]
          |  PUSH (5-2)      |  [7, 3]
   *      |  POP 3, POP 7    |  []
          |  PUSH (7*3)      |  [21]

   Result: 21

-------------------------------------------

Another Example: A = B + C * D

   Infix:   B + C * D
   Postfix: B C D * +

   Instructions for Stack Computer:
   PUSH B      // Stack: [B]
   PUSH C      // Stack: [B, C]
   PUSH D      // Stack: [B, C, D]
   MUL         // Stack: [B, C*D]
   ADD         // Stack: [B + C*D]
   POP A       // A = B + C*D, Stack: []`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Stack Instructions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Instruction</th>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">PUSH X</td>
            <td className="p-3 border">SP--; M[SP]=X</td>
            <td className="p-3 border">Push operand X onto stack</td>
          </tr>
          <tr>
            <td className="p-3 border">POP X</td>
            <td className="p-3 border">X=M[SP]; SP++</td>
            <td className="p-3 border">Pop top of stack into X</td>
          </tr>
          <tr>
            <td className="p-3 border">ADD</td>
            <td className="p-3 border">TOS = TOS + NOS</td>
            <td className="p-3 border">Add top two elements</td>
          </tr>
          <tr>
            <td className="p-3 border">SUB</td>
            <td className="p-3 border">TOS = NOS - TOS</td>
            <td className="p-3 border">Subtract top from second</td>
          </tr>
          <tr>
            <td className="p-3 border">MUL</td>
            <td className="p-3 border">TOS = TOS * NOS</td>
            <td className="p-3 border">Multiply top two elements</td>
          </tr>
          <tr>
            <td className="p-3 border">DIV</td>
            <td className="p-3 border">TOS = NOS / TOS</td>
            <td className="p-3 border">Divide second by top</td>
          </tr>
          <tr>
            <td className="p-3 border">DUP</td>
            <td className="p-3 border">PUSH TOS</td>
            <td className="p-3 border">Duplicate top element</td>
          </tr>
          <tr>
            <td className="p-3 border">SWAP</td>
            <td className="p-3 border">Exchange TOS, NOS</td>
            <td className="p-3 border">Swap top two elements</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
      TOS = Top of Stack, NOS = Next on Stack (second element)
    </p>

    <h2 className="text-3xl font-bold mt-8">Subroutine Calls and Stack</h2>
    <p className="leading-relaxed">
      The stack plays a crucial role in subroutine (function) calls. It stores return addresses,
      parameters, and local variables, enabling nested and recursive function calls.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Stack Frame for Subroutine Call:

CALL Subroutine:
1. Push return address (PC+1) onto stack
2. Push parameters onto stack
3. Jump to subroutine address

RETURN from Subroutine:
1. Pop local variables
2. Pop return address into PC
3. Continue execution at return address

Stack Frame Structure:
+------------------+
|  Local Variables | <-- SP
+------------------+
|  Saved Registers |
+------------------+
|  Return Address  |
+------------------+
|   Parameters     |
+------------------+
|  Previous Frame  | <-- Frame Pointer (FP)
+------------------+

Example: Function call f(a, b)

Before Call:         During Call:         After Return:
+-----+             +-----+              +-----+
| ... |             | loc |  <-- SP      | ... |
+-----+             +-----+              +-----+
                    | ret |
                    +-----+
                    |  b  |
                    +-----+
                    |  a  |
+-----+             +-----+              +-----+
| ... | <-- SP      | ... |              | res | <-- SP
+-----+             +-----+              +-----+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of Stack Organization</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Short Instructions:</strong> Zero-address instructions are very compact</li>
      <li><strong>Simple Hardware:</strong> No need to specify operand addresses</li>
      <li><strong>Easy Expression Evaluation:</strong> Natural for postfix expressions</li>
      <li><strong>Efficient Subroutine Handling:</strong> Built-in support for call/return</li>
      <li><strong>Recursive Support:</strong> Stack naturally supports recursion</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of Stack Organization</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Memory Access:</strong> Frequent stack operations mean more memory access</li>
      <li><strong>Limited Access:</strong> Can only access top elements directly</li>
      <li><strong>Slower Execution:</strong> Multiple pushes/pops for complex operations</li>
      <li><strong>Stack Overflow:</strong> Risk of exceeding stack capacity</li>
      <li><strong>Non-Random Access:</strong> Cannot access arbitrary stack elements</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Comparison: Stack vs Register Organization</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Stack Organization</th>
            <th className="p-3 border">Register Organization</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Instruction Size</td>
            <td className="p-3 border">Very Short (0-address)</td>
            <td className="p-3 border">Longer (2-3 address)</td>
          </tr>
          <tr>
            <td className="p-3 border">Code Size</td>
            <td className="p-3 border">Compact</td>
            <td className="p-3 border">Larger</td>
          </tr>
          <tr>
            <td className="p-3 border">Execution Speed</td>
            <td className="p-3 border">Slower</td>
            <td className="p-3 border">Faster</td>
          </tr>
          <tr>
            <td className="p-3 border">Hardware</td>
            <td className="p-3 border">Simpler</td>
            <td className="p-3 border">More Complex</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">HP calculators, Java VM</td>
            <td className="p-3 border">x86, ARM, MIPS</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Stack follows LIFO (Last-In-First-Out) principle</li>
        <li>Can be implemented as register stack or memory stack</li>
        <li>Stack Pointer (SP) always points to the top of stack</li>
        <li>PUSH adds elements, POP removes elements from top</li>
        <li>Stack-based CPUs use zero-address instructions</li>
        <li>Ideal for expression evaluation in postfix notation</li>
        <li>Essential for subroutine calls and recursive functions</li>
        <li>Stack overflow/underflow must be handled appropriately</li>
      </ul>
    </div>
  </div>
);

export default StackOrg;
