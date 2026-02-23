import React from "react";

const RubyArrays: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Ruby Arrays</h1>

    <h2 className="text-2xl font-bold mt-6">Creating Arrays</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Literal syntax
numbers = [1, 2, 3, 4, 5]
mixed = [1, "two", :three, 4.0]

# Array.new
empty = Array.new
sized = Array.new(3)        # [nil, nil, nil]
filled = Array.new(3, "x")  # ["x", "x", "x"]
generated = Array.new(5) { |i| i * 2 }  # [0, 2, 4, 6, 8]

# Word arrays
words = %w[apple banana cherry]  # ["apple", "banana", "cherry"]
symbols = %i[one two three]      # [:one, :two, :three]`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Accessing Elements</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`arr = [10, 20, 30, 40, 50]

arr[0]     # => 10 (first element)
arr[-1]    # => 50 (last element)
arr[1, 3]  # => [20, 30, 40] (start, length)
arr[1..3]  # => [20, 30, 40] (range inclusive)
arr[1...3] # => [20, 30] (range exclusive)

# Methods
arr.first      # => 10
arr.last       # => 50
arr.first(2)   # => [10, 20]
arr.last(2)    # => [40, 50]

# Safe access
arr.fetch(10, "default")  # => "default" (index out of bounds)
arr.at(2)                 # => 30`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Modifying Arrays</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`arr = [1, 2, 3]

# Adding elements
arr.push(4)       # [1, 2, 3, 4] - add to end
arr << 5          # [1, 2, 3, 4, 5] - shovel operator
arr.unshift(0)    # [0, 1, 2, 3, 4, 5] - add to front
arr.insert(2, 99) # [0, 1, 99, 2, 3, 4, 5] - insert at index

# Removing elements
arr.pop           # Remove and return last
arr.shift         # Remove and return first
arr.delete(99)    # Remove by value
arr.delete_at(2)  # Remove at index

# Replacing
arr[0] = 100      # Replace at index
arr[1..2] = [200, 300]  # Replace range`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Array Information</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`arr = [1, 2, 3, 2, 1]

arr.length    # => 5
arr.size      # => 5 (alias)
arr.count     # => 5
arr.count(2)  # => 2 (count specific value)
arr.empty?    # => false
arr.include?(3)  # => true
arr.index(2)  # => 1 (first index of value)
arr.rindex(2) # => 3 (last index of value)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Iterating</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`arr = [1, 2, 3, 4, 5]

# each
arr.each { |n| puts n }

# each_with_index
arr.each_with_index { |n, i| puts "#{i}: #{n}" }

# map (transform)
doubled = arr.map { |n| n * 2 }  # [2, 4, 6, 8, 10]

# select (filter)
evens = arr.select { |n| n.even? }  # [2, 4]

# reject (inverse filter)
odds = arr.reject { |n| n.even? }  # [1, 3, 5]

# reduce (accumulate)
sum = arr.reduce(0) { |acc, n| acc + n }  # 15
sum = arr.reduce(:+)  # Shorthand`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Sorting and Ordering</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`arr = [3, 1, 4, 1, 5, 9, 2, 6]

arr.sort           # => [1, 1, 2, 3, 4, 5, 6, 9]
arr.sort.reverse   # => [9, 6, 5, 4, 3, 2, 1, 1]
arr.sort { |a, b| b <=> a }  # Descending

# Sort by
words = ["banana", "apple", "cherry"]
words.sort_by { |w| w.length }  # ["apple", "banana", "cherry"]
words.sort_by(&:length)         # Shorthand

# In-place sorting
arr.sort!
arr.reverse!
arr.shuffle!`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Array Operations</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`a = [1, 2, 3]
b = [3, 4, 5]

# Concatenation
a + b        # => [1, 2, 3, 3, 4, 5]
a.concat(b)  # Modifies a

# Set operations
a | b   # Union: [1, 2, 3, 4, 5]
a & b   # Intersection: [3]
a - b   # Difference: [1, 2]

# Flatten nested arrays
[[1, 2], [3, [4, 5]]].flatten  # [1, 2, 3, 4, 5]

# Remove duplicates
[1, 1, 2, 2, 3].uniq  # [1, 2, 3]

# Compact (remove nils)
[1, nil, 2, nil, 3].compact  # [1, 2, 3]

# Zip
[1, 2, 3].zip([4, 5, 6])  # [[1, 4], [2, 5], [3, 6]]`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Searching and Finding</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`arr = [1, 2, 3, 4, 5, 6]

arr.find { |n| n > 3 }     # => 4 (first match)
arr.find_all { |n| n > 3 } # => [4, 5, 6] (all matches)
arr.any? { |n| n > 5 }     # => true
arr.all? { |n| n > 0 }     # => true
arr.none? { |n| n > 10 }   # => true
arr.one? { |n| n == 3 }    # => true

# Min/Max
arr.min     # => 1
arr.max     # => 6
arr.minmax  # => [1, 6]`}
    </pre>
  </div>
);

export default RubyArrays;
