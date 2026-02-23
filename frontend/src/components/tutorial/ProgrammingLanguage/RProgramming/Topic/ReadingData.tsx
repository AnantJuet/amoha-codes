import React from "react";

const ReadingData: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">Reading Data in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      Developers often have a need to interact with users, either to get data or to provide some
      sort of result. Most programs today use a dialog box as a way of asking the user to provide
      some type of input. Like other programming languages, in R it's also possible to take input from the user.
    </p>

    <p className="leading-relaxed mt-3">
      There are two main methods for taking input in R:
    </p>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li>Using <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">readline()</code> method</li>
      <li>Using <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">scan()</code> method</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Using readline() Method</h2>

    <p className="leading-relaxed mt-3">
      In R language, <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">readline()</code> method takes
      input in string format. If one inputs an integer then it is inputted as a string. So one needs
      to convert that inputted value to the format that is needed.
    </p>

    <h3 className="text-xl font-bold mt-6">Type Conversion Functions</h3>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">as.integer(n)</code> - convert to integer</li>
      <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">as.numeric(n)</code> - convert to numeric type (float, double etc)</li>
      <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">as.complex(n)</code> - convert to complex number (i.e 3+2i)</li>
      <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">as.Date(n)</code> - convert to date</li>
    </ul>

    <h3 className="text-xl font-bold mt-6">Basic Input Example</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# R program to illustrate taking input from the user

# Taking input using readline()
# This command will prompt you to input a desired value
var = readline()

# Convert the inputted value to integer
var = as.integer(var)

# Print the value
print(var)`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Using Prompt Message</h3>

    <p className="leading-relaxed mt-3">
      You can show a message in the console to tell the user what to input by using the
      <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">prompt</code> argument.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# With prompt message
var1 = readline(prompt = "Enter any number: ")

# Or simply
var1 = readline("Enter any number: ")

# Convert to integer
var1 = as.integer(var1)
print(var1)`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Taking Multiple Inputs</h3>

    <p className="leading-relaxed mt-3">
      Taking multiple inputs in R language is the same as taking a single input,
      just need to define multiple <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">readline()</code> for inputs.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Taking multiple inputs
{
  var1 = readline("Enter 1st number: ")
  var2 = readline("Enter 2nd number: ")
  var3 = readline("Enter 3rd number: ")
  var4 = readline("Enter 4th number: ")
}

# Convert to integers
var1 = as.integer(var1)
var2 = as.integer(var2)
var3 = as.integer(var3)
var4 = as.integer(var4)

# Calculate sum
sum = var1 + var2 + var3 + var4
print(paste("Sum:", sum))`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">String and Character Input</h3>

    <p className="leading-relaxed mt-3">
      For "String" one doesn't need to convert the inputted data because R takes input as string always.
      For "character", it needs to be converted to 'character'.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# String input
name = readline(prompt = "Enter your name: ")
print(name)

# Character input
char = readline(prompt = "Enter any character: ")
char = as.character(char)
print(char)`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Using scan() Method</h2>

    <p className="leading-relaxed mt-3">
      The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">scan()</code> function is used to read
      data from the console or from a file. It's useful when you need to input multiple values.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Read numeric values (press Enter twice to stop)
numbers <- scan()
print(numbers)

# Read character values
words <- scan(what = character())
print(words)

# Read a specific number of values
numbers <- scan(n = 5)
print(numbers)`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Reading from Files</h2>

    <h3 className="text-xl font-bold mt-6">Reading CSV Files</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Read CSV file
data <- read.csv("data.csv")
print(data)

# With header
data <- read.csv("data.csv", header = TRUE)

# Specify separator
data <- read.csv("data.csv", sep = ",")

# Read first few rows
head(data)`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Reading Text Files</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Read text file
lines <- readLines("file.txt")
print(lines)

# Read table
data <- read.table("data.txt", header = TRUE)
print(data)`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Reading Excel Files</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Using readxl package
# install.packages("readxl")
library(readxl)

data <- read_excel("data.xlsx")
print(data)

# Specify sheet
data <- read_excel("data.xlsx", sheet = "Sheet1")`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Interactive Calculator Example</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Simple calculator using readline
num1 <- as.numeric(readline("Enter first number: "))
num2 <- as.numeric(readline("Enter second number: "))
operation <- readline("Enter operation (+, -, *, /): ")

result <- switch(
  operation,
  "+" = num1 + num2,
  "-" = num1 - num2,
  "*" = num1 * num2,
  "/" = num1 / num2,
  "Invalid operation"
)

print(paste("Result:", result))`}</pre>
    </div>
  </>
);

export default ReadingData;
