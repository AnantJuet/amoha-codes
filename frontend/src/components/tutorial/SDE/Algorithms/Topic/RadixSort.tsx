import React from 'react';

const RadixSort: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Radix Sort
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Radix Sort is a non-comparison-based sorting algorithm that sorts numbers by processing individual
      digits. It processes digits from least significant to most significant (LSD) or vice versa (MSD),
      using a stable sorting algorithm (typically Counting Sort) as a subroutine.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Characteristics</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Non-comparison based:</strong> Sorts by digit positions</li>
      <li><strong>Stable:</strong> Maintains relative order (required for correctness)</li>
      <li><strong>Linear time:</strong> O(d * (n + k)) where d is number of digits</li>
      <li><strong>Works on:</strong> Integers, strings, or any data with fixed-length keys</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">LSD vs MSD Radix Sort</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">LSD (Least Significant Digit)</h4>
        <ul className="text-sm mt-2 space-y-1">
          <li>Processes from rightmost digit</li>
          <li>Requires stable sort subroutine</li>
          <li>Simpler implementation</li>
          <li>Better for fixed-length keys</li>
        </ul>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">MSD (Most Significant Digit)</h4>
        <ul className="text-sm mt-2 space-y-1">
          <li>Processes from leftmost digit</li>
          <li>Can use recursion</li>
          <li>Better for variable-length keys</li>
          <li>Used in string sorting</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps (LSD)</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Find the maximum number to determine number of digits</li>
      <li>For each digit position (from least to most significant):</li>
      <li className="ml-6">Use Counting Sort to sort array by current digit</li>
      <li>Repeat until all digit positions are processed</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Input: [170, 45, 75, 90, 802, 24, 2, 66]</p>
      <div className="mt-4 font-mono text-sm space-y-4">
        <div>
          <p className="text-blue-600 font-bold">Pass 1: Sort by 1s place (units digit)</p>
          <p>17<span className="text-red-500 font-bold">0</span>, 9<span className="text-red-500 font-bold">0</span>, 80<span className="text-red-500 font-bold">2</span>, <span className="text-red-500 font-bold">2</span>, 2<span className="text-red-500 font-bold">4</span>, 4<span className="text-red-500 font-bold">5</span>, 7<span className="text-red-500 font-bold">5</span>, 6<span className="text-red-500 font-bold">6</span></p>
          <p className="text-gray-600">Result: [170, 90, 802, 2, 24, 45, 75, 66]</p>
        </div>
        <div>
          <p className="text-blue-600 font-bold">Pass 2: Sort by 10s place (tens digit)</p>
          <p>8<span className="text-red-500 font-bold">0</span>2, <span className="text-red-500 font-bold">0</span>2, <span className="text-red-500 font-bold">2</span>4, 4<span className="text-red-500 font-bold">5</span>, 6<span className="text-red-500 font-bold">6</span>, 1<span className="text-red-500 font-bold">7</span>0, 7<span className="text-red-500 font-bold">5</span>, 9<span className="text-red-500 font-bold">0</span></p>
          <p className="text-gray-600">Result: [802, 2, 24, 45, 66, 170, 75, 90]</p>
        </div>
        <div>
          <p className="text-blue-600 font-bold">Pass 3: Sort by 100s place (hundreds digit)</p>
          <p><span className="text-red-500 font-bold">0</span>02, <span className="text-red-500 font-bold">0</span>24, <span className="text-red-500 font-bold">0</span>45, <span className="text-red-500 font-bold">0</span>66, <span className="text-red-500 font-bold">0</span>75, <span className="text-red-500 font-bold">0</span>90, <span className="text-red-500 font-bold">1</span>70, <span className="text-red-500 font-bold">8</span>02</p>
          <p className="text-gray-600">Result: [2, 24, 45, 66, 75, 90, 170, 802]</p>
        </div>
        <p className="text-green-600 font-bold mt-2">Final Sorted Array: [2, 24, 45, 66, 75, 90, 170, 802]</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation (LSD Radix Sort)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigits(arr) {
    let max = 0;
    for (let num of arr) {
        max = Math.max(max, digitCount(num));
    }
    return max;
}

function radixSort(arr) {
    const maxDigitCount = maxDigits(arr);

    for (let k = 0; k < maxDigitCount; k++) {
        // Create 10 buckets (0-9)
        const buckets = Array.from({ length: 10 }, () => []);

        // Place numbers in buckets based on digit at position k
        for (let num of arr) {
            const digit = getDigit(num, k);
            buckets[digit].push(num);
        }

        // Flatten buckets back into array
        arr = [].concat(...buckets);
    }

    return arr;
}

// Example
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr));
// Output: [2, 24, 45, 66, 75, 90, 170, 802]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Radix Sort with Counting Sort</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function countingSortByDigit(arr, exp) {
    const n = arr.length;
    const output = new Array(n);
    const count = new Array(10).fill(0);

    // Count occurrences of each digit
    for (let i = 0; i < n; i++) {
        const digit = Math.floor(arr[i] / exp) % 10;
        count[digit]++;
    }

    // Cumulative count
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build output array (right to left for stability)
    for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // Copy to original array
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function radixSortOptimized(arr) {
    const max = Math.max(...arr);

    // Apply counting sort for each digit
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSortByDigit(arr, exp);
    }

    return arr;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Metric</th>
            <th className="p-3 border">Complexity</th>
            <th className="p-3 border">Notes</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Time (All Cases)</td>
            <td className="p-3 border">O(d * (n + k))</td>
            <td className="p-3 border">d = digits, k = base (10)</td>
          </tr>
          <tr>
            <td className="p-3 border">Space</td>
            <td className="p-3 border">O(n + k)</td>
            <td className="p-3 border">For counting sort subroutine</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2 text-sm text-gray-600">
      When d is constant and k = O(n), time complexity becomes O(n)
    </p>

    <h2 className="text-2xl font-bold mt-6">Radix Sort vs Comparison Sorts</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">When Radix Wins</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Radix Sort</td>
            <td className="p-3 border">O(d * n)</td>
            <td className="p-3 border">-</td>
          </tr>
          <tr>
            <td className="p-3 border">Quick Sort</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">When d {"<"} log n</td>
          </tr>
          <tr>
            <td className="p-3 border">Merge Sort</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">When d {"<"} log n</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Linear time:</strong> O(d * n) can beat O(n log n) for fixed digit length</li>
      <li><strong>Stable:</strong> Preserves relative order of equal elements</li>
      <li><strong>Efficient for fixed-length integers:</strong> Excellent for 32-bit or 64-bit integers</li>
      <li><strong>Parallelizable:</strong> Each digit pass can be parallelized</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Extra space:</strong> Requires O(n + k) auxiliary space</li>
      <li><strong>Limited data types:</strong> Primarily for integers and strings</li>
      <li><strong>Digit dependency:</strong> Performance depends on number of digits</li>
      <li><strong>Not in-place:</strong> Cannot sort without extra memory</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Sorting large arrays of integers</li>
      <li>Sorting strings lexicographically</li>
      <li>Suffix array construction</li>
      <li>Sorting fixed-length records (like phone numbers, SSNs)</li>
      <li>External sorting of large datasets</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> Radix Sort is faster than comparison-based sorts when the number of digits (d)
        is constant or grows slowly with n. For 32-bit integers, d = 10 (with base 10), making it
        competitive with O(n log n) algorithms for large arrays.
      </p>
    </div>
  </div>
);

export default RadixSort;
