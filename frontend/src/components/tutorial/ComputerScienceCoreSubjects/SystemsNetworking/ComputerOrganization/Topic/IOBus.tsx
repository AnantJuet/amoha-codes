import React from 'react';

const IOBus: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      I/O Bus and Interface Modules
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The I/O bus is a communication pathway that connects the CPU, memory, and peripheral devices,
      enabling data transfer between these components. Interface modules are hardware components
      that connect peripheral devices to the I/O bus, managing the communication protocols and
      data format conversions required for proper operation.
    </p>

    <h2 className="text-3xl font-bold mt-8">I/O Bus Architecture</h2>
    <p className="leading-relaxed">
      An I/O bus consists of multiple signal lines organized into three main groups: data lines,
      address lines, and control lines. These work together to facilitate communication between
      the processor and peripheral devices.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`I/O Bus Structure:

+--------+   +--------+   +--------+   +--------+
|  CPU   |   | Memory |   | Device |   | Device |
|        |   |        |   |   1    |   |   2    |
+---+----+   +---+----+   +---+----+   +---+----+
    |            |            |            |
====|============|============|============|======= Data Bus (D0-Dn)
    |            |            |            |
====|============|============|============|======= Address Bus (A0-An)
    |            |            |            |
====|============|============|============|======= Control Bus
    |            |            |            |

Bus Signal Lines:
+------------------+----------------------------------+
| Data Bus         | Bidirectional data transfer     |
| Address Bus      | Device/memory location select   |
| Control Bus      | Read, Write, Clock, Interrupt   |
+------------------+----------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of I/O Buses</h2>

    <h3 className="text-2xl font-semibold mt-6">1. System Bus (Internal Bus)</h3>
    <p className="leading-relaxed">
      Connects the CPU directly to memory and high-speed peripherals. It operates at the
      processor's clock speed and provides the fastest data transfer rates.
    </p>

    <h3 className="text-2xl font-semibold mt-6">2. Expansion Bus (External Bus)</h3>
    <p className="leading-relaxed">
      Connects external peripheral devices to the system. It typically operates at lower
      speeds than the system bus but provides flexibility for adding various devices.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Bus Standard</th>
            <th className="p-3 border">Width</th>
            <th className="p-3 border">Speed</th>
            <th className="p-3 border">Application</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">ISA</td>
            <td className="p-3 border">8/16 bit</td>
            <td className="p-3 border">8 MHz</td>
            <td className="p-3 border">Legacy peripherals</td>
          </tr>
          <tr>
            <td className="p-3 border">PCI</td>
            <td className="p-3 border">32/64 bit</td>
            <td className="p-3 border">33/66 MHz</td>
            <td className="p-3 border">Graphics, Network</td>
          </tr>
          <tr>
            <td className="p-3 border">PCIe x1</td>
            <td className="p-3 border">1 lane</td>
            <td className="p-3 border">250 MB/s (Gen 1)</td>
            <td className="p-3 border">Network cards, SSDs</td>
          </tr>
          <tr>
            <td className="p-3 border">PCIe x16</td>
            <td className="p-3 border">16 lanes</td>
            <td className="p-3 border">16 GB/s (Gen 3)</td>
            <td className="p-3 border">Graphics cards</td>
          </tr>
          <tr>
            <td className="p-3 border">USB 3.0</td>
            <td className="p-3 border">Serial</td>
            <td className="p-3 border">5 Gbps</td>
            <td className="p-3 border">External devices</td>
          </tr>
          <tr>
            <td className="p-3 border">SATA III</td>
            <td className="p-3 border">Serial</td>
            <td className="p-3 border">6 Gbps</td>
            <td className="p-3 border">Storage devices</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Bus Arbitration</h2>
    <p className="leading-relaxed">
      When multiple devices need to use the bus simultaneously, an arbitration mechanism
      determines which device gets access. Common arbitration methods include:
    </p>

    <h3 className="text-2xl font-semibold mt-6">1. Centralized Arbitration</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Daisy Chain Arbitration:

                    +-------------+
                    | Bus Arbiter |
                    +------+------+
                           |
    Bus Grant             _|_
    ------>--------------+   +---->  Device 1
                         | 1 |
                         +---+---->  Device 2
                               |
                               +-->  Device 3 (lowest priority)

Operation:
1. Device requests bus (Bus Request line)
2. Arbiter sends grant signal
3. Grant passes through daisy chain
4. First requesting device captures grant
5. Device uses bus, then releases

Priority: Device 1 > Device 2 > Device 3

Polling Arbitration:

    +-------------+
    | Bus Arbiter |
    +------+------+
           |
    Poll Address (encoded device ID)
           |
    +------+------+------+
    |      |      |      |
   Dev 1  Dev 2  Dev 3  Dev 4

Arbiter polls devices in sequence or by priority`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Distributed Arbitration</h3>
    <p className="leading-relaxed">
      Each device participates in the arbitration process. Devices compare their priority
      on arbitration lines to determine the winner.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Distributed Arbitration (Self-Selection):

    Device A        Device B        Device C
    (ID: 101)       (ID: 110)       (ID: 011)
       |               |               |
       +-------+-------+-------+-------+
               |   Arbitration Lines   |
               +-----------------------+

