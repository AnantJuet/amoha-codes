import React from "react";

const RegisterAssignment: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Register Assignment ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Register Assignment
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Register assignment</strong> is the phase that follows register allocation. While allocation
      decides which values should be kept in registers versus memory, assignment determines exactly which
      physical register holds each value. This distinction matters because different registers may have
      different properties and constraints.
    </p>

    {/* Allocation vs Assignment */}
    <h2 className="text-3xl font-bold mt-8">Register Allocation vs Assignment</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Register Allocation</th>
            <th className="p-3 border">Register Assignment</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Decides WHAT goes in registers</td>
            <td className="p-3 border">Decides WHICH specific register</td>
          </tr>
          <tr>
            <td className="p-3 border">Determines spilling</td>
            <td className="p-3 border">Handles register constraints</td>
          </tr>
          <tr>
            <td className="p-3 border">Works with interference graph</td>
            <td className="p-3 border">Works with register preferences</td>
          </tr>
          <tr>
            <td className="p-3 border">Abstract register classes</td>
            <td className="p-3 border">Physical register names</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example:
After Allocation:
  - Variable a: in register (class: general purpose)
  - Variable b: in register (class: general purpose)
  - Variable c: spilled to stack

After Assignment:
  - Variable a: assigned to R0
  - Variable b: assigned to R3
  - Variable c: at stack offset -8`}
      </pre>
    </div>

    {/* Register Descriptors */}
    <h2 className="text-3xl font-bold mt-8">Register and Address Descriptors</h2>
    <p className="leading-relaxed">
      The code generator maintains descriptors to track the current location of values:
    </p>

    <h3 className="text-2xl font-semibold mt-6">Register Descriptor</h3>
    <p className="leading-relaxed">
      Tracks which variable(s) currently reside in each register.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Register Descriptor:
+--------+-----------------+
| Reg    | Contents        |
+--------+-----------------+
| R0     | {a}             |
| R1     | {b, t1}         |
| R2     | {}              |
| R3     | {c}             |
+--------+-----------------+

Note: A register can hold copies of multiple values
(e.g., after t1 = b, both b and t1 are in R1)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Address Descriptor</h3>
    <p className="leading-relaxed">
      Tracks where each variable's value can currently be found.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Address Descriptor:
+---------+-------------------+
| Var     | Locations         |
+---------+-------------------+
| a       | {R0, memory}      |
| b       | {R1, memory}      |
| t1      | {R1}              |
| c       | {R3}              |
+---------+-------------------+

A value may exist in multiple places
- "memory" means the memory location is current
- If only in register, memory copy is stale`}
      </pre>
    </div>

    {/* GetReg Function */}
    <h2 className="text-3xl font-bold mt-8">The getReg Function</h2>
    <p className="leading-relaxed">
      When generating code for a statement like x = y op z, the code generator calls getReg
      to determine where to place operands and results.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">getReg Algorithm:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Function getReg(instruction x = y op z):

  1. For operand y:
     - If y is already in a register, use that register
     - Else, pick an empty register and load y
     - If no empty register, see step 3

  2. For operand z: (same as y)

  3. For result x:
     - If y is in register R and y is not used later
       and R holds only y, use R for x (saves a move)
     - Else if there's an empty register, use it
     - Else if x has a dedicated register, use it
     - Else pick a register to spill:
       a. Prefer register whose value is also in memory
       b. Prefer register with value not used soon
       c. Generate store instruction for spilled value
       d. Update descriptors`}
      </pre>
    </div>

    {/* Register Assignment Example */}
    <h2 className="text-3xl font-bold mt-8">Detailed Assignment Example</h2>
    <p className="leading-relaxed">
      Consider generating code for a basic block with only 2 registers available:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Three-Address Code:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`t1 = a - b
