import React from "react";

export interface SidebarItem {
  label: string;
  href: string;
  isHeader?: boolean;
  children?: SidebarItem[];
}

export interface TopicContent {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export const tutorialData: SidebarItem[] = [
  { label: "Assembly HOME", href: "assembly_home" },
  { label: "Assembly Intro", href: "assembly_intro" },
  { label: "Assembly Setup", href: "assembly_setup" },
  {
    label: "Registers",
    href: "assembly_registers",
    isHeader: true,
    children: [
      { label: "Register Basics", href: "assembly_registers" },
      { label: "General Purpose", href: "assembly_gp_registers" },
      { label: "Segment Registers", href: "assembly_segment_registers" },
      { label: "Flag Register", href: "assembly_flag_register" },
    ]
  },
  {
    label: "Memory",
    href: "assembly_memory",
    isHeader: true,
    children: [
      { label: "Memory Model", href: "assembly_memory" },
      { label: "Memory Segments", href: "assembly_memory_segments" },
      { label: "Data Section", href: "assembly_data_section" },
    ]
  },
  {
    label: "Addressing Modes",
    href: "assembly_addressing",
    isHeader: true,
    children: [
      { label: "Addressing Overview", href: "assembly_addressing" },
      { label: "Immediate Addressing", href: "assembly_immediate" },
      { label: "Register Addressing", href: "assembly_register_addr" },
      { label: "Direct Addressing", href: "assembly_direct" },
      { label: "Indirect Addressing", href: "assembly_indirect" },
    ]
  },
  {
    label: "Instruction Set",
    href: "assembly_instructions",
    isHeader: true,
    children: [
      { label: "Instruction Overview", href: "assembly_instructions" },
      { label: "Data Movement", href: "assembly_data_movement" },
      { label: "MOV Instruction", href: "assembly_mov" },
      { label: "PUSH and POP", href: "assembly_push_pop" },
    ]
  },
  {
    label: "Arithmetic",
    href: "assembly_arithmetic",
    isHeader: true,
    children: [
      { label: "Arithmetic Overview", href: "assembly_arithmetic" },
      { label: "ADD and SUB", href: "assembly_add_sub" },
      { label: "MUL and DIV", href: "assembly_mul_div" },
      { label: "INC and DEC", href: "assembly_inc_dec" },
    ]
  },
  {
    label: "Logic Operations",
    href: "assembly_logic",
    isHeader: true,
    children: [
      { label: "Logic Overview", href: "assembly_logic" },
      { label: "AND, OR, XOR", href: "assembly_and_or_xor" },
      { label: "NOT and NEG", href: "assembly_not_neg" },
      { label: "Shift Operations", href: "assembly_shift" },
    ]
  },
  {
    label: "Control Flow",
    href: "assembly_control_flow",
    isHeader: true,
    children: [
      { label: "Control Overview", href: "assembly_control_flow" },
      { label: "JMP Instructions", href: "assembly_jmp" },
      { label: "Conditional Jumps", href: "assembly_conditional_jmp" },
      { label: "Loops", href: "assembly_loops" },
      { label: "CMP Instruction", href: "assembly_cmp" },
    ]
  },
  {
    label: "Procedures",
    href: "assembly_procedures",
    isHeader: true,
    children: [
      { label: "Procedure Basics", href: "assembly_procedures" },
      { label: "CALL and RET", href: "assembly_call_ret" },
      { label: "Parameter Passing", href: "assembly_params" },
      { label: "Local Variables", href: "assembly_local_vars" },
    ]
  },
  {
    label: "Stack Operations",
    href: "assembly_stack",
    isHeader: true,
    children: [
      { label: "Stack Basics", href: "assembly_stack" },
      { label: "Stack Frames", href: "assembly_stack_frames" },
      { label: "Stack Usage", href: "assembly_stack_usage" },
    ]
  },
  {
    label: "Interrupts",
    href: "assembly_interrupts",
    isHeader: true,
    children: [
      { label: "Interrupt Basics", href: "assembly_interrupts" },
      { label: "Software Interrupts", href: "assembly_software_int" },
      { label: "System Calls", href: "assembly_syscalls" },
    ]
  },
  { label: "Debugging", href: "assembly_debugging" },
  { label: "Best Practices", href: "assembly_best_practices" },
];

export const tutorialContent: Record<string, TopicContent> = {
  "assembly_home": {
    title: "Assembly Language Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Assembly Language Tutorial
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>Assembly Language</strong> is a low-level programming language that provides direct control over computer hardware. It serves as a human-readable representation of machine code instructions.
        </p>
        <p className="leading-relaxed mb-4">
          Assembly is essential for understanding how computers work at the hardware level, writing performance-critical code, and developing operating systems and device drivers.
        </p>

        <h3 className="text-xl font-medium mb-3">Example: Hello World (x86-64 Linux)</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`section .data
    msg db "Hello, World!", 10
    len equ $ - msg

section .text
    global _start

_start:
    mov rax, 1        ; sys_write
    mov rdi, 1        ; stdout
    mov rsi, msg      ; message
    mov rdx, len      ; length
    syscall

    mov rax, 60       ; sys_exit
    xor rdi, rdi      ; exit code 0
    syscall`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Why Learn Assembly?</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Understand how computers execute programs at the lowest level</li>
          <li>Write highly optimized, performance-critical code</li>
          <li>Develop operating systems and device drivers</li>
          <li>Reverse engineering and security research</li>
          <li>Debug complex software issues</li>
        </ul>
      </>
    ),
  },

