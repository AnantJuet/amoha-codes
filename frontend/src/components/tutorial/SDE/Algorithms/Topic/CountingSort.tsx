import React from 'react';

const CountingSort: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Counting Sort
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Counting Sort is a non-comparison-based sorting algorithm that works by counting the occurrences
      of each unique element. It is extremely efficient when the range of input values (k) is not
      significantly larger than the number of elements (n).
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Characteristics</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Non-comparison based:</strong> Does not compare elements directly</li>
      <li><strong>Stable:</strong> Maintains relative order of equal elements</li>
      <li><strong>Linear time:</strong> O(n + k) complexity</li>
      <li><strong>Limited range:</strong> Works best for integers with small range</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Find the maximum element in the array</li>
      <li>Create a count array of size (max + 1) initialized to 0</li>
      <li>Count occurrences of each element</li>
      <li>Modify count array to store cumulative counts</li>
      <li>Build the output array using the count array</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Input: [4, 2, 2, 8, 3, 3, 1]</p>
      <div className="mt-4 font-mono text-sm space-y-3">
        <div>
          <p className="text-blue-600 font-bold">Step 1: Count occurrences</p>
          <p>Index:  0  1  2  3  4  5  6  7  8</p>
          <p>Count: [0, 1, 2, 2, 1, 0, 0, 0, 1]</p>
        </div>
        <div>
          <p className="text-blue-600 font-bold">Step 2: Cumulative count</p>
          <p>Index:  0  1  2  3  4  5  6  7  8</p>
          <p>Count: [0, 1, 3, 5, 6, 6, 6, 6, 7]</p>
        </div>
        <div>
          <p className="text-green-600 font-bold">Step 3: Build output (right to left)</p>
          <p>Process 1: count[1]=1, output[0]=1, count[1]=0</p>
          <p>Process 3: count[3]=5, output[4]=3, count[3]=4</p>
          <p>Process 3: count[3]=4, output[3]=3, count[3]=3</p>
          <p>Process 8: count[8]=7, output[6]=8, count[8]=6</p>
          <p>Process 2: count[2]=3, output[2]=2, count[2]=2</p>
          <p>Process 2: count[2]=2, output[1]=2, count[2]=1</p>
          <p>Process 4: count[4]=6, output[5]=4, count[4]=5</p>
        </div>
        <p className="text-green-600 font-bold mt-2">Output: [1, 2, 2, 3, 3, 4, 8]</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function countingSort(arr) {
    if (arr.length <= 1) return arr;

    // Find the maximum element
    const max = Math.max(...arr);

    // Create count array and initialize with 0
    const count = new Array(max + 1).fill(0);

    // Store count of each element
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }

    // Modify count array to store cumulative count
    for (let i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }

    // Build output array (traverse input right to left for stability)
    const output = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    return output;
}

// Example
const arr = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(arr)); // Output: [1, 2, 2, 3, 3, 4, 8]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Handling Negative Numbers</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function countingSortWithNegatives(arr) {
    if (arr.length <= 1) return arr;

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const range = max - min + 1;

    const count = new Array(range).fill(0);
    const output = new Array(arr.length);

    // Count occurrences (offset by min)
    for (let i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }

    // Cumulative count
    for (let i = 1; i < range; i++) {
        count[i] += count[i - 1];
    }

    // Build output array
    for (let i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }

    return output;
}

// Example with negative numbers
const arr = [4, -2, 2, -8, 3, 3, 1];
console.log(countingSortWithNegatives(arr));
// Output: [-8, -2, 1, 2, 3, 3, 4]`}</pre>
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
            <td className="p-3 border">O(n + k)</td>
            <td className="p-3 border">k = range of input</td>
          </tr>
          <tr>
            <td className="p-3 border">Space</td>
            <td className="p-3 border">O(n + k)</td>
            <td className="p-3 border">Output + count arrays</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">When to Use Counting Sort</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Good Use Cases</h4>
        <ul className="text-sm mt-2 space-y-1">
          <li>Small range of integers (k is O(n))</li>
          <li>When stability is required</li>
          <li>As a subroutine in Radix Sort</li>
          <li>Sorting character arrays</li>
        </ul>
      </div>
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">Poor Use Cases</h4>
        <ul className="text-sm mt-2 space-y-1">
          <li>Large range of values (k {">"}{">"}n)</li>
          <li>Floating point numbers</li>
          <li>When space is limited</li>
          <li>Strings or complex objects</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Counting Sort vs Comparison Sorts</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Space</th>
            <th className="p-3 border">Stable</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Counting Sort</td>
            <td className="p-3 border">O(n + k)</td>
            <td className="p-3 border">O(n + k)</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Merge Sort</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Quick Sort</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">No</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Linear time:</strong> O(n + k) beats O(n log n) comparison sorts</li>
      <li><strong>Stable:</strong> Preserves relative order of equal elements</li>
      <li><strong>Simple:</strong> Easy to understand and implement</li>
      <li><strong>No comparisons:</strong> Counts elements directly</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Space intensive:</strong> Requires O(k) extra space for count array</li>
      <li><strong>Limited to integers:</strong> Cannot sort floats or strings directly</li>
      <li><strong>Range dependent:</strong> Inefficient when k is much larger than n</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Sorting characters in a string</li>
      <li>Radix Sort subroutine</li>
      <li>Counting frequencies in data analysis</li>
      <li>Sorting exam scores (0-100 range)</li>
      <li>Histogram computation</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Tip:</strong> Counting Sort is most effective when the range of input (k) is
        proportional to the number of elements (n). If k = O(n), the time complexity is O(n).
      </p>
    </div>
  </div>
);

export default CountingSort;