t2 = a - c
t3 = t1 + t2
d = t3 + t2`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Step-by-Step Code Generation:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Initially: All variables in memory, R0 and R1 empty

Statement: t1 = a - b
  getReg: Load a into R0, load b into R1, result in R0
  Code:
    MOV R0, a       ; R0 = a
    MOV R1, b       ; R1 = b
    SUB R0, R1      ; R0 = a - b = t1
  Descriptors:
    R0: {t1}  R1: {b}
    t1: {R0}  a: {memory}  b: {R1, memory}

Statement: t2 = a - c
  getReg: Need a again (not in register), need c
          R0 has t1 (still needed), R1 has b (not needed)
          Use R1 for a, spill nothing
  Code:
    MOV R1, a       ; R1 = a (b no longer in R1)
    SUB R1, c       ; R1 = a - c = t2
  Descriptors:
    R0: {t1}  R1: {t2}
    t1: {R0}  t2: {R1}

Statement: t3 = t1 + t2
  getReg: t1 in R0, t2 in R1, result can go in R0
          (t1 not needed after this)
  Code:
    ADD R0, R1      ; R0 = t1 + t2 = t3
  Descriptors:
    R0: {t3}  R1: {t2}
    t3: {R0}  t2: {R1}

Statement: d = t3 + t2
  getReg: t3 in R0, t2 in R1, result in R0
  Code:
    ADD R0, R1      ; R0 = t3 + t2 = d
    MOV d, R0       ; Store d to memory
  Final Descriptors:
    R0: {d}  R1: {t2}
    d: {R0, memory}`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Complete Generated Code:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`MOV R0, a
MOV R1, b
SUB R0, R1      ; t1 = a - b
MOV R1, a
SUB R1, c       ; t2 = a - c
ADD R0, R1      ; t3 = t1 + t2
ADD R0, R1      ; d = t3 + t2
MOV d, R0       ; store d`}
      </pre>
    </div>

    {/* Register Preferences */}
    <h2 className="text-3xl font-bold mt-8">Register Preferences and Constraints</h2>
    <p className="leading-relaxed">
      The assignment phase must respect various constraints and preferences:
    </p>

    <h3 className="text-2xl font-semibold mt-6">Hard Constraints</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Calling conventions:</strong> Return value must be in specific register (e.g., RAX)</li>
      <li><strong>Instruction requirements:</strong> Some instructions use specific registers (e.g., shift by CL)</li>
      <li><strong>Register classes:</strong> Floating-point values must use FP registers</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Soft Preferences</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Copy coalescing:</strong> If x = y, prefer same register for both</li>
      <li><strong>Caller-saved vs callee-saved:</strong> Use callee-saved for values live across calls</li>
      <li><strong>Parameter registers:</strong> Keep parameters in their original registers</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Copy Coalescing Example:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`IR: x = y

Without coalescing:
  MOV R0, R1      ; x = y (generates move)

With coalescing (x and y assigned to same register):
  ; x and y both in R0, no move needed

Condition: x and y must not interfere
(not live at the same time)`}
      </pre>
    </div>

    {/* Handling Function Calls */}
    <h2 className="text-3xl font-bold mt-8">Register Assignment and Function Calls</h2>
    <p className="leading-relaxed">
      Function calls impose significant constraints on register assignment:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`x86-64 Calling Convention (System V AMD64):
+-----------------+---------------------------+
| Register        | Usage                     |
+-----------------+---------------------------+
| RDI, RSI, RDX,  | First 6 integer arguments |
| RCX, R8, R9     |                           |
+-----------------+---------------------------+
| RAX             | Return value              |
+-----------------+---------------------------+
| RAX, RCX, RDX,  | Caller-saved (clobbered)  |
| RSI, RDI, R8-11 |                           |
+-----------------+---------------------------+
| RBX, RBP,       | Callee-saved (preserved)  |
| R12-R15         |                           |
+-----------------+---------------------------+

Before call:
  - Save caller-saved registers with live values
  - Place arguments in correct registers

After call:
  - Restore saved registers
  - Result is in RAX`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Example: Function Call with Live Variables</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// x and y are live across the call
