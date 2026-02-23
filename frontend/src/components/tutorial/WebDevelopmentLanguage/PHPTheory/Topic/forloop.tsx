// import React from "react";

// const PhpForLoop: React.FC = () => {
//   return (
//     <div style={{ padding: "20px", lineHeight: 1.7 }}>
//       <h1>PHP for Loop</h1>

//       <p>
//         The PHP <b>for</b> loop executes a block of code a specified number of times.
//       </p>

//       <h2>Basic Syntax</h2>
//       <pre>
//         {`for (expression1; expression2; expression3) {
//   // code block
// }`}
//       </pre>

//       <p>
//         How it works:
//         <ul>
//           <li><b>expression1:</b> evaluated once before the loop starts</li>
//           <li><b>expression2:</b> evaluated before each iteration; loop runs while true</li>
//           <li><b>expression3:</b> evaluated after each iteration</li>
//         </ul>
//       </p>

//       <h2>Example: Print numbers from 0 to 10</h2>
//       <pre>
//         {`for ($x = 0; $x <= 10; $x++) {
//   echo "The number is: $x <br>";
// }`}
//       </pre>

//       <p>Explanation:</p>
//       <ul>
//         <li>$x = 0 sets the counter</li>
//         <li>$x {'<'}= 10 is checked before each iteration</li>
//         <li>$x++ increments $x after each iteration</li>
//       </ul>

//       <h2>PHP break Statement</h2>
//       <p>Stop the loop when $x is 3:</p>
//       <pre>
//         {`for ($x = 0; $x <= 10; $x++) {
//   if ($x == 3) break;
//   echo "The number is: $x <br>";
// }`}
//       </pre>

//       <h2>PHP continue Statement</h2>
//       <p>Skip the iteration when $x is 3 and continue with the next:</p>
//       <pre>
//         {`for ($x = 0; $x <= 10; $x++) {
//   if ($x == 3) continue;
//   echo "The number is: $x <br>";
// }`}
//       </pre>

//       <h2>Counting by Tens</h2>
//       <p>Count to 100 by tens:</p>
//       <pre>
//         {`for ($x = 0; $x <= 100; $x += 10) {
//   echo "The number is: $x <br>";
// }`}
//       </pre>
//     </div>
//   );
// };

// export default PhpForLoop;


import React from "react";

const PhpForLoop: React.FC = () => {
  return (
    <div style={{ padding: "20px", lineHeight: 1.7 }}>
      <h1>PHP for Loop</h1>

      <p>
        The PHP <b>for</b> loop executes a block of code a specified number of times.
      </p>

      <h2>Basic Syntax</h2>
      <pre>
        {`for (expression1; expression2; expression3) {
  // code block
}`}
      </pre>

      <p>How it works:</p>
      <ul>
        <li><b>expression1:</b> evaluated once before the loop starts</li>
        <li><b>expression2:</b> evaluated before each iteration; loop runs while true</li>
        <li><b>expression3:</b> evaluated after each iteration</li>
      </ul>

      <h2>Example: Print numbers from 0 to 10</h2>
      <pre>
        {`for ($x = 0; $x <= 10; $x++) {
  echo "The number is: $x <br>";
}`}
      </pre>

      <p>Explanation:</p>
      <ul>
        <li>$x = 0 sets the counter</li>
        <li>$x &lt;= 10 is checked before each iteration</li>
        <li>$x++ increments $x after each iteration</li>
      </ul>

      <h2>PHP break Statement</h2>
      <p>Stop the loop when $x is 3:</p>
      <pre>
        {`for ($x = 0; $x <= 10; $x++) {
  if ($x == 3) break;
  echo "The number is: $x <br>";
}`}
      </pre>

      <h2>PHP continue Statement</h2>
      <p>Skip the iteration when $x is 3 and continue with the next:</p>
      <pre>
        {`for ($x = 0; $x <= 10; $x++) {
  if ($x == 3) continue;
  echo "The number is: $x <br>";
}`}
      </pre>

      <h2>Counting by Tens</h2>
      <p>Count to 100 by tens:</p>
      <pre>
        {`for ($x = 0; $x <= 100; $x += 10) {
  echo "The number is: $x <br>";
}`}
      </pre>
    </div>
  );
};

export default PhpForLoop;
