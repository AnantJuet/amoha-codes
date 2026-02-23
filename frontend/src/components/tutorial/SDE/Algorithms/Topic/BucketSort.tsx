import React from 'react';

const BucketSort: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Bucket Sort
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Bucket Sort is a distribution-based sorting algorithm that distributes elements into a number
      of buckets, sorts each bucket individually (using another sorting algorithm or recursively),
      and then concatenates the buckets. It works best when input is uniformly distributed over a range.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Characteristics</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Distribution-based:</strong> Scatters elements into buckets</li>
      <li><strong>Hybrid approach:</strong> Uses another sort within buckets</li>
      <li><strong>Linear average time:</strong> O(n) with uniform distribution</li>
      <li><strong>Best for:</strong> Floating-point numbers in range [0, 1)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Create n empty buckets (or a suitable number)</li>
      <li>Put each element into its corresponding bucket based on value</li>
      <li>Sort individual buckets (using insertion sort or any other algorithm)</li>
      <li>Concatenate all buckets in order</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Bucket Calculation</h2>
    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
      <p>
        <strong>For values in [0, 1):</strong> <code>bucketIndex = floor(n * value)</code>
      </p>
      <p className="mt-2">
        <strong>For any range [min, max]:</strong>
      </p>
      <p className="font-mono bg-white p-2 rounded mt-1">
        bucketIndex = floor(n * (value - min) / (max - min + 1))
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Input: [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68]</p>
      <p className="text-sm text-gray-600">Using 10 buckets (n=10)</p>
      <div className="mt-4 font-mono text-sm space-y-3">
        <div>
          <p className="text-blue-600 font-bold">Step 1: Distribute into buckets</p>
          <p>Bucket 0: []</p>
          <p>Bucket 1: [0.17, 0.12]</p>
          <p>Bucket 2: [0.26, 0.21, 0.23]</p>
          <p>Bucket 3: [0.39]</p>
          <p>Bucket 4-5: []</p>
          <p>Bucket 6: [0.68]</p>
          <p>Bucket 7: [0.78, 0.72]</p>
          <p>Bucket 8: []</p>
          <p>Bucket 9: [0.94]</p>
        </div>
        <div>
          <p className="text-green-600 font-bold">Step 2: Sort each bucket</p>
          <p>Bucket 1: [0.12, 0.17]</p>
          <p>Bucket 2: [0.21, 0.23, 0.26]</p>
          <p>Bucket 7: [0.72, 0.78]</p>
        </div>
        <div>
          <p className="text-purple-600 font-bold">Step 3: Concatenate buckets</p>
          <p className="text-green-600 font-bold">Output: [0.12, 0.17, 0.21, 0.23, 0.26, 0.39, 0.68, 0.72, 0.78, 0.94]</p>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation (Floating Point [0, 1))</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function bucketSort(arr) {
    const n = arr.length;
    if (n <= 1) return arr;

    // Create n empty buckets
    const buckets = Array.from({ length: n }, () => []);

    // Put elements into buckets
    for (let i = 0; i < n; i++) {
        const bucketIndex = Math.floor(n * arr[i]);
        buckets[bucketIndex].push(arr[i]);
    }

    // Sort individual buckets using insertion sort
    for (let i = 0; i < n; i++) {
        buckets[i].sort((a, b) => a - b);
    }

    // Concatenate all buckets
    return buckets.flat();
}

// Example with values in [0, 1)
const arr = [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68];
console.log(bucketSort(arr));
// Output: [0.12, 0.17, 0.21, 0.23, 0.26, 0.39, 0.68, 0.72, 0.78, 0.94]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Generic Implementation (Any Range)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function bucketSortGeneric(arr, bucketCount = null) {
    const n = arr.length;
    if (n <= 1) return arr;

    // Find min and max
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // Number of buckets
    const numBuckets = bucketCount || n;
    const range = (max - min) / numBuckets + 0.0001; // Avoid division issues

    // Create empty buckets
    const buckets = Array.from({ length: numBuckets }, () => []);

    // Distribute elements into buckets
    for (let num of arr) {
        const bucketIndex = Math.floor((num - min) / range);
        // Handle edge case where num === max
        const index = Math.min(bucketIndex, numBuckets - 1);
        buckets[index].push(num);
    }

    // Sort each bucket and concatenate
    const result = [];
    for (let bucket of buckets) {
        // Using built-in sort for simplicity
        bucket.sort((a, b) => a - b);
        result.push(...bucket);
    }

    return result;
}

