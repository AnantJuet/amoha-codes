import React from 'react';

const AddressingModes: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Addressing Modes
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Addressing modes specify how the operand of an instruction is accessed. They determine
      the method used to calculate the effective address (EA) of the operand, which is the
      actual memory location or register containing the data. Different addressing modes provide
      flexibility in accessing data structures, arrays, and variables.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Addressing Modes?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Programming Flexibility:</strong> Different ways to access operands</li>
      <li><strong>Reduced Instruction Count:</strong> Powerful modes reduce program size</li>
      <li><strong>Data Structure Support:</strong> Arrays, pointers, records</li>
      <li><strong>Code Relocation:</strong> Position-independent code</li>
      <li><strong>Loop Optimization:</strong> Efficient array traversal</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Types of Addressing Modes</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Immediate Addressing Mode</h3>
    <p className="leading-relaxed">
      The operand is specified directly in the instruction itself. No memory access is
      required to fetch the operand, making this the fastest addressing mode.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Immediate Addressing:

Instruction Format:
+--------+----------------+
| Opcode |    Operand     |
+--------+----------------+
           (Actual Value)

EA = None (operand is in instruction)
Operand = Value in instruction field

Examples:
  MOV R1, #100        ; R1 = 100 (# indicates immediate)
  ADD R2, #5          ; R2 = R2 + 5
  MOV AX, 0x1234      ; AX = 0x1234

Diagram:
  +--------+--------+
  |  MOV   |   100  |  --> R1 = 100
  +--------+--------+
              |
              +-------> Operand is the value itself

Advantages:
- Fastest mode (no memory fetch)
- Useful for constants

Disadvantages:
- Limited operand size
- Cannot modify operand value`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Direct (Absolute) Addressing Mode</h3>
    <p className="leading-relaxed">
      The instruction contains the actual memory address of the operand. The CPU
      directly accesses the specified memory location to get the operand.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Direct Addressing:

Instruction Format:
+--------+----------------+
| Opcode |    Address     |
+--------+----------------+

EA = Address field in instruction
Operand = Memory[EA]

Examples:
  LOAD R1, 1000       ; R1 = Memory[1000]
  ADD R2, 2000        ; R2 = R2 + Memory[2000]
  STORE R3, 3000      ; Memory[3000] = R3

Diagram:
                         Memory
  +--------+--------+    +------+
  |  LOAD  |  1000  |--->| 1000 | --> 42
  +--------+--------+    +------+
              |              |
              +-----> EA     +-----> R1 = 42

Advantages:
- Simple to implement
- Single memory reference

Disadvantages:
- Limited address space
- Address is fixed at compile time`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Indirect Addressing Mode</h3>
    <p className="leading-relaxed">
      The instruction contains the address of a memory location that holds the
      actual address of the operand. This provides an extra level of indirection.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Indirect Addressing:

Instruction Format:
+--------+----------------+
| Opcode |    Address     |  (Address of address)
+--------+----------------+

EA = Memory[Address field]
Operand = Memory[EA]

Example:
  LOAD R1, @1000      ; @ indicates indirect
  ; Memory[1000] = 2000
  ; Memory[2000] = 42
  ; R1 = 42

Diagram:
                         Memory
  +--------+--------+    +------+      +------+
  |  LOAD  |  1000  |--->| 1000 | ---> | 2000 | --> 42
  +--------+--------+    +------+      +------+
              |          (pointer)     (actual data)
              |              |              |
              +-----> Address of   EA       +-----> R1 = 42
                      pointer

Advantages:
- Supports pointers
- Dynamic address calculation
- Useful for arrays and linked lists

Disadvantages:
- Two memory accesses required
- Slower than direct addressing`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Register Addressing Mode</h3>
    <p className="leading-relaxed">
      The operand is in a CPU register. This is very fast as no memory access
      is needed; the operand is already within the CPU.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Register Addressing:

Instruction Format:
+--------+----------+
| Opcode | Register |
+--------+----------+

EA = Register number
Operand = Content of specified register

Examples:
  MOV R1, R2          ; R1 = R2
  ADD R3, R4          ; R3 = R3 + R4
  INC R5              ; R5 = R5 + 1

Diagram:
                        CPU Registers
  +--------+------+     +----+----+----+----+
  |  ADD   |  R3  |     | R1 | R2 | R3 | R4 |
  +--------+------+     +----+----+----+----+
              |              |    |
              +------------->|    |
                        operand   |
                                  +---> R3 = R3 + R4

Advantages:
- Very fast (no memory access)
- Short instruction format

Disadvantages:
- Limited number of registers
- Must load data into registers first`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">5. Register Indirect Addressing Mode</h3>
    <p className="leading-relaxed">
      The register contains the memory address of the operand, not the operand itself.
      Similar to indirect addressing but uses a register as the pointer.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Register Indirect Addressing:

