import React from "react";

const ConstantFolding: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Constant Folding Optimization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Constant folding is a compile-time optimization that evaluates expressions
      involving only constants and replaces them with the computed result. This
      moves computation from runtime to compile time, resulting in faster execution.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Constant Folding?</h2>
    <p className="leading-relaxed">
      When all operands of an expression are constants known at compile time,
      the compiler can evaluate the expression and replace it with the result.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Constant Folding Examples:

Before:
    x = 3 + 5           // Both operands constant
    y = 10 * 4          // Both operands constant
    z = 100 / 5         // Both operands constant

After:
    x = 8               // Evaluated at compile time
    y = 40              // Evaluated at compile time
    z = 20              // Evaluated at compile time`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Constant Folding</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Before</th>
            <th className="p-3 border">After</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Arithmetic</td>
            <td className="p-3 border font-mono text-gray-900">3 + 5 * 2</td>
            <td className="p-3 border font-mono text-gray-900">13</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Relational</td>
            <td className="p-3 border font-mono text-gray-900">5 {">"} 3</td>
            <td className="p-3 border font-mono text-gray-900">true</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Logical</td>
            <td className="p-3 border font-mono text-gray-900">true && false</td>
            <td className="p-3 border font-mono text-gray-900">false</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Bitwise</td>
            <td className="p-3 border font-mono text-gray-900">0xFF & 0x0F</td>
            <td className="p-3 border font-mono text-gray-900">0x0F</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">String</td>
            <td className="p-3 border font-mono text-gray-900">"Hello" + " World"</td>
            <td className="p-3 border font-mono text-gray-900">"Hello World"</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Constant Propagation + Folding</h2>
    <p className="leading-relaxed">
      Constant propagation identifies variables with known constant values.
      Combined with constant folding, this enables evaluation of more expressions.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original:
    a = 5
    b = 10
    c = a + b           // a and b are constants
    d = c * 2           // c is a constant

After Constant Propagation:
    a = 5
    b = 10
    c = 5 + 10          // a replaced with 5, b with 10
    d = c * 2

After Constant Folding:
    a = 5
    b = 10
    c = 15              // 5 + 10 folded
    d = 30              // 15 * 2 folded (c propagated first)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algebraic Identities</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Constant folding includes algebraic simplifications:

Additive:
    x + 0    ->  x
    x - 0    ->  x
    x - x    ->  0
    0 - x    ->  -x

Multiplicative:
    x * 0    ->  0
    x * 1    ->  x
    x * (-1) ->  -x
    x / 1    ->  x
    0 / x    ->  0   (if x != 0)
    x / x    ->  1   (if x != 0)

Power of 2:
    x * 2    ->  x << 1
    x * 4    ->  x << 2
    x / 2    ->  x >> 1  (for unsigned)

Boolean:
    x && true   ->  x
    x && false  ->  false
    x || true   ->  true
    x || false  ->  x
    !true       ->  false
    !false      ->  true`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Conditional Constant Folding</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`When conditions evaluate to constants:

Before:
    if (1 < 2) {        // Always true
        x = 10;
    } else {
        x = 20;         // Dead code
    }

After:
    x = 10;             // Only true branch kept

---

Before:
    DEBUG = false
    if (DEBUG) {        // Always false after propagation
        log("debug info");
    }

After:
    // Entire if statement removed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comprehensive Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original Code:
    PI = 3.14159
    radius = 5
    diameter = radius * 2
    circumference = PI * diameter
    area = PI * radius * radius
    result = area + 0

Step 1 - Constant Propagation:
    PI = 3.14159
    radius = 5
    diameter = 5 * 2
    circumference = 3.14159 * diameter
    area = 3.14159 * 5 * 5
    result = area + 0

Step 2 - Constant Folding:
    PI = 3.14159
    radius = 5
    diameter = 10
    circumference = 3.14159 * 10
    area = 78.53975
    result = area + 0

Step 3 - More Propagation and Folding:
    PI = 3.14159
    radius = 5
    diameter = 10
    circumference = 31.4159
    area = 78.53975
    result = 78.53975

Step 4 - Dead Code Elimination (if intermediates unused):
    result = 78.53975`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Limitations and Considerations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Floating Point Precision:
- Compile-time evaluation must match runtime behavior
- Different rounding modes may produce different results
- Example: 1.0 / 3.0 * 3.0 may not equal 1.0

Overflow/Underflow:
- Must handle overflow same as runtime would
- Example: INT_MAX + 1 behavior must be preserved

Division by Zero:
- Cannot fold x / 0 (must remain runtime error)
- Cannot fold 0 / y if y might be 0

Platform Differences:
- Integer sizes may vary (32-bit vs 64-bit)
- Endianness considerations for some operations`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Benefits</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Faster Execution:</strong> Computation moved to compile time</li>
      <li><strong>Smaller Code:</strong> Constants often take less space than expressions</li>
      <li><strong>Enables Other Optimizations:</strong> Constant conditions enable dead code elimination</li>
      <li><strong>No Runtime Cost:</strong> Result is already computed</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Constant folding evaluates constant expressions at compile time</li>
        <li>Works with arithmetic, relational, logical, and bitwise operations</li>
        <li>Combined with constant propagation for maximum effect</li>
        <li>Algebraic identities (x*1=x, x+0=x) are a form of constant folding</li>
        <li>Must preserve runtime semantics (overflow, precision)</li>
        <li>Enables dead code elimination when conditions become constant</li>
      </ul>
    </div>
  </div>
);

export default ConstantFolding;
