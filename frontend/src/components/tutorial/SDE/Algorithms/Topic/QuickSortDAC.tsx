import React from 'react';

const QuickSortDAC: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Quick Sort as Divide and Conquer
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Quick Sort is another classic Divide and Conquer algorithm. It works by selecting a 'pivot'
      element and partitioning the array so that smaller elements go left and larger elements go
      right. The partition step does the heavy lifting, unlike Merge Sort where merging is key.
    </p>

    <h2 className="text-2xl font-bold mt-6">D&C Breakdown</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Divide</h4>
        <p className="mt-2 text-sm">
          Choose a pivot. Partition array into elements {"<"} pivot and elements {">"} pivot.
          This is the key step (O(n)).
        </p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Conquer</h4>
        <p className="mt-2 text-sm">
          Recursively sort the left partition (elements {"<"} pivot) and right
          partition (elements {">"} pivot).
        </p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">Combine</h4>
        <p className="mt-2 text-sm">
          No combining needed! After partitioning and sorting subarrays,
          the array is automatically sorted.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complete Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // DIVIDE: Partition and get pivot position
        const pivotIndex = partition(arr, low, high);

        // CONQUER: Recursively sort both halves
        quickSort(arr, low, pivotIndex - 1);   // Left of pivot
        quickSort(arr, pivotIndex + 1, high);  // Right of pivot
    }
    return arr;
}

function partition(arr, low, high) {
    // Choose last element as pivot
    const pivot = arr[high];
    let i = low - 1;  // Index of smaller element

    for (let j = low; j < high; j++) {
        // If current element is smaller than pivot
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap
        }
    }

    // Place pivot in correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;  // Return pivot index
}

// Example
const arr = [10, 7, 8, 9, 1, 5];
console.log(quickSort(arr));  // [1, 5, 7, 8, 9, 10]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Partition Visualization</h2>
    <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm font-mono">{`Array: [10, 7, 8, 9, 1, 5], pivot = 5

Initial: i = -1, j = 0
[10, 7, 8, 9, 1, 5]
 ^j              ^pivot

j=0: 10 >= 5, no swap
j=1: 7 >= 5, no swap
j=2: 8 >= 5, no swap
j=3: 9 >= 5, no swap
j=4: 1 < 5, i++, swap arr[0] and arr[4]

[1, 7, 8, 9, 10, 5]
 ^i            ^pivot

Final: swap arr[i+1] and pivot
[1, 5, 8, 9, 10, 7]  <- Wait, this isn't right!

Let me redo:
[1, 7, 8, 9, 10, 5]
    ^i+1        ^pivot
Swap arr[1] and arr[5]
[1, 5, 8, 9, 10, 7]

Hmm, the array: [10, 7, 8, 9, 1, 5]
j=4: arr[4]=1 < 5, i=0, swap arr[0],arr[4]
Result: [1, 7, 8, 9, 10, 5]
Final: swap arr[1] and arr[5]
Result: [1, 5, 8, 9, 10, 7]

Actually correct trace:
[10, 7, 8, 9, 1, 5]  pivot=5, i=-1
j=0: 10>5, skip
j=1: 7>5, skip
j=2: 8>5, skip
j=3: 9>5, skip
j=4: 1<5, i=0, swap(0,4): [1, 7, 8, 9, 10, 5]
Swap pivot: swap(1,5): [1, 5, 8, 9, 10, 7]

Wait, 7 is wrong. Let me be more careful:
[10, 7, 8, 9, 1, 5]
After j=4 swap: [1, 7, 8, 9, 10, 5]  i=0
Final swap(i+1=1, high=5): [1, 5, 8, 9, 10, 7]

The issue: 7 moved to end. Let me verify:
Before: [1, 7, 8, 9, 10, 5]
Swap indices 1 and 5:
arr[1]=7, arr[5]=5
After: [1, 5, 8, 9, 10, 7]

Pivot 5 is now at index 1.
Left: [1] (sorted)
Right: [8, 9, 10, 7] (needs sorting)

