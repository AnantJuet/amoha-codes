import React from "react";

const SystemMonitoring: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      System Monitoring
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      System monitoring involves tracking CPU, memory, disk, and network usage
      to ensure optimal performance and identify issues early.
    </p>

    <h2 className="text-3xl font-bold mt-8">CPU and Memory</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Real-time process monitoring
$ top
$ htop

# Memory usage
$ free -h

# CPU info
$ lscpu
$ cat /proc/cpuinfo

# Memory info
$ cat /proc/meminfo

# System uptime and load
$ uptime

# vmstat (virtual memory stats)
$ vmstat 1 5    # 5 updates, 1 second interval`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Disk I/O</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Disk I/O statistics
$ iostat

# Continuous monitoring
$ iostat -x 1

# Disk usage
$ df -h

# Inode usage
$ df -i

# iotop (requires root)
$ sudo iotop`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Network Monitoring</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Network interface stats
$ ip -s link

# Network connections
$ ss -tuln

# iftop (bandwidth monitor)
$ sudo iftop

# nload (network load)
$ nload

# nethogs (per-process bandwidth)
$ sudo nethogs`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">System Information</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# System info
$ uname -a

# Distribution info
$ cat /etc/os-release
$ lsb_release -a

# Hardware info
$ lshw -short
$ lspci
$ lsusb

# Logged in users
$ who
$ w

# Last logins
$ last`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Monitoring Tools</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Tool</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">top/htop</td>
            <td className="p-3 border">Process and CPU monitoring</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">free</td>
            <td className="p-3 border">Memory usage</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">df/du</td>
            <td className="p-3 border">Disk usage</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">iostat</td>
            <td className="p-3 border">Disk I/O statistics</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">vmstat</td>
            <td className="p-3 border">Virtual memory statistics</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">sar</td>
            <td className="p-3 border">System activity reporter</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>htop is more user-friendly than top</li>
        <li>free -h shows human-readable memory usage</li>
        <li>iostat monitors disk performance</li>
        <li>Monitor regularly to detect issues early</li>
      </ul>
    </div>
  </div>
);

export default SystemMonitoring;
