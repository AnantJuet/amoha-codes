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
  { label: "D HOME", href: "d_home" },
  { label: "D Intro", href: "d_intro" },
  { label: "D Setup", href: "d_setup" },
  {
    label: "Basic Syntax",
    href: "d_syntax",
    isHeader: true,
    children: [
      { label: "Syntax Overview", href: "d_syntax" },
      { label: "Comments", href: "d_comments" },
      { label: "Identifiers", href: "d_identifiers" },
    ]
  },
  {
    label: "Variables",
    href: "d_variables",
    isHeader: true,
    children: [
      { label: "Variable Basics", href: "d_variables" },
      { label: "Data Types", href: "d_data_types" },
      { label: "Type Inference", href: "d_type_inference" },
      { label: "Constants", href: "d_constants" },
    ]
  },
  {
    label: "Functions",
    href: "d_functions",
    isHeader: true,
    children: [
      { label: "Function Basics", href: "d_functions" },
      { label: "Parameters", href: "d_parameters" },
      { label: "Return Values", href: "d_return_values" },
      { label: "Lambda Functions", href: "d_lambdas" },
    ]
  },
  {
    label: "Arrays",
    href: "d_arrays",
    isHeader: true,
    children: [
      { label: "Array Basics", href: "d_arrays" },
      { label: "Dynamic Arrays", href: "d_dynamic_arrays" },
      { label: "Associative Arrays", href: "d_assoc_arrays" },
      { label: "Slices", href: "d_slices" },
    ]
  },
  {
    label: "Ranges",
    href: "d_ranges",
    isHeader: true,
    children: [
      { label: "Range Basics", href: "d_ranges" },
      { label: "Range Algorithms", href: "d_range_algorithms" },
      { label: "Lazy Evaluation", href: "d_lazy_eval" },
    ]
  },
  {
    label: "Templates",
    href: "d_templates",
    isHeader: true,
    children: [
      { label: "Template Basics", href: "d_templates" },
      { label: "Function Templates", href: "d_func_templates" },
      { label: "Struct Templates", href: "d_struct_templates" },
      { label: "Template Constraints", href: "d_constraints" },
    ]
  },
  {
    label: "Mixins",
    href: "d_mixins",
    isHeader: true,
    children: [
      { label: "Mixin Basics", href: "d_mixins" },
      { label: "String Mixins", href: "d_string_mixins" },
      { label: "Template Mixins", href: "d_template_mixins" },
    ]
  },
  {
    label: "Memory Management",
    href: "d_memory",
    isHeader: true,
    children: [
      { label: "Memory Overview", href: "d_memory" },
      { label: "Garbage Collection", href: "d_gc" },
      { label: "Manual Memory", href: "d_manual_memory" },
      { label: "Safe Memory", href: "d_safe_memory" },
    ]
  },
  {
    label: "Concurrency",
    href: "d_concurrency",
    isHeader: true,
    children: [
      { label: "Concurrency Overview", href: "d_concurrency" },
      { label: "Threads", href: "d_threads" },
      { label: "Message Passing", href: "d_message_passing" },
      { label: "Fibers", href: "d_fibers" },
    ]
  },
  {
    label: "Parallelism",
    href: "d_parallelism",
    isHeader: true,
    children: [
      { label: "Parallel Overview", href: "d_parallelism" },
      { label: "Parallel Foreach", href: "d_parallel_foreach" },
      { label: "Task Pools", href: "d_task_pools" },
    ]
  },
  {
    label: "C/C++ Interface",
    href: "d_c_interface",
    isHeader: true,
    children: [
      { label: "Interface Overview", href: "d_c_interface" },
      { label: "Calling C", href: "d_calling_c" },
      { label: "Calling C++", href: "d_calling_cpp" },
      { label: "Extern Declarations", href: "d_extern" },
    ]
  },
];

