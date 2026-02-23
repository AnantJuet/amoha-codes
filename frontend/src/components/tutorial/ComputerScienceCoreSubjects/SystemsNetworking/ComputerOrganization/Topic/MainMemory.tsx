import React from 'react';

const MainMemory: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Main Memory
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Main memory, also known as primary memory or RAM (Random Access Memory), is the
      computer's primary working memory where currently executing programs and their
      data are stored. It is directly accessible by the CPU and provides much faster
      access than secondary storage, though it is volatile and loses its contents
      when power is removed.
    </p>

    <h2 className="text-3xl font-bold mt-8">Characteristics of Main Memory</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Volatile:</strong> Contents lost when power is turned off</li>
      <li><strong>Random Access:</strong> Any location accessible in constant time</li>
      <li><strong>Read/Write:</strong> Both reading and writing operations supported</li>
      <li><strong>Directly Addressable:</strong> CPU can access any byte directly</li>
      <li><strong>Fast Access:</strong> Typically 50-100 ns access time</li>
      <li><strong>Limited Size:</strong> Smaller than secondary storage (typically 4-128 GB)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Main Memory Organization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory Organization:

             Address Bus (n bits)
                    |
                    v
            +---------------+
            |   Address     |
            |   Decoder     |
            +-------+-------+
                    |
                    v
    +-------------------------------+
    |        Memory Array           |
    |  +--+--+--+--+--+--+--+--+   |
    |  |  |  |  |  |  |  |  |  |   | Row 0
    |  +--+--+--+--+--+--+--+--+   |
    |  |  |  |  |  |  |  |  |  |   | Row 1
    |  +--+--+--+--+--+--+--+--+   |
    |  |  |  |  |  |  |  |  |  |   | Row 2
    |  +--+--+--+--+--+--+--+--+   |
    |            ...               |
    |  +--+--+--+--+--+--+--+--+   |
    |  |  |  |  |  |  |  |  |  |   | Row 2^n-1
    |  +--+--+--+--+--+--+--+--+   |
    +-------------------------------+
                    |
                    v
             Data Bus (m bits)

Address Space:
- n-bit address -> 2^n addressable locations
- Each location stores m bits (typically 8 bits = 1 byte)
- Total capacity = 2^n x m bits

Example:
- 32-bit address bus -> 2^32 = 4 GB addressable
- 64-bit address bus -> 2^64 = 16 EB addressable (theoretical)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Cell Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Basic Memory Cell:

DRAM Cell (1 Transistor + 1 Capacitor):

    Word Line (Row Select)
           |
           v
    +------+------+
    |             |
    |   +-----+   |
    |   |MOSFET|   |
    |   +--+--+   |
    |      |      |
    |   +--+--+   |
    |   | Cap |   |  <- Stores charge (1 or 0)
    |   +-----+   |
    |             |
    +------+------+
           |
    Bit Line (Data)

SRAM Cell (6 Transistors):

    Word Line
        |
    +---+---+
    |       |
   T1      T2    <- Access transistors
    |       |
  +-+-+   +-+-+
  |   |   |   |
  | Inverter |   <- Cross-coupled inverters
  | pair     |   <- (4 transistors)
  |   |   |   |
  +-+-+   +-+-+
    |       |
   BL      BL'   <- Bit lines (complementary)

SRAM: Faster, more power, larger cell (cache)
DRAM: Slower, less power, smaller cell (main memory)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Read Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory Read Cycle:

    CPU                          Memory

1. CPU places address on Address Bus
   +--------+    Address    +--------+
   |  CPU   |-------------->| Memory |
   +--------+               +--------+

2. CPU asserts Read signal
   +--------+    Read=1     +--------+
   |  CPU   |-------------->| Memory |
   +--------+               +--------+

3. Memory decodes address, reads data
   +--------+               +--------+
   |  CPU   |               | Memory |
   |        |               | (read) |
   +--------+               +--------+

4. Memory places data on Data Bus
   +--------+     Data      +--------+
   |  CPU   |<--------------| Memory |
   +--------+               +--------+