Instruction Format:
+--------+----------+
| Opcode | Register |  (Register holds address)
+--------+----------+

EA = Content of Register
Operand = Memory[EA]

Examples:
  LOAD R1, (R2)       ; R1 = Memory[R2]
  STORE R3, (R4)      ; Memory[R4] = R3
  ADD R1, (R5)        ; R1 = R1 + Memory[R5]

Diagram:
  R2 = 1000           Memory
                      +------+
  +--------+------+   | 1000 | --> 42
  |  LOAD  | (R2) |-->+------+
  +--------+------+       |
              |           +-----> R1 = 42
              |
              +-----> R2 contains address

Advantages:
- Supports dynamic addressing
- Useful for array access
- Register can be modified in loops

Disadvantages:
- One memory access needed`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">6. Displacement (Indexed) Addressing Mode</h3>
    <p className="leading-relaxed">
      The effective address is computed by adding a constant displacement to a register value.
      This is useful for accessing fields in structures or array elements.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Displacement Addressing:

Instruction Format:
+--------+----------+-------------+
| Opcode | Register | Displacement|
+--------+----------+-------------+

EA = Register + Displacement
Operand = Memory[EA]

Variants:
1. Base-Displacement: EA = Base_Register + Displacement
2. Indexed: EA = Index_Register + Displacement
3. Base-Indexed: EA = Base + Index + Displacement

Examples:
  LOAD R1, 100(R2)    ; R1 = Memory[R2 + 100]
  MOV AX, [BX+10]     ; AX = Memory[BX + 10]
  ADD R3, 50(R4)      ; R3 = R3 + Memory[R4 + 50]

Diagram:
  R2 = 900            Memory
  Disp = 100          +------+
                      | 1000 | --> 42  (900 + 100 = 1000)
  +--------+----+-----+------+
  |  LOAD  | R2 | 100 |
  +--------+----+-----+
              |    |
              +----+-----> EA = 900 + 100 = 1000
                          R1 = Memory[1000] = 42

Use Cases:
- Array access: Array[i] = Base + i * size
- Structure fields: struct.field = Base + offset
- Stack frames: local_var = FP + offset`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">7. Relative (PC-Relative) Addressing Mode</h3>
    <p className="leading-relaxed">
      The effective address is calculated relative to the Program Counter (PC).
      This is commonly used for branch instructions and position-independent code.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Relative Addressing:

Instruction Format:
+--------+-------------+
| Opcode | Offset      |
+--------+-------------+

EA = PC + Offset
Used primarily for branch/jump instructions

Examples:
  BEQ +8              ; Branch if equal, PC = PC + 8
  JMP -20             ; Jump back 20 bytes
  CALL +100           ; Call subroutine at PC + 100

Diagram:
  PC = 1000
  Offset = +50

  Address  | Instruction
  ---------|------------
  1000     | BEQ +50    <-- Current instruction
  1004     | ...
  ...      | ...
  1050     | TARGET     <-- Branch target (1000 + 50)

Advantages:
- Position-independent code
- Shorter address field
- Used for nearby branches

