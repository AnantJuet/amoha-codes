import React from 'react';

const FractionalKnapsack: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Fractional Knapsack Problem
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Fractional Knapsack Problem is a classic greedy algorithm problem where you can take fractions
      of items. Given items with weights and values, and a knapsack with limited capacity, the goal is
      to maximize the total value while staying within the weight limit.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Statement</h2>
    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
      <p><strong>Input:</strong></p>
      <ul className="list-disc list-inside mt-2 text-sm">
        <li>n items with weight w[i] and value v[i]</li>
        <li>Knapsack capacity W</li>
      </ul>
      <p className="mt-2"><strong>Output:</strong> Maximum value achievable</p>
      <p className="mt-2"><strong>Key:</strong> Items can be broken into fractions (unlike 0/1 Knapsack)</p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Fractional vs 0/1 Knapsack</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
        <h4 className="font-bold text-green-800">Fractional Knapsack</h4>
        <ul className="text-sm mt-2 space-y-1">
          <li>Can take fractions of items</li>
          <li>Solved by Greedy algorithm</li>
          <li>Time: O(n log n)</li>
          <li>Example: Gold dust, liquids</li>
        </ul>
      </div>
      <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
        <h4 className="font-bold text-red-800">0/1 Knapsack</h4>
        <ul className="text-sm mt-2 space-y-1">
          <li>Must take whole item or nothing</li>
          <li>Requires Dynamic Programming</li>
          <li>Time: O(nW)</li>
          <li>Example: Electronics, furniture</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Greedy Strategy</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Calculate value-to-weight ratio for each item (value/weight)</li>
      <li>Sort items by ratio in descending order</li>
      <li>Take items greedily:</li>
      <li className="ml-6">If item fits completely, take it all</li>
      <li className="ml-6">If item doesn't fit, take fraction that fits</li>
      <li>Continue until knapsack is full</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Visual Example</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Items (Weight, Value, Ratio):</p>
      <p>Item A: (10, 60, 6.0), Item B: (20, 100, 5.0), Item C: (30, 120, 4.0)</p>
      <p className="mt-2">Knapsack Capacity: 50</p>

      <div className="mt-4 font-mono text-sm space-y-3">
        <p className="text-blue-600 font-bold">Step 1: Sort by ratio (descending)</p>
        <p>A (ratio=6.0), B (ratio=5.0), C (ratio=4.0)</p>

        <p className="text-green-600 font-bold mt-4">Step 2: Fill knapsack</p>
        <p>Take Item A completely: weight=10, value=60</p>
        <p>Remaining capacity: 50 - 10 = 40</p>

        <p className="mt-2">Take Item B completely: weight=20, value=100</p>
        <p>Remaining capacity: 40 - 20 = 20</p>

        <p className="mt-2">Item C has weight=30, but only 20 capacity left</p>
        <p>Take 20/30 = 2/3 of Item C: value = (2/3) * 120 = 80</p>

        <p className="text-green-600 font-bold mt-4">Total Value = 60 + 100 + 80 = 240</p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function fractionalKnapsack(items, capacity) {
    // Calculate ratio and sort by ratio (descending)
    const itemsWithRatio = items.map(item => ({
        ...item,
        ratio: item.value / item.weight
    }));

    itemsWithRatio.sort((a, b) => b.ratio - a.ratio);

    let totalValue = 0;
    let remainingCapacity = capacity;
    const result = [];

    for (const item of itemsWithRatio) {
        if (remainingCapacity === 0) break;

        if (item.weight <= remainingCapacity) {
            // Take the whole item
            totalValue += item.value;
            remainingCapacity -= item.weight;
            result.push({ ...item, fraction: 1 });
        } else {
            // Take fraction of the item
            const fraction = remainingCapacity / item.weight;
            totalValue += item.value * fraction;
            result.push({ ...item, fraction: fraction });
            remainingCapacity = 0;
        }
    }

    return {
        totalValue: totalValue,
        items: result
    };
}

// Example
const items = [
    { name: 'A', weight: 10, value: 60 },
    { name: 'B', weight: 20, value: 100 },
    { name: 'C', weight: 30, value: 120 }
];