x = ...
y = ...
z = foo(a, b)    // Call function
w = x + y        // Need x and y after call

Generated Code (assuming x in R8, y in R9):
  ; x and y in caller-saved registers - problem!

Option 1: Save to stack around call
  PUSH R8         ; Save x
  PUSH R9         ; Save y
  MOV RDI, a      ; First argument
  MOV RSI, b      ; Second argument
  CALL foo
  POP R9          ; Restore y
  POP R8          ; Restore x
  ADD R8, R9      ; w = x + y

Option 2: Use callee-saved registers
  ; Assign x to R12, y to R13 (callee-saved)
  MOV RDI, a
  MOV RSI, b
  CALL foo        ; R12, R13 preserved
  ADD R12, R13    ; w = x + y`}
      </pre>
    </div>

    {/* Assignment at Basic Block Boundaries */}
    <h2 className="text-3xl font-bold mt-8">Assignment at Block Boundaries</h2>
    <p className="leading-relaxed">
      When control flows between basic blocks, register assignments must be consistent.
      Different predecessors might have the same variable in different registers.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Block B1:              Block B2:
  x in R0                x in R1
     \\                    /
      \\                  /
       v                v
        Block B3 (x needed)

Problem: B3 expects x in one location
Solutions:
1. Insert moves at B1 or B2 exit
   - At end of B1: MOV R1, R0 (or vice versa)

2. Insert phi moves at B3 entry
   - Based on which predecessor we came from

3. Ensure consistent assignment during allocation`}
      </pre>
    </div>

    {/* Register Assignment Algorithm */}
    <h2 className="text-3xl font-bold mt-8">Simple Assignment Algorithm</h2>
    <p className="leading-relaxed">
      After graph coloring determines which variables go in registers, assign physical registers:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Algorithm: Physical Register Assignment

Input: Color assignment for each variable (colors 0 to k-1)
Output: Physical register for each variable

1. Create mapping from colors to physical registers:
   color_to_reg = {}
   available_regs = [R0, R1, R2, ..., Rk-1]

2. Handle pre-colored nodes first (fixed register requirements):
   for each variable v with fixed register R:
     color_to_reg[color(v)] = R
     remove R from available_regs

3. Assign remaining colors to available registers:
   for each color c not yet mapped:
     color_to_reg[c] = available_regs.pop()

4. Assign physical register to each variable:
   for each variable v:
     register(v) = color_to_reg[color(v)]`}
      </pre>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      What information does a register descriptor maintain?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) The type of each register</li>
      <li>(B) Which variable(s) currently reside in each register</li>
      <li>(C) The size of each register</li>
      <li>(D) The memory address of each register</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Register descriptors track which variables are currently stored in each register.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      What is copy coalescing in register assignment?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Copying values between registers</li>
      <li>(B) Assigning the same register to source and destination of a copy</li>
      <li>(C) Merging multiple copies into one</li>
      <li>(D) Eliminating dead copies</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Coalescing assigns the same register to x and y when x = y, eliminating the move instruction.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      Why might a variable live across a function call be assigned to a callee-saved register?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Callee-saved registers are faster</li>
      <li>(B) The callee will preserve the register value, avoiding save/restore</li>
      <li>(C) Caller-saved registers cannot hold variables</li>
      <li>(D) Callee-saved registers have more capacity</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Callee-saved registers are preserved by called functions, so live values survive the call without explicit saving.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Register assignment determines which physical register holds each value</li>
      <li>Register and address descriptors track current locations of values</li>
      <li>The getReg function selects registers during code generation</li>
      <li>Copy coalescing eliminates unnecessary move instructions</li>
      <li>Function calling conventions impose constraints on register usage</li>
      <li>Consistent register assignments are needed at basic block boundaries</li>
    </ul>

  </div>
);

export default RegisterAssignment;
