import React from 'react';

const QuickSort: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Quick Sort
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Quick Sort is a highly efficient sorting algorithm based on the Divide and Conquer paradigm.
      It picks an element as a pivot and partitions the array around it, placing the pivot in its
      correct sorted position.
    </p>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li><strong>Choose a Pivot:</strong> Select an element (first, last, random, or median)</li>
      <li><strong>Partition:</strong> Rearrange elements so smaller ones are left of pivot, larger ones are right</li>
      <li><strong>Recursively Sort:</strong> Apply Quick Sort to left and right subarrays</li>
      <li><strong>Base Case:</strong> Stop when subarray has 0 or 1 element</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Pivot Selection Strategies</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">First/Last Element</h4>
        <p className="text-sm mt-1">Simple but leads to O(n²) for sorted arrays</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Random Element</h4>
        <p className="text-sm mt-1">Preferred - avoids worst case patterns</p>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Median of Three</h4>
        <p className="text-sm mt-1">Median of first, middle, last elements</p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
        <h4 className="font-bold text-purple-800">True Median</h4>
        <p className="text-sm mt-1">Optimal but finding median takes O(n)</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Partitioning Example (Lomuto)</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Array: [10, 80, 30, 90, 40, 50, 70] (pivot = 70)</p>
      <div className="mt-2 space-y-1 text-sm">
        <p>i = -1, j = 0: arr[0]=10 {"<"} 70 → i=0, swap → [10, 80, 30, 90, 40, 50, 70]</p>
        <p>i = 0, j = 1: arr[1]=80 {">"} 70 → no swap</p>
        <p>i = 0, j = 2: arr[2]=30 {"<"} 70 → i=1, swap → [10, 30, 80, 90, 40, 50, 70]</p>
        <p>i = 1, j = 3: arr[3]=90 {">"} 70 → no swap</p>
        <p>i = 1, j = 4: arr[4]=40 {"<"} 70 → i=2, swap → [10, 30, 40, 90, 80, 50, 70]</p>
        <p>i = 2, j = 5: arr[5]=50 {"<"} 70 → i=3, swap → [10, 30, 40, 50, 80, 90, 70]</p>
        <p className="mt-2">Finally swap pivot: [10, 30, 40, 50, <strong className="text-green-600">70</strong>, 90, 80]</p>
        <p className="text-blue-600">Pivot 70 is now at correct position (index 4)</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Partition and get pivot index
        const pivotIndex = partition(arr, low, high);

        // Recursively sort left and right of pivot
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];  // Using last element as pivot
    let i = low - 1;  // Index of smaller element

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap
        }
    }

    // Place pivot in correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// Example
const arr = [10, 80, 30, 90, 40, 50, 70];
console.log("Sorted:", quickSort(arr));
// Output: [10, 30, 40, 50, 70, 80, 90]`}</pre>
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
          <tr>
            <td className="p-3 border">Best Case</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">Pivot divides array into equal halves</td>
          </tr>
          <tr>
            <td className="p-3 border">Average Case</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">Random distribution of elements</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst Case</td>
            <td className="p-3 border">O(n²)</td>
            <td className="p-3 border">Already sorted or reverse sorted array</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2"><strong>Space Complexity:</strong> O(log n) average, O(n) worst case (recursion stack)</p>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>In-Place:</strong> Requires only O(log n) extra space</li>
      <li><strong>Cache Efficient:</strong> Good locality of reference</li>
      <li><strong>Fast in Practice:</strong> Often faster than Merge Sort due to smaller constants</li>
      <li><strong>Tail Recursive:</strong> Can be optimized for tail call</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Unstable:</strong> Does not preserve relative order of equal elements</li>
      <li><strong>Worst Case:</strong> O(n²) for sorted/nearly sorted arrays with bad pivot</li>
      <li><strong>Not Adaptive:</strong> Doesn't benefit from partially sorted data</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Quick Sort vs Merge Sort</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Quick Sort</th>
            <th className="p-3 border">Merge Sort</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Space</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Stability</td>
            <td className="p-3 border">Unstable</td>
            <td className="p-3 border">Stable</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst Case</td>
            <td className="p-3 border">O(n²)</td>
            <td className="p-3 border">O(n log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Cache</td>
            <td className="p-3 border">Better</td>
            <td className="p-3 border">Worse</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Tip:</strong> Use random pivot selection to avoid worst-case scenarios. Most standard
        library implementations use hybrid approaches like IntroSort (Quick Sort + Heap Sort).
      </p>
    </div>
  </div>
);

export default QuickSort;
