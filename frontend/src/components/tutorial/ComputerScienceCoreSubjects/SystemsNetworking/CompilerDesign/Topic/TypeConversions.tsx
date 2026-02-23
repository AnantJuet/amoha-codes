import React from "react";

const TypeConversions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Type Conversions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Type Conversion (also called type casting or type coercion) is the process of
      converting a value from one data type to another. Compilers must handle type
      conversions to ensure operations are performed on compatible types. There are
      two main categories: implicit conversions (coercions) performed automatically
      by the compiler, and explicit conversions (casts) specified by the programmer.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Type Conversions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Conversion Type</th>
            <th className="p-3 border">Also Called</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Implicit</td>
            <td className="p-3 border">Coercion, Automatic</td>
            <td className="p-3 border">Compiler inserts conversion automatically</td>
            <td className="p-3 border font-mono text-gray-900">int + float {"=>"} float</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Explicit</td>
            <td className="p-3 border">Cast, Type Cast</td>
            <td className="p-3 border">Programmer specifies conversion</td>
            <td className="p-3 border font-mono text-gray-900">(int)3.14 {"=>"} 3</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implicit Type Conversion (Coercion)</h2>
    <p className="leading-relaxed">
      Implicit conversions happen automatically when the compiler encounters operations
      involving different types. They follow language-defined conversion rules and typically
      convert from "narrower" types to "wider" types to preserve information.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Implicit Conversion Rules (C/C++):

Type Promotion Hierarchy:
  char -> short -> int -> long -> float -> double

Conversion occurs automatically when:
1. Mixing types in expressions
2. Assigning to a wider type
3. Passing arguments to functions
4. Returning values from functions

Examples:
  int a = 5;
  float b = 2.5;
  float c = a + b;    // a converted to float (5.0)
                      // Result: 7.5

  int x = 10;
  double y = x;       // x implicitly converted to 10.0

  void func(double d);
  func(42);           // 42 (int) converted to 42.0 (double)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Widening vs Narrowing Conversions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Conversion</th>
            <th className="p-3 border">Direction</th>
            <th className="p-3 border">Data Loss</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Widening</td>
            <td className="p-3 border">Smaller to larger</td>
            <td className="p-3 border">None (safe)</td>
            <td className="p-3 border font-mono text-gray-900">int to long, float to double</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Narrowing</td>
            <td className="p-3 border">Larger to smaller</td>
            <td className="p-3 border">Possible (unsafe)</td>
            <td className="p-3 border font-mono text-gray-900">double to int, long to short</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Widening Conversions (Safe):
  byte -> short -> int -> long -> float -> double

  int i = 100;
  long l = i;         // OK: 100 -> 100L
  float f = l;        // OK: 100L -> 100.0f
  double d = f;       // OK: 100.0f -> 100.0

Narrowing Conversions (Potential Loss):
  double d = 3.14159;
  float f = (float)d;     // Loss of precision: 3.14159 -> 3.14159f
  int i = (int)d;         // Loss of fraction: 3.14159 -> 3
  short s = (short)1000000;  // Overflow: truncated value

Examples of Data Loss:
  (int)3.7        -> 3      // Truncation
  (int)-2.9       -> -2     // Truncation toward zero
  (char)256       -> 0      // Overflow (256 mod 256)
  (short)100000   -> -31072 // Overflow`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Explicit Type Conversion (Casting)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Explicit Casting Syntax:

C-style cast:
  (type) expression

  int a = (int) 3.14;          // Result: 3
  float b = (float) 5 / 2;     // Result: 2.5
  char c = (char) 65;          // Result: 'A'

C++ style casts (more explicit intent):
  static_cast<type>(expr)      // Compile-time checked
  dynamic_cast<type>(expr)     // Runtime checked (polymorphism)
  const_cast<type>(expr)       // Remove/add const
  reinterpret_cast<type>(expr) // Low-level bit reinterpretation

Java casting:
  int a = (int) 3.14;
  String s = (String) obj;     // Downcast with runtime check

Python type conversion:
  a = int(3.14)                // Result: 3
  b = float("3.14")            // Result: 3.14
  c = str(42)                  // Result: "42"`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Type Conversion in Expressions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Mixed-Type Expression Handling:

Expression: int + float

Step 1: Identify operand types
        left: int, right: float

Step 2: Apply conversion rules
        Common type = float (wider type)

Step 3: Convert int to float
        Insert intToFloat conversion

Step 4: Perform operation
        float + float = float

Three-Address Code Generation:
  Source:  x = a + b    (a: int, b: float)

  TAC:
    t1 = intToFloat(a)
    t2 = t1 + b
    x = t2

