import React from 'react';

const ArraySearching: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Searching in Arrays
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Searching is one of the most fundamental operations in computer science. It involves finding
      a particular element within an array or determining that the element does not exist. The efficiency
      of search algorithms directly impacts the performance of applications that handle large datasets.
    </p>

    <h2 className="text-2xl font-bold mt-6">Types of Search Algorithms</h2>
    <div className="space-y-4 mt-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">1. Linear Search</h4>
        <p>Sequentially checks each element until a match is found or the end is reached. Works on any array.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">2. Binary Search</h4>
        <p>Divides the search interval in half repeatedly. Requires a sorted array.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">3. Jump Search</h4>
        <p>Jumps ahead by fixed steps and then performs linear search. Works on sorted arrays.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">4. Interpolation Search</h4>
        <p>Estimates position based on value distribution. Best for uniformly distributed sorted arrays.</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold">5. Exponential Search</h4>
        <p>Finds range using exponential jumps, then applies binary search. Good for unbounded arrays.</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Linear Search</h2>
    <p className="leading-relaxed">
      The simplest search algorithm that checks every element sequentially until the target is found.
    </p>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold">Visual Example - Search for 30:</h4>
      <div className="font-mono mt-2 space-y-1">
        <p>Array: [10, 25, 30, 45, 50]</p>
        <p>Step 1: Check index 0: 10 != 30</p>
        <p>Step 2: Check index 1: 25 != 30</p>
        <p>Step 3: Check index 2: 30 == 30 (Found at index 2)</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Binary Search</h2>
    <p className="leading-relaxed">
      An efficient algorithm that repeatedly divides the search interval in half. Requires a sorted array.
    </p>
    <div className="bg-gray-50 p-4 rounded-lg mt-4">
      <h4 className="font-bold">Visual Example - Search for 30 in sorted array:</h4>
      <div className="font-mono mt-2 space-y-1">
        <p>Array: [10, 20, 30, 40, 50, 60, 70]</p>
        <p>Step 1: left=0, right=6, mid=3, arr[3]=40 &gt; 30, search left half</p>
        <p>Step 2: left=0, right=2, mid=1, arr[1]=20 &lt; 30, search right half</p>
        <p>Step 3: left=2, right=2, mid=2, arr[2]=30 == 30 (Found at index 2)</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">JavaScript Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Linear Search - O(n)
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Binary Search (Iterative) - O(log n)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// Binary Search (Recursive) - O(log n)
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

// Jump Search - O(sqrt(n))
function jumpSearch(arr, target) {
    const n = arr.length;
    const step = Math.floor(Math.sqrt(n));
    let prev = 0;

    // Jump ahead until we find a block where target might exist
    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        if (prev >= n) {
            return -1;
        }
    }

    // Linear search within the block
    while (arr[prev] < target) {
        prev++;
        if (prev === Math.min(step, n)) {
            return -1;
        }
    }

    if (arr[prev] === target) {
        return prev;
    }
    return -1;
}

// Interpolation Search - O(log log n) for uniform distribution
function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        if (low === high) {
            if (arr[low] === target) return low;
            return -1;
        }

        // Estimate position using interpolation formula
        const pos = low + Math.floor(
            ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
        );

        if (arr[pos] === target) {
            return pos;
        } else if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }
    return -1;
}

// Exponential Search - O(log n)
function exponentialSearch(arr, target) {
    if (arr[0] === target) {
        return 0;
    }

    // Find range for binary search
    let i = 1;
    while (i < arr.length && arr[i] <= target) {
        i *= 2;
    }

    // Binary search in the found range
    return binarySearchInRange(arr, target, Math.floor(i / 2), Math.min(i, arr.length - 1));
}

function binarySearchInRange(arr, target, left, right) {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// Find first occurrence in sorted array
function findFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            result = mid;
            right = mid - 1; // Continue searching left
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}

// Find last occurrence in sorted array
function findLastOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            result = mid;
            left = mid + 1; // Continue searching right
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}

// Usage examples
const arr = [10, 20, 30, 40, 50, 60, 70];
console.log(linearSearch(arr, 40));      // 3
console.log(binarySearch(arr, 40));       // 3
console.log(jumpSearch(arr, 40));         // 3
console.log(interpolationSearch(arr, 40)); // 3
console.log(exponentialSearch(arr, 40));  // 3`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Best Case</th>
            <th className="p-3 border">Average Case</th>
            <th className="p-3 border">Worst Case</th>
            <th className="p-3 border">Space</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Linear Search</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Binary Search</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Jump Search</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(sqrt(n))</td>
            <td className="p-3 border">O(sqrt(n))</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Interpolation Search</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(log log n)</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Exponential Search</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">When to Use Each Algorithm</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Linear Search:</strong> Small arrays, unsorted data, single search operation</li>
      <li><strong>Binary Search:</strong> Large sorted arrays, multiple searches</li>
      <li><strong>Jump Search:</strong> Sorted arrays where jumping is cheaper than division</li>
      <li><strong>Interpolation Search:</strong> Uniformly distributed sorted data</li>
      <li><strong>Exponential Search:</strong> Unbounded/infinite arrays, sorted data</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Use Cases and Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Database Indexing:</strong> B-trees use binary search concepts</li>
      <li><strong>Dictionary/Spell Check:</strong> Binary search for word lookup</li>
      <li><strong>Version Control:</strong> Git bisect uses binary search to find bugs</li>
      <li><strong>Network Routing:</strong> IP address lookup in routing tables</li>
      <li><strong>Game Development:</strong> Finding objects, collision detection</li>
      <li><strong>E-commerce:</strong> Product search and filtering</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Common Interview Problems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Find first and last position of element in sorted array</li>
      <li>Search in rotated sorted array</li>
      <li>Find peak element</li>
      <li>Search in 2D matrix</li>
      <li>Find minimum in rotated sorted array</li>
      <li>Median of two sorted arrays</li>
    </ul>
  </div>
);

export default ArraySearching;
