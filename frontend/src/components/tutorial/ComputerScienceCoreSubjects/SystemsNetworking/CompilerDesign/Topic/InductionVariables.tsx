import React from "react";

const InductionVariables: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Induction Variable Optimization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Induction variables are variables whose values form an arithmetic progression
      as the loop iterates. Identifying and optimizing induction variables can
      eliminate expensive operations and simplify loop computations significantly.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is an Induction Variable?</h2>
    <p className="leading-relaxed">
      An induction variable is a variable that increases or decreases by a constant
      amount on each loop iteration. The loop index is the primary example.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Basic Induction Variable:
    for (i = 0; i < n; i++) {  // i is a basic induction variable
        ...                     // i increases by 1 each iteration
    }

Derived Induction Variable:
    for (i = 0; i < n; i++) {
        j = 4 * i + 2;         // j is derived from i
        ...                     // j = 2, 6, 10, 14, ...
    }

The relationship: j = c * i + d
where c and d are loop-invariant constants`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Induction Variables</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Definition</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Basic</td>
            <td className="p-3 border">Changed by constant each iteration</td>
            <td className="p-3 border font-mono text-gray-900">i = i + 1</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Derived</td>
            <td className="p-3 border">Linear function of basic IV</td>
            <td className="p-3 border font-mono text-gray-900">j = 4 * i + 2</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Mutual</td>
            <td className="p-3 border">Defined in terms of each other</td>
            <td className="p-3 border font-mono text-gray-900">j = k + 1; k = j + 1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Detecting Induction Variables</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Algorithm: Find Induction Variables

1. Find Basic Induction Variables:
   Variable i is basic if only definition in loop is:
   i = i + c  or  i = i - c  (c is loop-invariant)

2. Find Derived Induction Variables:
   Variable j is in family of i if:
   - j = c * i + d (c, d loop-invariant), OR
   - j = k + d where k is in family of i, OR
   - j = c * k where k is in family of i

   Record triple (i, c, d) for each derived variable
   meaning: j = c * i + d

Example:
    for (i = 0; i < n; i++) {   // i is basic IV
        t1 = 4 * i;              // t1 in family of i: (i, 4, 0)
        t2 = t1 + 2;             // t2 in family of i: (i, 4, 2)
        t3 = 2 * t2;             // t3 in family of i: (i, 8, 4)
        a[t1] = t3;
    }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Induction Variable Elimination</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Replace multiplications with additions by maintaining
derived induction variables directly.

Before:
    for (i = 0; i < n; i++) {
        t = 4 * i;               // Multiplication every iteration
        a[t] = 0;
    }

After (Strength Reduction):
    t = 0;                       // Initialize
    for (i = 0; i < n; i++) {
        a[t] = 0;
        t = t + 4;               // Addition instead of multiplication
    }

Further Optimization (Eliminate i):
    t = 0;
    limit = 4 * n;               // New loop bound
    while (t < limit) {
        a[t] = 0;
        t = t + 4;
    }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comprehensive Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original Code:
    for (i = 0; i < n; i++) {
        j = 4 * i;           // j in family(i): (i, 4, 0)
        k = j + 100;         // k in family(i): (i, 4, 100)
        a[j] = b[k];
    }

Step 1: Identify Induction Variables
    i: basic IV, increment = 1
    j: derived, j = 4 * i + 0
    k: derived, k = 4 * i + 100

Step 2: Strength Reduction
    j' = 0;                  // j = 4 * 0 + 0
    k' = 100;                // k = 4 * 0 + 100
    for (i = 0; i < n; i++) {
        j = j';
        k = k';
        a[j] = b[k];
        j' = j' + 4;         // Update by coefficient
        k' = k' + 4;
    }

Step 3: Dead Code Elimination (j, k just copies)
    j = 0;
    k = 100;
    for (i = 0; i < n; i++) {
        a[j] = b[k];
        j = j + 4;
        k = k + 4;
    }

Step 4: Eliminate i (if not used elsewhere)
    j = 0;
    k = 100;
    limit = 4 * n;
    while (j < limit) {
        a[j] = b[k];
        j = j + 4;
        k = k + 4;
    }

Result: Eliminated 2 multiplications per iteration`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Test Replacement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Replace loop test with test on derived IV to eliminate basic IV.

Before:
    s = 0;
    for (i = 0; i < n; i++) {
        s = s + 8;           // s = 8 * i + 8 (after increment)
        use(s);
    }

After:
    s = 0;
    limit = 8 * n;
    while (s < limit) {
        s = s + 8;
        use(s);
    }
    // i eliminated entirely!

Note: New limit computed once before loop`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Benefits of IV Optimization</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Strength Reduction:</strong> Replace multiplications with additions</li>
      <li><strong>Variable Elimination:</strong> Remove unnecessary loop variables</li>
      <li><strong>Reduced Register Pressure:</strong> Fewer live variables</li>
      <li><strong>Simpler Loop Structure:</strong> Easier for further optimization</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Basic induction variables change by a constant each iteration</li>
        <li>Derived IVs are linear functions of basic IVs: j = c * i + d</li>
        <li>Strength reduction replaces multiplication with addition</li>
        <li>Test replacement can eliminate the basic IV entirely</li>
        <li>IV optimization is powerful for array indexing in loops</li>
        <li>Often combined with other loop optimizations</li>
      </ul>
    </div>
  </div>
);

export default InductionVariables;
