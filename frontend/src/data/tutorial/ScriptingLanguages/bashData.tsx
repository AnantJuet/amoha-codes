import React from "react";

export interface SidebarItem {
  label: string;
  href: string;
  isHeader?: boolean;
  children?: SidebarItem[];
}

export interface TopicContent {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export const tutorialData: SidebarItem[] = [
  { label: "Bash HOME", href: "bash_home" },
  { label: "Bash Intro", href: "bash_intro" },
  { label: "Bash Setup", href: "bash_setup" },
  {
    label: "Bash Variables",
    href: "bash_variables",
    isHeader: true,
    children: [
      { label: "Variables", href: "bash_variables" },
      { label: "Variable Types", href: "bash_variable_types" },
      { label: "Special Variables", href: "bash_special_variables" },
    ]
  },
  {
    label: "Bash Data Types",
    href: "bash_data_types",
    isHeader: true,
    children: [
      { label: "Data Types", href: "bash_data_types" },
      { label: "Strings", href: "bash_strings" },
      { label: "Numbers", href: "bash_numbers" },
    ]
  },
  {
    label: "Bash Operators",
    href: "bash_operators",
    isHeader: true,
    children: [
      { label: "Arithmetic Operators", href: "bash_operators" },
      { label: "Comparison Operators", href: "bash_comparison" },
      { label: "Logical Operators", href: "bash_logical" },
      { label: "File Test Operators", href: "bash_file_test" },
    ]
  },
  {
    label: "String Manipulation",
    href: "bash_string_manipulation",
    isHeader: true,
    children: [
      { label: "String Operations", href: "bash_string_manipulation" },
      { label: "String Length", href: "bash_string_length" },
      { label: "Substring", href: "bash_substring" },
    ]
  },
  {
    label: "Bash Conditionals",
    href: "bash_conditionals",
    isHeader: true,
    children: [
      { label: "If Statement", href: "bash_conditionals" },
      { label: "If-Else", href: "bash_if_else" },
      { label: "Case Statement", href: "bash_case" },
    ]
  },
  {
    label: "Bash Loops",
    href: "bash_loops",
    isHeader: true,
    children: [
      { label: "For Loop", href: "bash_loops" },
      { label: "While Loop", href: "bash_while" },
      { label: "Until Loop", href: "bash_until" },
      { label: "Loop Control", href: "bash_loop_control" },
    ]
  },
  {
    label: "Bash Functions",
    href: "bash_functions",
    isHeader: true,
    children: [
      { label: "Functions", href: "bash_functions" },
      { label: "Function Arguments", href: "bash_function_args" },
      { label: "Return Values", href: "bash_return" },
    ]
  },
  {
    label: "Bash Arrays",
    href: "bash_arrays",
    isHeader: true,
    children: [
      { label: "Arrays", href: "bash_arrays" },
      { label: "Array Operations", href: "bash_array_ops" },
      { label: "Associative Arrays", href: "bash_assoc_arrays" },
    ]
  },
  {
    label: "File Operations",
    href: "bash_file_ops",
    isHeader: true,
    children: [
      { label: "File Operations", href: "bash_file_ops" },
      { label: "Reading Files", href: "bash_read_files" },
      { label: "Writing Files", href: "bash_write_files" },
    ]
  },
  {
    label: "I/O Redirection",
    href: "bash_io_redirection",
    isHeader: true,
    children: [
      { label: "Input/Output", href: "bash_io_redirection" },
      { label: "Pipes", href: "bash_pipes" },
      { label: "Here Documents", href: "bash_here_docs" },
    ]
  },
  {
    label: "Regular Expressions",
    href: "bash_regex",
    isHeader: true,
    children: [
      { label: "Regex Basics", href: "bash_regex" },
      { label: "Pattern Matching", href: "bash_pattern" },
    ]
  },
  { label: "sed Command", href: "bash_sed" },
  { label: "awk Command", href: "bash_awk" },
  {
    label: "Process Management",
    href: "bash_process",
    isHeader: true,
    children: [
      { label: "Process Management", href: "bash_process" },
      { label: "Background Jobs", href: "bash_jobs" },
      { label: "Signals", href: "bash_signals" },
    ]
  },
  { label: "Cron Jobs", href: "bash_cron" },
];

export const tutorialContent: Record<string, TopicContent> = {
  "bash_home": {
    title: "Bash Scripting Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Bash Scripting Tutorial
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>Bash</strong> (Bourne Again SHell) is a powerful command-line interpreter and scripting language used extensively in Linux and Unix systems.
        </p>
        <p className="leading-relaxed mb-4">
          This tutorial will teach you Bash scripting from the basics to advanced concepts, enabling you to automate tasks and create powerful shell scripts.
        </p>
        <h3 className="text-xl font-medium mb-3">Example: Hello World</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash
# My first Bash script
echo "Hello, World!"`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">What You Will Learn</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li>Variables, data types, and operators</li>
          <li>Control structures (conditionals and loops)</li>
          <li>Functions and arrays</li>
          <li>File operations and I/O redirection</li>
          <li>Text processing with sed and awk</li>
          <li>Process management and cron jobs</li>
        </ul>
      </>
    ),
  },
  "bash_intro": {
    title: "Introduction to Bash",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is Bash?
        </h2>
        <p className="leading-relaxed mb-4">
          Bash is the default shell on most Linux distributions and macOS. It provides a command-line interface for interacting with the operating system and executing programs.
        </p>
        <h3 className="text-xl font-medium mb-3">Key Features</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li><strong>Command Execution:</strong> Run programs and system commands</li>
          <li><strong>Scripting:</strong> Automate repetitive tasks</li>
          <li><strong>Variables:</strong> Store and manipulate data</li>
          <li><strong>Control Structures:</strong> Make decisions and repeat actions</li>
          <li><strong>I/O Redirection:</strong> Control input and output streams</li>
        </ul>
        <h3 className="text-xl font-medium mb-3">Why Learn Bash?</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li>Essential for system administration</li>
          <li>Automate deployment and DevOps tasks</li>
          <li>Process and transform text files</li>
          <li>Create powerful one-liners</li>
        </ul>
      </>
    ),
  },
  "bash_setup": {
    title: "Bash Setup",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Setting Up Bash
        </h2>
        <h3 className="text-xl font-medium mb-3">Linux</h3>
        <p className="leading-relaxed mb-4">
          Bash is pre-installed on most Linux distributions. Open a terminal to start using it.
        </p>
        <h3 className="text-xl font-medium mb-3">macOS</h3>
        <p className="leading-relaxed mb-4">
          macOS includes Bash (older versions) or Zsh (newer versions). You can install the latest Bash via Homebrew:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`brew install bash`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Windows</h3>
        <p className="leading-relaxed mb-4">
          Use Windows Subsystem for Linux (WSL) or Git Bash:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Install WSL (run in PowerShell as Admin)
wsl --install`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Creating Your First Script</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash
# Save this as hello.sh

echo "Hello, World!"

# Make it executable and run:
# chmod +x hello.sh
# ./hello.sh`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_variables": {
    title: "Bash Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Variables in Bash
        </h2>
        <p className="leading-relaxed mb-4">
          Variables store data that can be used throughout your script. In Bash, variables are created without declaring a type.
        </p>
        <h3 className="text-xl font-medium mb-3">Variable Assignment</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Variable assignment (no spaces around =)
name="John"
age=25
city="New York"

# Accessing variables with $
echo "Name: $name"
echo "Age: $age"
echo "City: $city"

# Using curly braces for clarity
echo "Hello, \${name}!"
echo "\${name}'s age is \${age}"`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Important Rules</h3>
        <ul className="list-disc ml-6 mb-4 leading-relaxed">
          <li>No spaces around the <code>=</code> sign</li>
          <li>Variable names are case-sensitive</li>
          <li>Use <code>$</code> or <code>${"{"}variable{"}"}</code> to access values</li>
          <li>Quote strings with spaces</li>
        </ul>
      </>
    ),
  },
  "bash_variable_types": {
    title: "Variable Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Types of Variables
        </h2>
        <h3 className="text-xl font-medium mb-3">Local Variables</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

my_function() {
    local local_var="I'm local"
    echo "$local_var"
}

my_function
# echo "$local_var"  # This would fail`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Environment Variables</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Export to make available to child processes
export MY_VAR="Global Value"

# Common environment variables
echo "Home: $HOME"
echo "User: $USER"
echo "Path: $PATH"
echo "Shell: $SHELL"`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Read-only Variables</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

readonly PI=3.14159
# PI=3.14  # This would cause an error`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_special_variables": {
    title: "Special Variables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Special Variables in Bash
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash
# script.sh arg1 arg2 arg3

echo "Script name: $0"
echo "First argument: $1"
echo "Second argument: $2"
echo "All arguments: $@"
echo "All arguments (as string): $*"
echo "Number of arguments: $#"
echo "Process ID: $$"
echo "Last exit status: $?"
echo "Last background PID: $!"`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Reference Table</h3>
        <table className="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 p-2">Variable</th>
              <th className="border border-gray-300 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 p-2"><code>$0</code></td><td className="border border-gray-300 p-2">Script name</td></tr>
            <tr><td className="border border-gray-300 p-2"><code>$1-$9</code></td><td className="border border-gray-300 p-2">Positional parameters</td></tr>
            <tr><td className="border border-gray-300 p-2"><code>$#</code></td><td className="border border-gray-300 p-2">Number of arguments</td></tr>
            <tr><td className="border border-gray-300 p-2"><code>$@</code></td><td className="border border-gray-300 p-2">All arguments (as array)</td></tr>
            <tr><td className="border border-gray-300 p-2"><code>$?</code></td><td className="border border-gray-300 p-2">Exit status of last command</td></tr>
            <tr><td className="border border-gray-300 p-2"><code>$$</code></td><td className="border border-gray-300 p-2">Current process ID</td></tr>
          </tbody>
        </table>
      </>
    ),
  },
  "bash_data_types": {
    title: "Bash Data Types",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Data Types in Bash
        </h2>
        <p className="leading-relaxed mb-4">
          Bash is dynamically typed - all variables are stored as strings by default, but can be treated as numbers in arithmetic contexts.
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Strings
name="John Doe"
greeting='Hello World'

# Numbers (stored as strings)
count=10
price=19.99

# Arrays
fruits=("apple" "banana" "cherry")

# Associative arrays (Bash 4+)
declare -A person
person[name]="John"
person[age]=30

echo "String: $name"
echo "Number: $count"
echo "Array element: \${fruits[0]}"
echo "Associative: \${person[name]}"`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_strings": {
    title: "Bash Strings",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Working with Strings
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Single vs Double quotes
name="World"
echo 'Hello $name'    # Output: Hello $name (literal)
echo "Hello $name"    # Output: Hello World (expanded)

# String concatenation
first="Hello"
second="World"
combined="$first $second"
echo "$combined"      # Output: Hello World

# String length
str="Hello"
echo "Length: \${#str}"  # Output: 5

# String comparison
if [ "$first" = "Hello" ]; then
    echo "Strings match"
fi`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_numbers": {
    title: "Bash Numbers",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Working with Numbers
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Integer arithmetic
a=10
b=3

# Using $(( ))
echo "Add: $((a + b))"      # 13
echo "Subtract: $((a - b))" # 7
echo "Multiply: $((a * b))" # 30
echo "Divide: $((a / b))"   # 3
echo "Modulo: $((a % b))"   # 1
echo "Power: $((a ** 2))"   # 100

# Using let
let "c = a + b"
echo "c = $c"

# Using expr
d=$(expr $a + $b)
echo "d = $d"

# Floating point (using bc)
result=$(echo "scale=2; 10 / 3" | bc)
echo "Float division: $result"  # 3.33`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_operators": {
    title: "Arithmetic Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Arithmetic Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

a=20
b=5

echo "a + b = $((a + b))"   # Addition: 25
echo "a - b = $((a - b))"   # Subtraction: 15
echo "a * b = $((a * b))"   # Multiplication: 100
echo "a / b = $((a / b))"   # Division: 4
echo "a % b = $((a % b))"   # Modulus: 0
echo "a ** 2 = $((a ** 2))" # Exponent: 400

# Increment/Decrement
((a++))
echo "After a++: $a"  # 21
((a--))
echo "After a--: $a"  # 20

# Compound assignment
((a += 5))
echo "After a += 5: $a"  # 25`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_comparison": {
    title: "Comparison Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Comparison Operators
        </h2>
        <h3 className="text-xl font-medium mb-3">Integer Comparison</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

a=10
b=20

[ $a -eq $b ]  # Equal
[ $a -ne $b ]  # Not equal
[ $a -gt $b ]  # Greater than
[ $a -lt $b ]  # Less than
[ $a -ge $b ]  # Greater or equal
[ $a -le $b ]  # Less or equal

# Example
if [ $a -lt $b ]; then
    echo "$a is less than $b"
fi`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">String Comparison</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

str1="hello"
str2="world"

[ "$str1" = "$str2" ]   # Equal
[ "$str1" != "$str2" ]  # Not equal
[ -z "$str1" ]          # Is empty
[ -n "$str1" ]          # Is not empty

if [ "$str1" != "$str2" ]; then
    echo "Strings are different"
fi`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_logical": {
    title: "Logical Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Logical Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

a=10
b=20
c=10

# AND operator
if [ $a -eq $c ] && [ $b -gt $a ]; then
    echo "Both conditions are true"
fi

# OR operator
if [ $a -eq 5 ] || [ $b -eq 20 ]; then
    echo "At least one condition is true"
fi

# NOT operator
if [ ! $a -eq $b ]; then
    echo "a is not equal to b"
fi

# Using [[ ]] (recommended)
if [[ $a -eq $c && $b -gt $a ]]; then
    echo "Using [[ ]] syntax"
fi`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_file_test": {
    title: "File Test Operators",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          File Test Operators
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

file="test.txt"
dir="mydir"

# File tests
[ -e "$file" ]  # Exists
[ -f "$file" ]  # Is regular file
[ -d "$dir" ]   # Is directory
[ -r "$file" ]  # Is readable
[ -w "$file" ]  # Is writable
[ -x "$file" ]  # Is executable
[ -s "$file" ]  # Has size > 0

# Example usage
if [ -f "$file" ]; then
    echo "$file exists and is a regular file"
elif [ -d "$file" ]; then
    echo "$file is a directory"
else
    echo "$file does not exist"
fi

# Check if file is readable and writable
if [ -r "$file" ] && [ -w "$file" ]; then
    echo "File is readable and writable"
fi`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_string_manipulation": {
    title: "String Manipulation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          String Manipulation
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

str="Hello, World!"

# Length
echo "Length: \${#str}"  # 13

# Substring extraction
echo "\${str:0:5}"   # Hello (start:length)
echo "\${str:7}"     # World! (from position 7)

# Replace first occurrence
echo "\${str/World/Bash}"  # Hello, Bash!

# Replace all occurrences
text="one-two-three"
echo "\${text//-/_}"  # one_two_three

# Remove prefix
filename="document.txt"
echo "\${filename#*.}"   # txt (shortest match)
echo "\${filename##*.}"  # txt (longest match)

# Remove suffix
echo "\${filename%.*}"   # document (shortest match)
echo "\${filename%%.*}"  # document (longest match)

# Case conversion (Bash 4+)
echo "\${str^^}"  # HELLO, WORLD! (uppercase)
echo "\${str,,}"  # hello, world! (lowercase)`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_string_length": {
    title: "String Length",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Getting String Length
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

str="Hello, World!"

# Method 1: Using \${#var}
len=\${#str}
echo "Length: $len"  # 13

# Method 2: Using expr
len=$(expr length "$str")
echo "Length: $len"

# Method 3: Using wc -c (includes newline)
len=$(echo -n "$str" | wc -c)
echo "Length: $len"

# Check if string is empty
if [ -z "$str" ]; then
    echo "String is empty"
else
    echo "String has \${#str} characters"
fi`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_substring": {
    title: "Substring Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Substring Operations
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

str="Hello, World!"

# Extract substring: \${string:start:length}
echo "\${str:0:5}"    # Hello
echo "\${str:7:5}"    # World
echo "\${str:7}"      # World! (to end)
echo "\${str: -6:5}"  # World (negative index)

# Find substring position
str="The quick brown fox"
# Using expr
pos=$(expr index "$str" "quick")
echo "Position: $pos"

# Check if substring exists
if [[ "$str" == *"quick"* ]]; then
    echo "Substring found"
fi

# Using grep
if echo "$str" | grep -q "quick"; then
    echo "Found using grep"
fi`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_conditionals": {
    title: "If Statement",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          If Statement
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Basic if statement
age=20

if [ $age -ge 18 ]; then
    echo "You are an adult"
fi

# Using [[ ]] (recommended)
name="John"

if [[ $name == "John" ]]; then
    echo "Hello, John!"
fi

# Checking command success
if ls /tmp > /dev/null 2>&1; then
    echo "Directory exists"
fi

# One-liner
[ -f "file.txt" ] && echo "File exists"`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_if_else": {
    title: "If-Else Statement",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          If-Else Statement
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

age=15

# If-else
if [ $age -ge 18 ]; then
    echo "Adult"
else
    echo "Minor"
fi

# If-elif-else
score=75

if [ $score -ge 90 ]; then
    echo "Grade: A"
elif [ $score -ge 80 ]; then
    echo "Grade: B"
elif [ $score -ge 70 ]; then
    echo "Grade: C"
elif [ $score -ge 60 ]; then
    echo "Grade: D"
else
    echo "Grade: F"
fi

# Nested if
num=15
if [ $num -gt 0 ]; then
    if [ $((num % 2)) -eq 0 ]; then
        echo "Positive even number"
    else
        echo "Positive odd number"
    fi
fi`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_case": {
    title: "Case Statement",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Case Statement
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Basic case statement
fruit="apple"

case $fruit in
    "apple")
        echo "It's an apple"
        ;;
    "banana")
        echo "It's a banana"
        ;;
    "orange"|"lemon")
        echo "It's a citrus fruit"
        ;;
    *)
        echo "Unknown fruit"
        ;;
