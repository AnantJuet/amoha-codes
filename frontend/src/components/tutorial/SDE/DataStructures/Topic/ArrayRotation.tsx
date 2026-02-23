import React from 'react';

const ArrayRotation: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Array Rotation Techniques
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Array rotation is the process of shifting elements of an array by a specified number of positions.
      Elements that go beyond the array boundary wrap around to the other end. This is a common operation
      in algorithms, data manipulation, and is frequently asked in coding interviews.
    </p>

    <h2 className="text-2xl font-bold mt-6">Types of Rotation</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Left Rotation (Counter-clockwise)</h4>
        <p>Elements shift to the left, and the leftmost elements wrap around to the right.</p>
        <div className="font-mono mt-2">
          <p>Original: [1, 2, 3, 4, 5]</p>
          <p>Left rotate by 2: [3, 4, 5, 1, 2]</p>
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Right Rotation (Clockwise)</h4>
        <p>Elements shift to the right, and the rightmost elements wrap around to the left.</p>
        <div className="font-mono mt-2">
          <p>Original: [1, 2, 3, 4, 5]</p>
          <p>Right rotate by 2: [4, 5, 1, 2, 3]</p>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Rotation Techniques</h2>

    <h3 className="text-xl font-semibold mt-4">1. One by One Rotation</h3>
    <p className="leading-relaxed">
      Rotate elements one position at a time. Simple but inefficient for large rotations.
    </p>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold">Visual Example - Left rotate by 2:</h4>
      <div className="font-mono mt-2 space-y-1">
        <p>Initial: [1, 2, 3, 4, 5]</p>
        <p>After 1st rotation: [2, 3, 4, 5, 1]</p>
        <p>After 2nd rotation: [3, 4, 5, 1, 2]</p>
      </div>
    </div>

    <h3 className="text-xl font-semibold mt-4">2. Using Temporary Array</h3>
    <p className="leading-relaxed">
      Store elements to be rotated in a temporary array, shift remaining elements, and copy back.
    </p>

    <h3 className="text-xl font-semibold mt-4">3. Juggling Algorithm</h3>
    <p className="leading-relaxed">
      Divide array into GCD(n, d) sets and rotate elements within each set. Efficient with O(n) time and O(1) space.
    </p>

    <h3 className="text-xl font-semibold mt-4">4. Reversal Algorithm (Most Efficient)</h3>
    <p className="leading-relaxed">
      Uses three reversals to achieve rotation. Most elegant and widely used approach.
    </p>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold">Visual Example - Left rotate [1,2,3,4,5] by 2:</h4>
      <div className="font-mono mt-2 space-y-1">
        <p>Step 1: Reverse first d elements: [2, 1, 3, 4, 5]</p>
        <p>Step 2: Reverse remaining elements: [2, 1, 5, 4, 3]</p>
        <p>Step 3: Reverse entire array: [3, 4, 5, 1, 2]</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">JavaScript Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Method 1: One by One Rotation - O(n * d)
function rotateOneByOne(arr, d) {
    d = d % arr.length; // Handle d > length
    for (let i = 0; i < d; i++) {
        const first = arr.shift();
        arr.push(first);
    }
    return arr;
}

// Method 2: Using Temporary Array - O(n)
function rotateWithTemp(arr, d) {
    const n = arr.length;
    d = d % n;
    const temp = arr.slice(0, d);

    // Shift remaining elements
    for (let i = d; i < n; i++) {
        arr[i - d] = arr[i];
    }

    // Copy temp elements to end
    for (let i = 0; i < d; i++) {
        arr[n - d + i] = temp[i];
    }
    return arr;
}

// Method 3: Juggling Algorithm - O(n)
function rotateJuggling(arr, d) {
    const n = arr.length;
    d = d % n;

    // GCD function
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const sets = gcd(n, d);

    for (let i = 0; i < sets; i++) {
        const temp = arr[i];
        let j = i;

        while (true) {
            let k = j + d;
            if (k >= n) k = k - n;
            if (k === i) break;
            arr[j] = arr[k];
            j = k;
        }
        arr[j] = temp;
    }
    return arr;
}

