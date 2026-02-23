import React from "react";

const ObjectCodeGeneration: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Generating Object Code ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Generating Object Code
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Object code generation</strong> is the final step where assembly language or intermediate
      representations are converted into relocatable machine code. This code can be linked with other
      object files and libraries to create an executable program. Understanding object code format is
      essential for building complete compilers.
    </p>

    {/* Object Code vs Executable */}
    <h2 className="text-3xl font-bold mt-8">Object Code vs Executable</h2>
    <p className="leading-relaxed">
      Object code is an intermediate form that requires linking before execution.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Compilation Pipeline:

Source Code (.c, .cpp)
        |
        v
   +----------+
   | Compiler |  (Front-end + Back-end)
   +----------+
        |
        v
Object Code (.o, .obj)
        |
        v    Library files (.a, .lib)
   +--------+     |
   | Linker | <---+
   +--------+
        |
        v
Executable (.exe, a.out)
        |
        v
   +--------+
   | Loader |  (OS)
   +--------+
        |
        v
Running Program (in memory)`}
      </pre>
    </div>

    {/* Object File Format */}
    <h2 className="text-3xl font-bold mt-8">Object File Format</h2>
    <p className="leading-relaxed">
      Object files contain several sections that organize different types of information.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Typical Object File Structure:

+----------------------+
|      Header          |  File type, architecture, entry point
+----------------------+
|    Symbol Table      |  Defined and undefined symbols
+----------------------+
|   Text Section       |  Machine code (instructions)
+----------------------+
|   Data Section       |  Initialized global/static data
+----------------------+
|   BSS Section        |  Uninitialized data (size only)
+----------------------+
|  Relocation Table    |  Addresses that need fixing
+----------------------+
|   Debug Info         |  Line numbers, symbol info
+----------------------+`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Section Details</h3>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Section</th>
            <th className="p-3 border">Contents</th>
            <th className="p-3 border">Characteristics</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">.text</td>
            <td className="p-3 border">Machine instructions</td>
            <td className="p-3 border">Read-only, executable</td>
          </tr>
          <tr>
            <td className="p-3 border">.data</td>
            <td className="p-3 border">Initialized global data</td>
            <td className="p-3 border">Read-write</td>
          </tr>
          <tr>
            <td className="p-3 border">.rodata</td>
            <td className="p-3 border">String literals, constants</td>
            <td className="p-3 border">Read-only</td>
          </tr>
          <tr>
            <td className="p-3 border">.bss</td>
            <td className="p-3 border">Uninitialized data</td>
            <td className="p-3 border">Zero-initialized at load</td>
          </tr>
          <tr>
            <td className="p-3 border">.symtab</td>
            <td className="p-3 border">Symbol definitions</td>
            <td className="p-3 border">For linking</td>
          </tr>
          <tr>
            <td className="p-3 border">.rel.text</td>
            <td className="p-3 border">Text relocations</td>
            <td className="p-3 border">Address fixups</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Machine Code Generation */}
    <h2 className="text-3xl font-bold mt-8">Machine Code Generation</h2>
    <p className="leading-relaxed">
      Converting assembly instructions to binary machine code involves encoding opcodes,
      registers, and operands according to the instruction set architecture.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Example: x86 Instruction Encoding</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Assembly: MOV EAX, EBX

Instruction format:
  Opcode | ModR/M | SIB | Displacement | Immediate

For MOV EAX, EBX:
  Opcode: 0x89 (MOV r/m32, r32)
  ModR/M: 0xD8
    - Mod: 11 (register-to-register)
    - Reg: 011 (EBX = source)
    - R/M: 000 (EAX = destination)

Binary: 89 D8

Assembly: ADD EAX, 10

For ADD EAX, imm32:
  Opcode: 0x05 (ADD EAX, imm32)
  Immediate: 0A 00 00 00 (10 in little-endian)

