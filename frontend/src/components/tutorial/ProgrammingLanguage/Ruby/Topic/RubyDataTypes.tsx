import React from "react";

const RubyDataTypes: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Ruby Data Types</h1>

    <h2 className="text-2xl font-bold mt-6">Numbers</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Integers
age = 25
big_number = 1_000_000  # Underscores for readability
hex = 0xFF              # Hexadecimal
binary = 0b1010         # Binary
octal = 0o755           # Octal

# Floats
price = 19.99
scientific = 1.5e10

# Operations
10 / 3      # => 3 (integer division)
10.0 / 3    # => 3.333... (float division)
10 % 3      # => 1 (modulo)
2 ** 10     # => 1024 (exponentiation)

# Methods
42.even?    # => true
42.odd?     # => false
-5.abs      # => 5
3.14.round  # => 3
3.14.ceil   # => 4
3.14.floor  # => 3`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Strings</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Single quotes (literal)
single = 'Hello\\nWorld'  # \\n is literal

# Double quotes (interpolation + escapes)
name = "Alice"
double = "Hello, #{name}!\\nWelcome!"

# String methods
"hello".upcase      # => "HELLO"
"HELLO".downcase    # => "hello"
"hello".capitalize  # => "Hello"
"hello".reverse     # => "olleh"
"hello".length      # => 5
"hello world".split # => ["hello", "world"]

# Concatenation
"Hello" + " " + "World"  # => "Hello World"
"Hello" << " World"       # => "Hello World" (mutates)

# Heredoc for multiline
text = <<~HEREDOC
  This is a multiline
  string with proper
  indentation handling
HEREDOC`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Symbols</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Symbols are immutable identifiers
status = :active
role = :admin

# Symbols are efficient - same symbol is same object
:hello.object_id == :hello.object_id  # => true
"hello".object_id == "hello".object_id  # => false

# Common uses
# Hash keys
user = { name: "Alice", age: 30 }
user[:name]  # => "Alice"

# Method options
def greet(name, style: :formal)
  case style
  when :formal then "Good day, #{name}"
  when :casual then "Hey #{name}!"
  end
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Booleans and Nil</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Boolean values
is_active = true
is_admin = false

# nil represents "nothing"
value = nil
value.nil?  # => true

# Falsy values: nil and false
# Everything else is truthy (including 0 and "")

if 0
  puts "0 is truthy in Ruby!"
end

# Boolean methods often end with ?
"hello".empty?    # => false
[].empty?         # => true
5.between?(1, 10) # => true`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Arrays</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Creating arrays
arr = [1, 2, 3, 4, 5]
words = %w[apple banana cherry]  # String array
mixed = [1, "two", :three, 4.0]

# Accessing elements
arr[0]      # => 1 (first)
arr[-1]     # => 5 (last)
arr[1..3]   # => [2, 3, 4] (range)

# Common methods
arr.first       # => 1
arr.last        # => 5
arr.length      # => 5
arr.include?(3) # => true
arr.push(6)     # Add to end
arr.pop         # Remove from end
arr.shift       # Remove from front
arr.unshift(0)  # Add to front`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Hashes</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Creating hashes
old_style = { :name => "Alice", :age => 30 }
new_style = { name: "Alice", age: 30 }

# Accessing values
new_style[:name]  # => "Alice"
new_style[:city]  # => nil

# Common methods
new_style.keys    # => [:name, :age]
new_style.values  # => ["Alice", 30]
new_style.has_key?(:name)  # => true
new_style.fetch(:city, "Unknown")  # => "Unknown"

# Iteration
new_style.each do |key, value|
  puts "#{key}: #{value}"
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Ranges</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Inclusive range
(1..5).to_a  # => [1, 2, 3, 4, 5]

# Exclusive range
(1...5).to_a  # => [1, 2, 3, 4]

# Character ranges
('a'..'e').to_a  # => ["a", "b", "c", "d", "e"]

# Range methods
(1..10).include?(5)  # => true
(1..10).min          # => 1
(1..10).max          # => 10

# Used in case statements
case age
when 0..12 then "child"
when 13..19 then "teenager"
else "adult"
end`}
    </pre>
  </div>
);

export default RubyDataTypes;