export const tutorialContent: Record<string, TopicContent> = {
  "d_home": {
    title: "D Programming Language Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          D Programming Language Tutorial
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>D</strong> is a systems programming language designed to develop fast, efficient code while offering high-level constructs for productivity. It combines the power of C/C++ with modern features.
        </p>
        <p className="leading-relaxed mb-4">
          D provides metaprogramming through templates and compile-time function execution, built-in concurrency support, and optional garbage collection.
        </p>

        <h3 className="text-xl font-medium mb-3">Example: Hello World</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.stdio;

void main() {
    writeln("Hello, World!");
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Why Learn D?</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Systems programming with high-level productivity</li>
          <li>Powerful metaprogramming with templates and CTFE</li>
          <li>Built-in unit testing and documentation</li>
          <li>Direct C and C++ interoperability</li>
          <li>Optional garbage collection for memory safety</li>
          <li>Ranges for elegant algorithm composition</li>
        </ul>
      </>
    ),
  },

  "d_intro": {
    title: "Introduction to D",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is D?
        </h2>
        <p className="leading-relaxed mb-4">
          D is a general-purpose systems programming language designed as a better C++. Created by Walter Bright and Andrei Alexandrescu, it aims to provide modern convenience while maintaining system-level access.
        </p>

        <h3 className="text-xl font-medium mb-3">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Templates:</strong> Powerful compile-time metaprogramming</li>
          <li><strong>Ranges:</strong> Composable, lazy algorithm building blocks</li>
          <li><strong>CTFE:</strong> Compile-Time Function Execution</li>
          <li><strong>Mixins:</strong> Code generation and string mixins</li>
          <li><strong>@safe:</strong> Memory safety guarantees</li>
          <li><strong>Built-in Testing:</strong> unittest blocks in source</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">D vs Other Languages</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// D combines the best of multiple paradigms
// - C-like syntax (familiar)
// - C++ templates (powerful)
// - Python-like ranges (convenient)
// - Modern safety features

// Example: Finding all even squares under 100
import std.algorithm, std.range;

auto result = iota(1, 100)
    .map!(x => x * x)
    .filter!(x => x % 2 == 0)
    .take(5);`}
          </pre>
        </div>
      </>
    ),
  },

  "d_setup": {
    title: "D Setup",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Setting Up D Development Environment
        </h2>
        <p className="leading-relaxed mb-4">
          The DMD (Digital Mars D) compiler is the reference implementation. LDC and GDC are alternative compilers.
        </p>

        <h3 className="text-xl font-medium mb-3">Installing DMD</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Ubuntu/Debian
sudo apt-get install dmd

# macOS with Homebrew
brew install dmd

# Windows: Download installer from dlang.org
# Or use the install script:
curl -fsS https://dlang.org/install.sh | bash -s dmd`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Using DUB (Package Manager)</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Create new project
dub init myproject

# Build and run
dub run

# Build only
dub build

# Run tests
dub test`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Compiling Directly</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Compile and run
dmd hello.d
./hello

# Compile with optimizations
dmd -O -release hello.d

# Generate documentation
dmd -D hello.d`}
          </pre>
        </div>
      </>
    ),
  },

  "d_syntax": {
    title: "Basic Syntax",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          D Basic Syntax
        </h2>
        <p className="leading-relaxed mb-4">
          D has C-like syntax, making it familiar to C, C++, and Java programmers.
        </p>

        <h3 className="text-xl font-medium mb-3">Program Structure</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Module declaration (optional)
module myapp.main;

// Imports
import std.stdio;
import std.string : format;

// Main function - entry point
void main(string[] args) {
    writeln("Arguments: ", args);

    // Variable declarations
    int x = 10;
    auto y = 20;  // Type inference

    // Control flow
    if (x < y) {
        writeln("x is less than y");
    }

    // Loop
    foreach (i; 0 .. 5) {
        writeln(i);
    }
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_comments": {
    title: "Comments",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Comments in D
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Single-line comment

/* Multi-line
   comment */

/+ Nesting /+ comment +/ allowed +/

/// Documentation comment (single line)
/// Used by DDOC to generate documentation

/**
 * Documentation comment (multi-line)
 * Params:
 *     x = The input value
 * Returns: The computed result
 */
int compute(int x) {
    return x * 2;
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_identifiers": {
    title: "Identifiers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Identifiers in D
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Valid identifiers
int myVariable;
int _privateVar;
int camelCase;
int PascalCase;

// D supports Unicode identifiers
int temperatur = 25;
string Приветствие = "Hello";

// Reserved identifiers starting with __
// are reserved for the compiler

// Naming conventions:
// - camelCase for variables and functions
// - PascalCase for types and modules
// - UPPER_CASE for manifest constants
enum MAX_SIZE = 100;`}
          </pre>
        </div>
      </>
    ),
  },

  "d_variables": {
    title: "Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Variables in D
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.stdio;

void main() {
    // Explicit type
    int count = 10;
    double price = 19.99;
    string name = "D Language";

    // Type inference with auto
    auto x = 42;        // int
    auto y = 3.14;      // double
    auto z = "hello";   // string

    // Multiple declarations
    int a, b, c;
    int d = 1, e = 2, f = 3;

    // Default initialization
    int uninitialized;  // 0 by default
    float defaultFloat; // float.nan by default

    writeln("count: ", count);
    writeln("default int: ", uninitialized);
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_data_types": {
    title: "Data Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          D Data Types
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Integer types
byte b = 127;           // 8-bit signed
ubyte ub = 255;         // 8-bit unsigned
short s = 32767;        // 16-bit signed
ushort us = 65535;      // 16-bit unsigned
int i = 2_147_483_647;  // 32-bit signed
uint ui = 4_294_967_295;// 32-bit unsigned
long l = 9223372036854775807; // 64-bit signed
ulong ul;               // 64-bit unsigned

// Floating point
float f = 3.14f;        // 32-bit
double d = 3.14159265;  // 64-bit
real r = 3.14159265L;   // Platform-specific (80-bit on x86)

// Character types
char c = 'A';           // UTF-8 code unit
wchar wc = 'A';         // UTF-16 code unit
dchar dc = 'A';         // UTF-32 code point

// Boolean
bool flag = true;

// Strings (immutable char arrays)
string str = "Hello";   // immutable(char)[]
wstring wstr = "Hello"w;
dstring dstr = "Hello"d;`}
          </pre>
        </div>
      </>
    ),
  },

  "d_type_inference": {
    title: "Type Inference",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Type Inference in D
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.stdio;

void main() {
    // auto infers type from initializer
    auto x = 42;              // int
    auto y = 3.14;            // double
    auto z = "hello";         // string
    auto arr = [1, 2, 3];     // int[]

    // typeof gets type of expression
    typeof(x) another = 100;  // int

    // enum for compile-time constants
    enum PI = 3.14159;
    enum greeting = "Hello";

    // immutable - value set once, never changes
    immutable int MAX = 100;

    // const - read-only view
    const int[] nums = [1, 2, 3];

    // auto with complex types
    auto result = someFunction();

    writeln(typeof(x).stringof);  // "int"
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_constants": {
    title: "Constants",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Constants in D
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// enum - manifest constants (compile-time)
enum MAX_SIZE = 100;
enum PI = 3.14159;
enum string GREETING = "Hello";

// immutable - runtime constant
immutable int startTime = getCurrentTime();
immutable string CONFIG = readConfig();

// const - read-only view (may alias mutable data)
void process(const int[] data) {
    // Cannot modify data here
    // data[0] = 10;  // Error!
}

// Difference between const and immutable
void example() {
    int[] mutable = [1, 2, 3];
    const int[] constView = mutable;
    // mutable[0] = 10;  // OK - original is still mutable

    immutable int[] fixed = [1, 2, 3].idup;
    // No one can modify fixed
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_functions": {
    title: "Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Functions in D
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.stdio;

// Basic function
int add(int a, int b) {
    return a + b;
}

// Function with auto return type
auto multiply(int a, int b) {
    return a * b;
}

// void function
void greet(string name) {
    writeln("Hello, ", name, "!");
}

// Default parameters
void print(string msg, int times = 1) {
    foreach (_; 0 .. times) {
        writeln(msg);
    }
}

void main() {
    writeln(add(3, 4));      // 7
    writeln(multiply(3, 4)); // 12
    greet("World");
    print("Hi");             // prints once
    print("Hi", 3);          // prints 3 times
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_parameters": {
    title: "Function Parameters",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Function Parameters
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// By value (copy)
void byValue(int x) {
    x = 100;  // Doesn't affect caller
}

// By reference
void byRef(ref int x) {
    x = 100;  // Modifies caller's variable
}

// Output parameter
void getValues(out int a, out int b) {
    a = 10;
    b = 20;
}

// Lazy parameters (evaluated when used)
void log(lazy string msg) {
    debug writeln(msg);  // Only evaluated in debug
}

// Variadic functions
void printAll(T...)(T args) {
    foreach (arg; args) {
        writeln(arg);
    }
}

void main() {
    int x = 5;
    byValue(x);   // x still 5
    byRef(x);     // x is now 100

    int a, b;
    getValues(a, b);  // a=10, b=20

    printAll(1, "hello", 3.14);
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_return_values": {
    title: "Return Values",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Return Values
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.typecons : tuple, Tuple;

// Single return value
int square(int x) {
    return x * x;
}

// Auto return type
auto cube(int x) {
    return x * x * x;
}

// Multiple return values with tuple
Tuple!(int, string) getData() {
    return tuple(42, "answer");
}

// Using auto with tuple
auto getCoords() {
    return tuple(10.5, 20.3);
}

void main() {
    // Unpack tuple
    auto data = getData();
    writeln(data[0], " ", data[1]);

    // Direct unpacking
    auto (x, y) = getCoords();
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_lambdas": {
    title: "Lambda Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Lambda Functions
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.stdio;
import std.algorithm;

void main() {
    // Lambda syntax
    auto add = (int a, int b) => a + b;
    writeln(add(3, 4));  // 7

    // With block body
    auto complex = (int x) {
        auto result = x * 2;
        return result + 1;
    };

    // Type inference in lambdas
    auto square = (x) => x * x;

    // Using with algorithms
    auto numbers = [1, 2, 3, 4, 5];

    auto doubled = numbers.map!(x => x * 2);
    auto evens = numbers.filter!(x => x % 2 == 0);

    // Shorthand for single parameter
    auto tripled = numbers.map!(a => a * 3);

    // Capturing variables
    int multiplier = 10;
    auto scaled = numbers.map!(x => x * multiplier);

    foreach (n; scaled) {
        writeln(n);  // 10, 20, 30, 40, 50
    }
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_arrays": {
    title: "Array Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Arrays in D
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.stdio;

void main() {
    // Static array (fixed size)
    int[5] fixed = [1, 2, 3, 4, 5];
    // int[5] fixed = 0;  // All zeros

    // Dynamic array
    int[] dynamic = [1, 2, 3];
    dynamic ~= 4;        // Append
    dynamic ~= [5, 6];   // Append array

    // Array literals
    auto nums = [1, 2, 3, 4, 5];

    // Accessing elements
    writeln(nums[0]);    // 1
    writeln(nums[$-1]);  // 5 (last element)

    // Length
    writeln(nums.length); // 5

    // Iteration
    foreach (n; nums) {
        writeln(n);
    }

    foreach (i, n; nums) {
        writeln("Index ", i, ": ", n);
    }
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_dynamic_arrays": {
    title: "Dynamic Arrays",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Dynamic Arrays
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.stdio;

void main() {
    // Create dynamic array
    int[] arr;

    // Append elements
    arr ~= 1;
    arr ~= [2, 3, 4];

    // Pre-allocate
    arr.reserve(100);  // Reserve capacity

    // Resize
    arr.length = 10;   // Extend with defaults

    // Create with size
    auto zeros = new int[](100);

    // Array operations
    int[] a = [1, 2, 3];
    int[] b = [4, 5, 6];
    int[] c = a ~ b;   // Concatenation: [1,2,3,4,5,6]

    // Copy
    int[] copy = a.dup;

    // Clear
    arr.length = 0;
    // or
    arr = null;
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_assoc_arrays": {
    title: "Associative Arrays",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Associative Arrays (Maps)
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.stdio;

void main() {
    // Declare associative array
    int[string] ages;
    ages["Alice"] = 30;
    ages["Bob"] = 25;

    // Literal syntax
    auto prices = ["apple": 1.50, "banana": 0.75];

    // Access
    writeln(ages["Alice"]);  // 30

    // Check existence
    if ("Alice" in ages) {
        writeln("Found Alice");
    }

    // Safe access with get
    auto age = ages.get("Charlie", -1);  // -1 if not found

    // Iteration
    foreach (name, age; ages) {
        writeln(name, " is ", age);
    }

    // Keys and values
    auto names = ages.keys;
    auto allAges = ages.values;

    // Remove
    ages.remove("Bob");
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_slices": {
    title: "Slices",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Array Slices
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.stdio;

void main() {
    auto arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // Slice syntax: arr[start .. end]
    auto slice1 = arr[2 .. 5];   // [2, 3, 4]
    auto slice2 = arr[0 .. $];   // Entire array
    auto slice3 = arr[5 .. $];   // [5, 6, 7, 8, 9]
    auto slice4 = arr[$ - 3 .. $]; // Last 3: [7, 8, 9]

    // Slices share memory!
    slice1[0] = 100;
    writeln(arr[2]);  // 100 (modified!)

    // Make independent copy
    auto copy = arr[2 .. 5].dup;

    // String slicing (strings are char arrays)
    string str = "Hello, World!";
    writeln(str[0 .. 5]);   // "Hello"
    writeln(str[7 .. $]);   // "World!"
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_ranges": {
    title: "Range Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Ranges in D
        </h2>
        <p className="leading-relaxed mb-4">
          Ranges are D's powerful abstraction for iteration and algorithm composition.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.stdio;
import std.range;
import std.algorithm;

void main() {
    // iota generates a range of numbers
    auto nums = iota(1, 10);  // 1, 2, 3, ..., 9

    foreach (n; nums) {
        write(n, " ");
    }
    writeln();

    // Chaining range operations
    auto result = iota(1, 20)
        .filter!(x => x % 2 == 0)  // Even numbers
        .map!(x => x * x)          // Square them
        .take(5);                  // First 5

    writeln(result);  // [4, 16, 36, 64, 100]

    // Arrays are ranges too
    auto arr = [1, 2, 3, 4, 5];
    auto doubled = arr.map!(x => x * 2);
    writeln(doubled.array);  // [2, 4, 6, 8, 10]
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_range_algorithms": {
    title: "Range Algorithms",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Range Algorithms
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.stdio;
import std.algorithm;
import std.range;
import std.array;

void main() {
    auto data = [3, 1, 4, 1, 5, 9, 2, 6];

    // Sorting
    auto sorted = data.dup.sort;

    // Finding
    auto found = data.find(5);  // Range starting at 5

    // Reduce/fold
    auto sum = data.reduce!((a, b) => a + b);

    // All/any
    bool allPositive = data.all!(x => x > 0);
    bool hasEven = data.any!(x => x % 2 == 0);

    // Count
    auto evens = data.count!(x => x % 2 == 0);

    // Min/max
    auto minimum = data.minElement;
    auto maximum = data.maxElement;

    // Group/chunk
    auto pairs = data.chunks(2);

    // Zip
    auto a = [1, 2, 3];
    auto b = ["one", "two", "three"];
    foreach (num, word; zip(a, b)) {
        writeln(num, " = ", word);
    }
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_lazy_eval": {
    title: "Lazy Evaluation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Lazy Evaluation
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.stdio;
import std.range;
import std.algorithm;

void main() {
    // Ranges are lazy - no computation until consumed
    auto infiniteSquares = iota(1, int.max)
        .map!(x => x * x);

    // Only computes first 10
    auto first10 = infiniteSquares.take(10);
    writeln(first10.array);

    // Fibonacci sequence (infinite)
    auto fibs = recurrence!((a, n) => a[n-1] + a[n-2])(1, 1);
    writeln(fibs.take(10).array);  // [1,1,2,3,5,8,13,21,34,55]

    // Generate on demand
    auto random = generate!(() => uniform(0, 100));
    writeln(random.take(5).array);

    // Force evaluation with array
    auto materialized = first10.array;
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_templates": {
    title: "Template Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Templates in D
        </h2>
        <p className="leading-relaxed mb-4">
          D templates are powerful compile-time constructs for generic programming.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Simple function template
T max(T)(T a, T b) {
    return a > b ? a : b;
}

// Usage
auto m1 = max(3, 5);        // int
auto m2 = max(3.14, 2.71);  // double
auto m3 = max!int(3, 5);    // Explicit type

// Multiple type parameters
auto pair(T, U)(T first, U second) {
    struct Pair { T a; U b; }
    return Pair(first, second);
}

auto p = pair(1, "hello");

// Value parameters
int[N] makeArray(int N)() {
    int[N] result;
    return result;
}

auto arr = makeArray!5();  // int[5]`}
          </pre>
        </div>
      </>
    ),
  },

  "d_func_templates": {
    title: "Function Templates",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Function Templates
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.stdio;

// Generic swap
void swap(T)(ref T a, ref T b) {
    T temp = a;
    a = b;
    b = temp;
}

// Generic array operations
T[] filter(T)(T[] arr, bool delegate(T) pred) {
    T[] result;
    foreach (item; arr) {
        if (pred(item)) {
            result ~= item;
        }
    }
    return result;
}

// Variadic templates
void printAll(Args...)(Args args) {
    foreach (arg; args) {
        writeln(arg);
    }
}

void main() {
    int a = 1, b = 2;
    swap(a, b);

    auto nums = [1, 2, 3, 4, 5];
    auto evens = filter(nums, x => x % 2 == 0);

    printAll(1, "hello", 3.14);
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_struct_templates": {
    title: "Struct Templates",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Struct Templates
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Generic container
struct Stack(T) {
    private T[] data;

    void push(T item) {
        data ~= item;
    }

    T pop() {
        auto item = data[$ - 1];
        data.length--;
        return item;
    }

    bool empty() const {
        return data.length == 0;
    }
}

// With multiple parameters
struct Pair(T, U) {
    T first;
    U second;

    auto swap() {
        return Pair!(U, T)(second, first);
    }
}

void main() {
    auto intStack = Stack!int();
    intStack.push(1);
    intStack.push(2);

    auto strStack = Stack!string();
    strStack.push("hello");

    auto p = Pair!(int, string)(42, "answer");
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_constraints": {
    title: "Template Constraints",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Template Constraints
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.traits;
import std.range;

// Only works with numeric types
T square(T)(T x) if (isNumeric!T) {
    return x * x;
}

// Only for input ranges
auto sum(R)(R range) if (isInputRange!R) {
    typeof(range.front) total = 0;
    foreach (item; range) {
        total += item;
    }
    return total;
}

// Multiple constraints
void process(T)(T value)
    if (is(T == struct) && __traits(hasMember, T, "data"))
{
    writeln(value.data);
}

// Static if for compile-time branching
T convert(T, U)(U value) {
    static if (is(T == string)) {
        return value.to!string;
    } else static if (isNumeric!T) {
        return cast(T) value;
    } else {
        static assert(false, "Unsupported type");
    }
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_mixins": {
    title: "Mixin Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Mixins in D
        </h2>
        <p className="leading-relaxed mb-4">
          Mixins allow code generation at compile time, enabling powerful metaprogramming.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.stdio;

void main() {
    // String mixin - compiles string as D code
    mixin("int x = 5;");
    writeln(x);  // 5

    // Expression mixin
    int a = 3, b = 4;
    auto result = mixin("a + b");  // 7

    // From template
    mixin(generateCode());
}

// Generate code at compile time
string generateCode() {
    return "writeln(\"Generated!\");";
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_string_mixins": {
    title: "String Mixins",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          String Mixins
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.stdio;
import std.format;

// Generate getter/setter
string generateProperty(string name, string type) {
    return format(q{
        private %s _%s;

        %s %s() const { return _%s; }
        void %s(%s value) { _%s = value; }
    }, type, name, type, name, name, name, type, name);
}

struct Person {
    mixin(generateProperty("name", "string"));
    mixin(generateProperty("age", "int"));
}

void main() {
    Person p;
    p.name = "Alice";
    p.age = 30;
    writeln(p.name, " is ", p.age);
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_template_mixins": {
    title: "Template Mixins",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Template Mixins
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Define a mixin template
mixin template Logging() {
    void log(string msg) {
        import std.stdio;
        writeln("[LOG] ", msg);
    }
}

mixin template Comparable() {
    bool opEquals(typeof(this) other) const {
        return this.value == other.value;
    }

    int opCmp(typeof(this) other) const {
        return this.value - other.value;
    }
}

struct Point {
    int value;
    mixin Logging;
    mixin Comparable;
}

void main() {
    Point p1 = Point(5);
    Point p2 = Point(10);

    p1.log("Created point");

    if (p1 < p2) {
        writeln("p1 is less than p2");
    }
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_memory": {
    title: "Memory Management",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Memory Management Overview
        </h2>
        <p className="leading-relaxed mb-4">
          D offers multiple memory management strategies: garbage collection (default), manual allocation, and safe memory with @safe.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import core.memory;
import std.stdio;

void main() {
    // GC allocation (default)
    auto arr = new int[](1000);

    // Manual disable/enable GC
    GC.disable();
    // ... performance critical code ...
    GC.enable();

    // Force garbage collection
    GC.collect();

    // Check GC stats
    auto stats = GC.stats();
    writeln("Used: ", stats.usedSize);
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_gc": {
    title: "Garbage Collection",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Garbage Collection
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import core.memory;

void main() {
    // GC-allocated memory
    auto arr = new int[](100);
    // Automatically freed when no longer referenced

    // Minimize GC overhead
    scope arr2 = new int[](100);  // Stack-allocated if possible

    // Allocate without scanning for pointers
    auto data = cast(ubyte[]) GC.malloc(1000);

    // Add root to prevent collection
    GC.addRoot(&globalData);

    // Profile GC
    GC.profileData();
}

// @nogc functions cannot use GC
@nogc int compute(int x) nothrow {
    // Cannot allocate with new here
    return x * 2;
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_manual_memory": {
    title: "Manual Memory Management",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Manual Memory Management
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import core.stdc.stdlib;
import std.experimental.allocator;
import std.experimental.allocator.mallocator;

void main() {
    // C-style allocation
    auto ptr = cast(int*) malloc(int.sizeof * 100);
    scope(exit) free(ptr);

    // Using allocators
    auto allocator = Mallocator.instance;
    auto arr = allocator.makeArray!int(100);
    scope(exit) allocator.dispose(arr);

    // Region allocator for temporary memory
    import std.experimental.allocator.building_blocks;
    // Use stack allocator for fast temporary allocations
}

// RAII with structs
struct UniquePtr(T) {
    private T* ptr;

    this(T* p) { ptr = p; }
    ~this() { if (ptr) free(ptr); }

    ref T opUnary(string op)() if (op == "*") {
        return *ptr;
    }
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_safe_memory": {
    title: "Safe Memory",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Memory Safety with @safe
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// @safe functions guarantee memory safety
@safe int safeFunc(int[] arr) {
    if (arr.length > 0)
        return arr[0];  // Bounds checked
    return 0;
}

// @trusted bridges safe and unsafe code
@trusted int* getPtr(int[] arr) {
    return arr.ptr;  // Normally unsafe, but trusted
}

// @system is the default (unsafe)
@system void unsafeFunc() {
    int x;
    int* p = &x;
    // Can do pointer arithmetic
}

// nothrow guarantees no exceptions
@safe nothrow int noThrow(int x) {
    return x * 2;
}

// pure guarantees no side effects
@safe pure int pureFunc(int x) {
    return x * x;
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_concurrency": {
    title: "Concurrency Overview",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Concurrency in D
        </h2>
        <p className="leading-relaxed mb-4">
          D provides several concurrency primitives: std.concurrency for message passing, core.thread for low-level threads, and std.parallelism for data parallelism.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.concurrency;
import std.stdio;

void main() {
    // Spawn a worker
    auto worker = spawn(&workerFunc, thisTid);

    // Send message
    worker.send("Hello");

    // Receive response
    receive(
        (string msg) { writeln("Got: ", msg); }
    );
}

void workerFunc(Tid owner) {
    receive(
        (string msg) {
            writeln("Worker received: ", msg);
            owner.send("Response");
        }
    );
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_threads": {
    title: "Threads",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Low-Level Threads
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import core.thread;
import std.stdio;

void main() {
    // Create thread
    auto t = new Thread(() {
        writeln("Hello from thread!");
    });

    t.start();
    t.join();

    // Thread with loop
    auto worker = new Thread({
        foreach (i; 0 .. 5) {
            writeln("Worker: ", i);
            Thread.sleep(100.msecs);
        }
    });

    worker.start();

    // Main thread continues
    foreach (i; 0 .. 5) {
        writeln("Main: ", i);
        Thread.sleep(50.msecs);
    }

    worker.join();
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_message_passing": {
    title: "Message Passing",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Message Passing Concurrency
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.concurrency;
import std.stdio;

void main() {
    // Spawn workers
    auto worker1 = spawn(&calculator, thisTid);
    auto worker2 = spawn(&calculator, thisTid);

    // Send tasks
    worker1.send(10);
    worker2.send(20);

    // Collect results
    int sum = 0;
    foreach (_; 0 .. 2) {
        receive(
            (int result) { sum += result; }
        );
    }
    writeln("Total: ", sum);
}

void calculator(Tid owner) {
    receive(
        (int n) {
            int result = n * n;
            owner.send(result);
        }
    );
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_fibers": {
    title: "Fibers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Fibers (Coroutines)
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import core.thread;
import std.stdio;

void main() {
    auto fiber = new Fiber({
        writeln("Fiber: Step 1");
        Fiber.yield();
        writeln("Fiber: Step 2");
        Fiber.yield();
        writeln("Fiber: Done");
    });

    while (fiber.state != Fiber.State.TERM) {
        writeln("Main: Running fiber");
        fiber.call();
    }
}

// Generator pattern
auto generator(T)(scope T delegate() dg) {
    return new class {
        T front;
        void popFront() { front = dg(); }
    };
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_parallelism": {
    title: "Parallelism Overview",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Parallelism in D
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.parallelism;
import std.stdio;
import std.range;

void main() {
    auto data = iota(1, 1000).array;

    // Parallel map
    auto results = taskPool.amap!(x => x * x)(data);

    // Parallel reduce
    auto sum = taskPool.reduce!"a + b"(0, data);

    // Parallel foreach
    foreach (ref item; parallel(data)) {
        item = item * 2;
    }

    writeln("Sum: ", sum);
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_parallel_foreach": {
    title: "Parallel Foreach",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Parallel Foreach
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.parallelism;
import std.stdio;
import std.range;
import std.array;

void main() {
    auto data = iota(0, 100).array;

    // Simple parallel iteration
    foreach (item; parallel(data)) {
        // Process in parallel
        process(item);
    }

    // With index
    foreach (i, ref item; parallel(data)) {
        item = compute(i);
    }

    // Control work unit size
    foreach (item; parallel(data, 10)) {
        // Process in chunks of 10
    }
}

void process(int x) { /* ... */ }
int compute(size_t i) { return cast(int)(i * 2); }`}
          </pre>
        </div>
      </>
    ),
  },

  "d_task_pools": {
    title: "Task Pools",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Task Pools
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`import std.parallelism;
import std.stdio;

void main() {
    // Create task
    auto task1 = task!compute(10);
    auto task2 = task!compute(20);

    // Execute tasks
    taskPool.put(task1);
    taskPool.put(task2);

    // Get results
    auto result1 = task1.yieldForce();
    auto result2 = task2.yieldForce();

    writeln("Results: ", result1, ", ", result2);

    // Custom task pool
    auto pool = new TaskPool(4);  // 4 threads
    scope(exit) pool.finish();

    auto customTask = pool.task!compute(30);
    pool.put(customTask);
}

int compute(int x) {
    return x * x;
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_c_interface": {
    title: "C/C++ Interface Overview",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Interfacing with C and C++
        </h2>
        <p className="leading-relaxed mb-4">
          D can directly call C functions and link with C libraries. C++ interop is also supported with some limitations.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// D can:
// - Call C functions directly
// - Use C headers via ImportC
// - Link with C/C++ libraries
// - Export functions for C/C++ to call

// Memory layout compatibility
struct CStruct {
    int x;
    float y;
}
// Same layout as C struct`}
          </pre>
        </div>
      </>
    ),
  },

  "d_calling_c": {
    title: "Calling C",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Calling C Functions
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Declare C function
extern(C) int printf(const char* fmt, ...);

// C standard library
import core.stdc.stdio;
import core.stdc.stdlib;
import core.stdc.string;

void main() {
    // Use C printf
    printf("Hello from C: %d\n", 42);

    // C memory allocation
    auto ptr = malloc(100);
    free(ptr);

    // C string functions
    auto s1 = "hello".ptr;
    auto len = strlen(s1);
}

// Link with C library
pragma(lib, "mylib");
extern(C) {
    int mylib_init();
    void mylib_process(int* data, size_t len);
}`}
          </pre>
        </div>
      </>
    ),
  },

  "d_calling_cpp": {
    title: "Calling C++",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Calling C++ Functions
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// C++ function declarations
extern(C++) {
    // Namespaced function
    int cpp_namespace_func();

    // C++ class
    class CppClass {
        void method();
        static CppClass create();
    }
}

// With mangling
extern(C++, "mylib") {
    void process();
}

void main() {
    auto obj = CppClass.create();
    obj.method();
}

// Note: Full C++ interop has limitations:
// - No C++ templates
// - Limited exception handling
// - STL not directly usable`}
          </pre>
        </div>
      </>
    ),
  },

  "d_extern": {
    title: "Extern Declarations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Extern Declarations
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// C linkage
extern(C) int c_function();

// C++ linkage
extern(C++) void cpp_function();

// Windows calling conventions
extern(Windows) int WinAPI_Function();

// System default
extern(System) void system_call();

// Export D function for C
extern(C) export int d_function(int x) {
    return x * 2;
}

// Struct with C layout
extern(C) struct CCompatible {
    int x;
    double y;
    char[16] name;
}

// Disable name mangling
pragma(mangle, "custom_name")
extern(C) void myFunc();`}
          </pre>
        </div>
      </>
    ),
  },
};
