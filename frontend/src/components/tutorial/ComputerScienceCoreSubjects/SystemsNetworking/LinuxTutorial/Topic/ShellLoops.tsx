import React from "react";

const ShellLoops: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Shell Loops
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Loops execute commands repeatedly. Bash supports for, while, and until loops.
    </p>

    <h2 className="text-3xl font-bold mt-8">for Loop</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Loop over list
for item in apple banana cherry; do
    echo "$item"
done

# Loop over files
for file in *.txt; do
    echo "Processing $file"
done

# C-style for loop
for ((i=0; i<5; i++)); do
    echo "$i"
done

# Loop over range
for i in {1..10}; do
    echo "$i"
done`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">while Loop</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# while loop
count=1
while [ $count -le 5 ]; do
    echo "Count: $count"
    ((count++))
done

# Read file line by line
while read line; do
    echo "$line"
done < file.txt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Loop Control</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# break - exit loop
# continue - skip to next iteration

for i in {1..10}; do
    if [ $i -eq 5 ]; then
        break
    fi
    echo "$i"
done`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>for loops iterate over lists or ranges</li>
        <li>while loops continue while condition is true</li>
        <li>Use break to exit, continue to skip iteration</li>
        <li>Read files line by line with while read</li>
      </ul>
    </div>
  </div>
);

export default ShellLoops;
