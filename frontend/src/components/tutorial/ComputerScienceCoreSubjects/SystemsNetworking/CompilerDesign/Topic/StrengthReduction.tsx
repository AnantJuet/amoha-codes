import React from "react";

const StrengthReduction: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Strength Reduction Optimization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Strength reduction is an optimization technique that replaces expensive
      operations with cheaper, equivalent ones. The most common application is
      replacing multiplications with additions inside loops, but it also applies
      to other operation pairs.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Strength Reduction?</h2>
    <p className="leading-relaxed">
      Different operations have different costs in terms of CPU cycles. Strength
      reduction replaces high-cost operations with low-cost ones that compute
      the same result.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Operation Cost Hierarchy (typical):

Expensive:                 Cheaper:
  Division      ------->     Multiplication or Shift
  Multiplication ------>     Addition or Shift
  Addition      ------->     Increment

Example:
    x * 2   ---->   x + x   or   x << 1
    x * 4   ---->   x << 2
    x / 2   ---->   x >> 1  (for unsigned)
    x % 8   ---->   x & 7   (for unsigned, power of 2)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Strength Reductions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Original</th>
            <th className="p-3 border">Reduced Form</th>
            <th className="p-3 border">Conditions</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">x * 2</td>
            <td className="p-3 border font-mono text-gray-900">x + x or x {"<<"} 1</td>
            <td className="p-3 border">Always valid</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">x * 2^n</td>
            <td className="p-3 border font-mono text-gray-900">x {"<<"} n</td>
            <td className="p-3 border">Power of 2</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">x / 2^n</td>
            <td className="p-3 border font-mono text-gray-900">x {">>"} n</td>
            <td className="p-3 border">Unsigned or positive</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">x % 2^n</td>
            <td className="p-3 border font-mono text-gray-900">x & (2^n - 1)</td>
            <td className="p-3 border">Unsigned or positive</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">x * 15</td>
            <td className="p-3 border font-mono text-gray-900">(x {"<<"} 4) - x</td>
            <td className="p-3 border">Near power of 2</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">x * k (loop)</td>
            <td className="p-3 border font-mono text-gray-900">x += k (incremental)</td>
            <td className="p-3 border">Induction variable</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Strength Reduction in Loops</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`The most impactful application: replacing multiplication
with addition for induction variables.

Before:
    for (i = 0; i < n; i++) {
        t = i * 4;           // Multiplication each iteration
        a[t] = 0;
    }

After:
    t = 0;                   // Initialize
    for (i = 0; i < n; i++) {
        a[t] = 0;
        t = t + 4;           // Addition instead of multiplication
    }

Analysis:
    Original:  n multiplications (expensive)
    Optimized: n additions (cheap) + 1 initialization
    Savings:   Significant when n is large`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm for Loop Strength Reduction</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Algorithm: Strength Reduction for Induction Variables

For each basic induction variable i with increment c:
  For each derived IV j where j = a * i + b:

  1. Create new variable j'
  2. Initialize j' before loop: j' = a * i_init + b
  3. At end of loop, add: j' = j' + a * c
  4. Replace original j = a * i + b with j = j'

Example:
    i increment = 1
    j = 4 * i + 10  (a=4, b=10)

    Before loop:  j' = 4 * 0 + 10 = 10
    In loop:      j = j'
    End of loop:  j' = j' + 4 * 1 = j' + 4`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comprehensive Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original (Array Access Pattern):
    for (i = 0; i < n; i++) {
        for (j = 0; j < m; j++) {
            t = i * m + j;       // 2D to 1D index
            a[t] = compute(i, j);
        }
    }

Step 1: Analyze Induction Variables
    i: basic IV, outer loop
    j: basic IV, inner loop
    t = i * m + j: derived from both

Step 2: Apply Strength Reduction (inner loop)
    for (i = 0; i < n; i++) {
        t = i * m;               // Base for this row
        for (j = 0; j < m; j++) {
            a[t] = compute(i, j);
            t = t + 1;           // Increment instead of multiply
        }
    }

Step 3: Apply to Outer Loop
    t_base = 0;                  // Start of array
    for (i = 0; i < n; i++) {
        t = t_base;
        for (j = 0; j < m; j++) {
            a[t] = compute(i, j);
            t = t + 1;
        }
        t_base = t_base + m;     // Next row base
    }

Result: Eliminated all multiplications from inner loop`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Non-Power-of-2 Multiplication</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`For constants that aren't powers of 2, decompose into
shifts and adds/subtracts.

x * 3  = x * 2 + x      = (x << 1) + x
x * 5  = x * 4 + x      = (x << 2) + x
x * 6  = x * 4 + x * 2  = (x << 2) + (x << 1)
x * 7  = x * 8 - x      = (x << 3) - x
x * 9  = x * 8 + x      = (x << 3) + x
x * 10 = x * 8 + x * 2  = (x << 3) + (x << 1)
x * 15 = x * 16 - x     = (x << 4) - x

Trade-off: Only beneficial if shifts + adds < multiply cycles`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Division Strength Reduction</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Division is very expensive. For constant divisors:

Power of 2 (unsigned):
    x / 4   -->   x >> 2
    x / 8   -->   x >> 3

Power of 2 (signed, non-negative):
    x / 4   -->   x >> 2  (if x >= 0 known)

General constant (multiply by reciprocal):
    x / 3   -->   (x * 0xAAAAAAAB) >> 33  (magic number)

    This technique uses fixed-point arithmetic and is
    automatically applied by most compilers.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Benefits and Trade-offs</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Benefits</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Faster execution</li>
          <li>Lower power consumption</li>
          <li>Especially effective in loops</li>
          <li>Enables further optimizations</li>
        </ul>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Considerations</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>May increase code size</li>
          <li>More live variables</li>
          <li>Signed division more complex</li>
          <li>Overflow must be handled</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Strength reduction replaces expensive operations with cheaper ones</li>
        <li>Most impactful for multiplication to addition in loops</li>
        <li>Power-of-2 multiplications become shifts</li>
        <li>Division can be replaced with multiplication by reciprocal</li>
        <li>Works with induction variable analysis in loops</li>
        <li>Trade-offs include code size and register pressure</li>
      </ul>
    </div>
  </div>
);

export default StrengthReduction;