esac

# Case with patterns
read -p "Enter a character: " char

case $char in
    [a-z])
        echo "Lowercase letter"
        ;;
    [A-Z])
        echo "Uppercase letter"
        ;;
    [0-9])
        echo "Digit"
        ;;
    *)
        echo "Special character"
        ;;
esac`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_loops": {
    title: "For Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          For Loop
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Loop through list
for fruit in apple banana cherry; do
    echo "Fruit: $fruit"
done

# Loop through range
for i in {1..5}; do
    echo "Number: $i"
done

# Loop with step
for i in {0..10..2}; do
    echo "Even: $i"
done

# C-style for loop
for ((i=0; i<5; i++)); do
    echo "Index: $i"
done

# Loop through array
colors=("red" "green" "blue")
for color in "\${colors[@]}"; do
    echo "Color: $color"
done

# Loop through files
for file in *.txt; do
    echo "File: $file"
done`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_while": {
    title: "While Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          While Loop
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Basic while loop
count=1
while [ $count -le 5 ]; do
    echo "Count: $count"
    ((count++))
done

# Read file line by line
while IFS= read -r line; do
    echo "Line: $line"
done < "file.txt"

# Infinite loop with break
while true; do
    read -p "Enter 'quit' to exit: " input
    if [ "$input" = "quit" ]; then
        break
    fi
    echo "You entered: $input"
