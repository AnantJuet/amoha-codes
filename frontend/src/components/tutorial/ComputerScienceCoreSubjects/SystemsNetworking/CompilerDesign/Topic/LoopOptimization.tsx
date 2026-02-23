import React from "react";

const LoopOptimization: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Loop Optimization Techniques
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Loop optimization is crucial because programs spend most of their execution
      time in loops. Even small improvements to loop bodies can yield significant
      performance gains when multiplied by many iterations. Compilers apply various
      techniques to make loops more efficient.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Optimize Loops?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`90/10 Rule:
Programs typically spend 90% of execution time
in 10% of the code - usually loops!

Impact of Loop Optimization:
    Original loop: 1000 iterations * 10 operations = 10,000 operations
    Optimized:     1000 iterations * 5 operations  = 5,000 operations
    Savings: 50% reduction in loop body = 50% faster overall`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Loop Optimizations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Optimization</th>
            <th className="p-3 border">Goal</th>
            <th className="p-3 border">Technique</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Code Motion</td>
            <td className="p-3 border">Reduce work per iteration</td>
            <td className="p-3 border">Move invariant code out</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Strength Reduction</td>
            <td className="p-3 border">Replace expensive ops</td>
            <td className="p-3 border">Multiply to add</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Induction Variable</td>
            <td className="p-3 border">Simplify loop variables</td>
            <td className="p-3 border">Eliminate derived vars</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Loop Unrolling</td>
            <td className="p-3 border">Reduce overhead</td>
            <td className="p-3 border">Replicate loop body</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Loop Fusion</td>
            <td className="p-3 border">Improve locality</td>
            <td className="p-3 border">Combine adjacent loops</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Loop Fission</td>
            <td className="p-3 border">Enable vectorization</td>
            <td className="p-3 border">Split loop body</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Loop-Invariant Code Motion</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Code that computes the same value in every iteration
can be moved outside the loop.

Before:
    for (i = 0; i < n; i++) {
        t = x * y;          // Invariant: x, y don't change
        a[i] = t + i;
    }

After:
    t = x * y;              // Moved outside loop
    for (i = 0; i < n; i++) {
        a[i] = t + i;
    }

Savings: n-1 multiplications eliminated`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Loop Unrolling</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Replicate loop body to reduce iteration overhead
and enable better instruction scheduling.

Before:
    for (i = 0; i < 100; i++) {
        sum += a[i];
    }
    // 100 iterations, 100 branch tests, 100 increments

After (unroll by 4):
    for (i = 0; i < 100; i += 4) {
        sum += a[i];
        sum += a[i+1];
        sum += a[i+2];
        sum += a[i+3];
    }
    // 25 iterations, 25 branch tests, 25 increments

Trade-off: Larger code size, but fewer loop overhead operations`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Loop Fusion</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Combine adjacent loops with same iteration space
to improve cache locality.

Before:
    for (i = 0; i < n; i++)
        a[i] = b[i] + 1;

    for (i = 0; i < n; i++)
        c[i] = a[i] * 2;

After (fused):
    for (i = 0; i < n; i++) {
        a[i] = b[i] + 1;
        c[i] = a[i] * 2;     // a[i] still in cache/register
    }

Benefits: Better cache utilization, fewer loop overheads`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Loop Fission (Distribution)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Split loop into multiple loops to enable vectorization
or reduce register pressure.

Before:
    for (i = 0; i < n; i++) {
        a[i] = b[i] + 1;     // Vectorizable
        if (a[i] > 0)        // Not vectorizable
            count++;
    }

After (split):
    for (i = 0; i < n; i++)
        a[i] = b[i] + 1;     // Can be vectorized

    for (i = 0; i < n; i++)
        if (a[i] > 0)
            count++;

Benefits: First loop can use SIMD instructions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Loop Interchange</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Reorder nested loops for better memory access patterns.

Before (poor cache usage in row-major language):
    for (j = 0; j < N; j++)
        for (i = 0; i < M; i++)
            a[i][j] = 0;     // Stride = M (cache misses)

After (good cache usage):
    for (i = 0; i < M; i++)
        for (j = 0; j < N; j++)
            a[i][j] = 0;     // Stride = 1 (sequential access)

Benefits: Dramatically improved cache hit rate`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Loop Tiling (Blocking)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Divide loop iteration space into smaller tiles
that fit in cache.

Before (matrix multiply):
    for (i = 0; i < N; i++)
        for (j = 0; j < N; j++)
            for (k = 0; k < N; k++)
                C[i][j] += A[i][k] * B[k][j];

After (tiled with block size B):
    for (ii = 0; ii < N; ii += B)
        for (jj = 0; jj < N; jj += B)
            for (kk = 0; kk < N; kk += B)
                for (i = ii; i < ii+B; i++)
                    for (j = jj; j < jj+B; j++)
                        for (k = kk; k < kk+B; k++)
                            C[i][j] += A[i][k] * B[k][j];

Benefits: BxB blocks fit in cache, reducing memory traffic`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Safety Conditions for Loop Optimization</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Code Motion:</strong> Expression must be loop-invariant and safe to execute</li>
      <li><strong>Unrolling:</strong> Loop count must be known or handled with epilogue</li>
      <li><strong>Fusion:</strong> Loops must have same bounds and no dependencies</li>
      <li><strong>Interchange:</strong> Must preserve data dependencies</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Loops are critical optimization targets (90/10 rule)</li>
        <li>Code motion moves invariant computations outside loops</li>
        <li>Unrolling reduces loop overhead at cost of code size</li>
        <li>Fusion improves cache locality by combining loops</li>
        <li>Interchange reorders loops for better memory access</li>
        <li>Tiling divides work into cache-friendly blocks</li>
        <li>All transformations must preserve program semantics</li>
      </ul>
    </div>
  </div>
);

export default LoopOptimization;
