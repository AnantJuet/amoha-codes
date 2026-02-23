import React from 'react';

const SystemBus: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      System Bus Structure
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The system bus is the primary communication pathway in a computer that connects the
      central processing unit (CPU) to main memory and other major system components. It
      serves as the backbone of data transfer within the computer, enabling the processor
      to access memory, communicate with I/O devices, and coordinate system operations.
      Understanding the system bus structure is essential for comprehending how modern
      computers transfer and process information.
    </p>

    <h2 className="text-3xl font-bold mt-8">System Bus Overview</h2>
    <p className="leading-relaxed">
      The system bus, also known as the front-side bus (FSB) in older architectures or the
      processor bus, is the fastest bus in the computer. It operates at the processor's
      external clock speed and handles communication between the CPU, memory controller,
      and other high-speed components. In modern systems, this has evolved into more
      sophisticated interconnects like Intel's QPI/UPI or AMD's Infinity Fabric.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`System Bus Structure:

+-------------+     +-------------+     +-------------+
|    CPU      |     |   Memory    |     |    I/O      |
|  +-------+  |     |  Controller |     |  Controller |
|  | Core  |  |     |             |     |             |
|  +-------+  |     +------+------+     +------+------+
|  | Cache |  |            |                   |
|  +-------+  |            |                   |
+------+------+            |                   |
       |                   |                   |
=======+==================+===================+==========
       |          SYSTEM BUS                   |
=======+==================+===================+==========
       |                   |                   |
   +---+---+           +---+---+          +----+----+
   |Address|           | Data  |          | Control |
   | Lines |           | Lines |          |  Lines  |
   +-------+           +-------+          +---------+
   32/64 bit           64/128 bit         ~20 lines

All three sub-buses operate in coordination`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Components of the System Bus</h2>
    <p className="leading-relaxed">
      The system bus comprises three functional groups of signal lines, each serving a
      distinct purpose in the data transfer process. These components work together to
      complete every memory and I/O operation.
    </p>

    <h3 className="text-2xl font-semibold mt-6">1. Address Lines</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Function</td>
            <td className="p-3 border">Specify memory location or I/O port for data transfer</td>
          </tr>
          <tr>
            <td className="p-3 border">Direction</td>
            <td className="p-3 border">Unidirectional (CPU outputs address)</td>
          </tr>
          <tr>
            <td className="p-3 border">Width</td>
            <td className="p-3 border">32-bit (4GB) or 64-bit (16EB theoretical)</td>
          </tr>
          <tr>
            <td className="p-3 border">Signals</td>
            <td className="p-3 border">A0-A31 or A0-A63 (individual address bits)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Data Lines</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Function</td>
            <td className="p-3 border">Carry actual data between CPU and memory/devices</td>
          </tr>
          <tr>
            <td className="p-3 border">Direction</td>
            <td className="p-3 border">Bidirectional (read and write operations)</td>
          </tr>
          <tr>
            <td className="p-3 border">Width</td>
            <td className="p-3 border">64-bit or 128-bit in modern systems</td>
          </tr>
          <tr>
            <td className="p-3 border">Signals</td>
            <td className="p-3 border">D0-D63 or D0-D127 (individual data bits)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Control Lines</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Signal</th>
            <th className="p-3 border">Direction</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">MEMR# (Memory Read)</td>
            <td className="p-3 border">CPU → Memory</td>
            <td className="p-3 border">Signals a memory read operation</td>
          </tr>
          <tr>
            <td className="p-3 border">MEMW# (Memory Write)</td>
            <td className="p-3 border">CPU → Memory</td>
            <td className="p-3 border">Signals a memory write operation</td>
          </tr>
          <tr>
            <td className="p-3 border">IOR# (I/O Read)</td>
            <td className="p-3 border">CPU → I/O</td>
            <td className="p-3 border">Signals an I/O port read</td>
          </tr>
          <tr>
            <td className="p-3 border">IOW# (I/O Write)</td>
            <td className="p-3 border">CPU → I/O</td>
            <td className="p-3 border">Signals an I/O port write</td>
          </tr>
          <tr>
            <td className="p-3 border">IRQ (Interrupt Request)</td>
            <td className="p-3 border">Device → CPU</td>
            <td className="p-3 border">Device requests CPU attention</td>
          </tr>
          <tr>
            <td className="p-3 border">CLOCK</td>
            <td className="p-3 border">System</td>
            <td className="p-3 border">Synchronizes all bus operations</td>
          </tr>
          <tr>
            <td className="p-3 border">RESET</td>
            <td className="p-3 border">System</td>
            <td className="p-3 border">Initializes all components</td>
          </tr>
          <tr>
            <td className="p-3 border">READY</td>
            <td className="p-3 border">Memory/Device → CPU</td>
            <td className="p-3 border">Indicates data transfer completion</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Bus Cycle Operations</h2>
    <p className="leading-relaxed">
      A bus cycle is a complete sequence of events required to transfer data between the CPU
      and memory or I/O devices. The system bus supports four primary types of bus cycles.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Memory Read Cycle:
                 T1      T2      T3      T4
              |-------|-------|-------|-------|
