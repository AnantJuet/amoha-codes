import React from "react";

const NestedLoops: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Nested Loops
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      A <b>nested loop</b> is a loop inside another loop. The inner loop completes all its
      iterations for each iteration of the outer loop. Nested loops are commonly used for
      working with multi-dimensional data structures and generating patterns.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic Nested Loop</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Outer loop runs 3 times
for (int i = 1; i <= 3; i++) {
    // Inner loop runs 3 times for each outer iteration
    for (int j = 1; j <= 3; j++) {
        System.out.println("i=" + i + ", j=" + j);
    }
}
// Output:
// i=1, j=1
// i=1, j=2
// i=1, j=3
// i=2, j=1
// i=2, j=2
// i=2, j=3
// i=3, j=1
// i=3, j=2
// i=3, j=3`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">How Nested Loops Work</h2>
    <p className="leading-relaxed mt-3">
      For each iteration of the outer loop:
    </p>
    <ol className="list-decimal pl-6 mt-2 space-y-1">
      <li>Outer loop condition is checked</li>
      <li>If true, inner loop executes completely</li>
      <li>Outer loop updates and checks condition again</li>
      <li>Process repeats until outer loop condition is false</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Pattern Printing</h2>

    <h3 className="text-xl font-semibold mt-4">Right Triangle</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
// Output:
// *
// * *
// * * *
// * * * *
// * * * * *`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Inverted Triangle</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`for (int i = 5; i >= 1; i--) {
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
// Output:
// * * * * *
// * * * *
// * * *
// * *
// *`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Number Triangle</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print(j + " ");
    }
    System.out.println();
}
// Output:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Pyramid Pattern</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int rows = 5;
for (int i = 1; i <= rows; i++) {
    // Print spaces
    for (int j = 1; j <= rows - i; j++) {
        System.out.print(" ");
    }
    // Print stars
    for (int j = 1; j <= 2 * i - 1; j++) {
        System.out.print("*");
    }
    System.out.println();
}
// Output:
//     *
//    ***
//   *****
//  *******
// *********`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Working with 2D Arrays</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Print matrix
System.out.println("Matrix:");
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}

// Using enhanced for loop
System.out.println("Using for-each:");
for (int[] row : matrix) {
    for (int value : row) {
        System.out.print(value + " ");
    }
    System.out.println();
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Multiplication Table</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`System.out.println("Multiplication Table (1-10):\\n");

// Print header
System.out.print("   |");
for (int i = 1; i <= 10; i++) {
    System.out.printf("%4d", i);
}
System.out.println("\\n" + "-".repeat(45));

// Print table
for (int i = 1; i <= 10; i++) {
    System.out.printf("%2d |", i);
    for (int j = 1; j <= 10; j++) {
        System.out.printf("%4d", i * j);
    }
    System.out.println();
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Different Loop Types</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// for inside while
int i = 1;
while (i <= 3) {
    for (int j = 1; j <= 3; j++) {
        System.out.println("i=" + i + ", j=" + j);
    }
    i++;
}

// while inside for
for (int x = 1; x <= 3; x++) {
    int y = 1;
    while (y <= 3) {
        System.out.println("x=" + x + ", y=" + y);
        y++;
    }
}

// do-while inside for
for (int a = 1; a <= 2; a++) {
    int b = 1;
    do {
        System.out.println("a=" + a + ", b=" + b);
        b++;
    } while (b <= 2);
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Finding Pairs</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Find all pairs that sum to target
int[] arr = {1, 2, 3, 4, 5};
int target = 6;

System.out.println("Pairs that sum to " + target + ":");
for (int i = 0; i < arr.length; i++) {
    for (int j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == target) {
            System.out.println("(" + arr[i] + ", " + arr[j] + ")");
        }
    }
}
// Output:
// (1, 5)
// (2, 4)`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Practical Example: Seating Chart</h2>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`public class SeatingChart {
    public static void main(String[] args) {
        int rows = 5;
        int seatsPerRow = 8;
        boolean[][] occupied = new boolean[rows][seatsPerRow];

        // Mark some seats as occupied
        occupied[0][3] = true;
        occupied[0][4] = true;
        occupied[2][5] = true;

        System.out.println("Theater Seating Chart");
        System.out.println("(O = Available, X = Occupied)\\n");

        // Print column numbers
        System.out.print("     ");
        for (int col = 1; col <= seatsPerRow; col++) {
            System.out.print(col + " ");
        }
        System.out.println();
        System.out.println("   +" + "-".repeat(seatsPerRow * 2));

        // Print seating chart
        for (int row = 0; row < rows; row++) {
            System.out.print("R" + (row + 1) + " | ");
            for (int seat = 0; seat < seatsPerRow; seat++) {
                System.out.print(occupied[row][seat] ? "X " : "O ");
            }
            System.out.println();
        }
    }
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Performance Considerations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Nested Depth</th>
            <th className="border p-2">Time Complexity</th>
            <th className="border p-2">Example (n=100)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">Single loop</td><td className="border p-2">O(n)</td><td className="border p-2">100 iterations</td></tr>
          <tr><td className="border p-2">2 nested loops</td><td className="border p-2">O(n^2)</td><td className="border p-2">10,000 iterations</td></tr>
          <tr><td className="border p-2">3 nested loops</td><td className="border p-2">O(n^3)</td><td className="border p-2">1,000,000 iterations</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Avoid nesting more than 2-3 levels deep</li>
        <li>Consider extracting inner loops into methods</li>
        <li>Use meaningful variable names (row, col vs i, j)</li>
        <li>Be aware of time complexity with large data</li>
        <li>Use labeled break/continue sparingly for clarity</li>
      </ul>
    </div>
  </div>
);

export default NestedLoops;
