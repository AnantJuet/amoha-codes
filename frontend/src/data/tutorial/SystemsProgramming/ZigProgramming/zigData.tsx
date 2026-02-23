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
  { label: "Zig HOME", href: "zig_home" },
  { label: "Zig Intro", href: "zig_intro" },
  { label: "Zig Installation", href: "zig_installation" },
  {
    label: "Variables & Types",
    href: "zig_variables",
    isHeader: true,
    children: [
      { label: "Variables", href: "zig_variables" },
      { label: "Primitive Types", href: "zig_primitive_types" },
      { label: "Arrays", href: "zig_arrays" },
      { label: "Slices", href: "zig_slices" },
      { label: "Strings", href: "zig_strings" },
    ]
  },
  {
    label: "Functions",
    href: "zig_functions",
    isHeader: true,
    children: [
      { label: "Function Basics", href: "zig_functions" },
      { label: "Parameters", href: "zig_parameters" },
      { label: "Return Values", href: "zig_return_values" },
    ]
  },
  {
    label: "Control Flow",
    href: "zig_control_flow",
    isHeader: true,
    children: [
      { label: "If Expressions", href: "zig_control_flow" },
      { label: "Switch", href: "zig_switch" },
      { label: "Loops", href: "zig_loops" },
    ]
  },
  {
    label: "Error Handling",
    href: "zig_error_handling",
    isHeader: true,
    children: [
      { label: "Error Basics", href: "zig_error_handling" },
      { label: "Try and Catch", href: "zig_try_catch" },
      { label: "Error Union", href: "zig_error_union" },
    ]
  },
  {
    label: "Pointers",
    href: "zig_pointers",
    isHeader: true,
    children: [
      { label: "Pointer Basics", href: "zig_pointers" },
      { label: "Optional Pointers", href: "zig_optional_pointers" },
      { label: "Pointer Arithmetic", href: "zig_pointer_arithmetic" },
    ]
  },
  {
    label: "Comptime",
    href: "zig_comptime",
    isHeader: true,
    children: [
      { label: "Comptime Basics", href: "zig_comptime" },
      { label: "Comptime Functions", href: "zig_comptime_functions" },
      { label: "Generics", href: "zig_generics" },
    ]
  },
  {
    label: "Memory",
    href: "zig_memory",
    isHeader: true,
    children: [
      { label: "Allocators", href: "zig_memory" },
      { label: "Arena Allocator", href: "zig_arena" },
      { label: "Memory Safety", href: "zig_memory_safety" },
    ]
  },
  {
    label: "Build System",
    href: "zig_build_system",
    isHeader: true,
    children: [
      { label: "Build.zig", href: "zig_build_system" },
      { label: "Dependencies", href: "zig_dependencies" },
    ]
  },
  { label: "Testing", href: "zig_testing" },
  { label: "C Interop", href: "zig_c_interop" },
];