5. CPU latches data, deasserts Read

Timing Diagram:
CLK     __|--|__|--|__|--|__|--|__|--|__

Address ____/  Valid Address  \\______

Read    ______/            \\________

Data    ________/  Valid Data  \\____

           <-- Access Time -->`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Write Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory Write Cycle:

1. CPU places address on Address Bus
2. CPU places data on Data Bus
3. CPU asserts Write signal
4. Memory latches address and data
5. Memory writes data to specified location
6. CPU deasserts Write signal

Timing Diagram:
CLK     __|--|__|--|__|--|__|--|__|--|__

Address ____/    Valid Address    \\____

Data    ____/    Valid Data       \\____

Write   ________/          \\__________

            <-- Write Cycle -->

Write Protection:
- Some memory regions can be protected
- Operating system marks pages read-only
- Hardware generates exception on write attempt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Interleaving</h2>
    <p className="leading-relaxed">
      Memory interleaving distributes consecutive addresses across multiple memory
      modules (banks) to allow parallel access and improve bandwidth.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory Interleaving:

Low-Order Interleaving (Address Bit Selection):
Address bits: [High bits | Low bits]
Low bits select bank, high bits select within bank

4-Way Interleaving:
Address  | Bank | Word within Bank
---------|------|------------------
  0000   |  00  |      00
  0001   |  01  |      00
  0010   |  10  |      00
  0011   |  11  |      00
  0100   |  00  |      01
  0101   |  01  |      01
   ...   | ...  |     ...

Structure:
                    Address
                       |
          +------------+------------+
          |            |            |
          v            v            v
      +-------+    +-------+    +-------+
      | Bank 0|    | Bank 1|    | Bank 2|
      +-------+    +-------+    +-------+
          |            |            |
          +------------+------------+
                       |
                      MUX
                       |
                       v
                     Data

Benefit:
- Sequential addresses in different banks
- Banks can operate in parallel
- Increased effective bandwidth
- Hides memory latency for sequential access`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Modules</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory Module Types:

SIMM (Single In-line Memory Module):
- 72 pins, 32-bit data path
- Contacts on one side
- Older technology (obsolete)

DIMM (Dual In-line Memory Module):
- 168-288 pins, 64-bit data path
- Contacts on both sides (different signals)
- Current standard for desktops/servers

SO-DIMM (Small Outline DIMM):
- 200-260 pins, 64-bit data path
- Smaller form factor
- Used in laptops

Memory Module Organization:
+------------------------------------------+
|  DIMM                                    |
|  +----+ +----+ +----+ +----+ +----+      |
|  |Chip| |Chip| |Chip| |Chip| |Chip|      |
|  | 0  | | 1  | | 2  | | 3  | | 4  |  ... |
|  +----+ +----+ +----+ +----+ +----+      |
|                                          |
|  +----+ +----+ +----+ +----+ +----+      |
|  |Chip| |Chip| |Chip| |Chip| |Chip|      |
|  | 8  | | 9  | | 10 | | 11 | | 12 |  ... |
|  +----+ +----+ +----+ +----+ +----+      |
|                                          |
|  | | | | | | | | | | | | | | | | | | | | |
+------------------------------------------+
   Contacts (pins)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Timing Parameters</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Parameter</th>
            <th className="p-3 border">Symbol</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Typical Value</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">CAS Latency</td>
            <td className="p-3 border">CL</td>
            <td className="p-3 border">Column address to data delay</td>
            <td className="p-3 border">14-22 cycles</td>
          </tr>
          <tr>
            <td className="p-3 border">RAS to CAS Delay</td>
            <td className="p-3 border">tRCD</td>
            <td className="p-3 border">Row activate to column access</td>
            <td className="p-3 border">14-22 cycles</td>
          </tr>
          <tr>
            <td className="p-3 border">Row Precharge</td>
            <td className="p-3 border">tRP</td>
            <td className="p-3 border">Time to close row</td>
            <td className="p-3 border">14-22 cycles</td>
          </tr>
          <tr>
            <td className="p-3 border">Row Active Time</td>
            <td className="p-3 border">tRAS</td>
            <td className="p-3 border">Minimum row active time</td>
            <td className="p-3 border">32-52 cycles</td>
          </tr>
          <tr>
            <td className="p-3 border">Refresh Interval</td>
            <td className="p-3 border">tREFI</td>
            <td className="p-3 border">Time between refresh cycles</td>
            <td className="p-3 border">7.8 us</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Controller</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory Controller Functions:

    CPU                Memory Controller              DRAM

