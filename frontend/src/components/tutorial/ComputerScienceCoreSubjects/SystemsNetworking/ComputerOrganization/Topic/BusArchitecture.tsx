import React from 'react';

const BusArchitecture: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Bus Architecture Fundamentals
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A bus in computer architecture is a communication system that transfers data between
      components inside a computer or between computers. It consists of a collection of wires
      or electrical conductors that carry signals, forming a shared communication pathway.
      Bus architecture defines how different components of a computer system connect and
      communicate with each other through these standardized pathways.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Computer Bus?</h2>
    <p className="leading-relaxed">
      A computer bus is an electrical pathway that carries data between the processor, memory,
      and peripheral devices. Think of it as a highway system within the computer where
      different components send and receive information. The bus allows multiple devices to
      share a common communication channel, reducing the number of connections needed.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Basic Bus Structure:

+-------+    +--------+    +--------+    +-------------+
|  CPU  |    | Memory |    |  I/O   |    | Peripherals |
+---+---+    +---+----+    +---+----+    +------+------+
    |            |             |                |
    |            |             |                |
====+============+=============+================+======  <-- Bus
    |            |             |                |
    +------------+-------------+----------------+
                 |
    +------------+------------+
    |            |            |
+---+----+  +----+----+  +----+----+
| Address|  |  Data   |  | Control |
|  Bus   |  |   Bus   |  |   Bus   |
+--------+  +---------+  +---------+

The bus is shared by all components
Only one device can transmit at a time`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Buses</h2>
    <p className="leading-relaxed">
      Computer systems utilize three main types of buses, each serving a specific purpose in
      data communication. These buses work together to facilitate complete data transfer
      operations between system components.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Bus Type</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Width</th>
            <th className="p-3 border">Direction</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Address Bus</td>
            <td className="p-3 border">Carries memory addresses from CPU to memory/devices</td>
            <td className="p-3 border">16, 32, or 64 bits</td>
            <td className="p-3 border">Unidirectional (CPU to devices)</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Bus</td>
            <td className="p-3 border">Transfers actual data between components</td>
            <td className="p-3 border">8, 16, 32, or 64 bits</td>
            <td className="p-3 border">Bidirectional</td>
          </tr>
          <tr>
            <td className="p-3 border">Control Bus</td>
            <td className="p-3 border">Carries command, timing, and status signals</td>
            <td className="p-3 border">Variable (typically 4-10 lines)</td>
            <td className="p-3 border">Bidirectional</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Address Bus</h2>
    <p className="leading-relaxed">
      The address bus carries memory addresses that specify the source or destination of data.
      The width of the address bus determines the maximum addressable memory. For example, a
      32-bit address bus can address 2^32 = 4 GB of memory locations.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Address Bus Operation:

CPU wants to read from memory location 0x1A3F:

+-------+                    +--------+
|  CPU  | -- Address: 1A3F ->| Memory |
+-------+                    +--------+

Address Bus Width and Memory Capacity:
+------------+-------------------+
| Bus Width  | Addressable Memory|
+------------+-------------------+
|   16-bit   |    64 KB          |
|   20-bit   |     1 MB          |
|   24-bit   |    16 MB          |
|   32-bit   |     4 GB          |
|   36-bit   |    64 GB          |
|   64-bit   |    16 EB          |
+------------+-------------------+

Formula: Addressable Memory = 2^(bus width) bytes`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Data Bus</h2>
    <p className="leading-relaxed">
      The data bus carries the actual data being transferred between the CPU, memory, and I/O
      devices. It is bidirectional, meaning data can flow in both directions. The width of the
      data bus determines how much data can be transferred in a single operation.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Data Bus Operation:

Read Operation (Memory to CPU):
+-------+                    +--------+
|  CPU  | <-- Data: 0xFF42 --|Memory  |
+-------+                    +--------+

Write Operation (CPU to Memory):
+-------+                    +--------+
|  CPU  | -- Data: 0x5A3B -->| Memory |
+-------+                    +--------+

Data Bus Width and Transfer Rate:
+------------+----------------------+
| Bus Width  | Data per Transfer   |
+------------+----------------------+
|    8-bit   |   1 byte            |
|   16-bit   |   2 bytes           |
|   32-bit   |   4 bytes           |
|   64-bit   |   8 bytes           |
|  128-bit   |  16 bytes           |
+------------+----------------------+

Throughput = Bus Width x Bus Frequency`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Control Bus</h2>
    <p className="leading-relaxed">
      The control bus carries signals that coordinate and manage the activities of all
      components. These signals include read/write commands, interrupt requests, clock signals,
      and bus arbitration signals.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Common Control Bus Signals:

Signal          Direction     Purpose
-------         ---------     -------
Read (RD)       CPU -> Mem    Initiate memory read
Write (WR)      CPU -> Mem    Initiate memory write
Clock (CLK)     System-wide   Synchronization timing
Reset (RST)     System-wide   System initialization
IRQ             Device -> CPU Interrupt request
IORQ            CPU -> I/O    I/O operation request
MEMRQ           CPU -> Mem    Memory operation request
BUSRQ           Device -> CPU Bus access request
BUSAK           CPU -> Device Bus access granted
WAIT            Device -> CPU Extend bus cycle

Memory Read Timing:
        ____      ____      ____      ____
CLK  __|    |____|    |____|    |____|    |

ADDR ====X========ADDRESS VALID==========X===
            ___________________________
MEMRQ _____|                           |____
            ___________________________
RD    _____|                           |____

DATA ============X===DATA VALID===X==========`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Bus Characteristics</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristic</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Impact</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Bus Width</td>
            <td className="p-3 border">Number of parallel data lines</td>
            <td className="p-3 border">More width = more data per transfer</td>
          </tr>
          <tr>
            <td className="p-3 border">Bus Speed (Frequency)</td>
            <td className="p-3 border">Rate of data transfers per second</td>
            <td className="p-3 border">Higher speed = faster throughput</td>
          </tr>
          <tr>
            <td className="p-3 border">Bus Bandwidth</td>
            <td className="p-3 border">Width x Frequency = MB/s</td>
            <td className="p-3 border">Total data transfer capacity</td>
          </tr>
          <tr>
            <td className="p-3 border">Multiplexing</td>
            <td className="p-3 border">Sharing lines for address/data</td>
            <td className="p-3 border">Reduces pins but adds latency</td>
          </tr>
          <tr>
            <td className="p-3 border">Synchronous/Asynchronous</td>
            <td className="p-3 border">Clock-based vs handshake-based</td>
            <td className="p-3 border">Affects timing and compatibility</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Bus Hierarchy</h2>
    <p className="leading-relaxed">
      Modern computers use a hierarchical bus structure with different buses operating at
      different speeds. This allows high-speed components to communicate quickly while
      maintaining compatibility with slower peripherals.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Modern Bus Hierarchy:

+-------+          +---------+
|  CPU  |<-------->|  Cache  |     (Processor Bus: ~4 GHz)
+---+---+          +---------+
    |
    |  Front Side Bus / QPI / HyperTransport
    v
+---+-------------------+
|    Memory Controller  |-----------> RAM (Memory Bus)
+---+-------------------+
    |
    |  DMI / QPI
    v
+---+-------------+
|    PCH/Chipset  |
+---+---+---------+
    |   |
    |   +---> PCIe x16 -----> Graphics Card
    |
    +-------> PCIe x4 ------> NVMe SSD
    |
    +-------> USB ----------> External Devices
    |
    +-------> SATA ----------> Hard Drives
    |
    +-------> Audio/Network -> Peripherals

Speed decreases as you move down the hierarchy`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Bus Arbitration</h2>
    <p className="leading-relaxed">
      Since multiple devices share the bus, a mechanism is needed to determine which device
      can use the bus at any given time. Bus arbitration prevents conflicts when multiple
      devices want to communicate simultaneously.
    </p>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-2">
      <li>
        <strong>Centralized Arbitration:</strong> A central arbiter (usually the CPU or a
        dedicated controller) grants bus access based on priority or round-robin scheduling.
      </li>
      <li>
        <strong>Distributed Arbitration:</strong> Devices collectively determine bus access
        through protocols like CSMA/CD or token passing without a central controller.
      </li>
      <li>
        <strong>Daisy Chain:</strong> Bus grant signal passes through devices in sequence;
        first requesting device gets access.
      </li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Common Bus Standards</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Bus Standard</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Max Bandwidth</th>
            <th className="p-3 border">Usage</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">PCIe 4.0 x16</td>
            <td className="p-3 border">Expansion</td>
            <td className="p-3 border">64 GB/s</td>
            <td className="p-3 border">Graphics cards, SSDs</td>
          </tr>
          <tr>
            <td className="p-3 border">PCIe 5.0 x16</td>
            <td className="p-3 border">Expansion</td>
            <td className="p-3 border">128 GB/s</td>
            <td className="p-3 border">High-end GPUs, NVMe</td>
          </tr>
          <tr>
            <td className="p-3 border">DDR5</td>
            <td className="p-3 border">Memory</td>
            <td className="p-3 border">~51 GB/s per channel</td>
            <td className="p-3 border">System RAM</td>
          </tr>
          <tr>
            <td className="p-3 border">USB 4.0</td>
            <td className="p-3 border">External</td>
            <td className="p-3 border">40 Gbps</td>
            <td className="p-3 border">Peripherals, displays</td>
          </tr>
          <tr>
            <td className="p-3 border">SATA III</td>
            <td className="p-3 border">Storage</td>
            <td className="p-3 border">6 Gbps</td>
            <td className="p-3 border">HDDs, SSDs</td>
          </tr>
          <tr>
            <td className="p-3 border">Thunderbolt 4</td>
            <td className="p-3 border">External</td>
            <td className="p-3 border">40 Gbps</td>
            <td className="p-3 border">Docks, displays, storage</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages of Bus Architecture</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Cost Effective:</strong> Shared communication path reduces wiring complexity</li>
      <li><strong>Modularity:</strong> Easy to add or remove devices without major changes</li>
      <li><strong>Standardization:</strong> Common interfaces allow interoperability</li>
      <li><strong>Simplicity:</strong> Single pathway simplifies system design</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Disadvantages of Bus Architecture</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Bandwidth Limitation:</strong> All devices share the same bandwidth</li>
      <li><strong>Bottleneck:</strong> Bus can become a performance bottleneck</li>
      <li><strong>Contention:</strong> Multiple devices compete for bus access</li>
      <li><strong>Single Point of Failure:</strong> Bus failure affects all connected devices</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>A bus is a shared communication pathway connecting computer components</li>
        <li>Three main types: Address Bus (location), Data Bus (content), Control Bus (commands)</li>
        <li>Address bus width determines maximum addressable memory (2^width bytes)</li>
        <li>Data bus width determines how much data transfers per operation</li>
        <li>Bus bandwidth = Bus Width x Bus Frequency</li>
        <li>Modern systems use hierarchical bus structures with varying speeds</li>
        <li>Bus arbitration mechanisms prevent conflicts when multiple devices need access</li>
        <li>Common standards include PCIe, USB, SATA, and Thunderbolt</li>
      </ul>
    </div>
  </div>
);

export default BusArchitecture;