Process:
1. All requesting devices put ID on arb lines
2. Each device compares its bit with line
3. If device bit is 0 but line is 1, withdraw
4. Highest ID wins arbitration
5. Winner proceeds with bus transaction

Example:
- Device A (101) and B (110) request bus
- Arb line 2: A=1, B=1 -> continue
- Arb line 1: A=0, B=1 -> A withdraws
- Device B wins (110 > 101)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Interface Module Structure</h2>
    <p className="leading-relaxed">
      Interface modules (also called I/O controllers or adapters) contain the necessary
      hardware to connect peripheral devices to the I/O bus.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Interface Module Block Diagram:

+----------------------------------------------------------+
|                    Interface Module                       |
|                                                           |
|  +-----------+    +-------------+    +----------------+   |
|  |   Bus     |    |   Control   |    |    Device      |   |
|  | Interface |<-->|    Logic    |<-->|   Interface    |   |
|  |           |    |             |    |                |   |
|  +-----------+    +-------------+    +----------------+   |
|       ^                 ^                    ^            |
|       |                 |                    |            |
|  +-----------+    +-------------+    +----------------+   |
|  |   Data    |    |   Status    |    |    Control     |   |
|  | Registers |    |  Registers  |    |   Registers    |   |
|  +-----------+    +-------------+    +----------------+   |
|                                                           |
+----------------------------------------------------------+
        |                                       |
   To System Bus                         To Peripheral Device

Components:
1. Bus Interface: Connects to system bus, handles bus protocol
2. Control Logic: Manages operations, handles commands
3. Device Interface: Connects to specific peripheral
4. Data Registers: Buffer for data transfer
5. Status Registers: Current state information
6. Control Registers: Configuration settings`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Bus Timing and Synchronization</h2>

    <h3 className="text-2xl font-semibold mt-6">Synchronous Bus</h3>
    <p className="leading-relaxed">
      All devices on the bus share a common clock signal. Transactions occur at specific
      clock edges, making timing predictable but requiring all devices to operate at
      the same speed.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Synchronous Bus Timing:

CLK     __|~~|__|~~|__|~~|__|~~|__|~~|__|~~|__
           T1    T2    T3    T4    T5    T6
              ___________________________
Address  ___/                           \\___
              Valid Address
                  _______________________
Data Out  _____/                         \\___
                  Valid Data
              ___
RD/WR    ___/   \\_____________________________

              ___________________________
CS       ___/                           \\___

- T1: Address placed on bus
- T2: Read/Write signal activated
- T3-T4: Data transfer
- T5: Signals deactivated
- T6: Bus idle`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Asynchronous Bus</h3>
    <p className="leading-relaxed">
      No common clock; handshaking signals coordinate transfers. This allows devices
      of different speeds to communicate effectively.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Asynchronous Bus Handshaking:

Master                                    Slave
   |                                        |
   |------- Address Valid ----------------->|
   |                                        |
   |------- Master Ready (MSYN) ----------->|
   |                                        |
   |                         (Slave decodes |
   |                          and prepares) |
   |                                        |
   |<------ Slave Ready (SSYN) -------------|
   |                                        |
   |<------ Data Valid ---------------------|
   |                                        |
   | (Master reads data)                    |
   |                                        |
   |------- MSYN Released ----------------->|
   |                                        |
   |<------ SSYN Released ------------------|
   |                                        |

Timing Diagram:
           ____________________
Address  _/                    \\___
              _____________
MSYN     ___|             |________
                       _______
SSYN     _____________|       |____
                       _______
