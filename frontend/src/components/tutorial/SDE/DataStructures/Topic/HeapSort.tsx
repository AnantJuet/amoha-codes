import React from 'react';

const HeapSort: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Heap Sort
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure.
      It divides the input into a sorted and an unsorted region, and iteratively shrinks the
      unsorted region by extracting the largest/smallest element and moving it to the sorted region.
    </p>

    <h2 className="text-2xl font-bold mt-6">How Heap Sort Works</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Build a max heap from the input array</li>
      <li>The largest element is now at the root (index 0)</li>
      <li>Swap the root with the last element of the heap</li>
      <li>Reduce the heap size by 1 (exclude the sorted element)</li>
      <li>Heapify the root to restore max heap property</li>
      <li>Repeat steps 3-5 until the heap size is 1</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function heapSort(arr) {
    const n = arr.length;

    // Step 1: Build max heap
    // Start from last non-leaf node
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Step 2: Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Move current root (max) to end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Heapify reduced heap (size = i)
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // Check if left child is larger
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // Check if right child is larger
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Example usage
const arr = [12, 11, 13, 5, 6, 7];
heapSort(arr);
console.log(arr); // [5, 6, 7, 11, 12, 13]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Step-by-Step Example</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`Input: [4, 10, 3, 5, 1]

Step 1: Build Max Heap
[4, 10, 3, 5, 1] -> [10, 5, 3, 4, 1]
       10
      /  \\
     5    3
    / \\
   4   1

Step 2: Sort by extracting max

Iteration 1:
- Swap root(10) with last(1): [1, 5, 3, 4, 10]
- Heapify [1, 5, 3, 4] (size=4): [5, 4, 3, 1, 10]
       5
      / \\
     4   3
    /
   1

Iteration 2:
- Swap root(5) with last unsorted(1): [1, 4, 3, 5, 10]
- Heapify [1, 4, 3] (size=3): [4, 1, 3, 5, 10]
       4
      / \\
     1   3

Iteration 3:
- Swap root(4) with last unsorted(3): [3, 1, 4, 5, 10]
- Heapify [3, 1] (size=2): [3, 1, 4, 5, 10]
       3
      /
     1

Iteration 4:
- Swap root(3) with last unsorted(1): [1, 3, 4, 5, 10]
- Size = 1, done!

Final Sorted Array: [1, 3, 4, 5, 10]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Time Complexity</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Case</th>
            <th className="p-3 border">Time Complexity</th>
            <th className="p-3 border">Explanation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Best Case</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">Even if sorted, still builds heap</td>
          </tr>
          <tr>
            <td className="p-3 border">Average Case</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">Build heap O(n) + n extractions O(log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst Case</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">Consistent performance</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Space Complexity</h2>
    <p className="leading-relaxed">
      O(1) - Heap sort is an in-place sorting algorithm. It only uses a constant amount of
      extra space for variables.
    </p>

    <h2 className="text-2xl font-bold mt-6">Comparison with Other Sorting Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Time (Worst)</th>
            <th className="p-3 border">Space</th>
            <th className="p-3 border">Stable</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Heap Sort</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Quick Sort</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Merge Sort</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Insertion Sort</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages of Heap Sort</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Guaranteed O(n log n):</strong> Unlike Quick Sort, no worst-case O(n^2)</li>
      <li><strong>In-place:</strong> O(1) extra space unlike Merge Sort</li>
      <li><strong>No recursion issues:</strong> Can be implemented iteratively</li>
      <li><strong>Good for external sorting:</strong> Efficient for large datasets</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages of Heap Sort</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Not stable:</strong> Equal elements may change relative order</li>
      <li><strong>Poor cache performance:</strong> Non-contiguous memory access</li>
      <li><strong>Slower in practice:</strong> Higher constants than Quick Sort</li>
      <li><strong>Not adaptive:</strong> Same time even for nearly sorted arrays</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">When to Use Heap Sort</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>When guaranteed O(n log n) is required</li>
      <li>When memory is limited (in-place sorting needed)</li>
      <li>When stability is not required</li>
      <li>For finding k largest/smallest elements</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Points to Remember</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Heap sort combines building a heap and extracting elements</li>
      <li>Uses max heap for ascending order, min heap for descending</li>
      <li>Time complexity is always O(n log n)</li>
      <li>Space complexity is O(1) - truly in-place</li>
      <li>Not stable - relative order of equal elements not preserved</li>
    </ul>
  </div>
);

export default HeapSort;
