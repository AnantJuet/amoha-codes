import React from 'react';

const RAMTypes: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      RAM Types: SRAM, DRAM, and SDRAM
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Random Access Memory (RAM) is volatile memory that allows data to be read and written
      in any order, regardless of the physical location. There are several types of RAM,
      each with different architectures, performance characteristics, and use cases.
      The main categories are SRAM (Static RAM), DRAM (Dynamic RAM), and SDRAM (Synchronous DRAM).
    </p>

    <h2 className="text-3xl font-bold mt-8">Static RAM (SRAM)</h2>
    <p className="leading-relaxed">
      SRAM stores data using bistable latching circuitry (flip-flops). Each bit is stored
      in a cell made of multiple transistors (typically 6), which maintains its state
      as long as power is supplied without needing refresh cycles.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`SRAM Cell Structure (6-Transistor Cell):

                    VDD
                     |
        +------------+------------+
        |                         |
     +--+--+                   +--+--+
     |     |                   |     |
     | P1  |                   | P2  |  <- PMOS (pull-up)
     |     |                   |     |
     +--+--+                   +--+--+
        |                         |
        +----+           +--------+
        |    |           |        |
     +--+--+ |           |     +--+--+
     |     | |           |     |     |
     | N1  +-+-----------+-+   | N2  |  <- NMOS (pull-down)
     |     | |   Cross   | |   |     |
     +--+--+ |  coupled  | |   +--+--+
        |    |           |        |
        +----+-----------+--------+
        |                         |
     +--+--+                   +--+--+
     |     |                   |     |
     | N3  |                   | N4  |  <- Access transistors
     |     |                   |     |
     +--+--+                   +--+--+
        |                         |
       BL                        BL'
    (Bit Line)            (Bit Line Bar)
                    |
              Word Line (WL)

Operation:
- WL high: N3, N4 conduct, cell connected to bit lines
- Read: Sense amplifier detects voltage difference on BL/BL'
- Write: Drive BL/BL' to desired values, overwrite cell`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">SRAM Characteristics</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Fast Access:</strong> 1-10 ns typical access time</li>
      <li><strong>No Refresh:</strong> Static storage, no periodic refresh needed</li>
      <li><strong>Low Density:</strong> 6 transistors per cell, larger area</li>
      <li><strong>Higher Power:</strong> More transistors, higher static power</li>
      <li><strong>More Expensive:</strong> Due to complexity and size</li>
      <li><strong>Used For:</strong> CPU caches (L1, L2, L3), register files</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Dynamic RAM (DRAM)</h2>
    <p className="leading-relaxed">
      DRAM stores each bit in a tiny capacitor within an integrated circuit. The capacitor
      can be charged or discharged to represent 1 or 0. Because capacitors leak charge,
      DRAM requires periodic refresh cycles to maintain data integrity.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`DRAM Cell Structure (1-Transistor, 1-Capacitor):

    Word Line (WL)
         |
         |
      +--+--+
      |     |
      |MOSFET|    <- Access transistor
      |     |
      +--+--+
         |
      +--+--+
      |     |
      | Cap |    <- Storage capacitor
      |     |    (Stores 1 or 0 as charge)
      +--+--+
         |
        GND
         |
    Bit Line (BL)

Read Operation:
1. Precharge bit line to VDD/2
2. Assert word line (WL high)
3. Charge sharing between capacitor and bit line
4. Sense amplifier detects small voltage change
5. Restore: Write back the read value (destructive read)

Write Operation:
1. Drive bit line to desired value (VDD or 0)
2. Assert word line
3. Capacitor charges/discharges through transistor

Refresh:
- Capacitor leaks charge over time
- Must refresh every 64ms (typical)
- Read and write back each row periodically
- Refresh steals memory bandwidth`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">DRAM Characteristics</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Slower Access:</strong> 50-100 ns typical access time</li>
      <li><strong>Requires Refresh:</strong> Periodic refresh every 64ms</li>
      <li><strong>High Density:</strong> 1 transistor + 1 capacitor per cell, very compact</li>
      <li><strong>Lower Power:</strong> Fewer transistors, less static power</li>
      <li><strong>Less Expensive:</strong> Simple structure, high density</li>
      <li><strong>Used For:</strong> Main memory (RAM modules)</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">SRAM vs DRAM Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">SRAM</th>
            <th className="p-3 border">DRAM</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Cell Structure</td>
            <td className="p-3 border">6 Transistors (6T)</td>
            <td className="p-3 border">1T + 1C</td>
          </tr>
          <tr>
            <td className="p-3 border">Access Time</td>
            <td className="p-3 border">1-10 ns</td>
            <td className="p-3 border">50-100 ns</td>
          </tr>
          <tr>
            <td className="p-3 border">Refresh</td>
            <td className="p-3 border">Not required</td>
            <td className="p-3 border">Required (64ms)</td>
          </tr>
          <tr>
            <td className="p-3 border">Density</td>
            <td className="p-3 border">Low (large cells)</td>
            <td className="p-3 border">High (small cells)</td>
          </tr>
          <tr>
            <td className="p-3 border">Power</td>
            <td className="p-3 border">Higher (static)</td>
            <td className="p-3 border">Lower (but refresh)</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost per Bit</td>
            <td className="p-3 border">Higher</td>
            <td className="p-3 border">Lower</td>
          </tr>
          <tr>
            <td className="p-3 border">Typical Use</td>
            <td className="p-3 border">Cache memory</td>
            <td className="p-3 border">Main memory</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Synchronous DRAM (SDRAM)</h2>
    <p className="leading-relaxed">
      SDRAM synchronizes all operations with the system clock, allowing the memory controller
      to know exactly when data will be available. This enables pipelining and burst transfers,
      significantly improving performance over asynchronous DRAM.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`SDRAM Operation:

Asynchronous DRAM:
CLK     __|--|__|--|__|--|__|--|__|--|__

Request ____/----------\\________________

Data    ____________/ ? /_______________
                   (Variable timing)

Synchronous DRAM:
CLK     __|--|__|--|__|--|__|--|__|--|__
           1    2    3    4    5    6

Request ____/----\\______________________

Data    ________________/----\\__________
                        (Fixed timing, synchronized to clock)

SDRAM Timing:
- All operations aligned to clock edges
- CAS Latency (CL): Clock cycles from column address to data
- Burst mode: Multiple data words from single request

Example CL=3:
Cycle 1: Column address provided
Cycle 2: Internal processing
Cycle 3: Internal processing
Cycle 4: Data available on bus

Burst Transfer (Burst Length = 4):
CLK     _|--|_|--|_|--|_|--|_|--|_|--|_|--|_

Addr    ___/----\\________________________

Data    ____________/D0/D1/D2/D3\\________
                     (4 words in 4 cycles)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DDR SDRAM Evolution</h2>
    <p className="leading-relaxed">
      DDR (Double Data Rate) SDRAM transfers data on both the rising and falling edges
      of the clock, effectively doubling the data rate without increasing clock frequency.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`SDR vs DDR Transfer:

