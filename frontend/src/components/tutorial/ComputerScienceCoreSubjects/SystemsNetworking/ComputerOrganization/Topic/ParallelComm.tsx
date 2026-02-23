import React from 'react';

const ParallelComm: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Parallel Communication
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Parallel communication is a method of data transmission where multiple bits are sent
      simultaneously over multiple parallel wires or channels. This approach allows for
      higher data transfer rates over short distances compared to serial communication
      at the same clock frequency, though it requires more physical connections.
    </p>

    <h2 className="text-3xl font-bold mt-8">Parallel Data Transmission</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Parallel Data Transfer:

Sender                                        Receiver
+--------+   D7 ============================  +--------+
|        |   D6 ============================  |        |
|  Data  |   D5 ============================  |  Data  |
|        |   D4 ============================  |        |
|  Byte  |   D3 ============================  |  Byte  |
|        |   D2 ============================  |        |
|        |   D1 ============================  |        |
|        |   D0 ============================  |        |
+--------+                                    +--------+
             +-- Control Lines --+
             | STROBE, ACK, BUSY |
             +-------------------+

All 8 bits transferred in ONE clock cycle

Timing Diagram:
Clock:  ___|~~~|___|~~~|___|~~~|___

D0-D7:  ===<Byte1>=<Byte2>=<Byte3>===
            ^       ^       ^
            All bits change together

Transfer Rate = Bus Width x Clock Frequency
Example: 8 bits x 10 MHz = 80 Mbps`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parallel Port (IEEE 1284)</h2>
    <p className="leading-relaxed">
      The IEEE 1284 standard defines the parallel port interface commonly used for
      printers and other peripherals in older computer systems.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`DB-25 Parallel Port Pinout:

Pin  Signal      Direction   Description
---  ------      ---------   -----------
1    nStrobe     Output      Data strobe (active low)
2    D0          Output      Data bit 0
3    D1          Output      Data bit 1
4    D2          Output      Data bit 2
5    D3          Output      Data bit 3
6    D4          Output      Data bit 4
7    D5          Output      Data bit 5
8    D6          Output      Data bit 6
9    D7          Output      Data bit 7
10   nAck        Input       Acknowledge
11   Busy        Input       Printer busy
12   PaperEnd    Input       Paper out
13   Select      Input       Printer online
14   nAutoFeed   Output      Auto line feed
15   nError      Input       Error
16   nInit       Output      Initialize printer
17   nSelectIn   Output      Select printer
18-25 Ground     -           Signal ground