export const tutorialContent: Record<string, TopicContent> = {
  "zig_home": {
    title: "Zig Programming Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Zig Programming Tutorial
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>Zig</strong> is a general-purpose, low-level programming language designed for developing robust and optimal software. It features manual memory management without garbage collection, making it suitable for systems programming.
        </p>
        <p className="leading-relaxed mb-4">
          Zig aims to be a modern alternative to C, offering better safety guarantees while maintaining the same level of control over hardware and memory.
        </p>

        <h3 className="text-xl font-medium mb-3">Example: Hello World</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const std = @import("std");

pub fn main() void {
    std.debug.print("Hello, World!\\n", .{});
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Why Learn Zig?</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>No hidden control flow or memory allocations</li>
          <li>Compile-time code execution (comptime)</li>
          <li>Seamless C interoperability</li>
          <li>Built-in testing framework</li>
          <li>Cross-compilation out of the box</li>
          <li>Modern tooling and error messages</li>
        </ul>
      </>
    ),
  },

  "zig_intro": {
    title: "Introduction to Zig",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is Zig?
        </h2>
        <p className="leading-relaxed mb-4">
          Zig is a systems programming language that prioritizes correctness, performance, and ease of maintenance. It was created by Andrew Kelley and first released in 2016.
        </p>

        <h3 className="text-xl font-medium mb-3">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>No Hidden Control Flow:</strong> No operator overloading, no exceptions</li>
          <li><strong>Comptime:</strong> Compile-time execution eliminates runtime overhead</li>
          <li><strong>Optional Types:</strong> Built-in null safety</li>
          <li><strong>C ABI Compatibility:</strong> Direct interop with C libraries</li>
          <li><strong>Manual Memory Management:</strong> Full control with allocator interface</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">Zig vs Other Languages</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Zig Philosophy:
// - Prefer compile errors over runtime errors
// - No undefined behavior (unlike C)
// - Explicit over implicit
// - No garbage collector
// - Readable code is maintainable code

// Simple example showing explicit error handling
fn divide(a: i32, b: i32) !i32 {
    if (b == 0) return error.DivisionByZero;
    return @divTrunc(a, b);
}`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_installation": {
    title: "Zig Installation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Installing Zig
        </h2>
        <p className="leading-relaxed mb-4">
          Zig can be installed on Windows, macOS, and Linux. The recommended approach is downloading the official binary release.
        </p>

        <h3 className="text-xl font-medium mb-3">Windows Installation</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Using winget
winget install zig.zig

# Or download from ziglang.org and add to PATH
# Extract to C:\\zig and add C:\\zig to system PATH`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">macOS Installation</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Using Homebrew
brew install zig

# Verify installation
zig version`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Linux Installation</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Download and extract
wget https://ziglang.org/download/0.11.0/zig-linux-x86_64-0.11.0.tar.xz
tar -xf zig-linux-x86_64-0.11.0.tar.xz
sudo mv zig-linux-x86_64-0.11.0 /opt/zig

# Add to PATH in ~/.bashrc
export PATH=$PATH:/opt/zig`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">First Program</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// hello.zig
const std = @import("std");

pub fn main() void {
    std.debug.print("Hello, Zig!\\n", .{});
}

// Compile and run:
// zig run hello.zig

// Or build executable:
// zig build-exe hello.zig
// ./hello`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_variables": {
    title: "Variables in Zig",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Variables and Constants
        </h2>
        <p className="leading-relaxed mb-4">
          Zig distinguishes between mutable variables (var) and immutable constants (const). Constants are preferred when the value does not need to change.
        </p>

        <h3 className="text-xl font-medium mb-3">Variable Declaration</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Constants - immutable, preferred
const x: i32 = 42;
const name = "Zig";  // Type inferred as *const [3:0]u8

// Variables - mutable
var counter: u32 = 0;
counter += 1;

// Undefined initialization (dangerous, use sparingly)
var buffer: [100]u8 = undefined;

// Explicit type vs inferred type
const explicit: u64 = 100;
const inferred = @as(u64, 100);`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Shadowing</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Zig does NOT allow shadowing
const x = 10;
// const x = 20;  // Error: redefinition

// Use different names or blocks
{
    const y = 20;
    _ = y;
}`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_primitive_types": {
    title: "Primitive Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Primitive Types in Zig
        </h2>
        <p className="leading-relaxed mb-4">
          Zig provides a rich set of primitive types with explicit bit widths, giving precise control over memory layout.
        </p>

        <h3 className="text-xl font-medium mb-3">Integer Types</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Signed integers
const a: i8 = -128;    // -128 to 127
const b: i16 = -32768;
const c: i32 = -2147483648;
const d: i64 = 0;
const e: i128 = 0;

// Unsigned integers
const f: u8 = 255;     // 0 to 255
const g: u16 = 65535;
const h: u32 = 0;
const i: u64 = 0;

// Architecture-dependent
const ptr_size: usize = @sizeOf(*u8);
const signed_ptr: isize = -1;

// Arbitrary bit-width integers
const j: u7 = 100;     // 7-bit unsigned
const k: i3 = -4;      // 3-bit signed (-4 to 3)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Float and Boolean Types</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Floating point
const pi: f32 = 3.14159;
const precise: f64 = 3.141592653589793;
const huge: f128 = 0.0;

// Boolean
const flag: bool = true;
const done: bool = false;

// Type coercion
const int_val: i32 = 42;
const float_val: f64 = @floatFromInt(int_val);`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_arrays": {
    title: "Arrays in Zig",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Arrays
        </h2>
        <p className="leading-relaxed mb-4">
          Arrays in Zig are fixed-size, contiguous memory blocks. The size is part of the type.
        </p>

        <h3 className="text-xl font-medium mb-3">Array Declaration and Access</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Array declaration
const numbers: [5]i32 = .{ 1, 2, 3, 4, 5 };
const zeros = [_]u8{ 0, 0, 0, 0 };  // Type inferred

// Access elements
const first = numbers[0];  // 1
const last = numbers[4];   // 5

// Array length
const len = numbers.len;   // 5

// Mutable array
var buffer: [10]u8 = undefined;
buffer[0] = 'H';
buffer[1] = 'i';

// Initialize with same value
const all_ones = [_]u8{1} ** 10;  // [1,1,1,1,1,1,1,1,1,1]`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Array Operations</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Concatenation (comptime only)
const a = [_]u8{ 1, 2 };
const b = [_]u8{ 3, 4 };
const c = a ++ b;  // [1, 2, 3, 4]

// Repetition (comptime only)
const repeated = [_]u8{0} ** 3;  // [0, 0, 0]

// Iteration
const items = [_]i32{ 10, 20, 30 };
for (items) |item| {
    std.debug.print("{} ", .{item});
}

// With index
for (items, 0..) |item, index| {
    std.debug.print("[{}]={} ", .{ index, item });
}`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_slices": {
    title: "Slices in Zig",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Slices
        </h2>
        <p className="leading-relaxed mb-4">
          Slices are pointers to a contiguous sequence of elements. Unlike arrays, their length is not part of the type, making them more flexible for function parameters.
        </p>

        <h3 className="text-xl font-medium mb-3">Creating Slices</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const array = [_]i32{ 1, 2, 3, 4, 5 };

// Create slice from array
const slice: []const i32 = &array;
const partial = array[1..4];  // [2, 3, 4]

// Slice properties
const length = slice.len;  // 5
const ptr = slice.ptr;     // Pointer to first element

// Mutable slice
var mutable_array = [_]i32{ 1, 2, 3 };
var mutable_slice: []i32 = &mutable_array;
mutable_slice[0] = 10;`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Slice Syntax</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const data = [_]u8{ 'H', 'e', 'l', 'l', 'o' };

// Various slice syntaxes
const all = data[0..];      // Full slice
const from_2 = data[2..];   // From index 2 to end
const to_3 = data[0..3];    // From start to index 3
const mid = data[1..4];     // Indices 1, 2, 3

// Sentinel-terminated slice
const str: [:0]const u8 = "Hello";  // Null-terminated`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_strings": {
    title: "Strings in Zig",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Strings
        </h2>
        <p className="leading-relaxed mb-4">
          Zig does not have a dedicated string type. Strings are represented as slices of bytes or null-terminated pointers for C compatibility.
        </p>

        <h3 className="text-xl font-medium mb-3">String Types</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// String literal (null-terminated)
const greeting: *const [5:0]u8 = "Hello";

// Slice (preferred for Zig code)
const message: []const u8 = "Hello, World!";

// C-style string for interop
const c_string: [*:0]const u8 = "Hello";

// Multi-line string
const multiline =
    \\\\This is a
    \\\\multi-line string
;`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">String Operations</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const std = @import("std");

const str = "Hello, World!";

// Length
const len = str.len;  // 13

// Comparison
const equal = std.mem.eql(u8, "abc", "abc");  // true

// Find substring
if (std.mem.indexOf(u8, str, "World")) |index| {
    std.debug.print("Found at: {}\\n", .{index});
}

// Split
var iter = std.mem.splitSequence(u8, "a,b,c", ",");
while (iter.next()) |part| {
    std.debug.print("{s}\\n", .{part});
}`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_functions": {
    title: "Functions in Zig",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Function Basics
        </h2>
        <p className="leading-relaxed mb-4">
          Functions in Zig are first-class values. They can be passed as arguments, returned from other functions, and stored in variables.
        </p>

        <h3 className="text-xl font-medium mb-3">Function Declaration</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Basic function
fn add(a: i32, b: i32) i32 {
    return a + b;
}

// Public function (exported)
pub fn multiply(a: i32, b: i32) i32 {
    return a * b;
}

// Function with no return value
fn greet() void {
    std.debug.print("Hello!\\n", .{});
}

// Calling functions
const result = add(5, 3);  // 8
greet();`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Function Pointers</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`fn square(x: i32) i32 {
    return x * x;
}

fn double(x: i32) i32 {
    return x * 2;
}

// Function pointer type
const Op = *const fn (i32) i32;

fn apply(op: Op, value: i32) i32 {
    return op(value);
}

// Usage
const result1 = apply(square, 5);  // 25
const result2 = apply(double, 5);  // 10`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_parameters": {
    title: "Function Parameters",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Function Parameters
        </h2>
        <p className="leading-relaxed mb-4">
          Zig supports various parameter passing mechanisms including by-value, by-pointer, and comptime parameters.
        </p>

        <h3 className="text-xl font-medium mb-3">Parameter Types</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Pass by value (copied)
fn increment(x: i32) i32 {
    return x + 1;
}

// Pass by pointer (mutable)
fn incrementPtr(x: *i32) void {
    x.* += 1;
}

// Pass slice
fn sum(numbers: []const i32) i32 {
    var total: i32 = 0;
    for (numbers) |n| {
        total += n;
    }
    return total;
}

// Usage
var value: i32 = 5;
incrementPtr(&value);  // value is now 6

const nums = [_]i32{ 1, 2, 3 };
const total = sum(&nums);  // 6`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Comptime Parameters</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Comptime parameter for generic-like behavior
fn repeat(comptime n: usize, value: u8) [n]u8 {
    return [_]u8{value} ** n;
}

const five_zeros = repeat(5, 0);  // [0, 0, 0, 0, 0]`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_return_values": {
    title: "Return Values",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Return Values
        </h2>
        <p className="leading-relaxed mb-4">
          Zig functions can return single values, error unions, or optionals. Multiple values are returned using structs or tuples.
        </p>

        <h3 className="text-xl font-medium mb-3">Return Types</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Simple return
fn add(a: i32, b: i32) i32 {
    return a + b;
}

// Optional return
fn findFirst(haystack: []const u8, needle: u8) ?usize {
    for (haystack, 0..) |c, i| {
        if (c == needle) return i;
    }
    return null;
}

// Error union return
fn divide(a: i32, b: i32) !i32 {
    if (b == 0) return error.DivisionByZero;
    return @divTrunc(a, b);
}

// Multiple values via struct
const Point = struct { x: i32, y: i32 };

fn getOrigin() Point {
    return .{ .x = 0, .y = 0 };
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Noreturn</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Function that never returns
fn fatal(msg: []const u8) noreturn {
    std.debug.print("Fatal: {s}\\n", .{msg});
    std.process.exit(1);
}`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_control_flow": {
    title: "Control Flow - If Expressions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          If Expressions
        </h2>
        <p className="leading-relaxed mb-4">
          In Zig, if is an expression that can return a value. This enables more concise and functional-style code.
        </p>

        <h3 className="text-xl font-medium mb-3">Basic If</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const x: i32 = 10;

// Statement form
if (x > 5) {
    std.debug.print("Greater\\n", .{});
} else {
    std.debug.print("Smaller or equal\\n", .{});
}

// Expression form (ternary-like)
const max = if (x > 5) x else 5;

// Chained conditions
const category = if (x < 0)
    "negative"
else if (x == 0)
    "zero"
else
    "positive";`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Optional Unwrapping with If</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const maybe_value: ?i32 = 42;

// Unwrap optional with if
if (maybe_value) |value| {
    std.debug.print("Value: {}\\n", .{value});
} else {
    std.debug.print("No value\\n", .{});
}

// With pointer capture
var opt: ?i32 = 10;
if (opt) |*ptr| {
    ptr.* += 1;  // Modify the value
}`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_switch": {
    title: "Switch Expressions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Switch Expressions
        </h2>
        <p className="leading-relaxed mb-4">
          Switch in Zig is an expression that must handle all cases. It supports ranges, multiple values per case, and captures.
        </p>

        <h3 className="text-xl font-medium mb-3">Basic Switch</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const value: u8 = 5;

const result = switch (value) {
    0 => "zero",
    1, 2, 3 => "small",
    4...10 => "medium",
    else => "large",
};

// Switch on enum
const Color = enum { red, green, blue };
const c = Color.red;

const hex = switch (c) {
    .red => 0xFF0000,
    .green => 0x00FF00,
    .blue => 0x0000FF,
};`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Switch with Capture</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const Tagged = union(enum) {
    int: i32,
    float: f64,
    none,
};

fn process(t: Tagged) void {
    switch (t) {
        .int => |i| std.debug.print("Int: {}\\n", .{i}),
        .float => |f| std.debug.print("Float: {}\\n", .{f}),
        .none => std.debug.print("None\\n", .{}),
    }
}`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_loops": {
    title: "Loops",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Loops in Zig
        </h2>
        <p className="leading-relaxed mb-4">
          Zig provides for loops and while loops. For loops are specifically designed for iteration, while while loops handle general conditions.
        </p>

        <h3 className="text-xl font-medium mb-3">For Loops</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const items = [_]i32{ 1, 2, 3, 4, 5 };

// Basic iteration
for (items) |item| {
    std.debug.print("{} ", .{item});
}

// With index
for (items, 0..) |item, index| {
    std.debug.print("[{}]={} ", .{ index, item });
}

// Multiple sequences
const a = [_]i32{ 1, 2, 3 };
const b = [_]i32{ 4, 5, 6 };
for (a, b) |x, y| {
    std.debug.print("{} + {} = {} ", .{ x, y, x + y });
}

// Range (0 to 4)
for (0..5) |i| {
    std.debug.print("{} ", .{i});
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">While Loops</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Basic while
var i: u32 = 0;
while (i < 5) {
    std.debug.print("{} ", .{i});
    i += 1;
}

// While with continue expression
var j: u32 = 0;
while (j < 10) : (j += 1) {
    if (j % 2 == 0) continue;
    std.debug.print("{} ", .{j});
}

// While with optional
var iter: ?u32 = 10;
while (iter) |val| : (iter = if (val > 0) val - 1 else null) {
    std.debug.print("{} ", .{val});
}`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_error_handling": {
    title: "Error Handling Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Error Handling in Zig
        </h2>
        <p className="leading-relaxed mb-4">
          Zig uses error unions for explicit error handling. Errors are values that can be returned, caught, and propagated.
        </p>

        <h3 className="text-xl font-medium mb-3">Error Sets</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Define an error set
const FileError = error{
    NotFound,
    PermissionDenied,
    InvalidPath,
};

// Function returning error union
fn openFile(path: []const u8) FileError!void {
    if (path.len == 0) {
        return error.InvalidPath;
    }
    // ... open file logic
}

// Inferred error set
fn divide(a: i32, b: i32) !i32 {
    if (b == 0) return error.DivisionByZero;
    return @divTrunc(a, b);
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Handling Errors</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Using catch with default value
const result = divide(10, 0) catch 0;

// Using catch with block
const value = divide(10, 0) catch |err| {
    std.debug.print("Error: {}\\n", .{err});
    return;
};

// Using if with error union
if (divide(10, 2)) |val| {
    std.debug.print("Result: {}\\n", .{val});
} else |err| {
    std.debug.print("Error: {}\\n", .{err});
}`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_try_catch": {
    title: "Try and Catch",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Try and Catch
        </h2>
        <p className="leading-relaxed mb-4">
          The try keyword provides a shorthand for error propagation, while catch handles errors locally.
        </p>

        <h3 className="text-xl font-medium mb-3">Using Try</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`fn readNumber() !i32 {
    // ... might fail
    return 42;
}

fn processNumber() !void {
    // try unwraps or propagates error
    const num = try readNumber();
    std.debug.print("Got: {}\\n", .{num});
}

// try is equivalent to:
// const num = readNumber() catch |err| return err;`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Using Catch</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`fn mightFail() !i32 {
    return error.SomeError;
}

// Catch with default value
const a = mightFail() catch 0;

// Catch with error handling
const b = mightFail() catch |err| blk: {
    std.log.err("Failed: {}", .{err});
    break :blk -1;
};

// Catch unreachable (assert no error)
const c = mightFail() catch unreachable;`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_error_union": {
    title: "Error Unions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Error Unions
        </h2>
        <p className="leading-relaxed mb-4">
          Error unions combine an error set with a payload type. The syntax E!T represents a value that is either an error from E or a value of type T.
        </p>

        <h3 className="text-xl font-medium mb-3">Error Union Types</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const ParseError = error{
    InvalidCharacter,
    Overflow,
};

// Explicit error union
fn parseNumber(s: []const u8) ParseError!i32 {
    // ... parsing logic
    return 42;
}

// Inferred error set (anyerror)
fn process() !void {
    const num = try parseNumber("123");
    _ = num;
}

// Merging error sets
const IoError = error{ ReadFailed, WriteFailed };
const AllErrors = ParseError || IoError;`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Error Payload</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`fn mayFail(succeed: bool) !u32 {
    if (!succeed) return error.Failed;
    return 42;
}

pub fn main() void {
    // Check if error
    const result = mayFail(false);
    if (result) |value| {
        std.debug.print("Success: {}\\n", .{value});
    } else |err| {
        std.debug.print("Error: {}\\n", .{err});
    }
}`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_pointers": {
    title: "Pointers in Zig",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Pointer Basics
        </h2>
        <p className="leading-relaxed mb-4">
          Zig has several pointer types for different use cases. Unlike C, Zig pointers cannot be null by default.
        </p>

        <h3 className="text-xl font-medium mb-3">Pointer Types</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Single-item pointer
var value: i32 = 42;
const ptr: *i32 = &value;
ptr.* = 100;  // Dereference and assign

// Const pointer
const const_ptr: *const i32 = &value;
// const_ptr.* = 50;  // Error: cannot modify

// Many-item pointer
const array = [_]i32{ 1, 2, 3, 4, 5 };
const many_ptr: [*]const i32 = &array;
const third = many_ptr[2];  // 3`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Pointer Operations</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`fn double(x: *i32) void {
    x.* *= 2;
}

var num: i32 = 5;
double(&num);
// num is now 10

// Pointer to pointer
var ptr: *i32 = &num;
const ptr_ptr: **i32 = &ptr;
ptr_ptr.*.* = 20;  // num is now 20`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_optional_pointers": {
    title: "Optional Pointers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Optional Pointers
        </h2>
        <p className="leading-relaxed mb-4">
          Optional pointers can be null, providing safe null handling. They are represented as ?*T.
        </p>

        <h3 className="text-xl font-medium mb-3">Optional Pointer Usage</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Optional pointer
var opt_ptr: ?*i32 = null;

var value: i32 = 42;
opt_ptr = &value;

// Check and use
if (opt_ptr) |ptr| {
    std.debug.print("Value: {}\\n", .{ptr.*});
} else {
    std.debug.print("Null pointer\\n", .{});
}

// orelse for default
const ptr = opt_ptr orelse {
    std.debug.print("Using default\\n", .{});
    return;
};
_ = ptr;`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">C Pointer Interop</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// C-style pointer (can be null, allows arithmetic)
const c_ptr: [*c]i32 = @ptrCast(&value);

// Convert to optional
const opt: ?*i32 = @ptrCast(c_ptr);

// Sentinel-terminated pointer
const str: [*:0]const u8 = "Hello";`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_pointer_arithmetic": {
    title: "Pointer Arithmetic",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Pointer Arithmetic
        </h2>
        <p className="leading-relaxed mb-4">
          Zig restricts pointer arithmetic to many-item pointers and slices for safety. Single-item pointers do not support arithmetic.
        </p>

        <h3 className="text-xl font-medium mb-3">Many-Item Pointer Arithmetic</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const array = [_]i32{ 10, 20, 30, 40, 50 };
var ptr: [*]const i32 = &array;

// Index access
const first = ptr[0];   // 10
const third = ptr[2];   // 30

// Pointer addition
ptr = ptr + 2;          // Now points to 30
const current = ptr[0]; // 30

// Subtraction
ptr = ptr - 1;          // Now points to 20`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Slice from Pointer</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const array = [_]u8{ 1, 2, 3, 4, 5 };
const ptr: [*]const u8 = &array;

// Create slice from pointer with known length
const slice = ptr[0..5];

// This is safer than raw pointer arithmetic
for (slice) |byte| {
    std.debug.print("{} ", .{byte});
}`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_comptime": {
    title: "Comptime Basics",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Compile-Time Execution
        </h2>
        <p className="leading-relaxed mb-4">
          Comptime is one of Zig's most powerful features. It allows code execution at compile time, enabling zero-cost abstractions and eliminating runtime overhead.
        </p>

        <h3 className="text-xl font-medium mb-3">Comptime Variables</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Comptime constant
const size = blk: {
    comptime var result: usize = 1;
    inline for (0..10) |_| {
        result *= 2;
    }
    break :blk result;
};
// size is computed at compile time: 1024

// Array size from comptime
const buffer: [size]u8 = undefined;

// Comptime string manipulation
const greeting = "Hello, " ++ "World!";`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Comptime Blocks</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`fn factorial(n: u64) u64 {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}

// Computed at compile time
const fact_10 = comptime factorial(10);  // 3628800

// Use in array size
const lookup: [comptime factorial(5)]u8 = undefined;
// Creates array of size 120`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_comptime_functions": {
    title: "Comptime Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Comptime Functions
        </h2>
        <p className="leading-relaxed mb-4">
          Functions can accept comptime parameters and return comptime values, enabling powerful metaprogramming.
        </p>

        <h3 className="text-xl font-medium mb-3">Comptime Parameters</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`fn makeArray(comptime T: type, comptime size: usize) [size]T {
    return [_]T{0} ** size;
}

const int_array = makeArray(i32, 5);   // [5]i32
const float_array = makeArray(f64, 3); // [3]f64

// Type as return value
fn BiggerInt(comptime T: type) type {
    return switch (T) {
        i8 => i16,
        i16 => i32,
        i32 => i64,
        else => @compileError("Unsupported type"),
    };
}

const bigger: BiggerInt(i16) = 1000;  // i32`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Inline Loops</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`fn unrolledSum(comptime n: usize, values: [n]i32) i32 {
    comptime var sum: i32 = 0;
    inline for (values) |v| {
        sum += v;  // Unrolled at compile time
    }
    return sum;
}`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_generics": {
    title: "Generics in Zig",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Generics via Comptime
        </h2>
        <p className="leading-relaxed mb-4">
          Zig implements generics through comptime type parameters rather than a separate generics system.
        </p>

        <h3 className="text-xl font-medium mb-3">Generic Functions</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`fn max(comptime T: type, a: T, b: T) T {
    return if (a > b) a else b;
}

const int_max = max(i32, 10, 20);      // 20
const float_max = max(f64, 3.14, 2.71); // 3.14

fn swap(comptime T: type, a: *T, b: *T) void {
    const temp = a.*;
    a.* = b.*;
    b.* = temp;
}

var x: i32 = 1;
var y: i32 = 2;
swap(i32, &x, &y);  // x=2, y=1`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Generic Structs</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`fn Stack(comptime T: type) type {
    return struct {
        items: [100]T = undefined,
        count: usize = 0,

        const Self = @This();

        pub fn push(self: *Self, item: T) void {
            self.items[self.count] = item;
            self.count += 1;
        }

        pub fn pop(self: *Self) ?T {
            if (self.count == 0) return null;
            self.count -= 1;
            return self.items[self.count];
        }
    };
}

var int_stack = Stack(i32){};
int_stack.push(42);
const value = int_stack.pop();  // 42`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_memory": {
    title: "Memory Allocators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Memory Management in Zig
        </h2>
        <p className="leading-relaxed mb-4">
          Zig uses an allocator interface for all dynamic memory allocation. This design allows easy testing, debugging, and customization of memory strategies.
        </p>

        <h3 className="text-xl font-medium mb-3">Standard Allocators</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const std = @import("std");

pub fn main() !void {
    // General purpose allocator
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();
    const allocator = gpa.allocator();

    // Allocate memory
    const ptr = try allocator.create(i32);
    defer allocator.destroy(ptr);
    ptr.* = 42;

    // Allocate array
    const arr = try allocator.alloc(u8, 100);
    defer allocator.free(arr);
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Page Allocator</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Direct OS page allocation
const page_allocator = std.heap.page_allocator;

const large_buffer = try page_allocator.alloc(u8, 4096);
defer page_allocator.free(large_buffer);`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_arena": {
    title: "Arena Allocator",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Arena Allocator
        </h2>
        <p className="leading-relaxed mb-4">
          Arena allocators are useful when you need to allocate many objects and free them all at once. They are fast and avoid fragmentation.
        </p>

        <h3 className="text-xl font-medium mb-3">Using Arena Allocator</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const std = @import("std");

pub fn main() !void {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();

    // Create arena backed by GPA
    var arena = std.heap.ArenaAllocator.init(gpa.allocator());
    defer arena.deinit();  // Frees ALL arena allocations

    const allocator = arena.allocator();

    // Allocate without individual free
    const a = try allocator.alloc(u8, 100);
    const b = try allocator.alloc(u8, 200);
    const c = try allocator.create(i32);

    // Use a, b, c...
    _ = a;
    _ = b;
    c.* = 42;

    // All freed at once when arena.deinit() is called
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Arena Reset</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Reset arena without deallocation (reuse memory)
_ = arena.reset(.retain_capacity);

// Or free underlying memory
_ = arena.reset(.free_all);`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_memory_safety": {
    title: "Memory Safety",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Memory Safety Features
        </h2>
        <p className="leading-relaxed mb-4">
          Zig provides several compile-time and runtime checks to prevent common memory errors.
        </p>

        <h3 className="text-xl font-medium mb-3">Safety Checks</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Bounds checking (runtime in debug builds)
const arr = [_]i32{ 1, 2, 3 };
// const x = arr[5];  // Runtime error in debug

// Null safety via optional types
var ptr: ?*i32 = null;
// ptr.* = 42;  // Compile error: must unwrap first

if (ptr) |p| {
    p.* = 42;  // Safe
}

// Use-after-free detection (debug builds)
var gpa = std.heap.GeneralPurposeAllocator(.{
    .safety = true,  // Enable safety checks
}){};`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Disabling Safety</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// When you need raw performance (use carefully!)
const arr = [_]i32{ 1, 2, 3 };

// Unchecked access
const ptr: [*]const i32 = &arr;
const unsafe_value = ptr[100];  // No bounds check!
_ = unsafe_value;

// Disable safety for a block
@setRuntimeSafety(false);
// ... unsafe code ...`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_build_system": {
    title: "Zig Build System",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Build.zig
        </h2>
        <p className="leading-relaxed mb-4">
          Zig has a built-in build system that uses Zig code for build configuration. This eliminates the need for external build tools.
        </p>

        <h3 className="text-xl font-medium mb-3">Basic build.zig</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const std = @import("std");

pub fn build(b: *std.Build) void {
    const target = b.standardTargetOptions(.{});
    const optimize = b.standardOptimizeOption(.{});

    const exe = b.addExecutable(.{
        .name = "myapp",
        .root_source_file = .{ .path = "src/main.zig" },
        .target = target,
        .optimize = optimize,
    });

    b.installArtifact(exe);

    // Run step
    const run_cmd = b.addRunArtifact(exe);
    run_cmd.step.dependOn(b.getInstallStep());

    const run_step = b.step("run", "Run the app");
    run_step.dependOn(&run_cmd.step);
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Build Commands</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Initialize new project
zig init-exe

# Build project
zig build

# Build and run
zig build run

# Build with release optimization
zig build -Doptimize=ReleaseFast

# Cross-compile
zig build -Dtarget=x86_64-linux-gnu`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_dependencies": {
    title: "Managing Dependencies",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Dependencies in Zig
        </h2>
        <p className="leading-relaxed mb-4">
          Zig uses a package manager integrated with the build system. Dependencies are declared in build.zig.zon.
        </p>

        <h3 className="text-xl font-medium mb-3">build.zig.zon</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`.{
    .name = "my-project",
    .version = "0.1.0",
    .dependencies = .{
        .@"zig-network" = .{
            .url = "https://github.com/user/zig-network/archive/v0.1.0.tar.gz",
            .hash = "1220abc123...",
        },
    },
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Using Dependencies in build.zig</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`pub fn build(b: *std.Build) void {
    const exe = b.addExecutable(.{
        .name = "myapp",
        .root_source_file = .{ .path = "src/main.zig" },
    });

    // Add dependency
    const network = b.dependency("zig-network", .{});
    exe.addModule("network", network.module("network"));

    b.installArtifact(exe);
}`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_testing": {
    title: "Testing in Zig",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Built-in Testing Framework
        </h2>
        <p className="leading-relaxed mb-4">
          Zig has a built-in testing framework. Tests are written alongside code using the test keyword.
        </p>

        <h3 className="text-xl font-medium mb-3">Writing Tests</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const std = @import("std");
const expect = std.testing.expect;

fn add(a: i32, b: i32) i32 {
    return a + b;
}

test "addition" {
    const result = add(2, 3);
    try expect(result == 5);
}

test "subtraction" {
    try expect(10 - 3 == 7);
}

test "string equality" {
    const a = "hello";
    const b = "hello";
    try expect(std.mem.eql(u8, a, b));
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Running Tests</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Run all tests
zig test src/main.zig

# Run tests via build system
zig build test

# With verbose output
zig test src/main.zig --verbose`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Test Allocator</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`test "memory allocation" {
    // Detects leaks automatically
    const allocator = std.testing.allocator;

    const ptr = try allocator.create(i32);
    defer allocator.destroy(ptr);

    ptr.* = 42;
    try expect(ptr.* == 42);
}`}
          </pre>
        </div>
      </>
    ),
  },

  "zig_c_interop": {
    title: "C Interoperability",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Interfacing with C
        </h2>
        <p className="leading-relaxed mb-4">
          Zig can directly import and use C headers, call C functions, and export Zig functions for use by C code. This makes it easy to leverage existing C libraries.
        </p>

        <h3 className="text-xl font-medium mb-3">Importing C Headers</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`const c = @cImport({
    @cInclude("stdio.h");
    @cInclude("stdlib.h");
});

pub fn main() void {
    _ = c.printf("Hello from C!\\n");

    const ptr = c.malloc(100);
    defer c.free(ptr);

    if (ptr) |p| {
        // Use allocated memory
        _ = p;
    }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Exporting to C</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// Export function callable from C
export fn zig_add(a: c_int, b: c_int) c_int {
    return a + b;
}

// Equivalent C declaration:
// int zig_add(int a, int b);`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Linking C Libraries</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// In build.zig
exe.linkLibC();  // Link libc
exe.linkSystemLibrary("pthread");  // Link pthread
exe.addIncludePath(.{ .path = "/usr/include" });

// Compile C source files
exe.addCSourceFiles(&.{
    "src/legacy.c",
    "src/helper.c",
}, &.{"-Wall", "-O2"});`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3">Type Compatibility</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`// C-compatible types
const c_char: c_char = 'A';
const c_short: c_short = 100;
const c_int: c_int = 1000;
const c_long: c_long = 10000;
const c_ulong: c_ulong = 50000;

// C pointer types
const c_ptr: [*c]u8 = undefined;  // Can be null
const c_str: [*:0]const u8 = "Hello";  // Null-terminated`}
          </pre>
        </div>
      </>
    ),
  },
};
