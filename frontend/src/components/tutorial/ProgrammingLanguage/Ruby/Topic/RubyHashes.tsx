import React from "react";

const RubyHashes: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Ruby Hashes</h1>

    <h2 className="text-2xl font-bold mt-6">Creating Hashes</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Old syntax (hash rocket)
person = { :name => "Alice", :age => 30 }

# New syntax (symbols)
person = { name: "Alice", age: 30 }

# Mixed keys
mixed = { "string_key" => 1, symbol_key: 2, 123 => "number key" }

# Hash.new
empty = Hash.new
with_default = Hash.new(0)  # Default value for missing keys
with_block = Hash.new { |h, k| h[k] = [] }  # Dynamic default

# From arrays
Hash[["a", 1], ["b", 2]]  # { "a" => 1, "b" => 2 }
[["a", 1], ["b", 2]].to_h # { "a" => 1, "b" => 2 }`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Accessing Values</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`person = { name: "Alice", age: 30, city: "NYC" }

# Basic access
person[:name]   # => "Alice"
person[:unknown]  # => nil

# Safe access with fetch
person.fetch(:name)           # => "Alice"
person.fetch(:unknown, "N/A") # => "N/A" (default)
person.fetch(:unknown) { |k| "No #{k}" }  # Block form

# Dig (nested access)
data = { user: { profile: { name: "Alice" } } }
data.dig(:user, :profile, :name)  # => "Alice"
data.dig(:user, :settings, :theme)  # => nil (safe)`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Modifying Hashes</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`person = { name: "Alice", age: 30 }

# Adding/updating
person[:city] = "NYC"       # Add new key
person[:age] = 31           # Update existing
person.store(:country, "USA")  # Alternative

# Merging
person.merge({ job: "Developer" })  # Returns new hash
person.merge!({ job: "Developer" }) # Modifies in place

# Update with block
person.merge({ age: 25 }) { |key, old, new| old }  # Keep old

# Deleting
person.delete(:city)        # Remove and return value
person.delete_if { |k, v| v.is_a?(Integer) }
person.keep_if { |k, v| k == :name }
person.reject! { |k, v| v.nil? }
person.select! { |k, v| v.is_a?(String) }

# Clear all
person.clear`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Hash Information</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`person = { name: "Alice", age: 30 }

person.keys       # => [:name, :age]
person.values     # => ["Alice", 30]
person.length     # => 2
person.size       # => 2
person.empty?     # => false

person.has_key?(:name)    # => true
person.key?(:name)        # => true (alias)
person.include?(:name)    # => true (alias)

person.has_value?(30)     # => true
person.value?(30)         # => true (alias)

# Find key by value
person.key("Alice")  # => :name`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Iterating</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`person = { name: "Alice", age: 30, city: "NYC" }

# each
person.each do |key, value|
  puts "#{key}: #{value}"
end

# each_key, each_value
person.each_key { |k| puts k }
person.each_value { |v| puts v }

# map (returns array)
person.map { |k, v| "#{k}=#{v}" }
# => ["name=Alice", "age=30", "city=NYC"]

# transform_keys (Ruby 2.5+)
person.transform_keys(&:to_s)
# => { "name" => "Alice", "age" => 30 }

# transform_values
person.transform_values(&:to_s)
# => { name: "Alice", age: "30" }`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Filtering</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`data = { a: 1, b: 2, c: 3, d: 4 }

# select (keep matching)
data.select { |k, v| v > 2 }
# => { c: 3, d: 4 }

# reject (remove matching)
data.reject { |k, v| v > 2 }
# => { a: 1, b: 2 }

# slice (Ruby 2.5+)
data.slice(:a, :c)
# => { a: 1, c: 3 }

# except (Ruby 3.0+ or ActiveSupport)
# data.except(:a, :b)  # => { c: 3, d: 4 }

# compact (remove nil values)
{ a: 1, b: nil, c: 3 }.compact
# => { a: 1, c: 3 }`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Converting</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`person = { name: "Alice", age: 30 }

# To array
person.to_a  # => [[:name, "Alice"], [:age, 30]]

# Invert (swap keys and values)
{ a: 1, b: 2 }.invert  # => { 1 => :a, 2 => :b }

# Flatten
{ a: [1, 2], b: [3, 4] }.flatten
# => [:a, 1, 2, :b, 3, 4]

# Sort (returns array of pairs)
{ c: 3, a: 1, b: 2 }.sort
# => [[:a, 1], [:b, 2], [:c, 3]]

{ c: 3, a: 1, b: 2 }.sort_by { |k, v| v }
# => [[:a, 1], [:b, 2], [:c, 3]]`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Default Values</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Static default
counter = Hash.new(0)
counter[:visits] += 1  # Works! Default is 0
counter[:visits] += 1
puts counter[:visits]  # => 2

# Dynamic default with block
grouped = Hash.new { |hash, key| hash[key] = [] }
grouped[:fruits] << "apple"
grouped[:fruits] << "banana"
grouped[:vegetables] << "carrot"
# { fruits: ["apple", "banana"], vegetables: ["carrot"] }

# Default proc
hash = {}
hash.default_proc = ->(h, k) { h[k] = "missing: #{k}" }
hash[:foo]  # => "missing: foo"`}
    </pre>
  </div>
);

export default RubyHashes;