Connector View (DB-25 Female):
+-------------------------------------------+
| 13 12 11 10  9  8  7  6  5  4  3  2  1    |
|   25 24 23 22 21 20 19 18 17 16 15 14     |
+-------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parallel Port Modes</h2>

    <h3 className="text-2xl font-semibold mt-6">1. SPP (Standard Parallel Port)</h3>
    <p className="leading-relaxed">
      The original unidirectional parallel port mode supporting output only at speeds
      up to 150 KB/s. Data flows only from computer to peripheral.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`SPP Mode - Centronics Protocol:

Computer                             Printer
    |                                   |
    |------- Data (D0-D7) ------------->|
    |                                   |
    |------- nStrobe (pulse low) ------>|
    |                                   |
    |<------ Busy (high) ---------------|
    |                                   |
    |         Printer processes         |
    |                                   |
    |<------ Busy (low) ----------------|
    |                                   |
    |<------ nAck (pulse low) ----------|
    |                                   |

Timing:
         ______________________________
Data    <______________________________>
               _____
nStrobe  _____|     |__________________
         __________
Busy              |____________________
                        _____
nAck     ______________|     |_________

SPP Characteristics:
- Output only (unidirectional)
- Speed: 50-150 KB/s
- Software controlled timing
- Compatible with all printers`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. EPP (Enhanced Parallel Port)</h3>
    <p className="leading-relaxed">
      Bidirectional mode with hardware handshaking, allowing both input and output
      operations at speeds up to 2 MB/s.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`EPP Mode Operation:

EPP Write Cycle:
1. CPU writes to EPP data port
2. Hardware asserts nWrite and nDataStrobe
3. Peripheral asserts nWait when data accepted
4. Hardware releases nDataStrobe
5. Single ISA cycle completes

EPP Read Cycle:
1. CPU reads from EPP data port
2. Hardware asserts nDataStrobe (nWrite high)
3. Peripheral places data and asserts nWait
4. Hardware reads data and releases nDataStrobe
5. Single ISA cycle completes

EPP Timing:
         _______
nWrite  |       |_________________ (Write)
                __________________ (Read)
             ____
nDataStr ___|    |________________
                  ____
nWait    ________|    |___________
         ____
Data    <____>=<==================

EPP Characteristics:
- Bidirectional operation
- Hardware handshaking
- Speed: 500 KB/s to 2 MB/s
- Used for: Scanners, external drives, network adapters`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. ECP (Extended Capabilities Port)</h3>
    <p className="leading-relaxed">
      Advanced bidirectional mode with DMA support, hardware compression, and FIFO
      buffers for highest performance.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`ECP Mode Features:

+------------------------------------------------+
|                 ECP Port                        |
|                                                 |
|  +----------+    +----------+    +-----------+ |
|  |  16-byte |    |   DMA    |    | RLE       | |
|  |   FIFO   |<-->| Channel  |<-->| Compress  | |
|  +----------+    +----------+    +-----------+ |
|       ^                               ^        |
|       |                               |        |
|   Software                        Hardware     |
|    Access                        Compress      |
+------------------------------------------------+

ECP Data Transfer:
- Uses DMA for CPU-free transfers
- Hardware RLE compression (optional)
- Interrupt on FIFO threshold
- Forward and reverse channels

ECP Channel Address Cycle:
- Sends device address/command
- Separate from data cycle
- Allows peripheral sub-addressing

ECP Modes:
Mode 0: SPP compatibility
Mode 1: Byte mode (bidirectional)
Mode 2: FIFO mode (forward)
Mode 3: ECP mode (bidirectional FIFO)
Mode 4: EPP mode

Speed: Up to 2.5 MB/s with DMA`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of Parallel Port Modes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">SPP</th>
            <th className="p-3 border">EPP</th>
            <th className="p-3 border">ECP</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Direction</td>
            <td className="p-3 border">Output only</td>
            <td className="p-3 border">Bidirectional</td>
            <td className="p-3 border">Bidirectional</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">150 KB/s</td>
            <td className="p-3 border">2 MB/s</td>
            <td className="p-3 border">2.5 MB/s</td>
          </tr>
          <tr>
            <td className="p-3 border">DMA Support</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border">FIFO</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes (16 bytes)</td>
          </tr>
          <tr>
            <td className="p-3 border">Compression</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Optional RLE</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parallel Bus Architectures</h2>

    <h3 className="text-2xl font-semibold mt-6">IDE/PATA (Parallel ATA)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Parallel ATA Interface:

+--------+        40/80-pin cable        +--------+
|        |  D0-D15 ==================    |        |
|  Host  |  Address ==================   | Drive  |
|        |  Control ==================   |        |
+--------+                               +--------+

PATA Characteristics:
- 16-bit data bus
- Speeds: ATA-33 (33 MB/s) to ATA-133 (133 MB/s)
- 40-pin (ATA-33) or 80-conductor cable (ATA-66+)
- Master/Slave configuration
- Maximum cable length: 18 inches

Speed Evolution:
Mode        Transfer Rate
----        -------------
PIO Mode 0     3.3 MB/s
PIO Mode 4    16.7 MB/s
DMA Mode 2    16.7 MB/s
UDMA 33       33.3 MB/s
UDMA 66       66.7 MB/s
UDMA 100     100.0 MB/s
UDMA 133     133.0 MB/s

Note: Replaced by SATA (Serial ATA) in modern systems`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">SCSI (Small Computer System Interface)</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Parallel SCSI:

+------+     +------+     +------+     +------+
| Host |-----| Dev  |-----| Dev  |-----| Dev  |----[Term]
|  ID0 |     |  ID1 |     |  ID2 |     |  ID7 |
+------+     +------+     +------+     +------+
         Daisy-chain bus topology

SCSI Parallel Versions:
Type          Width    Speed      Max Devices
----          -----    -----      -----------
SCSI-1        8-bit    5 MB/s         8
Fast SCSI     8-bit    10 MB/s        8
Wide SCSI    16-bit    20 MB/s       16
Ultra SCSI    8-bit    20 MB/s        8
Ultra Wide   16-bit    40 MB/s       16
Ultra2 Wide  16-bit    80 MB/s       16
Ultra160     16-bit   160 MB/s       16
Ultra320     16-bit   320 MB/s       16

Features:
- Command queuing
- Multiple initiators
- Hot-swappable (some versions)
- Long cable support with LVD`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Signal Integrity Issues</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Parallel Communication Challenges:

1. Signal Skew:
   Different path lengths cause bits to arrive at different times

   Transmitted:  D7 D6 D5 D4 D3 D2 D1 D0
                 |  |  |  |  |  |  |  |
                 v  v  v  v  v  v  v  v
   Received:     D7   D5 D4   D2 D1 D0
                    D6    D3
                    ^      ^
                 Bits arriving late (skew)

2. Crosstalk:
   Signal coupling between adjacent wires

   Wire A: ~~~|__|~~~|__|~~~  (Signal)
   Wire B: ---|~~~---|~~~---  (Induced noise)

3. Electromagnetic Interference (EMI):
   - Multiple switching wires radiate more
   - Cables act as antennas
   - Shielding required

Solutions:
- Shorter cables
- Ground wires between signals
- Differential signaling
- Lower clock speeds
- Or... use serial communication!

Why Serial Won:
At high speeds, parallel problems become severe.
Serial avoids: skew, crosstalk, cable complexity
Modern serial: USB, SATA, PCIe outperform parallel`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parallel Port Programming</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Parallel Port I/O Addresses:

LPT1: 0x378 (Data), 0x379 (Status), 0x37A (Control)
LPT2: 0x278 (Data), 0x279 (Status), 0x27A (Control)

Register Definitions:

Data Register (Base+0) - Read/Write:
  Bits 0-7: D0-D7 data lines

Status Register (Base+1) - Read Only:
  Bit 7: nBusy (inverted)
  Bit 6: nAck
  Bit 5: Paper End
  Bit 4: Select
  Bit 3: nError
  Bits 0-2: Reserved

Control Register (Base+2) - Read/Write:
  Bit 5: Enable Bidirectional
  Bit 4: Enable IRQ
  Bit 3: nSelectIn
  Bit 2: nInit
  Bit 1: nAutoFeed
  Bit 0: nStrobe

Example - Send byte to printer:

send_byte:
    ; Wait for printer ready
wait_ready:
    IN   AL, 0x379         ; Read status
    TEST AL, 0x80          ; Check Busy (inverted)
    JZ   wait_ready        ; Wait if busy

    ; Send data byte
    MOV  AL, [data_byte]
    OUT  0x378, AL         ; Write to data port

    ; Strobe the data
    IN   AL, 0x37A         ; Read control
    OR   AL, 0x01          ; Set strobe
    OUT  0x37A, AL
    AND  AL, 0xFE          ; Clear strobe
    OUT  0x37A, AL

    RET`}
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
            <td className="p-3 border">High bandwidth (same clock)</td>
            <td className="p-3 border">Many wires needed</td>
          </tr>
          <tr>
            <td className="p-3 border">Simple data alignment</td>
            <td className="p-3 border">Signal skew at high speeds</td>
          </tr>
          <tr>
            <td className="p-3 border">No serialization delay</td>
            <td className="p-3 border">Crosstalk problems</td>
          </tr>
          <tr>
            <td className="p-3 border">Easy to implement</td>
            <td className="p-3 border">Short cable distances</td>
          </tr>
          <tr>
            <td className="p-3 border">Mature technology</td>
            <td className="p-3 border">Bulky connectors/cables</td>
          </tr>
          <tr>
            <td className="p-3 border">Good for internal buses</td>
            <td className="p-3 border">EMI radiation</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Parallel communication sends multiple bits simultaneously on separate wires</li>
        <li>IEEE 1284 defines SPP, EPP, and ECP parallel port modes</li>
        <li>SPP is unidirectional; EPP and ECP are bidirectional</li>
        <li>ECP provides DMA support and hardware FIFO for best performance</li>
        <li>Parallel ATA and SCSI were major parallel storage interfaces</li>
        <li>Signal skew and crosstalk limit parallel speed and distance</li>
        <li>Modern systems prefer serial (USB, SATA) over parallel interfaces</li>
        <li>Parallel buses are still used internally (memory bus, PCIe lanes)</li>
        <li>Trade-off: more wires vs simpler timing (compared to serial)</li>
      </ul>
    </div>
  </div>
);

export default ParallelComm;
