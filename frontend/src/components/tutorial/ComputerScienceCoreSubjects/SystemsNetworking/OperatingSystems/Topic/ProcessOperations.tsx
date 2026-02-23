import React from 'react';

const ProcessOperations: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Process Operations
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Operating systems perform various operations on processes throughout their lifecycle.
      These operations include creating new processes, terminating existing ones, and managing
      their execution. Understanding these operations is essential for comprehending how the
      OS manages program execution.
    </p>

    {/* Process Creation */}
    <h2 className="text-3xl font-bold mt-8">Process Creation</h2>
    <p className="leading-relaxed">
      A new process is created when an existing process makes a system call to spawn it.
      The creating process is called the parent process, and the newly created process is
      called the child process. This creates a hierarchical tree structure of processes.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Steps in Process Creation</h3>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Assign Process ID:</strong> The OS assigns a unique process identifier (PID)
        to the new process.
      </li>
      <li>
        <strong>Allocate Memory:</strong> Memory is allocated for the process's code, data,
        stack, and heap segments.
      </li>
      <li>
        <strong>Create PCB:</strong> A Process Control Block is initialized with default values
        and placed in the appropriate queue.
      </li>
      <li>
        <strong>Set Up Resources:</strong> Initial resources like file descriptors and I/O
        devices are configured.
      </li>
      <li>
        <strong>Copy Parent Context:</strong> Depending on the creation method, some or all
        of the parent's context may be copied.
      </li>
    </ul>

    {/* fork() System Call */}
    <h2 className="text-3xl font-bold mt-8">The fork() System Call</h2>
    <p className="leading-relaxed">
      In Unix-like systems, the fork() system call creates a new process by duplicating the
      calling process. The new process is an exact copy of the parent except for its PID.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Characteristics of fork()</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Creates an exact duplicate of the parent process</li>
      <li>Child receives a copy of parent's address space</li>
      <li>Both processes continue execution after the fork() call</li>
      <li>Returns 0 to child process, child's PID to parent</li>
      <li>Uses Copy-on-Write (COW) for efficiency in modern systems</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Example of fork() in C
#include <unistd.h>
#include <stdio.h>

int main() {
    pid_t pid = fork();

    if (pid < 0) {
        // Fork failed
        printf("Fork failed\\n");
    } else if (pid == 0) {
        // Child process
        printf("Child process: PID = %d\\n", getpid());
    } else {
        // Parent process
        printf("Parent process: Child PID = %d\\n", pid);
    }
    return 0;
}`}
      </pre>
    </div>

    {/* exec() System Call */}
    <h2 className="text-3xl font-bold mt-8">The exec() Family</h2>
    <p className="leading-relaxed">
      The exec() family of system calls replaces the current process's memory image with
      a new program. After exec(), the process runs a completely different program.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">execl()</td>
            <td className="p-3 border">Takes arguments as list</td>
          </tr>
          <tr>
            <td className="p-3 border">execv()</td>
            <td className="p-3 border">Takes arguments as vector (array)</td>
          </tr>
          <tr>
            <td className="p-3 border">execle()</td>
            <td className="p-3 border">List with environment</td>
          </tr>
          <tr>
            <td className="p-3 border">execve()</td>
            <td className="p-3 border">Vector with environment</td>
          </tr>
          <tr>
            <td className="p-3 border">execlp()</td>
            <td className="p-3 border">List with PATH search</td>
          </tr>
          <tr>
            <td className="p-3 border">execvp()</td>
            <td className="p-3 border">Vector with PATH search</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Process Termination */}
    <h2 className="text-3xl font-bold mt-8">Process Termination</h2>
    <p className="leading-relaxed">
      A process terminates when it finishes executing its final statement or is explicitly
      killed. The OS reclaims all resources allocated to the terminated process.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Types of Termination</h3>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Normal Termination:</strong> Process completes execution and calls exit()
        with a status code indicating success or failure.
      </li>
      <li>
        <strong>Abnormal Termination:</strong> Process is terminated due to errors, exceptions,
        or signals from other processes or the OS.
      </li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Reasons for Termination</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Normal exit (voluntary)</li>
      <li>Error exit (voluntary)</li>
      <li>Fatal error (involuntary) - e.g., division by zero, invalid memory access</li>
      <li>Killed by another process (involuntary)</li>
      <li>Parent process termination (cascade termination)</li>
      <li>Resource limits exceeded</li>
    </ul>

    {/* wait() System Call */}
    <h2 className="text-3xl font-bold mt-8">The wait() System Call</h2>
    <p className="leading-relaxed">
      A parent process can wait for its child processes to complete using the wait() system
      call. This allows the parent to synchronize with its children and retrieve their exit
      status.
    </p>

    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>wait():</strong> Blocks until any child terminates</li>
      <li><strong>waitpid():</strong> Waits for a specific child process</li>
      <li><strong>waitid():</strong> More flexible waiting with options</li>
    </ul>

    {/* Zombie and Orphan Processes */}
    <h2 className="text-3xl font-bold mt-8">Zombie and Orphan Processes</h2>

    <h3 className="text-2xl font-semibold mt-4">Zombie Process</h3>
    <p className="leading-relaxed">
      A zombie process is a process that has completed execution but still has an entry
      in the process table because its parent has not yet called wait() to read its exit
      status.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Process has terminated but PCB still exists</li>
      <li>Takes minimal resources (just PCB entry)</li>
      <li>Removed when parent calls wait()</li>
      <li>Too many zombies can exhaust process table</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Orphan Process</h3>
    <p className="leading-relaxed">
      An orphan process is a process whose parent has terminated before it. In Unix-like
      systems, orphan processes are adopted by the init process (PID 1).
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Parent terminated before child</li>
      <li>Adopted by init process (or systemd)</li>
      <li>Init process will call wait() when orphan terminates</li>
      <li>Not harmful to the system</li>
    </ul>

    {/* Process Hierarchy */}
    <h2 className="text-3xl font-bold mt-8">Process Hierarchy</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
Process Tree Structure:

        init (PID 1)
        /    |    \\
      /      |      \\
   shell   daemon   service
    /\\        |
   /  \\       |
 app1  app2  worker
`}
      </pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison: fork() vs exec()</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">fork()</th>
            <th className="p-3 border">exec()</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">New Process</td>
            <td className="p-3 border">Creates new process</td>
            <td className="p-3 border">Does not create new process</td>
          </tr>
          <tr>
            <td className="p-3 border">PID</td>
            <td className="p-3 border">New PID assigned</td>
            <td className="p-3 border">Same PID retained</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">Copies parent's memory</td>
            <td className="p-3 border">Replaces memory image</td>
          </tr>
          <tr>
            <td className="p-3 border">Return</td>
            <td className="p-3 border">Returns twice (parent and child)</td>
            <td className="p-3 border">Never returns on success</td>
          </tr>
          <tr>
            <td className="p-3 border">Program</td>
            <td className="p-3 border">Same program runs</td>
            <td className="p-3 border">Different program runs</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>fork() creates a duplicate of the calling process</li>
      <li>exec() replaces process memory with a new program</li>
      <li>Process termination triggers resource deallocation by the OS</li>
      <li>wait() allows parent to synchronize with child completion</li>
      <li>Zombie processes occur when parent does not call wait()</li>
      <li>Orphan processes are adopted by the init process</li>
      <li>fork() and exec() are often used together to run new programs</li>
    </ul>
  </div>
);

export default ProcessOperations;
