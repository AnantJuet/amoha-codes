import React from "react";

const PathTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Absolute vs Relative Paths
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      In Linux, paths specify the location of files and directories in the filesystem.
      Understanding the difference between absolute and relative paths is crucial for
      navigating the filesystem and writing scripts.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Paths</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Path Type</th>
            <th className="p-3 border">Starts With</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Absolute Path</td>
            <td className="p-3 border font-mono text-gray-900">/</td>
            <td className="p-3 border">Full path from root directory</td>
            <td className="p-3 border font-mono text-gray-900">/home/user/documents</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Relative Path</td>
            <td className="p-3 border font-mono text-gray-900">. or ..</td>
            <td className="p-3 border">Path from current directory</td>
            <td className="p-3 border font-mono text-gray-900">./documents or ../user</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Absolute Paths</h2>
    <p className="leading-relaxed">
      An absolute path always starts from the root directory (/) and provides the complete
      location of a file or directory regardless of your current position in the filesystem.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Absolute path examples
/home/user/documents/file.txt
/etc/passwd
/var/log/syslog
/usr/bin/python3

# Using absolute paths
$ cat /etc/passwd          # Always works from anywhere
$ cd /home/user/projects   # Navigate to specific location
$ ls /var/log              # List directory contents

# Advantages of absolute paths:
# - Always unambiguous
# - Works from any location
# - Best for scripts and configuration`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Relative Paths</h2>
    <p className="leading-relaxed">
      A relative path is defined in relation to your current working directory.
      It uses special symbols to navigate the directory structure.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Path Symbols</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Meaning</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">.</td>
            <td className="p-3 border">Current directory</td>
            <td className="p-3 border font-mono text-gray-900">./script.sh</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">..</td>
            <td className="p-3 border">Parent directory</td>
            <td className="p-3 border font-mono text-gray-900">../file.txt</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">~</td>
            <td className="p-3 border">Home directory</td>
            <td className="p-3 border font-mono text-gray-900">~/documents</td>
          </tr>
          <tr>
            <td className="p-3 border font-mono font-semibold text-gray-900">-</td>
            <td className="p-3 border">Previous directory (cd only)</td>
            <td className="p-3 border font-mono text-gray-900">cd -</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Relative path examples
# Assume current directory is /home/user

$ pwd
/home/user

$ ls documents          # Same as ./documents
file1.txt  file2.txt

$ cd documents
$ pwd
/home/user/documents

$ cd ..                 # Go to parent (/home/user)
$ pwd
/home/user

$ cd ../..              # Go up two levels (/home)
$ pwd
/home

# Using ~ for home directory
$ cd ~/projects         # /home/user/projects
$ cd ~/.config          # /home/user/.config`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Visual Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Directory Structure:
/
├── home
│   └── user
│       ├── documents
│       │   └── report.txt
│       └── projects
│           └── code.py
└── etc
    └── passwd

Current directory: /home/user/documents

To access report.txt:
  Absolute: /home/user/documents/report.txt
  Relative: ./report.txt  or  report.txt

To access code.py:
  Absolute: /home/user/projects/code.py
  Relative: ../projects/code.py

To access /etc/passwd:
  Absolute: /etc/passwd
  Relative: ../../../etc/passwd`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">When to Use Each Type</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">Recommended</th>
            <th className="p-3 border">Reason</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Shell scripts</td>
            <td className="p-3 border text-green-600 font-semibold">Absolute</td>
            <td className="p-3 border">Scripts may run from different locations</td>
          </tr>
          <tr>
            <td className="p-3 border">Configuration files</td>
            <td className="p-3 border text-green-600 font-semibold">Absolute</td>
            <td className="p-3 border">Ensures consistent behavior</td>
          </tr>
          <tr>
            <td className="p-3 border">Interactive navigation</td>
            <td className="p-3 border text-green-600 font-semibold">Relative</td>
            <td className="p-3 border">Faster to type, contextual</td>
          </tr>
          <tr>
            <td className="p-3 border">Project files</td>
            <td className="p-3 border text-green-600 font-semibold">Relative</td>
            <td className="p-3 border">Portable across systems</td>
          </tr>
          <tr>
            <td className="p-3 border">System commands</td>
            <td className="p-3 border text-green-600 font-semibold">Absolute</td>
            <td className="p-3 border">Security - prevents PATH manipulation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Get absolute path of current directory
$ pwd
/home/user/documents

# Get absolute path of a file
$ realpath ./file.txt
/home/user/documents/file.txt

# Get absolute path with readlink
$ readlink -f ./file.txt
/home/user/documents/file.txt

# Convert relative to absolute in script
#!/bin/bash
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
echo "Script directory: $SCRIPT_DIR"`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Absolute paths start with / and specify the complete location from root</li>
        <li>Relative paths are based on the current working directory</li>
        <li>Use . for current directory, .. for parent directory</li>
        <li>~ represents the home directory of the current user</li>
        <li>Use absolute paths in scripts and configuration for reliability</li>
        <li>Use relative paths for quick navigation and portable projects</li>
      </ul>
    </div>
  </div>
);

export default PathTypes;
