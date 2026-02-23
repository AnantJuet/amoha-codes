import React from 'react';

const StrassenMatrix: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Strassen's Matrix Multiplication
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Strassen's algorithm is a Divide and Conquer method for matrix multiplication that
      reduces the time complexity from O(n^3) to approximately O(n^2.807). It achieves this
      by cleverly reducing 8 recursive multiplications to 7 using algebraic tricks.
    </p>

    <h2 className="text-2xl font-bold mt-6">Standard Matrix Multiplication</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p>For two n x n matrices A and B, the standard algorithm:</p>
      <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
        <pre className="text-sm">{`// Standard O(n^3) multiplication
function standardMultiply(A, B) {
    const n = A.length;
    const C = Array(n).fill(null).map(() => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return C;
}

// Time: O(n^3) - 8 multiplications for 2x2`}</pre>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">The Key Insight</h2>
    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
      <p className="font-semibold">Divide matrices into 4 quadrants:</p>
      <pre className="text-sm font-mono mt-2">{`A = | A11  A12 |    B = | B11  B12 |    C = | C11  C12 |
    | A21  A22 |        | B21  B22 |        | C21  C22 |

Standard: C11 = A11*B11 + A12*B21  (8 multiplications)
          C12 = A11*B12 + A12*B22
          C21 = A21*B11 + A22*B21
          C22 = A21*B12 + A22*B22

Strassen: Uses 7 multiplications with clever formulas!`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Strassen's 7 Products</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// The 7 magic products
M1 = (A11 + A22) * (B11 + B22)
M2 = (A21 + A22) * B11
M3 = A11 * (B12 - B22)
M4 = A22 * (B21 - B11)
M5 = (A11 + A12) * B22
M6 = (A21 - A11) * (B11 + B12)
M7 = (A12 - A22) * (B21 + B22)

// Construct result from these 7 products
C11 = M1 + M4 - M5 + M7
C12 = M3 + M5
C21 = M2 + M4
C22 = M1 - M2 + M3 + M6`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complete Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function strassen(A, B) {
    const n = A.length;

    // Base case: 1x1 matrix
    if (n === 1) {
        return [[A[0][0] * B[0][0]]];
    }

    // For simplicity, assume n is power of 2
    const mid = n / 2;

    // Divide matrices into quadrants
    const A11 = subMatrix(A, 0, 0, mid);
    const A12 = subMatrix(A, 0, mid, mid);
    const A21 = subMatrix(A, mid, 0, mid);
    const A22 = subMatrix(A, mid, mid, mid);

    const B11 = subMatrix(B, 0, 0, mid);
    const B12 = subMatrix(B, 0, mid, mid);
    const B21 = subMatrix(B, mid, 0, mid);
    const B22 = subMatrix(B, mid, mid, mid);

    // Calculate the 7 products
    const M1 = strassen(add(A11, A22), add(B11, B22));
    const M2 = strassen(add(A21, A22), B11);
    const M3 = strassen(A11, subtract(B12, B22));
    const M4 = strassen(A22, subtract(B21, B11));
    const M5 = strassen(add(A11, A12), B22);
    const M6 = strassen(subtract(A21, A11), add(B11, B12));
    const M7 = strassen(subtract(A12, A22), add(B21, B22));

    // Construct result
    const C11 = add(subtract(add(M1, M4), M5), M7);
    const C12 = add(M3, M5);
    const C21 = add(M2, M4);
    const C22 = add(subtract(add(M1, M3), M2), M6);

    // Combine quadrants
    return combine(C11, C12, C21, C22);
}

// Helper functions
function subMatrix(M, rowStart, colStart, size) {
    const result = [];
    for (let i = 0; i < size; i++) {
        result[i] = [];
        for (let j = 0; j < size; j++) {
            result[i][j] = M[rowStart + i][colStart + j];
        }
    }
    return result;
}

function add(A, B) {
    const n = A.length;
    const C = [];
    for (let i = 0; i < n; i++) {
        C[i] = [];
        for (let j = 0; j < n; j++) {
            C[i][j] = A[i][j] + B[i][j];
        }
    }
    return C;
}

function subtract(A, B) {
    const n = A.length;
    const C = [];
    for (let i = 0; i < n; i++) {
        C[i] = [];
        for (let j = 0; j < n; j++) {
            C[i][j] = A[i][j] - B[i][j];
        }
    }
    return C;
}

function combine(C11, C12, C21, C22) {
    const n = C11.length;
    const C = [];
    for (let i = 0; i < 2 * n; i++) {
        C[i] = [];
        for (let j = 0; j < 2 * n; j++) {
            if (i < n && j < n) C[i][j] = C11[i][j];
            else if (i < n) C[i][j] = C12[i][j - n];
            else if (j < n) C[i][j] = C21[i - n][j];
            else C[i][j] = C22[i - n][j - n];
        }
    }
    return C;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recurrence Relation</h2>
    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
      <div className="space-y-4">
        <div>
          <p className="font-semibold">Standard Divide & Conquer:</p>
          <p className="font-mono">T(n) = 8T(n/2) + O(n^2)</p>
          <p className="text-sm">8 subproblems, O(n^2) for addition</p>
          <p className="text-sm">Solves to: O(n^3) - same as naive!</p>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Strassen's Algorithm:</p>
          <p className="font-mono">T(n) = 7T(n/2) + O(n^2)</p>
          <p className="text-sm">7 subproblems (the key improvement!)</p>
          <p className="text-sm">Solves to: O(n^log_2(7)) = O(n^2.807)</p>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Why 7 Instead of 8?</h2>
    <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm">{`Verification that formulas are correct:

C11 = M1 + M4 - M5 + M7
    = (A11+A22)(B11+B22) + A22(B21-B11) - (A11+A12)B22 + (A12-A22)(B21+B22)

Expanding:
    = A11*B11 + A11*B22 + A22*B11 + A22*B22
      + A22*B21 - A22*B11
      - A11*B22 - A12*B22
      + A12*B21 + A12*B22 - A22*B21 - A22*B22

Simplifying (many terms cancel):
    = A11*B11 + A12*B21

This equals the standard C11 = A11*B11 + A12*B21 !`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Space</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Standard</td>
            <td className="p-3 border">O(n^3)</td>
            <td className="p-3 border">O(n^2)</td>
          </tr>
          <tr>
            <td className="p-3 border">Strassen</td>
            <td className="p-3 border">O(n^2.807)</td>
            <td className="p-3 border">O(n^2)</td>
          </tr>
          <tr>
            <td className="p-3 border">Coppersmith-Winograd</td>
            <td className="p-3 border">O(n^2.376)</td>
            <td className="p-3 border">O(n^2)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Practical Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm font-mono">{`For n = 1024:

Standard: 1024^3 = 1,073,741,824 operations

Strassen: 1024^2.807 = ~312,000,000 operations

Speedup: ~3.4x faster!

For n = 4096:
Standard: ~68 billion operations
Strassen: ~8 billion operations
Speedup: ~8.5x faster!`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Practical Considerations</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Advantages</h4>
        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
          <li>Faster for large matrices</li>
          <li>Asymptotically better complexity</li>
          <li>Foundation for even faster algorithms</li>
        </ul>
      </div>
      <div className="bg-red-50 p-4 rounded-lg">
        <h4 className="font-bold text-red-800">Disadvantages</h4>
        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
          <li>High constant factors (many additions)</li>
          <li>Numerical instability (subtractions)</li>
          <li>Only faster for n {">"} ~100-1000</li>
          <li>Complex implementation</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">When to Use</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Large matrices (typically n {">"} 500)</li>
      <li>When exact arithmetic is used (integers)</li>
      <li>Scientific computing with very large matrices</li>
      <li>When asymptotic improvement matters</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Hybrid Approach</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// In practice, switch to standard multiplication
// when matrices become small enough

function strassenHybrid(A, B, threshold = 64) {
    const n = A.length;

    // Use standard multiplication for small matrices
    if (n <= threshold) {
        return standardMultiply(A, B);
    }

    // Otherwise, use Strassen's algorithm
    // ... (same as before, but recursive calls
    //      use strassenHybrid with threshold)
}

// This combines the best of both worlds:
// - Low overhead for small matrices
// - Asymptotic improvement for large matrices`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Related Algorithms</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Coppersmith-Winograd:</strong> O(n^2.376) but impractical constants</li>
      <li><strong>Karatsuba:</strong> Similar D&C idea for integer multiplication</li>
      <li><strong>FFT-based:</strong> Used for polynomial and large integer multiplication</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Key Insight:</strong> Strassen's algorithm shows that reducing the number of
        recursive calls (from 8 to 7) can significantly improve asymptotic complexity, even
        though it increases the number of additions. This trade-off is at the heart of many
        fast algorithms in computer science.
      </p>
    </div>
  </div>
);

export default StrassenMatrix;
