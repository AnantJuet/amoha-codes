import React from "react";

const WhatIsLinux: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is Linux?
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Linux is a free and open-source operating system kernel that forms the foundation of various
      operating system distributions. Originally created by Linus Torvalds in 1991, Linux has become
      one of the most widely used operating systems in the world, powering everything from smartphones
      to supercomputers.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      Linux is technically a kernel - the core component of an operating system that manages
      hardware resources and provides essential services. When combined with GNU tools and
      other software, it forms a complete operating system often called GNU/Linux or simply Linux.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Linux System Architecture:

+------------------------------------------+
|           User Applications              |
|  (Firefox, LibreOffice, etc.)           |
+------------------------------------------+
|              Shell                       |
|   (Bash, Zsh, Fish, etc.)               |
+------------------------------------------+
|         System Libraries                 |
|   (glibc, libpthread, etc.)             |
+------------------------------------------+
|            Linux Kernel                  |
|  +------------------------------------+  |
|  | Process   | Memory    | File      |  |
|  | Manager   | Manager   | System    |  |
|  +------------------------------------+  |
|  | Network   | Device    | Security  |  |
|  | Stack     | Drivers   | Modules   |  |
|  +------------------------------------+  |
+------------------------------------------+
|              Hardware                    |
|   (CPU, RAM, Storage, Network, etc.)    |
+------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Characteristics</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Open Source</td>
            <td className="p-3 border">Source code is freely available under GPL license</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Multi-user</td>
            <td className="p-3 border">Multiple users can use the system simultaneously</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Multitasking</td>
            <td className="p-3 border">Can run multiple processes concurrently</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Portable</td>
            <td className="p-3 border">Runs on various hardware architectures</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Secure</td>
            <td className="p-3 border">Strong permission system and security features</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Stable</td>
            <td className="p-3 border">Known for reliability and uptime</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Linux vs Other Operating Systems</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Linux</th>
            <th className="p-3 border">Windows</th>
            <th className="p-3 border">macOS</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Cost</td>
            <td className="p-3 border text-green-600">Free</td>
            <td className="p-3 border">Paid</td>
            <td className="p-3 border">Bundled with Apple hardware</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Source Code</td>
            <td className="p-3 border text-green-600">Open Source</td>
            <td className="p-3 border">Closed Source</td>
            <td className="p-3 border">Partially Open</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Customization</td>
            <td className="p-3 border text-green-600">Highly Customizable</td>
            <td className="p-3 border">Limited</td>
            <td className="p-3 border">Limited</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Server Usage</td>
            <td className="p-3 border text-green-600">Dominant (~96%)</td>
            <td className="p-3 border">Minor</td>
            <td className="p-3 border">Minor</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Where is Linux Used?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Servers:</strong> Web servers, database servers, cloud infrastructure (AWS, Google Cloud, Azure)</li>
      <li><strong>Mobile Devices:</strong> Android is based on the Linux kernel</li>
      <li><strong>Supercomputers:</strong> All top 500 supercomputers run Linux</li>
      <li><strong>Embedded Systems:</strong> Routers, IoT devices, smart TVs</li>
      <li><strong>Desktop Computers:</strong> Personal computers, workstations</li>
      <li><strong>Development:</strong> Software development and DevOps environments</li>
      <li><strong>Containers:</strong> Docker and Kubernetes run on Linux</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Basic Linux Commands</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# View current directory
$ pwd
/home/username

# List files in directory
$ ls -la
total 24
drwxr-xr-x  3 user user 4096 Jan 13 10:00 .
drwxr-xr-x 10 user user 4096 Jan 13 09:00 ..
-rw-r--r--  1 user user  220 Jan 13 10:00 .bashrc
drwxr-xr-x  2 user user 4096 Jan 13 10:00 Documents

# Change directory
$ cd Documents

# Create a new file
$ touch myfile.txt

# View file contents
$ cat myfile.txt

# Get help for a command
$ man ls`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Linux is an open-source operating system kernel created by Linus Torvalds</li>
        <li>It powers most of the world's servers, supercomputers, and Android devices</li>
        <li>Linux is free, secure, stable, and highly customizable</li>
        <li>Multiple distributions (distros) cater to different needs</li>
        <li>Everything in Linux is either a file or a process</li>
        <li>The command line (shell) is a powerful interface for system interaction</li>
      </ul>
    </div>
  </div>
);

export default WhatIsLinux;
