import React from "react";

const CodeMotion: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Code Motion Optimization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Code motion is an optimization technique that moves computations to less
      frequently executed locations. The most common form is loop-invariant code
      motion, which moves computations that produce the same result in every loop
      iteration to a point before the loop.
    </p>

    <h2 className="text-3xl font-bold mt-8">Loop-Invariant Code Motion</h2>
    <p className="leading-relaxed">
      A computation is loop-invariant if its value does not change between loop
      iterations. Such computations can be moved outside the loop.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Before Code Motion:
    for (i = 0; i < 1000; i++) {
        t = a * b;          // Computed 1000 times
        c[i] = t + i;       // Uses t
    }

After Code Motion:
    t = a * b;              // Computed once (moved out)
    for (i = 0; i < 1000; i++) {
        c[i] = t + i;
    }

Savings: 999 multiplications eliminated`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Identifying Loop-Invariant Code</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`A statement S: x = y op z is loop-invariant if:
1. y is a constant, OR
   y is defined outside the loop, OR
   y has exactly one definition inside the loop,
     and that definition is also loop-invariant

2. z is a constant, OR
   z is defined outside the loop, OR
   z has exactly one definition inside the loop,
     and that definition is also loop-invariant

Example Analysis:
    a = 10              // Outside loop
    for (i = 0; i < n; i++) {
        t1 = a + 5      // Invariant: a is outside, 5 is constant
        t2 = t1 * 2     // Invariant: t1 is invariant, 2 is constant
        t3 = i + t2     // NOT invariant: i changes each iteration
        b[i] = t3
    }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Safety Conditions for Code Motion</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Condition</th>
            <th className="p-3 border">Requirement</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Dominance</td>
            <td className="p-3 border">Statement dominates all loop exits</td>
            <td className="p-3 border">Ensures value is used</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Single Definition</td>
            <td className="p-3 border">Only one definition in loop</td>
            <td className="p-3 border">Prevents conflicts</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">No Side Effects</td>
            <td className="p-3 border">Safe to execute speculatively</td>
            <td className="p-3 border">No exceptions, I/O</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm for Code Motion</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Algorithm: Loop-Invariant Code Motion

1. Compute reaching definitions for the loop

2. Mark invariant computations:
   Repeat until no change:
     For each statement S: x = y op z in loop:
       If S is not already marked invariant:
         If y and z are both invariant (constant, outside, or marked):
           Mark S as invariant

3. For each invariant statement S: x = expr:
   Move S to preheader if:
   a) S dominates all loop exits where x is live, OR
      x is not live at any loop exit
   b) x is not defined elsewhere in loop
   c) All uses of x in loop can only reach this definition
   d) expr has no side effects or is safe to speculate

4. Create preheader block if needed
   (new block before loop header)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When Code Motion is Unsafe</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Case 1: Loop may not execute
    for (i = 0; i < n; i++) {  // if n <= 0, loop doesn't run
        x = 1 / a;             // Might divide by zero
        ...
    }
    // Cannot move 1/a outside - might crash when loop wouldn't

Case 2: Conditional execution
    for (i = 0; i < n; i++) {
        if (condition) {
            x = expensive();   // Only executed sometimes
        }
        ...
    }
    // Moving out would always execute expensive()

Case 3: Multiple definitions
    for (i = 0; i < n; i++) {
        if (i % 2 == 0)
            x = a + b;
        else
            x = c + d;         // Two definitions of x
        use(x);
    }
    // Cannot move either definition

Case 4: Use before definition in loop
    for (i = 0; i < n; i++) {
        y = x + 1;             // Uses x
        x = a * b;             // Defines x (invariant)
    }
    // Moving x = a * b out changes behavior on first iteration`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Preheader Creation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`A preheader is a new block inserted before the loop header
to hold moved invariant computations.

Before:
    +-------+
    |  ...  |
    +---+---+
        |
        v
    +---+---+<-----+
    | Header|      |
    +---+---+      |
        |          |
        v          |
    +---+---+      |
    | Body  +------+
    +-------+

After (with preheader):
    +-------+
    |  ...  |
    +---+---+
        |
        v
    +----------+
    | Preheader|  <-- Invariant code moved here
    | t = a*b  |
    +----+-----+
         |
         v
    +----+---+<-----+
    | Header |      |
    +----+---+      |
         |          |
         v          |
    +----+---+      |
    |  Body  +------+
    +--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comprehensive Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Original:
    for (i = 0; i < n; i++) {
        t1 = 4                  // Constant - invariant
        t2 = a[j]               // j unchanged - invariant
        t3 = t1 * t2            // Both invariant - invariant
        t4 = i * t3             // i changes - NOT invariant
        b[i] = t4
    }

After Code Motion:
    t1 = 4
    t2 = a[j]
    t3 = t1 * t2               // 4 * a[j] computed once
    for (i = 0; i < n; i++) {
        t4 = i * t3
        b[i] = t4
    }

With Constant Folding:
    t3 = 4 * a[j]              // Simplified
    for (i = 0; i < n; i++) {
        b[i] = i * t3
    }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Code motion moves computations to less frequently executed locations</li>
        <li>Loop-invariant computations produce same value every iteration</li>
        <li>Safety requires dominance, single definition, and no side effects</li>
        <li>A preheader block holds moved invariant code</li>
        <li>Cannot move code if loop might not execute (speculation safety)</li>
        <li>Multiple passes may be needed as one motion enables another</li>
      </ul>
    </div>
  </div>
);

export default CodeMotion;
