import React from 'react';

const BinarySearchDAC: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Binary Search as Divide and Conquer
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Binary Search is the simplest and most elegant example of the Divide and Conquer paradigm.
      It finds a target element in a sorted array by repeatedly dividing the search space in half,
      achieving O(log n) time complexity.
    </p>

    <h2 className="text-2xl font-bold mt-6">D&C Perspective</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-bold text-blue-800">Divide</h4>
        <p className="mt-2 text-sm">
          Compare target with middle element. Divide array into left half
          (elements {"<"} mid) and right half (elements {">"} mid).
        </p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-bold text-green-800">Conquer</h4>
        <p className="mt-2 text-sm">
          Recursively search only in the relevant half where the target
          could exist. Only ONE subproblem to solve.
        </p>
      </div>
      <div className="bg-purple-50 p-4 rounded-lg">
        <h4 className="font-bold text-purple-800">Combine</h4>
        <p className="mt-2 text-sm">
          No combining step needed! The answer from the subproblem IS
          the answer to the original problem.
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recursive Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function binarySearchRecursive(arr, target, low, high) {
    // Base case: element not found
    if (low > high) {
        return -1;
    }

    // DIVIDE: Find middle point
    const mid = Math.floor(low + (high - low) / 2);

    // Found the target
    if (arr[mid] === target) {
        return mid;
    }

    // CONQUER: Search in appropriate half
    if (arr[mid] > target) {
        // Target is in left half
        return binarySearchRecursive(arr, target, low, mid - 1);
    } else {
        // Target is in right half
        return binarySearchRecursive(arr, target, mid + 1, high);
    }
}

// Usage
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.log(binarySearchRecursive(arr, 23, 0, arr.length - 1)); // 5`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Iterative Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function binarySearchIterative(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        // Avoid overflow with this formula
        const mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] === target) {
            return mid;  // Found
        } else if (arr[mid] < target) {
            low = mid + 1;  // Search right half
        } else {
            high = mid - 1;  // Search left half
        }
    }

    return -1;  // Not found
}

// Time: O(log n)
// Space: O(1) - no recursion overhead`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visualization</h2>
    <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
      <pre className="text-sm font-mono">{`Array: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
Target: 23

Step 1: low=0, high=9, mid=4
        arr[4]=16, 23 > 16, search right
        [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
                         ^mid  <-------->
                               search here

Step 2: low=5, high=9, mid=7
        arr[7]=56, 23 < 56, search left
        [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
                         <------>  ^mid
                         search here

Step 3: low=5, high=6, mid=5
        arr[5]=23, FOUND!
        [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
                         ^mid
                         FOUND at index 5`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recurrence Relation</h2>
    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
      <p className="font-mono">T(n) = T(n/2) + O(1)</p>
      <ul className="list-disc list-inside mt-4 space-y-1">
        <li><strong>T(n/2):</strong> One subproblem of half the size</li>
        <li><strong>O(1):</strong> Constant work for comparison and division</li>
        <li><strong>Solution:</strong> T(n) = O(log n) by Master Theorem (Case 2)</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Important Variations</h2>

    <h3 className="text-xl font-semibold mt-4">Lower Bound (First Occurrence)</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function lowerBound(arr, target) {
    let low = 0, high = arr.length;

    while (low < high) {
        const mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid;  // Don't exclude mid
        }
    }

    return low;  // First element >= target
}

// Returns index of first element >= target
// Or arr.length if no such element exists`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Upper Bound (After Last Occurrence)</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function upperBound(arr, target) {
    let low = 0, high = arr.length;

    while (low < high) {
        const mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] <= target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;  // First element > target
}

// Returns index of first element > target
// Or arr.length if no such element exists`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Search in Rotated Sorted Array</h3>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function searchRotated(arr, target) {
    let low = 0, high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] === target) return mid;

        // Determine which half is sorted
        if (arr[low] <= arr[mid]) {
            // Left half is sorted
            if (target >= arr[low] && target < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            // Right half is sorted
            if (target > arr[mid] && target <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
}

// Example: [4,5,6,7,0,1,2], target=0 returns 4`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Binary Search on Answer</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p>Binary search can find answers when:</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>The answer lies in a sorted range</li>
        <li>You can check if a value is valid/possible</li>
        <li>The property is monotonic (false...false, true...true)</li>
      </ul>
    </div>

    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Example: Find square root of n (integer part)
function sqrt(n) {
    if (n < 2) return n;

    let low = 1, high = Math.floor(n / 2);

    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        const square = mid * mid;

        if (square === n) {
            return mid;
        } else if (square < n) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return high;  // Largest integer whose square <= n
}

console.log(sqrt(8)); // 2
console.log(sqrt(16)); // 4`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Case</th>
            <th className="p-3 border">Time</th>
            <th className="p-3 border">Space (Recursive)</th>
            <th className="p-3 border">Space (Iterative)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Best</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Average</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common Pitfalls</h2>
    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Integer Overflow:</strong> Use <code>mid = low + (high - low) / 2</code>
          instead of <code>(low + high) / 2</code>
        </li>
        <li>
          <strong>Infinite Loop:</strong> Ensure search space shrinks every iteration
        </li>
        <li>
          <strong>Off-by-One:</strong> Be careful with {"<"} vs {"<="} and mid+1 vs mid
        </li>
        <li>
          <strong>Not Sorted:</strong> Binary search requires sorted array!
        </li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Searching in sorted arrays and collections</li>
      <li>Finding boundaries (first/last occurrence)</li>
      <li>Optimization problems (minimize/maximize)</li>
      <li>Database indexing (B-trees use similar concept)</li>
      <li>Git bisect for finding buggy commits</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Key Insight:</strong> Binary search is unique among D&C algorithms because it
        only needs to solve ONE subproblem (not two or more). This makes it O(log n) instead of
        O(n log n). The key is eliminating half the search space at each step.
      </p>
    </div>
  </div>
);

export default BinarySearchDAC;
