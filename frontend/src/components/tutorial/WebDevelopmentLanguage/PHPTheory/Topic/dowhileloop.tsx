import React from "react";

const PhpDoWhileLoop: React.FC = () => {
  return (
    <div style={{ padding: "20px", lineHeight: 1.7 }}>
      <h1>PHP do...while Loop</h1>

      <p>
        The PHP <b>do...while</b> loop executes a block of code <b>at least
        once</b>, and then repeats the loop as long as the specified condition
        is true.
      </p>

      <h2>Basic do...while Loop</h2>
      <p>Print $i as long as $i is less than 6:</p>

      <pre>
{`$i = 1;

do {
  echo $i;
  $i++;
} while ($i < 6);`}
      </pre>

      <p>
        <b>Note:</b> In a do...while loop, the condition is tested <b>after</b>
        executing the statements within the loop. This ensures the loop runs at
        least once, even if the condition is false.
      </p>

      <h2>Example: Condition False Initially</h2>
      <p>
        Set $i = 8, then print $i as long as $i is less than 6:
      </p>

      <pre>
{`$i = 8;

do {
  echo $i;
  $i++;
} while ($i < 6);`}
      </pre>

      <p>
        The block of code is executed <b>once</b>, even though the condition
        never becomes true.
      </p>

      <h2>PHP break Statement</h2>
      <p>Stop the loop when $i is 3:</p>

      <pre>
{`$i = 1;

do {
  if ($i == 3) break;
  echo $i;
  $i++;
} while ($i < 6);`}
      </pre>

      <h2>PHP continue Statement</h2>
      <p>
        Skip the current iteration when $i is 3 and continue with the next:
      </p>

      <pre>
{`$i = 0;

do {
  $i++;
  if ($i == 3) continue;
  echo $i;
} while ($i < 6);`}
      </pre>
    </div>
  );
};

export default PhpDoWhileLoop;