Compiler Intermediate Representation:
         +
        / \\
       /   \\
  intToFloat  b:float
      |
    a:int`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conversion Functions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">From</th>
            <th className="p-3 border">To</th>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Notes</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">int</td>
            <td className="p-3 border font-mono text-gray-900">float</td>
            <td className="p-3 border font-mono text-gray-900">intToFloat</td>
            <td className="p-3 border">Convert to floating point</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">float</td>
            <td className="p-3 border font-mono text-gray-900">int</td>
            <td className="p-3 border font-mono text-gray-900">floatToInt</td>
            <td className="p-3 border">Truncate decimal part</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">char</td>
            <td className="p-3 border font-mono text-gray-900">int</td>
            <td className="p-3 border font-mono text-gray-900">charToInt</td>
            <td className="p-3 border">ASCII/Unicode value</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">int</td>
            <td className="p-3 border font-mono text-gray-900">double</td>
            <td className="p-3 border font-mono text-gray-900">intToDouble</td>
            <td className="p-3 border">Widen to double precision</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">float</td>
            <td className="p-3 border font-mono text-gray-900">double</td>
            <td className="p-3 border font-mono text-gray-900">floatToDouble</td>
            <td className="p-3 border">Increase precision</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Type Coercion Rules</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Semantic Rules for Type Coercion:

// Binary arithmetic operation
E -> E1 + E2
{
    if (E1.type == int && E2.type == int) {
        E.type = int;
        E.code = E1.code || E2.code ||
                 gen(E.place = E1.place + E2.place);
    }
    else if (E1.type == float && E2.type == float) {
        E.type = float;
        E.code = E1.code || E2.code ||
                 gen(E.place = E1.place +f E2.place);
    }
    else if (E1.type == int && E2.type == float) {
        E.type = float;
        t = newtemp();
        E.code = E1.code || E2.code ||
                 gen(t = intToFloat(E1.place)) ||
                 gen(E.place = t +f E2.place);
    }
    else if (E1.type == float && E2.type == int) {
        E.type = float;
        t = newtemp();
        E.code = E1.code || E2.code ||
                 gen(t = intToFloat(E2.place)) ||
                 gen(E.place = E1.place +f t);
    }
    else {
        E.type = type_error;
    }
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pointer and Reference Conversions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Pointer Type Conversions:

1. Null Pointer Conversions
   int* p = NULL;           // NULL converts to any pointer type
   float* q = nullptr;      // C++11 nullptr

2. Void Pointer (Generic Pointer)
   void* generic = malloc(100);
   int* specific = (int*)generic;  // Cast required in C++

3. Pointer to Integer
   int* p = &x;
   long addr = (long)p;     // Address as integer

4. Derived to Base (Upcasting)
   class Base { };
   class Derived : public Base { };
   Derived* d = new Derived();
   Base* b = d;             // Implicit upcast (safe)

5. Base to Derived (Downcasting)
   Base* b = getObject();
   Derived* d = dynamic_cast<Derived*>(b);  // Runtime check
   if (d != nullptr) { /* safe to use d */ }

6. Related Pointer Types (C)
   int arr[10];
   int* p = arr;            // Array decays to pointer
   int (*fp)(int) = func;   // Function pointer`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Conversion Pitfalls</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Type Conversion Pitfalls:

1. Integer Division vs Float Division
   int a = 5, b = 2;
   float wrong = a / b;        // Result: 2.0 (not 2.5!)
   float right = (float)a / b; // Result: 2.5

2. Overflow in Conversion
   int big = 1000000000;
   short small = (short)big;   // Undefined/truncated

3. Signed/Unsigned Mismatch
   unsigned int u = 10;
   int i = -5;
   if (i < u) { ... }          // i converted to unsigned!
                               // -5 becomes large positive

4. Loss of Precision
   float f = 16777217;         // Cannot represent exactly
   // 16777217 becomes 16777216.0 in float

5. Boolean Conversions
   int x = 5;
   bool b = x;                 // Non-zero -> true
   int y = b;                  // true -> 1

6. Character Encoding
   char c = 200;               // May be negative if signed char
   int i = c;                  // Sign extension occurs`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Implicit conversions (coercions) are automatic; explicit conversions (casts) are programmer-specified</li>
        <li>Widening conversions are safe; narrowing conversions may lose data</li>
        <li>Compilers insert conversion operations in intermediate code</li>
        <li>Mixed-type expressions promote operands to a common type</li>
        <li>C-style casts are powerful but can hide errors; C++ provides typed casts</li>
        <li>Integer division before casting is a common source of bugs</li>
        <li>Signed/unsigned conversions can cause subtle comparison bugs</li>
        <li>Understanding conversion rules is essential for correct program behavior</li>
      </ul>
    </div>
  </div>
);

export default TypeConversions;
