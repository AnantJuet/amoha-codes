import React from "react";

const PhpMultidimensionalArrayTutorial: React.FC = () => {
  // PHP multidimensional array converted to TypeScript
  const cars: (string | number)[][] = [
    ["Volvo", 22, 18],
    ["BMW", 15, 13],
    ["Saab", 5, 2],
    ["Land Rover", 17, 15]
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>PHP Multidimensional Arrays (TSX Tutorial Version)</h1>

      <h2>What is a Multidimensional Array?</h2>
      <p>
        In PHP, a multidimensional array is an array that contains one or more
        arrays. The same concept can be implemented in React with TypeScript.
        Each nested array represents a row of data.
      </p>

      <h2>Example: Two-Dimensional Array (PHP → TSX)</h2>
      <pre>
{`
const cars = [
  ["Volvo", 22, 18],
  ["BMW", 15, 13],
  ["Saab", 5, 2],
  ["Land Rover", 17, 15]
];
`}
      </pre>

      <h2>Accessing Elements</h2>
      <p>
        Just like in PHP, you can access elements using row and column indexes:
      </p>

      <pre>
{`
cars[0][0] → "Volvo"
cars[0][1] → 22
cars[0][2] → 18
`}
      </pre>

      <h3>TSX Output (Equivalent to PHP echo):</h3>

      <p>{cars[0][0]}: In stock: {cars[0][1]}, sold: {cars[0][2]}.</p>
      <p>{cars[1][0]}: In stock: {cars[1][1]}, sold: {cars[1][2]}.</p>
      <p>{cars[2][0]}: In stock: {cars[2][1]}, sold: {cars[2][2]}.</p>
      <p>{cars[3][0]}: In stock: {cars[3][1]}, sold: {cars[3][2]}.</p>

      <h2>Looping Through a Multidimensional Array</h2>
      <p>
        In PHP, you would use nested <code>for</code> loops. In React (TSX), we
        use nested <code>map()</code> loops to achieve the same result.
      </p>

      <h3>Nested Loop Equivalent in TSX:</h3>

      {cars.map((row, rowIndex) => (
        <div key={rowIndex}>
          <p>
            <b>Row number {rowIndex}</b>
          </p>
          <ul>
            {row.map((col, colIndex) => (
              <li key={colIndex}>{col}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2>Summary</h2>
      <ul>
        <li>A multidimensional array stores arrays inside another array.</li>
        <li>The structure in TSX is identical to PHP's nested array structure.</li>
        <li>You can access elements using: <code>cars[row][column]</code></li>
        <li>
          Nested <code>map()</code> loops work the same way as nested{" "}
          <code>for</code> loops in PHP.
        </li>
      </ul>

      <h2>More Features You Can Add</h2>
      <p>I can also create:</p>
      <ul>
        <li>A 3-dimensional array demonstration</li>
        <li>Interactive table examples</li>
        <li>A full W3Schools-style PHP Arrays section in TSX</li>
        <li>Dark/Light theme tutorial layout</li>
      </ul>
    </div>
  );
};

export default PhpMultidimensionalArrayTutorial;
