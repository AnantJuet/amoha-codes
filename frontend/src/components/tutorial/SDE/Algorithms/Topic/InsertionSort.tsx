import React from 'react';

const InsertionSort: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Insertion Sort
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Insertion Sort works by building a sorted array one element at a time. It's similar to how you
      sort playing cards in your hands - you pick a card and insert it in its correct position among
      the already sorted cards.
    </p>

    <h2 className="text-2xl font-bold mt-6">How It Works</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Start with the second element (first element is trivially sorted)</li>
      <li>Compare it with elements to its left</li>
      <li>Shift larger elements one position right</li>
      <li>Insert the element in its correct position</li>
      <li>Repeat for all elements</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Array: [23, 1, 10, 5, 2]</p>
      <div className="mt-2 space-y-1 text-sm">
        <p><strong>Initial:</strong> [<span className="text-green-600">23</span>] | 1, 10, 5, 2 (23 is sorted)</p>
        <p><strong>Insert 1:</strong> [<span className="text-green-600">1, 23</span>] | 10, 5, 2</p>
        <p><strong>Insert 10:</strong> [<span className="text-green-600">1, 10, 23</span>] | 5, 2</p>
        <p><strong>Insert 5:</strong> [<span className="text-green-600">1, 5, 10, 23</span>] | 2</p>
        <p><strong>Insert 2:</strong> [<span className="text-green-600">1, 2, 5, 10, 23</span>]</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];  // Element to be inserted
        let j = i - 1;

        // Shift elements greater than key to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert key at correct position
        arr[j + 1] = key;
    }

    return arr;
}

// Example
const arr = [12, 11, 13, 5, 6];
console.log("Sorted:", insertionSort(arr));
// Output: [5, 6, 11, 12, 13]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Case</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">When</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr className="bg-green-50">
            <td className="p-3 border">Best Case</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Array is already sorted</td>
          </tr>
          <tr>
            <td className="p-3 border">Average Case</td>
            <td className="p-3 border">O(n²)</td>
            <td className="p-3 border">Random order</td>
          </tr>
          <tr className="bg-red-50">
            <td className="p-3 border">Worst Case</td>
            <td className="p-3 border">O(n²)</td>
            <td className="p-3 border">Array is reverse sorted</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2"><strong>Space Complexity:</strong> O(1) - In-place sorting</p>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Adaptive:</strong> O(n) time for nearly sorted arrays</li>
      <li><strong>Stable:</strong> Maintains relative order of equal elements</li>
      <li><strong>In-place:</strong> Only O(1) extra space needed</li>
      <li><strong>Online:</strong> Can sort as data is received</li>
      <li>Efficient for small datasets</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Use Cases</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Small arrays (often faster than Quick Sort for n {"<"} 10-20)</li>
      <li>Nearly sorted data</li>
      <li>Online sorting (data streaming)</li>
      <li>As the final step in hybrid algorithms (like Timsort)</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Fun Fact:</strong> Insertion Sort is used in hybrid sorting algorithms. Python's Timsort
        and Java's Arrays.sort() use Insertion Sort for small subarrays because of its low overhead.
      </p>
    </div>
  </div>
);

export default InsertionSort;
