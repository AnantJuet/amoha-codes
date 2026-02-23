import React from "react";

const HeadTailCommands: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      head and tail Commands
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      head displays the beginning of files while tail displays the end. Both default
      to 10 lines but can be customized. tail -f is essential for monitoring log files.
    </p>

    <h2 className="text-3xl font-bold mt-8">head Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Display first 10 lines (default)
$ head file.txt

# Display first N lines
$ head -n 20 file.txt
$ head -20 file.txt

# Display first N bytes
$ head -c 100 file.txt

# Multiple files
$ head file1.txt file2.txt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">tail Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Display last 10 lines (default)
$ tail file.txt

# Display last N lines
$ tail -n 20 file.txt

# Follow file in real-time (great for logs!)
$ tail -f /var/log/syslog

# Follow with retry (if file recreated)
$ tail -F /var/log/syslog

# Start from line N
$ tail -n +5 file.txt    # From line 5 to end

# Follow multiple files
$ tail -f log1.txt log2.txt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Combining head and tail</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Display lines 10-20
$ head -20 file.txt | tail -10`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Default is 10 lines for both commands</li>
        <li>tail -f is essential for real-time log monitoring</li>
        <li>Use -n to specify number of lines</li>
        <li>Combine head and tail to extract middle sections</li>
      </ul>
    </div>
  </div>
);

export default HeadTailCommands;
