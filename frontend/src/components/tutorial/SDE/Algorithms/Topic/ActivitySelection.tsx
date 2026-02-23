import React from 'react';

const ActivitySelection: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Activity Selection Problem
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Activity Selection Problem is a classic greedy algorithm problem. Given a set of activities
      with start and finish times, the goal is to select the maximum number of non-overlapping activities
      that a single person can perform.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Statement</h2>
    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
      <p><strong>Input:</strong> A set of n activities with start times s[i] and finish times f[i]</p>
      <p className="mt-2"><strong>Output:</strong> Maximum number of non-overlapping activities</p>
      <p className="mt-2"><strong>Constraint:</strong> Two activities are compatible if they don't overlap</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Greedy Strategy</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Sort all activities by their finish time</li>
      <li>Select the first activity (earliest finish time)</li>
      <li>For each remaining activity, if its start time is greater than or equal to the finish time of the last selected activity, select it</li>
      <li>Repeat until all activities are processed</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Why Sort by Finish Time?</h2>
    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
      <p>
        Sorting by finish time ensures we always leave maximum room for subsequent activities.
        An activity that finishes earliest leaves the most time available for other activities.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Activities (start, finish):</p>
      <p>A1(1,4), A2(3,5), A3(0,6), A4(5,7), A5(3,9), A6(5,9), A7(6,10), A8(8,11), A9(8,12), A10(2,14), A11(12,16)</p>

      <div className="mt-4 font-mono text-sm">
        <p className="text-blue-600 font-bold">Step 1: Sort by finish time</p>
        <p>A1(1,4), A2(3,5), A3(0,6), A4(5,7), A5(3,9), A6(5,9), A7(6,10), A8(8,11), A9(8,12), A10(2,14), A11(12,16)</p>

        <p className="text-green-600 font-bold mt-4">Step 2: Greedy selection</p>
        <p>Select A1(1,4) - first activity</p>
        <p>A2(3,5): start=3 {"<"} 4, skip (overlaps)</p>
        <p>A3(0,6): start=0 {"<"} 4, skip (overlaps)</p>
        <p>Select A4(5,7): start=5 {">="} 4, select</p>
        <p>A5(3,9): start=3 {"<"} 7, skip</p>
        <p>A6(5,9): start=5 {"<"} 7, skip</p>
        <p>A7(6,10): start=6 {"<"} 7, skip</p>
        <p>Select A8(8,11): start=8 {">="} 7, select</p>
        <p>A9(8,12): start=8 {"<"} 11, skip</p>
        <p>A10(2,14): start=2 {"<"} 11, skip</p>
        <p>Select A11(12,16): start=12 {">="} 11, select</p>

        <p className="text-green-600 font-bold mt-4">Selected: A1, A4, A8, A11 (4 activities)</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function activitySelection(activities) {
    // Sort by finish time
    activities.sort((a, b) => a.finish - b.finish);

    const selected = [];
    let lastFinishTime = 0;

    for (const activity of activities) {
        // If this activity starts after the last selected one finishes
        if (activity.start >= lastFinishTime) {
            selected.push(activity);
            lastFinishTime = activity.finish;
        }
    }

    return selected;
}

// Example
const activities = [
    { name: 'A1', start: 1, finish: 4 },
    { name: 'A2', start: 3, finish: 5 },
    { name: 'A3', start: 0, finish: 6 },
    { name: 'A4', start: 5, finish: 7 },
    { name: 'A5', start: 3, finish: 9 },
    { name: 'A6', start: 5, finish: 9 },
    { name: 'A7', start: 6, finish: 10 },
    { name: 'A8', start: 8, finish: 11 },
    { name: 'A9', start: 8, finish: 12 },
    { name: 'A10', start: 2, finish: 14 },
    { name: 'A11', start: 12, finish: 16 }
];

console.log(activitySelection(activities));
// Output: [{name: 'A1',...}, {name: 'A4',...}, {name: 'A8',...}, {name: 'A11',...}]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Recursive Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function activitySelectionRecursive(activities, k = 0, n = activities.length) {
    // Find the first activity that starts after activity k finishes
    let m = k + 1;
    while (m < n && activities[m].start < activities[k].finish) {
        m++;
    }

    if (m < n) {
        return [activities[m], ...activitySelectionRecursive(activities, m, n)];
    }

    return [];
}

// Note: activities must be sorted by finish time before calling
function solve(activities) {
    activities.sort((a, b) => a.finish - b.finish);
    // Include the first activity and recursively find rest
    return [activities[0], ...activitySelectionRecursive(activities, 0, activities.length)];
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Time Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Sorting</td>
            <td className="p-3 border">O(n log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Selection</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Total</td>
            <td className="p-3 border">O(n log n)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2"><strong>Space Complexity:</strong> O(1) excluding output, O(n) including output</p>

    <h2 className="text-2xl font-bold mt-6">Proof of Correctness</h2>
    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
      <p className="font-bold">Greedy Choice Property:</p>
      <p className="text-sm mt-1">
        The activity that finishes first must be part of some optimal solution. If an optimal solution
        uses activity A instead of the earliest-finishing activity B, we can swap A with B without
        reducing the solution size.
      </p>
      <p className="font-bold mt-3">Optimal Substructure:</p>
      <p className="text-sm mt-1">
        After selecting the first activity, the remaining problem is a smaller instance of the same
        problem (selecting activities from those that start after the first one finishes).
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Variations</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Weighted Activity Selection</h4>
        <p className="text-sm mt-1">Each activity has a profit; maximize total profit</p>
        <p className="text-sm text-gray-600">Requires Dynamic Programming</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Interval Scheduling</h4>
        <p className="text-sm mt-1">Multiple resources available</p>
        <p className="text-sm text-gray-600">Assign activities to minimize resources</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Simple and intuitive algorithm</li>
      <li>Optimal solution guaranteed for unweighted case</li>
      <li>Efficient O(n log n) time complexity</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Does not work for weighted version (need DP)</li>
      <li>Requires sorting as preprocessing</li>
      <li>Cannot handle activities with different priorities directly</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Scheduling meetings in a conference room</li>
      <li>CPU task scheduling</li>
      <li>Bandwidth allocation in networks</li>
      <li>Resource allocation problems</li>
      <li>Event management and planning</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Note:</strong> This greedy approach only works when all activities have equal weight/priority.
        For weighted activities, use Dynamic Programming (Weighted Job Scheduling).
      </p>
    </div>
  </div>
);

export default ActivitySelection;
