import React from 'react';

const SIMD: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SIMD - Single Instruction Multiple Data
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      SIMD (Single Instruction, Multiple Data) is a parallel computing architecture where a
      single instruction operates on multiple data elements simultaneously. All processing
      elements execute the same operation at the same time, but each operates on different
      data. This architecture is highly efficient for data-parallel tasks like graphics
      processing, scientific computing, and multimedia applications.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      In SIMD architecture, a single control unit broadcasts the same instruction to multiple
      processing elements (PEs), and each PE executes that instruction on its own local data.
      This synchronous, lockstep execution model exploits data-level parallelism, making it
      ideal for applications where the same operation needs to be performed on large arrays
      of data.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`SIMD Architecture Block Diagram:

+------------------+
|  Control Unit    |     Single Instruction Stream
|  (CU)            |
| +-------------+  |
| | Instruction |  |
| |   I1        |  |
| +-------------+  |
+--------+---------+
         |
         | Broadcast same instruction to all PEs
         |
    +----+----+----+----+----+----+----+
    |    |    |    |    |    |    |    |
    v    v    v    v    v    v    v    v
+----+ +----+ +----+ +----+ +----+ +----+ +----+ +----+
|PE 0| |PE 1| |PE 2| |PE 3| |PE 4| |PE 5| |PE 6| |PE 7|
|D[0]| |D[1]| |D[2]| |D[3]| |D[4]| |D[5]| |D[6]| |D[7]|
+----+ +----+ +----+ +----+ +----+ +----+ +----+ +----+
  |      |      |      |      |      |      |      |
  v      v      v      v      v      v      v      v
+----+ +----+ +----+ +----+ +----+ +----+ +----+ +----+
|R[0]| |R[1]| |R[2]| |R[3]| |R[4]| |R[5]| |R[6]| |R[7]|
+----+ +----+ +----+ +----+ +----+ +----+ +----+ +----+
         Multiple Data Streams (each PE has its own)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">How SIMD Works</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`SIMD Vector Addition Example: C = A + B

Given arrays (8 elements each):
A = [1, 2, 3, 4, 5, 6, 7, 8]
B = [10, 20, 30, 40, 50, 60, 70, 80]

SISD (Sequential):
Clock 1: C[0] = A[0] + B[0] = 11
Clock 2: C[1] = A[1] + B[1] = 22
Clock 3: C[2] = A[2] + B[2] = 33
...
Clock 8: C[7] = A[7] + B[7] = 88
Total: 8 clock cycles

SIMD (8 Processing Elements):
                Single ADD instruction
                         |
    +----+----+----+----+----+----+----+----+
    v    v    v    v    v    v    v    v
+-------+-------+-------+-------+-------+-------+-------+-------+
|A[0]=1 |A[1]=2 |A[2]=3 |A[3]=4 |A[4]=5 |A[5]=6 |A[6]=7 |A[7]=8 |
|  +    |  +    |  +    |  +    |  +    |  +    |  +    |  +    |
|B[0]=10|B[1]=20|B[2]=30|B[3]=40|B[4]=50|B[5]=60|B[6]=70|B[7]=80|
|  =    |  =    |  =    |  =    |  =    |  =    |  =    |  =    |
|C[0]=11|C[1]=22|C[2]=33|C[3]=44|C[4]=55|C[5]=66|C[6]=77|C[7]=88|
+-------+-------+-------+-------+-------+-------+-------+-------+