Data     _____________<_______>____`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">PCI Bus Architecture</h2>
    <p className="leading-relaxed">
      The Peripheral Component Interconnect (PCI) bus is a widely used standard for
      connecting peripheral devices to the processor.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`PCI Bus Structure:

+--------+      +-------------+      +--------+
|  CPU   |<---->| PCI Bridge  |<---->|  PCI   |
+--------+      | (Host)      |      |  Bus   |
                +-------------+      +---+----+
                                         |
         +-------------+-------------+---+----+
         |             |             |        |
     +---+---+     +---+---+     +---+---+    |
     | Video |     |Network|     | SCSI  |    |
     | Card  |     | Card  |     | Card  |    |
     +-------+     +-------+     +-------+    |
                                              |
                                    +---------+--------+
                                    |   PCI-to-PCI    |
                                    |     Bridge      |
                                    +---------+--------+
                                              |
                                    +---------+--------+
                                    |  Secondary PCI  |
                                    +------------------+

PCI Signals:
- AD[31:0]: Multiplexed Address/Data
- C/BE[3:0]: Command/Byte Enable
- FRAME#: Transaction frame
- IRDY#: Initiator Ready
- TRDY#: Target Ready
- DEVSEL#: Device Select`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">PCIe (PCI Express)</h2>
    <p className="leading-relaxed">
      PCIe is a high-speed serial bus that replaced parallel PCI buses. It uses
      point-to-point links with multiple lanes for scalable bandwidth.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`PCIe Architecture:

             +------------------+
             |       CPU        |
             +--------+---------+
                      |
             +--------+---------+
             |   Root Complex   |
             +--------+---------+
                      |
     +--------+-------+-------+--------+
     |        |               |        |
+----+----+   |          +----+----+   |
| PCIe    |   |          | PCIe    |   |
| Device  |   |          | Switch  |   |
+---------+   |          +----+----+   |
              |               |        |
         +----+----+     +----+---+----+
         | PCIe    |     |        |
         | Device  |   Device  Device
         +---------+

Lane Configuration:
- x1: 1 lane (250 MB/s Gen1, 1 GB/s Gen3)
- x4: 4 lanes
- x8: 8 lanes
- x16: 16 lanes (Graphics cards)

PCIe Generations:
+------+-------------+---------------+
| Gen  | Per Lane    | x16 Bandwidth |
+------+-------------+---------------+
| 1.0  | 250 MB/s    | 4 GB/s        |
| 2.0  | 500 MB/s    | 8 GB/s        |
| 3.0  | ~1 GB/s     | 16 GB/s       |
| 4.0  | ~2 GB/s     | 32 GB/s       |
| 5.0  | ~4 GB/s     | 64 GB/s       |
+------+-------------+---------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Bus Performance Factors</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Factor</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Impact</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Bus Width</td>
            <td className="p-3 border">Number of data lines</td>
            <td className="p-3 border">More bits per transfer</td>
          </tr>
          <tr>
            <td className="p-3 border">Bus Clock</td>
            <td className="p-3 border">Operating frequency</td>
            <td className="p-3 border">More transfers per second</td>
          </tr>
          <tr>
            <td className="p-3 border">Protocol Overhead</td>
            <td className="p-3 border">Arbitration, addressing time</td>
            <td className="p-3 border">Reduces effective bandwidth</td>
          </tr>
          <tr>
            <td className="p-3 border">Latency</td>
            <td className="p-3 border">Time to start transfer</td>
            <td className="p-3 border">Affects response time</td>
          </tr>
          <tr>
            <td className="p-3 border">Contention</td>
            <td className="p-3 border">Multiple devices competing</td>
            <td className="p-3 border">Reduces throughput</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>I/O bus connects CPU, memory, and peripheral devices for data transfer</li>
        <li>Bus consists of data, address, and control lines</li>
        <li>Bus arbitration resolves conflicts when multiple devices request access</li>
        <li>Centralized arbitration uses a dedicated arbiter; distributed shares decision</li>
        <li>Synchronous buses use common clock; asynchronous use handshaking</li>
        <li>Interface modules handle protocol conversion and buffering</li>
        <li>PCI provides parallel bus architecture for peripherals</li>
        <li>PCIe uses high-speed serial links with scalable lanes</li>
        <li>Bus bandwidth = Bus Width x Clock Frequency x Transfers per Cycle</li>
      </ul>
    </div>
  </div>
);

export default IOBus;
