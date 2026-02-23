import React from "react";

const ScriptDebugging: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Script Debugging
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Debugging helps find and fix errors in shell scripts. Bash provides several
      options for tracing and debugging script execution.
    </p>

    <h2 className="text-3xl font-bold mt-8">Debug Options</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Run with debug mode
$ bash -x script.sh

# Enable in script
#!/bin/bash
set -x          # Print commands as executed
set -e          # Exit on error
set -u          # Error on undefined variables

# Disable debug
set +x

# Combine options
set -eux`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Debug Flags</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Flag</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">-x</td>
            <td className="p-3 border">Print commands before execution</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-e</td>
            <td className="p-3 border">Exit on first error</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-u</td>
            <td className="p-3 border">Treat unset variables as errors</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-v</td>
            <td className="p-3 border">Print shell input lines</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Checking Exit Status</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Check last command status
command
if [ $? -ne 0 ]; then
    echo "Command failed"
fi`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>set -x shows commands being executed</li>
        <li>set -e stops script on first error</li>
        <li>$? contains last exit status</li>
        <li>Use set -eux for robust scripts</li>
      </ul>
    </div>
  </div>
);

export default ScriptDebugging;
