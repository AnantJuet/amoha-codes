import React from 'react';

const NQueens: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      N-Queens Problem
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The N-Queens problem asks: how can you place N chess queens on an N×N chessboard so that
      no two queens threaten each other? Queens can attack horizontally, vertically, and diagonally.
    </p>

    <h2 className="text-2xl font-bold mt-6">Problem Visualization</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <pre className="text-sm">
{`4-Queens Solution:

    0   1   2   3
  +---+---+---+---+
0 | . | Q | . | . |
  +---+---+---+---+
1 | . | . | . | Q |
  +---+---+---+---+
2 | Q | . | . | . |
  +---+---+---+---+
3 | . | . | Q | . |
  +---+---+---+---+

Queens at: (0,1), (1,3), (2,0), (3,2)
No two queens share row, column, or diagonal.`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Approach</h2>
    <ol className="list-decimal list-inside space-y-2">
      <li>Place queens one row at a time (ensures no row conflicts)</li>
      <li>For each row, try placing queen in each column</li>
      <li>Check if placement is safe (no column/diagonal conflicts)</li>
      <li>If safe, move to next row; else backtrack</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function solveNQueens(n) {
    const solutions = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));

    // Track attacked columns and diagonals
    const cols = new Set();
    const diag1 = new Set();  // row - col (top-left to bottom-right)
    const diag2 = new Set();  // row + col (top-right to bottom-left)

    function isSafe(row, col) {
        return !cols.has(col) &&
               !diag1.has(row - col) &&
               !diag2.has(row + col);
    }

    function placeQueen(row, col) {
        board[row][col] = 'Q';
        cols.add(col);
        diag1.add(row - col);
        diag2.add(row + col);
    }

    function removeQueen(row, col) {
        board[row][col] = '.';
        cols.delete(col);
        diag1.delete(row - col);
        diag2.delete(row + col);
    }

    function backtrack(row) {
        // All queens placed successfully
        if (row === n) {
            solutions.push(board.map(r => r.join('')));
            return;
        }

        // Try each column in current row
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                placeQueen(row, col);
                backtrack(row + 1);
                removeQueen(row, col);  // Backtrack
            }
        }
    }

    backtrack(0);
    return solutions;
}

// Example
const solutions = solveNQueens(4);
console.log(\`Found \${solutions.length} solutions\`);
solutions.forEach((sol, i) => {
    console.log(\`Solution \${i + 1}:\`);
    sol.forEach(row => console.log(row));
    console.log();
});

/*
Found 2 solutions
Solution 1:
.Q..
...Q
Q...
..Q.

Solution 2:
..Q.
Q...
...Q
.Q..
*/`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Understanding Diagonal Check</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <p className="font-semibold">Key Insight:</p>
      <ul className="list-disc list-inside mt-2 space-y-2 text-sm">
        <li>
          <strong>Same diagonal (↘):</strong> All cells have same (row - col) value
          <br/>
          <span className="text-gray-600">e.g., (0,0), (1,1), (2,2) all have row-col = 0</span>
        </li>
        <li>
          <strong>Same anti-diagonal (↙):</strong> All cells have same (row + col) value
          <br/>
          <span className="text-gray-600">e.g., (0,2), (1,1), (2,0) all have row+col = 2</span>
        </li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6">Count Solutions Only</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function totalNQueens(n) {
    let count = 0;
    const cols = new Set();
    const diag1 = new Set();
    const diag2 = new Set();

    function backtrack(row) {
        if (row === n) {
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (!cols.has(col) &&
                !diag1.has(row - col) &&
                !diag2.has(row + col)) {

                cols.add(col);
                diag1.add(row - col);
                diag2.add(row + col);

                backtrack(row + 1);

                cols.delete(col);
                diag1.delete(row - col);
                diag2.delete(row + col);
            }
        }
    }

    backtrack(0);
    return count;
}

// Number of solutions for different N
for (let n = 1; n <= 8; n++) {
    console.log(\`N=\${n}: \${totalNQueens(n)} solutions\`);
}
// N=1: 1, N=2: 0, N=3: 0, N=4: 2,
// N=5: 10, N=6: 4, N=7: 40, N=8: 92`}</pre>
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
            <td className="p-3 border">O(N!)</td>
          </tr>
          <tr>
            <td className="p-3 border">Time (with pruning)</td>
            <td className="p-3 border">Much better in practice</td>
          </tr>
          <tr>
            <td className="p-3 border">Space</td>
            <td className="p-3 border">O(N) for recursion + sets</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Optimizations</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Bit manipulation:</strong> Use bits instead of sets for faster operations</li>
      <li><strong>Symmetry:</strong> For first row, only try first half columns (mirror solutions)</li>
      <li><strong>Constraint propagation:</strong> Track remaining valid columns per row</li>
    </ul>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Interview Tip:</strong> N-Queens is a classic backtracking problem. Practice explaining
        the diagonal constraint (row-col and row+col) clearly, as this is often a follow-up question.
      </p>
    </div>
  </div>
);

export default NQueens;
