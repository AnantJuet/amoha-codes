import React from "react";

const RubyMethods: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Ruby Methods</h1>

    <h2 className="text-2xl font-bold mt-6">Defining Methods</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Basic method
def greet
  puts "Hello!"
end

greet  # => Hello!

# Method with parameter
def greet(name)
  puts "Hello, #{name}!"
end

greet("Alice")  # => Hello, Alice!

# Parentheses are optional
greet "Bob"  # => Hello, Bob!`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Parameters</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Multiple parameters
def add(a, b)
  a + b
end

# Default parameters
def greet(name = "World")
  puts "Hello, #{name}!"
end
greet        # => Hello, World!
greet("Ruby")  # => Hello, Ruby!

# Keyword arguments
def create_user(name:, age:, active: true)
  { name: name, age: age, active: active }
end
create_user(name: "Alice", age: 30)

# Variable arguments (*args)
def sum(*numbers)
  numbers.reduce(0, :+)
end
sum(1, 2, 3, 4)  # => 10

# Keyword arguments catch-all (**kwargs)
def log(message, **options)
  puts "#{message} - #{options}"
end
log("Error", level: :high, code: 500)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Return Values</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Implicit return (last expression)
def square(n)
  n * n  # Automatically returned
end

# Explicit return
def absolute(n)
  return -n if n < 0
  n
end

# Multiple return values
def min_max(array)
  [array.min, array.max]
end

min, max = min_max([3, 1, 4, 1, 5])
puts "Min: #{min}, Max: #{max}"

# Return nil by default
def do_nothing
  # No explicit return
end
result = do_nothing  # => nil`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Method Naming Conventions</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Boolean methods end with ?
def empty?
  @items.length == 0
end

# Dangerous methods end with !
def upcase!
  @value = @value.upcase  # Mutates self
end

# Getter/setter pattern
class Person
  def name
    @name
  end

  def name=(value)
    @name = value
  end
end

person = Person.new
person.name = "Alice"  # Calls name=
puts person.name       # Calls name`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Method Visibility</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`class Example
  # Public by default
  def public_method
    puts "Anyone can call this"
  end

  # Protected - callable by same class or subclass
  protected

  def protected_method
    puts "Same class family only"
  end

  # Private - only callable without explicit receiver
  private

  def private_method
    puts "Internal only"
  end
end

# Alternative syntax
class Example
  def method1; end
  def method2; end
  def method3; end

  private :method2
  protected :method3
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Class Methods</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`class Calculator
  # Using self
  def self.add(a, b)
    a + b
  end

  # Using class name
  def Calculator.subtract(a, b)
    a - b
  end

  # Block definition
  class << self
    def multiply(a, b)
      a * b
    end
  end
end

Calculator.add(5, 3)       # => 8
Calculator.subtract(5, 3)  # => 2
Calculator.multiply(5, 3)  # => 15`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Blocks, Procs, and Lambdas</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Method accepting a block
def with_timing
  start = Time.now
  yield  # Execute the block
  puts "Took #{Time.now - start} seconds"
end

with_timing { sleep(1) }

# Block with parameters
def transform(value)
  yield(value)
end

transform(5) { |n| n * 2 }  # => 10

# Explicit block parameter
def each_twice(&block)
  2.times { block.call }
end

# Converting block to Proc
def save_block(&block)
  @saved = block
end

save_block { puts "Saved!" }
@saved.call  # => Saved!`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Method Objects</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`def greet(name)
  "Hello, #{name}!"
end

# Get method object
m = method(:greet)
m.call("Alice")  # => "Hello, Alice!"

# Pass method as argument
["Alice", "Bob"].map(&method(:greet))
# => ["Hello, Alice!", "Hello, Bob!"]`}
    </pre>
  </div>
);

export default RubyMethods;
