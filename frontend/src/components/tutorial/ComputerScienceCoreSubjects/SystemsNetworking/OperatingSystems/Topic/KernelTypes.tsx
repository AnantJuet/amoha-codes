import React from 'react';

const KernelTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Microkernel vs Monolithic Kernel
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The kernel architecture significantly impacts the performance, security, and maintainability of an
      operating system. The two primary kernel architectures are monolithic kernels and microkernels,
      each with distinct design philosophies and trade-offs.
    </p>

    {/* Monolithic Kernel */}
    <h2 className="text-3xl font-bold mt-8">Monolithic Kernel</h2>
    <p className="leading-relaxed">
      In a monolithic kernel, all operating system services run in kernel space as a single large process.
      The entire OS works in kernel mode, providing high performance but lower modularity.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Characteristics:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>All OS services run in a single address space</li>
      <li>Direct function calls between components (no message passing)</li>
      <li>Entire kernel compiled as a single binary</li>
      <li>Components have unrestricted access to system resources</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Components in Kernel Space:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Process scheduler</li>
      <li>Memory manager</li>
      <li>File systems</li>
      <li>Device drivers</li>
      <li>Network protocols</li>
      <li>System call interface</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Advantages:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>High Performance:</strong> Direct function calls, no IPC overhead</li>
      <li><strong>Efficient:</strong> No context switching between kernel components</li>
      <li><strong>Simple Communication:</strong> Components communicate directly</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Larger Size:</strong> All services compiled together increase kernel size</li>
      <li><strong>Less Stable:</strong> Bug in any component can crash entire system</li>
      <li><strong>Difficult to Maintain:</strong> Complex codebase with tight coupling</li>
      <li><strong>Security Risks:</strong> All code runs with full privileges</li>
    </ul>

    <p className="leading-relaxed mt-3">
      <strong>Examples:</strong> Linux, BSD, traditional UNIX, MS-DOS
    </p>

    {/* Microkernel */}
    <h2 className="text-3xl font-bold mt-8">Microkernel</h2>
    <p className="leading-relaxed">
      A microkernel runs only the most essential services in kernel space, moving other services to
      user space. This approach prioritizes modularity and reliability over raw performance.
    </p>

    <h3 className="text-2xl font-semibold mt-4">Characteristics:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Minimal functionality in kernel space</li>
      <li>Most services run as user-space processes</li>
      <li>Communication via message passing (IPC)</li>
      <li>Highly modular design</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Components in Kernel Space:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Basic process scheduling</li>
      <li>Basic memory management (address spaces)</li>
      <li>Inter-process communication (IPC)</li>
      <li>Low-level hardware abstraction</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Components in User Space:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>File systems</li>
      <li>Device drivers</li>
      <li>Network protocols</li>
      <li>Application servers</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Advantages:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>More Stable:</strong> Crash in one service doesn't affect others</li>
      <li><strong>More Secure:</strong> Minimal code runs in privileged mode</li>
      <li><strong>Easier to Extend:</strong> New services added without kernel modification</li>
      <li><strong>More Portable:</strong> Hardware-specific code limited to small kernel</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-4">Disadvantages:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li><strong>Lower Performance:</strong> IPC overhead for service communication</li>
      <li><strong>Complex:</strong> Message passing more complex than direct calls</li>
      <li><strong>More Context Switches:</strong> Frequent mode transitions</li>
    </ul>

    <p className="leading-relaxed mt-3">
      <strong>Examples:</strong> Mach, MINIX, QNX, L4, seL4
    </p>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Monolithic Kernel</th>
            <th className="p-3 border">Microkernel</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Size</td>
            <td className="p-3 border">Large</td>
            <td className="p-3 border">Small</td>
          </tr>
          <tr>
            <td className="p-3 border">Performance</td>
            <td className="p-3 border">Higher</td>
            <td className="p-3 border">Lower (IPC overhead)</td>
          </tr>
          <tr>
            <td className="p-3 border">Reliability</td>
            <td className="p-3 border">Less reliable</td>
            <td className="p-3 border">More reliable</td>
          </tr>
          <tr>
            <td className="p-3 border">Security</td>
            <td className="p-3 border">Lower</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border">Extensibility</td>
            <td className="p-3 border">Harder to extend</td>
            <td className="p-3 border">Easier to extend</td>
          </tr>
          <tr>
            <td className="p-3 border">Communication</td>
            <td className="p-3 border">Direct function calls</td>
            <td className="p-3 border">Message passing</td>
          </tr>
          <tr>
            <td className="p-3 border">Crash Impact</td>
            <td className="p-3 border">System crash</td>
            <td className="p-3 border">Service restart</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Hybrid Kernel */}
    <h2 className="text-3xl font-bold mt-8">Hybrid Kernel</h2>
    <p className="leading-relaxed">
      Modern operating systems often use a hybrid approach, combining elements of both architectures.
      Critical performance services run in kernel space while maintaining some modularity.
    </p>
    <p className="leading-relaxed mt-2">
      <strong>Examples:</strong> Windows NT, macOS (XNU), BeOS
    </p>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Choice of kernel architecture involves trade-offs between performance and reliability</li>
      <li>Modern systems often use hybrid approaches</li>
      <li>Linux uses modular monolithic design with loadable kernel modules</li>
      <li>Microkernels are preferred for embedded and real-time systems</li>
    </ul>
  </div>
);

export default KernelTypes;