CLK     ______/       \_______/       \_______/

ADDR    ======X=====ADDRESS VALID=====X======
                      ___________________
MEMR#   _____________|                   |____

DATA    =============X====DATA VALID====X=====

READY   ______________/''''''''''''''''\______


Memory Write Cycle:
                 T1      T2      T3      T4
              |-------|-------|-------|-------|
CLK     ______/       \_______/       \_______/

ADDR    ======X=====ADDRESS VALID=====X======

DATA    ======X=====DATA FROM CPU=====X======
                      ___________________
MEMW#   _____________|                   |____

READY   ______________/''''''''''''''''\______`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">System Bus Timing</h2>
    <p className="leading-relaxed">
      System bus timing is crucial for proper data transfer. All operations are synchronized
      to the system clock, and timing parameters must be carefully managed to ensure reliable
      communication.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Timing Parameter</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Typical Value</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Setup Time</td>
            <td className="p-3 border">Time data must be stable before clock edge</td>
            <td className="p-3 border">5-10 ns</td>
          </tr>
          <tr>
            <td className="p-3 border">Hold Time</td>
            <td className="p-3 border">Time data must remain stable after clock edge</td>
            <td className="p-3 border">1-5 ns</td>
          </tr>
          <tr>
            <td className="p-3 border">Access Time</td>
            <td className="p-3 border">Time for memory to provide valid data</td>
            <td className="p-3 border">10-70 ns</td>
          </tr>
          <tr>
            <td className="p-3 border">Bus Cycle Time</td>
            <td className="p-3 border">Total time for one complete bus operation</td>
            <td className="p-3 border">2-4 clock cycles</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Evolution of System Bus Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Historical Evolution:

1. Traditional FSB Architecture (Pre-2008):
   +-------+          +----------+
   |  CPU  |<--FSB--->| Northbridge |<---> Memory
   +-------+          +-----+-----+
                            |
                      +-----+-----+
                      | Southbridge |<---> I/O Devices
                      +-----------+

2. Integrated Memory Controller (2008+):
   +----------------+
   |      CPU       |
   | +------------+ |
   | |    IMC     |-+---------> DDR Memory
   | +------------+ |
   +-------+--------+
           |
           | DMI/QPI
           v
   +----------------+
   |      PCH       |<---> PCIe, USB, SATA
   +----------------+