// Method 4: Reversal Algorithm - O(n) - RECOMMENDED
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

function rotateLeftByReversal(arr, d) {
    const n = arr.length;
    d = d % n;

    reverse(arr, 0, d - 1);      // Reverse first d elements
    reverse(arr, d, n - 1);      // Reverse remaining elements
    reverse(arr, 0, n - 1);      // Reverse entire array

    return arr;
}

function rotateRightByReversal(arr, d) {
    const n = arr.length;
    d = d % n;

    reverse(arr, 0, n - 1);      // Reverse entire array
    reverse(arr, 0, d - 1);      // Reverse first d elements
    reverse(arr, d, n - 1);      // Reverse remaining elements

    return arr;
}

// Method 5: Using JavaScript built-in methods - O(n)
function rotateLeftBuiltin(arr, d) {
    d = d % arr.length;
    return [...arr.slice(d), ...arr.slice(0, d)];
}

function rotateRightBuiltin(arr, d) {
    d = d % arr.length;
    return [...arr.slice(-d), ...arr.slice(0, -d)];
}

// Block Swap Algorithm - O(n)
function blockSwap(arr, d) {
    const n = arr.length;
    d = d % n;

    if (d === 0) return arr;

    let a = 0;        // Starting index of first block
    let b = d;        // Starting index of second block
    let blockSize = d;

    while (b < n) {
        // Swap blocks
        for (let i = 0; i < blockSize; i++) {
            [arr[a + i], arr[b + i]] = [arr[b + i], arr[a + i]];
        }

        a += blockSize;
        b += blockSize;

        if (b + blockSize > n) {
            blockSize = n - b;
        }
    }

    // Handle remaining elements recursively
    if (a < n) {
        blockSwap(arr.slice(a), d);
    }

    return arr;
}

// Rotate 2D array/matrix 90 degrees clockwise
function rotateMatrix90Clockwise(matrix) {
    const n = matrix.length;

    // Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }

    return matrix;
}

// Usage examples
const arr1 = [1, 2, 3, 4, 5];
console.log(rotateLeftByReversal([...arr1], 2)); // [3, 4, 5, 1, 2]

const arr2 = [1, 2, 3, 4, 5];
console.log(rotateRightByReversal([...arr2], 2)); // [4, 5, 1, 2, 3]

const arr3 = [1, 2, 3, 4, 5];
console.log(rotateLeftBuiltin(arr3, 2)); // [3, 4, 5, 1, 2]

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(rotateMatrix90Clockwise(matrix));
// [[7, 4, 1], [8, 5, 2], [9, 6, 3]]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Time Complexity</th>
            <th className="p-3 border">Space Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">One by One</td>
            <td className="p-3 border">O(n * d)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Temporary Array</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(d)</td>
          </tr>
          <tr>
            <td className="p-3 border">Juggling Algorithm</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Reversal Algorithm</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Block Swap</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Built-in (slice)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common Interview Problems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Rotate array by K elements</li>
      <li>Find rotation count in rotated sorted array</li>
      <li>Search element in rotated sorted array</li>
      <li>Find minimum in rotated sorted array</li>
      <li>Rotate matrix by 90 degrees</li>
      <li>Cyclically rotate array by one</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Use Cases and Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Image Processing:</strong> Rotating images and matrices</li>
      <li><strong>Cryptography:</strong> Circular shifts in encryption algorithms</li>
      <li><strong>Scheduling:</strong> Round-robin scheduling algorithms</li>
      <li><strong>Circular Buffers:</strong> Data streaming applications</li>
      <li><strong>Game Development:</strong> Rotating game boards, card shuffling</li>
      <li><strong>Text Processing:</strong> String rotation and pattern matching</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Insights</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Always normalize d by taking d % n to handle rotations greater than array length</li>
      <li>Reversal algorithm is the most efficient and easy to remember</li>
      <li>Right rotation by d is equivalent to left rotation by n-d</li>
      <li>For large d values, optimized algorithms significantly outperform naive approaches</li>
    </ul>
  </div>
);

export default ArrayRotation;
