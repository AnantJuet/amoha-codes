import React from "react";

const Strings: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">Strings in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      Strings are a bunch of character variables. It is a one-dimensional array of characters.
      One or more characters enclosed in a pair of matching single or double quotes can be considered
      a string in R.
    </p>

    <p className="leading-relaxed mt-3">
      It represents textual content and can contain numbers, spaces, and special characters.
      An empty string is represented by using "". R Strings are always stored as double-quoted values.
    </p>

    <p className="leading-relaxed mt-3">
      <b>Note:</b> A double-quoted string can contain single quotes within it. Single-quoted strings
      can't contain single quotes. Similarly, double quotes can't be surrounded by double quotes.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">1. Creation of Strings</h2>

    <p className="leading-relaxed mt-3">
      R Strings can be created by assigning character values to a variable.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Using double quotes
str1 <- "Hello World"
print(str1)

# Using single quotes
str2 <- 'Hello R'
print(str2)

# String with single quotes inside double quotes
str3 <- "This is 'acceptable' and 'allowed' in R"
print(str3)

# String with double quotes inside single quotes
str4 <- 'He said "Hello"'
print(str4)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Hello World"
[1] "Hello R"
[1] "This is 'acceptable' and 'allowed' in R"
[1] "He said \"Hello\""`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">2. Length of Strings</h2>

    <p className="leading-relaxed mt-3">
      The length of strings indicates the number of characters present in the string.
    </p>

    <h3 className="text-xl font-bold mt-6">Using nchar() function</h3>

    <p className="leading-relaxed mt-3">
      <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">nchar()</code> is a built-in function
      of R and can be used to determine the length of strings.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`str <- "Hello World"
print(nchar(str))

# For vector of strings
strings <- c("apple", "banana", "cherry")
print(nchar(strings))`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] 11
[1] 5 6 6`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">3. Accessing Portions of a String</h2>

    <p className="leading-relaxed mt-3">
      The individual characters of a string can be extracted using indexing methods.
    </p>

    <h3 className="text-xl font-bold mt-6">Using substr() function</h3>

    <p className="leading-relaxed mt-3">
      <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">substr()</code> function extracts
      substrings beginning with the start index and ending with the end index.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`str <- "Hello World"

# Extract substring from position 1 to 5
print(substr(str, 1, 5))

# Extract substring from position 7 to 11
print(substr(str, 7, 11))`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Hello"
[1] "World"`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Using substring() function</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`str <- "Hello World"

# Extract from position 7 to end
print(substring(str, 7))`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">4. Case Conversion</h2>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">toupper()</code> converts all the characters to upper case</li>
      <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">tolower()</code> converts all the characters to lower case</li>
      <li><code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">casefold(..., upper=TRUE/FALSE)</code> converts on the basis of the value specified</li>
    </ul>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`str <- "Hello World"

# Convert to upper case
print(toupper(str))

# Convert to lower case
print(tolower(str))

# Using casefold
print(casefold(str, upper = TRUE))
print(casefold(str, upper = FALSE))`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "HELLO WORLD"
[1] "hello world"
[1] "HELLO WORLD"
[1] "hello world"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">5. Concatenation of Strings</h2>

    <h3 className="text-xl font-bold mt-6">Using paste() function</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Concatenate with default separator (space)
result <- paste("Hello", "World")
print(result)

# Concatenate with custom separator
result <- paste("Hello", "World", sep = "-")
print(result)

# Concatenate without separator
result <- paste0("Hello", "World")
print(result)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Hello World"
[1] "Hello-World"
[1] "HelloWorld"`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Concatenation of Multiple Strings</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Multiple strings
result <- paste("R", "is", "awesome", sep = " ")
print(result)

# Collapse vector into single string
words <- c("R", "is", "awesome")
result <- paste(words, collapse = " ")
print(result)`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">6. String Formatting</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Using sprintf
name <- "John"
age <- 25
result <- sprintf("%s is %d years old", name, age)
print(result)

# Formatting numbers
pi_value <- 3.14159
print(sprintf("Pi = %.2f", pi_value))`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "John is 25 years old"
[1] "Pi = 3.14"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">7. String Splitting</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`str <- "apple,banana,cherry"

# Split by comma
result <- strsplit(str, ",")
print(result)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[[1]]
[1] "apple"  "banana" "cherry"`}</pre>
    </div>
  </>
);

export default Strings;
