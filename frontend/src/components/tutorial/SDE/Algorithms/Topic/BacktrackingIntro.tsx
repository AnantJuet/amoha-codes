import React from 'react';

const BacktrackingIntro: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Backtracking
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Backtracking is an algorithmic technique that incrementally builds candidates for solutions
      and abandons ("backtracks") a candidate as soon as it determines that the candidate cannot
      lead to a valid solution. It's essentially a refined brute force approach.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Concepts</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Choice:</strong> At each step, make a choice from available options</li>
      <li><strong>Constraint:</strong> Check if the choice satisfies problem constraints</li>
      <li><strong>Goal:</strong> Check if the current state is a solution</li>
      <li><strong>Backtrack:</strong> If stuck, undo the last choice and try another</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">General Template</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function backtrack(state, choices) {
    // Base case: found a solution
    if (isGoal(state)) {
        addToResult(state);
        return;
    }

    // Try each choice
    for (const choice of choices) {
        // Check if choice is valid
        if (isValid(state, choice)) {
            // Make the choice
            makeChoice(state, choice);

            // Recurse with new state
            backtrack(state, getNextChoices());

            // Undo the choice (backtrack)
            undoChoice(state, choice);
        }
    }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Visual Example: Finding Path in Maze</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <pre className="text-sm">
{`Start: (0,0)  End: (2,2)

    0   1   2
  +---+---+---+
0 | S | . | X |    S = Start
  +---+---+---+    E = End
1 | . | X | . |    X = Blocked
  +---+---+---+    . = Open
2 | . | . | E |
  +---+---+---+

Path found by backtracking:
(0,0) → (1,0) → (2,0) → (2,1) → (2,2)

When hitting X at (0,2) or (1,1), algorithm backtracks
and tries different direction.`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Example: Generate All Permutations</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function permutations(nums) {
    const result = [];

    function backtrack(current, remaining) {
        // Goal: used all numbers
        if (remaining.length === 0) {
            result.push([...current]);
            return;
        }

        // Try each remaining number as next choice
        for (let i = 0; i < remaining.length; i++) {
            // Make choice
            current.push(remaining[i]);
            const newRemaining = [
                ...remaining.slice(0, i),
                ...remaining.slice(i + 1)
            ];

            // Recurse
            backtrack(current, newRemaining);

            // Backtrack (undo choice)
            current.pop();
        }
    }

    backtrack([], nums);
    return result;
}

console.log(permutations([1, 2, 3]));
// [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Example: Generate All Subsets</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function subsets(nums) {
    const result = [];

    function backtrack(start, current) {
        // Every state is a valid subset
        result.push([...current]);

        // Try adding each remaining number
        for (let i = start; i < nums.length; i++) {
            // Include nums[i]
            current.push(nums[i]);

            // Recurse with next index
            backtrack(i + 1, current);

            // Backtrack
            current.pop();
        }
    }

    backtrack(0, []);
    return result;
}

console.log(subsets([1, 2, 3]));
// [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Backtracking vs Other Approaches</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">When to Use</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Brute Force</td>
            <td className="p-3 border">Try all possibilities</td>
            <td className="p-3 border">Password cracking</td>
          </tr>
          <tr>
            <td className="p-3 border">Backtracking</td>
            <td className="p-3 border">Prune invalid paths early</td>
            <td className="p-3 border">N-Queens, Sudoku</td>
          </tr>
          <tr>
            <td className="p-3 border">Dynamic Programming</td>
            <td className="p-3 border">Optimal substructure</td>
            <td className="p-3 border">Shortest path</td>
          </tr>
          <tr>
            <td className="p-3 border">Greedy</td>
            <td className="p-3 border">Local optimal = global</td>
            <td className="p-3 border">Activity selection</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Classic Backtracking Problems</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>N-Queens:</strong> Place N queens on NxN board without attacking</li>
      <li><strong>Sudoku Solver:</strong> Fill 9x9 grid following rules</li>
      <li><strong>Rat in Maze:</strong> Find path from start to end</li>
      <li><strong>Subset Sum:</strong> Find subset that sums to target</li>
      <li><strong>Hamiltonian Path:</strong> Visit all vertices exactly once</li>
      <li><strong>Word Search:</strong> Find word in character grid</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p><strong>Time Complexity:</strong> Often exponential O(b^d) where:</p>
      <ul className="list-disc list-inside mt-2 text-sm">
        <li>b = branching factor (choices at each step)</li>
        <li>d = depth of solution tree</li>
      </ul>
      <p className="mt-2"><strong>Space Complexity:</strong> O(d) for recursion stack</p>
      <p className="mt-2 text-sm text-gray-600">
        Backtracking improves over brute force by pruning, but worst case can still be exponential.
      </p>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Tip:</strong> The key to efficient backtracking is good pruning. The earlier you
        can detect an invalid path, the more computation you save. Always look for constraints
        that can eliminate choices early.
      </p>
    </div>
  </div>
);

export default BacktrackingIntro;
