import React from "react";

const NiceRenice: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      nice and renice Commands
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      nice and renice commands control process priority (niceness) in Linux.
      This allows you to influence how much CPU time a process receives relative
      to other processes on the system.
    </p>

    <h2 className="text-3xl font-bold mt-8">Understanding Nice Values</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Range:</strong> -20 to +19</li>
        <li><strong>-20:</strong> Highest priority (least nice to others)</li>
        <li><strong>+19:</strong> Lowest priority (most nice to others)</li>
        <li><strong>0:</strong> Default priority</li>
        <li><strong>Only root</strong> can set negative nice values</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">nice Command</h2>
    <p className="leading-relaxed">
      Use nice to start a process with a specified priority.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Basic syntax
$ nice -n [value] command

# Run with lower priority (higher niceness)
$ nice -n 10 ./cpu_intensive_script.sh

# Run with lowest priority
$ nice -n 19 ./backup_script.sh

# Run with higher priority (requires root)
$ sudo nice -n -10 ./important_process

# Default: nice adds 10 to current niceness
$ nice command           # Runs with nice value 10

# Check default niceness
$ nice
0`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">renice Command</h2>
    <p className="leading-relaxed">
      Use renice to change the priority of running processes.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Change priority of running process
$ renice -n 10 -p 1234

# Multiple PIDs
$ renice -n 5 -p 1234 -p 5678

# Change all processes of a user
$ renice -n 10 -u john

# Change all processes of a group
$ renice -n 10 -g developers

# Increase priority (requires root)
$ sudo renice -n -5 -p 1234`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Viewing Process Priority</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Using ps
$ ps -eo pid,ni,comm
  PID  NI COMMAND
    1   0 systemd
 1234  10 backup_script
 5678 -10 critical_app

# Using top (NI column)
$ top
  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 1234 john      30  10  123456  12345   1234 R  50.0   1.0   5:00.00 backup

# In top, press 'r' to renice a process interactively

# Using htop
# NI column shows niceness
# Press F7/F8 to decrease/increase nice value`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Priority vs Niceness</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Nice Value</th>
            <th className="p-3 border">Priority (PR)</th>
            <th className="p-3 border">CPU Time</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">-20</td>
            <td className="p-3 border font-mono text-gray-900">0</td>
            <td className="p-3 border">Most CPU time</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">0</td>
            <td className="p-3 border font-mono text-gray-900">20</td>
            <td className="p-3 border">Default</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">+19</td>
            <td className="p-3 border font-mono text-gray-900">39</td>
            <td className="p-3 border">Least CPU time</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Practical Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Run backup with low priority
$ nice -n 19 rsync -av /data /backup/

# Run compilation with low priority
$ nice -n 15 make -j4

# Lower priority of running backup
$ ps aux | grep rsync
john  1234 ...
$ renice -n 19 -p 1234

# Run data processing without affecting system
$ nice -n 10 python3 process_data.py &

# Critical process needs more CPU
$ sudo renice -n -10 -p $(pgrep critical_app)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Nice values range from -20 (highest priority) to +19 (lowest)</li>
        <li>nice starts a process with specified priority</li>
        <li>renice changes priority of running processes</li>
        <li>Only root can set negative nice values</li>
        <li>Use higher nice values for background/batch processes</li>
        <li>Default niceness is 0 for regular processes</li>
      </ul>
    </div>
  </div>
);

export default NiceRenice;
