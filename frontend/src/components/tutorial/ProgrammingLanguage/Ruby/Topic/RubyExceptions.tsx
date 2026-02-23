import React from "react";

const RubyExceptions: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Ruby Exceptions</h1>

    <h2 className="text-2xl font-bold mt-6">Basic Exception Handling</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`begin
  # Code that might raise an exception
  result = 10 / 0
rescue ZeroDivisionError => e
  puts "Error: #{e.message}"
end

# Without begin in method (whole method is implicit begin)
def divide(a, b)
  a / b
rescue ZeroDivisionError
  puts "Cannot divide by zero"
  nil
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Multiple Exception Types</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`begin
  # risky code
rescue ZeroDivisionError => e
  puts "Division error: #{e.message}"
rescue TypeError => e
  puts "Type error: #{e.message}"
rescue StandardError => e
  puts "Other error: #{e.message}"
end

# Multiple types in one rescue
begin
  # risky code
rescue ZeroDivisionError, TypeError => e
  puts "Math or type error: #{e.message}"
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">else and ensure</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`begin
  file = File.open("data.txt")
  data = file.read
rescue Errno::ENOENT => e
  puts "File not found"
else
  # Runs only if no exception was raised
  puts "File read successfully"
  process(data)
ensure
  # Always runs, exception or not
  file&.close
  puts "Cleanup complete"
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Raising Exceptions</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# raise with message
def validate_age(age)
  raise "Age must be positive" if age < 0
  raise ArgumentError, "Age must be a number" unless age.is_a?(Numeric)
  age
end

# raise with exception object
raise StandardError.new("Something went wrong")

# Re-raise current exception
begin
  risky_operation
rescue => e
  log_error(e)
  raise  # Re-raises the same exception
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Custom Exceptions</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`class ValidationError < StandardError
end

class NotFoundError < StandardError
  attr_reader :resource

  def initialize(resource)
    @resource = resource
    super("#{resource} not found")
  end
end

# Using custom exceptions
def find_user(id)
  user = database.find(id)
  raise NotFoundError.new("User##{id}") unless user
  user
end

begin
  find_user(999)
rescue NotFoundError => e
  puts e.message      # User#999 not found
  puts e.resource     # User#999
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Exception Hierarchy</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Ruby Exception Hierarchy (partial)
# Exception
#   NoMemoryError
#   ScriptError
#     LoadError
#     SyntaxError
#   SignalException
#     Interrupt
#   StandardError (default for rescue)
#     ArgumentError
#     IOError
#     NameError
#       NoMethodError
#     RangeError
#     RuntimeError (default for raise)
#     TypeError
#     ZeroDivisionError

# rescue without type catches StandardError
begin
  # ...
rescue => e  # Same as rescue StandardError => e
  puts e.class
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">retry</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`attempts = 0

begin
  attempts += 1
  puts "Attempt #{attempts}"
  raise "Network error" if attempts < 3
  puts "Success!"
rescue
  retry if attempts < 3
  puts "Failed after 3 attempts"
end

# With exponential backoff
def fetch_with_retry(url, max_attempts: 3)
  attempts = 0
  begin
    attempts += 1
    fetch(url)
  rescue NetworkError
    if attempts < max_attempts
      sleep(2 ** attempts)  # 2, 4, 8 seconds
      retry
    else
      raise
    end
  end
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Exception Information</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`begin
  undefined_method
rescue => e
  puts e.class       # NoMethodError
  puts e.message     # undefined method 'undefined_method'
  puts e.backtrace   # Array of stack trace strings

  # Full backtrace
  e.backtrace.each { |line| puts line }

  # Cause (for chained exceptions)
  puts e.cause if e.cause
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Rescue specific exceptions, not just <code>Exception</code></li>
      <li>Don't rescue <code>Exception</code> - it catches <code>Interrupt</code> and <code>SystemExit</code></li>
      <li>Use custom exceptions for domain-specific errors</li>
      <li>Always clean up resources in <code>ensure</code></li>
      <li>Log exceptions before re-raising</li>
      <li>Fail fast - don't hide errors</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">throw and catch</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# throw/catch for non-error flow control
result = catch(:done) do
  [1, 2, 3].each do |x|
    [4, 5, 6].each do |y|
      throw(:done, [x, y]) if x * y > 10
    end
  end
  nil  # No match found
end

puts result.inspect  # [2, 6] or [3, 4]`}
    </pre>
  </div>
);

export default RubyExceptions;