This is correct! 5 is in its final position.`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Pivot Selection Strategies</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Last Element (Simple)</h4>
        <pre className="text-xs font-mono mt-2">{`const pivot = arr[high];`}</pre>
        <p className="text-sm mt-2">Simple but poor for sorted arrays</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Random Element</h4>
        <pre className="text-xs font-mono mt-2">{`const randIdx = low + Math.floor(
    Math.random() * (high - low + 1)
);
[arr[randIdx], arr[high]] =
    [arr[high], arr[randIdx]];`}</pre>
        <p className="text-sm mt-2">Good average case performance</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">Median of Three</h4>
        <pre className="text-xs font-mono mt-2">{`// Choose median of first, middle, last
const mid = Math.floor((low + high) / 2);
// Find median and use as pivot`}</pre>
        <p className="text-sm mt-2">Avoids worst case on sorted input</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-bold">First Element</h4>
        <pre className="text-xs font-mono mt-2">{`const pivot = arr[low];`}</pre>
        <p className="text-sm mt-2">Simple but worst for sorted arrays</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Randomized Quick Sort</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function quickSortRandomized(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Randomize pivot
        const randomIndex = low + Math.floor(Math.random() * (high - low + 1));
        [arr[randomIndex], arr[high]] = [arr[high], arr[randomIndex]];

        const pivotIndex = partition(arr, low, high);

        quickSortRandomized(arr, low, pivotIndex - 1);
        quickSortRandomized(arr, pivotIndex + 1, high);
    }
    return arr;
}

// Expected time: O(n log n)
// Worst case still O(n^2) but very unlikely`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Three-Way Partition (Dutch National Flag)</h2>
    <p className="leading-relaxed">
      Useful when array has many duplicates. Partitions into {"<"}, =, {">"} pivot.
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function quickSort3Way(arr, low = 0, high = arr.length - 1) {
    if (low >= high) return arr;

    const pivot = arr[low];
    let lt = low;      // arr[low..lt-1] < pivot
    let gt = high;     // arr[gt+1..high] > pivot
    let i = low + 1;   // arr[lt..i-1] == pivot

    while (i <= gt) {
        if (arr[i] < pivot) {
            [arr[lt], arr[i]] = [arr[i], arr[lt]];
            lt++;
            i++;
        } else if (arr[i] > pivot) {
            [arr[i], arr[gt]] = [arr[gt], arr[i]];
            gt--;
        } else {
            i++;
        }
    }

    // Now arr[low..lt-1] < pivot = arr[lt..gt] < arr[gt+1..high]
    quickSort3Way(arr, low, lt - 1);
    quickSort3Way(arr, gt + 1, high);

    return arr;
}

// Great for arrays with many duplicates
console.log(quickSort3Way([4, 2, 4, 1, 4, 3, 4]));`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recurrence Relations</h2>
    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
      <div className="space-y-4">
        <div>
          <p className="font-semibold">Best/Average Case:</p>
          <p className="font-mono">T(n) = 2T(n/2) + O(n) = O(n log n)</p>
          <p className="text-sm">Balanced partition every time</p>
        </div>
        <div>
          <p className="font-semibold">Worst Case:</p>
          <p className="font-mono">T(n) = T(n-1) + O(n) = O(n^2)</p>
          <p className="text-sm">Completely unbalanced partition (sorted array with last element pivot)</p>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Case</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Space</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Best</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Average</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2 text-sm"><strong>Space:</strong> O(log n) for recursion stack in average case, O(n) in worst case.</p>

    <h2 className="text-2xl font-bold mt-6">Quick Sort vs Merge Sort</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Quick Sort</th>
            <th className="p-3 border">Merge Sort</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Key Operation</td>
            <td className="p-3 border">Partition (before recursion)</td>
            <td className="p-3 border">Merge (after recursion)</td>
          </tr>
          <tr>
            <td className="p-3 border">In-Place</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No (needs O(n) space)</td>
          </tr>
          <tr>
            <td className="p-3 border">Stable</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Cache Performance</td>
            <td className="p-3 border">Better</td>
            <td className="p-3 border">Worse</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>General-purpose sorting (default in many libraries)</li>
      <li>Quick Select for finding k-th smallest element</li>
      <li>When space is a concern (in-place)</li>
      <li>When average case matters more than worst case</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Key Insight:</strong> Unlike Merge Sort where work is done during combining,
        Quick Sort does work during dividing (partition). The pivot ends up in its final sorted
        position after partition, and everything left is smaller, everything right is larger.
      </p>
    </div>
  </div>
);

export default QuickSortDAC;
