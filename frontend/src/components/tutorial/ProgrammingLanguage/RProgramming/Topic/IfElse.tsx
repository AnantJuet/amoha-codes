import React from "react";

const IfElse: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">If-Else in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      Decision making in programming allows us to control the flow of execution based on specific
      conditions. In R, various decision-making structures help us execute statements conditionally.
    </p>

    <p className="leading-relaxed mt-3">
      These include:
    </p>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li>if statement</li>
      <li>if-else statement</li>
      <li>if-else-if ladder</li>
      <li>nested if-else statement</li>
      <li>switch statement</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">1. if Statement</h2>

    <p className="leading-relaxed mt-3">
      The if statement evaluates a condition. If the condition is TRUE, the associated statement is executed.
      If the condition is FALSE, the statement is skipped.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`a <- 76
b <- 67

if (a > b) {
  c <- a - b
  print("condition a > b is TRUE")
  print(paste("Difference between a, b is:", c))
}

if (a < b) {
  c <- a - b
  print("condition a < b is TRUE")
  print(paste("Difference between a, b is:", c))
}`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "condition a > b is TRUE"
[1] "Difference between a, b is: 9"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">2. if-else Statement</h2>

    <p className="leading-relaxed mt-3">
      The if-else statement executes one block if the condition is TRUE and another if it is FALSE.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`a <- 67
b <- 76

if (a > b) {
  c <- a - b
  print("condition a > b is TRUE")
  print(paste("Difference between a, b is:", c))
} else {
  c <- b - a
  print("condition a > b is FALSE")
  print(paste("Difference between a, b is:", c))
}`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "condition a > b is FALSE"
[1] "Difference between a, b is: 9"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">3. if-else-if Ladder</h2>

    <p className="leading-relaxed mt-3">
      This structure chains multiple conditions together. Each condition is evaluated in sequence.
      If a condition is TRUE, its block is executed. Otherwise, the next condition is checked.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`marks <- 75

if (marks >= 90) {
  print("Grade: A+")
} else if (marks >= 80) {
  print("Grade: A")
} else if (marks >= 70) {
  print("Grade: B")
} else if (marks >= 60) {
  print("Grade: C")
} else {
  print("Grade: F")
}`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Grade: B"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">4. Nested if-else Statement</h2>

    <p className="leading-relaxed mt-3">
      You can nest if-else statements inside each other for more complex decision-making.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`num <- 15

if (num > 0) {
  if (num %% 2 == 0) {
    print("Positive and Even")
  } else {
    print("Positive and Odd")
  }
} else if (num < 0) {
  print("Negative number")
} else {
  print("Zero")
}`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Positive and Odd"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">5. switch Statement</h2>

    <p className="leading-relaxed mt-3">
      The switch statement allows multi-way branching based on a value.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`day <- 3

result <- switch(
  day,
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
)

print(result)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Tuesday"`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Switch with Named Values</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`fruit <- "apple"

color <- switch(
  fruit,
  "apple" = "red",
  "banana" = "yellow",
  "grape" = "purple",
  "unknown"  # default
)

print(color)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "red"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">ifelse() Function</h2>

    <p className="leading-relaxed mt-3">
      R also provides a vectorized <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">ifelse()</code> function
      for element-wise conditional operations.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`x <- c(1, -2, 3, -4, 5)

result <- ifelse(x > 0, "positive", "non-positive")
print(result)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "positive"     "non-positive" "positive"     "non-positive" "positive"`}</pre>
    </div>
  </>
);

export default IfElse;