  "assembly_intro": {
    title: "Introduction to Assembly",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is Assembly Language?
        </h2>
        <p className="leading-relaxed mb-4">
          Assembly language is a low-level programming language that has a strong correspondence with the machine code instructions of a specific processor architecture.
        </p>
        <p className="leading-relaxed mb-4">
          Unlike high-level languages like Python or Java, assembly provides direct control over the CPU's registers, memory, and instruction execution.
        </p>

        <h3 className="text-xl font-medium mb-3">Key Concepts</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Mnemonics:</strong> Human-readable representations of machine instructions (MOV, ADD, JMP)</li>
          <li><strong>Operands:</strong> Data that instructions operate on (registers, memory, immediates)</li>
          <li><strong>Labels:</strong> Named locations in code for branching and data reference</li>
          <li><strong>Directives:</strong> Instructions for the assembler (not CPU instructions)</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">Assembly vs Machine Code</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; Assembly (human-readable)
mov eax, 5        ; Move value 5 into EAX register
add eax, 3        ; Add 3 to EAX

; Machine Code (binary)
B8 05 00 00 00    ; mov eax, 5
83 C0 03          ; add eax, 3`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Common Architectures</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><strong>x86/x86-64:</strong> Intel and AMD processors (most desktop/laptop computers)</li>
          <li><strong>ARM:</strong> Mobile devices, embedded systems, Apple Silicon</li>
          <li><strong>RISC-V:</strong> Open-source instruction set architecture</li>
          <li><strong>MIPS:</strong> Embedded systems, academic teaching</li>
        </ul>
      </>
    ),
  },

  "assembly_setup": {
    title: "Assembly Setup",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Setting Up Your Environment
        </h2>
        <p className="leading-relaxed mb-4">
          To write and run assembly programs, you need an assembler and a linker. The most common tools vary by operating system.
        </p>

        <h3 className="text-xl font-medium mb-3">Linux Setup (NASM)</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Install NASM assembler
sudo apt-get install nasm

# Assemble and link a program
nasm -f elf64 program.asm -o program.o
ld program.o -o program

# Run the program
./program`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Windows Setup (MASM)</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; Install Visual Studio with C++ tools
; Use Developer Command Prompt

ml64 /c program.asm
link /subsystem:console program.obj`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Program Structure (NASM)</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`section .data       ; Initialized data
    myVar db 10     ; Define byte with value 10

section .bss        ; Uninitialized data
    buffer resb 64  ; Reserve 64 bytes

section .text       ; Code section
    global _start   ; Entry point

_start:
    ; Your code here

    ; Exit program
    mov rax, 60     ; sys_exit
    xor rdi, rdi    ; status 0
    syscall`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_registers": {
    title: "Registers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CPU Registers
        </h2>
        <p className="leading-relaxed mb-4">
          Registers are small, fast storage locations within the CPU. They hold data that the CPU is actively working with. Understanding registers is fundamental to assembly programming.
        </p>

        <h3 className="text-xl font-medium mb-3">x86-64 Register Overview</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`64-bit   32-bit   16-bit   8-bit (high/low)
RAX      EAX      AX       AH / AL    ; Accumulator
RBX      EBX      BX       BH / BL    ; Base
RCX      ECX      CX       CH / CL    ; Counter
RDX      EDX      DX       DH / DL    ; Data

RSI      ESI      SI       SIL        ; Source Index
RDI      EDI      DI       DIL        ; Destination Index
RBP      EBP      BP       BPL        ; Base Pointer
RSP      ESP      SP       SPL        ; Stack Pointer

R8-R15   R8D-R15D R8W-R15W R8B-R15B   ; Extended (x64)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Register Usage Example</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`mov rax, 100      ; 64-bit: RAX = 100
mov eax, 50       ; 32-bit: EAX = 50 (clears upper 32 bits)
mov ax, 25        ; 16-bit: AX = 25
mov al, 10        ; 8-bit low: AL = 10
mov ah, 5         ; 8-bit high: AH = 5`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_gp_registers": {
    title: "General Purpose Registers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          General Purpose Registers
        </h2>
        <p className="leading-relaxed mb-4">
          General purpose registers can be used for various operations, though they often have conventional uses.
        </p>

        <h3 className="text-xl font-medium mb-3">Traditional Register Purposes</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>RAX:</strong> Accumulator - arithmetic operations, function return values</li>
          <li><strong>RBX:</strong> Base - base pointer for memory access</li>
          <li><strong>RCX:</strong> Counter - loop counters, shift/rotate counts</li>
          <li><strong>RDX:</strong> Data - I/O operations, multiplication/division extension</li>
          <li><strong>RSI:</strong> Source Index - string operations source</li>
          <li><strong>RDI:</strong> Destination Index - string operations destination</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">System V AMD64 Calling Convention</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; Function arguments (in order):
; RDI, RSI, RDX, RCX, R8, R9
; Additional arguments on stack

; Return value: RAX (and RDX for 128-bit)

; Caller-saved: RAX, RCX, RDX, RSI, RDI, R8-R11
; Callee-saved: RBX, RBP, R12-R15`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_segment_registers": {
    title: "Segment Registers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Segment Registers
        </h2>
        <p className="leading-relaxed mb-4">
          Segment registers were essential in 16-bit and early 32-bit x86 for memory segmentation. In 64-bit mode, they're largely unused except for FS and GS.
        </p>

        <h3 className="text-xl font-medium mb-3">Segment Register List</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>CS:</strong> Code Segment - points to code being executed</li>
          <li><strong>DS:</strong> Data Segment - default segment for data access</li>
          <li><strong>SS:</strong> Stack Segment - points to the stack</li>
          <li><strong>ES:</strong> Extra Segment - additional data segment</li>
          <li><strong>FS:</strong> Extra Segment - used for thread-local storage (modern use)</li>
          <li><strong>GS:</strong> Extra Segment - used for thread-local storage (modern use)</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">Modern Usage (x86-64)</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; In 64-bit mode, FS and GS are used for
; thread-local storage (TLS)

; Linux: FS points to thread control block
; Windows: GS points to Thread Environment Block (TEB)

; Access thread-local data
mov rax, [fs:0x28]  ; Stack canary on Linux`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_flag_register": {
    title: "Flag Register",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Flag Register (RFLAGS)
        </h2>
        <p className="leading-relaxed mb-4">
          The flag register contains status bits that reflect the results of operations and control CPU behavior.
        </p>

        <h3 className="text-xl font-medium mb-3">Common Status Flags</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>ZF (Zero Flag):</strong> Set if result is zero</li>
          <li><strong>SF (Sign Flag):</strong> Set if result is negative</li>
          <li><strong>CF (Carry Flag):</strong> Set on unsigned overflow</li>
          <li><strong>OF (Overflow Flag):</strong> Set on signed overflow</li>
          <li><strong>PF (Parity Flag):</strong> Set if low byte has even number of 1s</li>
          <li><strong>AF (Auxiliary Flag):</strong> BCD arithmetic carry</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">Flag Usage Example</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`mov eax, 5
cmp eax, 5        ; Compare: sets ZF=1 (equal)
je  equal_label   ; Jump if ZF=1

mov eax, 10
sub eax, 15       ; Result: -5, sets SF=1, CF=1
js  negative      ; Jump if SF=1 (signed negative)
jc  carry_set     ; Jump if CF=1 (unsigned borrow)`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_memory": {
    title: "Memory Model",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Memory Model
        </h2>
        <p className="leading-relaxed mb-4">
          Understanding memory organization is crucial for assembly programming. Modern systems use a flat memory model with virtual addressing.
        </p>

        <h3 className="text-xl font-medium mb-3">Memory Layout</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`High Address
+------------------+
|      Stack       |  <- Grows downward
|        |         |
|        v         |
+------------------+
|                  |
|      Heap        |  <- Grows upward
|        ^         |
|        |         |
+------------------+
|      .bss        |  <- Uninitialized data
+------------------+
|      .data       |  <- Initialized data
+------------------+
|      .text       |  <- Program code
+------------------+
Low Address`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Data Sizes</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; NASM data size directives
db  - Define Byte (1 byte)
dw  - Define Word (2 bytes)
dd  - Define Double word (4 bytes)
dq  - Define Quad word (8 bytes)

; Examples
myByte   db  0xFF           ; 1 byte
myWord   dw  0x1234         ; 2 bytes
myDword  dd  0x12345678     ; 4 bytes
myQword  dq  0x123456789ABC ; 8 bytes`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_memory_segments": {
    title: "Memory Segments",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Memory Segments
        </h2>
        <p className="leading-relaxed mb-4">
          Assembly programs are organized into sections that serve different purposes.
        </p>

        <h3 className="text-xl font-medium mb-3">Section Types</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`section .text       ; Executable code (read-only)
    global _start
_start:
    ; Instructions here

section .data       ; Initialized read-write data
    msg db "Hello", 0
    count dd 100

section .rodata     ; Read-only data (constants)
    PI dd 3.14159

section .bss        ; Uninitialized data
    buffer resb 1024
    number resd 1`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_data_section": {
    title: "Data Section",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Data Section Directives
        </h2>
        <p className="leading-relaxed mb-4">
          The data section contains initialized variables that your program uses.
        </p>

        <h3 className="text-xl font-medium mb-3">Defining Data</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`section .data
    ; Strings
    msg     db "Hello, World!", 10, 0  ; null-terminated
    len     equ $ - msg - 1            ; string length

    ; Numbers
    byte1   db 0xFF                    ; unsigned byte
    word1   dw 1000                    ; 16-bit
    dword1  dd 100000                  ; 32-bit
    qword1  dq 10000000000             ; 64-bit

    ; Arrays
    arr     dd 1, 2, 3, 4, 5           ; array of dwords

    ; Floating point
    float1  dd 3.14                    ; single precision
    double1 dq 3.14159265359           ; double precision

section .bss
    ; Reserve uninitialized space
    buffer  resb 256                   ; 256 bytes
    nums    resd 10                    ; 10 dwords`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_addressing": {
    title: "Addressing Modes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Addressing Modes Overview
        </h2>
        <p className="leading-relaxed mb-4">
          Addressing modes determine how operands are specified in instructions. x86 provides several flexible addressing modes.
        </p>

        <h3 className="text-xl font-medium mb-3">Addressing Mode Summary</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; Immediate - constant value
mov eax, 100

; Register - value in register
mov eax, ebx

; Direct - value at memory address
mov eax, [myVar]

; Register Indirect - address in register
mov eax, [rbx]

; Base + Displacement
mov eax, [rbx + 8]

; Base + Index
mov eax, [rbx + rcx]

; Base + Index * Scale + Displacement
mov eax, [rbx + rcx*4 + 16]`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_immediate": {
    title: "Immediate Addressing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Immediate Addressing
        </h2>
        <p className="leading-relaxed mb-4">
          Immediate addressing uses constant values encoded directly in the instruction.
        </p>

        <h3 className="text-xl font-medium mb-3">Examples</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`mov eax, 42           ; Decimal
mov ebx, 0x2A         ; Hexadecimal
mov ecx, 101010b      ; Binary
mov edx, 'A'          ; Character (ASCII 65)

add eax, 10           ; Add immediate
sub ebx, 5            ; Subtract immediate
cmp ecx, 100          ; Compare with immediate`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_register_addr": {
    title: "Register Addressing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Register Addressing
        </h2>
        <p className="leading-relaxed mb-4">
          Register addressing operates directly on values stored in registers.
        </p>

        <h3 className="text-xl font-medium mb-3">Examples</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`mov eax, ebx          ; Copy EBX to EAX
add eax, ecx          ; EAX = EAX + ECX
xchg eax, ebx         ; Swap EAX and EBX

; Size matters
mov rax, rbx          ; 64-bit
mov eax, ebx          ; 32-bit (clears upper 32)
mov ax, bx            ; 16-bit
mov al, bl            ; 8-bit`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_direct": {
    title: "Direct Addressing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Direct Memory Addressing
        </h2>
        <p className="leading-relaxed mb-4">
          Direct addressing accesses memory at a fixed address, typically using a label.
        </p>

        <h3 className="text-xl font-medium mb-3">Examples</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`section .data
    myVar dd 100

section .text
    mov eax, [myVar]      ; Load value from myVar
    mov [myVar], ebx      ; Store EBX to myVar

    ; Size specifiers when needed
    mov byte [myVar], 50
    mov word [myVar], 1000
    mov dword [myVar], 50000`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_indirect": {
    title: "Indirect Addressing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Indirect Addressing
        </h2>
        <p className="leading-relaxed mb-4">
          Indirect addressing uses a register to hold the memory address to access.
        </p>

        <h3 className="text-xl font-medium mb-3">Examples</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`section .data
    array dd 10, 20, 30, 40, 50

section .text
    lea rbx, [array]      ; Load address of array
    mov eax, [rbx]        ; EAX = 10 (first element)
    mov eax, [rbx + 4]    ; EAX = 20 (second element)

    ; With index register
    mov rcx, 2            ; Index = 2
    mov eax, [rbx + rcx*4] ; EAX = array[2] = 30

    ; Useful for array traversal
    xor rcx, rcx          ; Counter = 0
loop_start:
    mov eax, [rbx + rcx*4]
    ; process eax...
    inc rcx
    cmp rcx, 5
    jl loop_start`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_instructions": {
    title: "Instruction Set Overview",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          x86 Instruction Set Overview
        </h2>
        <p className="leading-relaxed mb-4">
          The x86 instruction set includes hundreds of instructions. Here we cover the most commonly used categories.
        </p>

        <h3 className="text-xl font-medium mb-3">Instruction Categories</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Data Movement:</strong> MOV, PUSH, POP, LEA, XCHG</li>
          <li><strong>Arithmetic:</strong> ADD, SUB, MUL, DIV, INC, DEC</li>
          <li><strong>Logic:</strong> AND, OR, XOR, NOT, SHL, SHR</li>
          <li><strong>Control Flow:</strong> JMP, Jcc, CALL, RET, LOOP</li>
          <li><strong>Comparison:</strong> CMP, TEST</li>
          <li><strong>String:</strong> MOVS, CMPS, SCAS, LODS, STOS</li>
        </ul>
      </>
    ),
  },

  "assembly_data_movement": {
    title: "Data Movement Instructions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Data Movement Instructions
        </h2>
        <p className="leading-relaxed mb-4">
          Data movement instructions transfer data between registers, memory, and immediate values.
        </p>

        <h3 className="text-xl font-medium mb-3">Common Instructions</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; MOV - Move data
mov eax, ebx          ; Register to register
mov eax, [mem]        ; Memory to register
mov [mem], eax        ; Register to memory
mov eax, 100          ; Immediate to register

; LEA - Load Effective Address
lea rax, [rbx + rcx*4 + 8]  ; Calculate address

; XCHG - Exchange values
xchg eax, ebx         ; Swap EAX and EBX

; MOVZX - Move with zero extension
movzx eax, byte [mem] ; Zero-extend byte to dword

; MOVSX - Move with sign extension
movsx eax, byte [mem] ; Sign-extend byte to dword`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_mov": {
    title: "MOV Instruction",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          MOV Instruction
        </h2>
        <p className="leading-relaxed mb-4">
          MOV is the most fundamental instruction - it copies data from source to destination.
        </p>

        <h3 className="text-xl font-medium mb-3">MOV Variants</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; Basic MOV
mov eax, 42           ; Immediate to register
mov ebx, eax          ; Register to register
mov [var], eax        ; Register to memory
mov eax, [var]        ; Memory to register

; Cannot do memory to memory!
; mov [dest], [src]   ; INVALID!

; Instead:
mov eax, [src]
mov [dest], eax

; Size specifiers
mov byte [addr], 0xFF
mov word [addr], 0x1234
mov dword [addr], 0x12345678
mov qword [addr], rax`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_push_pop": {
    title: "PUSH and POP",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          PUSH and POP Instructions
        </h2>
        <p className="leading-relaxed mb-4">
          PUSH and POP manipulate the stack - a LIFO data structure essential for function calls.
        </p>

        <h3 className="text-xl font-medium mb-3">Stack Operations</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; PUSH - Decrement RSP, then store
push rax              ; Push register
push qword [var]      ; Push memory value
push 100              ; Push immediate

; POP - Load value, then increment RSP
pop rax               ; Pop to register
pop qword [var]       ; Pop to memory

; Save and restore registers
push rbx
push rcx
push rdx
; ... do work ...
pop rdx               ; Restore in reverse order
pop rcx
pop rbx`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_arithmetic": {
    title: "Arithmetic Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Arithmetic Operations
        </h2>
        <p className="leading-relaxed mb-4">
          Arithmetic instructions perform mathematical operations and set flags based on results.
        </p>

        <h3 className="text-xl font-medium mb-3">Common Arithmetic Instructions</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`add eax, ebx          ; EAX = EAX + EBX
sub eax, 10           ; EAX = EAX - 10
inc eax               ; EAX = EAX + 1
dec eax               ; EAX = EAX - 1
neg eax               ; EAX = -EAX

; Multiplication
imul eax, ebx         ; Signed: EAX = EAX * EBX
imul eax, ebx, 10     ; Signed: EAX = EBX * 10
mul ebx               ; Unsigned: EDX:EAX = EAX * EBX

; Division
; EDX:EAX / operand -> EAX (quotient), EDX (remainder)
xor edx, edx          ; Clear EDX for unsigned div
div ebx               ; Unsigned divide

cdq                   ; Sign-extend EAX into EDX
idiv ebx              ; Signed divide`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_add_sub": {
    title: "ADD and SUB",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          ADD and SUB Instructions
        </h2>
        <p className="leading-relaxed mb-4">
          ADD and SUB perform addition and subtraction, setting flags to indicate results.
        </p>

        <h3 className="text-xl font-medium mb-3">Examples</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; ADD
add eax, ebx          ; EAX += EBX
add eax, 100          ; EAX += 100
add [var], eax        ; [var] += EAX
add eax, [var]        ; EAX += [var]

; SUB
sub eax, ebx          ; EAX -= EBX
sub eax, 50           ; EAX -= 50

; ADC - Add with Carry (for multi-precision)
add eax, ebx          ; Add low dwords
adc edx, ecx          ; Add high dwords + carry

; SBB - Subtract with Borrow
sub eax, ebx          ; Sub low dwords
sbb edx, ecx          ; Sub high dwords - borrow`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_mul_div": {
    title: "MUL and DIV",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          MUL and DIV Instructions
        </h2>
        <p className="leading-relaxed mb-4">
          Multiplication and division have specific register requirements.
        </p>

        <h3 className="text-xl font-medium mb-3">Multiplication</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; Unsigned multiplication (MUL)
mov eax, 10
mov ebx, 5
mul ebx               ; EDX:EAX = EAX * EBX = 50

; Signed multiplication (IMUL)
imul eax, ebx         ; EAX = EAX * EBX
imul eax, ebx, 100    ; EAX = EBX * 100
imul eax, [var]       ; EAX = EAX * [var]`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Division</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; Unsigned division (DIV)
mov eax, 100
xor edx, edx          ; Clear EDX!
mov ebx, 7
div ebx               ; EAX = 14 (quotient), EDX = 2 (remainder)

; Signed division (IDIV)
mov eax, -100
cdq                   ; Sign-extend EAX to EDX:EAX
mov ebx, 7
idiv ebx              ; EAX = -14, EDX = -2`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_inc_dec": {
    title: "INC and DEC",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          INC and DEC Instructions
        </h2>
        <p className="leading-relaxed mb-4">
          INC and DEC increment and decrement by 1. They're often used in loops.
        </p>

        <h3 className="text-xl font-medium mb-3">Examples</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`inc eax               ; EAX++
dec eax               ; EAX--
inc byte [counter]    ; Increment memory byte
dec qword [var]       ; Decrement memory qword

; Common loop pattern
    mov ecx, 10       ; Counter
loop_start:
    ; ... loop body ...
    dec ecx
    jnz loop_start    ; Jump if not zero

; Note: INC/DEC don't affect Carry Flag
; Use ADD/SUB if you need CF set`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_logic": {
    title: "Logic Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Logic Operations Overview
        </h2>
        <p className="leading-relaxed mb-4">
          Logical instructions perform bitwise operations on operands.
        </p>

        <h3 className="text-xl font-medium mb-3">Common Logical Operations</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`and eax, ebx          ; Bitwise AND
or  eax, ebx          ; Bitwise OR
xor eax, ebx          ; Bitwise XOR
not eax               ; Bitwise NOT (complement)

; Common idioms
xor eax, eax          ; Zero a register (fastest)
or  eax, -1           ; Set all bits to 1
and eax, 0xFF         ; Mask to keep low byte
or  eax, 0x80         ; Set bit 7
and eax, ~0x80        ; Clear bit 7
xor eax, 0x80         ; Toggle bit 7`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_and_or_xor": {
    title: "AND, OR, XOR",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          AND, OR, XOR Instructions
        </h2>
        <p className="leading-relaxed mb-4">
          These bitwise operations are fundamental for bit manipulation.
        </p>

        <h3 className="text-xl font-medium mb-3">Truth Tables and Examples</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; AND - Both bits must be 1
;   1010 AND 1100 = 1000
mov eax, 0b1010
and eax, 0b1100       ; Result: 0b1000

; OR - Either bit can be 1
;   1010 OR 1100 = 1110
mov eax, 0b1010
or  eax, 0b1100       ; Result: 0b1110

; XOR - Bits must differ
;   1010 XOR 1100 = 0110
mov eax, 0b1010
xor eax, 0b1100       ; Result: 0b0110

; TEST - AND without storing result (sets flags)
test eax, 0x01        ; Check if bit 0 is set
jnz  bit_is_set       ; Jump if not zero`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_not_neg": {
    title: "NOT and NEG",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          NOT and NEG Instructions
        </h2>
        <p className="leading-relaxed mb-4">
          NOT performs bitwise complement; NEG performs two's complement negation.
        </p>

        <h3 className="text-xl font-medium mb-3">Examples</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; NOT - Flip all bits (one's complement)
mov al, 0b00001111
not al                ; Result: 0b11110000

; NEG - Two's complement negation
mov eax, 5
neg eax               ; EAX = -5

mov eax, -10
neg eax               ; EAX = 10

; NEG is equivalent to: NOT + ADD 1
; or: 0 - operand`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_shift": {
    title: "Shift Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Shift and Rotate Operations
        </h2>
        <p className="leading-relaxed mb-4">
          Shift operations move bits left or right, useful for multiplication/division by powers of 2.
        </p>

        <h3 className="text-xl font-medium mb-3">Shift Instructions</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; SHL/SAL - Shift Left (multiply by 2^n)
shl eax, 1            ; EAX *= 2
shl eax, 3            ; EAX *= 8
shl eax, cl           ; Shift by CL register

; SHR - Logical Shift Right (unsigned divide)
shr eax, 1            ; EAX /= 2 (unsigned)
shr eax, 2            ; EAX /= 4 (unsigned)

; SAR - Arithmetic Shift Right (signed divide)
sar eax, 1            ; EAX /= 2 (preserves sign)

; ROL/ROR - Rotate Left/Right
rol eax, 4            ; Rotate left 4 bits
ror eax, 4            ; Rotate right 4 bits

; RCL/RCR - Rotate through Carry
rcl eax, 1            ; Rotate left through carry`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_control_flow": {
    title: "Control Flow",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Control Flow Overview
        </h2>
        <p className="leading-relaxed mb-4">
          Control flow instructions change the sequence of execution based on conditions or unconditionally.
        </p>

        <h3 className="text-xl font-medium mb-3">Control Flow Categories</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Unconditional:</strong> JMP - always transfers control</li>
          <li><strong>Conditional:</strong> Jcc - jump based on flags</li>
          <li><strong>Procedure:</strong> CALL/RET - function calls</li>
          <li><strong>Loop:</strong> LOOP, LOOPE, LOOPNE - iterate</li>
        </ul>
      </>
    ),
  },