done

# Read from command output
while read -r user; do
    echo "User: $user"
done < <(cut -d: -f1 /etc/passwd | head -5)`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_until": {
    title: "Until Loop",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Until Loop
        </h2>
        <p className="leading-relaxed mb-4">
          The until loop executes until the condition becomes true (opposite of while).
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Basic until loop
count=1
until [ $count -gt 5 ]; do
    echo "Count: $count"
    ((count++))
done

# Wait for file to exist
until [ -f "data.txt" ]; do
    echo "Waiting for data.txt..."
    sleep 1
done
echo "File found!"

# Wait for process to complete
until ! pgrep -x "myprocess" > /dev/null; do
    echo "Process still running..."
    sleep 5
done
echo "Process completed"`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_loop_control": {
    title: "Loop Control",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Loop Control Statements
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# break - exit the loop
for i in {1..10}; do
    if [ $i -eq 5 ]; then
        echo "Breaking at $i"
        break
    fi
    echo "Number: $i"
done

# continue - skip to next iteration
for i in {1..5}; do
    if [ $i -eq 3 ]; then
        continue
    fi
    echo "Number: $i"
done

# break n - break out of n nested loops
for i in {1..3}; do
    for j in {1..3}; do
        if [ $j -eq 2 ]; then
            break 2  # Break out of both loops
        fi
        echo "i=$i, j=$j"
    done
