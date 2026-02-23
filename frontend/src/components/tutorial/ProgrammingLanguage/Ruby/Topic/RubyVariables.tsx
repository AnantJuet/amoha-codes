import React from "react";

const RubyVariables: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Ruby Variables</h1>

    <h2 className="text-2xl font-bold mt-6">Variable Types</h2>
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 p-2">Type</th>
          <th className="border border-gray-300 p-2">Prefix</th>
          <th className="border border-gray-300 p-2">Scope</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-2">Local</td><td className="border border-gray-300 p-2">lowercase or _</td><td className="border border-gray-300 p-2">Block/Method</td></tr>
        <tr><td className="border border-gray-300 p-2">Instance</td><td className="border border-gray-300 p-2">@</td><td className="border border-gray-300 p-2">Object</td></tr>
        <tr><td className="border border-gray-300 p-2">Class</td><td className="border border-gray-300 p-2">@@</td><td className="border border-gray-300 p-2">Class</td></tr>
        <tr><td className="border border-gray-300 p-2">Global</td><td className="border border-gray-300 p-2">$</td><td className="border border-gray-300 p-2">Everywhere</td></tr>
        <tr><td className="border border-gray-300 p-2">Constant</td><td className="border border-gray-300 p-2">UPPERCASE</td><td className="border border-gray-300 p-2">Class/Module</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Local Variables</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Local variables start with lowercase letter or underscore
name = "Alice"
age = 25
_private_var = "hidden"

# Multiple assignment
a, b, c = 1, 2, 3
x, y = y, x  # Swap values

# Parallel assignment
first, *rest = [1, 2, 3, 4, 5]
# first = 1, rest = [2, 3, 4, 5]`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Instance Variables</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`class Person
  def initialize(name, age)
    @name = name  # Instance variable
    @age = age
  end

  def introduce
    puts "I'm #{@name}, #{@age} years old"
  end
end

person = Person.new("Alice", 30)
person.introduce  # => I'm Alice, 30 years old`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Class Variables</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`class Counter
  @@count = 0  # Shared across all instances

  def initialize
    @@count += 1
  end

  def self.total_count
    @@count
  end
end

Counter.new
Counter.new
Counter.new
puts Counter.total_count  # => 3`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Global Variables</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`$global_var = "I'm accessible everywhere"

def some_method
  puts $global_var
end

some_method  # => I'm accessible everywhere

# Built-in global variables
$0       # Script name
$$       # Process ID
$:       # Load path
$LOAD_PATH  # Same as $:`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Constants</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Constants start with uppercase letter
PI = 3.14159
MAX_SIZE = 100
GREETING = "Hello"

# Constants in classes
class Config
  DATABASE = "mysql"
  PORT = 3306
end

puts Config::DATABASE  # => mysql

# Warning: Constants can be reassigned (with warning)
PI = 3.14  # warning: already initialized constant PI`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Variable Scope</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`x = 10  # Local to main

def test_scope
  y = 20  # Local to method
  puts y
  # puts x  # Error! x is not accessible here
end

# Block scope
[1, 2, 3].each do |num|
  z = num * 2  # Local to block
end
# puts z  # Error! z is not accessible here

# Blocks can access outer variables
total = 0
[1, 2, 3].each { |n| total += n }
puts total  # => 6`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Checking Variables</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`name = "Alice"

# Check if variable is defined
defined?(name)     # => "local-variable"
defined?(unknown)  # => nil

# Check variable type
name.class         # => String
name.is_a?(String) # => true

# Check if nil
name.nil?          # => false`}
    </pre>
  </div>
);

export default RubyVariables;
