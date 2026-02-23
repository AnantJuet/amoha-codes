import React from 'react';

const SudokuSolver: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Sudoku Solver
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Sudoku is a 9×9 grid puzzle where each row, column, and 3×3 box must contain digits 1-9
      without repetition. Backtracking is the perfect approach to solve Sudoku by trying digits
      and undoing invalid choices.
    </p>

    <h2 className="text-2xl font-bold mt-6">Rules</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Each row must contain 1-9 (no duplicates)</li>
      <li>Each column must contain 1-9 (no duplicates)</li>
      <li>Each 3×3 box must contain 1-9 (no duplicates)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Example Puzzle</h2>
    <div className="bg-gray-100 p-4 rounded-lg">
      <pre className="text-xs">
{`Input:                    Output:
5 3 . | . 7 . | . . .     5 3 4 | 6 7 8 | 9 1 2
6 . . | 1 9 5 | . . .     6 7 2 | 1 9 5 | 3 4 8
. 9 8 | . . . | . 6 .     1 9 8 | 3 4 2 | 5 6 7
------+-------+------     ------+-------+------
8 . . | . 6 . | . . 3     8 5 9 | 7 6 1 | 4 2 3
4 . . | 8 . 3 | . . 1     4 2 6 | 8 5 3 | 7 9 1
7 . . | . 2 . | . . 6     7 1 3 | 9 2 4 | 8 5 6
------+-------+------     ------+-------+------
. 6 . | . . . | 2 8 .     9 6 1 | 5 3 7 | 2 8 4
. . . | 4 1 9 | . . 5     2 8 7 | 4 1 9 | 6 3 5
. . . | . 8 . | . 7 9     3 4 5 | 2 8 6 | 1 7 9`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function solveSudoku(board) {
    // Track used numbers in rows, cols, and boxes
    const rows = Array(9).fill().map(() => new Set());
    const cols = Array(9).fill().map(() => new Set());
    const boxes = Array(9).fill().map(() => new Set());

    // Helper to get box index (0-8)
    const getBox = (r, c) => Math.floor(r / 3) * 3 + Math.floor(c / 3);

    // Initialize tracking sets with existing numbers
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const num = board[r][c];
            if (num !== '.') {
                rows[r].add(num);
                cols[c].add(num);
                boxes[getBox(r, c)].add(num);
            }
        }
    }

    // Check if number can be placed
    function isValid(r, c, num) {
        return !rows[r].has(num) &&
               !cols[c].has(num) &&
               !boxes[getBox(r, c)].has(num);
    }

    // Place number
    function place(r, c, num) {
        board[r][c] = num;
        rows[r].add(num);
        cols[c].add(num);
        boxes[getBox(r, c)].add(num);
    }

    // Remove number (backtrack)
    function remove(r, c, num) {
        board[r][c] = '.';
        rows[r].delete(num);
        cols[c].delete(num);
        boxes[getBox(r, c)].delete(num);
    }

    // Find next empty cell
    function findEmpty() {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.') {
                    return [r, c];
                }
            }
        }
        return null;  // Board is complete
    }

    // Backtracking solver
    function solve() {
        const empty = findEmpty();

        // No empty cells - puzzle solved!
        if (!empty) return true;

        const [row, col] = empty;

        // Try digits 1-9
        for (let num = 1; num <= 9; num++) {
            const numStr = String(num);

            if (isValid(row, col, numStr)) {
                place(row, col, numStr);

                if (solve()) {
                    return true;  // Solution found
                }

                remove(row, col, numStr);  // Backtrack
            }
        }

        return false;  // No valid number found
    }

    solve();
    return board;
}

// Example
const board = [
    ['5','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
];

solveSudoku(board);
board.forEach(row => console.log(row.join(' ')));`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Optimized Version with Constraint Propagation</h2>
    <div className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto">
      <pre className="text-sm">{`function solveSudokuOptimized(board) {
    // Track possible values for each cell
    const possible = Array(9).fill().map(() =>
        Array(9).fill().map(() => new Set('123456789'.split('')))
    );

    // Initialize: remove existing numbers from possibilities
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] !== '.') {
                eliminateFromPeers(r, c, board[r][c], possible);
                possible[r][c] = new Set([board[r][c]]);
            }
        }
    }

    function eliminateFromPeers(row, col, num, possible) {
        // Remove from row
        for (let c = 0; c < 9; c++) {
            possible[row][c].delete(num);
        }
        // Remove from column
        for (let r = 0; r < 9; r++) {
            possible[r][col].delete(num);
        }
        // Remove from box
        const boxR = Math.floor(row / 3) * 3;
        const boxC = Math.floor(col / 3) * 3;
        for (let r = boxR; r < boxR + 3; r++) {
            for (let c = boxC; c < boxC + 3; c++) {
                possible[r][c].delete(num);
            }
        }
    }

    function findBestCell() {
        let minPossible = 10;
        let bestCell = null;

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.' && possible[r][c].size < minPossible) {
                    minPossible = possible[r][c].size;
                    bestCell = [r, c];
                    if (minPossible === 1) return bestCell;
                }
            }
        }
        return bestCell;
    }

    function solve() {
        const cell = findBestCell();
        if (!cell) return true;  // Solved

        const [row, col] = cell;
        if (possible[row][col].size === 0) return false;

        for (const num of possible[row][col]) {
            // Save state
            const savedPossible = possible.map(r => r.map(c => new Set(c)));

            board[row][col] = num;
            eliminateFromPeers(row, col, num, possible);
            possible[row][col] = new Set([num]);

            if (solve()) return true;

            // Restore state
            board[row][col] = '.';
            for (let r = 0; r < 9; r++) {
                for (let c = 0; c < 9; c++) {
                    possible[r][c] = savedPossible[r][c];
                }
            }
        }

        return false;
    }

    solve();
    return board;
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Optimizations</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>MRV (Minimum Remaining Values):</strong> Fill cell with fewest possibilities first</li>
      <li><strong>Constraint Propagation:</strong> When placing a number, immediately update possibilities</li>
      <li><strong>Naked Singles:</strong> If cell has only one possibility, fill it immediately</li>
      <li><strong>Hidden Singles:</strong> If number can only go in one cell in row/col/box</li>
    </ul>

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
            <td className="p-3 border">O(9^(n²)) where n=9</td>
          </tr>
          <tr>
            <td className="p-3 border">Time (practical)</td>
            <td className="p-3 border">Much faster with optimizations</td>
          </tr>
          <tr>
            <td className="p-3 border">Space</td>
            <td className="p-3 border">O(n²) for the board</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
      <p className="text-blue-700">
        <strong>Interview Tip:</strong> Start with the basic backtracking solution, then discuss
        optimizations. The key insight is using Sets to track used numbers in O(1) instead of
        scanning rows/columns/boxes each time.
      </p>
    </div>
  </div>
);

export default SudokuSolver;
