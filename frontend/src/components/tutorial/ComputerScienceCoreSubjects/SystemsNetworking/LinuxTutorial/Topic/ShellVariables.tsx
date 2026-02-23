import React from "react";

const ShellVariables: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Shell Variables
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Variables store data that can be used and modified throughout your script.
      Bash supports both user-defined and special built-in variables.
    </p>

    <h2 className="text-3xl font-bold mt-8">Defining Variables</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Define variable (no spaces around =)
name="John"
age=25
path="/home/user"

# Use variable (with $)
echo $name
echo "Hello, $name"
echo "Path is: ${'${path}'}/documents"`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Special Variables</h2>
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
            <td className="p-3 border">Script name</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">$1, $2...</td>
            <td className="p-3 border">Positional parameters</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">$#</td>
            <td className="p-3 border">Number of arguments</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">$@</td>
            <td className="p-3 border">All arguments</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">$?</td>
            <td className="p-3 border">Exit status of last command</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">$$</td>
            <td className="p-3 border">Current process ID</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Command Substitution</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Store command output in variable
current_date=$(date)
files=$(ls -la)
count=$(wc -l < file.txt)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>No spaces around = when assigning variables</li>
        <li>Use $ to access variable values</li>
        <li>Use {`\${var}`} for clarity in strings</li>
        <li>$(command) captures command output</li>
      </ul>
    </div>
  </div>
);

export default ShellVariables;
