import React from 'react';

const MergeSortDAC: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Merge Sort as Divide and Conquer
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Merge Sort is the quintessential example of Divide and Conquer. It divides the array into
      halves, recursively sorts each half, and then merges the sorted halves. It guarantees
      O(n log n) time complexity in all cases.
    </p>

    <h2 className="text-2xl font-bold mt-6">D&C Breakdown</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Divide</h4>
        <p className="mt-2 text-sm">
          Split the array into two halves at the middle point.
          This takes O(1) time.
        </p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Conquer</h4>
        <p className="mt-2 text-sm">
          Recursively sort both halves. Base case is when
          the array has 0 or 1 element (already sorted).
        </p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">Combine</h4>
        <p className="mt-2 text-sm">
          Merge the two sorted halves into one sorted array.
          This is the key step, taking O(n) time.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complete Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function mergeSort(arr) {
    // Base case: array of 0 or 1 element is sorted
    if (arr.length <= 1) {
        return arr;
    }

    // DIVIDE: Split into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // CONQUER: Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // COMBINE: Merge sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    // Compare elements from both arrays
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

// Example
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
// Output: [3, 9, 10, 27, 38, 43, 82]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visualization</h2>
    <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm font-mono">{`Initial: [38, 27, 43, 3, 9, 82, 10]

                    [38, 27, 43, 3, 9, 82, 10]
                           /            \\
              [38, 27, 43, 3]         [9, 82, 10]
                 /       \\              /      \\
           [38, 27]    [43, 3]      [9, 82]   [10]
            /    \\      /    \\       /    \\     |
          [38]  [27]  [43]  [3]   [9]   [82]  [10]
            \\    /      \\    /     \\    /      |
           [27, 38]    [3, 43]    [9, 82]    [10]
                 \\      /              \\      /
             [3, 27, 38, 43]       [9, 10, 82]
                      \\                /
              [3, 9, 10, 27, 38, 43, 82]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">In-Place Merge Sort (Space Optimized)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function mergeSortInPlace(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const mid = Math.floor(left + (right - left) / 2);

        // Sort first and second halves
        mergeSortInPlace(arr, left, mid);
        mergeSortInPlace(arr, mid + 1, right);

        // Merge the sorted halves
        mergeInPlace(arr, left, mid, right);
    }
    return arr;
}

function mergeInPlace(arr, left, mid, right) {
    // Create temp arrays
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }

    // Copy remaining elements
    while (i < leftArr.length) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    while (j < rightArr.length) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recurrence Relation</h2>
    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
      <p className="font-mono text-center text-lg">T(n) = 2T(n/2) + O(n)</p>
      <ul className="list-disc list-inside mt-4 space-y-1">
        <li><strong>2T(n/2):</strong> Two subproblems, each of size n/2</li>
        <li><strong>O(n):</strong> Linear time to merge two halves</li>
        <li><strong>By Master Theorem:</strong> a=2, b=2, f(n)=n</li>
        <li><strong>log_b(a) = log_2(2) = 1, f(n) = n^1</strong></li>
        <li><strong>Case 2:</strong> T(n) = O(n log n)</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Merge Operation Detail</h2>
    <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm font-mono">{`Merging [27, 38] and [3, 43]:

Step 1: Compare 27 and 3
        3 < 27, pick 3
        Result: [3]

Step 2: Compare 27 and 43
        27 < 43, pick 27
        Result: [3, 27]

Step 3: Compare 38 and 43
        38 < 43, pick 38
        Result: [3, 27, 38]

Step 4: Right array remaining
        Add 43
        Result: [3, 27, 38, 43]`}</pre>
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
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Average</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2 text-sm"><strong>Note:</strong> O(n) auxiliary space for merge operation. O(log n) for recursion stack.</p>

    <h2 className="text-2xl font-bold mt-6">Counting Inversions with Merge Sort</h2>
    <p className="leading-relaxed">
      An inversion is a pair (i, j) where i {"<"} j but arr[i] {">"} arr[j]. Merge sort can count inversions in O(n log n).
    </p>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function countInversions(arr) {
    let count = 0;

    function mergeSortCount(arr) {
        if (arr.length <= 1) return arr;

        const mid = Math.floor(arr.length / 2);
        const left = mergeSortCount(arr.slice(0, mid));
        const right = mergeSortCount(arr.slice(mid));

        return mergeCount(left, right);
    }

    function mergeCount(left, right) {
        const result = [];
        let i = 0, j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i++]);
            } else {
                result.push(right[j++]);
                // All remaining elements in left are greater than right[j]
                count += (left.length - i);
            }
        }

        return [...result, ...left.slice(i), ...right.slice(j)];
    }

    mergeSortCount(arr);
    return count;
}

console.log(countInversions([2, 4, 1, 3, 5])); // 3`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Merge Sort vs Quick Sort</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Merge Sort</th>
            <th className="p-3 border">Quick Sort</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Worst Case</td>
            <td className="p-3 border">O(n log n)</td>
            <td className="p-3 border">O(n^2)</td>
          </tr>
          <tr>
            <td className="p-3 border">Space</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Stable</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border">Cache Performance</td>
            <td className="p-3 border">Poor (not in-place)</td>
            <td className="p-3 border">Good (in-place)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Guaranteed O(n log n):</strong> Unlike Quick Sort, no worst case degradation</li>
      <li><strong>Stable Sort:</strong> Preserves relative order of equal elements</li>
      <li><strong>Parallelizable:</strong> Subproblems are independent</li>
      <li><strong>External Sorting:</strong> Excellent for sorting data that doesn't fit in memory</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>External sorting (sorting large files)</li>
      <li>Linked list sorting (natural fit)</li>
      <li>Counting inversions</li>
      <li>When stability is required</li>
      <li>Parallel sorting implementations</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Key Insight:</strong> Merge Sort's power comes from the merge operation.
        Combining two sorted arrays into one takes linear time, and doing this O(log n)
        times gives us O(n log n) total. The recursion tree has log n levels, each doing O(n) work.
      </p>
    </div>
  </div>
);

export default MergeSortDAC;