done`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_functions": {
    title: "Bash Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Functions in Bash
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Method 1: function keyword
function greet() {
    echo "Hello, World!"
}

# Method 2: parentheses (POSIX compatible)
say_hello() {
    echo "Hello!"
}

# Call functions
greet
say_hello

# Function with local variables
calculate() {
    local result=$((10 + 20))
    echo "Result: $result"
}
calculate`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_function_args": {
    title: "Function Arguments",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Function Arguments
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Function with parameters
greet() {
    echo "Hello, $1!"
    echo "You are $2 years old"
}

greet "John" 25

# All arguments
print_all() {
    echo "Number of args: $#"
    echo "All args: $@"

    for arg in "$@"; do
        echo "Arg: $arg"
    done
}

print_all "apple" "banana" "cherry"

# Default values
greet_with_default() {
    local name=\${1:-"Guest"}
    echo "Hello, $name!"
}

greet_with_default        # Hello, Guest!
greet_with_default "John" # Hello, John!`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_return": {
    title: "Return Values",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Function Return Values
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Return exit status (0-255)
is_even() {
    if [ $(($1 % 2)) -eq 0 ]; then
        return 0  # Success/true
    else
        return 1  # Failure/false
    fi
}

if is_even 4; then
    echo "4 is even"
fi

# Return value via echo (capture output)
add() {
    echo $(($1 + $2))
}