// Example with integers
const arr = [42, 32, 33, 52, 37, 47, 51];
console.log(bucketSortGeneric(arr));
// Output: [32, 33, 37, 42, 47, 51, 52]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Bucket Sort with Custom Insertion Sort</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

function bucketSortWithInsertion(arr) {
    const n = arr.length;
    if (n <= 1) return arr;

    const buckets = Array.from({ length: n }, () => []);

    for (let num of arr) {
        const idx = Math.min(Math.floor(n * num), n - 1);
        buckets[idx].push(num);
    }

    // Sort each bucket with insertion sort
    for (let bucket of buckets) {
        insertionSort(bucket);
    }

    return buckets.flat();
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Case</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Condition</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Best Case</td>
            <td className="p-3 border">O(n + k)</td>
            <td className="p-3 border">Uniform distribution, k buckets</td>
          </tr>
          <tr>
            <td className="p-3 border">Average Case</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Uniform distribution</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst Case</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">All elements in one bucket</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2"><strong>Space Complexity:</strong> O(n + k) for buckets and elements</p>

    <h2 className="text-2xl font-bold mt-6">When Distribution Matters</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Ideal: Uniform Distribution</h4>
        <p className="text-sm mt-1">Elements spread evenly across buckets</p>
        <p className="text-sm">Each bucket has O(1) elements</p>
        <p className="text-sm text-green-600 mt-1">Time: O(n)</p>
      </div>
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">Worst: Skewed Distribution</h4>
        <p className="text-sm mt-1">Most elements in one bucket</p>
        <p className="text-sm">Degrades to the bucket sort algorithm</p>
        <p className="text-sm text-red-600 mt-1">Time: O(n^2) with insertion sort</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Bucket Sort vs Other Sorts</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Best For</th>
            <th className="p-3 border">Time</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Bucket Sort</td>
            <td className="p-3 border">Uniform floating-point data</td>
            <td className="p-3 border">O(n) average</td>
          </tr>
          <tr>
            <td className="p-3 border">Counting Sort</td>
            <td className="p-3 border">Small range integers</td>
            <td className="p-3 border">O(n + k)</td>
          </tr>
          <tr>
            <td className="p-3 border">Radix Sort</td>
            <td className="p-3 border">Fixed-length integers/strings</td>
            <td className="p-3 border">O(d * n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Linear time:</strong> O(n) for uniformly distributed data</li>
      <li><strong>Stable:</strong> Can be implemented as a stable sort</li>
      <li><strong>Works with floats:</strong> Unlike Counting Sort</li>
      <li><strong>Parallelizable:</strong> Buckets can be sorted independently</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Distribution dependent:</strong> Poor performance on skewed data</li>
      <li><strong>Extra space:</strong> Requires O(n) additional memory</li>
      <li><strong>Bucket count:</strong> Choosing optimal bucket count is tricky</li>
      <li><strong>Not in-place:</strong> Requires auxiliary storage</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Sorting floating-point numbers uniformly distributed in [0, 1)</li>
      <li>External sorting of large datasets</li>
      <li>Histogram-based operations</li>
      <li>Sorting when data distribution is known to be uniform</li>
      <li>Computational geometry algorithms</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Tip:</strong> Bucket Sort is optimal when you know your data is uniformly distributed.
        The key to good performance is choosing the right number of buckets and ensuring elements are
        distributed evenly across them.
      </p>
    </div>
  </div>
);

export default BucketSort;