+--------+     +-------------------------+     +--------+
|        |     |   Request Queue         |     |        |
|        |---->|   Address Translation   |---->| Bank 0 |
|        |     |   Bank Selection        |     +--------+
|  CPU   |     |   Row/Column Decode     |     +--------+
|        |     |   Refresh Management    |---->| Bank 1 |
|        |<----|   Timing Control        |     +--------+
|        |     |   Data Buffering        |     +--------+
+--------+     |   Error Correction      |---->| Bank 2 |
               +-------------------------+     +--------+

Controller Operations:
1. Receives memory requests from CPU/Cache
2. Translates virtual to physical addresses
3. Schedules requests to maximize throughput
4. Generates RAS, CAS, WE signals
5. Manages DRAM refresh cycles
6. Handles ECC (Error Correcting Code)
7. Buffers data between CPU and DRAM

Modern Integration:
- Memory controller integrated into CPU (IMC)
- Reduces latency vs discrete controller
- Intel: Since Nehalem (2008)
- AMD: Since K8 (2003)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Standards Evolution</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Standard</th>
            <th className="p-3 border">Year</th>
            <th className="p-3 border">Speed</th>
            <th className="p-3 border">Bandwidth</th>
            <th className="p-3 border">Voltage</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">SDR SDRAM</td>
            <td className="p-3 border">1993</td>
            <td className="p-3 border">66-133 MHz</td>
            <td className="p-3 border">1 GB/s</td>
            <td className="p-3 border">3.3V</td>
          </tr>
          <tr>
            <td className="p-3 border">DDR</td>
            <td className="p-3 border">2000</td>
            <td className="p-3 border">200-400 MT/s</td>
            <td className="p-3 border">3.2 GB/s</td>
            <td className="p-3 border">2.5V</td>
          </tr>
          <tr>
            <td className="p-3 border">DDR2</td>
            <td className="p-3 border">2003</td>
            <td className="p-3 border">400-1066 MT/s</td>
            <td className="p-3 border">8.5 GB/s</td>
            <td className="p-3 border">1.8V</td>
          </tr>
          <tr>
            <td className="p-3 border">DDR3</td>
            <td className="p-3 border">2007</td>
            <td className="p-3 border">800-2133 MT/s</td>
            <td className="p-3 border">17 GB/s</td>
            <td className="p-3 border">1.5V</td>
          </tr>
          <tr>
            <td className="p-3 border">DDR4</td>
            <td className="p-3 border">2014</td>
            <td className="p-3 border">2133-3200 MT/s</td>
            <td className="p-3 border">25.6 GB/s</td>
            <td className="p-3 border">1.2V</td>
          </tr>
          <tr>
            <td className="p-3 border">DDR5</td>
            <td className="p-3 border">2020</td>
            <td className="p-3 border">4800-8400 MT/s</td>
            <td className="p-3 border">67 GB/s</td>
            <td className="p-3 border">1.1V</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Main memory is volatile RAM directly accessible by CPU</li>
        <li>Provides random access - any location in constant time</li>
        <li>Organized as array of addressable locations (bytes)</li>
        <li>DRAM used for main memory (smaller cells, needs refresh)</li>
        <li>Memory interleaving improves bandwidth through parallel access</li>
        <li>Memory controller manages timing, refresh, and scheduling</li>
        <li>DDR technology doubles data rate with double-pumped bus</li>
        <li>Each DDR generation improves speed, bandwidth, and efficiency</li>
      </ul>
    </div>
  </div>
);

export default MainMemory;