Clock 1: ALL 8 additions happen simultaneously
Total: 1 clock cycle (8x speedup!)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Characteristics of SIMD</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Lockstep Execution:</strong> All processing elements execute the same instruction
        at the same time, synchronized by the control unit.
      </li>
      <li>
        <strong>Data Parallelism:</strong> Best suited for operations that apply uniformly
        across large datasets.
      </li>
      <li>
        <strong>Single Control Unit:</strong> One CU broadcasts instructions; reduces hardware
        complexity compared to MIMD.
      </li>
      <li>
        <strong>Homogeneous Processing:</strong> All PEs are identical and perform the same
        operation.
      </li>
      <li>
        <strong>Vector/Array Operations:</strong> Naturally suited for vector and matrix
        computations.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">SIMD Instruction Set Extensions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Extension</th>
            <th className="p-3 border">Vendor</th>
            <th className="p-3 border">Register Width</th>
            <th className="p-3 border">Elements (32-bit)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">MMX</td>
            <td className="p-3 border">Intel</td>
            <td className="p-3 border">64-bit</td>
            <td className="p-3 border">2 floats</td>
          </tr>
          <tr>
            <td className="p-3 border">SSE/SSE2/SSE3/SSE4</td>
            <td className="p-3 border">Intel</td>
            <td className="p-3 border">128-bit</td>
            <td className="p-3 border">4 floats</td>
          </tr>
          <tr>
            <td className="p-3 border">AVX/AVX2</td>
            <td className="p-3 border">Intel/AMD</td>
            <td className="p-3 border">256-bit</td>
            <td className="p-3 border">8 floats</td>
          </tr>
          <tr>
            <td className="p-3 border">AVX-512</td>
            <td className="p-3 border">Intel</td>
            <td className="p-3 border">512-bit</td>
            <td className="p-3 border">16 floats</td>
          </tr>
          <tr>
            <td className="p-3 border">NEON</td>
            <td className="p-3 border">ARM</td>
            <td className="p-3 border">128-bit</td>
            <td className="p-3 border">4 floats</td>
          </tr>
          <tr>
            <td className="p-3 border">SVE/SVE2</td>
            <td className="p-3 border">ARM</td>
            <td className="p-3 border">128-2048 bit</td>
            <td className="p-3 border">4-64 floats</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`SIMD Register Width Comparison:

Scalar (1 element):
+--------+
| float  |  32 bits
+--------+

SSE (4 elements):
+--------+--------+--------+--------+
| float  | float  | float  | float  |  128 bits
+--------+--------+--------+--------+

AVX (8 elements):
+--------+--------+--------+--------+--------+--------+--------+--------+
| float  | float  | float  | float  | float  | float  | float  | float  |  256 bits
+--------+--------+--------+--------+--------+--------+--------+--------+

AVX-512 (16 elements):
+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+
| f32  | f32  | f32  | f32  | f32  | f32  | f32  | f32  | f32  | f32  | f32  | f32  | f32  | f32  | f32  | f32  |
+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+------+
512 bits`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SIMD Programming Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`// Scalar Version (C code)
void add_arrays_scalar(float* a, float* b, float* c, int n) {
    for (int i = 0; i < n; i++) {
        c[i] = a[i] + b[i];  // One addition per iteration
    }
}

// SIMD Version using Intel Intrinsics (AVX)
#include <immintrin.h>

void add_arrays_simd(float* a, float* b, float* c, int n) {
    for (int i = 0; i < n; i += 8) {  // Process 8 floats at a time
        __m256 va = _mm256_loadu_ps(&a[i]);  // Load 8 floats from a
        __m256 vb = _mm256_loadu_ps(&b[i]);  // Load 8 floats from b
        __m256 vc = _mm256_add_ps(va, vb);   // Add 8 pairs simultaneously
        _mm256_storeu_ps(&c[i], vc);         // Store 8 results to c
    }
}

Assembly generated (simplified):
scalar:                     SIMD (AVX):
  LOOP:                       LOOP:
    movss  xmm0, [a+i*4]        vmovups ymm0, [a+i*4]  ; 8 floats
    addss  xmm0, [b+i*4]        vaddps  ymm0, ymm1     ; 8 adds
    movss  [c+i*4], xmm0        vmovups [c+i*4], ymm0  ; 8 stores
    inc i                       add i, 8
    jmp LOOP                    jmp LOOP`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handling Conditional Operations</h2>
    <p className="leading-relaxed">
      SIMD faces challenges with conditional (if-else) operations since all PEs must execute
      the same instruction. This is handled using masking:
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Conditional Operation: C[i] = (A[i] > 5) ? A[i] : B[i]

Problem: Different elements need different operations

Solution: Masking / Predication

A = [2, 7, 3, 9, 5, 8, 1, 6]
B = [10, 20, 30, 40, 50, 60, 70, 80]

Step 1: Compare A > 5
Mask = [0, 1, 0, 1, 0, 1, 0, 1]  (1 where A[i] > 5)

Step 2: Select using mask
When mask[i]=1: use A[i]
When mask[i]=0: use B[i]

C = [10, 7, 30, 9, 50, 8, 70, 6]
     B   A   B   A   B   A   B   A

