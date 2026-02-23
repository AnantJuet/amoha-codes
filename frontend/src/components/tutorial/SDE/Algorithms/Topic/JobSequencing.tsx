import React from 'react';

const JobSequencing: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Job Sequencing Problem
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Job Sequencing Problem is a greedy algorithm problem where we have a set of jobs, each with
      a deadline and profit. The goal is to schedule jobs to maximize total profit, where each job
      takes one unit of time and only one job can be scheduled at a time.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Statement</h2>
    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
      <p><strong>Input:</strong> A set of n jobs where each job i has:</p>
      <ul className="list-disc list-inside mt-2 text-sm">
        <li>Deadline d[i]: The job must be completed by this time</li>
        <li>Profit p[i]: Profit earned if the job is completed</li>
      </ul>
      <p className="mt-2"><strong>Output:</strong> Maximum profit and sequence of jobs</p>
      <p className="mt-2"><strong>Constraint:</strong> Each job takes exactly 1 unit of time</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Greedy Strategy</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Sort all jobs in decreasing order of profit</li>
      <li>Initialize time slots as empty</li>
      <li>For each job (in sorted order):</li>
      <li className="ml-6">Find the latest available slot before its deadline</li>
      <li className="ml-6">If slot found, assign job to that slot</li>
      <li className="ml-6">If no slot available, skip the job</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Jobs (ID, Deadline, Profit):</p>
      <p>J1(4, 20), J2(1, 10), J3(1, 40), J4(1, 30)</p>

      <div className="mt-4 font-mono text-sm space-y-3">
        <p className="text-blue-600 font-bold">Step 1: Sort by profit (descending)</p>
        <p>J3(1, 40), J4(1, 30), J1(4, 20), J2(1, 10)</p>

        <p className="text-blue-600 font-bold mt-4">Step 2: Initialize slots</p>
        <p>Max deadline = 4, Slots: [_, _, _, _]</p>

        <p className="text-green-600 font-bold mt-4">Step 3: Assign jobs</p>
        <p>J3 (deadline=1, profit=40): Slot 1 available, assign J3</p>
        <p>Slots: [J3, _, _, _]</p>

        <p className="mt-2">J4 (deadline=1, profit=30): Slot 1 occupied, no earlier slot, skip</p>
        <p>Slots: [J3, _, _, _]</p>

        <p className="mt-2">J1 (deadline=4, profit=20): Check slot 4, 3, 2 - Slot 4 available, assign J1</p>
        <p>Slots: [J3, _, _, J1]</p>

        <p className="mt-2">J2 (deadline=1, profit=10): Slot 1 occupied, skip</p>
        <p>Slots: [J3, _, _, J1]</p>

        <p className="text-green-600 font-bold mt-4">Result: Jobs J3, J1 with total profit = 40 + 20 = 60</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function jobSequencing(jobs) {
    // Sort by profit in descending order
    jobs.sort((a, b) => b.profit - a.profit);

    // Find maximum deadline
    const maxDeadline = Math.max(...jobs.map(job => job.deadline));

    // Initialize slots (-1 means empty)
    const slots = new Array(maxDeadline).fill(-1);
    const selectedJobs = [];
    let totalProfit = 0;

    for (let i = 0; i < jobs.length; i++) {
        // Find a slot for this job (search from deadline-1 to 0)
        for (let j = jobs[i].deadline - 1; j >= 0; j--) {
            if (slots[j] === -1) {
                slots[j] = i;
                selectedJobs.push(jobs[i]);
                totalProfit += jobs[i].profit;
                break;
            }
        }
    }

    return {
        jobs: selectedJobs,
        totalProfit: totalProfit,
        schedule: slots.map((idx, slot) =>
            idx !== -1 ? { slot: slot + 1, job: jobs[idx] } : null
        ).filter(Boolean)
    };
}

