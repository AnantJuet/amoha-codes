import React from "react";

const BreakNext: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">Break and Next in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      In R Programming Language, we require a control structure to run a block of code multiple times.
      Loops come in the class of the most fundamental and strong programming concepts.
      A loop is a control statement that allows multiple executions of a statement or a set of statements.
    </p>

    <p className="leading-relaxed mt-3">
      Jump statements are used in loops to terminate the loop at a particular iteration or to skip
      a particular iteration in the loop. The two most commonly used jump statements in loops are:
    </p>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>Break Statement</b></li>
      <li><b>Next Statement</b></li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Break Statement</h2>

    <p className="leading-relaxed mt-3">
      The break statement in R is a jump statement that is used to terminate the loop at a particular iteration.
      Sometimes there will be such a condition where we need to terminate the loop to continue with the rest of the program.
    </p>

    <h3 className="text-xl font-bold mt-6">Syntax</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`if (test_expression) {
  break
}`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Break Statement in For Loop</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# R program for break statement in For-loop
no <- 1:10

for (val in no) {
  if (val == 5) {
    print(paste("Coming out from for loop where val =", val))
    break
  }
  print(paste("Values are:", val))
}`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Values are: 1"
[1] "Values are: 2"
[1] "Values are: 3"
[1] "Values are: 4"
[1] "Coming out from for loop where val = 5"`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      Here the loop exits as soon as 5 is encountered.
    </p>

    <h3 className="text-xl font-bold mt-6">Break Statement in While Loop</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# R program for break statement in While-loop
i <- 1

while (i <= 10) {
  if (i == 6) {
    print("Breaking the while loop")
    break
  }
  print(paste("i =", i))
  i <- i + 1
}`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "i = 1"
[1] "i = 2"
[1] "i = 3"
[1] "i = 4"
[1] "i = 5"
[1] "Breaking the while loop"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Next Statement</h2>

    <p className="leading-relaxed mt-3">
      The next statement in R is used to skip the current iteration in the loop and move to the
      next iteration without exiting from the loop itself. It discontinues a particular iteration
      and jumps to the next iteration.
    </p>

    <h3 className="text-xl font-bold mt-6">Syntax</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`if (test_expression) {
  next
}`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Next Statement in For Loop</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# R program for next statement in For-loop
no <- 1:10

for (val in no) {
  if (val == 5) {
    print("Skipping 5")
    next
  }
  print(paste("Value:", val))
}`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Value: 1"
[1] "Value: 2"
[1] "Value: 3"
[1] "Value: 4"
[1] "Skipping 5"
[1] "Value: 6"
[1] "Value: 7"
[1] "Value: 8"
[1] "Value: 9"
[1] "Value: 10"`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Next Statement in While Loop</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# R program for next statement in While-loop
# Skip even numbers

i <- 0

while (i < 10) {
  i <- i + 1

  if (i %% 2 == 0) {
    next  # Skip even numbers
  }

  print(paste("Odd number:", i))
}`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Odd number: 1"
[1] "Odd number: 3"
[1] "Odd number: 5"
[1] "Odd number: 7"
[1] "Odd number: 9"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Difference Between Break and Next</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Break</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Next</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Terminates the entire loop</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Skips current iteration only</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Execution continues after the loop</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Execution continues with next iteration</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Use when you want to stop the loop completely</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Use when you want to skip specific iterations</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Combined Example</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Find first number divisible by both 3 and 5
# but skip multiples of 2

for (i in 1:50) {
  # Skip even numbers
  if (i %% 2 == 0) {
    next
  }

  # Check if divisible by both 3 and 5
  if (i %% 3 == 0 && i %% 5 == 0) {
    print(paste("Found:", i))
    break
  }

  print(paste("Checking:", i))
}`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Checking: 1"
[1] "Checking: 3"
[1] "Checking: 5"
[1] "Checking: 7"
[1] "Checking: 9"
[1] "Checking: 11"
[1] "Checking: 13"
[1] "Found: 15"`}</pre>
    </div>
  </>
);

export default BreakNext;
