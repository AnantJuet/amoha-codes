import React from 'react';

const OSStructure: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Operating System Structure
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Operating system structure refers to the way an OS is organized internally. Different structures
      offer different trade-offs between simplicity, performance, modularity, and maintainability.
      Understanding these structures is crucial for OS design and development.
    </p>

    {/* Simple Structure */}
    <h2 className="text-3xl font-bold mt-8">1. Simple (Monolithic) Structure</h2>
    <p className="leading-relaxed">
      In this structure, the entire operating system runs as a single program in kernel mode. All components
      have direct access to hardware and each other, with no clear separation between modules.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>All OS services run in a single address space</li>
      <li>No clear distinction between different OS components</li>
      <li>Fast due to direct function calls</li>
      <li>Difficult to maintain and debug</li>
      <li>A bug in any part can crash the entire system</li>
    </ul>
    <p className="leading-relaxed mt-3">
      <strong>Example:</strong> MS-DOS, early UNIX versions
    </p>

    {/* Layered Structure */}
    <h2 className="text-3xl font-bold mt-8">2. Layered Structure</h2>
    <p className="leading-relaxed">
      The operating system is divided into several layers (levels), each built on top of lower layers.
      Each layer uses functions and services of only lower-level layers.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>Layer 0:</strong> Hardware</li>
      <li><strong>Layer 1:</strong> CPU scheduling</li>
      <li><strong>Layer 2:</strong> Memory management</li>
      <li><strong>Layer 3:</strong> Device drivers</li>
      <li><strong>Layer 4:</strong> User programs</li>
      <li><strong>Layer N:</strong> User interface</li>
    </ul>
    <h3 className="text-2xl font-semibold mt-4">Advantages:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Modularity makes debugging and verification easier</li>
      <li>Each layer can be tested independently</li>
      <li>Changes in one layer don't affect others</li>
    </ul>
    <h3 className="text-2xl font-semibold mt-4">Disadvantages:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Difficult to define clear layer boundaries</li>
      <li>Performance overhead due to layer-to-layer communication</li>
      <li>Functionality must be assigned to appropriate layers</li>
    </ul>
    <p className="leading-relaxed mt-3">
      <strong>Example:</strong> THE operating system, MULTICS
    </p>

    {/* Microkernel Structure */}
    <h2 className="text-3xl font-bold mt-8">3. Microkernel Structure</h2>
    <p className="leading-relaxed">
      The microkernel approach moves as much functionality as possible from the kernel into user space,
      leaving only essential services in the kernel. The kernel provides minimal services: inter-process
      communication, basic scheduling, and low-level address space management.
    </p>
    <h3 className="text-2xl font-semibold mt-4">Services in Microkernel:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Inter-process communication (IPC)</li>
      <li>Basic memory management</li>
      <li>Basic CPU scheduling</li>
      <li>Low-level I/O operations</li>
    </ul>
    <h3 className="text-2xl font-semibold mt-4">Services in User Space:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>File systems</li>
      <li>Device drivers</li>
      <li>Network protocols</li>
      <li>User authentication</li>
    </ul>
    <h3 className="text-2xl font-semibold mt-4">Advantages:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>More reliable - services run in user space, isolated from kernel</li>
      <li>Easier to extend the operating system</li>
      <li>More secure - minimal code runs in privileged mode</li>
      <li>Better portability across different hardware</li>
    </ul>
    <h3 className="text-2xl font-semibold mt-4">Disadvantages:</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Performance overhead due to message passing</li>
      <li>More complex communication between components</li>
    </ul>
    <p className="leading-relaxed mt-3">
      <strong>Examples:</strong> Mach, QNX, MINIX, L4
    </p>

    {/* Modular Structure */}
    <h2 className="text-3xl font-bold mt-8">4. Modular (Loadable Kernel Modules) Structure</h2>
    <p className="leading-relaxed">
      Modern operating systems use a modular approach where the kernel has a set of core components
      and dynamically loads additional services via modules. This combines benefits of layered and
      microkernel approaches.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Core kernel provides essential services</li>
      <li>Additional modules loaded dynamically at boot or runtime</li>
      <li>Modules can communicate directly (unlike microkernel)</li>
      <li>New functionality added without recompiling kernel</li>
    </ul>
    <p className="leading-relaxed mt-3">
      <strong>Examples:</strong> Linux, Solaris, macOS
    </p>

    {/* Hybrid Structure */}
    <h2 className="text-3xl font-bold mt-8">5. Hybrid Structure</h2>
    <p className="leading-relaxed">
      Most modern operating systems use a hybrid approach, combining elements from different structures
      to achieve a balance between performance, modularity, and reliability.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Combines microkernel flexibility with monolithic performance</li>
      <li>Critical services run in kernel for performance</li>
      <li>Other services can be in kernel or user space based on need</li>
      <li>Modular design allows customization</li>
    </ul>
    <p className="leading-relaxed mt-3">
      <strong>Examples:</strong> Windows NT, macOS (XNU kernel)
    </p>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison of OS Structures</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Structure</th>
            <th className="p-3 border">Performance</th>
            <th className="p-3 border">Modularity</th>
            <th className="p-3 border">Reliability</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Monolithic</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Low</td>
          </tr>
          <tr>
            <td className="p-3 border">Layered</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border">Microkernel</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border">Modular</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border">Hybrid</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Medium</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default OSStructure;
