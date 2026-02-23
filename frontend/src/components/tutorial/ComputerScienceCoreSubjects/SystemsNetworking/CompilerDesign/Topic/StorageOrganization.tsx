import React from "react";

const StorageOrganization: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Storage Organization ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Storage Organization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Storage organization</strong> refers to how memory is structured and managed during
      program execution. Understanding memory organization is crucial for compiler design as it
      affects how variables are accessed, how procedures are called, and how dynamic memory is
      allocated. The runtime memory is typically divided into four main regions: Code, Static Data,
      Stack, and Heap.
    </p>

    {/* Memory Layout */}
    <h2 className="text-3xl font-bold mt-8">Memory Layout</h2>
    <p className="leading-relaxed">
      When a program is loaded into memory for execution, the operating system allocates memory
      that is divided into distinct regions, each serving a specific purpose:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory Layout of a Running Program:

+---------------------------+  0xFFFFFFFF (High Address)
|      Command Line Args    |
|      & Environment Vars   |
+---------------------------+
|                           |
|          STACK            |
|   (Local Variables,       |
|    Return Addresses,      |
|    Activation Records)    |
|             |             |
|             v             |  <- Stack grows downward
|                           |
|        (Free Space)       |
|                           |
|             ^             |  <- Heap grows upward
|             |             |
|          HEAP             |
|   (Dynamic Allocation:    |
|    malloc, new, etc.)     |
|                           |
+---------------------------+
|      BSS Segment          |
|   (Uninitialized Data)    |
+---------------------------+
|      Data Segment         |
|   (Initialized Static     |
|    and Global Data)       |
+---------------------------+
|      Text Segment         |
|   (Machine Code)          |
+---------------------------+  0x00000000 (Low Address)`}
      </pre>
    </div>

    {/* Text/Code Segment */}
    <h2 className="text-3xl font-bold mt-8">Text/Code Segment</h2>
    <p className="leading-relaxed">
      The <strong>text segment</strong> (also called code segment) contains the executable
      instructions of the program. This region has specific characteristics:
    </p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Contains compiled machine code instructions</li>
      <li>Usually marked as <strong>read-only</strong> to prevent accidental modification</li>
      <li>Can be <strong>shared</strong> among multiple processes running the same program</li>
      <li>Size is fixed at compile time</li>
      <li>Located at the lowest addresses in memory</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Example - Code Segment Contents:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Source Code
int add(int a, int b) {
    return a + b;
}

// Compiled Assembly (in Text Segment)
add:
    push    rbp
    mov     rbp, rsp
    mov     [rbp-4], edi    ; parameter a
    mov     [rbp-8], esi    ; parameter b
    mov     eax, [rbp-4]
    add     eax, [rbp-8]
    pop     rbp
    ret`}
      </pre>
    </div>

    {/* Data Segment */}
    <h2 className="text-3xl font-bold mt-8">Data Segment</h2>
    <p className="leading-relaxed">
      The <strong>data segment</strong> stores global and static variables that are initialized
      with explicit values in the source code:
    </p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Contains initialized global and static variables</li>
      <li>Read-write section for modifiable data</li>
      <li>Size determined at compile time</li>
      <li>Lifetime is the entire program execution</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Example - Data Segment Contents:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// These go to Data Segment (initialized)
int globalVar = 100;              // Global initialized
static int staticVar = 200;       // Static initialized
char message[] = "Hello World";   // Initialized string

// In memory (Data Segment):
// Address     Value       Variable
// 0x00601000  100        globalVar
// 0x00601004  200        staticVar
// 0x00601008  "Hello..."  message`}
      </pre>
    </div>

    {/* BSS Segment */}
    <h2 className="text-3xl font-bold mt-8">BSS Segment</h2>
    <p className="leading-relaxed">
      The <strong>BSS segment</strong> (Block Started by Symbol) contains global and static
      variables that are not explicitly initialized or are initialized to zero:
    </p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Contains uninitialized global and static variables</li>
      <li>Initialized to zero by the operating system before program starts</li>
      <li>Does not occupy space in the executable file (only size is stored)</li>
      <li>Memory is allocated at load time</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Example - BSS Segment Contents:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// These go to BSS Segment (uninitialized)
