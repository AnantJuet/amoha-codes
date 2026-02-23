import React from 'react';

const SystemCallTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of System Calls
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      System calls are categorized based on the type of service they provide. Each category handles
      specific operations related to process management, file operations, device handling, information
      retrieval, and inter-process communication.
    </p>

    {/* Process Control */}
    <h2 className="text-3xl font-bold mt-8">1. Process Control System Calls</h2>
    <p className="leading-relaxed">
      These system calls handle the creation, termination, and management of processes.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System Call</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border"><code>fork()</code></td>
            <td className="p-3 border">Creates a new child process by duplicating the calling process</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>exec()</code></td>
            <td className="p-3 border">Replaces current process image with a new program</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>exit()</code></td>
            <td className="p-3 border">Terminates the calling process and returns status</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>wait()</code></td>
            <td className="p-3 border">Suspends parent until child process terminates</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>getpid()</code></td>
            <td className="p-3 border">Returns the process ID of the calling process</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>kill()</code></td>
            <td className="p-3 border">Sends a signal to a process or group of processes</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* File Management */}
    <h2 className="text-3xl font-bold mt-8">2. File Management System Calls</h2>
    <p className="leading-relaxed">
      These calls handle file operations including creating, opening, reading, writing, and closing files.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System Call</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border"><code>open()</code></td>
            <td className="p-3 border">Opens a file and returns a file descriptor</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>read()</code></td>
            <td className="p-3 border">Reads data from an open file into a buffer</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>write()</code></td>
            <td className="p-3 border">Writes data from a buffer to an open file</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>close()</code></td>
            <td className="p-3 border">Closes an open file descriptor</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>lseek()</code></td>
            <td className="p-3 border">Repositions the file offset of an open file</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>stat()</code></td>
            <td className="p-3 border">Gets file status and metadata</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>unlink()</code></td>
            <td className="p-3 border">Deletes a file from the file system</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Device Management */}
    <h2 className="text-3xl font-bold mt-8">3. Device Management System Calls</h2>
    <p className="leading-relaxed">
      These calls manage hardware devices and allow programs to interact with peripheral devices.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System Call</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border"><code>ioctl()</code></td>
            <td className="p-3 border">Performs device-specific control operations</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>read()</code></td>
            <td className="p-3 border">Reads data from a device</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>write()</code></td>
            <td className="p-3 border">Writes data to a device</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>mmap()</code></td>
            <td className="p-3 border">Maps device memory into process address space</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Information Maintenance */}
    <h2 className="text-3xl font-bold mt-8">4. Information Maintenance System Calls</h2>
    <p className="leading-relaxed">
      These calls transfer information between user programs and the operating system.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System Call</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border"><code>time()</code></td>
            <td className="p-3 border">Returns the current system time</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>gettimeofday()</code></td>
            <td className="p-3 border">Gets current time with microsecond precision</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>uname()</code></td>
            <td className="p-3 border">Returns system information (OS name, version)</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>getuid()</code></td>
            <td className="p-3 border">Returns the user ID of the calling process</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>alarm()</code></td>
            <td className="p-3 border">Sets an alarm clock for signal delivery</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Communication */}
    <h2 className="text-3xl font-bold mt-8">5. Communication System Calls</h2>
    <p className="leading-relaxed">
      These calls enable communication between processes, either on the same machine or across networks.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System Call</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border"><code>pipe()</code></td>
            <td className="p-3 border">Creates a unidirectional data channel</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>shmget()</code></td>
            <td className="p-3 border">Allocates a shared memory segment</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>shmat()</code></td>
            <td className="p-3 border">Attaches shared memory to process address space</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>socket()</code></td>
            <td className="p-3 border">Creates a network communication endpoint</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>send()/recv()</code></td>
            <td className="p-3 border">Sends/receives messages on a socket</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>msgget()</code></td>
            <td className="p-3 border">Creates a message queue</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Protection */}
    <h2 className="text-3xl font-bold mt-8">6. Protection System Calls</h2>
    <p className="leading-relaxed">
      These calls provide mechanisms for controlling access to system resources.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System Call</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border"><code>chmod()</code></td>
            <td className="p-3 border">Changes file access permissions</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>chown()</code></td>
            <td className="p-3 border">Changes file ownership</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>setuid()</code></td>
            <td className="p-3 border">Sets user identity of the process</td>
          </tr>
          <tr>
            <td className="p-3 border"><code>umask()</code></td>
            <td className="p-3 border">Sets file mode creation mask</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>System calls provide the fundamental interface between applications and the kernel</li>
      <li>Each operating system has its own set of system calls</li>
      <li>POSIX standards define common system call interfaces for Unix-like systems</li>
      <li>Windows uses different APIs (Win32) for similar functionality</li>
      <li>System calls involve context switching between user and kernel modes</li>
    </ul>
  </div>
);

export default SystemCallTypes;