Binary: 05 0A 00 00 00`}
      </pre>
    </div>

    {/* Symbol Table */}
    <h2 className="text-3xl font-bold mt-8">Symbol Table in Object Files</h2>
    <p className="leading-relaxed">
      The symbol table records information about functions, variables, and labels for linking.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Symbol Table Entry:
struct Symbol {
  char* name;       // Symbol name
  int   value;      // Offset in section (or absolute address)
  int   section;    // Which section (.text, .data, etc.)
  int   type;       // Function, variable, etc.
  int   binding;    // Local, global, or weak
  int   size;       // Size of symbol
};

Example symbol table:
+----------+--------+---------+--------+---------+
| Name     | Value  | Section | Type   | Binding |
+----------+--------+---------+--------+---------+
| main     | 0x0000 | .text   | FUNC   | GLOBAL  |
| helper   | 0x0040 | .text   | FUNC   | LOCAL   |
| counter  | 0x0000 | .data   | OBJECT | GLOBAL  |
| printf   | 0x0000 | UNDEF   | FUNC   | GLOBAL  |
+----------+--------+---------+--------+---------+

UNDEF means defined in another module (external)`}
      </pre>
    </div>

    {/* Relocation */}
    <h2 className="text-3xl font-bold mt-8">Relocation</h2>
    <p className="leading-relaxed">
      Object code contains placeholder addresses that must be fixed (relocated) during linking
      when final addresses become known.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Relocation Entry:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Relocation record:
struct Relocation {
  int offset;       // Location to be modified
  int symbol;       // Symbol table index
  int type;         // Relocation type (absolute, PC-relative, etc.)
  int addend;       // Constant to add
};

Example:

Source code:
  extern int x;
  int foo() { return x + 1; }

Generated code (before relocation):
  0000: MOV EAX, [0x00000000]  // Address of x unknown
  0006: ADD EAX, 1
  0009: RET

Relocation entry:
  offset: 0x0002              // Location of address in MOV
  symbol: x                   // Need address of x
  type: R_386_32              // Absolute 32-bit address
  addend: 0`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Types of Relocation</h3>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Formula</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Absolute</td>
            <td className="p-3 border">S + A</td>
            <td className="p-3 border">Global variable address</td>
          </tr>
          <tr>
            <td className="p-3 border">PC-relative</td>
            <td className="p-3 border">S + A - P</td>
            <td className="p-3 border">Function calls, branches</td>
          </tr>
          <tr>
            <td className="p-3 border">GOT-relative</td>
            <td className="p-3 border">G + A</td>
            <td className="p-3 border">Position-independent code</td>
          </tr>
          <tr>
            <td className="p-3 border">PLT-relative</td>
            <td className="p-3 border">L + A - P</td>
            <td className="p-3 border">Dynamic library calls</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="mt-2 text-sm">S = Symbol value, A = Addend, P = Place being relocated, G = GOT offset, L = PLT entry</p>

    {/* Linking Process */}
    <h2 className="text-3xl font-bold mt-8">The Linking Process</h2>
    <p className="leading-relaxed">
      The linker combines object files and resolves symbols to create an executable.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Linker Steps:

1. Symbol Resolution
   - Collect all symbol definitions
   - Match undefined references to definitions
   - Error if symbol undefined or multiply defined

2. Section Merging
   - Combine all .text sections
   - Combine all .data sections
   - Assign absolute addresses

3. Relocation
   - Apply relocation entries
   - Fix up addresses based on final layout

Example:

Object file A:              Object file B:
.text at 0x0000            .text at 0x0000
  call printf (UNDEF)        printf: ...
  call helper (UNDEF)        helper: ...

After linking:
.text at 0x1000 (load address)
  0x1000: call 0x1100 (printf)
  0x1005: call 0x1200 (helper)
  ...
  0x1100: printf code
  0x1200: helper code`}
      </pre>
    </div>

    {/* Generating Relocatable Code */}
    <h2 className="text-3xl font-bold mt-8">Compiler Code Generation for Object Files</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Code Generator Tasks:

1. For each function:
   - Emit machine code to .text section
   - Track code offset for labels
   - Create relocation entries for external calls

2. For global variables:
   - Initialized: emit data to .data section
   - Uninitialized: reserve space in .bss
   - Create symbol table entries

3. For string literals:
   - Emit to .rodata section
   - Create relocations for references

4. For function calls:
   - Emit CALL instruction with placeholder
   - Add relocation entry for target

Example generation:

int x = 10;
int y;

void foo() {
    x = bar() + y;
}

Generated:

.data section:
  0000: 0A 00 00 00   ; x = 10

.bss section:
  0000: (4 bytes)     ; y (uninitialized)

