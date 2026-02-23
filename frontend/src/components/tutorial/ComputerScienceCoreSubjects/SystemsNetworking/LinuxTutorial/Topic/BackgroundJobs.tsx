import React from "react";

const BackgroundJobs: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Background Jobs
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Linux allows you to run processes in the background, freeing your terminal
      for other tasks. Job control lets you manage multiple processes, moving them
      between foreground and background as needed.
    </p>

    <h2 className="text-3xl font-bold mt-8">Running Commands in Background</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Add & at the end to run in background
$ sleep 100 &
[1] 12345                    # Job number and PID

$ ./long_script.sh &
[2] 12346

# Run and detach from terminal output
$ command > output.log 2>&1 &

# Discard output entirely
$ command > /dev/null 2>&1 &`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Managing Jobs</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# List all background jobs
$ jobs
[1]-  Running                 sleep 100 &
[2]+  Running                 ./long_script.sh &

# Jobs with PIDs
$ jobs -l
[1]- 12345 Running                 sleep 100 &
[2]+ 12346 Running                 ./long_script.sh &

# Jobs with process group IDs
$ jobs -p
12345
12346`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Foreground and Background Control</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Suspend foreground process (Ctrl+Z)
$ sleep 100
^Z
[1]+  Stopped                 sleep 100

# Resume in background
$ bg
[1]+ sleep 100 &

# Bring to foreground
$ fg
sleep 100              # Now in foreground

# Specify job number
$ fg %1                # Job 1 to foreground
$ bg %2                # Job 2 to background

# Job specifiers:
# %n    - Job number n
# %+    - Current job (most recent)
# %-    - Previous job
# %str  - Job beginning with string str`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Job Status Symbols</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Meaning</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">+</td>
            <td className="p-3 border">Current job (default for fg/bg)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-</td>
            <td className="p-3 border">Previous job</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">Running</td>
            <td className="p-3 border">Process is executing</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">Stopped</td>
            <td className="p-3 border">Process is suspended</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">Done</td>
            <td className="p-3 border">Process has completed</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Keeping Jobs Running After Logout</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Problem: Background jobs die when you log out

# Solution 1: nohup (no hangup)
$ nohup long_command &
nohup: ignoring input and appending output to 'nohup.out'

# Solution 2: disown
$ long_command &
[1] 12345
$ disown %1            # Remove from job table
$ disown -h %1         # Mark to not receive SIGHUP

# Solution 3: screen or tmux (recommended)
$ screen
$ long_command         # Run your command
# Press Ctrl+A, then D to detach
$ screen -r            # Reattach later

# Solution 4: systemd service (for daemons)
# Create a proper service file`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Download file in background
$ wget https://example.com/large-file.zip &

# Run backup and log output
$ tar -czvf backup.tar.gz /home/user > backup.log 2>&1 &

# Multiple commands in background
$ (command1 && command2 && command3) &

# Wait for all background jobs to complete
$ command1 &
$ command2 &
$ command3 &
$ wait                 # Waits for all jobs

# Wait for specific job
$ wait %1

# Check if job completed
$ jobs
[1]+  Done                    sleep 10`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Use & to start a command in the background</li>
        <li>Ctrl+Z suspends the foreground process</li>
        <li>bg resumes a stopped job in background, fg brings it to foreground</li>
        <li>jobs lists all background and stopped jobs</li>
        <li>Use nohup or disown to keep jobs running after logout</li>
        <li>For persistent sessions, use screen or tmux</li>
      </ul>
    </div>
  </div>
);

export default BackgroundJobs;
