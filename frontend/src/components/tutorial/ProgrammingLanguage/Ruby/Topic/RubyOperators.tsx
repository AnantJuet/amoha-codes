import React from "react";

const RubyOperators: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Ruby Operators</h1>

    <h2 className="text-2xl font-bold mt-6">Arithmetic Operators</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`a = 10
b = 3

a + b   # => 13 (Addition)
a - b   # => 7  (Subtraction)
a * b   # => 30 (Multiplication)
a / b   # => 3  (Integer Division)
a % b   # => 1  (Modulo)
a ** b  # => 1000 (Exponentiation)

# Float division
10.0 / 3  # => 3.333...
10.fdiv(3) # => 3.333...`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Comparison Operators</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`a = 10
b = 5

a == b   # => false (Equal)
a != b   # => true  (Not equal)
a > b    # => true  (Greater than)
a < b    # => false (Less than)
a >= b   # => true  (Greater or equal)
a <= b   # => false (Less or equal)

# Spaceship operator (returns -1, 0, or 1)
5 <=> 10   # => -1
10 <=> 10  # => 0
15 <=> 10  # => 1

# Case equality (used in case statements)
(1..10) === 5  # => true
/hello/ === "hello world"  # => true
String === "hello"  # => true`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Logical Operators</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# && and 'and' - both must be true
true && true    # => true
true && false   # => false

# || and 'or' - at least one must be true
true || false   # => true
false || false  # => false

# ! and 'not' - negation
!true   # => false
!false  # => true
!nil    # => true

# Short-circuit evaluation
nil && expensive_operation  # expensive_operation not called
true || expensive_operation # expensive_operation not called

# Difference: && has higher precedence than 'and'
x = true and false  # x = true (assignment first)
x = true && false   # x = false (logical first)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Assignment Operators</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`x = 10     # Basic assignment

x += 5     # x = x + 5  => 15
x -= 3     # x = x - 3  => 12
x *= 2     # x = x * 2  => 24
x /= 4     # x = x / 4  => 6
x %= 4     # x = x % 4  => 2
x **= 3    # x = x ** 3 => 8

# Conditional assignment
y = nil
y ||= 10   # Assign if nil or false => 10
y ||= 20   # Already assigned => 10

# Safe navigation + assignment
hash = {}
hash[:key] ||= "default"  # => "default"`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Range Operators</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Inclusive range (..)
(1..5).to_a    # => [1, 2, 3, 4, 5]

# Exclusive range (...)
(1...5).to_a   # => [1, 2, 3, 4]

# Use in conditions
age = 25
case age
when 0..12 then "child"
when 13..19 then "teenager"
when 20..64 then "adult"
else "senior"
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Ternary Operator</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`age = 20
status = age >= 18 ? "adult" : "minor"
# => "adult"

# Equivalent to:
status = if age >= 18
           "adult"
         else
           "minor"
         end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Safe Navigation Operator</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# &. returns nil instead of raising NoMethodError
user = nil
user&.name     # => nil (no error)

# Equivalent to:
user && user.name

# Useful for chaining
result = user&.profile&.settings&.theme`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Splat Operators</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Single splat (*) - arrays
def sum(*numbers)
  numbers.reduce(0, :+)
end
sum(1, 2, 3, 4)  # => 10

# Array unpacking
first, *rest = [1, 2, 3, 4]
# first = 1, rest = [2, 3, 4]

# Double splat (**) - hashes
def greet(name:, **options)
  puts "Hello #{name}!"
  puts options
end
greet(name: "Alice", style: :formal, loud: true)`}
    </pre>
  </div>
);

export default RubyOperators;
