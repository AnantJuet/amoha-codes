import React from "react";

const OptimizationSources: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Sources of Optimization Opportunities
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Optimization opportunities arise from various sources in the compilation process.
      Understanding these sources helps compilers identify and apply appropriate
      transformations to improve code efficiency.
    </p>

    <h2 className="text-3xl font-bold mt-8">Primary Sources of Optimization</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Redundant Computations</h3>
    <p className="leading-relaxed">
      The same value is computed multiple times when it could be computed once and reused.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Before Optimization:
    a = b + c;
    d = b + c;          // Same computation as 'a'
    e = b + c + d;      // Contains b + c again

After Optimization:
    t1 = b + c;
    a = t1;
    d = t1;
    e = t1 + d;`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Dead Code</h3>
    <p className="leading-relaxed">
      Code that computes values never used or code that is unreachable.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Before Optimization:
    x = compute();      // x is never used
    return 5;
    y = 10;             // Unreachable code

After Optimization:
    return 5;`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Constant Expressions</h3>
    <p className="leading-relaxed">
      Expressions involving only constants that can be evaluated at compile time.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Before Optimization:
    x = 3 + 5 * 2;
    y = 24 / 6;
    z = "Hello" + " World";

After Optimization:
    x = 13;
    y = 4;
    z = "Hello World";`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Loop Inefficiencies</h3>
    <p className="leading-relaxed">
      Computations inside loops that could be moved outside or simplified.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Before Optimization:
    for (i = 0; i < n; i++) {
        a[i] = x * y + i;   // x * y is loop-invariant
    }

After Optimization:
    t1 = x * y;             // Moved outside loop
    for (i = 0; i < n; i++) {
        a[i] = t1 + i;
    }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sources by Program Construct</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Source</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Applicable Optimization</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Expressions</td>
            <td className="p-3 border">Repeated subexpressions</td>
            <td className="p-3 border">Common subexpression elimination</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Assignments</td>
            <td className="p-3 border">Unnecessary copies</td>
            <td className="p-3 border">Copy propagation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Branches</td>
            <td className="p-3 border">Constant conditions</td>
            <td className="p-3 border">Dead code elimination</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Loops</td>
            <td className="p-3 border">Invariant computations</td>
            <td className="p-3 border">Loop-invariant code motion</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Arrays</td>
            <td className="p-3 border">Index calculations</td>
            <td className="p-3 border">Strength reduction</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Functions</td>
            <td className="p-3 border">Small frequent calls</td>
            <td className="p-3 border">Function inlining</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sources from Language Semantics</h2>

    <h3 className="text-2xl font-semibold mt-6">Algebraic Identities</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Additive Identity:
    x + 0 = x
    x - 0 = x

Multiplicative Identity:
    x * 1 = x
    x / 1 = x

Zero Properties:
    x * 0 = 0
    0 / x = 0 (where x != 0)

Idempotent Operations:
    x & x = x
    x | x = x

Strength Reduction:
    x * 2  -->  x << 1
    x * 4  -->  x << 2
    x / 2  -->  x >> 1`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Boolean Simplifications</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`x && true  = x
x && false = false
x || true  = true
x || false = x
!!x        = x (for boolean x)
x && x     = x
x || x     = x`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sources from Translation Process</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`High-Level Source:
    a[i][j] = a[i][j] + 1;

Naive IR (with redundancies):
    t1 = i * 10         // Row offset
    t2 = t1 + j         // Element offset
    t3 = a[t2]          // Load a[i][j]
    t4 = t3 + 1         // Add 1
    t5 = i * 10         // Redundant: same as t1
    t6 = t5 + j         // Redundant: same as t2
    a[t6] = t4          // Store result

Optimized IR:
    t1 = i * 10
    t2 = t1 + j
    t3 = a[t2]
    t4 = t3 + 1
    a[t2] = t4          // Reuse t2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Identifying Optimization Opportunities</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Data Flow Analysis:</strong> Track how values flow through the program</li>
      <li><strong>Control Flow Analysis:</strong> Understand program execution paths</li>
      <li><strong>Alias Analysis:</strong> Determine if pointers refer to same memory</li>
      <li><strong>Dependency Analysis:</strong> Find dependencies between operations</li>
      <li><strong>Pattern Matching:</strong> Identify known inefficient patterns</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Redundant computations are a major source of optimization opportunities</li>
        <li>Dead code wastes resources and should be eliminated</li>
        <li>Constant expressions can be evaluated at compile time</li>
        <li>Loops often contain invariant code that can be moved out</li>
        <li>Algebraic identities enable simplifications</li>
        <li>The translation process itself can introduce redundancies</li>
        <li>Data flow and control flow analysis help identify opportunities</li>
      </ul>
    </div>
  </div>
);

export default OptimizationSources;
