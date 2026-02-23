import React from "react";

const RubyControlFlow: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Ruby Control Flow</h1>

    <h2 className="text-2xl font-bold mt-6">if Statement</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`age = 18

if age >= 18
  puts "You are an adult"
end

# With else
if age >= 18
  puts "Adult"
else
  puts "Minor"
end

# With elsif
if age < 13
  puts "Child"
elsif age < 20
  puts "Teenager"
else
  puts "Adult"
end

# Inline if (modifier form)
puts "Welcome!" if age >= 18`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">unless Statement</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`logged_in = false

# unless = if not
unless logged_in
  puts "Please log in"
end

# With else
unless logged_in
  puts "Please log in"
else
  puts "Welcome back!"
end

# Inline unless
puts "Access denied" unless logged_in

# Prefer if with positive conditions
# Good:
if user.active?
  # ...
end

# Avoid double negatives:
# Bad: unless !user.active?`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">case Statement</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`grade = "B"

result = case grade
when "A"
  "Excellent!"
when "B"
  "Good job!"
when "C"
  "You passed"
when "D", "F"
  "Need improvement"
else
  "Invalid grade"
end

puts result  # => "Good job!"

# With ranges
age = 25
category = case age
when 0..12 then "child"
when 13..19 then "teenager"
when 20..64 then "adult"
else "senior"
end

# With regex
input = "hello123"
case input
when /^\\d+$/
  puts "All numbers"
when /^[a-z]+$/
  puts "All letters"
when /^[a-z]+\\d+$/
  puts "Letters and numbers"
end

# With classes
value = 42
case value
when Integer then puts "It's an integer"
when String then puts "It's a string"
when Array then puts "It's an array"
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Pattern Matching (Ruby 3.0+)</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# case/in for pattern matching
data = { name: "Alice", age: 30, role: :admin }

case data
in { name: String => name, role: :admin }
  puts "Admin: #{name}"
in { name: String => name, role: :user }
  puts "User: #{name}"
else
  puts "Unknown"
end

# Array patterns
case [1, 2, 3]
in [a, b, c]
  puts "Three elements: #{a}, #{b}, #{c}"
in [a, *rest]
  puts "First: #{a}, rest: #{rest}"
end

# Guard conditions
case [1, 2]
in [a, b] if a < b
  puts "First is smaller"
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Ternary Operator</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`age = 20
status = age >= 18 ? "adult" : "minor"

# Nested (use sparingly)
result = score >= 90 ? "A" : score >= 80 ? "B" : "C"

# Better for complex conditions: use if/elsif`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Truthiness</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Only nil and false are falsy
# Everything else is truthy!

if 0
  puts "0 is truthy!"  # This prints!
end

if ""
  puts "Empty string is truthy!"  # This prints!
end

if []
  puts "Empty array is truthy!"  # This prints!
end

# Common pattern for checking nil
value = nil
if value
  puts "Has value"
else
  puts "No value"  # This prints
end`}
    </pre>
  </div>
);

export default RubyControlFlow;
