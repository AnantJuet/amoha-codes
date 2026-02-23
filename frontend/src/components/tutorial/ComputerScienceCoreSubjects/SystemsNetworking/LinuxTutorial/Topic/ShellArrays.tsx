import React from "react";

const ShellArrays: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Shell Arrays
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Bash arrays store multiple values in a single variable. They can be indexed
      or associative (key-value pairs).
    </p>

    <h2 className="text-3xl font-bold mt-8">Indexed Arrays</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Create array
fruits=("apple" "banana" "cherry")

# Access elements
echo \${fruits[0]}        # apple
echo \${fruits[1]}        # banana

# All elements
echo \${fruits[@]}

# Array length
echo \${#fruits[@]}

# Add element
fruits+=("date")

# Loop through array
for fruit in "\${fruits[@]}"; do
    echo "$fruit"
done`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Associative Arrays</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Declare associative array
declare -A user
user[name]="John"
user[age]=25

# Access
echo \${user[name]}

# All keys
echo \${!user[@]}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Arrays are zero-indexed</li>
        <li>{`Use \${arr[@]} for all elements`}</li>
        <li>{`Use \${#arr[@]} for length`}</li>
        <li>Associative arrays need declare -A</li>
      </ul>
    </div>
  </div>
);

export default ShellArrays;
