import React from "react";

const ConditionalStatements: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Conditional Statements
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Conditional statements allow scripts to make decisions based on conditions.
      Bash supports if-else statements and case statements.
    </p>

    <h2 className="text-3xl font-bold mt-8">if-else Statements</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic if
if [ condition ]; then
    commands
fi

# if-else
if [ $age -ge 18 ]; then
    echo "Adult"
else
    echo "Minor"
fi

# if-elif-else
if [ $score -ge 90 ]; then
    echo "A"
elif [ $score -ge 80 ]; then
    echo "B"
else
    echo "C"
fi`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Test Operators</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operator</th>
            <th className="p-3 border">Meaning</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">-eq, -ne</td>
            <td className="p-3 border">Equal, not equal (numbers)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-lt, -gt</td>
            <td className="p-3 border">Less than, greater than</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-le, -ge</td>
            <td className="p-3 border">Less/greater or equal</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">= , !=</td>
            <td className="p-3 border">String equality</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-z, -n</td>
            <td className="p-3 border">String empty, not empty</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-f, -d</td>
            <td className="p-3 border">Is file, is directory</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-e</td>
            <td className="p-3 border">File exists</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">case Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`case $choice in
    1) echo "Option 1";;
    2) echo "Option 2";;
    *) echo "Invalid";;
esac`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Use [ ] or [[ ]] for test conditions</li>
        <li>-eq, -lt, -gt for numeric comparisons</li>
        <li>=, != for string comparisons</li>
        <li>-f, -d, -e for file tests</li>
      </ul>
    </div>
  </div>
);

export default ConditionalStatements;