result=$(add 5 3)
echo "Sum: $result"

# Return multiple values
get_stats() {
    local min=$1
    local max=$1
    shift
    for num in "$@"; do
        [ $num -lt $min ] && min=$num
        [ $num -gt $max ] && max=$num
    done
    echo "$min $max"
}

read min max <<< $(get_stats 5 2 8 1 9)
echo "Min: $min, Max: $max"`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_arrays": {
    title: "Bash Arrays",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Arrays in Bash
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Declare array
fruits=("apple" "banana" "cherry")

# Access elements
echo "\${fruits[0]}"   # apple
echo "\${fruits[1]}"   # banana
echo "\${fruits[2]}"   # cherry

# All elements
echo "\${fruits[@]}"   # apple banana cherry
echo "\${fruits[*]}"   # apple banana cherry

# Array length
echo "\${#fruits[@]}"  # 3

# Add element
fruits+=("orange")

# Iterate
for fruit in "\${fruits[@]}"; do
    echo "Fruit: $fruit"
done

# Array indices
echo "\${!fruits[@]}"  # 0 1 2 3`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_array_ops": {
    title: "Array Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Array Operations
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

arr=(10 20 30 40 50)

# Slice array
echo "\${arr[@]:1:3}"  # 20 30 40 (start:count)

# Replace element
arr[2]=35
echo "\${arr[@]}"      # 10 20 35 40 50

