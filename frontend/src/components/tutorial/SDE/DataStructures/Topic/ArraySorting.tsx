import React from 'react';

const ArraySorting: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Sorting Arrays
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Sorting is the process of arranging elements in a specific order, typically ascending or descending.
      It is one of the most fundamental operations in computer science and is crucial for efficient
      searching, data organization, and many algorithmic solutions.
    </p>

    <h2 className="text-2xl font-bold mt-6">Categories of Sorting Algorithms</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Comparison-based Sorting</h4>
        <p>Elements are compared to determine their order. Examples: Bubble Sort, Quick Sort, Merge Sort</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Non-comparison Sorting</h4>
        <p>Uses element properties like digits or counts. Examples: Counting Sort, Radix Sort, Bucket Sort</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">Stable vs Unstable</h4>
        <p>Stable sorting preserves relative order of equal elements. Merge Sort is stable; Quick Sort is not.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">In-place vs Out-of-place</h4>
        <p>In-place uses O(1) extra space. Quick Sort is in-place; Merge Sort requires O(n) extra space.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">1. Bubble Sort</h2>
    <p className="leading-relaxed">
      Repeatedly swaps adjacent elements if they are in wrong order. Simple but inefficient.
    </p>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold">Visual Example:</h4>
      <div className="font-mono mt-2 space-y-1">
        <p>Initial: [64, 34, 25, 12, 22]</p>
        <p>Pass 1: [34, 25, 12, 22, 64] - 64 bubbles to end</p>
        <p>Pass 2: [25, 12, 22, 34, 64] - 34 bubbles up</p>
        <p>Pass 3: [12, 22, 25, 34, 64] - 25 bubbles up</p>
        <p>Pass 4: [12, 22, 25, 34, 64] - Sorted</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">2. Selection Sort</h2>
    <p className="leading-relaxed">
      Finds minimum element and places it at the beginning, then repeats for remaining elements.
    </p>

    <h2 className="text-2xl font-bold mt-6">3. Insertion Sort</h2>
    <p className="leading-relaxed">
      Builds sorted array one element at a time by inserting each element into its correct position.
    </p>

    <h2 className="text-2xl font-bold mt-6">4. Merge Sort</h2>
    <p className="leading-relaxed">
      Divide and conquer algorithm that divides array into halves, sorts them, and merges back.
    </p>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold">Visual Example:</h4>
      <div className="font-mono mt-2 space-y-1">
        <p>Divide: [38, 27, 43, 3] -&gt; [38, 27] and [43, 3]</p>
        <p>Divide: [38, 27] -&gt; [38] and [27]</p>
        <p>Merge: [38] and [27] -&gt; [27, 38]</p>
        <p>Divide: [43, 3] -&gt; [43] and [3]</p>
        <p>Merge: [43] and [3] -&gt; [3, 43]</p>
        <p>Merge: [27, 38] and [3, 43] -&gt; [3, 27, 38, 43]</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">5. Quick Sort</h2>
    <p className="leading-relaxed">
      Picks a pivot element and partitions array around it. Elements smaller go left, larger go right.
    </p>

    <h2 className="text-2xl font-bold mt-6">JavaScript Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Bubble Sort - O(n^2)
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break; // Optimization: already sorted
    }
    return arr;
}

// Selection Sort - O(n^2)
function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    return arr;
}

// Insertion Sort - O(n^2)
function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
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

// Merge Sort - O(n log n)
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Quick Sort - O(n log n) average
function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// Heap Sort - O(n log n)
function heapSort(arr) {
    const n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Counting Sort - O(n + k)
function countingSort(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = max - min + 1;
    const count = new Array(range).fill(0);
    const output = new Array(arr.length);

    // Count occurrences
    for (const num of arr) {
        count[num - min]++;
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

// Usage examples
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort([...arr]));    // [11, 12, 22, 25, 34, 64, 90]
console.log(selectionSort([...arr])); // [11, 12, 22, 25, 34, 64, 90]
console.log(insertionSort([...arr])); // [11, 12, 22, 25, 34, 64, 90]
console.log(mergeSort([...arr]));     // [11, 12, 22, 25, 34, 64, 90]
console.log(quickSort([...arr]));     // [11, 12, 22, 25, 34, 64, 90]
console.log(heapSort([...arr]));      // [11, 12, 22, 25, 34, 64, 90]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Best</th>
            <th className="p-3 border">Average</th>
            <th className="p-3 border">Worst</th>
            <th className="p-3 border">Space</th>
            <th className="p-3 border">Stable</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Bubble Sort</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Selection Sort</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Insertion Sort</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Merge Sort</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">Quick Sort</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Heap Sort</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Counting Sort</td>
            <td className="p-3 border">O(n+k)</td>
            <td className="p-3 border">O(n+k)</td>
            <td className="p-3 border">O(n+k)</td>
            <td className="p-3 border">O(k)</td>
            <td className="p-3 border">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Choosing the Right Algorithm</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Small arrays (n &lt; 50):</strong> Insertion Sort - low overhead</li>
      <li><strong>Nearly sorted arrays:</strong> Insertion Sort - O(n) best case</li>
      <li><strong>General purpose:</strong> Quick Sort or Merge Sort</li>
      <li><strong>Guaranteed O(n log n):</strong> Merge Sort or Heap Sort</li>
      <li><strong>Limited memory:</strong> Heap Sort - O(1) extra space</li>
      <li><strong>Stability required:</strong> Merge Sort</li>
      <li><strong>Integer keys with small range:</strong> Counting Sort</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Use Cases and Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Database Operations:</strong> ORDER BY clauses use sorting</li>
      <li><strong>Search Optimization:</strong> Binary search requires sorted data</li>
      <li><strong>Data Analysis:</strong> Finding median, percentiles, rankings</li>
      <li><strong>File Systems:</strong> Directory listings, file organization</li>
      <li><strong>Priority Scheduling:</strong> Task scheduling in operating systems</li>
      <li><strong>E-commerce:</strong> Product sorting by price, rating, date</li>
    </ul>
  </div>
);

export default ArraySorting;
