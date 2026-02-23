import React from "react";

const UnderstandingProcesses: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Understanding Processes in Linux
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A process is an instance of a running program. Linux is a multitasking operating
      system that can run multiple processes simultaneously. Understanding processes
      is essential for system monitoring, troubleshooting, and resource management.
    </p>

    <h2 className="text-3xl font-bold mt-8">Process Concepts</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Concept</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">PID</td>
            <td className="p-3 border">Process ID - unique identifier for each process</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">PPID</td>
            <td className="p-3 border">Parent Process ID - the process that created this process</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">UID</td>
            <td className="p-3 border">User ID - the user who owns the process</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Daemon</td>
            <td className="p-3 border">Background process that runs continuously</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Thread</td>
            <td className="p-3 border">Lightweight process sharing memory with parent</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Process States</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">State</th>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Running</td>
            <td className="p-3 border font-mono text-gray-900">R</td>
            <td className="p-3 border">Currently executing or ready to run</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Sleeping</td>
            <td className="p-3 border font-mono text-gray-900">S</td>
            <td className="p-3 border">Waiting for an event (interruptible)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Uninterruptible Sleep</td>
            <td className="p-3 border font-mono text-gray-900">D</td>
            <td className="p-3 border">Waiting for I/O (cannot be interrupted)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Stopped</td>
            <td className="p-3 border font-mono text-gray-900">T</td>
            <td className="p-3 border">Stopped by signal or debugger</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Zombie</td>
            <td className="p-3 border font-mono text-gray-900">Z</td>
            <td className="p-3 border">Terminated but not yet cleaned up by parent</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Process Hierarchy</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# View process tree
$ pstree
systemd─┬─ModemManager───2*[{ModemManager}]
        ├─NetworkManager───2*[{NetworkManager}]
        ├─accounts-daemon───2*[{accounts-daemon}]
        ├─bash───pstree
        ├─cron
        ├─sshd───sshd───sshd───bash
        └─systemd-journal

# Process 1 (init/systemd) is the parent of all processes
# Every process has a parent except PID 1

# View parent-child relationship
$ ps -ef | head
UID        PID  PPID  C STIME TTY          TIME CMD
root         1     0  0 10:00 ?        00:00:01 /sbin/init
root         2     0  0 10:00 ?        00:00:00 [kthreadd]
...`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Foreground vs Background Processes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Foreground process: Takes control of terminal
$ sleep 100        # Blocks terminal until complete

# Background process: Runs without blocking terminal
$ sleep 100 &      # & puts process in background
[1] 12345          # Job number and PID

# Move running process to background
$ sleep 100        # Start in foreground
^Z                 # Ctrl+Z suspends process
[1]+  Stopped     sleep 100
$ bg               # Resume in background
[1]+ sleep 100 &

# Bring background process to foreground
$ fg %1            # Job number 1 to foreground

# List background jobs
$ jobs
[1]+  Running     sleep 100 &`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Process Information from /proc</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# /proc filesystem contains process information
$ ls /proc
1  2  3  ... (process directories by PID)
cpuinfo  meminfo  version  ...

# View process details
$ cat /proc/1234/status
Name:   bash
State:  S (sleeping)
Pid:    1234
PPid:   1233
Uid:    1000    1000    1000    1000

# Process command line
$ cat /proc/1234/cmdline
/bin/bash

# Process environment
$ cat /proc/1234/environ`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Every process has a unique PID assigned by the kernel</li>
        <li>PID 1 (init/systemd) is the parent of all user processes</li>
        <li>Process states include Running, Sleeping, Stopped, and Zombie</li>
        <li>Use & to run commands in the background</li>
        <li>Ctrl+Z suspends a process, bg/fg move it between background/foreground</li>
        <li>/proc filesystem provides detailed process information</li>
      </ul>
    </div>
  </div>
);

export default UnderstandingProcesses;
