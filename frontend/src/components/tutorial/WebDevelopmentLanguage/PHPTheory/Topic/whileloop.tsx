import React from "react";

const PhpWhileLoop: React.FC = () => {
  return (
    <div style={{ padding: "20px", lineHeight: 1.7 }}>
      <h1>PHP while Loop</h1>

      <p>
        The PHP <b>while</b> loop executes a block of code as long as the
        specified condition is true.
      </p>

      <h2>Basic while Loop</h2>
      <p>Print $i as long as $i is less than 6:</p>

      <pre>
{`$i = 1;
while ($i < 6) {
  echo $i;
  $i++;
}`}
      </pre>

      <p>
        <b>Note:</b> Remember to increment <b>$i</b>, otherwise the loop will
        run forever.
      </p>

      <p>
        The while loop does not run a fixed number of times. Instead, after each
        iteration, it checks whether the condition is still true.
      </p>

      <p>
        The condition can be anything that evaluates to either <b>true</b> or{" "}
        <b>false</b>; it does not necessarily have to be a counter.
      </p>

      <h2>PHP break Statement</h2>
      <p>Stop the loop even if the condition is still true:</p>

      <pre>
{`$i = 1;
while ($i < 6) {
  if ($i == 3) break;
  echo $i;
  $i++;
}`}
      </pre>

      <h2>PHP continue Statement</h2>
      <p>Skip the current iteration when $i is 3:</p>

      <pre>
{`$i = 0;
while ($i < 6) {
  $i++;
  if ($i == 3) continue;
  echo $i;
}`}
      </pre>

      <h2>Alternative Syntax</h2>
      <p>
        PHP also allows an alternative syntax using <b>endwhile</b>:
      </p>

      <pre>
{`$i = 1;
while ($i < 6):
  echo $i;
  $i++;
endwhile;`}
      </pre>

      <h2>Step 10 Increment Example</h2>
      <p>Count to 100 by tens:</p>

      <pre>
{`$i = 0;
while ($i < 100) {
  $i += 10;
  echo $i . "<br>";
}`}
      </pre>
    </div>
  );
};

export default PhpWhileLoop;