const result = fractionalKnapsack(items, 50);
console.log("Maximum Value:", result.totalValue); // 240
console.log("Items taken:", result.items);
// A: 100%, B: 100%, C: 66.67%`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Detailed Implementation with Tracking</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function fractionalKnapsackDetailed(items, capacity) {
    // Create items with calculated ratios
    const processedItems = items.map((item, index) => ({
        index: index,
        name: item.name || \`Item \${index + 1}\`,
        weight: item.weight,
        value: item.value,
        ratio: item.value / item.weight
    }));

    // Sort by value-to-weight ratio in descending order
    processedItems.sort((a, b) => b.ratio - a.ratio);

    let totalValue = 0;
    let totalWeight = 0;
    let remainingCapacity = capacity;
    const selectedItems = [];

    console.log("Processing order (by ratio):");
    processedItems.forEach(item => {
        console.log(\`  \${item.name}: ratio = \${item.ratio.toFixed(2)}\`);
    });

    for (const item of processedItems) {
        if (remainingCapacity <= 0) break;

        if (item.weight <= remainingCapacity) {
            // Take complete item
            selectedItems.push({
                name: item.name,
                weightTaken: item.weight,
                valueTaken: item.value,
                fraction: 1.0
            });
            totalValue += item.value;
            totalWeight += item.weight;
            remainingCapacity -= item.weight;
        } else {
            // Take fraction
            const fraction = remainingCapacity / item.weight;
            const valueTaken = item.value * fraction;
            selectedItems.push({
                name: item.name,
                weightTaken: remainingCapacity,
                valueTaken: valueTaken,
                fraction: fraction
            });
            totalValue += valueTaken;
            totalWeight += remainingCapacity;
            remainingCapacity = 0;
        }
    }

    return {
        maxValue: totalValue,
        totalWeight: totalWeight,
        capacity: capacity,
        selectedItems: selectedItems
    };
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
            <td className="p-3 border">Calculate ratios</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Sorting</td>
            <td className="p-3 border">O(n log n)</td>
          </tr>
          <tr>
            <td className="p-3 border">Greedy selection</td>
            <td className="p-3 border">O(n)</td>
          </tr>
          <tr>
            <td className="p-3 border font-bold">Total</td>
            <td className="p-3 border font-bold">O(n log n)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="mt-2"><strong>Space Complexity:</strong> O(n) for storing items with ratios</p>

    <h2 className="text-2xl font-bold mt-6">Why Greedy Works</h2>
    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
      <p className="font-bold">Greedy Choice Property:</p>
      <p className="text-sm mt-1">
        Taking items with the highest value-to-weight ratio first is always optimal. Since we can
        take fractions, there's never a disadvantage to prioritizing high-ratio items.
      </p>
      <p className="font-bold mt-3">Optimal Substructure:</p>
      <p className="text-sm mt-1">
        After taking a portion of an item, the remaining problem is identical with reduced capacity.
      </p>
      <p className="font-bold mt-3">Mathematical Proof:</p>
      <p className="text-sm mt-1">
        If we don't take the highest ratio item fully (when possible), we can always improve by
        swapping with a lower-ratio item, contradicting optimality.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6">Advantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Simple and efficient O(n log n) solution</li>
      <li>Always gives optimal solution</li>
      <li>Easy to implement and understand</li>
      <li>No complex data structures needed</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Disadvantages</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Only works when items can be divided</li>
      <li>Not applicable to 0/1 Knapsack (whole items only)</li>
      <li>Assumes linear value scaling (half item = half value)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Applications</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Resource allocation problems</li>
      <li>Investment portfolio optimization</li>
      <li>Loading cargo ships/trucks (divisible goods)</li>
      <li>Budget allocation across projects</li>
      <li>Bandwidth allocation in networks</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Related Problems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>0/1 Knapsack:</strong> Items cannot be divided (use DP)</li>
      <li><strong>Bounded Knapsack:</strong> Limited copies of each item</li>
      <li><strong>Unbounded Knapsack:</strong> Unlimited copies of each item</li>
      <li><strong>Multiple Knapsacks:</strong> Multiple capacity constraints</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Important:</strong> The greedy approach only works for the Fractional Knapsack problem.
        For the 0/1 Knapsack (where items cannot be divided), you must use Dynamic Programming, as
        greedy does not guarantee an optimal solution.
      </p>
    </div>
  </div>
);

export default FractionalKnapsack;
