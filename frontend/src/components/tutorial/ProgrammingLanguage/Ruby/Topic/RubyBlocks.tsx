import React from "react";

const RubyBlocks: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Ruby Blocks, Procs & Lambdas</h1>

    <h2 className="text-2xl font-bold mt-6">Blocks</h2>
    <p>Blocks are anonymous functions passed to methods.</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# do...end syntax (multiline)
[1, 2, 3].each do |num|
  puts num
end

# Curly brace syntax (single line)
[1, 2, 3].each { |num| puts num }

# Block with multiple parameters
{ a: 1, b: 2 }.each { |key, value| puts "#{key}: #{value}" }

# Block local variables
x = 10
[1, 2, 3].each { |n; x| x = n }  # x is block-local
puts x  # => 10 (unchanged)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">yield</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Method using yield
def greet
  puts "Hello!"
  yield if block_given?
  puts "Goodbye!"
end

greet { puts "Nice to meet you!" }
# Hello!
# Nice to meet you!
# Goodbye!

# yield with arguments
def calculate(a, b)
  yield(a, b)
end

result = calculate(10, 5) { |x, y| x + y }
puts result  # => 15

# yield with return value
def transform(value)
  result = yield(value)
  puts "Transformed: #{result}"
end

transform(5) { |n| n * 2 }  # Transformed: 10`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Explicit Block Parameter</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# & converts block to Proc
def execute(&block)
  puts "Before"
  block.call
  puts "After"
end

execute { puts "Inside block" }

# Pass block to another method
def wrapper(&block)
  other_method(&block)
end

# Check if block given
def optional_block(&block)
  if block
    block.call
  else
    puts "No block provided"
  end
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Procs</h2>
    <p>Procs are saved blocks that can be reused.</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Creating Procs
my_proc = Proc.new { |x| puts x * 2 }
my_proc = proc { |x| puts x * 2 }  # Shorthand

# Calling Procs
my_proc.call(5)   # => 10
my_proc.(5)       # => 10
my_proc[5]        # => 10

# Procs and arguments (flexible)
flexible = Proc.new { |a, b| puts "#{a}, #{b}" }
flexible.call(1)      # 1, (nil)
flexible.call(1, 2, 3)  # 1, 2 (extra ignored)

# Proc return behavior
def proc_return
  my_proc = Proc.new { return "Proc returned" }
  my_proc.call
  "Method returned"  # Never reached!
end
puts proc_return  # => "Proc returned"

# Using Proc with methods
double = Proc.new { |n| n * 2 }
[1, 2, 3].map(&double)  # => [2, 4, 6]`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Lambdas</h2>
    <p>Lambdas are stricter Procs that behave more like methods.</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Creating Lambdas
my_lambda = lambda { |x| x * 2 }
my_lambda = ->(x) { x * 2 }  # Stabby lambda

# Calling lambdas
my_lambda.call(5)  # => 10
my_lambda.(5)      # => 10
my_lambda[5]       # => 10

# Lambdas check argument count
strict = ->(a, b) { a + b }
strict.call(1)      # ArgumentError! Wrong number of args
strict.call(1, 2, 3)  # ArgumentError!

# Lambda return behavior
def lambda_return
  my_lambda = -> { return "Lambda returned" }
  my_lambda.call
  "Method returned"  # This IS reached!
end
puts lambda_return  # => "Method returned"

# Lambda with default arguments
greet = ->(name = "World") { puts "Hello, #{name}!" }
greet.call          # Hello, World!
greet.call("Ruby")  # Hello, Ruby!`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Proc vs Lambda</h2>
    <table className="w-full border-collapse border border-gray-300 mt-4">
      <thead className="bg-gray-100">
        <tr>
          <th className="border border-gray-300 p-2">Feature</th>
          <th className="border border-gray-300 p-2">Proc</th>
          <th className="border border-gray-300 p-2">Lambda</th>
        </tr>
      </thead>
      <tbody>
        <tr><td className="border border-gray-300 p-2">Argument checking</td><td className="border border-gray-300 p-2">Flexible</td><td className="border border-gray-300 p-2">Strict</td></tr>
        <tr><td className="border border-gray-300 p-2">return behavior</td><td className="border border-gray-300 p-2">Returns from enclosing method</td><td className="border border-gray-300 p-2">Returns from lambda only</td></tr>
        <tr><td className="border border-gray-300 p-2">lambda? method</td><td className="border border-gray-300 p-2">false</td><td className="border border-gray-300 p-2">true</td></tr>
      </tbody>
    </table>

    <h2 className="text-2xl font-bold mt-6">Symbol to Proc</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# & converts symbol to proc calling that method
[1, 2, 3].map(&:to_s)      # ["1", "2", "3"]
["a", "b", "c"].map(&:upcase)  # ["A", "B", "C"]
[1, 2, 3, 4].select(&:even?)   # [2, 4]
[1, 2, 3].reduce(&:+)          # 6

# Equivalent to:
[1, 2, 3].map { |n| n.to_s }`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Closures</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Blocks, Procs, and Lambdas are closures
# They capture surrounding variables

def make_counter
  count = 0
  -> { count += 1 }
end

counter = make_counter
counter.call  # => 1
counter.call  # => 2
counter.call  # => 3

# Each call has its own closure
counter2 = make_counter
counter2.call  # => 1 (separate count)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Practical Examples</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Callback pattern
def fetch_data(url, &on_success)
  data = "fetched from #{url}"
  on_success.call(data) if on_success
end

fetch_data("api.com") { |data| puts data }

# Strategy pattern
strategies = {
  add: ->(a, b) { a + b },
  subtract: ->(a, b) { a - b },
  multiply: ->(a, b) { a * b }
}

def calculate(a, b, strategy)
  strategy.call(a, b)
end

calculate(10, 5, strategies[:add])       # => 15
calculate(10, 5, strategies[:multiply])  # => 50`}
    </pre>
  </div>
);

export default RubyBlocks;