  "assembly_jmp": {
    title: "JMP Instructions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          JMP Instruction
        </h2>
        <p className="leading-relaxed mb-4">
          JMP unconditionally transfers control to a target address.
        </p>

        <h3 className="text-xl font-medium mb-3">JMP Types</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; Direct jump to label
jmp target_label

; Short jump (-128 to +127 bytes)
jmp short nearby

; Near jump (same segment)
jmp near far_away

; Indirect jump (address in register)
jmp rax

; Indirect jump (address in memory)
jmp [jump_table + rax*8]

target_label:
    ; code here`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_conditional_jmp": {
    title: "Conditional Jumps",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Conditional Jump Instructions
        </h2>
        <p className="leading-relaxed mb-4">
          Conditional jumps branch based on the state of flags, typically set by CMP or TEST.
        </p>

        <h3 className="text-xl font-medium mb-3">Common Conditional Jumps</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; After CMP a, b:
je  label    ; Jump if Equal (ZF=1)
jne label    ; Jump if Not Equal (ZF=0)
jz  label    ; Jump if Zero (same as JE)
jnz label    ; Jump if Not Zero (same as JNE)

; Unsigned comparisons:
ja  label    ; Jump if Above (CF=0 and ZF=0)
jae label    ; Jump if Above or Equal (CF=0)
jb  label    ; Jump if Below (CF=1)
jbe label    ; Jump if Below or Equal (CF=1 or ZF=1)

; Signed comparisons:
jg  label    ; Jump if Greater
jge label    ; Jump if Greater or Equal
jl  label    ; Jump if Less
jle label    ; Jump if Less or Equal

; Flag-based:
js  label    ; Jump if Sign (SF=1, negative)
jns label    ; Jump if Not Sign (SF=0)
jo  label    ; Jump if Overflow
jno label    ; Jump if Not Overflow`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_loops": {
    title: "Loops",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Loop Instructions
        </h2>
        <p className="leading-relaxed mb-4">
          Assembly provides LOOP instructions, but conditional jumps are often preferred.
        </p>

        <h3 className="text-xl font-medium mb-3">Loop Examples</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; Using LOOP instruction (uses ECX/RCX)
    mov ecx, 10           ; Loop 10 times
loop_start:
    ; ... loop body ...
    loop loop_start       ; Decrement ECX, jump if not zero

; Better: Use conditional jump
    mov ecx, 10
my_loop:
    ; ... loop body ...
    dec ecx
    jnz my_loop

; For loop equivalent (for i = 0; i < 10; i++)
    xor ecx, ecx          ; i = 0
for_loop:
    cmp ecx, 10
    jge for_end           ; Exit if i >= 10
    ; ... loop body using ECX as index ...
    inc ecx
    jmp for_loop
for_end:`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_cmp": {
    title: "CMP Instruction",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CMP Instruction
        </h2>
        <p className="leading-relaxed mb-4">
          CMP subtracts the second operand from the first without storing the result, only setting flags.
        </p>

        <h3 className="text-xl font-medium mb-3">CMP Examples</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; if (eax == 5)
cmp eax, 5
je  equal_five

; if (eax > ebx) - signed
cmp eax, ebx
jg  eax_greater

; if (eax > ebx) - unsigned
cmp eax, ebx
ja  eax_above

; TEST for bit checking (AND without storing)
test eax, 1           ; Check if odd
jnz  is_odd

test eax, eax         ; Check if zero
jz   is_zero`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_procedures": {
    title: "Procedures",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Procedures and Functions
        </h2>
        <p className="leading-relaxed mb-4">
          Procedures (functions) allow code reuse. They use CALL to invoke and RET to return.
        </p>

        <h3 className="text-xl font-medium mb-3">Basic Procedure</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`section .text
    global _start

_start:
    mov rdi, 5            ; First argument
    mov rsi, 3            ; Second argument
    call add_numbers      ; Call procedure
    ; Result in RAX

    mov rdi, rax          ; Exit with result
    mov rax, 60
    syscall

; Procedure: add_numbers(a, b)
; Input: RDI = a, RSI = b
; Output: RAX = a + b
add_numbers:
    mov rax, rdi
    add rax, rsi
    ret`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_call_ret": {
    title: "CALL and RET",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          CALL and RET Instructions
        </h2>
        <p className="leading-relaxed mb-4">
          CALL pushes the return address and jumps to the procedure. RET pops and jumps to that address.
        </p>

        <h3 className="text-xl font-medium mb-3">How CALL/RET Work</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; CALL is equivalent to:
; push next_instruction_address
; jmp procedure_address

; RET is equivalent to:
; pop temp
; jmp temp

; Example
    call my_func          ; Push return addr, jump
    ; Execution continues here after RET

my_func:
    ; ... function code ...
    ret                   ; Pop return addr, jump back`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_params": {
    title: "Parameter Passing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Parameter Passing
        </h2>
        <p className="leading-relaxed mb-4">
          Parameters can be passed via registers (fast) or the stack (flexible).
        </p>

        <h3 className="text-xl font-medium mb-3">System V AMD64 ABI (Linux)</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; Integer arguments: RDI, RSI, RDX, RCX, R8, R9
; Return value: RAX

; Example: func(10, 20, 30)
mov rdi, 10           ; arg1
mov rsi, 20           ; arg2
mov rdx, 30           ; arg3
call func

; More than 6 args use stack (right to left)
; func(1, 2, 3, 4, 5, 6, 7, 8)
push 8                ; arg8
push 7                ; arg7
mov r9, 6             ; arg6
mov r8, 5             ; arg5
mov rcx, 4            ; arg4
mov rdx, 3            ; arg3
mov rsi, 2            ; arg2
mov rdi, 1            ; arg1
call func
add rsp, 16           ; Clean up stack`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_local_vars": {
    title: "Local Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Local Variables
        </h2>
        <p className="leading-relaxed mb-4">
          Local variables are stored on the stack, accessed relative to RBP (base pointer).
        </p>

        <h3 className="text-xl font-medium mb-3">Stack Frame Setup</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`my_function:
    ; Prologue - set up stack frame
    push rbp              ; Save old base pointer
    mov rbp, rsp          ; Set new base pointer
    sub rsp, 32           ; Allocate 32 bytes for locals

    ; Local variables:
    ; [rbp - 8]  = local1 (8 bytes)
    ; [rbp - 16] = local2 (8 bytes)
    ; [rbp - 24] = local3 (8 bytes)
    ; [rbp - 32] = local4 (8 bytes)

    mov qword [rbp - 8], 100    ; local1 = 100
    mov rax, [rbp - 8]          ; Use local1

    ; Epilogue - restore stack
    mov rsp, rbp          ; Deallocate locals
    pop rbp               ; Restore old base pointer
    ret`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_stack": {
    title: "Stack Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Stack Basics
        </h2>
        <p className="leading-relaxed mb-4">
          The stack is a LIFO structure used for local variables, function parameters, and return addresses. It grows downward (toward lower addresses).
        </p>

        <h3 className="text-xl font-medium mb-3">Stack Visualization</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`High Address
+------------------+
|    Arguments     |  <- Passed on stack (if any)
+------------------+
|   Return Address |  <- Pushed by CALL
+------------------+
|    Saved RBP     |  <- Pushed in prologue
+------------------+  <- RBP points here
|   Local Var 1    |  <- [RBP - 8]
+------------------+
|   Local Var 2    |  <- [RBP - 16]
+------------------+  <- RSP points here
Low Address`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_stack_frames": {
    title: "Stack Frames",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Stack Frames
        </h2>
        <p className="leading-relaxed mb-4">
          Each function call creates a stack frame containing the return address, saved registers, and local variables.
        </p>

        <h3 className="text-xl font-medium mb-3">Standard Frame Setup</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`function_name:
    ; === Prologue ===
    push rbp              ; Save caller's frame pointer
    mov rbp, rsp          ; Establish our frame pointer
    sub rsp, N            ; Allocate N bytes for locals
    ; Optionally push callee-saved registers
    push rbx
    push r12

    ; === Function Body ===
    ; Access locals via [rbp - offset]
    ; Access args via [rbp + offset] or registers

    ; === Epilogue ===
    pop r12               ; Restore callee-saved regs
    pop rbx
    mov rsp, rbp          ; Deallocate locals
    pop rbp               ; Restore caller's frame pointer
    ret`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_stack_usage": {
    title: "Stack Usage",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Stack Usage Patterns
        </h2>
        <p className="leading-relaxed mb-4">
          The stack is used for various purposes beyond local variables.
        </p>

        <h3 className="text-xl font-medium mb-3">Common Uses</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; Saving registers before use
push rax
push rbx
; ... modify rax, rbx ...
pop rbx                   ; Restore in reverse
pop rax

; Temporary storage
push rax                  ; Save value temporarily
; ... do something else ...
pop rax                   ; Retrieve it

; Passing arguments (x64 - 7th+ args)
push arg8
push arg7
call function
add rsp, 16               ; Clean up

; Red zone (x64 Linux): 128 bytes below RSP
; Leaf functions can use without adjusting RSP`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_interrupts": {
    title: "Interrupts",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Interrupts Overview
        </h2>
        <p className="leading-relaxed mb-4">
          Interrupts are signals that cause the CPU to suspend current execution and run an interrupt handler.
        </p>

        <h3 className="text-xl font-medium mb-3">Types of Interrupts</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Hardware Interrupts:</strong> External devices (keyboard, disk, timer)</li>
          <li><strong>Software Interrupts:</strong> INT instruction (system calls)</li>
          <li><strong>Exceptions:</strong> CPU errors (division by zero, page fault)</li>
        </ul>
      </>
    ),
  },

  "assembly_software_int": {
    title: "Software Interrupts",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Software Interrupts
        </h2>
        <p className="leading-relaxed mb-4">
          Software interrupts are triggered by the INT instruction to request OS services.
        </p>

        <h3 className="text-xl font-medium mb-3">Legacy BIOS Interrupts (16-bit)</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; INT 10h - Video services
mov ah, 0x0E          ; Teletype output
mov al, 'A'           ; Character to print
int 0x10              ; Call BIOS

; INT 21h - DOS services
mov ah, 0x09          ; Print string
lea dx, [msg]         ; String address
int 0x21              ; Call DOS

; INT 0x80 - Linux system calls (32-bit)
mov eax, 4            ; sys_write
mov ebx, 1            ; stdout
mov ecx, msg          ; buffer
mov edx, len          ; length
int 0x80`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_syscalls": {
    title: "System Calls",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          System Calls (x86-64 Linux)
        </h2>
        <p className="leading-relaxed mb-4">
          Modern 64-bit Linux uses the SYSCALL instruction instead of INT 0x80.
        </p>

        <h3 className="text-xl font-medium mb-3">Common System Calls</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; Syscall convention:
; RAX = syscall number
; Arguments: RDI, RSI, RDX, R10, R8, R9
; Return value: RAX

; sys_write (1) - write to file descriptor
mov rax, 1            ; sys_write
mov rdi, 1            ; fd = stdout
mov rsi, msg          ; buffer
mov rdx, len          ; count
syscall

; sys_read (0) - read from file descriptor
mov rax, 0            ; sys_read
mov rdi, 0            ; fd = stdin
mov rsi, buffer       ; buffer
mov rdx, 100          ; max bytes
syscall               ; Returns bytes read in RAX

; sys_exit (60) - terminate process
mov rax, 60           ; sys_exit
mov rdi, 0            ; exit code
syscall`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_debugging": {
    title: "Debugging Assembly",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Debugging Assembly Programs
        </h2>
        <p className="leading-relaxed mb-4">
          GDB is the primary tool for debugging assembly programs on Linux.
        </p>

        <h3 className="text-xl font-medium mb-3">GDB Commands</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Assemble with debug info
nasm -f elf64 -g -F dwarf prog.asm
ld -o prog prog.o

# Start GDB
gdb ./prog

# Common commands:
(gdb) break _start        # Set breakpoint
(gdb) run                 # Start execution
(gdb) stepi               # Step one instruction
(gdb) nexti               # Step over calls
(gdb) info registers      # Show all registers
(gdb) print $rax          # Print RAX value
(gdb) x/10x $rsp          # Examine 10 hex words at RSP
(gdb) x/s 0x404000        # Examine as string
(gdb) disassemble         # Show disassembly
(gdb) continue            # Continue execution`}
          </pre>
        </div>
      </>
    ),
  },

  "assembly_best_practices": {
    title: "Best Practices",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Assembly Best Practices
        </h2>
        <p className="leading-relaxed mb-4">
          Writing maintainable assembly code requires discipline and good habits.
        </p>

        <h3 className="text-xl font-medium mb-3">Code Organization</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Comment every non-obvious instruction</li>
          <li>Use meaningful label names</li>
          <li>Document function inputs, outputs, and side effects</li>
          <li>Maintain consistent indentation</li>
          <li>Group related code together</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">Example with Good Practices</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`; ============================================
; Function: calculate_sum
; Purpose:  Calculate sum of array elements
; Input:    RDI = pointer to array
;           RSI = number of elements
; Output:   RAX = sum of elements
; Clobbers: RCX, RDX
; ============================================
calculate_sum:
    xor rax, rax          ; sum = 0
    xor rcx, rcx          ; index = 0

.loop:
    cmp rcx, rsi          ; Compare index with count
    jge .done             ; Exit if index >= count

    add rax, [rdi + rcx*8] ; sum += array[index]
    inc rcx               ; index++
    jmp .loop

.done:
    ret                   ; Return sum in RAX`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Performance Tips</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Use XOR reg, reg to zero a register (faster than MOV)</li>
          <li>Align data and code for better cache performance</li>
          <li>Minimize memory accesses; prefer registers</li>
          <li>Use LEA for simple arithmetic (doesn't affect flags)</li>
          <li>Avoid data dependencies in instruction sequences</li>
        </ul>
      </>
    ),
  },
};
