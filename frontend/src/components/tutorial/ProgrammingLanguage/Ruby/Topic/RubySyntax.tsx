import React from "react";

const RubySyntax: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Ruby Syntax</h1>

    <h2 className="text-2xl font-bold mt-6">Basic Syntax</h2>
    <p>
      Ruby has a clean, elegant syntax that is easy to read and write. Here are the basic elements:
    </p>

    <h2 className="text-2xl font-bold mt-6">Output</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`puts "Hello, World!"   # Adds newline
print "Hello "         # No newline
p "Hello"              # Debug output with quotes`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Variables</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Local variables (snake_case)
my_variable = "Hello"

# Instance variables (start with @)
@instance_var = 10

# Class variables (start with @@)
@@class_var = 20

# Global variables (start with $)
$global_var = 30

# Constants (UPPERCASE)
MAX_SIZE = 100`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">String Interpolation</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`name = "Ruby"
version = 3.2

puts "Welcome to #{name} #{version}!"
# Output: Welcome to Ruby 3.2!`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Comments</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# This is a single-line comment

=begin
This is a
multi-line comment
=end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Methods</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Method definition
def greet(name)
  "Hello, #{name}!"  # Implicit return
end

# With default parameter
def greet(name = "World")
  "Hello, #{name}!"
end

puts greet("Ruby")  # Hello, Ruby!
puts greet          # Hello, World!`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Symbols</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Symbols are immutable, reusable strings
:my_symbol
:name
:status

# Often used as hash keys
user = { name: "John", age: 30 }
puts user[:name]  # John`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Blocks</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Single-line block
[1, 2, 3].each { |n| puts n }

# Multi-line block
[1, 2, 3].each do |n|
  result = n * 2
  puts result
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Truthiness</h2>
    <p>
      In Ruby, only <code>false</code> and <code>nil</code> are falsy. Everything else is truthy:
    </p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`if 0
  puts "0 is truthy!"  # This prints!
end

if ""
  puts "Empty string is truthy!"  # This prints!
end`}
    </pre>
  </div>
);

export default RubySyntax;
