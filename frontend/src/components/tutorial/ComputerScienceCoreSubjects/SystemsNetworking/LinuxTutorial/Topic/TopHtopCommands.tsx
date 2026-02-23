import React from "react";

const TopHtopCommands: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      top and htop Commands
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      top and htop are interactive process viewers that display real-time information
      about system processes, CPU, and memory usage. htop is an enhanced version of
      top with a more user-friendly interface and additional features.
    </p>

    <h2 className="text-3xl font-bold mt-8">top Command</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900 text-sm">
      <pre className="whitespace-pre-wrap text-gray-900">
{`$ top
top - 10:30:00 up 5 days,  2:30,  1 user,  load average: 0.15, 0.10, 0.05
Tasks: 245 total,   1 running, 244 sleeping,   0 stopped,   0 zombie
%Cpu(s):  2.3 us,  1.0 sy,  0.0 ni, 96.5 id,  0.1 wa,  0.0 hi,  0.1 si,  0.0 st
MiB Mem :  15897.0 total,   8543.2 free,   4235.8 used,   3118.0 buff/cache
MiB Swap:   2048.0 total,   2048.0 free,      0.0 used.  11234.5 avail Mem

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 1234 john      20   0  512640  45320  34560 S   5.3   0.3   1:23.45 chrome
 5678 root      20   0  245840  12340   9876 S   2.0   0.1   0:45.67 Xorg
 ...`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Understanding top Header</h3>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Load average:</strong> 1/5/15 minute CPU load (1.0 = 100% of one CPU)</li>
        <li><strong>Tasks:</strong> Total processes and their states</li>
        <li><strong>%Cpu(s):</strong> us=user, sy=system, id=idle, wa=I/O wait</li>
        <li><strong>Memory:</strong> Total, free, used, and buffer/cache</li>
        <li><strong>Swap:</strong> Swap space usage</li>
      </ul>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Interactive top Commands</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Key</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">q</td>
            <td className="p-3 border">Quit top</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">h</td>
            <td className="p-3 border">Help</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">k</td>
            <td className="p-3 border">Kill a process (enter PID)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">r</td>
            <td className="p-3 border">Renice a process (change priority)</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">M</td>
            <td className="p-3 border">Sort by memory usage</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">P</td>
            <td className="p-3 border">Sort by CPU usage</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">N</td>
            <td className="p-3 border">Sort by PID</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">u</td>
            <td className="p-3 border">Filter by user</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">1</td>
            <td className="p-3 border">Toggle individual CPU cores</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">c</td>
            <td className="p-3 border">Show full command path</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">htop Command</h2>
    <p className="leading-relaxed">
      htop is an enhanced interactive process viewer with a colorful interface,
      mouse support, and additional features.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Install htop
$ sudo apt install htop     # Debian/Ubuntu
$ sudo dnf install htop     # Fedora
$ sudo pacman -S htop       # Arch

# Run htop
$ htop`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">htop Advantages over top</h3>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Colorful, visual display with CPU/memory bars</li>
        <li>Mouse support for scrolling and selecting</li>
        <li>Horizontal and vertical scrolling</li>
        <li>Tree view of processes</li>
        <li>Easy process killing without entering PID</li>
        <li>Function key shortcuts (F1-F10)</li>
      </ul>
    </div>

    <h3 className="text-2xl font-semibold mt-6">htop Interactive Commands</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Key</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono text-gray-900">F1</td>
            <td className="p-3 border">Help</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">F2</td>
            <td className="p-3 border">Setup/Configuration</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">F3</td>
            <td className="p-3 border">Search process</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">F4</td>
            <td className="p-3 border">Filter processes</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">F5</td>
            <td className="p-3 border">Tree view</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">F6</td>
            <td className="p-3 border">Sort by column</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">F9</td>
            <td className="p-3 border">Kill selected process</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">F10</td>
            <td className="p-3 border">Quit</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">Space</td>
            <td className="p-3 border">Tag/untag process</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono text-gray-900">U</td>
            <td className="p-3 border">Untag all</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Command Line Options</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# top options
$ top -d 2            # Update every 2 seconds
$ top -u john         # Show only user john's processes
$ top -p 1234,5678    # Monitor specific PIDs
$ top -n 5            # Exit after 5 updates
$ top -b              # Batch mode (for scripting)

# htop options
$ htop -d 10          # Update every 1 second (10 = 10 tenths)
$ htop -u john        # Show only user john's processes
$ htop -p 1234,5678   # Monitor specific PIDs
$ htop -t             # Start in tree view`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>top is installed by default; htop needs to be installed separately</li>
        <li>Both show real-time system and process information</li>
        <li>Load average shows CPU load over 1, 5, and 15 minutes</li>
        <li>Use M to sort by memory, P to sort by CPU in top</li>
        <li>htop has mouse support and a more visual interface</li>
        <li>Press q to quit either command</li>
      </ul>
    </div>
  </div>
);

export default TopHtopCommands;