# Delete element
unset arr[1]
echo "\${arr[@]}"      # 10 35 40 50

# Copy array
arr2=("\${arr[@]}")

# Merge arrays
arr3=(1 2 3)
arr4=(4 5 6)
merged=("\${arr3[@]}" "\${arr4[@]}")
echo "\${merged[@]}"   # 1 2 3 4 5 6

# Check if element exists
if [[ " \${arr[@]} " =~ " 35 " ]]; then
    echo "35 found in array"
fi`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_assoc_arrays": {
    title: "Associative Arrays",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Associative Arrays (Bash 4+)
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Declare associative array
declare -A person

# Add key-value pairs
person[name]="John"
person[age]=30
person[city]="New York"

# Access values
echo "\${person[name]}"  # John
echo "\${person[age]}"   # 30

# All keys
echo "\${!person[@]}"    # name age city

# All values
echo "\${person[@]}"     # John 30 New York

# Iterate over associative array
for key in "\${!person[@]}"; do
    echo "$key: \${person[$key]}"
done

# Check if key exists
if [[ -v person[name] ]]; then
    echo "Key 'name' exists"
fi

# Delete key
unset person[city]`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_file_ops": {
    title: "File Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          File Operations
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Create file
touch newfile.txt

# Create with content
echo "Hello World" > file.txt

# Check file exists
if [ -f "file.txt" ]; then
    echo "File exists"
fi

# Get file info
ls -la file.txt
stat file.txt

# Copy file
cp file.txt backup.txt

# Move/rename file
mv backup.txt renamed.txt

# Delete file
rm renamed.txt

# Create directory
mkdir -p mydir/subdir

# Remove directory
rmdir mydir/subdir
rm -rf mydir`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_read_files": {
    title: "Reading Files",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Reading Files
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Read entire file
content=$(cat file.txt)
echo "$content"

# Read line by line
while IFS= read -r line; do
    echo "Line: $line"
done < file.txt

# Read specific line
sed -n '5p' file.txt  # Line 5

# Read first n lines
head -n 10 file.txt

# Read last n lines
tail -n 10 file.txt

# Read file into array
mapfile -t lines < file.txt
echo "\${lines[0]}"  # First line

# Read with line numbers
nl=1
while IFS= read -r line; do
    echo "$nl: $line"
    ((nl++))
done < file.txt`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_write_files": {
    title: "Writing Files",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Writing Files
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Overwrite file
echo "Hello World" > file.txt