// Example
const jobs = [
    { id: 'J1', deadline: 4, profit: 20 },
    { id: 'J2', deadline: 1, profit: 10 },
    { id: 'J3', deadline: 1, profit: 40 },
    { id: 'J4', deadline: 1, profit: 30 }
];

const result = jobSequencing(jobs);
console.log("Total Profit:", result.totalProfit); // 60
console.log("Selected Jobs:", result.jobs.map(j => j.id)); // ['J3', 'J1']`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Optimized with Union-Find (Disjoint Set)</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`// Union-Find approach for O(n * alpha(n)) complexity
class DisjointSet {
    constructor(n) {
        this.parent = Array.from({ length: n + 1 }, (_, i) => i);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    union(x, y) {
        this.parent[x] = y;
    }
}

function jobSequencingOptimized(jobs) {
    jobs.sort((a, b) => b.profit - a.profit);
    const maxDeadline = Math.max(...jobs.map(j => j.deadline));
    const ds = new DisjointSet(maxDeadline);

    const selectedJobs = [];
    let totalProfit = 0;

    for (const job of jobs) {
        // Find the latest available slot
        const availableSlot = ds.find(job.deadline);

        if (availableSlot > 0) {
            // Assign job to this slot
            selectedJobs.push({ ...job, slot: availableSlot });
            totalProfit += job.profit;
            // Point this slot to previous slot
            ds.union(availableSlot, availableSlot - 1);
        }
    }

    return { jobs: selectedJobs, totalProfit };
}

// Example
const jobs = [
    { id: 'J1', deadline: 2, profit: 100 },
    { id: 'J2', deadline: 1, profit: 19 },
    { id: 'J3', deadline: 2, profit: 27 },
    { id: 'J4', deadline: 1, profit: 25 },
    { id: 'J5', deadline: 3, profit: 15 }
];

console.log(jobSequencingOptimized(jobs));
// Jobs: J1, J3, J5 with profit = 100 + 27 + 15 = 142`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Time Complexity</th>
            <th className="p-3 border">Space</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Naive (Linear search)</td>
            <td className="p-3 border">O(n^2)</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Union-Find</td>
            <td className="p-3 border">O(n log n + n * alpha(n))</td>
            <td className="p-3 border">O(n)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2 text-sm">where alpha(n) is the inverse Ackermann function, nearly constant</p>

    <h2 className="text-2xl font-bold mt-6">Why Greedy Works</h2>
    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
      <p className="font-bold">Greedy Choice Property:</p>
      <p className="text-sm mt-1">
        Selecting the highest profit job that can still meet its deadline never prevents us from
        finding an optimal solution. If we skip a high-profit job, we can never recover that profit.
      </p>
      <p className="font-bold mt-3">Optimal Substructure:</p>
      <p className="text-sm mt-1">
        After scheduling one job, the remaining problem is identical but with one fewer slot available.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Variations</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h4 className="font-bold text-blue-800">Weighted Job Scheduling</h4>
        <p className="text-sm mt-1">Jobs have varying durations</p>
        <p className="text-sm text-gray-600">Requires Dynamic Programming</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Job Sequencing with Loss</h4>
        <p className="text-sm mt-1">Minimize loss instead of maximize profit</p>
        <p className="text-sm text-gray-600">Sort by loss in descending order</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Optimal for unit-time jobs with deadlines</li>
      <li>Simple greedy approach</li>
      <li>Efficient O(n log n) with Union-Find</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Limited to unit-time jobs</li>
      <li>Assumes all jobs are independent</li>
      <li>Does not handle job dependencies</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Task scheduling in operating systems</li>
      <li>Manufacturing job scheduling</li>
      <li>Project deadline management</li>
      <li>Resource allocation with deadlines</li>
      <li>Order fulfillment in warehouses</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Tip:</strong> When jobs have different durations (not unit time), use Dynamic Programming
        (Weighted Job Scheduling) instead of this greedy approach.
      </p>
    </div>
  </div>
);

export default JobSequencing;
