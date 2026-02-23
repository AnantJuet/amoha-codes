import React from "react";

const Functions: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">Functions in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      A function accepts input arguments and produces the output by executing valid R commands
      that are inside the function. Functions are useful when we want to perform a certain task multiple times.
    </p>

    <p className="leading-relaxed mt-3">
      In R Programming Language, when we are creating a function, the function name and the file
      in which we are creating the function need not be the same and we can have one or more functions in R.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Creating a Function</h2>

    <p className="leading-relaxed mt-3">
      Functions are created in R by using the command <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">function()</code>.
      The general structure is:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`function_name <- function(parameters) {
  # function body
  return(value)
}`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Example: Simple Function</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`add_num <- function(a, b) {
  sum_result <- a + b
  return(sum_result)
}

sum = add_num(35, 34)
print(sum)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] 69`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Parameters and Arguments</h2>

    <p className="leading-relaxed mt-3">
      In programming, parameters and arguments refer to the values passed into a function:
    </p>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>Parameters:</b> The variables defined in the function definition.</li>
      <li><b>Arguments:</b> The actual values passed to the function when it is called.</li>
    </ul>

    <h3 className="text-xl font-bold mt-6">Function Parameter Rules</h3>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>Number of Parameters:</b> A function should be called with the correct number of parameters. If the number doesn't match, an error occurs.</li>
      <li><b>Default Parameter Values:</b> Some functions have default values for parameters. If no argument is passed, these defaults are used.</li>
      <li><b>Return Value:</b> The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">return()</code> function sends the result back from the function.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Calling a Function</h2>

    <p className="leading-relaxed mt-3">
      After creating a function, we have to call the function to use it. Calling a function in R
      is done by writing its name and passing possible parameter values.
    </p>

    <h3 className="text-xl font-bold mt-6">Different Ways to Pass Arguments</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Define function
greet <- function(name, greeting = "Hello") {
  return(paste(greeting, name))
}

# Case 1: Arguments in order
print(greet("John", "Hi"))

# Case 2: Arguments by name (any order)
print(greet(greeting = "Welcome", name = "Jane"))

# Case 3: Using default value
print(greet("Bob"))`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Hi John"
[1] "Welcome Jane"
[1] "Hello Bob"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Types of Functions in R</h2>

    <h3 className="text-xl font-bold mt-6">1. Built-in Functions</h3>

    <p className="leading-relaxed mt-3">
      Built-in functions in R are pre-defined functions available in R programming language to perform common tasks.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Mathematical functions
print(sqrt(16))      # Square root
print(abs(-5))       # Absolute value
print(round(3.7))    # Round
print(ceiling(3.2))  # Ceiling
print(floor(3.8))    # Floor

# Statistical functions
vec <- c(1, 2, 3, 4, 5)
print(mean(vec))     # Mean
print(sum(vec))      # Sum
print(max(vec))      # Maximum
print(min(vec))      # Minimum
print(length(vec))   # Length`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">2. User-defined Functions</h3>

    <p className="leading-relaxed mt-3">
      R language allows us to write our own functions.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Function to calculate factorial
factorial_func <- function(n) {
  if (n == 0 || n == 1) {
    return(1)
  }
  result <- 1
  for (i in 2:n) {
    result <- result * i
  }
  return(result)
}

print(factorial_func(5))  # 120`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Functions with Multiple Return Values</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Return multiple values using a list
calculate_stats <- function(vec) {
  return(list(
    mean = mean(vec),
    median = median(vec),
    sd = sd(vec),
    sum = sum(vec)
  ))
}

data <- c(10, 20, 30, 40, 50)
stats <- calculate_stats(data)

print(stats$mean)
print(stats$median)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] 30
[1] 30`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Recursive Functions</h2>

    <p className="leading-relaxed mt-3">
      A recursive function is a function that calls itself.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Recursive factorial
recursive_factorial <- function(n) {
  if (n == 0 || n == 1) {
    return(1)
  }
  return(n * recursive_factorial(n - 1))
}

print(recursive_factorial(5))  # 120

# Recursive Fibonacci
fibonacci <- function(n) {
  if (n <= 1) {
    return(n)
  }
  return(fibonacci(n - 1) + fibonacci(n - 2))
}

print(fibonacci(10))  # 55`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Anonymous Functions</h2>

    <p className="leading-relaxed mt-3">
      Anonymous functions are functions without a name, often used with apply functions.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Anonymous function with sapply
numbers <- 1:5
squares <- sapply(numbers, function(x) x^2)
print(squares)

# Anonymous function with lapply
result <- lapply(1:3, function(x) x * 10)
print(result)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1]  1  4  9 16 25
[[1]]
[1] 10

[[2]]
[1] 20

[[3]]
[1] 30`}</pre>
    </div>
  </>
);

export default Functions;