Disadvantages:
- Limited range (based on offset size)
- Cannot jump to arbitrary addresses`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">8. Auto-Increment/Auto-Decrement Addressing</h3>
    <p className="leading-relaxed">
      The register is automatically incremented or decremented before or after
      accessing memory. This is useful for array traversal and stack operations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Auto-Increment/Decrement Addressing:

Pre-Increment:  ++R before access
Post-Increment: R++ after access
Pre-Decrement:  --R before access
Post-Decrement: R-- after access

Examples:
  LOAD R1, (R2)+      ; R1 = Memory[R2], then R2 = R2 + 1
  LOAD R1, +(R2)      ; R2 = R2 + 1, then R1 = Memory[R2]
  STORE R1, -(R3)     ; R3 = R3 - 1, then Memory[R3] = R1
  STORE R1, (R3)-     ; Memory[R3] = R1, then R3 = R3 - 1

Array Traversal Example:
  ; Sum array elements: R2 points to array, R3 = count
  CLEAR R1            ; R1 = 0 (sum)
LOOP:
  ADD R1, (R2)+       ; R1 += Memory[R2], R2++
  DEC R3              ; R3--
  BNZ LOOP            ; Branch if not zero

Stack Operations:
  PUSH: STORE R1, -(SP)    ; Decrement SP, then store
  POP:  LOAD R1, (SP)+     ; Load, then increment SP`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Summary of Addressing Modes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Mode</th>
            <th className="p-3 border">Effective Address (EA)</th>
            <th className="p-3 border">Memory Access</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Immediate</td>
            <td className="p-3 border">N/A (operand in instruction)</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">MOV R1, #5</td>
          </tr>
          <tr>
            <td className="p-3 border">Direct</td>
            <td className="p-3 border">EA = Address</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">LOAD R1, 1000</td>
          </tr>
          <tr>
            <td className="p-3 border">Indirect</td>
            <td className="p-3 border">EA = Memory[Address]</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">LOAD R1, @1000</td>
          </tr>
          <tr>
            <td className="p-3 border">Register</td>
            <td className="p-3 border">EA = Register</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">ADD R1, R2</td>
          </tr>
          <tr>
            <td className="p-3 border">Register Indirect</td>
            <td className="p-3 border">EA = [Register]</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">LOAD R1, (R2)</td>
          </tr>
          <tr>
            <td className="p-3 border">Displacement</td>
            <td className="p-3 border">EA = Register + Offset</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">LOAD R1, 100(R2)</td>
          </tr>
          <tr>
            <td className="p-3 border">Relative</td>
            <td className="p-3 border">EA = PC + Offset</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">BEQ +50</td>
          </tr>
          <tr>
            <td className="p-3 border">Auto-Increment</td>
            <td className="p-3 border">EA = Register; R = R+1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">LOAD R1, (R2)+</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Addressing Mode Encoding</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Mode Bits in Instruction:

+--------+------+------+---------+
| Opcode | Mode | Reg  | Address |
+--------+------+------+---------+

Mode Field Encoding (Example):
  00 = Immediate
  01 = Direct
  10 = Register
  11 = Indexed

Example Instruction Encoding:
  ADD R1, #100     ; Mode=00 (Immediate)
  ADD R1, 1000     ; Mode=01 (Direct)
  ADD R1, R2       ; Mode=10 (Register)
  ADD R1, 50(R2)   ; Mode=11 (Indexed)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Applications</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`1. Array Access (Displacement):
   ; Access A[i] where A starts at address 1000
   ; R1 = base address (1000), R2 = index i

   ; Method 1: Base + Index
   LOAD R3, (R1 + R2*4)    ; R3 = A[i] (4 bytes per element)

   ; Method 2: Displacement
   MUL R4, R2, #4          ; R4 = i * 4
   ADD R4, R4, R1          ; R4 = base + offset
   LOAD R3, (R4)           ; R3 = A[i]

2. Pointer Dereferencing (Register Indirect):
   ; int *ptr = &x;
   ; int y = *ptr;

   MOV R1, ptr             ; R1 = address stored in ptr
   LOAD R2, (R1)           ; R2 = *ptr (value at address)

3. Structure Field Access (Displacement):
   ; struct { int a; int b; int c; } s;
   ; Access s.b (offset = 4 bytes from base)

   MOV R1, &s              ; R1 = base address of s
   LOAD R2, 4(R1)          ; R2 = s.b (base + 4)

4. Stack Variable Access (Base-Displacement):
   ; Local variable at FP-8
   LOAD R1, -8(FP)         ; R1 = local variable`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Addressing modes specify how to calculate the effective address (EA)</li>
        <li>Immediate mode is fastest as operand is in the instruction</li>
        <li>Register mode is fast with no memory access</li>
        <li>Indirect modes support pointers and dynamic addressing</li>
        <li>Displacement mode is useful for arrays and structures</li>
        <li>Relative addressing enables position-independent code</li>
        <li>Auto-increment/decrement simplifies array traversal</li>
        <li>RISC architectures use fewer, simpler addressing modes</li>
        <li>CISC architectures support many complex addressing modes</li>
      </ul>
    </div>
  </div>
);

export default AddressingModes;
