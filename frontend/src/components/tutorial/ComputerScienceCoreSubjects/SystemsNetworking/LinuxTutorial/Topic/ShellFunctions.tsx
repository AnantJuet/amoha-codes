import React from "react";

const ShellFunctions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Shell Functions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Functions group commands for reuse. They can accept arguments and return values.
    </p>

    <h2 className="text-3xl font-bold mt-8">Defining Functions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Method 1
function greet {
    echo "Hello, $1!"
}

# Method 2 (preferred)
greet() {
    echo "Hello, $1!"
}

# Call the function
greet "World"
greet "John"`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Arguments and Return</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Function with arguments
add() {
    local result=$(($1 + $2))
    echo $result
}

# Capture return value
sum=$(add 5 3)
echo "Sum: $sum"

# Return status
is_even() {
    if [ $(($1 % 2)) -eq 0 ]; then
        return 0  # True
    else
        return 1  # False
    fi
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Define functions before calling them</li>
        <li>Arguments accessed as $1, $2, etc.</li>
        <li>Use local for local variables</li>
        <li>Return values via echo or return status</li>
      </ul>
    </div>
  </div>
);

export default ShellFunctions;
