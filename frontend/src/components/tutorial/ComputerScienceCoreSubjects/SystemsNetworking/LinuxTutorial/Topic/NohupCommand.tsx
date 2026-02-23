import React from "react";

const NohupCommand: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      nohup Command
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The nohup (no hangup) command runs processes that continue running even after
      you log out. It ignores the SIGHUP signal that is sent when a terminal closes,
      making it ideal for long-running tasks.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Usage</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic syntax
$ nohup command &

# Example
$ nohup ./long_script.sh &
[1] 12345
nohup: ignoring input and appending output to 'nohup.out'

# The process will continue after logout
# Output is saved to nohup.out by default`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Redirecting Output</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Default: output goes to nohup.out
$ nohup command &

# Redirect to custom file
$ nohup command > output.log 2>&1 &

# Separate stdout and stderr
$ nohup command > stdout.log 2> stderr.log &

# Discard all output
$ nohup command > /dev/null 2>&1 &

# Append to existing log
$ nohup command >> output.log 2>&1 &`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Long-running download
$ nohup wget https://example.com/large-file.zip &

# Backup script
$ nohup tar -czvf /backup/data.tar.gz /data > backup.log 2>&1 &

# Database export
$ nohup mysqldump -u root -p database > dump.sql 2>&1 &

# Python script
$ nohup python3 long_process.py > process.log 2>&1 &

# Server process
$ nohup ./server --port 8080 > server.log 2>&1 &`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Checking nohup Processes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Find nohup processes
$ ps aux | grep nohup

# Better: find your specific process
$ ps aux | grep long_script

# Check output
$ tail -f nohup.out

# Or your custom log
$ tail -f output.log`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Alternatives to nohup</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Tool</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">nohup</td>
            <td className="p-3 border">Ignore hangup signal</td>
            <td className="p-3 border">Simple long-running tasks</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">disown</td>
            <td className="p-3 border">Remove from shell job table</td>
            <td className="p-3 border">Already running process</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">screen</td>
            <td className="p-3 border">Terminal multiplexer</td>
            <td className="p-3 border">Interactive sessions</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">tmux</td>
            <td className="p-3 border">Modern terminal multiplexer</td>
            <td className="p-3 border">Multiple sessions/windows</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">systemd</td>
            <td className="p-3 border">Service manager</td>
            <td className="p-3 border">Daemon processes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Using disown</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# If you forgot to use nohup, you can use disown
$ long_command &
[1] 12345

# Remove from job table (won't receive SIGHUP)
$ disown %1

# Or with -h flag (still shows in jobs, but ignores SIGHUP)
$ disown -h %1

# Disown all jobs
$ disown -a`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>nohup makes processes immune to SIGHUP (terminal close)</li>
        <li>Always use & to run in background with nohup</li>
        <li>Default output goes to nohup.out in current directory</li>
        <li>Redirect output to custom files for better organization</li>
        <li>Use disown for already-running processes</li>
        <li>For interactive sessions, screen or tmux are better options</li>
      </ul>
    </div>
  </div>
);

export default NohupCommand;
