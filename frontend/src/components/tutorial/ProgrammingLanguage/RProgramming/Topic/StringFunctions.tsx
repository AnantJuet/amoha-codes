import React from "react";

const StringFunctions: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">String Functions in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      String manipulation is a process of handling and analyzing strings. It involves various
      operations of modification and parsing of strings to use and change its data. R offers
      a series of in-built functions to manipulate a string.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Concatenation of Strings</h2>

    <h3 className="text-xl font-bold mt-6">1. Using paste() function</h3>

    <p className="leading-relaxed mt-3">
      Any number of strings can be concatenated together using the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">paste()</code> function.
      This function takes separator as argument which is used between the individual string elements.
      It also has 'collapse' argument which reflects if we wish to print the strings together.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`str <- paste("Learn", "Code")
print(str)

# With custom separator
str <- paste("Learn", "Code", sep = "--")
print(str)

# With collapse
words <- c("R", "is", "awesome")
str <- paste(words, collapse = " ")
print(str)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Learn Code"
[1] "Learn--Code"
[1] "R is awesome"`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">2. Using cat() function</h3>

    <p className="leading-relaxed mt-3">
      Different types of strings can be concatenated together using the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">cat()</code> function,
      where sep specifies the separator between the strings.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`cat("R", "Programming", sep = " : ")

# Writing to a file
cat("Hello", "World", file = "output.txt", sep = " ")`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`R : Programming`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Calculating Length of Strings</h2>

    <h3 className="text-xl font-bold mt-6">1. Using length() function</h3>

    <p className="leading-relaxed mt-3">
      Returns the number of elements in a vector of strings.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`strings <- c("Hello", "World", "R")
print(length(strings))  # Number of strings`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">2. Using nchar() function</h3>

    <p className="leading-relaxed mt-3">
      Returns the number of characters in each string.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`strings <- c("Hello", "World", "R")
print(nchar(strings))  # Characters in each string`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] 3
[1] 5 5 1`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Case Conversion of Strings</h2>

    <h3 className="text-xl font-bold mt-6">1. Conversion to Upper Case</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`str <- "hello world"
print(toupper(str))`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">2. Conversion to Lower Case</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`str <- "HELLO WORLD"
print(tolower(str))`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">String Search and Replace</h2>

    <h3 className="text-xl font-bold mt-6">grep() and grepl()</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`fruits <- c("apple", "banana", "apricot", "cherry")

# Find indices containing "ap"
print(grep("ap", fruits))

# Return logical vector
print(grepl("ap", fruits))

# Return matching values
print(grep("ap", fruits, value = TRUE))`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] 1 3
[1]  TRUE FALSE  TRUE FALSE
[1] "apple"   "apricot"`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">sub() and gsub()</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`str <- "Hello World World"

# Replace first occurrence
print(sub("World", "R", str))

# Replace all occurrences
print(gsub("World", "R", str))`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Hello R World"
[1] "Hello R R"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">String Splitting</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`str <- "apple,banana,cherry"

# Split by comma
result <- strsplit(str, ",")
print(result)

# Split multiple strings
strings <- c("a-b-c", "x-y-z")
result <- strsplit(strings, "-")
print(result)`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">String Trimming</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`str <- "   Hello World   "

# Remove leading and trailing whitespace
print(trimws(str))

# Remove only leading whitespace
print(trimws(str, which = "left"))

# Remove only trailing whitespace
print(trimws(str, which = "right"))`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Hello World"
[1] "Hello World   "
[1] "   Hello World"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Other Useful String Functions</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# chartr() - Character translation
str <- "hello"
print(chartr("el", "ip", str))  # "hippo" -> actually "hippo"

# abbreviate() - Abbreviate strings
names <- c("California", "Massachusetts", "Pennsylvania")
print(abbreviate(names, minlength = 4))

# sprintf() - Format strings
name <- "John"
age <- 25
print(sprintf("%s is %d years old", name, age))

# format() - Format values
print(format(12345.678, nsmall = 2, big.mark = ","))`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Regular Expressions</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Find strings starting with 'a'
fruits <- c("apple", "banana", "apricot", "cherry")
print(grep("^a", fruits, value = TRUE))

# Find strings ending with 'y'
print(grep("y$", fruits, value = TRUE))

# Find strings containing digits
mixed <- c("abc", "a1b", "123", "xyz")
print(grep("[0-9]", mixed, value = TRUE))`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "apple"   "apricot"
[1] "cherry"
[1] "a1b" "123"`}</pre>
    </div>
  </>
);

export default StringFunctions;
