import React from 'react';

const Kernel: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Kernel in Operating System
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The kernel is the core component of an operating system that has complete control over everything
      in the system. It acts as a bridge between applications and the data processing done at the
      hardware level, managing the system's resources and facilitating interactions between hardware
      and software components.
    </p>

    {/* Definition */}
    <h2 className="text-3xl font-bold mt-8">What is a Kernel?</h2>
    <p className="leading-relaxed">
      The kernel is the central module of an operating system. It is the first program loaded after the
      bootloader and remains in memory throughout the system operation. Being at the lowest level of the
      OS, it provides the most fundamental services to other parts of the operating system and applications.
    </p>

    {/* Responsibilities */}
    <h2 className="text-3xl font-bold mt-8">Kernel Responsibilities</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Process Management:</strong> Creating, scheduling, and terminating processes; managing
        process states and context switching.
      </li>
      <li>
        <strong>Memory Management:</strong> Allocating and deallocating memory, implementing virtual
        memory, and managing the memory hierarchy.
      </li>
      <li>
        <strong>Device Management:</strong> Managing device drivers and facilitating communication
        between hardware devices and software.
      </li>
      <li>
        <strong>System Call Handling:</strong> Processing requests from user applications for
        kernel services.
      </li>
      <li>
        <strong>Interrupt Handling:</strong> Responding to hardware and software interrupts and
        dispatching them to appropriate handlers.
      </li>
      <li>
        <strong>Inter-Process Communication:</strong> Providing mechanisms for processes to
        communicate and synchronize.
      </li>
      <li>
        <strong>File System Management:</strong> Managing file operations and maintaining file
        system structures.
      </li>
    </ul>

    {/* Kernel Modes */}
    <h2 className="text-3xl font-bold mt-8">Kernel Mode vs User Mode</h2>
    <p className="leading-relaxed">
      Modern processors support at least two modes of operation, typically indicated by a mode bit:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Kernel Mode</th>
            <th className="p-3 border">User Mode</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Mode Bit</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">Also Called</td>
            <td className="p-3 border">Supervisor/Privileged Mode</td>
            <td className="p-3 border">Unprivileged Mode</td>
          </tr>
          <tr>
            <td className="p-3 border">Hardware Access</td>
            <td className="p-3 border">Direct and complete</td>
            <td className="p-3 border">Through system calls only</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Access</td>
            <td className="p-3 border">All memory areas</td>
            <td className="p-3 border">Restricted to allocated space</td>
          </tr>
          <tr>
            <td className="p-3 border">Instructions</td>
            <td className="p-3 border">All CPU instructions</td>
            <td className="p-3 border">Subset (non-privileged)</td>
          </tr>
          <tr>
            <td className="p-3 border">Crashes</td>
            <td className="p-3 border">Can crash entire system</td>
            <td className="p-3 border">Only affects the process</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Kernel Components */}
    <h2 className="text-3xl font-bold mt-8">Kernel Components</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Scheduler:</strong> Determines which process runs on the CPU and for how long,
        implementing scheduling algorithms like round-robin, priority scheduling, etc.
      </li>
      <li>
        <strong>Memory Manager:</strong> Handles memory allocation, paging, segmentation, and
        virtual memory management.
      </li>
      <li>
        <strong>Virtual File System (VFS):</strong> Provides a unified interface to various
        file systems, abstracting file system differences.
      </li>
      <li>
        <strong>Network Stack:</strong> Implements network protocols and manages network
        communications.
      </li>
      <li>
        <strong>Device Drivers:</strong> Interface between the kernel and hardware devices,
        translating OS commands to device-specific operations.
      </li>
      <li>
        <strong>System Call Interface:</strong> Provides the mechanism for user programs to
        request kernel services.
      </li>
    </ul>

    {/* Mode Transition */}
    <h2 className="text-3xl font-bold mt-8">Mode Transition</h2>
    <p className="leading-relaxed">
      Transitions between user mode and kernel mode occur in these scenarios:
    </p>
    <ul className="list-decimal list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>System Call:</strong> User program requests OS service (user → kernel)</li>
      <li><strong>Interrupt:</strong> Hardware device signals CPU (user → kernel)</li>
      <li><strong>Exception:</strong> Error condition like division by zero (user → kernel)</li>
      <li><strong>Return from System Call:</strong> Service completed (kernel → user)</li>
    </ul>

    {/* Kernel Space */}
    <h2 className="text-3xl font-bold mt-8">Kernel Space vs User Space</h2>
    <p className="leading-relaxed">
      System memory is divided into two distinct regions:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>
        <strong>Kernel Space:</strong> Memory area where kernel code executes and kernel data
        structures reside. Protected from user processes.
      </li>
      <li>
        <strong>User Space:</strong> Memory area where user applications run. Each process has
        its own isolated address space.
      </li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>The kernel is loaded into protected area of memory during boot</li>
      <li>It runs in privileged mode with full hardware access</li>
      <li>Kernel code must be highly reliable as bugs can crash the system</li>
      <li>Context switching between modes has performance overhead</li>
      <li>Different kernel architectures exist: monolithic, microkernel, hybrid</li>
    </ul>
  </div>
);

export default Kernel;