SDR (Single Data Rate):
CLK     ___|-----|_____|-----|_____|-----|_____
Data    ___/ D0  \\______/ D1  \\______/ D2  \\___
        (One transfer per cycle)

DDR (Double Data Rate):
CLK     ___|-----|_____|-----|_____|-----|_____
Data    ___/D0/D1\\______/D2/D3\\______/D4/D5\\___
        (Two transfers per cycle)

DDR Memory Prefetch:

DDR1: 2n prefetch (2 bits per clock)
  Internal: 100 MHz
  I/O: 200 MT/s (100 MHz x 2)

DDR2: 4n prefetch (4 bits per clock)
  Internal: 100 MHz
  I/O: 400 MT/s (100 MHz x 4)

DDR3: 8n prefetch (8 bits per clock)
  Internal: 100 MHz
  I/O: 800 MT/s (100 MHz x 8)

DDR4: 8n prefetch (improved architecture)
  Internal: 200 MHz
  I/O: 3200 MT/s (200 MHz x 2 x 8)

DDR5: 16n prefetch (two independent channels)
  I/O: 4800-8400 MT/s`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DDR Generations Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">DDR3</th>
            <th className="p-3 border">DDR4</th>
            <th className="p-3 border">DDR5</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Prefetch</td>
            <td className="p-3 border">8n</td>
            <td className="p-3 border">8n</td>
            <td className="p-3 border">16n</td>
          </tr>
          <tr>
            <td className="p-3 border">Data Rates</td>
            <td className="p-3 border">800-2133 MT/s</td>
            <td className="p-3 border">2133-3200 MT/s</td>
            <td className="p-3 border">4800-8400 MT/s</td>
          </tr>
          <tr>
            <td className="p-3 border">Voltage</td>
            <td className="p-3 border">1.5V / 1.35V</td>
            <td className="p-3 border">1.2V</td>
            <td className="p-3 border">1.1V</td>
          </tr>
          <tr>
            <td className="p-3 border">Max Capacity</td>
            <td className="p-3 border">8 GB/module</td>
            <td className="p-3 border">64 GB/module</td>
            <td className="p-3 border">128 GB/module</td>
          </tr>
          <tr>
            <td className="p-3 border">Channels</td>
            <td className="p-3 border">1 per DIMM</td>
            <td className="p-3 border">1 per DIMM</td>
            <td className="p-3 border">2 per DIMM</td>
          </tr>
          <tr>
            <td className="p-3 border">Banks</td>
            <td className="p-3 border">8</td>
            <td className="p-3 border">16</td>
            <td className="p-3 border">32</td>
          </tr>
          <tr>
            <td className="p-3 border">ECC</td>
            <td className="p-3 border">Optional</td>
            <td className="p-3 border">Optional</td>
            <td className="p-3 border">On-die ECC</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Specialized DRAM Types</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Other DRAM Variations:

GDDR (Graphics DDR):
- Optimized for graphics cards (GPUs)
- Higher bandwidth, lower latency requirements
- GDDR6: 16 Gbps per pin
- GDDR6X: 21 Gbps per pin (PAM4 signaling)

HBM (High Bandwidth Memory):
- 3D-stacked DRAM dies
- Very wide interface (1024-bit bus)
- Used in high-end GPUs, AI accelerators
- HBM2E: 460 GB/s per stack

LPDDR (Low Power DDR):
- Designed for mobile devices
- Lower voltage, power-efficient
- LPDDR5: 6400 MT/s at 0.5V

RLDRAM (Reduced Latency DRAM):
- Faster random access
- Used in networking equipment
- Higher cost, specialized applications

Comparison:
+--------+----------+-------------+-----------+
| Type   | Use Case | Bandwidth   | Latency   |
+--------+----------+-------------+-----------+
| DDR5   | Desktop  | 51.2 GB/s   | ~80ns     |
| GDDR6X | GPU      | 1 TB/s      | ~100ns    |
| HBM2E  | AI/HPC   | 1.8 TB/s    | ~90ns     |
| LPDDR5 | Mobile   | 51.2 GB/s   | ~100ns    |
+--------+----------+-------------+-----------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Memory Bandwidth Calculation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Bandwidth Calculation:

Formula:
Bandwidth = Data Rate x Bus Width x Number of Channels

Example: DDR4-3200 Dual Channel
- Data Rate: 3200 MT/s (megatransfers per second)
- Bus Width: 64 bits = 8 bytes
- Channels: 2

Bandwidth = 3200 x 8 x 2 = 51,200 MB/s = 50 GB/s

Example: DDR5-4800 Dual Channel
- Data Rate: 4800 MT/s
- Bus Width: 64 bits = 8 bytes (but 2 sub-channels of 32 bits)
- Channels: 2

Bandwidth = 4800 x 8 x 2 = 76,800 MB/s = 75 GB/s

Memory Naming Convention:
DDR4-3200: 3200 MT/s data rate
PC4-25600: 25600 MB/s peak bandwidth (3200 x 8)

DDR5-4800: 4800 MT/s data rate
PC5-38400: 38400 MB/s peak bandwidth (4800 x 8)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>SRAM uses flip-flops (6T cell), fast but expensive, used for cache</li>
        <li>DRAM uses capacitors (1T1C cell), dense and cheap, used for main memory</li>
        <li>DRAM requires periodic refresh; SRAM does not</li>
        <li>SDRAM synchronizes with system clock for predictable timing</li>
        <li>DDR transfers data on both clock edges, doubling effective rate</li>
        <li>Each DDR generation increases speed while reducing voltage</li>
        <li>Specialized variants: GDDR for graphics, HBM for high bandwidth, LPDDR for mobile</li>
        <li>Memory bandwidth depends on data rate, bus width, and channels</li>
      </ul>
    </div>
  </div>
);

export default RAMTypes;
