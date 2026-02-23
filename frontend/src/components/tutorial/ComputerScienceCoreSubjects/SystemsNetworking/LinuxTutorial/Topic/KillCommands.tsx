import React from "react";

const KillCommands: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      kill and killall Commands
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The kill commands send signals to processes to control their behavior.
      While commonly used to terminate processes, signals can also pause,
      resume, or trigger other actions in processes.
    </p>

    <h2 className="text-3xl font-bold mt-8">Common Signals</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Signal</th>
            <th className="p-3 border">Number</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">SIGHUP</td>
            <td className="p-3 border font-mono text-gray-900">1</td>
            <td className="p-3 border">Hangup - often used to reload config</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">SIGINT</td>
            <td className="p-3 border font-mono text-gray-900">2</td>
            <td className="p-3 border">Interrupt (Ctrl+C)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">SIGQUIT</td>
            <td className="p-3 border font-mono text-gray-900">3</td>
            <td className="p-3 border">Quit with core dump</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">SIGKILL</td>
            <td className="p-3 border font-mono text-gray-900">9</td>
            <td className="p-3 border">Force kill (cannot be caught)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">SIGTERM</td>
            <td className="p-3 border font-mono text-gray-900">15</td>
            <td className="p-3 border">Graceful termination (default)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">SIGSTOP</td>
            <td className="p-3 border font-mono text-gray-900">19</td>
            <td className="p-3 border">Stop/pause process</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">SIGCONT</td>
            <td className="p-3 border font-mono text-gray-900">18</td>
            <td className="p-3 border">Continue stopped process</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">kill Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic syntax
$ kill [signal] PID

# Default signal (SIGTERM - graceful termination)
$ kill 1234

# Force kill (when process doesn't respond)
$ kill -9 1234
$ kill -SIGKILL 1234
$ kill -KILL 1234

# Send specific signal
$ kill -15 1234      # SIGTERM
$ kill -HUP 1234     # Reload config

# Kill multiple processes
$ kill 1234 5678 9012

# List all signals
$ kill -l
 1) SIGHUP       2) SIGINT       3) SIGQUIT      4) SIGILL
 5) SIGTRAP      6) SIGABRT      7) SIGBUS       8) SIGFPE
 9) SIGKILL     10) SIGUSR1     11) SIGSEGV     12) SIGUSR2
13) SIGPIPE     14) SIGALRM     15) SIGTERM     ...`}
      </pre>
    </div>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="font-semibold">SIGTERM vs SIGKILL:</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li><strong>SIGTERM (15):</strong> Asks process to terminate gracefully. Process can clean up.</li>
        <li><strong>SIGKILL (9):</strong> Forces immediate termination. No cleanup possible.</li>
        <li>Always try SIGTERM first, use SIGKILL only if process is unresponsive.</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">killall Command</h2>
    <p className="leading-relaxed">
      killall sends signals to all processes matching a name.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Kill all processes by name
$ killall firefox

# Force kill all by name
$ killall -9 firefox

# Kill processes of specific user
$ killall -u john

# Interactive (ask before each kill)
$ killall -i firefox

# Verbose output
$ killall -v firefox
Killed firefox(1234) with signal 15

# Wait for processes to die
$ killall -w firefox`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">pkill Command</h2>
    <p className="leading-relaxed">
      pkill kills processes based on pattern matching (more flexible than killall).
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Kill by partial name match
$ pkill fire              # Matches firefox, firewall, etc.

# Kill with exact match
$ pkill -x firefox

# Kill by user
$ pkill -u john

# Kill newest matching process
$ pkill -n firefox

# Kill oldest matching process
$ pkill -o firefox

# Force kill
$ pkill -9 firefox

# Show what would be killed
$ pgrep firefox          # List matching PIDs first
1234
5678`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Finding Process to Kill</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Find PID by name
$ pgrep nginx
1234
1235

# Find with more details
$ pgrep -a nginx
1234 nginx: master process
1235 nginx: worker process

# Using ps and grep
$ ps aux | grep nginx

# Get PID of specific process
$ pidof nginx
1234 1235

# Using top/htop (interactive)
$ top          # Press k, enter PID
$ htop         # Select process, press F9`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Killing Unresponsive Processes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Step 1: Try graceful termination
$ kill 1234

# Step 2: Wait a few seconds, check if still running
$ ps -p 1234

# Step 3: If still running, force kill
$ kill -9 1234

# One-liner to kill if exists
$ kill 1234 2>/dev/null || true

# Kill all user processes (dangerous!)
$ pkill -u john

# Kill all processes except shell
$ kill -9 -1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>kill sends signals to processes by PID</li>
        <li>killall sends signals to processes by name</li>
        <li>pkill uses pattern matching for process names</li>
        <li>SIGTERM (15) is the default - allows graceful shutdown</li>
        <li>SIGKILL (9) forces immediate termination - use as last resort</li>
        <li>Use pgrep or pidof to find process IDs</li>
      </ul>
    </div>
  </div>
);

export default KillCommands;