.text section:
  0000: CALL [bar]    ; relocation needed
  0005: MOV EBX, [y]  ; relocation needed
  000B: ADD EAX, EBX
  000D: MOV [x], EAX  ; relocation needed
  0013: RET

Relocation table:
  offset 0001: bar (PC-relative)
  offset 0007: y (absolute)
  offset 000F: x (absolute)`}
      </pre>
    </div>

    {/* Position Independent Code */}
    <h2 className="text-3xl font-bold mt-8">Position Independent Code (PIC)</h2>
    <p className="leading-relaxed">
      PIC can execute at any address without modification, essential for shared libraries.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Regular code (needs relocation):
  MOV EAX, [0x00401000]   ; Absolute address

Position Independent Code:
  CALL get_pc            ; Get current PC
get_pc:
  POP EBX                ; EBX = address of get_pc
  MOV EAX, [EBX + offset_to_var]

Modern approach (x86-64 RIP-relative):
  MOV EAX, [RIP + var]   ; PC-relative addressing

Global Offset Table (GOT):
  - Table of addresses, filled at load time
  - Code uses offsets into GOT
  - Only GOT entries need relocation

Procedure Linkage Table (PLT):
  - Trampolines for calling shared library functions
  - First call: resolve via dynamic linker
  - Subsequent calls: jump directly`}
      </pre>
    </div>

    {/* Debug Information */}
    <h2 className="text-3xl font-bold mt-8">Debug Information</h2>
    <p className="leading-relaxed">
      Debug info maps machine code back to source code for debugging.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`DWARF Debug Information (common format):

1. Line Number Table
   - Maps code addresses to source lines
   Address     Line  File
   0x0000      10    main.c
   0x0005      11    main.c
   0x0010      12    main.c

2. Variable Information
   - Name, type, location (register or stack offset)
   Variable: x
   Type: int
   Location: -4(%ebp) or DW_OP_fbreg -4

3. Function Information
   - Name, parameters, local variables
   - Frame base calculation

4. Type Information
   - Struct layouts, array dimensions
   - Pointer types, typedefs`}
      </pre>
    </div>

    {/* Object File Formats */}
    <h2 className="text-3xl font-bold mt-8">Common Object File Formats</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Format</th>
            <th className="p-3 border">Platform</th>
            <th className="p-3 border">Notes</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">ELF</td>
            <td className="p-3 border">Linux, Unix, BSD</td>
            <td className="p-3 border">Extensible, widely used</td>
          </tr>
          <tr>
            <td className="p-3 border">PE/COFF</td>
            <td className="p-3 border">Windows</td>
            <td className="p-3 border">Used for .exe, .dll, .obj</td>
          </tr>
          <tr>
            <td className="p-3 border">Mach-O</td>
            <td className="p-3 border">macOS, iOS</td>
            <td className="p-3 border">Apple platforms</td>
          </tr>
          <tr>
            <td className="p-3 border">COFF</td>
            <td className="p-3 border">Various</td>
            <td className="p-3 border">Older Unix format</td>
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
      What is the purpose of the relocation table in an object file?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) To store variable values</li>
      <li>(B) To record addresses that need to be fixed during linking</li>
      <li>(C) To list all functions in the file</li>
      <li>(D) To store debug information</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) The relocation table records locations in the code that contain placeholder addresses needing fixup when final addresses are known.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      What type of symbol would 'printf' be in a program that calls it?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Local symbol</li>
      <li>(B) Global defined symbol</li>
      <li>(C) Undefined (external) symbol</li>
      <li>(D) Weak symbol</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) printf is defined in the C library, not in the program, so it appears as an undefined external symbol.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      Why is Position Independent Code (PIC) important for shared libraries?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) It runs faster</li>
      <li>(B) It can be loaded at any address without modification</li>
      <li>(C) It uses less memory</li>
      <li>(D) It is easier to compile</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) PIC allows a shared library to be loaded at different addresses in different processes, enabling memory sharing.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Object files contain machine code, data, and metadata for linking</li>
      <li>Sections organize code (.text), initialized data (.data), and uninitialized data (.bss)</li>
      <li>Symbol tables record function and variable definitions and references</li>
      <li>Relocation tables specify addresses that need fixing during linking</li>
      <li>The linker combines object files, resolves symbols, and applies relocations</li>
      <li>Position Independent Code enables shared libraries to load at any address</li>
    </ul>

  </div>
);

export default ObjectCodeGeneration;
