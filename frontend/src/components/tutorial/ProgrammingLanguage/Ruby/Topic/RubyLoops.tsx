import React from "react";

const RubyLoops: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Ruby Loops</h1>

    <h2 className="text-2xl font-bold mt-6">while Loop</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Basic while loop
count = 0
while count < 5
  puts count
  count += 1
end
# Output: 0, 1, 2, 3, 4

# Inline while
count = 0
puts count += 1 while count < 5

# begin/end while (runs at least once)
begin
  puts "This runs at least once"
  count += 1
end while count < 3`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">until Loop</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# until = while not
count = 0
until count >= 5
  puts count
  count += 1
end

# Inline until
count = 0
puts count += 1 until count >= 5

# begin/end until
begin
  puts "Running..."
  count += 1
end until count >= 3`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">for Loop</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# for loop (less common in Ruby)
for i in 0..4
  puts i
end

# for with array
for item in ["apple", "banana", "cherry"]
  puts item
end

# Note: for doesn't create a new scope
for x in [1, 2, 3]
  y = x * 2
end
puts y  # => 6 (y is accessible outside)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">each Loop (Preferred)</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# each is the Ruby way
[1, 2, 3, 4, 5].each do |num|
  puts num
end

# With block shorthand
[1, 2, 3].each { |n| puts n }

# each_with_index
["a", "b", "c"].each_with_index do |item, index|
  puts "#{index}: #{item}"
end

# each on hash
{ name: "Alice", age: 30 }.each do |key, value|
  puts "#{key}: #{value}"
end

# each creates a new scope
[1, 2, 3].each do |x|
  y = x * 2
end
# puts y  # Error! y is not defined here`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">times Loop</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Run n times
5.times do
  puts "Hello!"
end

# With index
5.times do |i|
  puts "Iteration #{i}"
end
# Output: Iteration 0, 1, 2, 3, 4

# One-liner
3.times { puts "Hi!" }`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">upto and downto</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# upto
1.upto(5) { |n| puts n }
# Output: 1, 2, 3, 4, 5

# downto
5.downto(1) { |n| puts n }
# Output: 5, 4, 3, 2, 1

# step
0.step(10, 2) { |n| puts n }
# Output: 0, 2, 4, 6, 8, 10`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">loop</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Infinite loop (use break to exit)
count = 0
loop do
  puts count
  count += 1
  break if count >= 5
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Loop Control</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# break - exit loop
[1, 2, 3, 4, 5].each do |n|
  break if n > 3
  puts n
end
# Output: 1, 2, 3

# next - skip to next iteration
[1, 2, 3, 4, 5].each do |n|
  next if n.even?
  puts n
end
# Output: 1, 3, 5

# redo - restart current iteration
count = 0
5.times do |i|
  count += 1
  redo if count == 3 && i == 2
  puts "i=#{i}, count=#{count}"
end

# retry - restart entire loop (use cautiously)
attempts = 0
begin
  attempts += 1
  raise "Error" if attempts < 3
  puts "Success on attempt #{attempts}"
rescue
  retry if attempts < 3
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Enumerable Methods</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`numbers = [1, 2, 3, 4, 5]

# map/collect - transform each element
doubled = numbers.map { |n| n * 2 }
# => [2, 4, 6, 8, 10]

# select/filter - keep matching elements
evens = numbers.select { |n| n.even? }
# => [2, 4]

# reject - remove matching elements
odds = numbers.reject { |n| n.even? }
# => [1, 3, 5]

# reduce/inject - accumulate
sum = numbers.reduce(0) { |acc, n| acc + n }
# => 15

# find/detect - first matching element
first_even = numbers.find { |n| n.even? }
# => 2`}
    </pre>
  </div>
);

export default RubyLoops;