int uninitGlobal;                 // Uninitialized global
static int uninitStatic;          // Uninitialized static
int zeroInit = 0;                 // Zero initialized (may go to BSS)
char largeBuffer[10000];          // Large uninitialized array

// At runtime, BSS is initialized to zero:
// uninitGlobal = 0
// uninitStatic = 0
// largeBuffer = {0, 0, 0, ...}`}
      </pre>
    </div>

    {/* Stack Segment */}
    <h2 className="text-3xl font-bold mt-8">Stack Segment</h2>
    <p className="leading-relaxed">
      The <strong>stack segment</strong> is used for automatic storage and managing function calls.
      It operates on a Last-In-First-Out (LIFO) principle:
    </p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Stores local variables and function parameters</li>
      <li>Contains activation records (stack frames)</li>
      <li>Grows downward (from high to low addresses)</li>
      <li>Automatically managed - allocation on function entry, deallocation on exit</li>
      <li>Limited size (stack overflow if exceeded)</li>
      <li>Very fast allocation/deallocation</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Stack Organization During Function Calls:

void main() {
    int x = 10;
    foo(x);
}

void foo(int a) {
    int y = 20;
    bar(y);
}

void bar(int b) {
    int z = 30;
}

Stack Layout (when inside bar):

+------------------+  High Address
|   main's frame   |
|   x = 10         |
+------------------+
|   Return addr    |
+------------------+
|   foo's frame    |
|   a = 10         |
|   y = 20         |
+------------------+
|   Return addr    |
+------------------+
|   bar's frame    |  <- Stack Pointer (SP)
|   b = 20         |
|   z = 30         |
+------------------+  Low Address`}
      </pre>
    </div>

    {/* Heap Segment */}
    <h2 className="text-3xl font-bold mt-8">Heap Segment</h2>
    <p className="leading-relaxed">
      The <strong>heap segment</strong> is used for dynamic memory allocation, where memory is
      allocated and deallocated explicitly by the programmer or automatically by garbage collection:
    </p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Used for dynamic memory allocation (malloc, new, etc.)</li>
      <li>Grows upward (from low to high addresses)</li>
      <li>Manually managed in C/C++, garbage collected in Java/Python</li>
      <li>More flexible but slower than stack allocation</li>
      <li>Can lead to fragmentation</li>
      <li>No automatic deallocation (except with GC)</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Example - Heap Allocation:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Dynamic allocation on heap
int *arr = (int*)malloc(100 * sizeof(int));
char *str = (char*)malloc(50);
struct Node *node = (struct Node*)malloc(sizeof(struct Node));

Heap Layout:
+---------------------------+
|   node (struct Node)      |  <- 0x00702050
+---------------------------+
|   str (50 bytes)          |  <- 0x00702000
+---------------------------+
|   arr (400 bytes)         |  <- 0x00701000
+---------------------------+
        ^
        |
    Heap grows upward`}
      </pre>
    </div>

    {/* Comparison of Memory Regions */}
    <h2 className="text-3xl font-bold mt-8">Comparison of Memory Regions</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Stack</th>
            <th className="p-3 border">Heap</th>
            <th className="p-3 border">Static Data</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Allocation</td>
            <td className="p-3 border">Automatic</td>
            <td className="p-3 border">Manual/GC</td>
            <td className="p-3 border">Compile time</td>
          </tr>
          <tr>
            <td className="p-3 border">Deallocation</td>
            <td className="p-3 border">Automatic</td>
            <td className="p-3 border">Manual/GC</td>
            <td className="p-3 border">Program end</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Very fast</td>
            <td className="p-3 border">Slower</td>
            <td className="p-3 border">Direct access</td>
          </tr>
          <tr>
            <td className="p-3 border">Size Limit</td>
            <td className="p-3 border">Limited (1-8 MB)</td>
            <td className="p-3 border">Large (RAM)</td>
            <td className="p-3 border">Fixed at compile</td>
          </tr>
          <tr>
            <td className="p-3 border">Fragmentation</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Possible</td>
            <td className="p-3 border">None</td>
          </tr>
          <tr>
            <td className="p-3 border">Lifetime</td>
            <td className="p-3 border">Function scope</td>
            <td className="p-3 border">Explicit</td>
            <td className="p-3 border">Program lifetime</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Address Calculation */}
    <h2 className="text-3xl font-bold mt-8">Address Calculation</h2>
    <p className="leading-relaxed">
      The compiler generates code to calculate the addresses of variables based on their storage class:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Address Calculation Methods:

1. Static/Global Variables:
   Address = Base address of data segment + offset
   Example: globalVar at 0x601000 + 4 = 0x601004

2. Local Variables (on Stack):
   Address = Frame Pointer (FP) - offset
   Example: localVar at FP - 8

3. Parameters (on Stack):
   Address = Frame Pointer (FP) + offset
   Example: param1 at FP + 8

4. Array Elements:
   Address = Base + (index * element_size)
   Example: arr[5] at arr_base + (5 * 4) for int array

5. Struct Members:
   Address = Struct base + member offset
   Example: struct.field at struct_addr + 12`}
      </pre>
    </div>

    {/* Alignment and Padding */}
    <h2 className="text-3xl font-bold mt-8">Alignment and Padding</h2>
    <p className="leading-relaxed">
      Memory alignment ensures that data is stored at addresses that are multiples of their size,
      which improves memory access performance:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`struct Example {
    char a;      // 1 byte at offset 0
    // 3 bytes padding
    int b;       // 4 bytes at offset 4
    char c;      // 1 byte at offset 8
    // 3 bytes padding
};  // Total: 12 bytes (not 6)

Memory Layout:
+---+---+---+---+---+---+---+---+---+---+---+---+
| a | P | P | P |   b   |   b   | c | P | P | P |
+---+---+---+---+---+---+---+---+---+---+---+---+
  0   1   2   3   4   5   6   7   8   9  10  11

P = Padding byte

Alignment Rules (x86-64):
- char:   1-byte aligned
- short:  2-byte aligned
- int:    4-byte aligned
- double: 8-byte aligned
- pointer: 8-byte aligned`}
      </pre>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      Which memory segment contains the compiled machine instructions?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Stack</li>
      <li>(B) Heap</li>
      <li>(C) Text/Code Segment</li>
      <li>(D) BSS Segment</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) Text/Code Segment - The text segment contains the executable machine code.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      Uninitialized global variables are stored in which segment?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Text Segment</li>
      <li>(B) Data Segment</li>
      <li>(C) BSS Segment</li>
      <li>(D) Heap</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) BSS Segment - Uninitialized global and static variables go to BSS.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      In which direction does the stack typically grow?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) From low to high addresses</li>
      <li>(B) From high to low addresses</li>
      <li>(C) Both directions equally</li>
      <li>(D) Depends on the variable type</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) From high to low addresses - The stack grows downward in most architectures.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Memory is divided into Code, Data, BSS, Stack, and Heap segments</li>
      <li>The text segment contains executable code and is usually read-only</li>
      <li>Static data includes initialized (Data) and uninitialized (BSS) global/static variables</li>
      <li>Stack is used for automatic storage with LIFO management</li>
      <li>Heap provides flexible dynamic allocation but requires explicit management</li>
      <li>Memory alignment improves performance but may add padding</li>
    </ul>

  </div>
);

export default StorageOrganization;
