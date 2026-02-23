import React from "react";

const ForLoop: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">For Loop in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      For loop in R Programming Language is useful to iterate over the elements of a list,
      data frame, vector, matrix, or any other object. It means the for loop can be used to
      execute a group of statements repeatedly depending upon the number of elements in the object.
    </p>

    <p className="leading-relaxed mt-3">
      It is an entry-controlled loop, in this loop, the test condition is tested first,
      then the body of the loop is executed. The loop body would not be executed if the
      test condition is false.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Syntax</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`for (var in vector) {
  statement(s)
}`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      Here, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">var</code> takes on each value of the vector during the loop.
      In each iteration, the statements are evaluated.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Iterating over a Range</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# R Program to demonstrate the use of for loop
for (i in 1:4) {
  print(i^2)
}`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] 1
[1] 4
[1] 9
[1] 16`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Using Concatenate Function</h2>

    <p className="leading-relaxed mt-3">
      Instead of using a sequence 1:5, we can use the concatenate function as well.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`for (i in c(2, 4, 6, 8, 10)) {
  print(i)
}`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] 2
[1] 4
[1] 6
[1] 8
[1] 10`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Using Vector Defined Outside the Loop</h2>

    <p className="leading-relaxed mt-3">
      Instead of writing our vector inside the loop, we can also define it beforehand.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`fruits <- c("apple", "banana", "cherry")

for (fruit in fruits) {
  print(fruit)
}`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "apple"
[1] "banana"
[1] "cherry"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Nested For Loop</h2>

    <p className="leading-relaxed mt-3">
      R programming language allows using one loop inside another loop.
      In loop nesting, we can put any type of loop inside of any other type of loop.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Nested for loop example - multiplication table
for (i in 1:3) {
  for (j in 1:3) {
    print(paste(i, "x", j, "=", i * j))
  }
  print("---")
}`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "1 x 1 = 1"
[1] "1 x 2 = 2"
[1] "1 x 3 = 3"
[1] "---"
[1] "2 x 1 = 2"
[1] "2 x 2 = 4"
[1] "2 x 3 = 6"
[1] "---"
...`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Looping Through a List</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`myList <- list(
  name = "John",
  age = 30,
  city = "New York"
)

for (item in myList) {
  print(item)
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Looping Through a Matrix</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`mat <- matrix(1:9, nrow = 3, ncol = 3)

# Loop through rows
for (i in 1:nrow(mat)) {
  print(mat[i, ])
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Looping Through Data Frame</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`df <- data.frame(
  Name = c("John", "Jane", "Bob"),
  Age = c(25, 30, 35)
)

# Loop through rows
for (i in 1:nrow(df)) {
  print(paste(df$Name[i], "is", df$Age[i], "years old"))
}`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "John is 25 years old"
[1] "Jane is 30 years old"
[1] "Bob is 35 years old"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Using seq_along() and seq_len()</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`vec <- c("a", "b", "c", "d")

# Using seq_along
for (i in seq_along(vec)) {
  print(paste("Index:", i, "Value:", vec[i]))
}

# Using seq_len
for (i in seq_len(length(vec))) {
  print(vec[i])
}`}</pre>
    </div>
  </>
);

export default ForLoop;
