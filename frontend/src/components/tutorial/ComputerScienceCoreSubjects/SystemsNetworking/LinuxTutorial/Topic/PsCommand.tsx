import React from "react";

const PsCommand: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      ps Command
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The ps (process status) command displays information about running processes.
      It provides a snapshot of current processes, unlike top which shows real-time updates.
      ps supports multiple option styles: UNIX, BSD, and GNU long options.
    </p>

    <h2 className="text-3xl font-bold mt-8">Common Usage</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic: current user's processes in current terminal
$ ps
  PID TTY          TIME CMD
 1234 pts/0    00:00:00 bash
 5678 pts/0    00:00:00 ps

# All processes (BSD style)
$ ps aux
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.1 169080 13420 ?        Ss   10:00   0:01 /sbin/init
root         2  0.0  0.0      0     0 ?        S    10:00   0:00 [kthreadd]
john      1234  0.0  0.1  21668  5460 pts/0    Ss   10:05   0:00 -bash
...

# All processes (UNIX style)
$ ps -ef
UID        PID  PPID  C STIME TTY          TIME CMD
root         1     0  0 10:00 ?        00:00:01 /sbin/init
root         2     0  0 10:00 ?        00:00:00 [kthreadd]
john      1234  1233  0 10:05 pts/0    00:00:00 -bash
...`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Understanding ps aux Output</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Column</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">USER</td>
            <td className="p-3 border">Owner of the process</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">PID</td>
            <td className="p-3 border">Process ID</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">%CPU</td>
            <td className="p-3 border">CPU usage percentage</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">%MEM</td>
            <td className="p-3 border">Memory usage percentage</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">VSZ</td>
            <td className="p-3 border">Virtual memory size (KB)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">RSS</td>
            <td className="p-3 border">Resident Set Size - physical memory (KB)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">TTY</td>
            <td className="p-3 border">Terminal (? = no terminal)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">STAT</td>
            <td className="p-3 border">Process state (R, S, D, Z, T, etc.)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">START</td>
            <td className="p-3 border">Start time</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">TIME</td>
            <td className="p-3 border">CPU time used</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">COMMAND</td>
            <td className="p-3 border">Command name and arguments</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Filtering and Searching</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Find process by name
$ ps aux | grep nginx
root      1234  0.0  0.1  41204  3568 ?        Ss   10:00   0:00 nginx: master
www-data  1235  0.0  0.2  41556  7892 ?        S    10:00   0:00 nginx: worker
john      5678  0.0  0.0   8172   720 pts/0    S+   10:30   0:00 grep nginx

# Exclude grep from results
$ ps aux | grep [n]ginx
$ ps aux | grep nginx | grep -v grep

# Find process by PID
$ ps -p 1234

# Find processes by user
$ ps -u john
$ ps -U john    # Real user ID

# Show full command line
$ ps auxww`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Custom Output Format</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Select specific columns
$ ps -eo pid,ppid,user,cmd
  PID  PPID USER     CMD
    1     0 root     /sbin/init
 1234  1233 john     -bash
 5678  1234 john     vim file.txt

# Sort by CPU usage
$ ps aux --sort=-%cpu | head
$ ps -eo pid,user,%cpu,cmd --sort=-%cpu | head -10

# Sort by memory usage
$ ps aux --sort=-%mem | head

# Show process hierarchy
$ ps -ejH
$ ps axjf

# Custom format for specific info
$ ps -eo pid,ppid,user,%cpu,%mem,stat,cmd --sort=-%mem`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Options</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Option</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">aux</td>
            <td className="p-3 border">All processes, user-oriented format (BSD)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-ef</td>
            <td className="p-3 border">All processes, full format (UNIX)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-u user</td>
            <td className="p-3 border">Processes by effective user</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-p pid</td>
            <td className="p-3 border">Select by PID</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-o format</td>
            <td className="p-3 border">Custom output format</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">--sort</td>
            <td className="p-3 border">Sort output</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">-H</td>
            <td className="p-3 border">Show process hierarchy</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>ps aux shows all processes in BSD format (most common)</li>
        <li>ps -ef shows all processes in UNIX format</li>
        <li>Use grep to filter output by process name</li>
        <li>Use --sort to sort by CPU, memory, or other columns</li>
        <li>Use -o to customize output columns</li>
        <li>ps shows a snapshot; use top/htop for real-time monitoring</li>
      </ul>
    </div>
  </div>
);

export default PsCommand;
