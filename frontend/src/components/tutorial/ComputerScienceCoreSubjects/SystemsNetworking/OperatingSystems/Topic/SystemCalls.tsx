import React from 'react';

const SystemCalls: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      System Calls
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      System calls provide the interface between a running program and the operating system. They are
      the primary mechanism by which user programs request services from the kernel, such as file
      operations, process control, and hardware access.
    </p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">What are System Calls?</h2>
    <p className="leading-relaxed">
      A system call is a programmatic way in which a computer program requests a service from the
      kernel of the operating system. System calls provide an essential interface between a process
      and the operating system, allowing user-level programs to request services that require
      privileged access.
    </p>

    {/* How System Calls Work */}
    <h2 className="text-3xl font-bold mt-8">How System Calls Work</h2>
    <p className="leading-relaxed">
      When a program makes a system call, the following sequence occurs:
    </p>
    <ol className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li>User program invokes a library function (wrapper function)</li>
      <li>Library function places system call number in a register</li>
      <li>Library function executes a trap instruction (software interrupt)</li>
      <li>CPU switches from user mode to kernel mode</li>
      <li>Kernel examines the system call number and dispatches to appropriate handler</li>
      <li>Kernel handler executes the requested service</li>
      <li>Control returns to user program with results</li>
    </ol>

    {/* Modes of Execution */}
    <h2 className="text-3xl font-bold mt-8">User Mode vs Kernel Mode</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">User Mode</th>
            <th className="p-3 border">Kernel Mode</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Hardware Access</td>
            <td className="p-3 border">No direct access</td>
            <td className="p-3 border">Full access</td>
          </tr>
          <tr>
            <td className="p-3 border">Instructions</td>
            <td className="p-3 border">Limited set</td>
            <td className="p-3 border">All instructions</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Access</td>
            <td className="p-3 border">Own address space only</td>
            <td className="p-3 border">All memory</td>
          </tr>
          <tr>
            <td className="p-3 border">Mode Bit</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Parameters Passing */}
    <h2 className="text-3xl font-bold mt-8">Parameter Passing Methods</h2>
    <p className="leading-relaxed">
      Parameters can be passed to system calls using three methods:
    </p>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Registers:</strong> Parameters are placed directly in CPU registers. Limited by
        number of available registers.
      </li>
      <li>
        <strong>Block/Table:</strong> Parameters stored in a memory block; address of block
        passed in a register. Used when parameters exceed register count.
      </li>
      <li>
        <strong>Stack:</strong> Parameters pushed onto stack by program, popped by OS.
        Flexible and supports variable number of parameters.
      </li>
    </ul>

    {/* Categories */}
    <h2 className="text-3xl font-bold mt-8">Categories of System Calls</h2>

    <h3 className="text-2xl font-semibold mt-4">1. Process Control</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><code>fork()</code> - Create a new process</li>
      <li><code>exec()</code> - Execute a new program</li>
      <li><code>exit()</code> - Terminate process</li>
      <li><code>wait()</code> - Wait for child process</li>
      <li><code>kill()</code> - Send signal to process</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">2. File Management</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><code>open()</code> - Open a file</li>
      <li><code>read()</code> - Read from file</li>
      <li><code>write()</code> - Write to file</li>
      <li><code>close()</code> - Close file</li>
      <li><code>lseek()</code> - Move file pointer</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">3. Device Management</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><code>ioctl()</code> - Device control operations</li>
      <li><code>read()</code> - Read from device</li>
      <li><code>write()</code> - Write to device</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">4. Information Maintenance</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><code>getpid()</code> - Get process ID</li>
      <li><code>time()</code> - Get system time</li>
      <li><code>gettimeofday()</code> - Get current time</li>
      <li><code>uname()</code> - Get system information</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">5. Communication</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><code>pipe()</code> - Create communication pipe</li>
      <li><code>shmget()</code> - Get shared memory</li>
      <li><code>socket()</code> - Create network socket</li>
      <li><code>send()</code> / <code>recv()</code> - Network communication</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">6. Protection</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><code>chmod()</code> - Change file permissions</li>
      <li><code>chown()</code> - Change file ownership</li>
      <li><code>setuid()</code> - Set user ID</li>
    </ul>

    {/* Example */}
    <h2 className="text-3xl font-bold mt-8">System Call Example</h2>
    <p className="leading-relaxed">
      Consider a simple C program that opens and reads a file. This seemingly simple operation
      involves multiple system calls:
    </p>
    <pre className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-3 overflow-x-auto">
{`// Opening and reading a file involves these system calls:
// 1. open() - to open the file
// 2. read() - to read contents
// 3. write() - to display output (to stdout)
// 4. close() - to close the file

// Each of these triggers a mode switch from user to kernel`}
    </pre>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>System calls are the only way for user programs to access kernel services</li>
      <li>Each system call has a unique number used for identification</li>
      <li>System calls involve mode switching which adds overhead</li>
      <li>APIs like POSIX provide standardized system call interfaces</li>
      <li>Library functions often wrap system calls for easier use</li>
    </ul>
  </div>
);

export default SystemCalls;
