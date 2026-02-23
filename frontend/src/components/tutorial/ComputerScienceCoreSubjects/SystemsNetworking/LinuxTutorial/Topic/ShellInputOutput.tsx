import React from "react";

const ShellInputOutput: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Shell Input/Output
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Shell scripts can read user input, display output, and redirect data to/from files.
    </p>

    <h2 className="text-3xl font-bold mt-8">Reading Input</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Read user input
read name
echo "Hello, $name"

# With prompt
read -p "Enter your name: " name

# Silent input (passwords)
read -sp "Password: " password

# Read with timeout
read -t 5 -p "Quick! " answer`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Output and Redirection</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Output
echo "Hello World"
printf "Name: %s, Age: %d\n" "$name" "$age"

# Redirect stdout
echo "text" > file.txt    # Overwrite
echo "text" >> file.txt   # Append

# Redirect stderr
command 2> error.log

# Redirect both
command > output.log 2>&1

# Discard output
command > /dev/null 2>&1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>{`read gets user input; use -p for prompt`}</li>
        <li>{`> overwrites, >> appends to files`}</li>
        <li>2{`>`} redirects stderr, 2{`>`}&1 combines stdout and stderr</li>
        <li>/dev/null discards output</li>
      </ul>
    </div>
  </div>
);

export default ShellInputOutput;
