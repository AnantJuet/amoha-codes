import React from "react";

const MultiDimensionalArrays: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Multi-Dimensional Arrays
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      A <b>multi-dimensional array</b> is an array of arrays. The most common is the
      <b> two-dimensional (2D) array</b>, which can be visualized as a table with rows and columns.
      Java supports arrays with more than two dimensions as well.
    </p>

    <h2 className="text-2xl font-bold mt-6">2D Array Declaration and Initialization</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Method 1: Declare then allocate
int[][] matrix;
matrix = new int[3][4];  // 3 rows, 4 columns

// Method 2: Declare and allocate together
int[][] grid = new int[3][4];

// Method 3: Initialize with values
int[][] numbers = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Method 4: Explicit initialization
int[][] arr = new int[][] {
    {1, 2},
    {3, 4},
    {5, 6}
};`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Accessing 2D Array Elements</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Access element at row 0, column 1
System.out.println(matrix[0][1]);  // 2

// Access element at row 2, column 2
System.out.println(matrix[2][2]);  // 9

// Modify element
matrix[1][1] = 50;  // Change 5 to 50

// Get dimensions
int rows = matrix.length;         // 3
int cols = matrix[0].length;      // 3`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Iterating 2D Arrays</h2>

    <h3 className="text-xl font-semibold mt-4">Using Nested for Loops</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Traditional for loop
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}
// Output:
// 1 2 3
// 4 5 6
// 7 8 9`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Using Enhanced for Loop</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`for (int[] row : matrix) {
    for (int value : row) {
        System.out.print(value + " ");
    }
    System.out.println();
}`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Using Arrays.deepToString()</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`import java.util.Arrays;

System.out.println(Arrays.deepToString(matrix));
// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Jagged Arrays</h2>
    <p className="leading-relaxed mt-3">
      Java allows arrays where each row can have different lengths (jagged or ragged arrays).
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Jagged array - rows with different lengths
int[][] jagged = new int[3][];
jagged[0] = new int[2];  // First row has 2 columns
jagged[1] = new int[4];  // Second row has 4 columns
jagged[2] = new int[3];  // Third row has 3 columns

// Initialize with values
int[][] jaggedInit = {
    {1, 2},
    {3, 4, 5, 6},
    {7, 8, 9}
};

// Print jagged array
for (int i = 0; i < jaggedInit.length; i++) {
    for (int j = 0; j < jaggedInit[i].length; j++) {
        System.out.print(jaggedInit[i][j] + " ");
    }
    System.out.println();
}
// Output:
// 1 2
// 3 4 5 6
// 7 8 9`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">3D Arrays</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// 3D array: 2 layers, 3 rows, 4 columns
int[][][] cube = new int[2][3][4];

// Initialize with values
int[][][] data = {
    {   // Layer 0
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    },
    {   // Layer 1
        {13, 14, 15, 16},
        {17, 18, 19, 20},
        {21, 22, 23, 24}
    }
};

// Access element
System.out.println(data[1][2][3]);  // 24 (layer 1, row 2, col 3)

// Iterate 3D array
for (int i = 0; i < data.length; i++) {
    System.out.println("Layer " + i + ":");
    for (int j = 0; j < data[i].length; j++) {
        for (int k = 0; k < data[i][j].length; k++) {
            System.out.print(data[i][j][k] + " ");
        }
        System.out.println();
    }
    System.out.println();
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Matrix Operations</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Matrix Addition
int[][] a = {{1, 2}, {3, 4}};
int[][] b = {{5, 6}, {7, 8}};
int[][] sum = new int[2][2];

for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 2; j++) {
        sum[i][j] = a[i][j] + b[i][j];
    }
}
// sum = {{6, 8}, {10, 12}}

// Matrix Transpose
int[][] original = {
    {1, 2, 3},
    {4, 5, 6}
};
int rows = original.length;
int cols = original[0].length;
int[][] transpose = new int[cols][rows];

for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        transpose[j][i] = original[i][j];
    }
}
// transpose = {{1, 4}, {2, 5}, {3, 6}}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Practical Example: Tic-Tac-Toe Board</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class TicTacToe {
    public static void main(String[] args) {
        char[][] board = {
            {'X', 'O', 'X'},
            {'O', 'X', 'O'},
            {'O', 'X', 'X'}
        };

        printBoard(board);
        System.out.println("Winner: " + checkWinner(board));
    }

    static void printBoard(char[][] board) {
        System.out.println("-------------");
        for (char[] row : board) {
            System.out.print("| ");
            for (char cell : row) {
                System.out.print(cell + " | ");
            }
            System.out.println("\\n-------------");
        }
    }

    static char checkWinner(char[][] board) {
        // Check rows
        for (int i = 0; i < 3; i++) {
            if (board[i][0] == board[i][1] &&
                board[i][1] == board[i][2]) {
                return board[i][0];
            }
        }
        // Check columns
        for (int j = 0; j < 3; j++) {
            if (board[0][j] == board[1][j] &&
                board[1][j] == board[2][j]) {
                return board[0][j];
            }
        }
        // Check diagonals
        if (board[0][0] == board[1][1] &&
            board[1][1] == board[2][2]) {
            return board[0][0];
        }
        if (board[0][2] == board[1][1] &&
            board[1][1] == board[2][0]) {
            return board[0][2];
        }
        return ' ';  // No winner
    }
}`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Key Points</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>2D arrays are arrays of arrays: <code className="bg-gray-200 px-1 rounded">array[row][column]</code></li>
        <li>Use <code className="bg-gray-200 px-1 rounded">array.length</code> for rows, <code className="bg-gray-200 px-1 rounded">array[0].length</code> for columns</li>
        <li>Jagged arrays allow different row lengths</li>
        <li>Use <code className="bg-gray-200 px-1 rounded">Arrays.deepToString()</code> to print multi-dimensional arrays</li>
        <li>3D+ arrays follow the same pattern but get complex quickly</li>
      </ul>
    </div>
  </div>
);

export default MultiDimensionalArrays;
