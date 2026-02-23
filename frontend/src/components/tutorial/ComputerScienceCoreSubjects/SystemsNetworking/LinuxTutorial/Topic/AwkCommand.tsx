import React from "react";

const AwkCommand: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      awk Command
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      awk is a powerful programming language for text processing. It excels at
      working with structured data, extracting fields, and performing calculations
      on text files.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Usage</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Print specific columns
$ awk '{print $1}' file.txt           # First column
$ awk '{print $1, $3}' file.txt       # Columns 1 and 3
$ awk '{print $NF}' file.txt          # Last column

# Custom field separator
$ awk -F':' '{print $1}' /etc/passwd  # Colon separator
$ awk -F',' '{print $1, $2}' data.csv

# Print entire line
$ awk '{print $0}' file.txt
$ awk '{print}' file.txt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Patterns and Conditions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Filter lines
$ awk '/pattern/' file.txt            # Lines containing pattern
$ awk '$3 > 100' file.txt             # Where column 3 > 100
$ awk 'NR > 1' file.txt               # Skip header (line > 1)

# Multiple conditions
$ awk '$3 > 100 && $4 == "active"' file.txt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Built-in Variables</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Variable</th>
            <th className="p-3 border">Meaning</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">$0</td>
            <td className="p-3 border">Entire line</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">$1, $2...</td>
            <td className="p-3 border">Column 1, 2, etc.</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">NF</td>
            <td className="p-3 border">Number of fields</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">NR</td>
            <td className="p-3 border">Current line number</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">FS</td>
            <td className="p-3 border">Field separator</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Calculations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Sum a column
$ awk '{sum += $3} END {print sum}' file.txt

# Average
$ awk '{sum += $3; count++} END {print sum/count}' file.txt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>$1, $2, etc. refer to columns; $0 is entire line</li>
        <li>Use -F to set field separator</li>
        <li>NR is line number, NF is number of fields</li>
        <li>BEGIN runs before processing, END runs after</li>
        <li>awk is great for columnar data processing</li>
      </ul>
    </div>
  </div>
);

export default AwkCommand;
