import React from "react";

const SwiftNestedLoops: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Swift Nested Loops
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Place a loop inside another loop to generate combinations, matrices, or iterate through
      multi-dimensional data structures. The inner loop completes all iterations for each
      iteration of the outer loop.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic Nested Loop</h2>
    <p className="text-lg leading-relaxed mt-2">
      Use inner and outer loops to produce pairs or grids from ranges and collections:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`for i in 1...2 {
    for j in 1...3 {
        print("(\\(i), \\(j))")
    }
}

// Output:
// (1, 1)
// (1, 2)
// (1, 3)
// (2, 1)
// (2, 2)
// (2, 3)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Multiplication Table</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`for i in 1...5 {
    for j in 1...5 {
        let product = i * j
        print("\\(i) x \\(j) = \\(product)")
    }
    print("---")
}

// Output (partial):
// 1 x 1 = 1
// 1 x 2 = 2
// ...
// 5 x 5 = 25`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Creating a Grid Pattern</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let rows = 3
let cols = 4

for row in 1...rows {
    var line = ""
    for col in 1...cols {
        line += "* "
    }
    print(line)
}

// Output:
// * * * *
// * * * *
// * * * *`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Triangle Pattern</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let height = 5

for i in 1...height {
    var row = ""
    for _ in 1...i {
        row += "* "
    }
    print(row)
}

// Output:
// *
// * *
// * * *
// * * * *
// * * * * *`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">2D Array Iteration</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for row in matrix {
    for element in row {
        print(element, terminator: " ")
    }
    print()  // New line after each row
}

// Output:
// 1 2 3
// 4 5 6
// 7 8 9`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Finding Pairs</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`let numbers = [1, 2, 3, 4]

// Find all unique pairs
for i in 0..<numbers.count {
    for j in (i + 1)..<numbers.count {
        print("(\\(numbers[i]), \\(numbers[j]))")
    }
}

// Output:
// (1, 2)
// (1, 3)
// (1, 4)
// (2, 3)
// (2, 4)
// (3, 4)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Nested Loop with Break</h2>
    <p className="text-lg leading-relaxed mt-2">
      Use labeled statements to break out of specific loops:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Break only inner loop
for i in 1...3 {
    for j in 1...3 {
        if j == 2 {
            break  // Exits inner loop only
        }
        print("(\\(i), \\(j))")
    }
}

// Output:
// (1, 1)
// (2, 1)
// (3, 1)

// Break outer loop with label
outerLoop: for i in 1...3 {
    for j in 1...3 {
        if i == 2 && j == 2 {
            break outerLoop  // Exits both loops
        }
        print("(\\(i), \\(j))")
    }
}

// Output:
// (1, 1)
// (1, 2)
// (1, 3)
// (2, 1)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Nested Loop with Continue</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// Skip specific combinations
for i in 1...3 {
    for j in 1...3 {
        if i == j {
            continue  // Skip when i equals j
        }
        print("(\\(i), \\(j))")
    }
}

// Output (diagonal skipped):
// (1, 2)
// (1, 3)
// (2, 1)
// (2, 3)
// (3, 1)
// (3, 2)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Triple Nested Loop</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
{`// 3D coordinates
for x in 1...2 {
    for y in 1...2 {
        for z in 1...2 {
            print("(\\(x), \\(y), \\(z))")
        }
    }
}

// Output: All 8 combinations of (x, y, z)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Performance Consideration</h2>
    <table className="min-w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Nested Levels</th>
          <th className="border border-gray-300 px-4 py-2">Iterations (n=10)</th>
          <th className="border border-gray-300 px-4 py-2">Complexity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Single loop</td>
          <td className="border border-gray-300 px-4 py-2">10</td>
          <td className="border border-gray-300 px-4 py-2">O(n)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Double nested</td>
          <td className="border border-gray-300 px-4 py-2">100</td>
          <td className="border border-gray-300 px-4 py-2">O(n²)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Triple nested</td>
          <td className="border border-gray-300 px-4 py-2">1,000</td>
          <td className="border border-gray-300 px-4 py-2">O(n³)</td>
        </tr>
      </tbody>
    </table>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="text-yellow-700">
        <strong>Warning:</strong> Nested loops multiply iterations. A triple nested loop with
        n=100 runs 1,000,000 times. Be mindful of performance and consider alternative approaches
        for large data sets.
      </p>
    </div>
  </div>
);

export default SwiftNestedLoops;