# Append to file
echo "New line" >> file.txt

# Write multiple lines
cat > file.txt << EOF
Line 1
Line 2
Line 3
EOF

# Write without interpreting variables
cat > file.txt << 'EOF'
This $variable won't expand
EOF

# Write from array
arr=("Line 1" "Line 2" "Line 3")
printf "%s\n" "\${arr[@]}" > file.txt

# Append from loop
for i in {1..5}; do
    echo "Number $i" >> numbers.txt
done`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_io_redirection": {
    title: "I/O Redirection",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Input/Output Redirection
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Standard streams
# 0 = stdin, 1 = stdout, 2 = stderr

# Redirect stdout to file
echo "Hello" > output.txt

# Redirect stderr to file
ls nonexistent 2> error.txt

# Redirect both stdout and stderr
command > output.txt 2>&1
command &> output.txt  # Shorthand

# Redirect stdin
sort < unsorted.txt

# Discard output
command > /dev/null 2>&1

# Append stdout
echo "Line" >> file.txt

# Read from stdin
read -p "Enter name: " name`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_pipes": {
    title: "Pipes",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Pipes in Bash
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Basic pipe
ls -la | grep ".txt"

# Chain multiple pipes
cat file.txt | sort | uniq | wc -l

# Common pipe patterns
ps aux | grep nginx
cat access.log | awk '{print $1}' | sort | uniq -c

# Pipe with tee (save and continue)
ls -la | tee listing.txt | grep ".txt"

# Named pipes (FIFO)
mkfifo mypipe
echo "Hello" > mypipe &
cat < mypipe

# Process substitution
diff <(ls dir1) <(ls dir2)

# xargs with pipe
find . -name "*.txt" | xargs rm`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_here_docs": {
    title: "Here Documents",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Here Documents
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Basic here document
cat << EOF
Hello, World!
This is a multi-line string.
Variables like $HOME are expanded.
EOF

# Prevent variable expansion
cat << 'EOF'
Variables like $HOME are NOT expanded.
EOF

# Here document with indentation
cat <<- EOF
	Indented with tabs
	Tabs are stripped
EOF

# Pass to command
mysql -u root << EOF
USE mydb;
SELECT * FROM users;
EOF

# Here string
cat <<< "Single line input"

# Read into variable
read -r -d '' text << EOF
Multi-line
text here
EOF
echo "$text"`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_regex": {
    title: "Regular Expressions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Regular Expressions in Bash
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Using =~ operator
string="Hello World 123"

if [[ $string =~ [0-9]+ ]]; then
    echo "Contains numbers"
    echo "Match: \${BASH_REMATCH[0]}"
fi

# Email validation
email="user@example.com"
pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"

if [[ $email =~ $pattern ]]; then
    echo "Valid email"
fi

# Extract groups
date="2024-01-15"
if [[ $date =~ ([0-9]{4})-([0-9]{2})-([0-9]{2}) ]]; then
    echo "Year: \${BASH_REMATCH[1]}"
    echo "Month: \${BASH_REMATCH[2]}"
    echo "Day: \${BASH_REMATCH[3]}"
fi`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_pattern": {
    title: "Pattern Matching",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Glob Pattern Matching
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Glob patterns
ls *.txt          # Match .txt files
ls file?.txt      # Match single character
ls file[123].txt  # Match 1, 2, or 3
ls file[!0-9].txt # Match non-digits

# Extended globbing
shopt -s extglob

ls !(*.txt)       # Not matching .txt
ls *(abc)         # Zero or more 'abc'
ls +(abc)         # One or more 'abc'
ls ?(abc)         # Zero or one 'abc'
ls @(a|b|c)       # Match a, b, or c

# Case statement with patterns
case "$filename" in
    *.txt) echo "Text file" ;;
    *.sh)  echo "Shell script" ;;
    *)     echo "Other file" ;;
esac`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_sed": {
    title: "sed Command",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Stream Editor (sed)
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Substitute first occurrence
sed 's/old/new/' file.txt

# Substitute all occurrences
sed 's/old/new/g' file.txt

# Case insensitive
sed 's/old/new/gi' file.txt

# Edit in place
sed -i 's/old/new/g' file.txt

# Delete lines
sed '/pattern/d' file.txt    # Lines matching pattern
sed '5d' file.txt            # Line 5
sed '1,5d' file.txt          # Lines 1-5