3. Modern Chiplet Architecture (2019+):
   +----------------------------------+
   |              CPU Package         |
   | +------+  +------+  +--------+   |
   | | Core |  | Core |  | Memory |   |
   | |Chiplet| |Chiplet| |Controller|---> DDR5
   | +--+---+  +--+---+  +--------+   |
   |    |         |                   |
   |    +----+----+                   |
   |         |                        |
   |    +----+----+                   |
   |    | I/O Die |                   |
   |    +---------+                   |
   +--------+-------------------------+
            |
            v
        PCIe 5.0, USB4, etc.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Modern System Interconnects</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Interconnect</th>
            <th className="p-3 border">Vendor</th>
            <th className="p-3 border">Bandwidth</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">QPI (QuickPath)</td>
            <td className="p-3 border">Intel</td>
            <td className="p-3 border">Up to 25.6 GB/s</td>
            <td className="p-3 border">CPU-to-CPU communication</td>
          </tr>
          <tr>
            <td className="p-3 border">UPI (Ultra Path)</td>
            <td className="p-3 border">Intel</td>
            <td className="p-3 border">Up to 41.6 GB/s</td>
            <td className="p-3 border">Multi-socket servers</td>
          </tr>
          <tr>
            <td className="p-3 border">Infinity Fabric</td>
            <td className="p-3 border">AMD</td>
            <td className="p-3 border">Up to 100+ GB/s</td>
            <td className="p-3 border">Chiplet interconnect</td>
          </tr>
          <tr>
            <td className="p-3 border">HyperTransport</td>
            <td className="p-3 border">AMD (Legacy)</td>
            <td className="p-3 border">Up to 51.2 GB/s</td>
            <td className="p-3 border">CPU-chipset link</td>
          </tr>
          <tr>
            <td className="p-3 border">DMI 4.0</td>
            <td className="p-3 border">Intel</td>
            <td className="p-3 border">Up to 16 GB/s</td>
            <td className="p-3 border">CPU to PCH link</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Bus Performance Metrics</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Calculating Bus Performance:

1. Bus Bandwidth (Theoretical Maximum):
   Bandwidth = Bus Width x Frequency x Transfers per Cycle

   Example: DDR5-6400
   Width = 64 bits = 8 bytes
   Frequency = 3200 MHz (base clock)
   Transfers = 2 (Double Data Rate)

   Bandwidth = 8 bytes x 3200 MHz x 2 = 51.2 GB/s per channel

2. Effective Bandwidth (Practical):
   Effective = Theoretical x Efficiency Factor
   Efficiency typically 60-80% due to:
   - Protocol overhead
   - Wait states
   - Address/control cycles
   - Refresh cycles (for DRAM)

3. Latency Components:
   Total Latency = CPU Setup + Bus Transfer + Memory Access + Return

   Typical Memory Access (DDR5):
   - CAS Latency: 36-40 cycles
   - Total latency: 60-80 ns`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Bus Mastering and DMA</h2>
    <p className="leading-relaxed">
      Bus mastering allows devices other than the CPU to control the system bus and initiate
      data transfers. Direct Memory Access (DMA) is a specific form of bus mastering that
      enables devices to transfer data directly to/from memory without CPU intervention.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`DMA Transfer Process:

1. Device requests bus control (BUSRQ)
2. CPU completes current cycle and releases bus (BUSAK)
3. DMA controller becomes bus master
4. DMA transfers data directly: Device <--> Memory
5. DMA releases bus, CPU resumes

Without DMA (Programmed I/O):
+------+       +--------+       +--------+
| CPU  |<----->| Memory |       | Device |
+------+       +--------+       +--------+
   ^                                |
   |________________________________|
   Each byte goes through CPU - SLOW!

With DMA:
+------+       +--------+       +--------+
| CPU  |       | Memory |<----->| Device |
+------+       +--------+       +--------+
   |              ^                 ^
   |              |_________________|
   |                    DMA
   +---- (CPU free for other work)

DMA is essential for high-speed devices:
- Hard drives, SSDs
- Network cards
- Graphics cards
- Sound cards`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>The system bus connects CPU, memory, and I/O components as the primary data pathway</li>
        <li>It consists of three parts: Address lines, Data lines, and Control lines</li>
        <li>Address bus is unidirectional; Data bus is bidirectional</li>
        <li>Control signals coordinate read/write operations and system timing</li>
        <li>Bus cycles follow strict timing requirements synchronized to the system clock</li>
        <li>Modern systems have evolved from FSB to integrated memory controllers</li>
        <li>Current interconnects include Intel UPI, AMD Infinity Fabric, and PCIe</li>
        <li>DMA allows devices to transfer data without CPU involvement</li>
        <li>Bus bandwidth depends on width, frequency, and transfers per cycle</li>
      </ul>
    </div>
  </div>
);

export default SystemBus;
