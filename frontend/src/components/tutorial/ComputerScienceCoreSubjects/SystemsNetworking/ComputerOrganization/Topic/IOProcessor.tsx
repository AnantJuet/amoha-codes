import React from 'react';

const IOProcessor: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      I/O Processor
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An I/O Processor (IOP), also known as a channel or Data Channel, is a specialized
      processor designed to handle input/output operations independently of the main CPU.
      It has its own instruction set optimized for I/O operations and can execute I/O
      programs stored in memory, providing maximum CPU freedom for computational tasks.
    </p>

    <h2 className="text-3xl font-bold mt-8">Evolution of I/O Handling</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`I/O Technique Evolution:

1. Programmed I/O
   CPU involvement: 100% (polling)
   CPU does everything

2. Interrupt-Driven I/O
   CPU involvement: Per transfer
   CPU handles each byte/word

3. DMA (Direct Memory Access)
   CPU involvement: Setup + completion
   DMA controller handles block transfers

4. I/O Processor (Channel)
   CPU involvement: Start I/O program
   IOP handles complex I/O operations

   CPU Freedom: Programmed I/O < Interrupt < DMA < I/O Processor
                     0%           ~90%      ~99%     ~100%`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">I/O Processor Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`I/O Processor System Architecture:

+-------------+                              +-------------+
|             |  Start I/O                   |             |
|    CPU      |----------------------------->|    IOP      |
|             |                              | (Channel)   |
|             |<-----------------------------|             |
+------+------+  I/O Complete Interrupt      +------+------+
       |                                            |
       |                                            |
=======|============================================|======= System Bus
       |                                            |
+------+------+                              +------+------+
|             |                              |   Device    |
|   Memory    |<---------------------------->| Controller  |
|             |   Data Transfer              |             |
+-------------+                              +------+------+
                                                    |
                                             +------+------+
                                             |   I/O       |
                                             |  Devices    |
                                             +-------------+

Components:
- CPU: Initiates I/O, processes data
- IOP: Executes I/O programs, manages devices
- Memory: Stores programs, data, I/O command lists
- Device Controller: Interfaces with physical devices`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">IOP Components</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`I/O Processor Internal Structure:

+----------------------------------------------------------+
|                    I/O Processor                          |
|                                                           |
|  +----------------+      +--------------------+           |
|  | Control Unit   |      | Channel Address    |           |
|  | (Fetch/Execute |      | Word (CAW)         |           |
|  |  I/O commands) |      +--------------------+           |
|  +----------------+                                       |
|                                                           |
|  +----------------+      +--------------------+           |
|  | ALU            |      | Channel Command    |           |
|  | (Address calc, |      | Word (CCW)         |           |
|  |  count update) |      +--------------------+           |
|  +----------------+                                       |
|                                                           |
|  +----------------+      +--------------------+           |
|  | Registers      |      | Channel Status     |           |
|  | - Data buffer  |      | Word (CSW)         |           |
|  | - Address reg  |      +--------------------+           |
|  | - Count reg    |                                       |
|  +----------------+                                       |
|                                                           |
|  +------------------------------------------------+      |
|  |           Device Interface Logic                |      |
|  +------------------------------------------------+      |
+----------------------------------------------------------+