# Print specific lines
sed -n '5p' file.txt         # Line 5
sed -n '1,5p' file.txt       # Lines 1-5

# Insert/append
sed '2i New line before' file.txt
sed '2a New line after' file.txt

# Multiple commands
sed -e 's/a/A/g' -e 's/b/B/g' file.txt`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_awk": {
    title: "awk Command",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          AWK Text Processing
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Print specific columns
awk '{print $1, $3}' file.txt

# Custom delimiter
awk -F: '{print $1}' /etc/passwd

# Pattern matching
awk '/pattern/ {print}' file.txt

# Conditional printing
awk '$3 > 100 {print $1, $3}' data.txt

# Built-in variables
awk '{print NR, NF, $0}' file.txt
# NR = line number, NF = field count

# Sum column
awk '{sum += $1} END {print sum}' numbers.txt

# BEGIN and END blocks
awk 'BEGIN {print "Start"} {print} END {print "End"}' file.txt

# Field separator
awk 'BEGIN {FS=","} {print $1}' data.csv

# Calculate average
awk '{sum+=$1; count++} END {print sum/count}' numbers.txt`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_process": {
    title: "Process Management",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Process Management
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# List processes
ps aux
ps -ef

# Find process by name
pgrep nginx
pidof nginx

# Process tree
pstree

# Top processes
top
htop

# Kill process
kill PID
kill -9 PID       # Force kill
killall nginx     # Kill by name
pkill -f pattern  # Kill by pattern

# Process info
cat /proc/PID/status
cat /proc/PID/cmdline

# Wait for process
wait $PID

# Get process exit status
command
echo $?`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_jobs": {
    title: "Background Jobs",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Background Jobs
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Run in background
long_command &

# Get background PID
pid=$!
echo "Background process PID: $pid"

# List jobs
jobs
jobs -l  # With PIDs

# Bring to foreground
fg %1

# Send to background
bg %1

# Wait for background job
wait $pid

# Run multiple in parallel
command1 &
command2 &
command3 &
wait  # Wait for all

# Disown process
long_command &
disown %1

# nohup - survive logout
nohup long_command &`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_signals": {
    title: "Signals",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Signal Handling
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`#!/bin/bash

# Trap signals
cleanup() {
    echo "Cleaning up..."
    rm -f /tmp/tempfile
    exit 0
}

trap cleanup SIGINT SIGTERM

# Common signals
# SIGINT (2)  - Ctrl+C
# SIGTERM (15) - Termination
# SIGKILL (9) - Force kill (cannot trap)
# SIGHUP (1)  - Hangup

# Trap on exit
trap 'echo "Script exiting"' EXIT

# Ignore signal
trap '' SIGINT

# Reset to default
trap - SIGINT

# Send signal
kill -SIGTERM $PID
kill -15 $PID

# List signals
kill -l`}
          </pre>
        </div>
      </>
    ),
  },
  "bash_cron": {
    title: "Cron Jobs",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Cron Jobs - Scheduled Tasks
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`# Crontab format:
# MIN HOUR DOM MON DOW COMMAND
# 0-59 0-23 1-31 1-12 0-6

# Edit crontab
crontab -e

# List crontab
crontab -l

# Examples:
# Every minute
* * * * * /path/to/script.sh

# Every hour
0 * * * * /path/to/script.sh

# Every day at midnight
0 0 * * * /path/to/script.sh

# Every Monday at 9 AM
0 9 * * 1 /path/to/script.sh

# Every 15 minutes
*/15 * * * * /path/to/script.sh

# First day of month
0 0 1 * * /path/to/script.sh

# With logging
* * * * * /path/to/script.sh >> /var/log/cron.log 2>&1`}
          </pre>
        </div>
        <h3 className="text-xl font-medium mb-3">Cron Special Strings</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-inner mb-6 text-sm">
          <pre className="font-mono bg-white dark:bg-gray-900 p-2 border border-gray-300 dark:border-gray-700 rounded whitespace-pre-wrap break-words text-black dark:text-gray-200">
{`@reboot    # Run once at startup
@yearly    # 0 0 1 1 *
@monthly   # 0 0 1 * *
@weekly    # 0 0 * * 0
@daily     # 0 0 * * *
@hourly    # 0 * * * *`}
          </pre>
        </div>
      </>
    ),
  },
};
