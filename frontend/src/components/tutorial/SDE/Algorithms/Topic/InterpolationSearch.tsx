import React from 'react';

const InterpolationSearch: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Interpolation Search
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Interpolation Search is an improved variant of Binary Search that works on uniformly distributed
      sorted arrays. Instead of always going to the middle, it estimates the position of the target
      based on its value, similar to how humans search for a word in a dictionary.
    </p>

    <h2 className="text-2xl font-bold mt-6">Prerequisites</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Array must be sorted in ascending order</li>
      <li>Elements should be uniformly distributed for best performance</li>
      <li>Works best with numeric data</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Idea</h2>
    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
      <p>
        <strong>Binary Search:</strong> Always checks the middle: <code>mid = (low + high) / 2</code>
      </p>
      <p className="mt-2">
        <strong>Interpolation Search:</strong> Estimates position based on value:
      </p>
      <p className="font-mono bg-white p-2 rounded mt-2">
        pos = low + [(target - arr[low]) * (high - low)] / [arr[high] - arr[low]]
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Algorithm Steps</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Calculate estimated position using interpolation formula</li>
      <li>If arr[pos] equals target, return pos</li>
      <li>If arr[pos] {"<"} target, search in [pos+1, high]</li>
      <li>If arr[pos] {">"} target, search in [low, pos-1]</li>
      <li>Repeat until found or low {">"} high</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Array: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]</p>
      <p>Target: 70</p>
      <div className="mt-4 font-mono text-sm">
        <p className="text-blue-600">Iteration 1: low=0, high=9</p>
        <p>arr[low]=10, arr[high]=100, target=70</p>
        <p>pos = 0 + [(70-10) * (9-0)] / [100-10]</p>
        <p>pos = 0 + [60 * 9] / 90 = 0 + 6 = 6</p>
        <p>arr[6] = 70 = target</p>
        <p className="text-green-600 font-bold mt-2">Found at index 6 in just 1 iteration!</p>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Binary Search would have taken 3-4 iterations for the same search.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Handle edge case of single element
        if (low === high) {
            return arr[low] === target ? low : -1;
        }

        // Calculate the estimated position
        const pos = low + Math.floor(
            ((target - arr[low]) * (high - low)) /
            (arr[high] - arr[low])
        );

        if (arr[pos] === target) {
            return pos;
        }

        if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }

    return -1; // Not found
}

// Example with uniformly distributed data
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(interpolationSearch(arr, 70)); // Output: 6
console.log(interpolationSearch(arr, 25)); // Output: -1`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recursive Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function interpolationSearchRecursive(arr, target, low, high) {
    if (low > high || target < arr[low] || target > arr[high]) {
        return -1;
    }

    if (low === high) {
        return arr[low] === target ? low : -1;
    }

    // Calculate estimated position
    const pos = low + Math.floor(
        ((target - arr[low]) * (high - low)) /
        (arr[high] - arr[low])
    );

    if (arr[pos] === target) {
        return pos;
    }

    if (arr[pos] < target) {
        return interpolationSearchRecursive(arr, target, pos + 1, high);
    }

    return interpolationSearchRecursive(arr, target, low, pos - 1);
}

// Usage
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(interpolationSearchRecursive(arr, 70, 0, arr.length - 1));`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Case</th>
            <th className="p-3 border">Time Complexity</th>
            <th className="p-3 border">Condition</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Best Case</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Target at estimated position</td>
          </tr>
          <tr>
            <td className="p-3 border">Average Case</td>
            <td className="p-3 border">O(log log n)</td>
            <td className="p-3 border">Uniformly distributed data</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst Case</td>
            <td className="p-3 border">O(n)</td>
            <td className="p-3 border">Exponentially distributed data</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2"><strong>Space Complexity:</strong> O(1) iterative, O(log log n) recursive</p>

    <h2 className="text-2xl font-bold mt-6">When Distribution Matters</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Good: Uniform Distribution</h4>
        <p className="text-sm mt-1">[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]</p>
        <p className="text-sm mt-1">O(log log n) performance</p>
      </div>
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">Bad: Non-Uniform Distribution</h4>
        <p className="text-sm mt-1">[1, 2, 3, 4, 5, 1000, 2000, 3000]</p>
        <p className="text-sm mt-1">Can degrade to O(n)</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Interpolation vs Binary Search</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Binary Search</th>
            <th className="p-3 border">Interpolation Search</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Position Calculation</td>
            <td className="p-3 border">Always middle</td>
            <td className="p-3 border">Value-based estimation</td>
          </tr>
          <tr>
            <td className="p-3 border">Best Case</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">O(1)</td>
          </tr>
          <tr>
            <td className="p-3 border">Average Case</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(log log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Worst Case</td>
            <td className="p-3 border">O(log n)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Extremely fast O(log log n) for uniformly distributed data</li>
      <li>Mimics natural human search behavior</li>
      <li>Fewer comparisons than binary search for large uniform datasets</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Poor performance on non-uniform distributions</li>
      <li>More complex position calculation</li>
      <li>Requires numeric keys for interpolation formula</li>
      <li>Can cause division by zero if arr[high] = arr[low]</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Searching in phone directories</li>
      <li>Database queries on indexed numeric columns</li>
      <li>Searching sorted log files by timestamp</li>
      <li>Dictionary-style lookups</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Tip:</strong> Use Interpolation Search when you know your data is uniformly distributed.
        For unknown distributions, Binary Search is safer with guaranteed O(log n) performance.
      </p>
    </div>
  </div>
);

export default InterpolationSearch;