Note: Both paths are computed, but results are masked
This reduces efficiency when branches are unpredictable`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of SIMD Systems</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Array Processors</td>
            <td className="p-3 border">Multiple ALUs arranged in array, synchronized execution</td>
            <td className="p-3 border">ILLIAC IV, CM-2</td>
          </tr>
          <tr>
            <td className="p-3 border">Vector Processors</td>
            <td className="p-3 border">Pipelined operations on vector registers</td>
            <td className="p-3 border">Cray-1, NEC SX</td>
          </tr>
          <tr>
            <td className="p-3 border">GPU Cores</td>
            <td className="p-3 border">Thousands of simple cores for graphics/compute</td>
            <td className="p-3 border">NVIDIA CUDA, AMD RDNA</td>
          </tr>
          <tr>
            <td className="p-3 border">CPU SIMD Extensions</td>
            <td className="p-3 border">Wide registers in general-purpose CPUs</td>
            <td className="p-3 border">Intel AVX, ARM NEON</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications of SIMD</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Domain</th>
            <th className="p-3 border">Applications</th>
            <th className="p-3 border">Why SIMD?</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Graphics</td>
            <td className="p-3 border">3D rendering, shading, pixel processing</td>
            <td className="p-3 border">Same operations on millions of pixels</td>
          </tr>
          <tr>
            <td className="p-3 border">Image/Video</td>
            <td className="p-3 border">Encoding, filtering, compression</td>
            <td className="p-3 border">Uniform pixel transformations</td>
          </tr>
          <tr>
            <td className="p-3 border">Scientific</td>
            <td className="p-3 border">Matrix operations, simulations</td>
            <td className="p-3 border">Large vector/matrix computations</td>
          </tr>
          <tr>
            <td className="p-3 border">Machine Learning</td>
            <td className="p-3 border">Neural network inference, tensor ops</td>
            <td className="p-3 border">Dot products, convolutions</td>
          </tr>
          <tr>
            <td className="p-3 border">Signal Processing</td>
            <td className="p-3 border">FFT, filtering, audio processing</td>
            <td className="p-3 border">Parallel sample processing</td>
          </tr>
          <tr>
            <td className="p-3 border">Cryptography</td>
            <td className="p-3 border">AES encryption, hashing</td>
            <td className="p-3 border">Block-level parallel operations</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of SIMD</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>High Throughput:</strong> Process multiple data elements with single instruction
        fetch/decode overhead.
      </li>
      <li>
        <strong>Energy Efficient:</strong> One control unit for many PEs reduces power consumption
        per operation.
      </li>
      <li>
        <strong>Simple Programming Model:</strong> Easier than MIMD since all PEs execute same
        instruction.
      </li>
      <li>
        <strong>Memory Bandwidth:</strong> Can load/store multiple elements in one memory access.
      </li>
      <li>
        <strong>Deterministic:</strong> Synchronized execution makes behavior predictable.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of SIMD</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Limited Flexibility:</strong> All PEs must execute same instruction; unsuitable
        for irregular computations.
      </li>
      <li>
        <strong>Branch Divergence:</strong> Conditional operations waste cycles when elements
        take different paths.
      </li>
      <li>
        <strong>Data Alignment:</strong> Misaligned data can reduce performance significantly.
      </li>
      <li>
        <strong>Fixed Width:</strong> Problems that do not fit vector width may have inefficiency.
      </li>
      <li>
        <strong>Code Complexity:</strong> Requires special intrinsics or compiler support.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">SIMD Performance Considerations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Performance Factors in SIMD:

1. Vector Length Utilization
   If vector register holds 8 elements but you only need 6:
   [D0][D1][D2][D3][D4][D5][ ][ ]  <- 25% wasted

2. Memory Alignment
   Aligned access (16/32/64 byte boundary): Fast
   Unaligned access: May require extra cycles

3. Branch Divergence
   if (x[i] > 0) y[i] = a; else y[i] = b;

   With 8 elements, if 4 are >0 and 4 are <=0:
   - Must execute BOTH branches
   - Mask results appropriately
   - ~50% efficiency loss

4. Data Dependencies
   y[i] = x[i] + y[i-1]  <- Cannot vectorize (dependency)
   y[i] = x[i] + z[i]    <- Can vectorize (independent)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>SIMD executes one instruction on multiple data elements simultaneously</li>
        <li>All processing elements operate in lockstep under a single control unit</li>
        <li>Ideal for data-parallel tasks: graphics, multimedia, scientific computing</li>
        <li>Modern CPUs include SIMD extensions: SSE, AVX, NEON</li>
        <li>GPUs are essentially massive SIMD/SIMT machines with thousands of cores</li>
        <li>Challenges include branch divergence and data alignment requirements</li>
        <li>Can provide 2x-16x speedup for suitable workloads</li>
      </ul>
    </div>
  </div>
);

export default SIMD;
