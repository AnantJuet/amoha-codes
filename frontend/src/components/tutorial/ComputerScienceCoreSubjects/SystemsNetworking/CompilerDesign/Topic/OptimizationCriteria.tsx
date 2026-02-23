import React from "react";

const OptimizationCriteria: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Criteria for Code Optimization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Code optimization must follow certain criteria to ensure that transformations
      are valid, beneficial, and practical. These criteria guide the design and
      implementation of optimization passes in compilers.
    </p>

    <h2 className="text-3xl font-bold mt-8">Fundamental Criteria</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Correctness (Semantics Preservation)</h3>
    <p className="leading-relaxed">
      The most critical criterion: optimizations must not change the observable behavior
      of the program. The optimized code must produce the same outputs for all inputs.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Valid Optimization:
    x = a + b;          -->    t = a + b;
    y = a + b;                 x = t;
                               y = t;
    // Same results, fewer computations

Invalid Optimization (changes semantics):
    x = a / b;          -->    x = a >> log2(b);
    // Only valid if b is power of 2 and positive!`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Profitability</h3>
    <p className="leading-relaxed">
      The optimization should provide measurable improvement in the target metric
      (speed, size, power, etc.).
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Profitable (saves computation):
    for (i = 0; i < n; i++) {
        x = a * b;      // Loop-invariant
        sum += x;
    }
    // Moving x = a * b outside saves n-1 multiplications

Not Profitable (adds overhead):
    x = a + b;          // Single use
    y = x;
    // Adding temporary may increase register pressure`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Compile-Time Efficiency</h3>
    <p className="leading-relaxed">
      Optimization algorithms should complete in reasonable time, typically polynomial
      in the size of the program.
    </p>

    <h2 className="text-3xl font-bold mt-8">Criteria Summary Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Criterion</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Priority</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Correctness</td>
            <td className="p-3 border">Preserve program semantics</td>
            <td className="p-3 border">Mandatory</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Profitability</td>
            <td className="p-3 border">Improve target metric</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Compile Time</td>
            <td className="p-3 border">Reasonable analysis time</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Debuggability</td>
            <td className="p-3 border">Maintain debug information</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Predictability</td>
            <td className="p-3 border">Consistent improvements</td>
            <td className="p-3 border">Medium</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Safety Conditions</h2>
    <p className="leading-relaxed">
      Optimizations must verify safety conditions before application to ensure correctness.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Subexpression Elimination Safety:
- Expression must be available (computed on all paths)
- Operands must not be modified between computations

Loop-Invariant Code Motion Safety:
- Computation must dominate all loop exits
- No side effects that would change with position
- Result must be used in the loop

Dead Code Elimination Safety:
- Code must have no side effects
- Result must never be used

Copy Propagation Safety:
- No redefinition of source between copy and use`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Trade-offs in Optimization</h2>

    <h3 className="text-2xl font-semibold mt-6">Speed vs. Code Size</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Loop Unrolling - Speed vs. Size Trade-off:

Original (small, slower):
    for (i = 0; i < 100; i++)
        sum += a[i];

Unrolled (larger, faster):
    for (i = 0; i < 100; i += 4) {
        sum += a[i];
        sum += a[i+1];
        sum += a[i+2];
        sum += a[i+3];
    }
    // Larger code but fewer loop iterations`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Compile Time vs. Code Quality</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Optimization Levels (GCC example):

-O0: No optimization (fastest compile)
-O1: Basic optimizations (balanced)
-O2: Standard optimizations (good code, reasonable compile time)
-O3: Aggressive optimizations (best code, longer compile time)
-Os: Optimize for size
-Ofast: Disregard strict standards compliance for speed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When NOT to Optimize</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Debugging builds:</strong> Optimizations make debugging harder</li>
      <li><strong>Correctness uncertainty:</strong> When analysis is imprecise</li>
      <li><strong>Negative impact:</strong> When optimization degrades performance</li>
      <li><strong>Side effects:</strong> Operations with observable side effects</li>
      <li><strong>Volatile access:</strong> Memory-mapped I/O or concurrent access</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Validation of Optimizations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Validation Techniques:

1. Formal Verification
   - Prove transformation preserves semantics
   - Mathematical proofs for optimization rules

2. Testing
   - Run extensive test suites
   - Compare outputs before and after optimization

3. Translation Validation
   - Verify each compilation separately
   - Check equivalence of input and output

4. Proof-Carrying Code
   - Generate proof alongside optimized code
   - Verify proof at deployment time`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Correctness is the most critical criterion - never change program semantics</li>
        <li>Optimizations must be profitable to be worth applying</li>
        <li>Compile-time efficiency limits how aggressive analysis can be</li>
        <li>Safety conditions must be verified before applying optimizations</li>
        <li>Trade-offs exist between speed, size, compile time, and debuggability</li>
        <li>Different optimization levels serve different needs</li>
        <li>Validation ensures optimizations are correct</li>
      </ul>
    </div>
  </div>
);

export default OptimizationCriteria;
