import React from 'react';

const RatInMaze: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Rat in a Maze
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Rat in a Maze problem asks: given a maze represented as a grid where 1 means open path
      and 0 means blocked, find all possible paths for a rat to travel from the top-left corner
      to the bottom-right corner. The rat can move in four directions: up, down, left, right.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Visualization</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <pre className="text-sm">
{`Maze:                    One Valid Path:
1 0 0 0                  → . . .
1 1 0 1                  ↓ → . .
0 1 0 0                  . ↓ . .
1 1 1 1                  . → → ↓

Start: (0,0)
End: (3,3)
Path: DDRDRR (Down Down Right Down Right Right)`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Start from (0, 0)</li>
      <li>Try moving in each direction (D, L, R, U)</li>
      <li>If move is valid (within bounds, not blocked, not visited), take it</li>
      <li>Mark cell as visited</li>
      <li>If reached destination, record the path</li>
      <li>Backtrack: unmark cell and try other directions</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function findPaths(maze) {
    const n = maze.length;
    const m = maze[0].length;
    const paths = [];
    const visited = Array(n).fill().map(() => Array(m).fill(false));

    // Direction mappings
    const directions = [
        { dr: 1, dc: 0, dir: 'D' },   // Down
        { dr: 0, dc: -1, dir: 'L' },  // Left
        { dr: 0, dc: 1, dir: 'R' },   // Right
        { dr: -1, dc: 0, dir: 'U' }   // Up
    ];

    function isValid(row, col) {
        return row >= 0 && row < n &&
               col >= 0 && col < m &&
               maze[row][col] === 1 &&
               !visited[row][col];
    }

    function backtrack(row, col, path) {
        // Reached destination
        if (row === n - 1 && col === m - 1) {
            paths.push(path);
            return;
        }

        // Mark as visited
        visited[row][col] = true;

        // Try all 4 directions
        for (const { dr, dc, dir } of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (isValid(newRow, newCol)) {
                backtrack(newRow, newCol, path + dir);
            }
        }

        // Backtrack: unmark
        visited[row][col] = false;
    }

    // Start only if top-left is open
    if (maze[0][0] === 1) {
        backtrack(0, 0, '');
    }

    return paths.sort();  // Return in lexicographic order
}

// Example
const maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1]
];

const paths = findPaths(maze);
console.log('All paths:');
paths.forEach(p => console.log(p));
// Output: DDRDRR, DRDDRR`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Variant: Find Any One Path</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function findOnePath(maze) {
    const n = maze.length;
    const m = maze[0].length;
    const visited = Array(n).fill().map(() => Array(m).fill(false));
    const path = [];

    function backtrack(row, col) {
        // Invalid or already visited
        if (row < 0 || row >= n || col < 0 || col >= m ||
            maze[row][col] === 0 || visited[row][col]) {
            return false;
        }

        // Mark and add to path
        visited[row][col] = true;
        path.push([row, col]);

        // Reached destination
        if (row === n - 1 && col === m - 1) {
            return true;
        }

        // Try all directions
        if (backtrack(row + 1, col) ||  // Down
            backtrack(row, col + 1) ||  // Right
            backtrack(row - 1, col) ||  // Up
            backtrack(row, col - 1)) {  // Left
            return true;
        }

        // Backtrack
        path.pop();
        visited[row][col] = false;
        return false;
    }

    if (backtrack(0, 0)) {
        return path;
    }
    return [];  // No path exists
}

// Visualize path on maze
function printPath(maze, path) {
    const display = maze.map(row => [...row.map(c => c === 1 ? '.' : '#')]);

    path.forEach(([r, c], i) => {
        if (i === 0) display[r][c] = 'S';
        else if (i === path.length - 1) display[r][c] = 'E';
        else display[r][c] = '*';
    });

    display.forEach(row => console.log(row.join(' ')));
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Variant: Count All Paths</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function countPaths(maze) {
    const n = maze.length;
    const m = maze[0].length;

    function backtrack(row, col, visited) {
        // Out of bounds or blocked or visited
        if (row < 0 || row >= n || col < 0 || col >= m ||
            maze[row][col] === 0 || visited[row][col]) {
            return 0;
        }

        // Reached destination
        if (row === n - 1 && col === m - 1) {
            return 1;
        }

        visited[row][col] = true;

        const count =
            backtrack(row + 1, col, visited) +  // Down
            backtrack(row - 1, col, visited) +  // Up
            backtrack(row, col + 1, visited) +  // Right
            backtrack(row, col - 1, visited);   // Left

        visited[row][col] = false;  // Backtrack

        return count;
    }

    const visited = Array(n).fill().map(() => Array(m).fill(false));
    return backtrack(0, 0, visited);
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complexity Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Time (worst case)</td>
            <td className="p-3 border">O(4^(n×m))</td>
          </tr>
          <tr>
            <td className="p-3 border">Time (practical)</td>
            <td className="p-3 border">Much better due to blocking</td>
          </tr>
          <tr>
            <td className="p-3 border">Space</td>
            <td className="p-3 border">O(n×m) for visited array + recursion</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Always check if start/end cells are open</li>
      <li>Mark visited before recursing, unmark when backtracking</li>
      <li>For lexicographic order, process directions in order: D, L, R, U</li>
      <li>Use visited array to prevent infinite loops</li>
    </ul>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Variation:</strong> If the rat can only move down or right (no backtracking needed
        for movement), this becomes a simpler DP problem with O(n×m) time complexity.
      </p>
    </div>
  </div>
);

export default RatInMaze;