Key Registers:
- CAW: Points to start of channel program in memory
- CCW: Current command being executed
- CSW: Status information for CPU`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Channel Commands</h2>
    <p className="leading-relaxed">
      The IOP executes channel programs consisting of Channel Command Words (CCWs).
      Each CCW specifies an I/O operation to perform.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Channel Command Word (CCW) Format:

+--------+--------+------------------+--------+------------+
| Op Code| Flags  |  Data Address    | unused | Byte Count |
+--------+--------+------------------+--------+------------+
  8 bits   8 bits      24 bits         8 bits    16 bits

Op Codes (examples):
  01 = Write (memory to device)
  02 = Read (device to memory)
  03 = Control (send control command)
  04 = Sense (read device status)
  08 = Transfer in Channel (branch)

Flags:
  CD = Chain Data (continue with same command)
  CC = Chain Command (execute next CCW)
  SLI = Suppress Length Indication
  SKIP = Skip data transfer (positioning)
  PCI = Program Controlled Interrupt

Example Channel Program (Read 3 records):

Memory Address    CCW Content
+--------------+----------------------------------------+
|    1000      | Read, CC, Data_Addr=2000, Count=100   |
|    1008      | Read, CC, Data_Addr=2100, Count=100   |
|    1016      | Read,     Data_Addr=2200, Count=100   |
+--------------+----------------------------------------+

Execution:
1. Read 100 bytes to address 2000
2. Read 100 bytes to address 2100 (chained)
3. Read 100 bytes to address 2200 (last, no chain)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of I/O Channels</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Selector Channel</h3>
    <p className="leading-relaxed">
      Dedicated to a single high-speed device at a time. Provides maximum data transfer
      rate but can only service one device during a transfer.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Selector Channel:

+----------+
| Selector |-----> Disk Drive 1
| Channel  |-----> Disk Drive 2  (only one active at a time)
|          |-----> Tape Drive
+----------+

Characteristics:
- High-speed burst transfers
- Device holds channel for entire operation
- Best for block-oriented devices (disk, tape)
- One I/O operation at a time

Timeline:
Channel: [Disk1 Transfer][Wait][Disk2 Transfer][Wait]
                ^-- Device 2 must wait`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Multiplexor Channel</h3>
    <p className="leading-relaxed">
      Can handle multiple slow-speed devices simultaneously by interleaving their
      transfers. Suitable for character-oriented devices.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Multiplexor Channel (Byte Multiplexor):

+-------------+
| Multiplexor |-----> Terminal 1
|   Channel   |-----> Terminal 2   (all can be active)
|             |-----> Printer
|             |-----> Card Reader
+-------------+

Characteristics:
- Interleaves byte transfers from multiple devices
- Suitable for slow, character-oriented devices
- Each device gets time slice
- Lower per-device bandwidth

Timeline:
Channel: [T1][T2][P][T1][CR][T2][T1][P]...
         ^   ^   ^  ^   ^
         Interleaved bytes from devices

Subchannels:
- Each device has a subchannel
- Subchannel maintains device state
- Channel switches between active subchannels`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Block Multiplexor Channel</h3>
    <p className="leading-relaxed">
      Combines features of both selector and multiplexor channels. Can interleave
      block transfers from multiple high-speed devices.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Block Multiplexor Channel:

+----------------+
| Block          |-----> Disk 1
| Multiplexor    |-----> Disk 2    (multiple can be active)
| Channel        |-----> Tape 1
+----------------+

Characteristics:
- Interleaves blocks (not bytes)
- Supports multiple high-speed devices
- Device releases channel between blocks
- Higher throughput than byte multiplexor

Timeline:
Disk 1: [Block1]...............[Block2]...............
Disk 2: .......[Block1]...............[Block2].......
Channel: [D1B1][D2B1][D1B2][D2B2][D1B3]...
          ^--- Interleaved blocks

Best for:
- Multiple disk drives
- RAID arrays
- High-throughput storage systems`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">I/O Processor Operation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`IOP Operation Sequence:

1. CPU Initiates I/O:
   - CPU loads CAW with channel program address
   - CPU executes Start I/O instruction
   - CPU continues with other work

2. IOP Fetches Channel Program:
   - IOP reads CAW to get program address
   - IOP fetches first CCW from memory

3. IOP Executes Commands:
   - Decode CCW operation code
   - Select specified device
   - Perform data transfer
   - Update address and count registers
   - Fetch next CCW if chained

4. IOP Signals Completion:
   - Store Channel Status Word (CSW)
   - Generate interrupt to CPU
   - CPU processes completion

