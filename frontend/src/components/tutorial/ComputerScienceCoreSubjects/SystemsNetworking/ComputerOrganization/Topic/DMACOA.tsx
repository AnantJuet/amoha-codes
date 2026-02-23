import React from 'react';

const DMACOA: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Direct Memory Access (DMA)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Direct Memory Access (DMA) is a technique that allows peripheral devices to transfer
      data directly to or from memory without continuous CPU involvement. A dedicated DMA
      controller takes over the system bus and manages the data transfer, freeing the CPU
      to perform other tasks. DMA is essential for high-speed data transfer operations.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why DMA is Needed</h2>
    <p className="leading-relaxed">
      With programmed I/O or interrupt-driven I/O, the CPU must be involved in every data
      transfer. For high-speed devices like disk drives or network cards, this creates a
      significant bottleneck and wastes CPU cycles on simple data movement operations.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Data Transfer Comparison:

Without DMA (Interrupt-driven):
+-----+                    +--------+                  +--------+
| CPU |<--Read Data------->| Device |    (Per Byte)   | Memory |
+-----+                    +--------+                  +--------+
   |                                                      ^
   +------------------Write Data------------------------->|

CPU must handle every byte: Read from device -> Write to memory

With DMA:
+-----+    1. Setup        +----------+                +--------+
| CPU |------------------->| DMA      |<--Data-------->| Device |
+-----+                    |Controller|                +--------+
   |                       +----+-----+
   |                            |
   |    4. Interrupt            v Direct Transfer
   |<---------------------------|
                           +--------+
                           | Memory |
                           +--------+

DMA controller handles entire transfer; CPU only sets up and receives done signal`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DMA Controller Components</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`DMA Controller Block Diagram:

+----------------------------------------------------------+
|                   DMA Controller                          |
|                                                           |
|  +----------------+    +----------------+                 |
|  | Address        |    | Word Count     |                 |
|  | Register       |    | Register       |                 |
|  +----------------+    +----------------+                 |
|         |                    |                            |
|         v                    v                            |
|  +----------------+    +----------------+                 |
|  | Address        |    | Control        |                 |
|  | Counter        |    | Logic          |                 |
|  +----------------+    +----------------+                 |
|         |                    |                            |
|  +------+--------------------+------+                     |
|  |           Bus Interface          |                     |
|  +----------------------------------+                     |
|      |         |         |         |                      |
+------|---------|---------|---------|----------------------+
       v         v         v         v
   Address    Data     Control    DRQ/DACK
    Bus       Bus       Bus      (Handshake)

Key Registers:
1. Memory Address Register (MAR): Starting address in memory
2. Word Count Register (WCR): Number of bytes/words to transfer
3. Control Register: Transfer direction, mode settings
4. Status Register: Current state, errors, completion`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DMA Transfer Modes</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Burst Mode (Block Transfer)</h3>
    <p className="leading-relaxed">
      The DMA controller takes control of the bus and transfers the entire block of data
      at once. The CPU is completely blocked during the transfer.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Burst Mode Transfer:

Bus Control: CPU | DMA ============= DMA ============= DMA | CPU
                 |                                         |
Data:            |<-- Byte1 -- Byte2 -- ... -- ByteN ----->|
                 |         Continuous Transfer             |

Timeline:
CPU: [Run][Wait][Wait][Wait][Wait][Wait][Wait][Wait][Run]
DMA:      [Byte1][Byte2][Byte3][Byte4]...[ByteN]

Advantages:
- Fastest transfer rate
- Efficient for large blocks

Disadvantages:
- CPU blocked for entire transfer
- High latency for other operations`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Cycle Stealing Mode</h3>
    <p className="leading-relaxed">
      The DMA controller transfers one byte/word at a time, stealing single bus cycles
      from the CPU. The CPU is briefly paused for each transfer.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Cycle Stealing Mode:

Bus Control: CPU|DMA|CPU|DMA|CPU|DMA|CPU|DMA|CPU|DMA|CPU
                |   |   |   |   |   |   |   |   |   |
Data:           |B1 |   |B2 |   |B3 |   |B4 |   |B5 |

Timeline:
CPU: [Run][Stall][Run][Stall][Run][Stall][Run][Stall][Run]
DMA:      [Byte1]     [Byte2]     [Byte3]     [Byte4]

Advantages:
- CPU can continue working (partially)
- Lower latency for CPU operations

