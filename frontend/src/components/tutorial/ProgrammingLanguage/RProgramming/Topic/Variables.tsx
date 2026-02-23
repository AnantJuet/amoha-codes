import React from "react";

const Variables: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">Variables in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      A variable is a memory location reserved for storing data, and the name assigned to it is used
      to access and manipulate the stored data. The variable name is an identifier for the allocated
      memory block, which can hold values of various data types during the program's execution.
    </p>

    <p className="leading-relaxed mt-3">
      In R, variables are dynamically typed, meaning they do not require explicit data type declarations.
      Instead, a variable in R automatically adopts the data type of the object assigned to it. This
      flexibility allows variables to change their data type as needed.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Creating Variables in R</h2>

    <p className="leading-relaxed mt-3">
      R supports three ways of variable assignment:
    </p>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>Using equal to operator:</b> <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">variable_name = value</code></li>
      <li><b>Using leftward operator:</b> <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">variable_name &lt;- value</code></li>
      <li><b>Using rightward operator:</b> <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">value -&gt; variable_name</code></li>
    </ul>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Using equal to operator
var1 = "hello"
print(var1)

# Using leftward operator
var2 <- "hello"
print(var2)

# Using rightward operator
"hello" -> var3
print(var3)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "hello"
[1] "hello"
[1] "hello"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Variable Naming Rules</h2>

    <p className="leading-relaxed mt-3">
      When naming variables in R, it's important to follow these rules:
    </p>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>Valid Characters:</b> A variable name can include letters (a-z, A-Z), numbers (0-9), dots (.), and underscores (_). Example: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">var.1_</code> is valid.</li>
      <li><b>No Special Characters:</b> Only dots (.) and underscores (_) are allowed. Other special characters like $ or # are not permitted.</li>
      <li><b>Starting Characters:</b> A variable name can start with a letter or a dot (.). Example: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">.var</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">var</code> are valid.</li>
      <li><b>Cannot Start with Numbers or Underscore:</b> Example: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">2var</code> and <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">_var</code> are invalid.</li>
      <li><b>Dot Before Number:</b> If a variable name starts with a dot, the character following the dot cannot be a number. Example: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">.3var</code> is invalid.</li>
      <li><b>Avoid Reserved Keywords:</b> A variable name cannot be the same as a reserved keyword in R, such as TRUE, FALSE, NA, etc.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Important Methods for Variables</h2>

    <h3 className="text-xl font-bold mt-6">1. class() Function</h3>

    <p className="leading-relaxed mt-3">
      This built-in function is used to determine the data type of the variable provided to it.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`x <- 10
print(class(x))  # Output: "numeric"

y <- "Hello"
print(class(y))  # Output: "character"

z <- TRUE
print(class(z))  # Output: "logical"`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">2. ls() Function</h3>

    <p className="leading-relaxed mt-3">
      This built-in function is used to know all the present variables in the workspace.
      This is helpful when dealing with a large number of variables.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`a <- 1
b <- 2
c <- 3

# List all variables
print(ls())`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "a" "b" "c"`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">3. rm() Function</h3>

    <p className="leading-relaxed mt-3">
      This is a built-in function used to delete an unwanted variable within your workspace.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`x <- 10
print(x)  # Output: 10

rm(x)  # Remove variable x

# Trying to print x now will cause an error
# print(x)  # Error: object 'x' not found`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Scope of Variables</h2>

    <h3 className="text-xl font-bold mt-6">Global Variables</h3>

    <p className="leading-relaxed mt-3">
      Global variables are available throughout the lifetime of a program.
      They are declared anywhere in the program outside all of the functions or blocks.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Global variable
global_var <- "I am global"

my_function <- function() {
  print(global_var)  # Can access global variable
}

my_function()  # Output: "I am global"`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Local Variables</h3>

    <p className="leading-relaxed mt-3">
      Local variables are only accessible within the function or block where they are defined.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`my_function <- function() {
  local_var <- "I am local"
  print(local_var)
}

my_function()  # Output: "I am local"

# print(local_var)  # Error: object 'local_var' not found`}</pre>
    </div>
  </>
);

export default Variables;
