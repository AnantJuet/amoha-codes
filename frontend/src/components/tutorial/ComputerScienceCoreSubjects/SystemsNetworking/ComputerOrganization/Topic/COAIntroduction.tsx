import React from 'react';

const COAIntroduction: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      What is Computer Organization?
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Computer Organization refers to the operational units and their interconnections that realize
      the architectural specifications of a computer system. It describes how different hardware
      components like the CPU, memory, and I/O devices are connected and work together to execute
      programs and process data.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      Computer Organization deals with the physical aspects of computer systems, including the
      hardware components and their design. It encompasses the study of how the components of a
      computer system are designed, interconnected, and operated to achieve the desired functionality.
      This includes understanding the data flow, control signals, and timing relationships between
      different parts of the computer.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Computer System Components:

+------------------+     +------------------+     +------------------+
|       CPU        |     |      Memory      |     |    I/O Devices   |
|  +------------+  |     |  +------------+  |     |  +------------+  |
|  |   Control  |  |     |  |    RAM     |  |     |  |  Keyboard  |  |
|  |    Unit    |  |     |  +------------+  |     |  +------------+  |
|  +------------+  |     |  +------------+  |     |  +------------+  |
|  +------------+  |     |  |    ROM     |  |     |  |   Monitor  |  |
|  |    ALU     |  |     |  +------------+  |     |  +------------+  |
|  +------------+  |     |  +------------+  |     |  +------------+  |
|  +------------+  |     |  |   Cache    |  |     |  |   Printer  |  |
|  | Registers  |  |     |  +------------+  |     |  +------------+  |
|  +------------+  |     +------------------+     +------------------+
+------------------+
         |                        |                        |
         +------------------------+------------------------+
                              System Bus`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Aspects of Computer Organization</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Hardware Design:</strong> The physical implementation of the computer's components,
        including circuits, chips, and boards.
      </li>
      <li>
        <strong>Control Signals:</strong> The signals that coordinate the operation of different
        components within the system.
      </li>
      <li>
        <strong>Peripheral Interfaces:</strong> How input/output devices connect and communicate
        with the main system.
      </li>
      <li>
        <strong>Memory Technology:</strong> The types of memory used and their physical organization.
      </li>
      <li>
        <strong>Operational Speed:</strong> The timing and performance characteristics of the hardware.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Components of Computer Organization</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Examples</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Central Processing Unit</td>
            <td className="p-3 border">Executes instructions and processes data</td>
            <td className="p-3 border">Intel Core, AMD Ryzen</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory Unit</td>
            <td className="p-3 border">Stores programs and data</td>
            <td className="p-3 border">RAM, ROM, Cache</td>
          </tr>
          <tr>
            <td className="p-3 border">Input Unit</td>
            <td className="p-3 border">Accepts data from external sources</td>
            <td className="p-3 border">Keyboard, Mouse, Scanner</td>
          </tr>
          <tr>
            <td className="p-3 border">Output Unit</td>
            <td className="p-3 border">Presents results to users</td>
            <td className="p-3 border">Monitor, Printer, Speaker</td>
          </tr>
          <tr>
            <td className="p-3 border">Storage Unit</td>
            <td className="p-3 border">Permanent data storage</td>
            <td className="p-3 border">HDD, SSD, USB Drive</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Importance of Computer Organization</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>System Understanding:</strong> Provides knowledge of how software interacts with
        hardware at the lowest level.
      </li>
      <li>
        <strong>Performance Analysis:</strong> Helps in understanding bottlenecks and optimizing
        system performance.
      </li>
      <li>
        <strong>Hardware Selection:</strong> Enables informed decisions when choosing components
        for specific applications.
      </li>
      <li>
        <strong>Troubleshooting:</strong> Facilitates diagnosing and fixing hardware-related issues.
      </li>
      <li>
        <strong>System Design:</strong> Essential for designing new computer systems or modifying
        existing ones.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Computer Organization focuses on the physical implementation of computer systems</li>
        <li>It describes how hardware components are interconnected and operate</li>
        <li>Understanding organization helps in writing efficient software</li>
        <li>It bridges the gap between software requirements and hardware capabilities</li>
        <li>Modern computers have evolved significantly but basic organizational principles remain</li>
      </ul>
    </div>
  </div>
);

export default COAIntroduction;