CPU                              IOP                    Device
 |                                |                        |
 |-- Start I/O ------------------>|                        |
 |                                |                        |
 |   (CPU continues working)      |-- Select Device ------>|
 |                                |                        |
 |                                |<- Device Ready --------|
 |                                |                        |
 |                                |<=> Data Transfer <====>|
 |                                |                        |
 |<- I/O Interrupt ---------------|                        |
 |                                |                        |
 |-- Read CSW ------------------->|                        |
 |                                |                        |`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Channel Status Word (CSW)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Channel Status Word Format:

+------------------+--------+--------+------------------+
|   Key/Reserved   | Status | Status |  Residual Count  |
|                  | (Chan) |(Device)|                  |
+------------------+--------+--------+------------------+
      16 bits        8 bits   8 bits      16 bits

Channel Status Bits:
- Program Check: Invalid CCW format
- Protection Check: Memory protection violation
- Channel Data Check: Data error during transfer
- Channel Control Check: Interface error
- Interface Control Check: Device interface error
- Chaining Check: Error in command chaining

Device Status Bits:
- Attention: Device needs attention
- Status Modifier: Modified completion status
- Control Unit End: Control unit finished
- Busy: Device is busy
- Channel End: Channel operation complete
- Device End: Device operation complete
- Unit Check: Device error occurred
- Unit Exception: Unusual condition

Residual Count:
- Number of bytes NOT transferred
- Zero if transfer completed normally
- Non-zero indicates short transfer or error`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of I/O Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Programmed I/O</th>
            <th className="p-3 border">DMA</th>
            <th className="p-3 border">I/O Processor</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">CPU Involvement</td>
            <td className="p-3 border">Every byte</td>
            <td className="p-3 border">Setup/Complete</td>
            <td className="p-3 border">Start only</td>
          </tr>
          <tr>
            <td className="p-3 border">Intelligence</td>
            <td className="p-3 border">CPU provides</td>
            <td className="p-3 border">Simple counting</td>
            <td className="p-3 border">Full processor</td>
          </tr>
          <tr>
            <td className="p-3 border">Operations</td>
            <td className="p-3 border">One at a time</td>
            <td className="p-3 border">One transfer</td>
            <td className="p-3 border">Complex programs</td>
          </tr>
          <tr>
            <td className="p-3 border">Error Handling</td>
            <td className="p-3 border">CPU handles</td>
            <td className="p-3 border">CPU handles</td>
            <td className="p-3 border">IOP can retry</td>
          </tr>
          <tr>
            <td className="p-3 border">Hardware Cost</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border">Best For</td>
            <td className="p-3 border">Simple devices</td>
            <td className="p-3 border">Block transfers</td>
            <td className="p-3 border">Complex I/O</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Modern I/O Processors</h2>
    <p className="leading-relaxed">
      Modern systems incorporate I/O processor concepts in various forms:
    </p>

    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>RAID Controllers:</strong> Manage multiple disks with their own processor</li>
      <li><strong>Network Interface Cards:</strong> TCP/IP offload engines</li>
      <li><strong>Graphics Processors:</strong> Handle display output independently</li>
      <li><strong>Storage Controllers:</strong> SAS/SATA/NVMe host bus adapters</li>
      <li><strong>Smart NICs:</strong> Programmable network processing</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>I/O Processor is a specialized processor for handling I/O operations</li>
        <li>IOP executes channel programs stored in memory (CCW chains)</li>
        <li>CPU initiates I/O and receives completion interrupt</li>
        <li>Selector channels service one high-speed device at a time</li>
        <li>Multiplexor channels interleave multiple slow devices</li>
        <li>Block multiplexor combines high speed with interleaving</li>
        <li>Channel Status Word reports completion status and errors</li>
        <li>IOP provides maximum CPU freedom for computation</li>
        <li>Modern devices incorporate IOP concepts (RAID, NIC offload)</li>
      </ul>
    </div>
  </div>
);

export default IOProcessor;