Disadvantages:
- Slower overall transfer rate
- Overhead of bus arbitration`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Transparent Mode</h3>
    <p className="leading-relaxed">
      The DMA controller only transfers data when the CPU is not using the bus. This has
      zero impact on CPU performance but requires careful timing detection.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Transparent Mode:

Bus Usage:   CPU | idle | CPU | idle | CPU | idle | CPU
                 |      |     |      |     |      |
DMA:             | Byte1|     | Byte2|     | Byte3|

DMA operates only during CPU idle cycles (internal operations)

Advantages:
- No CPU performance impact
- Completely transparent to software

Disadvantages:
- Slowest transfer rate
- Depends on CPU idle cycles
- Complex timing detection needed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DMA Operation Sequence</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`DMA Transfer Sequence:

1. Initialization (CPU programs DMA controller):
   CPU:  Write memory start address to MAR
         Write byte count to WCR
         Write transfer direction to Control Register
         Enable DMA channel

2. Device Ready (Device requests DMA service):
   Device: Assert DRQ (DMA Request) line

3. Bus Request (DMA requests bus from CPU):
   DMA:   Assert HOLD/BR (Bus Request) to CPU
   CPU:   Complete current bus cycle
          Assert HLDA/BG (Bus Grant)
          Tri-state address/data/control lines

4. Data Transfer (DMA controls the bus):
   DMA:   Put memory address on address bus
          Generate read/write signals
          Transfer data between device and memory
          Increment address counter
          Decrement word counter

5. Transfer Complete:
   DMA:   Release bus (negate HOLD)
          Assert interrupt to CPU
   CPU:   Resume normal operation
          Optionally service completion interrupt

Signal Timing:
         ________
DRQ     |        |_________________
             ____
HOLD    ____|    |_________________
                  ____
HLDA    _________|    |____________
                       ____________
Transfer ______________|            |
                              _____
INT     _____________________|     |`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">8237 DMA Controller</h2>
    <p className="leading-relaxed">
      The Intel 8237 is a classic DMA controller used in PC architecture. It provides
      four independent DMA channels with various transfer modes.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`8237 DMA Controller:

+----------------------------------------------------+
|                    8237 DMAC                        |
|                                                     |
| Channel 0: +--------+ +--------+ +--------+         |
|            | MAR    | | WCR    | | Mode   |         |
|            +--------+ +--------+ +--------+         |
| Channel 1: +--------+ +--------+ +--------+         |
|            | MAR    | | WCR    | | Mode   |         |
|            +--------+ +--------+ +--------+         |
| Channel 2: +--------+ +--------+ +--------+         |
|            | MAR    | | WCR    | | Mode   |         |
|            +--------+ +--------+ +--------+         |
| Channel 3: +--------+ +--------+ +--------+         |
|            | MAR    | | WCR    | | Mode   |         |
|            +--------+ +--------+ +--------+         |
|                                                     |
| Shared:    +--------+ +--------+ +--------+         |
|            |Command | | Status | |Request |         |
|            +--------+ +--------+ +--------+         |
+----------------------------------------------------+

PC DMA Channel Assignments:
Channel 0: Memory refresh (or free)
Channel 1: Available (sound cards)
Channel 2: Floppy disk controller
Channel 3: Available (parallel port)
Channel 4: Cascade (for second controller)
Channel 5: Available (sound cards)
Channel 6: Available
Channel 7: Available

Transfer Types:
- Verify transfer (no actual data movement)
- Write transfer (I/O to memory)
- Read transfer (memory to I/O)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DMA Configurations</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Single Bus DMA</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Single Bus DMA Configuration:

+-----+          +-------+          +--------+
| CPU |          | DMAC  |          | Device |
+--+--+          +---+---+          +----+---+
   |                 |                   |
   +-----------------+-------------------+---- System Bus
                     |
              +------+------+
              |   Memory    |
              +-------------+

Data Path: Device <-> DMAC <-> Memory
- DMAC connects to system bus
- Device transfers through DMAC
- Simple but DMAC can be bottleneck`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Separate I/O Bus DMA</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Separate I/O Bus DMA Configuration:

+-----+          +-------+
| CPU |          | DMAC  |
+--+--+          +---+---+
   |                 |
   +-----------------+------------------ System Bus
                     |                       |
              +------+------+          +-----+-----+
              |   Memory    |          |   Device  |
              +-------------+          +-----------+
                                            |
                                       +----+----+
                                       | I/O Bus |
                                       +---------+

Data Path: Device -> I/O Bus -> DMAC -> System Bus -> Memory
- Separate bus for I/O devices
- Reduces contention on system bus`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Fly-By DMA</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Fly-By DMA Configuration:

+-----+          +-------+          +--------+
| CPU |          | DMAC  |          | Device |
+--+--+          +---+---+          +----+---+
   |                 |                   |
   +-----------------+-------------------+---- System Bus
                                         |
                                  +------+------+
                                  |   Memory    |
                                  +-------------+

Data flows directly: Device <-> Memory
DMAC provides: Address, Control signals only

- Most efficient: Data doesn't pass through DMAC
- Single bus cycle per transfer
- DMAC only controls, doesn't buffer data`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DMA Transfer Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Transfer Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Application</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Memory to I/O</td>
            <td className="p-3 border">Read from memory, write to device</td>
            <td className="p-3 border">Disk write, network transmit</td>
          </tr>
          <tr>
            <td className="p-3 border">I/O to Memory</td>
            <td className="p-3 border">Read from device, write to memory</td>
            <td className="p-3 border">Disk read, network receive</td>
          </tr>
          <tr>
            <td className="p-3 border">Memory to Memory</td>
            <td className="p-3 border">Copy data between memory locations</td>
            <td className="p-3 border">Buffer copying, memory fill</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">DMA Programming Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Setting Up DMA Transfer (8237 Example):

; Read 512 bytes from floppy to memory at 0x10000
; Using Channel 2

; 1. Disable channel during setup
    MOV  AL, 0x06          ; Mask channel 2
    OUT  0x0A, AL

; 2. Clear byte pointer flip-flop
    OUT  0x0C, AL          ; Any value clears

; 3. Set memory address (0x10000)
    MOV  AL, 0x00          ; Low byte of address
    OUT  0x04, AL          ; Channel 2 address
    MOV  AL, 0x00          ; High byte
    OUT  0x04, AL
    MOV  AL, 0x01          ; Page register (bits 16-23)
    OUT  0x81, AL

; 4. Set transfer count (512 - 1 = 511)
    MOV  AL, 0xFF          ; Low byte (511 & 0xFF)
    OUT  0x05, AL          ; Channel 2 count
    MOV  AL, 0x01          ; High byte (511 >> 8)
    OUT  0x05, AL

; 5. Set mode (single mode, write to memory, auto-init off)
    MOV  AL, 0x46          ; Mode: 01 00 01 10
    OUT  0x0B, AL          ; Channel 2 mode

; 6. Enable channel
    MOV  AL, 0x02          ; Unmask channel 2
    OUT  0x0A, AL

; 7. Wait for completion interrupt or poll status
wait_dma:
    IN   AL, 0x08          ; Read status register
    TEST AL, 0x04          ; Test TC for channel 2
    JZ   wait_dma          ; Loop until complete`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">CPU free during data transfer</td>
            <td className="p-3 border">Additional hardware complexity</td>
          </tr>
          <tr>
            <td className="p-3 border">High-speed transfers possible</td>
            <td className="p-3 border">Memory address limitations</td>
          </tr>
          <tr>
            <td className="p-3 border">Efficient for large data blocks</td>
            <td className="p-3 border">Bus contention issues</td>
          </tr>
          <tr>
            <td className="p-3 border">Better system throughput</td>
            <td className="p-3 border">Cache coherency challenges</td>
          </tr>
          <tr>
            <td className="p-3 border">Reduces interrupt overhead</td>
            <td className="p-3 border">Setup overhead for small transfers</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>DMA allows data transfer between memory and devices without CPU involvement</li>
        <li>DMA controller manages address generation and bus control</li>
        <li>Three transfer modes: Burst, Cycle Stealing, and Transparent</li>
        <li>Burst mode is fastest but blocks CPU; Cycle stealing allows CPU to run</li>
        <li>DMA uses HOLD/HLDA handshaking to acquire bus from CPU</li>
        <li>8237 provides 4 DMA channels with various modes</li>
        <li>Fly-by DMA is most efficient with direct device-to-memory path</li>
        <li>DMA is essential for high-speed devices like disks and network cards</li>
        <li>Modern systems use bus mastering DMA integrated into devices</li>
      </ul>
    </div>
  </div>
);

export default DMACOA;
